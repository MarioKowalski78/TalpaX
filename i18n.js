(function () {
    "use strict";

    const languages = [
        { code: "de", label: "🇩🇪 Deutsch" },
        { code: "en", label: "🇬🇧 English" },
        { code: "ru", label: "🇷🇺 Русский" }
    ];

    const text = {
        de: {
            title: "TalpaX – Lokale KI-Suche für private Dateien",
            navExamples: "Beispiele",
            navEvidence: "Nachweise",
            navWhy: "Warum TalpaX?",
            navSupport: "Unterstützen",
            kicker: "Lokales KI-Suchprojekt · Entwicklungsstand 0.7.2",
            heroA: "Deine Dateien. Eine Suche.",
            heroB: "Keine Cloud.",
            lede: "TalpaX ist ein Entwicklungsprojekt für die lokale Suche in Fotos, Videos, Dokumenten und Audio. Die KI läuft auf dem eigenen Server; private Dateien werden nicht an einen Cloud-Dienst übertragen.",
            ctaEvidence: "Nachweise ansehen",
            ctaSupport: "Projekt unterstützen",
            signal1Title: "Medienübergreifend",
            signal1Body: "Fotos, Videos, Dokumente und Audio",
            signal2Title: "Lokal gedacht",
            signal2Body: "KI-Verarbeitung auf eigener Hardware",
            signal3Title: "Nachvollziehbar",
            signal3Body: "Treffer mit prüfbaren Hinweisen",
            examplesEyebrow: "Das reale Ziel",
            examplesTitle: "Fragen stellen, wie man sie wirklich meint",
            examplesIntro: "TalpaX soll nicht nur Dateinamen durchsuchen, sondern Personen, Orte, Zeiträume und Inhalte gemeinsam verstehen.",
            example1: "Zeige mir die Videos mit meiner Tochter.",
            example2: "Zeige mir alle Bilder meiner Frau an einem Strand.",
            example3: "Zeige mir meine Selfies aus dem Jahr 2020.",
            example4: "Zeige mir meine Zeugnisse aus Berufsausbildung und Studium.",
            example5: "Welchen Notendurchschnitt hatte ich in meinem fünften Schuljahr?",
            examplesNote: "Diese Beispiele beschreiben das verbindliche Produktziel. Einzelne Bestandteile sind bereits nachgewiesen; die vollständige, allgemeine Abdeckung ist noch in Entwicklung.",
            proofEyebrow: "Was bereits belegt ist",
            proofTitle: "Messbare Fortschritte statt Werbeversprechen",
            proofIntro: "Diese Ergebnisse stammen aus der kontrollierten Entwicklungsumgebung von TalpaX. Sie belegen den aktuellen Projektstand, aber noch keine allgemeine Produktreife.",
            proof1Title: "Automatisierte Prüfungen",
            proof1Body: "Die Release-Suite für Version 0.7.2 lief zuletzt ohne Fehler durch.",
            proof2Title: "Visuelle Referenzsuche",
            proof2Body: "Eine festgelegte Testsuche fand exakt die zwei bestätigten Bilder einer Aprilia Tuono V4R und keine fachfremden Motorräder.",
            proof3Metric: "Foto + Video",
            proof3Title: "Personensuche",
            proof3Body: "Eine bestätigte Person wurde in einem Foto und in einem Video gefunden; beide Zuordnungen besitzen eine Auditspur.",
            proof4Title: "Lokale Module",
            proof4Body: "Zwölf Dienste für Suche und Analyse wurden im letzten dokumentierten Produktivcheck als gesund gemeldet.",
            proofDisclaimer: "Wichtig: TalpaX ist noch ein Entwicklungsprojekt. Es gibt derzeit keine öffentliche Release-Version, keinen unabhängigen Benchmark und keine zugesicherte Leistung auf anderer Hardware.",
            whyEyebrow: "Warum das interessant ist",
            whyTitle: "Eine Suchschicht für private Datenbestände",
            whyIntro: "TalpaX verfolgt ein klares Ziel: private Dateien mit moderner KI auffindbar machen, ohne die Kontrolle über sie abzugeben.",
            why1Title: "Private Daten bleiben privat",
            why1Body: "Index und KI-Modelle laufen lokal. Öffentliche Zusatzinformationen werden nur über getrennte, kontrollierte Freigaben abgefragt.",
            why2Title: "Eine Anfrage statt vieler Apps",
            why2Body: "Die geplante Suchoberfläche verbindet unterschiedliche Dateitypen und Suchsignale in einem verständlichen Dialog.",
            why3Title: "Bestätigen statt blind vertrauen",
            why3Body: "Personen und eindeutige Identitäten werden erst nach Bestätigung übernommen; Entscheidungen bleiben nachvollziehbar.",
            supportEyebrow: "Unabhängige Entwicklung",
            supportTitle: "Hilf mit, aus dem Prototyp ein belastbares Produkt zu machen",
            supportBody: "TalpaX entsteht ohne Firma oder Investor. Unterstützung finanziert Zeit, Testhardware und die Vorbereitung einer installierbaren Version.",
            supportButton: "Projekt auf GoFundMe ansehen",
            footer: "TalpaX ist ein privates Entwicklungsprojekt. Stand 0.7.2 · Keine öffentliche Release-Version · Keine Leistungs- oder Verfügbarkeitszusage. © 2026 Mario Kowalski."
        },

        en: {
            title: "TalpaX – Local AI search for private files",
            navExamples: "Examples",
            navEvidence: "Evidence",
            navWhy: "Why TalpaX?",
            navSupport: "Support",
            kicker: "Local AI search project · Development version 0.7.2",
            heroA: "Your files. One search.",
            heroB: "No cloud.",
            lede: "TalpaX is a development project for searching photos, videos, documents and audio locally. The AI runs on your own server; private files are not sent to a cloud service.",
            ctaEvidence: "See the evidence",
            ctaSupport: "Support the project",
            signal1Title: "Across media types",
            signal1Body: "Photos, videos, documents and audio",
            signal2Title: "Designed for local use",
            signal2Body: "AI processing on hardware you control",
            signal3Title: "Traceable",
            signal3Body: "Results with evidence you can inspect",
            examplesEyebrow: "The real goal",
            examplesTitle: "Ask questions the way you actually mean them",
            examplesIntro: "TalpaX is intended to understand people, places, time periods and content together, rather than merely search file names.",
            example1: "Show me the videos featuring my daughter.",
            example2: "Show me every photo of my wife at a beach.",
            example3: "Show me my selfies from 2020.",
            example4: "Show me my vocational-training and university certificates.",
            example5: "What was my average grade in my fifth year at school?",
            examplesNote: "These examples define the product goal. Individual components have already been demonstrated; full, general coverage is still under development.",
            proofEyebrow: "What has been demonstrated",
            proofTitle: "Measured progress, not marketing promises",
            proofIntro: "These results come from TalpaX's controlled development environment. They demonstrate the current project status, not general product readiness.",
            proof1Title: "Automated tests",
            proof1Body: "The release suite for version 0.7.2 most recently completed without failures.",
            proof2Title: "Visual reference search",
            proof2Body: "A defined test query found exactly the two confirmed images of an Aprilia Tuono V4R and no unrelated motorcycles.",
            proof3Metric: "Photo + video",
            proof3Title: "Person search",
            proof3Body: "One confirmed person was found in both a photo and a video; both assignments have an audit trail.",
            proof4Title: "Local services",
            proof4Body: "Twelve search and analysis services were reported healthy in the latest documented production check.",
            proofDisclaimer: "Important: TalpaX is still a development project. There is currently no public release, no independent benchmark and no guaranteed performance on other hardware.",
            whyEyebrow: "Why it matters",
            whyTitle: "A search layer for private data collections",
            whyIntro: "TalpaX has a clear goal: make private files searchable with modern AI without giving up control of the data.",
            why1Title: "Private data stays private",
            why1Body: "The index and AI models run locally. Public supplementary information is requested only through separate, controlled approvals.",
            why2Title: "One request instead of many apps",
            why2Body: "The planned search interface brings different file types and search signals together in one understandable dialogue.",
            why3Title: "Confirm instead of blindly trusting",
            why3Body: "People and exact identities are accepted only after confirmation, and decisions remain traceable.",
            supportEyebrow: "Independent development",
            supportTitle: "Help turn the prototype into a dependable product",
            supportBody: "TalpaX is being built without a company or investor. Support funds development time, test hardware and the preparation of an installable version.",
            supportButton: "View the project on GoFundMe",
            footer: "TalpaX is a private development project. Version 0.7.2 · No public release · No guarantee of performance or availability. © 2026 Mario Kowalski."
        },

        ru: {
            title: "TalpaX — локальный ИИ-поиск по личным файлам",
            navExamples: "Примеры",
            navEvidence: "Подтверждённые результаты",
            navWhy: "Зачем TalpaX?",
            navSupport: "Поддержать",
            kicker: "Проект локального ИИ-поиска · Версия в разработке 0.7.2",
            heroA: "Ваши файлы. Один поиск.",
            heroB: "Без облака.",
            lede: "TalpaX — разрабатываемая система для локального поиска по фотографиям, видео, документам и аудиофайлам. ИИ работает на вашем сервере; личные файлы не отправляются в облачный сервис.",
            ctaEvidence: "Посмотреть результаты",
            ctaSupport: "Поддержать проект",
            signal1Title: "Разные типы файлов",
            signal1Body: "Фотографии, видео, документы и аудио",
            signal2Title: "Локальная обработка",
            signal2Body: "ИИ работает на оборудовании владельца",
            signal3Title: "Проверяемость",
            signal3Body: "Результаты сопровождаются проверяемыми данными",
            examplesEyebrow: "Настоящая цель",
            examplesTitle: "Задавайте вопросы обычными словами",
            examplesIntro: "TalpaX должен учитывать людей, места, даты и содержание файлов, а не ограничиваться поиском по именам файлов.",
            example1: "Покажи видео с моей дочерью.",
            example2: "Покажи все фотографии моей жены на пляже.",
            example3: "Покажи мои селфи за 2020 год.",
            example4: "Покажи мои аттестаты и дипломы об образовании.",
            example5: "Какой средний балл был у меня в пятом классе?",
            examplesNote: "Эти примеры определяют цель продукта. Отдельные компоненты уже подтверждены, но полная универсальная поддержка таких запросов ещё разрабатывается.",
            proofEyebrow: "Что уже подтверждено",
            proofTitle: "Измеримые результаты вместо рекламных обещаний",
            proofIntro: "Эти результаты получены в контролируемой среде разработки TalpaX. Они показывают текущее состояние проекта, но ещё не доказывают готовность массового продукта.",
            proof1Title: "Автоматические тесты",
            proof1Body: "Последний запуск набора тестов для версии 0.7.2 завершился без ошибок.",
            proof2Title: "Визуальный поиск по образцу",
            proof2Body: "Заданный тестовый запрос нашёл ровно две подтверждённые фотографии Aprilia Tuono V4R и не выдал посторонние мотоциклы.",
            proof3Metric: "Фото + видео",
            proof3Title: "Поиск человека",
            proof3Body: "Один подтверждённый человек был найден на фотографии и в видео; обе привязки зафиксированы в журнале аудита.",
            proof4Title: "Локальные сервисы",
            proof4Body: "При последней документированной проверке двенадцать сервисов поиска и анализа работали без ошибок.",
            proofDisclaimer: "Важно: TalpaX пока находится в разработке. Публичной версии, независимых сравнительных испытаний и гарантированной производительности на другом оборудовании ещё нет.",
            whyEyebrow: "Почему это важно",
            whyTitle: "Единый поиск по личному архиву",
            whyIntro: "Цель TalpaX проста: сделать личные файлы доступными для современного ИИ-поиска, не передавая контроль над данными третьим лицам.",
            why1Title: "Личные данные остаются личными",
            why1Body: "Индекс и модели ИИ работают локально. Общедоступные дополнительные сведения запрашиваются только после отдельного контролируемого разрешения.",
            why2Title: "Один запрос вместо множества приложений",
            why2Body: "Планируемый интерфейс объединяет разные типы файлов и поисковые признаки в одном понятном диалоге.",
            why3Title: "Подтверждение вместо слепого доверия",
            why3Body: "Имена людей и точные идентификаторы принимаются только после подтверждения, а решения можно проверить позднее.",
            supportEyebrow: "Независимая разработка",
            supportTitle: "Помогите превратить прототип в надёжный продукт",
            supportBody: "TalpaX создаётся без поддержки компании или инвестора. Пожертвования помогают оплачивать время разработки, тестовое оборудование и подготовку устанавливаемой версии.",
            supportButton: "Открыть проект на GoFundMe",
            footer: "TalpaX — частный проект в разработке. Версия 0.7.2 · Публичной версии пока нет · Производительность и доступность не гарантируются. © 2026 Mario Kowalski."
        }
    };

    const select = document.getElementById("lang");
    languages.forEach(function (language) {
        const option = document.createElement("option");
        option.value = language.code;
        option.textContent = language.label;
        select.appendChild(option);
    });

    function applyLanguage(code) {
        const dictionary = text[code] || text.de;
        document.documentElement.lang = code;
        document.title = dictionary.title;
        document.querySelectorAll("[data-t]").forEach(function (node) {
            const key = node.getAttribute("data-t");
            if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
                node.textContent = dictionary[key];
            }
        });
        select.value = code;
        try { localStorage.setItem("talpax-language", code); } catch (_) {}
    }

    let initial = "de";
    try {
        const saved = localStorage.getItem("talpax-language");
        if (saved && text[saved]) initial = saved;
    } catch (_) {}

    select.addEventListener("change", function () { applyLanguage(select.value); });
    applyLanguage(initial);
})();
