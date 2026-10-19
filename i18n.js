(() => {
const languages = {
  ru:{label:'Русский',locale:'ru-RU'},
  uk:{label:'Українська',locale:'uk-UA'},
  en:{label:'English',locale:'en-GB'},
  pl:{label:'Polski',locale:'pl-PL'},
  de:{label:'Deutsch',locale:'de-DE'},
  fr:{label:'Français',locale:'fr-FR'}
};
const rows = [["Рубановск","Рубановськ","Rubanovsk","Rubanowsk","Rubanowsk","Rubanovsk"],["Территория общих идей","Територія спільних ідей","A place for shared ideas","Przestrzeń wspólnych pomysłów","Raum für gemeinsame Ideen","Un lieu d’idées communes"],["Карта","Мапа","Map","Mapa","Karte","Carte"],["О проекте","Про проєкт","About","O projekcie","Über das Projekt","À propos"],["Наше место · наше будущее","Наше місце · наше майбутнє","Our place · our future","Nasze miejsce · nasza przyszłość","Unser Ort · unsere Zukunft","Notre lieu · notre avenir"],["Рубановский монастырь начинается с каждого","Рубанівський монастир починається з кожного","The Rubanovsk Monastery begins with each of us","Klasztor w Rubanowsku zaczyna się od każdego z nas","Das Kloster Rubanowsk beginnt bei jedem Einzelnen","Le monastère de Rubanovsk commence avec chacun de nous"],["Создадим Рай на земле вместе!","Створімо Рай на землі разом!","Let’s create a paradise on Earth together!","Stwórzmy razem raj na ziemi!","Erschaffen wir gemeinsam ein Paradies auf Erden!","Créons ensemble un paradis sur Terre !"],["Метки показывают примерные тематические точки для обсуждения. Их положение и описания можно уточнить вместе с жителями.","Позначки показують приблизні тематичні точки для обговорення. Їхнє розташування й описи можна уточнити разом із мешканцями.","Markers indicate approximate discussion points. Their positions and descriptions can be refined together with residents.","Znaczniki wskazują przybliżone punkty do dyskusji. Ich położenie i opisy można doprecyzować wspólnie z mieszkańcami.","Die Markierungen zeigen ungefähre Themenpunkte zur Diskussion. Ihre Positionen und Beschreibungen können gemeinsam mit den Bewohnern präzisiert werden.","Les repères indiquent des points de discussion approximatifs. Leur emplacement et leur description pourront être précisés avec les habitants."],["Предложить свою идею ...","Запропонувати власну ідею…","Suggest an idea…","Zaproponuj pomysł…","Eine Idee vorschlagen …","Proposer une idée…"],["Собираем предложения о том, что важно для Рубановского.","Збираємо пропозиції про те, що важливо для Рубанівська.","We’re collecting ideas about what matters for Rubanovsk.","Zbieramy pomysły na to, co jest ważne dla Rubanowska.","Wir sammeln Vorschläge dazu, was für Rubanowsk wichtig ist.","Nous recueillons des idées sur ce qui compte pour Rubanovsk."],["Добавить предложение","Додати пропозицію","Add a suggestion","Dodaj propozycję","Vorschlag hinzufügen","Ajouter une proposition"],["Что хотелось бы улучшить?","Що хотілося б покращити?","What would you like to improve?","Co warto ulepszyć?","Was möchten Sie verbessern?","Que souhaiteriez-vous améliorer ?"],["Опишите идею и укажите, к какой части территории она относится.","Опишіть ідею та вкажіть, якої частини території вона стосується.","Describe your idea and specify which part of the area it concerns.","Opisz pomysł i wskaż, której części terenu dotyczy.","Beschreiben Sie Ihre Idee und geben Sie an, welchen Bereich sie betrifft.","Décrivez votre idée et indiquez la partie du territoire concernée."],["Короткое название","Коротка назва","Short title","Krótki tytuł","Kurzer Titel","Titre court"],["Место на карте","Місце на мапі","Location on the map","Miejsce na mapie","Ort auf der Karte","Lieu sur la carte"],["Пруд","Ставок","Pond","Staw","Teich","Étang"],["Зелёная зона","Зелена зона","Green area","Strefa zielona","Grünfläche","Zone verte"],["Дороги","Дороги","Roads","Drogi","Straßen","Routes"],["Сады и открытые участки","Сади та відкриті ділянки","Gardens and open areas","Ogrody i otwarte tereny","Gärten und Freiflächen","Jardins et espaces ouverts"],["Другое место","Інше місце","Other location","Inne miejsce","Anderer Ort","Autre lieu"],["Описание идеи","Опис ідеї","Idea description","Opis pomysłu","Ideenbeschreibung","Description de l’idée"],["Что предлагаете и почему это важно?","Що пропонуєте і чому це важливо?","What do you suggest, and why does it matter?","Co proponujesz i dlaczego to ważne?","Was schlagen Sie vor und warum ist es wichtig?","Que proposez-vous et pourquoi est-ce important ?"],["Фотография или рисунок (до 3 МБ)","Фотографія або малюнок (до 3 МБ)","Photo or drawing (up to 3 MB)","Zdjęcie lub rysunek (do 3 MB)","Foto oder Zeichnung (bis zu 3 MB)","Photo ou dessin (jusqu’à 3 Mo)"],["Можно прикрепить JPG, PNG или WebP. Изображение будет видно всем посетителям.","Можна додати JPG, PNG або WebP. Зображення буде видно всім відвідувачам.","Attach a JPG, PNG, or WebP image. All visitors will be able to see it.","Możesz dodać plik JPG, PNG lub WebP. Obraz będzie widoczny dla wszystkich odwiedzających.","Sie können JPG, PNG oder WebP anhängen. Das Bild ist für alle Besucher sichtbar.","Vous pouvez joindre un fichier JPG, PNG ou WebP. L’image sera visible par tous les visiteurs."],["Опубликовать предложение","Опублікувати пропозицію","Publish suggestion","Opublikuj propozycję","Vorschlag veröffentlichen","Publier la proposition"],["Демонстрационный режим: предложения сохраняются только в этом браузере и пока не видны другим посетителям.","Демонстраційний режим: пропозиції зберігаються лише в цьому браузері й поки не видимі іншим відвідувачам.","Demo mode: suggestions are saved only in this browser and are not yet visible to other visitors.","Tryb demonstracyjny: propozycje są zapisywane tylko w tej przeglądarce i nie są jeszcze widoczne dla innych.","Demomodus: Vorschläge werden nur in diesem Browser gespeichert und sind für andere Besucher noch nicht sichtbar.","Mode démo : les propositions sont enregistrées uniquement dans ce navigateur et ne sont pas encore visibles par les autres visiteurs."],["Обсуждение","Обговорення","Discussion","Dyskusja","Diskussion","Discussion"],["Предложения сообщества","Пропозиції спільноти","Community suggestions","Pomysły społeczności","Vorschläge der Gemeinschaft","Propositions de la communauté"],["Здесь будут отображаться идеи и поддержка жителей.","Тут відображатимуться ідеї та підтримка мешканців.","Ideas and community support will appear here.","Tutaj będą wyświetlane pomysły i poparcie mieszkańców.","Hier erscheinen Ideen und Unterstützung aus der Gemeinschaft.","Les idées et le soutien des habitants apparaîtront ici."],["Голосование подключим отдельным шагом после проверки сохранения предложений.","Голосування додамо окремим кроком після перевірки збереження пропозицій.","Voting will be added after we verify that suggestions are saved correctly.","Głosowanie dodamy po sprawdzeniu zapisywania propozycji.","Die Abstimmung wird ergänzt, sobald das Speichern der Vorschläge geprüft wurde.","Le vote sera ajouté après vérification de l’enregistrement des propositions."],["О проекте","Про проєкт","About the project","O projekcie","Über das Projekt","À propos du projet"],["«Рубановск — территория общих идей» — начальная площадка для совместного обсуждения развития территории. Карта создана на основе предоставленной аэрофотографии. Описания и расположение меток являются предварительными и могут уточняться жителями.","«Рубанівськ — територія спільних ідей» — початковий майданчик для спільного обговорення розвитку території. Мапу створено на основі наданої аерофотографії. Описи й розташування позначок попередні та можуть уточнюватися мешканцями.","“Rubanovsk — a place for shared ideas” is an initial space to discuss the area’s future together. The map is based on supplied aerial photography. Marker positions and descriptions are preliminary and can be refined by residents.","„Rubanowsk — przestrzeń wspólnych pomysłów” to miejsce do wspólnego omawiania rozwoju terenu. Mapa powstała na podstawie dostarczonego zdjęcia lotniczego. Opisy i położenie znaczników są wstępne i mogą być doprecyzowane przez mieszkańców.","„Rubanowsk — Raum für gemeinsame Ideen“ ist eine erste Plattform, um gemeinsam über die Entwicklung des Gebiets zu sprechen. Die Karte basiert auf bereitgestellten Luftaufnahmen. Beschreibungen und Positionen der Markierungen sind vorläufig und können von den Bewohnern präzisiert werden.","« Rubanovsk — un lieu d’idées communes » est un premier espace pour discuter ensemble de l’avenir du territoire. La carte est basée sur une photographie aérienne fournie. Les descriptions et les emplacements des repères sont provisoires et peuvent être précisés par les habitants."],["Вход администратора","Вхід адміністратора","Administrator login","Logowanie administratora","Administrator-Anmeldung","Connexion administrateur"],["Войдите в административную учётную запись, чтобы модерировать предложения.","Увійдіть в обліковий запис адміністратора, щоб модерувати пропозиції.","Sign in to the administrator account to moderate suggestions.","Zaloguj się na konto administratora, aby moderować propozycje.","Melden Sie sich als Administrator an, um Vorschläge zu moderieren.","Connectez-vous au compte administrateur pour modérer les propositions."],["Электронная почта","Електронна пошта","Email address","Adres e-mail","E-Mail-Adresse","Adresse e-mail"],["Пароль","Пароль","Password","Hasło","Passwort","Mot de passe"],["Войти","Увійти","Sign in","Zaloguj się","Anmelden","Se connecter"],["Выйти из режима администратора","Вийти з режиму адміністратора","Sign out of administrator mode","Wyloguj z trybu administratora","Administrator-Modus verlassen","Quitter le mode administrateur"],["← На карту","← До мапи","← Back to map","← Wróć do mapy","← Zur Karte","← Retour à la carte"],
["← Вернуться на карту","← Повернутися до мапи","← Return to map","← Wróć do mapy","← Zur Karte zurück","← Retour à la carte"],["Проекты сообщества","Проєкти спільноти","Community projects","Projekty społeczności","Gemeinschaftsprojekte","Projets communautaires"],["Проекты территории","Проєкти території","Area projects","Projekty terenu","Projekte des Gebiets","Projets du territoire"],["Здесь собраны проекты, относящиеся к выбранному месту на карте.","Тут зібрано проєкти, що стосуються вибраного місця на мапі.","Projects related to the selected map location are collected here.","Tutaj zebrano projekty dotyczące wybranego miejsca na mapie.","Hier finden Sie Projekte zum ausgewählten Ort auf der Karte.","Vous trouverez ici les projets liés au lieu sélectionné sur la carte."],["＋ Предложить новый проект","＋ Запропонувати новий проєкт","＋ Suggest a new project","＋ Zaproponuj nowy projekt","＋ Neues Projekt vorschlagen","＋ Proposer un nouveau projet"],["Опишите конкретную идею для этого места и, если есть, добавьте фотографию. После публикации проект появится в общем списке.","Опишіть конкретну ідею для цього місця та, якщо є, додайте фотографію. Після публікації проєкт з’явиться в загальному списку.","Describe a specific idea for this location and add a photo if available. Once published, it will appear in the list.","Opisz konkretny pomysł dla tego miejsca i dodaj zdjęcie, jeśli je masz. Po publikacji projekt pojawi się na liście.","Beschreiben Sie eine konkrete Idee für diesen Ort und fügen Sie, falls vorhanden, ein Foto hinzu. Nach der Veröffentlichung erscheint das Projekt in der Liste.","Décrivez une idée précise pour cet endroit et ajoutez une photo si vous en avez une. Après publication, le projet apparaîtra dans la liste."],["Название проекта","Назва проєкту","Project title","Nazwa projektu","Projekttitel","Titre du projet"],["Описание проекта","Опис проєкту","Project description","Opis projektu","Projektbeschreibung","Description du projet"],["Фотография проекта (JPG, PNG или WebP, до 3 МБ)","Фотографія проєкту (JPG, PNG або WebP, до 3 МБ)","Project photo (JPG, PNG, or WebP, up to 3 MB)","Zdjęcie projektu (JPG, PNG lub WebP, do 3 MB)","Projektfoto (JPG, PNG oder WebP, bis zu 3 MB)","Photo du projet (JPG, PNG ou WebP, jusqu’à 3 Mo)"],["Например, обустроить прогулочную дорожку","Наприклад, облаштувати прогулянкову доріжку","For example, create a walking path","Na przykład: urządzić ścieżkę spacerową","Zum Beispiel einen Spazierweg anlegen","Par exemple, aménager un sentier de promenade"],["Что предлагается сделать, для чего это нужно и как это может выглядеть?","Що пропонується зробити, для чого це потрібно та який вигляд це може мати?","What should be done, why is it needed, and what could it look like?","Co proponujesz zrobić, dlaczego jest to potrzebne i jak mogłoby wyglądać?","Was soll getan werden, warum ist es nötig und wie könnte es aussehen?","Que proposez-vous, pourquoi est-ce nécessaire et à quoi cela pourrait-il ressembler ?"],["Опубликовать проект","Опублікувати проєкт","Publish project","Opublikuj projekt","Projekt veröffentlichen","Publier le projet"],["Заполните поля и нажмите «Опубликовать проект».","Заповніть поля й натисніть «Опублікувати проєкт».","Fill in the fields and click “Publish project.”","Wypełnij pola i kliknij „Opublikuj projekt”.","Füllen Sie die Felder aus und klicken Sie auf „Projekt veröffentlichen“.","Remplissez les champs et cliquez sur « Publier le projet »."],["Проекты этого места","Проєкти цього місця","Projects for this location","Projekty tego miejsca","Projekte für diesen Ort","Projets de ce lieu"],["Загружаем список…","Завантажуємо список…","Loading list…","Ładowanie listy…","Liste wird geladen …","Chargement de la liste…"],["Пока проектов нет","Поки що проєктів немає","No projects yet","Nie ma jeszcze projektów","Noch keine Projekte","Pas encore de projets"],["Можно стать первым и предложить проект для этого места.","Можна стати першим і запропонувати проєкт для цього місця.","Be the first to suggest a project for this location.","Zaproponuj pierwszy projekt dla tego miejsca.","Schlagen Sie als Erste oder Erster ein Projekt für diesen Ort vor.","Soyez la première personne à proposer un projet pour ce lieu."],["Фотография не добавлена","Фотографію не додано","No photo added","Nie dodano zdjęcia","Kein Foto hinzugefügt","Aucune photo ajoutée"],["Пока нет оценок","Поки що немає оцінок","No ratings yet","Brak ocen","Noch keine Bewertungen","Pas encore de notes"],["Добавлен:","Додано:","Added:","Dodano:","Hinzugefügt:","Ajouté le :"],["Удалить проект","Видалити проєкт","Delete project","Usuń projekt","Projekt löschen","Supprimer le projet"],["Средняя оценка ","Середня оцінка ","Average rating ","Średnia ocena ","Durchschnittliche Bewertung ","Note moyenne "],[" голосов"," голосів"," votes"," głosów"," Stimmen"," votes"],[" голоса"," голоси"," votes"," głosy"," Stimmen"," votes"],[" голос"," голос"," vote"," głos"," Stimme"," vote"],["Не удалось загрузить список проектов","Не вдалося завантажити список проєктів","Could not load project list","Nie udało się załadować listy projektów","Projektliste konnte nicht geladen werden","Impossible de charger la liste des projets"],["Место не найдено","Місце не знайдено","Location not found","Nie znaleziono miejsca","Ort nicht gefunden","Lieu introuvable"],["Не удалось определить место на карте. Вернитесь на главную и выберите одну из меток.","Не вдалося визначити місце на мапі. Поверніться на головну сторінку та виберіть одну з позначок.","Could not identify the map location. Return to the home page and select a marker.","Nie można określić miejsca na mapie. Wróć na stronę główną i wybierz znacznik.","Der Kartenort konnte nicht ermittelt werden. Kehren Sie zur Startseite zurück und wählen Sie eine Markierung.","Impossible d’identifier le lieu sur la carte. Revenez à l’accueil et sélectionnez un repère."],["Предложения публикуются в общей базе проектов.","Пропозиції публікуються в загальній базі проєктів.","Suggestions are published in the shared project database.","Propozycje są publikowane we wspólnej bazie projektów.","Vorschläge werden in der gemeinsamen Projektdatenbank veröffentlicht.","Les propositions sont publiées dans la base de projets commune."],["Режим администратора включён: можно удалять проекты.","Режим адміністратора ввімкнено: можна видаляти проєкти.","Administrator mode enabled: projects can be deleted.","Tryb administratora włączony: można usuwać projekty.","Administratormodus aktiviert: Projekte können gelöscht werden.","Mode administrateur activé : les projets peuvent être supprimés."],["У этой учётной записи нет прав администратора.","Цей обліковий запис не має прав адміністратора.","This account does not have administrator privileges.","To konto nie ma uprawnień administratora.","Dieses Konto hat keine Administratorrechte.","Ce compte ne dispose pas des droits d’administrateur."],["Проверяем данные…","Перевіряємо дані…","Checking credentials…","Sprawdzanie danych…","Anmeldedaten werden geprüft …","Vérification des identifiants…"],["Вход выполнен.","Вхід виконано.","Signed in.","Zalogowano.","Angemeldet.","Connexion réussie."],["Проект опубликован и добавлен в общий список.","Проєкт опубліковано й додано до загального списку.","Project published and added to the list.","Projekt opublikowano i dodano do listy.","Projekt veröffentlicht und zur Liste hinzugefügt.","Projet publié et ajouté à la liste."],["Загружаем фотографию…","Завантажуємо фотографію…","Uploading photo…","Przesyłanie zdjęcia…","Foto wird hochgeladen …","Téléchargement de la photo…"],["Сохраняем проект…","Зберігаємо проєкт…","Saving project…","Zapisywanie projektu…","Projekt wird gespeichert …","Enregistrement du projet…"],["Оценить проект от 1 до 5 звёзд","Оцінити проєкт від 1 до 5 зірок","Rate project from 1 to 5 stars","Oceń projekt od 1 do 5 gwiazdek","Projekt mit 1 bis 5 Sternen bewerten","Noter le projet de 1 à 5 étoiles"],["Поставить ","Поставити ","Rate ","Oceń ","Bewerten mit ","Noter "],[" из 5 звёзд"," із 5 зірок"," out of 5 stars"," na 5 gwiazdek"," von 5 Sternen"," sur 5 étoiles"],
["Рубановск — территория общих идей","Рубанівськ — територія спільних ідей","Rubanovsk — a place for shared ideas","Rubanowsk — przestrzeń wspólnych pomysłów","Rubanowsk — Raum für gemeinsame Ideen","Rubanovsk — un lieu d’idées communes"],
["Проекты территории — Рубановск","Проєкти території — Рубанівськ","Area projects — Rubanovsk","Projekty terenu — Rubanowsk","Projekte des Gebiets — Rubanowsk","Projets du territoire — Rubanovsk"],
["Проекты","Проєкти","Projects","Projekty","Projekte","Projets"],
["Аэрофотография территории Рубановского с прудом, зелёной зоной, дорогами и садами","Аерофотографія території Рубанівська зі ставком, зеленою зоною, дорогами та садами","Aerial photograph of the Rubanovsk area with pond, green area, roads, and gardens","Zdjęcie lotnicze terenu Rubanowska ze stawem, strefą zieloną, drogami i ogrodami","Luftaufnahme des Gebiets Rubanowsk mit Teich, Grünfläche, Straßen und Gärten","Photographie aérienne du territoire de Rubanovsk avec l’étang, la zone verte, les routes et les jardins"],
["Информация: пруд","Інформація: ставок","Information: pond","Informacje: staw","Information: Teich","Informations : étang"],
["Информация: зелёная зона","Інформація: зелена зона","Information: green area","Informacje: strefa zielona","Information: Grünfläche","Informations : zone verte"],
["Информация: дороги","Інформація: дороги","Information: roads","Informacje: drogi","Information: Straßen","Informations : routes"],
["Информация: сады и открытые участки","Інформація: сади та відкриті ділянки","Information: gardens and open areas","Informacje: ogrody i otwarte tereny","Information: Gärten und Freiflächen","Informations : jardins et espaces ouverts"],
["Проекты по бережному использованию пруда, благоустройству берегов и сохранению природной среды.","Проєкти з дбайливого використання ставка, благоустрою берегів і збереження природного середовища.","Projects for careful use of the pond, shoreline improvement, and conservation of the natural environment.","Projekty dotyczące odpowiedzialnego korzystania ze stawu, zagospodarowania brzegów i ochrony przyrody.","Projekte zur schonenden Nutzung des Teichs, zur Gestaltung der Ufer und zum Schutz der Natur.","Projets pour une utilisation respectueuse de l’étang, l’aménagement des berges et la préservation de l’environnement naturel."],
["Проекты по уходу за деревьями и зелёными насаждениями, озеленению и удобным пешеходным проходам.","Проєкти з догляду за деревами й зеленими насадженнями, озеленення та облаштування зручних пішохідних проходів.","Projects for caring for trees and greenery, planting, and convenient pedestrian paths.","Projekty dotyczące pielęgnacji drzew i zieleni, nowych nasadzeń oraz wygodnych przejść pieszych.","Projekte zur Pflege von Bäumen und Grünanlagen, zur Begrünung und für bequeme Fußwege.","Projets pour l’entretien des arbres et des espaces verts, la végétalisation et des cheminements piétons pratiques."],
["Проекты по улучшению дорог, проходов, доступности и удобству перемещения по территории.","Проєкти з покращення доріг, проходів, доступності та зручності пересування територією.","Projects to improve roads, paths, accessibility, and movement around the area.","Projekty poprawiające drogi, przejścia, dostępność i poruszanie się po terenie.","Projekte zur Verbesserung von Straßen, Wegen, Barrierefreiheit und Bewegungsmöglichkeiten im Gebiet.","Projets visant à améliorer les routes, les passages, l’accessibilité et les déplacements sur le territoire."],
["Проекты по развитию садов, использованию открытых участков и совместному уходу за территорией.","Проєкти з розвитку садів, використання відкритих ділянок і спільного догляду за територією.","Projects for developing gardens, using open spaces, and caring for the area together.","Projekty rozwoju ogrodów, wykorzystania otwartych terenów i wspólnej troski o okolicę.","Projekte zur Entwicklung von Gärten, Nutzung offener Flächen und gemeinschaftlichen Pflege des Gebiets.","Projets pour développer les jardins, utiliser les espaces ouverts et entretenir le territoire ensemble."],
["Создадим Рай на земле вместе!","Створімо Рай на землі разом!","Let’s create a paradise on Earth together!","Stwórzmy razem raj na ziemi!","Erschaffen wir gemeinsam ein Paradies auf Erden!","Créons ensemble un paradis sur Terre !"]];
const codes = ['ru','uk','en','pl','de','fr'];
const selectorOrder = ['uk','en','pl','de','fr','ru'];
const dict = Object.fromEntries(codes.map(code=>[code,{}]));
for (const row of rows) for (let i=0;i<codes.length;i++) dict[codes[i]][row[0]]=row[i];
function detectLanguage(){
  const candidates = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || 'ru'];
  for(const candidate of candidates){
    const base=String(candidate).toLowerCase().split('-')[0];
    if(languages[base]) return base;
  }
  return 'ru';
}
const saved=localStorage.getItem('rubanovsk_language');
let currentLanguage=saved && languages[saved] ? saved : 'uk';
window.siteLanguage=currentLanguage;
function translateValue(value){
  const key=String(value).trim();
  if(!key) return value;
  let sourceKey=key;
  if(dict[currentLanguage][sourceKey]===undefined){
    const matching=rows.find(row=>row.some(phrase=>phrase===key));
    if(matching) sourceKey=matching[0];
  }
  const translated=dict[currentLanguage][sourceKey];
  if(translated===undefined) return value;
  const leading=String(value).match(/^\\s*/)?.[0]||'';
  const trailing=String(value).match(/\\s*$/)?.[0]||'';
  return leading+translated+trailing;
}
function translateTextNodes(root=document){
  const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,{
    acceptNode(node){
      const parent=node.parentElement;
      if(!parent || parent.closest('script,style,textarea,option[data-keep-language],code,pre')) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }
  });
  const nodes=[];
  while(walker.nextNode()) nodes.push(walker.currentNode);
  for(const node of nodes){
    const original=node.nodeValue;
    const translated=translateValue(original);
    if(translated!==original) node.nodeValue=translated;
  }
}
function translateAttributes(root=document){
  const attrs=['placeholder','title','aria-label','alt'];
  const elements=root.querySelectorAll ? root.querySelectorAll('*') : [];
  for(const el of elements) for(const attr of attrs){
    if(el.hasAttribute(attr)){
      const before=el.getAttribute(attr);
      const after=translateValue(before);
      if(after!==before) el.setAttribute(attr,after);
    }
  }
}
function updateSelector(){
  const selector=document.getElementById('language-select');
  if(selector) selector.value=currentLanguage;
}
function applyLanguage(language,remember=false){
  if(!languages[language]) return;
  currentLanguage=language;
  window.siteLanguage=language;
  document.documentElement.lang=language;
  const placeHeading=document.getElementById('place-title');
  if(placeHeading){
    document.title=translateValue('Проекты')+': '+translateValue(placeHeading.textContent)+' — '+translateValue('Рубановск');
  }else{
    document.title=translateValue(document.title);
  }
  translateTextNodes(document);
  translateAttributes(document);
  updateSelector();
  if(remember) localStorage.setItem('rubanovsk_language',language);
  document.dispatchEvent(new CustomEvent('rubanovsk:languagechange',{detail:{language,locale:languages[language].locale}}));
}
function addSelector(){
  const header=document.querySelector('header');
  if(!header || document.getElementById('language-select')) return;
  const select=document.createElement('select');
  select.id='language-select';
  select.setAttribute('aria-label','Website language');
  select.style.cssText='width:auto;max-width:100%;min-width:125px;padding:8px 10px;border:1px solid #ffffff66;border-radius:10px;background:#ffffff12;color:inherit;font:inherit;cursor:pointer';
  for(const code of selectorOrder){
    const option=document.createElement('option');
    option.value=code;option.textContent=languages[code].label;
    option.style.color='#1d2c26';option.style.background='#fff';
    select.append(option);
  }
  select.value=currentLanguage;
  select.addEventListener('change',()=>applyLanguage(select.value,true));
  const nav=header.querySelector('nav');
  if(nav){nav.append(select);nav.style.alignItems='center'}
  else{
    const back=header.querySelector('.back');
    if(back){
      const controls=document.createElement('div');
      controls.style.cssText='display:flex;align-items:center;gap:10px;flex-wrap:wrap';
      back.parentNode.insertBefore(controls,back);
      controls.append(select,back);
    }else header.append(select);
  }
}
function translateDynamicText(){
  translateTextNodes(document);
  translateAttributes(document);
}
if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',()=>{addSelector();applyLanguage(currentLanguage,false)});
else {addSelector();applyLanguage(currentLanguage,false)}
const observer=new MutationObserver(records=>{
  for(const record of records){
    if(record.type==='childList'){
      record.addedNodes.forEach(node=>{
        if(node.nodeType===Node.TEXT_NODE){
          const translated=translateValue(node.nodeValue);
          if(translated!==node.nodeValue) node.nodeValue=translated;
        }else if(node.nodeType===Node.ELEMENT_NODE){
          translateTextNodes(node);translateAttributes(node);
        }
      });
    }else if(record.type==='characterData'){
      const translated=translateValue(record.target.nodeValue);
      if(translated!==record.target.nodeValue) record.target.nodeValue=translated;
    }
  }
});
observer.observe(document.documentElement,{subtree:true,childList:true,characterData:true});
window.RubanovskI18n={get language(){return currentLanguage},setLanguage:applyLanguage,translate:translateValue,languages};
})();