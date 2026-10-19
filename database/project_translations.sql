-- Run this file in the Supabase SQL Editor once.
-- Translation cache is server-only: the Cloudflare Pages Function accesses it
-- with the Supabase service-role key. Do not expose that key in browser code.

create table if not exists public.project_translations (
  project_id uuid not null references public.projects(id) on delete cascade,
  language text not null check (language in ('ru', 'uk', 'en', 'pl', 'de', 'fr')),
  title text not null,
  description text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  primary key (project_id, language)
);

alter table public.project_translations enable row level security;

-- The table is accessed only by the server-side Pages Function.
-- Explicitly grant API access to service_role because automatic exposure of
-- new tables may be disabled in this Supabase project.
grant select, insert, update, delete on public.project_translations to service_role;

-- No anon/authenticated policies or grants are intentionally created.
-- The service-role key bypasses RLS. Deleting a project removes its cached
-- translations automatically through ON DELETE CASCADE.
