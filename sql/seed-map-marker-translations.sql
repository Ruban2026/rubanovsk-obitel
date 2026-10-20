-- Rubanovsk: prefilled translations for the standard map markers.
-- Run once in Supabase SQL Editor. Existing Russian marker records are not changed.
-- Only markers whose original Russian title matches one of the titles below are updated/seeded.
INSERT INTO public.map_marker_translations (marker_id, language, title, description, updated_at)
SELECT m.id, t.language, t.translated_title, t.translated_description, now()
FROM public.map_markers AS m
JOIN (
  VALUES
  -- Pond
  ('Пруд', 'uk', 'Ставок', 'Водойма — один із помітних природних об’єктів території. Тут можна збирати пропозиції щодо дбайливого використання та збереження прибережної зони.'),
  ('Пруд', 'en', 'Pond', 'The pond is one of the area’s notable natural features. Suggestions can focus on responsible use and preserving the shoreline.'),
  ('Пруд', 'pl', 'Staw', 'Staw jest jednym z ważnych obiektów przyrodniczych tego terenu. Można tu zgłaszać pomysły na odpowiedzialne użytkowanie i ochronę brzegu.'),
  ('Пруд', 'de', 'Teich', 'Der Teich ist eines der markanten Naturmerkmale des Gebiets. Hier können Vorschläge zur schonenden Nutzung und zum Schutz des Ufers gesammelt werden.'),
  ('Пруд', 'fr', 'Étang', 'L’étang est l’un des éléments naturels remarquables du territoire. On peut proposer des idées pour son utilisation responsable et la préservation des berges.'),
  -- Green area
  ('Зелёная зона', 'uk', 'Зелена зона', 'Ділянка з деревами та садами. Мешканці можуть запропонувати ідеї щодо догляду за зеленими насадженнями та покращення проходів.'),
  ('Зелёная зона', 'en', 'Green area', 'An area with trees and gardens. Residents can suggest ways to care for greenery and improve paths.'),
  ('Зелёная зона', 'pl', 'Strefa zielona', 'Obszar z drzewami i ogrodami. Mieszkańcy mogą proponować pomysły na pielęgnację zieleni i poprawę przejść.'),
  ('Зелёная зона', 'de', 'Grünfläche', 'Ein Gebiet mit Bäumen und Gärten. Bewohner können Ideen zur Pflege des Grüns und zur Verbesserung der Wege vorschlagen.'),
  ('Зелёная зона', 'fr', 'Zone verte', 'Une zone avec des arbres et des jardins. Les habitants peuvent proposer des idées pour entretenir les espaces verts et améliorer les passages.'),
  -- Existing roads
  ('Существующие дороги', 'uk', 'Наявні дороги', 'Мережа доріг поєднує різні частини території. Тут можна обговорювати зручність проходу, доступність і стан доріг.'),
  ('Существующие дороги', 'en', 'Existing roads', 'The road network connects different parts of the area. This is a place to discuss ease of passage, accessibility, and road maintenance.'),
  ('Существующие дороги', 'pl', 'Istniejące drogi', 'Sieć dróg łączy różne części terenu. Można tu omawiać wygodę przejścia, dostępność i utrzymanie dróg.'),
  ('Существующие дороги', 'de', 'Bestehende Straßen', 'Das Straßennetz verbindet verschiedene Teile des Gebiets. Hier können die Begehbarkeit, Barrierefreiheit und der Zustand der Straßen besprochen werden.'),
  ('Существующие дороги', 'fr', 'Routes existantes', 'Le réseau routier relie différentes parties du territoire. On peut discuter ici de la facilité de passage, de l’accessibilité et de l’entretien des routes.'),
  -- Gardens and open spaces
  ('Сады и открытые участки', 'uk', 'Сади та відкриті ділянки', 'Зона садів і відкритих ділянок. Додавайте конкретні пропозиції, якщо хочете обговорити розвиток або догляд за цією територією.'),
  ('Сады и открытые участки', 'en', 'Gardens and open areas', 'An area of gardens and open spaces. Share specific ideas for its development or care.'),
  ('Сады и открытые участки', 'pl', 'Ogrody i otwarte tereny', 'Obszar ogrodów i otwartych terenów. Zgłaszaj konkretne pomysły dotyczące rozwoju lub pielęgnacji tego miejsca.'),
  ('Сады и открытые участки', 'de', 'Gärten und Freiflächen', 'Ein Gebiet mit Gärten und Freiflächen. Hier können konkrete Vorschläge zur Entwicklung und Pflege eingebracht werden.'),
  ('Сады и открытые участки', 'fr', 'Jardins et espaces ouverts', 'Une zone de jardins et d’espaces ouverts. Proposez des idées concrètes pour son aménagement ou son entretien.'),
  -- Ship marker, if it exists under this Russian title
  ('Корабль "Козацкая чайка"', 'uk', 'Корабель «Козацька чайка»', 'У цьому човні козаки-засновники Святого монастиря пливуть у світле майбутнє.'),
  ('Корабль "Козацкая чайка"', 'en', 'Ship “Cossack Chaika”', 'The Cossack founders of the Holy Monastery are sailing toward a bright future in this boat.'),
  ('Корабль "Козацкая чайка"', 'pl', 'Statek „Kozacka Czajka”', 'W tej łodzi kozaccy założyciele Świętego Klasztoru płyną ku świetlanej przyszłości.'),
  ('Корабль "Козацкая чайка"', 'de', 'Schiff „Kosakische Möwe“', 'In diesem Boot segeln die Kosaken-Gründer des Heiligen Klosters einer hellen Zukunft entgegen.'),
  ('Корабль "Козацкая чайка"', 'fr', 'Bateau « Tchaïka cosaque »', 'Dans cette barque, les cosaques fondateurs du Saint Monastère voguent vers un avenir radieux.')
) AS t(original_title, language, translated_title, translated_description)
  ON m.title = t.original_title
ON CONFLICT (marker_id, language)
DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  updated_at = now();
