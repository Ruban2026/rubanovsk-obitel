-- Настройка управляемых меток карты Рубановска.
-- Выполни этот файл один раз в Supabase: SQL Editor -> New query -> Run.

create table if not exists public.map_markers (
  id uuid primary key default gen_random_uuid(),
  place text not null unique,
  title text not null check (length(trim(title)) between 1 and 120),
  description text not null default '',
  x double precision not null check (x >= 0 and x <= 100),
  y double precision not null check (y >= 0 and y <= 100),
  created_at timestamptz not null default now()
);

-- Не позволяем удалить метку, пока к ней привязаны проекты.
-- Проекты и их фотографии не удаляются автоматически.
create or replace function public.prevent_map_marker_delete_with_projects()
returns trigger
language plpgsql
as $function$
begin
  if exists (
    select 1
    from public.projects
    where place = old.place
  ) then
    raise exception 'MAP_MARKER_HAS_PROJECTS: projects are still attached to this marker'
      using errcode = '23503';
  end if;

  return old;
end;
$function$;

drop trigger if exists prevent_map_marker_delete_with_projects on public.map_markers;
create trigger prevent_map_marker_delete_with_projects
before delete on public.map_markers
for each row
execute function public.prevent_map_marker_delete_with_projects();

alter table public.map_markers enable row level security;

grant select on public.map_markers to anon, authenticated;
grant insert, update, delete on public.map_markers to authenticated;

drop policy if exists "Anyone can read map markers" on public.map_markers;
create policy "Anyone can read map markers"
on public.map_markers for select
to anon, authenticated
using (true);

drop policy if exists "Admins can add map markers" on public.map_markers;
create policy "Admins can add map markers"
on public.map_markers for insert
to authenticated
with check ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');

drop policy if exists "Admins can move map markers" on public.map_markers;
create policy "Admins can move map markers"
on public.map_markers for update
to authenticated
using ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin')
with check ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');

drop policy if exists "Admins can delete map markers" on public.map_markers;
create policy "Admins can delete map markers"
on public.map_markers for delete
to authenticated
using ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');

insert into public.map_markers (place, title, description, x, y)
values
  ('pond', 'Пруд', 'Водоём — один из заметных природных объектов территории. Здесь можно собирать предложения по бережному использованию и сохранению прибрежной зоны.', 34, 57),
  ('green-zone', 'Зелёная зона', 'Участок с деревьями и садами. Жители могут предложить идеи по уходу за зелёными насаждениями и улучшению проходов.', 49, 48),
  ('roads', 'Существующие дороги', 'Дорожная сеть связывает разные части территории. Здесь можно обсуждать удобство прохода, доступность и содержание дорог.', 68, 56),
  ('gardens', 'Сады и открытые участки', 'Зона садов и открытых участков. Добавляйте конкретные предложения, если хотите обсудить развитие или уход за этой территорией.', 53, 30)
on conflict (place) do nothing;
