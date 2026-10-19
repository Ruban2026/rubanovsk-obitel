# Project translation setup

The project translation feature is developed on the `development` branch and does not affect the live `main` branch.

## 1. Supabase

Open the SQL Editor for the existing Supabase project and run the contents of `database/project_translations.sql` once. This creates only the translation cache table; existing projects, ratings, users, and photos are not changed.

## 2. Cloudflare Pages secrets (when the site is moved to Cloudflare)

Set these as server-side environment variables/secrets for the Pages project:

- `SUPABASE_URL` — the existing Supabase project URL.
- `SUPABASE_SERVICE_ROLE_KEY` — the Supabase service-role secret; never put it in browser code or GitHub.
- `GOOGLE_TRANSLATE_API_KEY` — the Google Cloud Translation API key; never put it in browser code or GitHub.

The API route is `functions/api/translate-project.js`. It uses the existing project record, translates only the selected language on demand, and caches the result by project and language. If translation is unavailable, the page continues to show the original text.

Before enabling a billable translation API, configure Google Cloud budget alerts and API quotas. Budget alerts alone do not stop charges, so set a suitable quota as well. The code is not yet end-to-end testable until the SQL is run and the Cloudflare secrets are configured.
