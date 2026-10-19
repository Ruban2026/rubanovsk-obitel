const LANGUAGES = new Set(["ru", "uk", "en", "pl", "de", "fr"]);
const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" }
  });
}

async function supabaseRequest(env, path, options = {}) {
  const base = (env.SUPABASE_URL || "").replace(/\/$/, "");
  if (!base || !env.SUPABASE_SERVICE_ROLE_KEY) {
    throw new Error("Supabase server secrets are not configured.");
  }
  return fetch(base + path, {
    ...options,
    headers: {
      apikey: env.SUPABASE_SERVICE_ROLE_KEY,
      Authorization: "Bearer " + env.SUPABASE_SERVICE_ROLE_KEY,
      ...(options.headers || {})
    }
  });
}

export async function onRequestPost({ request, env }) {
  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: "Expected a JSON request body." }, 400);
  }

  const projectId = typeof body.projectId === "string" ? body.projectId : "";
  const language = typeof body.language === "string" ? body.language.toLowerCase() : "";
  if (!UUID_RE.test(projectId) || !LANGUAGES.has(language)) {
    return json({ error: "Invalid project ID or language." }, 400);
  }

  try {
    const cachePath = "/rest/v1/project_translations?select=title,description&project_id=eq."
      + encodeURIComponent(projectId) + "&language=eq." + encodeURIComponent(language) + "&limit=1";
    const cachedResponse = await supabaseRequest(env, cachePath);
    if (!cachedResponse.ok) {
      return json({ error: "Translation cache is not configured. Run database/project_translations.sql in Supabase." }, 503);
    }
    const cached = await cachedResponse.json();
    if (cached.length) {
      return json({ title: cached[0].title, description: cached[0].description, cached: true });
    }

    const projectPath = "/rest/v1/projects?select=id,title,description&id=eq."
      + encodeURIComponent(projectId) + "&limit=1";
    const projectResponse = await supabaseRequest(env, projectPath);
    if (!projectResponse.ok) return json({ error: "Could not read the project." }, 502);
    const projects = await projectResponse.json();
    if (!projects.length) return json({ error: "Project not found." }, 404);
    const project = projects[0];

    if (!env.GOOGLE_TRANSLATE_API_KEY) {
      return json({ error: "Google Translation API key is not configured." }, 503);
    }

    const googleUrl = "https://translation.googleapis.com/language/translate/v2?key="
      + encodeURIComponent(env.GOOGLE_TRANSLATE_API_KEY);
    const googleResponse = await fetch(googleUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ q: [project.title, project.description], target: language, format: "text" })
    });
    const googleData = await googleResponse.json();
    if (!googleResponse.ok || !googleData.data || !Array.isArray(googleData.data.translations)
        || googleData.data.translations.length < 2) {
      return json({ error: "Translation provider request failed." }, 502);
    }

    const titleResult = googleData.data.translations[0];
    const descriptionResult = googleData.data.translations[1];
    const title = titleResult.detectedSourceLanguage === language
      ? project.title : titleResult.translatedText;
    const description = descriptionResult.detectedSourceLanguage === language
      ? project.description : descriptionResult.translatedText;

    if (title === project.title && description === project.description) {
      return json({ title: project.title, description: project.description, cached: false });
    }

    const upsertPath = "/rest/v1/project_translations?on_conflict=project_id,language";
    const saveResponse = await supabaseRequest(env, upsertPath, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Prefer: "resolution=merge-duplicates,return=minimal"
      },
      body: JSON.stringify({
        project_id: projectId,
        language,
        title,
        description,
        updated_at: new Date().toISOString()
      })
    });
    if (!saveResponse.ok) return json({ error: "Translation was created but could not be cached." }, 502);
    return json({ title, description, cached: false });
  } catch {
    return json({ error: "Unexpected translation service error." }, 500);
  }
}
