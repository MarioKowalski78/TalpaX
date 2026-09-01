/* TalpaX Landing Page – i18n
 * Alle Texte central in diesem Objekt. Sprachen: de (Standard),
 * en, zh-CN (Mandarin, vereinfacht), zh-TW (Kantonesisch, traditionell),
 * ru, hi, ta, es, pt, fr.
 */
(function () {
    "use strict";

    var LANGS = {
        de:    { flag: "🇩🇪", name: "Deutsch",            htmlLang: "de",      aiLabel: "KI-Übersetzung" },
        en:    { flag: "🇬🇧", name: "English",            htmlLang: "en",      aiLabel: "AI translation" },
        "zh-CN": { flag: "🇨🇳", name: "简体中文",          htmlLang: "zh-CN",   aiLabel: "AI 翻译" },
        "zh-TW": { flag: "🇭🇰", name: "繁體中文 (廣東話)",  htmlLang: "zh-Hant", aiLabel: "AI 翻譯" },
        ru:    { flag: "🇷🇺", name: "Русский",            htmlLang: "ru",      aiLabel: "перевод ИИ" },
        hi:    { flag: "🇮🇳", name: "हिन्दी",             htmlLang: "hi",      aiLabel: "AI अनुवाद" },
        ta:    { flag: "🇮🇳", name: "தமிழ்",              htmlLang: "ta",      aiLabel: "AI மொழிபெயர்ப்பு" },
        es:    { flag: "🇪🇸", name: "Español",            htmlLang: "es",      aiLabel: "traducción IA" },
        pt:    { flag: "🇵🇹", name: "Português",          htmlLang: "pt",      aiLabel: "tradução de IA" },
        fr:    { flag: "🇫🇷", name: "Français",           htmlLang: "fr",      aiLabel: "traduction IA" },
        it:    { flag: "🇮🇹", name: "Italiano",           htmlLang: "it",      aiLabel: "traduzione IA" },
        ja:    { flag: "🇯🇵", name: "日本語",             htmlLang: "ja",      aiLabel: "AI翻訳" },
        ar:    { flag: "🇸🇦", name: "العربية",            htmlLang: "ar",      aiLabel: "ترجمة الذكاء الاصطناعي" },
        ko:    { flag: "🇰🇷", name: "한국어",             htmlLang: "ko",      aiLabel: "AI 번역" },
        tr:    { flag: "🇹🇷", name: "Türkçe",             htmlLang: "tr",      aiLabel: "yapay zekâ çevirisi" },
        nl:    { flag: "🇳🇱", name: "Nederlands",         htmlLang: "nl",      aiLabel: "AI-vertaling" },
        pl:    { flag: "🇵🇱", name: "Polski",             htmlLang: "pl",      aiLabel: "tłumaczenie AI" }
    };

    var T = {
        de: {
            langLabel: "Sprache / Language",
            nav: { functions: "Funktionen", compare: "Vergleich", hardware: "Hardware", support: "Unterstützen", privacy: "Datenschutz" },
            hero: {
                kick: "100% lokal · null Cloud · immer privat",
                h1a: "Deine eigene private KI-Suche,",
                h1b: "für all deine Dateien,",
                h1c: "auf deinem eigenen Server.",
                lede: "TalpaX läuft vollständig auf deiner Hardware. Es indexiert deine privaten Fotos, Videos, Dokumente und Audiodateien, erkennt Gesichter, findet Objekte und Texte – und liefert zu jedem Treffer einen Beleg, den du selbst prüfen kannst. Deine Daten verlassen dein Zuhause nie.",
                btnCompare: "Vergleich ansehen",
                btnMore: "TalpaX kennenlernen"
            },
            feat: {
                eyebrow: "Was es kann",
                title: "Ein Prinzip: Deine Dateien gehören dir",
                sub: "Diese Funktionen gibt es heute schon – komplett auf deinem Gerät und ganz ohne Cloud.",
                cards: [
                    ["Eine Suche, alle deine Quellen", "Natürliche Sprache, Text aus Dokumenten und Bildern (OCR), visuelle Objekte und gelernte Signale – alles in einer Suche."],
                    ["Gesichtserkennung", "Findet dieselbe Person in deinen Fotos und Videos – dank bestätigter Referenzgesichter und medienübergreifender Gruppierung."],
                    ["Belege, keine Vermutungen", "Jeder Treffer wird belegt, nie geraten. Identitäten und Zuordnungen werden erst nach deiner Bestätigung übernommen."],
                    ["Suche im Dokumentinhalt", "Wir indexieren, was ein Dokument sagt, nicht wie es heißt: Volltext und OCR bei Scans machen selbst kuriose Namen leicht auffindbar."],
                    ["Eine Suche, die dich versteht", "Auf Wunsch bezieht die Suche ein, wer sie durchführt: Ordner, Vorwissen, alte Gewohnheiten – stets unter deiner Kontrolle."],
                    ["OCR für Gescanntes", "Der Text deiner eingescannten Dokumente und Fotos wird gelesen und durchsuchbar – komplett offline."],
                    ["Medien-Metadaten", "Liest und reichert die Metadaten deiner Videos und Musik an – zuhause, ohne etwas nach außen zu senden."],
                    ["Saubere MP3-Tags", "Bringt die Tags deiner Musik in Ordnung und reichert sie an, damit Titel, Künstler und Alben zuverlässig gefunden werden."],
                    ["Von Haus aus cloudfrei", "Alle Modelle laufen auf deiner Hardware. Keine Cloud, keine Dritten, keine private Datei verlässt dein Zuhause."],
                    ["Risikofreies Ordnen", "Benennt um und sortiert immer mit Ausweg: Originale bleiben unangetastet, jede Änderung ist prüf- und rückgängig machbar. Automatische Ordnung folgt in V1.x."],
                    ["Duplikat-Erkennung", "Findet doppelte oder ähnliche Bilder (geplant für V1.x) – ein großer Schritt zu aufgeräumten, klaren Sammlungen."],
                    ["Unabhängig von jedem Hersteller", "TalpaX ist an kein NAS gebunden. Es läuft als Container-Plattform auf deinem vorhandenen Server."]
                ]
            },
            cmp: {
                eyebrow: "Im Vergleich",
                title: "TalpaX gegen NAS-Apps",
                sub: "Ein fairer, sachlicher Blick auf die eingebauten Foto-, Musik- und Such-Apps der NAS-Hersteller sowie die KI-Suche – ohne eine Seite zu bevorzugen.",
                lead: "Hinweis zu diesem Vergleich:",
                body: "Die Tabelle unten setzt TalpaX (Stand 0.7.0) auf gleicher Basis der KI-Suche von Synology (Deep Search) und den eingebauten Foto-/Musik-/Such-Apps von QNAP (z. B. QuMagie) gegenüber. Sie dient der Orientierung, ist kein Benchmark und erhebt keinen Anspruch auf Vollständigkeit. Der eigentliche Unterschied liegt nicht in einer einzelnen Funktion: Es ist das Prinzip, dass alles lokal auf deiner eigenen Hardware bleibt – und genau das ist TalpaX’ Daseinszweck.",
                th1: "Aspekt", th2: "Synology Deep Search", th3: "QNAP (z. B. QuMagie)",
                rows: [
                    ["Wo deine Daten liegen und verarbeitet werden", "Auf deiner eigenen Hardware, lokal; keine Cloud", "Auf deinem NAS, lokal", "Auf deinem NAS, lokal"],
                    ["Natürliche Sprachsuche", "KI-gestützt, verbindet mehrere Quellen", "KI-basiert (semantische Suche, v. a. in Fotos)", "überwiegend Schlüsselwörter und Ordner"],
                    ["Suche im Dokumentinhalt", "Indexiert den echten Inhalt (Volltext, OCR von Scans), nicht nur den Namen", "foto-/medienzentriert; Dokumenteninhalte begrenzt", "überwiegend Dateiname/Ordner, etwas Textindex"],
                    ["Gesichtserkennung", "Fotos und Videos, mit Bestätigung und Beleg", "nur Fotos (in Synology Photos integriert)", "Fotos; personenbezogene Zuordnung mühsam"],
                    ["Beleg zu jedem Treffer", "Ja: Jeder Treffer kommt mit Beleg", "in der Regel nicht", "in der Regel nicht"],
                    ["Video- und Musik-Metadaten", "Liest und reichert an, zuhause", "außerhalb des Deep-Search-Fokus", "über separate Medien-Apps, paketabhängig"],
                    ["MP3-Tags verbessern", "Ja: findet und bereinigt MP3-Metadaten", "außerhalb des Deep-Search-Fokus", "teilweise über Musik-Apps"],
                    ["Automatische Ordnung", "geplant (V1.x): reversible Ordnung nach Regeln", "manuell, Ordner für Ordner", "manuell, Ordner für Ordner"],
                    ["Duplikat-/Ähnlichkeitserkennung", "geplant (V1.x) für doppelte/ähnliche Bilder", "teilweise vorhanden", "teilweise vorhanden"],
                    ["Herstellerbindung", "Keine: läuft auf jedem Server (Container)", "an Synology-NAS gebunden", "an QNAP-NAS gebunden"],
                    ["Wohin es geht", "KI-Such- und Ordnungsebene über alle Dateitypen", "KI-Fotosuche in Synology Photos", "NAS-Verwaltung mit Foto-/Medien-Apps"]
                ],
                foot: "Betrachte TalpaX als ergänzende, herstellerunabhängige Ebene zum Suchen und Analysieren deiner Dateien. Die Apps, die mit deinem NAS kamen, bleiben für die Systemverwaltung weiterhin völlig ausreichend."
            },
            hw: {
                eyebrow: "Hardware",
                title: "Welche Hardware braucht TalpaX?",
                sub: "TalpaX ist nicht an bestimmte Hardware gebunden. Je kräftiger deine Maschine, desto mehr parallele KI-Verarbeitung und Suchgeschwindigkeit – gerade auf neuen, KI-fähigen NAS-Geräten.",
                lead: "Eine Hochrechnung, kein Benchmark:",
                body: "Die Zahlen unten projizieren die aktuelle TalpaX-Leistung auf Unraid-Hardware auf die Spezifikationen des Ugreen iDX6011 Pro. Nimm sie als plausiblen Anhaltspunkt, nicht als gemessenen Benchmark auf echter Ugreen-Hardware.",
                th1: "Ressource", th2: "Heute (Unraid)", th4: "Gewinn",
                rows: [
                    ["RAM", "20 GiB", "64 GB", "+220%"],
                    ["CPU", "6C/12T", "16C/16T", "+167%"],
                    ["Netzwerk", "1 Gbps", "10 Gbps", "+10×"],
                    ["KI-Inferenz", "~2–3 Sek.", "~0.8–1.2 Sek.", "~2,5× schneller"]
                ],
                mt: "Das Minimum, das du brauchst",
                ms: "TalpaX läuft als Container-Plattform auf jedem Docker-fähigen System.",
                reqs: [
                    ["CPU", "6 Kerne / 12 Threads (Intel Core i3 oder vergleichbar)"],
                    ["RAM", "32 GiB empfohlen"],
                    ["Speicher", "Images ~20 GiB + Appdaten ~17 GiB"],
                    ["Kernel", "Linux mit Docker Compose und Cgroup v2"],
                    ["Netzwerk", "1 freier Host-Port (8787)"]
                ],
                eo: "Über KI-fähige NAS",
                eos: "TalpaX wächst mit deiner Hardware mit, der Unterschied zeigt sich besonders bei paralleler KI-Verarbeitung und Suchgeschwindigkeit.",
                cards: [
                    ["Ugreen iDX6011 Pro", "Intel Core Ultra 7, 64 GB RAM und 10-GbE-Netzwerk bieten reichlich Reserven, um mehrere Dienste gleichzeitig zu betreiben, die Inferenz zu beschleunigen und das schnellere Netzwerk zu nutzen: eine bequeme Wahl."],
                    ["Ugreen DXP4800 Pro", "Die Basis-RAM von 8 GB ist für TalpaX knapp. Mit nachgerüstetem Speicher läuft es hervorragend; dann sind die Mindestanforderungen bequem erfüllt."]
                ]
            },
            sup: {
                eyebrow: "Unterstützen",
                title: "Bitte unterstütze dieses Projekt",
                sub: "TalpaX ist ein privates Projekt – ohne Firma, Team oder Investor im Hintergrund: nur Ideen, Zeit und Ausdauer.",
                p1: "Mario Kowalski (Nürnberg) betreibt auf GoFundMe die Kampagne „Privat KI Projekt nearly Noyron, for my Startup possibility“ (August 2026). Ihr Ziel: seinen Ideen die Chance geben, ein eigenes Vorhaben zu werden – vor allem rund um Deadalus, sein ehrgeizigstes Projekt zu KI und Lernsystemen.",
                p2: "Kernziel ist es, deutlich größere KI-Modelle zuhause zu betreiben: durch eine leistungsfähige, rein lokale Entwicklungsmaschine (ein Mac Studio mit großer Unified-Memory-Ausstattung) – statt für jeden ernsthaften Versuch Cloud-Rechenleistung zu mieten.",
                p3: "TalpaX wird in der Kampagne als Dankeschön für Spender erwähnt: Sobald es einen stabilen, nutzbaren Stand erreicht hat, besteht der Gedanke, Unterstützern eine frei verfügbare Version zur Verfügung zu stellen – ganz ohne Marketingversprechen.",
                p4: "Diese Seite stellt TalpaX vor. Die Kampagne selbst ist davon unabhängig und betrifft die Arbeit von Mario Kowalski.",
                tag: "GoFundMe-Kampagne",
                actionH: "Mehr erfahren & unterstützen",
                meta1: "Organisator: Mario Kowalski",
                meta2: "August 2026",
                btn: "Auf GoFundMe ansehen",
                note: "Selbst wenn du gerade nicht spenden kannst: Allein das Teilen der Kampagne hilft."
            },
            pr: {
                eyebrow: "Datenschutz",
                title: "Privatheit zuerst",
                sub: "TalpaX folgt einer einzigen Regel: Deine privaten Dateien gehören dir – und die Art, wie sie verarbeitet werden, auch.",
                items: [
                    ["0", "Cloud-Verarbeitung", "Deine Dateien gehen nirgendwohin."],
                    ["100%", "Auf deinem Gerät", "Suche, Gesichtserkennung und Ordnung laufen auf deinem eigenen Server."],
                    ["RO", "Nur lesender Zugriff", "Originale werden nur gelesen, nie überschrieben."],
                    ["✔", "Belege statt Vermutungen", "Ohne deine ausdrückliche Bestätigung wird nichts zugeordnet oder festgelegt."]
                ]
            },
            footer: { fine: "Die zu 100 % lokale Such- und Analyseplattform für private Dateien. © 2026 TalpaX." }
        },

        en: {
            langLabel: "Language",
            nav: { functions: "Features", compare: "Comparison", hardware: "Hardware", support: "Support us", privacy: "Privacy" },
            hero: {
                kick: "Fully on-device · no cloud · completely private",
                h1a: "Your own private AI search,",
                h1b: "for every file you own,",
                h1c: "right on your server.",
                lede: "TalpaX runs entirely on your hardware. It indexes your private photos, videos, documents and audio, recognises faces, finds objects and text – and backs every result with evidence you can check. Your data stays in your home, always.",
                btnCompare: "See how we compare",
                btnMore: "Discover TalpaX"
            },
            feat: {
                eyebrow: "What it does",
                title: "Built around one idea: your files stay yours",
                sub: "These features are live today, fully on-device and independent of the cloud.",
                cards: [
                    ["One search, every source", "Bring natural language, text from documents and images (OCR), visual objects and learned signals together in a single query."],
                    ["Face recognition", "Match the same person across photos and videos, using confirmed reference faces and cross-media clustering."],
                    ["Evidence, not guesses", "Every result is justified rather than guessed at. Identities and matches are only accepted after you confirm them."],
                    ["Search inside documents", "We index what a document actually says, not just its file name – so full text and OCR for scans make even awkwardly named files easy to find."],
                    ["Context-aware search", "Optionally, your search can reflect the person searching – folders, prior knowledge, past signals – always under your control."],
                    ["OCR for scans", "Text inside scanned documents and photos is read and made searchable, entirely offline."],
                    ["Media metadata", "Read and enrich metadata from your videos and music – locally, without sending anything to outside services."],
                    ["Cleaner MP3 tags", "Tidy and enrich the tags in your music so titles, artists and albums are reliably searchable."],
                    ["No cloud, by design", "Every model runs on your hardware. No cloud, no third parties, no personal files leaving your home."],
                    ["Safe organisation", "Renames and sorts with a way back: originals stay untouched, and every change can be reviewed and undone. Automatic filing is coming in V1.x."],
                    ["Duplicate detection", "Spot duplicate and similar images (planned for V1.x) – a big step toward tidy, unambiguous collections."],
                    ["Hardware agnostic", "TalpaX isn't tied to any NAS vendor. It runs as a container platform on the server you already have."]
                ]
            },
            cmp: {
                eyebrow: "How we compare",
                title: "TalpaX against the NAS apps",
                sub: "A fair, factual look at the built-in photo, music and search apps – and the AI search – from NAS makers, without favouring anyone.",
                lead: "A note on this comparison:",
                body: "The table below compares TalpaX (version 0.7.0) on equal terms with Synology's AI search (Deep Search) and QNAP's built-in photo, music and search apps (for example QuMagie). It's meant as a guide, not a benchmark, and doesn't claim to be exhaustive. The real difference isn't any single feature: it's the principle that everything stays local on hardware you own – and that's TalpaX's whole point.",
                th1: "Aspect", th2: "Synology Deep Search", th3: "QNAP (e.g. QuMagie)",
                rows: [
                    ["Where data lives & is processed", "On your own hardware, locally; no cloud", "On your NAS, locally", "On your NAS, locally"],
                    ["Natural-language search", "Powered by AI, combining many sources", "AI-based (semantic search, mainly photos)", "Mostly keyword and folder driven"],
                    ["Search inside documents", "Indexes actual content (full text, OCR for scans) – not just file names", "Photo/media focused; limited document content", "Mostly file names and folders, some text indexing"],
                    ["Face recognition", "Photos and videos, with confirmation and evidence", "Photos only (built into Synology Photos)", "Photos; person assignment takes effort"],
                    ["Evidence behind results", "Yes – results come with proof", "Generally not", "Generally not"],
                    ["Video & music metadata", "Reads and enriches it, locally", "Not part of Deep Search", "Via separate media apps, depending on package"],
                    ["Improving MP3 tags", "Yes – locates and cleans MP3 metadata", "Not part of Deep Search", "Partially, via music apps"],
                    ["Automatic filing", "Planned (V1.x): reversible rule-based sorting", "Manual, folder by folder", "Manual, folder by folder"],
                    ["Duplicate & similar detection", "Planned (V1.x) for duplicate/similar images", "Partially available", "Partially available"],
                    ["Vendor lock-in", "None – runs on any server (container)", "Tied to Synology NAS", "Tied to QNAP NAS"],
                    ["Where it's headed", "An AI search & organisation layer over every file type", "AI photo search inside Synology Photos", "NAS management with photo/media apps"]
                ],
                foot: "Think of TalpaX as a complementary, vendor-independent layer for searching and analysing your files. The apps that came with your NAS remain fully usable for system administration."
            },
            hw: {
                eyebrow: "Hardware",
                title: "What hardware does TalpaX need?",
                sub: "TalpaX isn't tied to any particular hardware. The more capable your machine, the more parallel AI processing and search speed you unlock – especially on the latest AI-ready NAS.",
                lead: "An estimate, not a benchmark:",
                body: "The figures below extrapolate TalpaX's current performance on Unraid hardware to the specifications of the Ugreen iDX6011 Pro. Treat them as a plausible indication, not as a benchmark measured on actual Ugreen hardware.",
                th1: "Resource", th2: "Today (Unraid)", th4: "Improvement",
                rows: [
                    ["RAM", "20 GiB", "64 GB", "+220%"],
                    ["CPU", "6C/12T", "16C/16T", "+167%"],
                    ["Network", "1 Gbps", "10 Gbps", "+10×"],
                    ["AI inference", "~2–3 s", "~0.8–1.2 s", "~2.5× faster"]
                ],
                mt: "Minimum hardware you'll need",
                ms: "TalpaX runs as a container platform on any Docker-capable system.",
                reqs: [
                    ["CPU", "6 cores / 12 threads (Intel Core i3 or equivalent)"],
                    ["RAM", "32 GiB recommended"],
                    ["Storage", "About 20 GiB for images + about 17 GiB of app data"],
                    ["Kernel", "Linux with Docker Compose and cgroup v2"],
                    ["Network", "One free host port (8787)"]
                ],
                eo: "A note on AI-ready NAS",
                eos: "TalpaX scales with your hardware, and the gains are especially clear in parallel AI processing and search speed.",
                cards: [
                    ["Ugreen iDX6011 Pro", "An Intel Core Ultra 7, 64 GB of RAM and 10 GbE networking give it plenty of headroom for running several services at once, faster inference and high network bandwidth – a comfortable pick."],
                    ["Ugreen DXP4800 Pro", "Its 8 GB of base RAM is tight for TalpaX. Add more memory and it works well – then the minimum requirements are comfortably met."]
                ]
            },
            sup: {
                eyebrow: "Support",
                title: "Please support this project",
                sub: "TalpaX is a private project with no company, team or investor behind it – just ideas, time and persistence.",
                p1: "Mario Kowalski (Nuremberg) is running a GoFundMe campaign, “Privat KI Projekt nearly Noyron, for my Startup possibility” (August 2026). It's about giving his ideas a chance to become a startup of his own – most of all around Deadalus, his larger project on artificial intelligence and learning systems.",
                p2: "The core aim is to buy a powerful, fully local development machine (a Mac Studio with a lot of unified memory), so he can run far larger AI models at home instead of renting cloud compute for every serious experiment.",
                p3: "TalpaX is mentioned in the campaign as a possible thank-you to donors: once it reaches a stable, usable state, the plan is to offer supporters a freely available version – without any marketing promises.",
                p4: "This page introduces TalpaX. The campaign itself is separate from it and is about Mario Kowalski's work.",
                tag: "GoFundMe campaign",
                actionH: "Learn more and lend support",
                meta1: "Organised by Mario Kowalski",
                meta2: "August 2026",
                btn: "View on GoFundMe",
                note: "Even simply sharing the campaign helps, if you can't donate right now."
            },
            pr: {
                eyebrow: "Privacy",
                title: "Privacy first",
                sub: "TalpaX lives by one rule: your personal files are yours – and so is the way they're processed.",
                items: [
                    ["0", "Cloud processing", "Your files are never sent anywhere else."],
                    ["100%", "On-device", "Search, face recognition and filing all run on your own server."],
                    ["RO", "Read-only access", "Originals are only ever read, never rewritten."],
                    ["✔", "Proof over guesses", "Nothing is matched or assigned without your explicit confirmation."]
                ]
            },
            footer: { fine: "A fully local search and analysis platform for private files. © 2026 TalpaX." }
        },

        "zh-CN": {
            langLabel: "语言",
            nav: { functions: "功能", compare: "对比", hardware: "硬件", support: "支持我们", privacy: "隐私" },
            hero: {
                kick: "100%本地 · 零云端 · 始终私密",
                h1a: "你自己的AI搜索，",
                h1b: "覆盖你所有的文件，",
                h1c: "就在你的服务器上。",
                lede: "TalpaX 完全在你的硬件上运行。它索引你的私人照片、视频、文档和音频文件，识别人脸，查找物体和文本，并为每个结果提供你可自行核对的依据。你的数据从不会离开你的家——绝不会。",
                btnCompare: "查看对比",
                btnMore: "了解 TalpaX"
            },
            feat: {
                eyebrow: "它能做什么",
                title: "一个原则：你的文件永远属于你",
                sub: "这些功能今天即可使用——完全在你的设备上，无需依赖云端。",
                cards: [
                    ["一次搜索，覆盖所有来源", "自然语言、文档与图片中的文本（OCR）、视觉对象与学习信号——全部整合在一次搜索里。"],
                    ["人脸识别", "在照片和视频中找到同一个人——得益于已确认的参考人脸和跨媒体聚类。"],
                    ["凭据，而非猜测", "每个结果都有凭据，绝无猜测。身份与关联只在你明确确认后才会被采纳。"],
                    ["搜索文档内容", "我们索引的是文档说了什么，而不是文件叫什么：全文与扫描件的OCR让再怪的名字也能轻松找到。"],
                    ["懂你的搜索", "如你所愿，搜索还会考虑是谁在做这次搜索：文件夹、先验知识、过往习惯——始终由你掌控。"],
                    ["扫描件OCR", "你扫描文档和照片中的文字被读取并变得可搜索——完全离线。"],
                    ["媒体元数据", "读取并丰富你的视频和音乐元数据——就在家里，不向外发送任何信息。"],
                    ["干净干净的MP3标签", "整理并丰富你的音乐标签，让标题、艺术家和专辑都可靠可寻。"],
                    ["设计上就很本地", "所有模型都在你的硬件上运行。没有云端、没有第三方、没有个人文件离开你的家。"],
                    ["零风险整理", "重命名和整理总是留有退路：原始文件原样保留，每次更改都可核验和撤销。自动归档将在V1.x中推出。"],
                    ["重复检测", "查找重复或相似的照片（计划于V1.x）——迈向井然有序、清晰明了收藏的一大步。"],
                    ["不依赖任何厂商", "TalpaX 不绑定任何NAS。它以容器平台的形式运行在你现有的服务器上。"]
                ]
            },
            cmp: {
                eyebrow: "对比之下",
                title: "TalpaX 对阵 NAS 应用",
                sub: "对NAS厂商内置的照片、音乐和搜索应用以及AI搜索作一次公允、客观的审视——不偏袒任何一方。",
                lead: "关于这项对比的说明：",
                body: "下表在同等条件下比较 TalpaX（0.7.0版）与 Synology 的AI搜索（Deep Search）以及 QNAP 内置的照片/音乐/搜索应用（如 QuMagie）。它旨在指明方向，而非基准测试，也不声称面面俱到。真正的区别不在某个具体功能：而在于一切都在你自己的硬件上运行这一原则——这正是 TalpaX 存在的意义。",
                th1: "维度", th2: "Synology Deep Search", th3: "QNAP（如 QuMagie）",
                rows: [
                    ["你的数据存储和处理在哪里", "在自己的硬件上，本地；无云端", "在你的NAS上，本地", "在你的NAS上，本地"],
                    ["自然语言搜索", "AI驱动，整合多个来源", "基于AI（语义搜索，主要针对照片）", "主要是关键词和文件夹"],
                    ["搜索文档内容", "索引真实内容（全文、扫描件OCR），而不只是文件名", "以照片/媒体为中心；文档内容有限", "多为文件名/文件夹，少量文本索引"],
                    ["人脸识别", "照片和视频，带确认和凭据", "仅照片（内置于 Synology Photos）", "照片；按人关联较繁琐"],
                    ["每个结果都有凭据", "有：每个结果都附有凭据", "通常没有", "通常没有"],
                    ["视频与音乐元数据", "读取并丰富，就在家里", "不属于 Deep Search 范围", "通过独立媒体应用，视软件包而定"],
                    ["MP3标签改善", "有：查找并清理MP3元数据", "不属于 Deep Search 范围", "部分实现，通过音乐应用"],
                    ["自动归档", "计划（V1.x）：按规则的可逆整理", "手动，逐文件夹进行", "手动，逐文件夹进行"],
                    ["重复与相似图像检测", "计划（V1.x）：用于重复/相似图像", "部分提供", "部分提供"],
                    ["厂商依赖", "无：可在任何服务器上运行（容器）", "绑定 Synology NAS", "绑定 QNAP NAS"],
                    ["发展方向", "覆盖所有文件类型的AI搜索与整理层", "Synology Photos 中的AI照片搜索", "带照片/媒体应用的NAS管理"]
                ],
                foot: "请将 TalpaX 视为一层补充性的、独立于厂商的搜索与分析层。你的NAS自带的应用仍足以胜任系统管理。"
            },
            hw: {
                eyebrow: "硬件",
                title: "TalpaX 需要什么样的硬件？",
                sub: "TalpaX 不绑定特定硬件。你的机器越强大，获得的并行AI处理与搜索速度就越多——尤其是在全新AI就绪的NAS上。",
                lead: "这是一项估算，而非基准测试：",
                body: "下表数据将 Unraid 硬件上 TalpaX 的当前表现外推至 Ugreen iDX6011 Pro 的规格。请视之为合理参考，而非在真实 Ugreen 硬件上测得的基准。",
                th1: "资源", th2: "现状（Unraid）", th4: "收益",
                rows: [
                    ["内存", "20 GiB", "64 GB", "+220%"],
                    ["CPU", "6核/12线程", "16核/16线程", "+167%"],
                    ["网络", "1 Gbps", "10 Gbps", "+10倍"],
                    ["AI推理", "约2–3秒", "约0.8–1.2秒", "约快2.5倍"]
                ],
                mt: "你所需的最低配置",
                ms: "TalpaX 可在任何支持 Docker 的系统上以容器平台形式运行。",
                reqs: [
                    ["CPU", "6核/12线程（Intel Core i3 或相当）"],
                    ["内存", "建议 32 GiB"],
                    ["存储", "镜像约20 GiB + 应用数据约17 GiB"],
                    ["内核", "带 Docker Compose 和 cgroup v2 的 Linux"],
                    ["网络", "1个空闲主机端口（8787）"]
                ],
                eo: "关于AI就绪的NAS",
                eos: "TalpaX 会随你的硬件成长，差距尤其体现在并行AI处理与搜索速度上。",
                cards: [
                    ["Ugreen iDX6011 Pro", "Intel Core Ultra 7、64 GB 内存与 10 GbE 网络为同时运行多项服务、加速推理并善用更快网络提供了充足余量：一个轻松省心的选择。"],
                    ["Ugreen DXP4800 Pro", "8 GB 基础内存对 TalpaX 来说偏紧。添加内存后它运行出色；届时最低要求也能轻松满足。"]
                ]
            },
            sup: {
                eyebrow: "支持",
                title: "请支持这个项目",
                sub: "TalpaX 是一个私人项目——背后没有公司、团队或投资人：只有想法、时间和坚持。",
                p1: "Mario Kowalski（纽伦堡）在 GoFundMe 上运营着“Privat KI Projekt nearly Noyron, for my Startup possibility”活动（2026年8月）。其目标是为他的想法提供一个变成自己事业的机会——尤其是围绕 Deadalus，他在AI与学习系统上最雄心勃勃的项目。",
                p2: "核心目标是在家运行远为庞大的AI模型：购置一台强大、完全本地的开发机（带大容量统一内存的 Mac Studio），而不是每次严肃尝试都租用云端算力。",
                p3: "TalpaX 在活动中被提及为对捐赠者的致谢：一旦它达到稳定、可用的状态，就有想法为支持者提供免费版本——不附带任何营销承诺。",
                p4: "本页介绍的是 TalpaX。活动本身与之独立，关系的是 Mario Kowalski 的工作。",
                tag: "GoFundMe 活动",
                actionH: "了解更多并支持",
                meta1: "组织者：Mario Kowalski",
                meta2: "2026年8月",
                btn: "在 GoFundMe 上查看",
                note: "即使现在无法捐赠，转发活动本身也是一种帮助。"
            },
            pr: {
                eyebrow: "隐私",
                title: "隐私至上",
                sub: "TalpaX 遵循一条规则：你的私人文件属于你——处理它们的方式也属于你。",
                items: [
                    ["0", "云端处理", "你的文件不会去往任何地方。"],
                    ["100%", "在你的设备上", "搜索、人脸识别和归档都在你自己的服务器上运行。"],
                    ["RO", "只读访问", "原始文件只被读取，绝不被覆写。"],
                    ["✔", "凭据，而非猜测", "不经你的明确确认，任何东西都不会被关联或判定。"]
                ]
            },
            footer: { fine: "专为私人文件打造的100%本地搜索与分析平台。© 2026 TalpaX。" }
        },

        "zh-TW": {
            langLabel: "語言",
            nav: { functions: "功能", compare: "比較", hardware: "硬件", support: "支持我們", privacy: "私隱" },
            hero: {
                kick: "100%本地 · 零雲端 · 始終私密",
                h1a: "你自己的AI搜尋，",
                h1b: "涵蓋你所有的檔案，",
                h1c: "就在你的伺服器上。",
                lede: "TalpaX 完全在你的硬件上運作。它索引你的私人相片、影片、文件及音訊檔案，識別人臉，尋找對象和文字，並為每個結果提供你可自行核對的憑證。你的數據永遠不會離開你的家——絕不。",
                btnCompare: "查看比較",
                btnMore: "了解 TalpaX"
            },
            feat: {
                eyebrow: "它能做什麼",
                title: "一個原則：你的檔案永遠屬於你",
                sub: "這些功能今天即可使用——完全在你的裝置上，不需依賴雲端。",
                cards: [
                    ["一次搜尋，涵蓋所有來源", "自然語言、文件與圖片中的文字（OCR）、視覺對象與學習訊號——全部整合在一次搜尋裡。"],
                    ["人臉識別", "在相片和影片中找到同一個人——得益於已確認的參考人臉和跨媒體聚類。"],
                    ["憑證，而非猜測", "每個結果都有憑證，絕無猜測。身份與關聯只在你明確確認後才會被採納。"],
                    ["搜尋文件內容", "我們索引的是文件說了什麼，而不是檔案叫什麼：全文與掃描件OCR讓再怪的名字也能輕鬆找到。"],
                    ["懂你的搜尋", "如你所願，搜尋還會考慮是誰在做這次搜尋：資料夾、先驗知識、過往習慣——始終由你掌控。"],
                    ["掃描件OCR", "你掃描文件和相片中的文字被讀取並變得可搜尋——完全離線。"],
                    ["媒體元數據", "讀取並豐富你的影片和音樂元數據——就在家裡，不向外發送任何資訊。"],
                    ["乾淨的MP3標籤", "整理並豐富你的音樂標籤，讓名稱、藝術家和專輯都可靠可尋。"],
                    ["設計上就很本地", "所有模型都在你的硬件上運作。沒有雲端、沒有第三方、沒有個人檔案離開你的家。"],
                    ["零風險整理", "重新命名和整理總是留有退路：原始檔案原樣保留，每次更改都可核驗和撤銷。自動歸檔將於V1.x推出。"],
                    ["重複偵測", "找出重複或相似的相片（計劃於V1.x）——邁向井然有序、清晰明瞭收藏的一大步。"],
                    ["不依賴任何廠商", "TalpaX 不綁定任何NAS。它以容器平台的形式運行在你現有的伺服器上。"]
                ]
            },
            cmp: {
                eyebrow: "比較之下",
                title: "TalpaX 對陣 NAS 應用程式",
                sub: "對NAS廠商內建的相片、音樂和搜尋應用程式以及AI搜尋作一次公允、客觀的審視——不偏袒任何一方。",
                lead: "關於這項比較的說明：",
                body: "下表在同等條件下比較 TalpaX（0.7.0版）與 Synology 的AI搜尋（Deep Search）以及 QNAP 內建的相片/音樂/搜尋應用程式（如 QuMagie）。它旨在指明方向，而非基準測試，也不聲稱面面俱到。真正的區別不在某個具體功能：而在於一切都在你自己的硬件上運作這一原則——這正是 TalpaX 存在的意義。",
                th1: "面向", th2: "Synology Deep Search", th3: "QNAP（如 QuMagie）",
                rows: [
                    ["你的數據儲存和處理在哪裡", "在自己的硬件上，本地；無雲端", "在你的NAS上，本地", "在你的NAS上，本地"],
                    ["自然語言搜尋", "AI驅動，整合多個來源", "基於AI（語義搜尋，主要針對相片）", "主要是關鍵詞和資料夾"],
                    ["搜尋文件內容", "索引真實內容（全文、掃描件OCR），而不只是檔案名稱", "以相片/媒體為中心；文件內容有限", "多為檔案名稱/資料夾，少量文字索引"],
                    ["人臉識別", "相片和影片，帶確認和憑證", "僅相片（內建於 Synology Photos）", "相片；以人為本的關聯較繁瑣"],
                    ["每個結果都有憑證", "有：每個結果都附有憑證", "通常沒有", "通常沒有"],
                    ["影片與音樂元數據", "讀取並豐富，就在家裡", "不屬於 Deep Search 範圍", "透過獨立媒體應用程式，視軟件包而定"],
                    ["MP3標籤改善", "有：找出並清理MP3元數據", "不屬於 Deep Search 範圍", "部分實現，透過音樂應用程式"],
                    ["自動歸檔", "計劃（V1.x）：按規則的可逆整理", "手動，逐資料夾進行", "手動，逐資料夾進行"],
                    ["重複與相似圖像偵測", "計劃（V1.x）：用於重複/相似圖像", "部分提供", "部分提供"],
                    ["廠商依賴", "無：可在任何伺服器上運行（容器）", "綁定 Synology NAS", "綁定 QNAP NAS"],
                    ["發展方向", "涵蓋所有檔案類型的AI搜尋與整理層", "Synology Photos 中的AI相片搜尋", "帶相片/媒體應用程式的NAS管理"]
                ],
                foot: "請將 TalpaX 視為一層補充性的、獨立於廠商的搜尋與分析層。你的NAS自帶的應用程式仍足以勝任系統管理。"
            },
            hw: {
                eyebrow: "硬件",
                title: "TalpaX 需要什麼樣的硬件？",
                sub: "TalpaX 不綁定特定硬件。你的機器越強大，獲得的並行AI處理與搜尋速度就越多——尤其是在全新AI就緒的NAS上。",
                lead: "這是估算，而非基準測試：",
                body: "下表數據將 Unraid 硬件上 TalpaX 的當前表現外推至 Ugreen iDX6011 Pro 的規格。請視之為合理參考，而非在真實 Ugreen 硬件上測得的基準。",
                th1: "資源", th2: "現況（Unraid）", th4: "收益",
                rows: [
                    ["記憶體", "20 GiB", "64 GB", "+220%"],
                    ["CPU", "6核/12線程", "16核/16線程", "+167%"],
                    ["網絡", "1 Gbps", "10 Gbps", "+10倍"],
                    ["AI推理", "約2–3秒", "約0.8–1.2秒", "約快2.5倍"]
                ],
                mt: "你所需的最低配置",
                ms: "TalpaX 可在任何支援 Docker 的系統上以容器平台形式運行。",
                reqs: [
                    ["CPU", "6核/12線程（Intel Core i3 或相當）"],
                    ["記憶體", "建議 32 GiB"],
                    ["儲存", "映像約20 GiB + 應用數據約17 GiB"],
                    ["內核", "帶 Docker Compose 和 cgroup v2 的 Linux"],
                    ["網絡", "1個空閒主機連接埠（8787）"]
                ],
                eo: "關於AI就緒的NAS",
                eos: "TalpaX 會隨你的硬件成長，差距尤其體現在並行AI處理與搜尋速度上。",
                cards: [
                    ["Ugreen iDX6011 Pro", "Intel Core Ultra 7、64 GB 記憶體與 10 GbE 網絡為同時運行多項服務、加速推理並善用更快網絡提供了充足餘量：一個輕鬆省心的選擇。"],
                    ["Ugreen DXP4800 Pro", "8 GB 基礎記憶體對 TalpaX 來說偏緊。添加記憶體後它運行出色；屆時最低要求也能輕鬆滿足。"]
                ]
            },
            sup: {
                eyebrow: "支持",
                title: "請支持這個項目",
                sub: "TalpaX 是一個私人項目——背後沒有公司、團隊或投資人：只有想法、時間和堅持。",
                p1: "Mario Kowalski（紐倫堡）在 GoFundMe 上營運著「Privat KI Projekt nearly Noyron, for my Startup possibility」活動（2026年8月）。其目標是為他的想法提供一個變成自己事業的機會——尤其是圍繞 Deadalus，他在AI與學習系統上最雄心勃勃的項目。",
                p2: "核心目標是在家運行遠為龐大的AI模型：購置一台強大、完全本地的開發機（帶大容量統一記憶體的 Mac Studio），而非每次認真嘗試都租用雲端算力。",
                p3: "TalpaX 在活動中被提及為對捐贈者的致謝：一旦它達到穩定、可用的狀態，就有想法為支持者提供免費版本——不附帶任何營銷承諾。",
                p4: "本頁介紹的是 TalpaX。活動本身與之獨立，關乎的是 Mario Kowalski 的工作。",
                tag: "GoFundMe 活動",
                actionH: "了解更多並支持",
                meta1: "組織者：Mario Kowalski",
                meta2: "2026年8月",
                btn: "在 GoFundMe 上查看",
                note: "即使現在無法捐贈，轉發活動本身也是一種幫助。"
            },
            pr: {
                eyebrow: "私隱",
                title: "私隱至上",
                sub: "TalpaX 遵循一條規則：你的私人檔案屬於你——處理它們的方式也屬於你。",
                items: [
                    ["0", "雲端處理", "你的檔案不會去往任何地方。"],
                    ["100%", "在你的裝置上", "搜尋、人臉識別和歸檔都在你自己的伺服器上運行。"],
                    ["RO", "唯讀存取", "原始檔案只被讀取，絕不被覆寫。"],
                    ["✔", "憑證，而非猜測", "未經你的明確確認，任何東西都不會被關聯或判定。"]
                ]
            },
            footer: { fine: "專為私人檔案打造的100%本地搜尋與分析平台。© 2026 TalpaX。" }
        },

        ru: {
            langLabel: "Язык",
            nav: { functions: "Возможности", compare: "Сравнение", hardware: "Оборудование", support: "Поддержать", privacy: "Конфиденциальность" },
            hero: {
                kick: "100% локально · ноль облака · всегда приватно",
                h1a: "Ваш собственный частный ИИ-поиск,",
                h1b: "для всех ваших файлов,",
                h1c: "на вашем сервере.",
                lede: "TalpaX работает целиком на вашем оборудовании. Он индексирует ваши частные фото, видео, документы и аудиофайлы, распознаёт лица, находит объекты и тексты и подкрепляет каждый результат доказательством, которое вы можете проверить сами. Ваши данные никогда не покинут дом — точка.",
                btnCompare: "Смотреть сравнение",
                btnMore: "Узнать о TalpaX"
            },
            feat: {
                eyebrow: "Что умеет",
                title: "Один принцип: ваши файлы остаются вашими",
                sub: "Эти возможности доступны уже сегодня — полностью на вашем устройстве и без зависимости от облака.",
                cards: [
                    ["Один поиск — все источники", "Естественный язык, текст из документов и изображений (OCR), визуальные объекты и изученные сигналы — всё в одном поиске."],
                    ["Распознавание лиц", "Находит одного и того же человека и на фото, и на видео — благодаря подтверждённым эталонным лицам и группировке между носителями."],
                    ["Доказательства, а не догадки", "Каждый результат подкреплён, никогда не угадан. Личности и сопоставления принимаются только после вашего подтверждения."],
                    ["Поиск внутри документов", "Мы индексируем то, что говорит документ, а не просто имя файла: полный текст и OCR сканов делают легко находимыми даже самые странные названия."],
                    ["Поиск, который вас понимает", "Если хотите, поиск учитывает, кто его выполняет: папки, имеющиеся знания, прошлые привычки — всё под вашим контролем."],
                    ["OCR для сканов", "Текст в ваших отсканированных документах и фото читается и становится доступен для поиска — полностью в офлайне."],
                    ["Метаданные медиа", "Читает и дополняет метаданные ваших видео и музыки — дома и ничего не отправляя во внешние сервисы."],
                    ["Более чистые теги MP3", "Наводит порядок в тегах вашей музыки и дополняет их, чтобы названия, исполнители и альбомы надёжно находились."],
                    ["Без облака — по построению", "Все модели работают на вашем оборудовании. Ни облака, ни третьих лиц, ни единого личного файла, покидающего дом."],
                    ["Организация без риска", "Переименовывает и раскладывает, всегда оставляя выход: оригиналы не трогаются, каждое изменение можно проверить и откатить. Автоматическая сортировка появится в V1.x."],
                    ["Обнаружение дубликатов", "Находит дубликаты и похожие изображения (запланировано на V1.x) — большой шаг к аккуратным, однозначным коллекциям."],
                    ["Независимость от производителя", "TalpaX не привязан к какому-либо NAS. Он работает как контейнерная платформа на сервере, который у вас уже есть."]
                ]
            },
            cmp: {
                eyebrow: "В сравнении",
                title: "TalpaX на фоне NAS-приложений",
                sub: "Честный и объективный взгляд на встроенные фото-, музыкальные и поисковые приложения и на ИИ-поиск производителей NAS — без предпочтений к кому-либо.",
                lead: "Примечание об этом сравнении:",
                body: "Таблица ниже сопоставляет TalpaX (версия 0.7.0) на равных с ИИ-поиском Synology (Deep Search) и с встроенными приложениями QNAP для фото/музыки/поиска (например, QuMagie). Она призвана сориентировать, а не служить бенчмарком, и не претендует на полноту. Настоящее различие — не в какой-то конкретной функции: это принцип, что всё остаётся локально на вашем собственном оборудовании, — именно в этом причина существования TalpaX.",
                th1: "Аспект", th2: "Synology Deep Search", th3: "QNAP (например, QuMagie)",
                rows: [
                    ["Где живут и обрабатываются данные", "На вашем оборудовании, локально; без облака", "На вашем NAS, локально", "На вашем NAS, локально"],
                    ["Поиск на естественном языке", "На ИИ, охватывает многие источники", "На основе ИИ (семантический поиск, в основном по фото)", "В основном по ключевым словам и папкам"],
                    ["Поиск внутри документов", "Индексирует реальное содержимое (полный текст, OCR сканов), а не только имена файлов", "Ориентирован на фото/медиа; содержимое документов ограничено", "В основном имена файлов и папок, частично индексация текста"],
                    ["Распознавание лиц", "Фото и видео, с подтверждением и доказательством", "Только фото (встроено в Synology Photos)", "Фото; привязка к человеку трудоёмка"],
                    ["Доказательство по каждому результату", "Да: каждый результат сопровождается доказательством", "Как правило, нет", "Как правило, нет"],
                    ["Метаданные видео и музыки", "Читает и дополняет, дома", "Вне рамок Deep Search", "Через отдельные медиаприложения, в зависимости от пакета"],
                    ["Улучшение тегов MP3", "Да: находит и приводит в порядок метаданные MP3", "Вне рамок Deep Search", "Частично, через музыкальные приложения"],
                    ["Автоматическая сортировка", "Запланировано (V1.x): обратимая разборка по правилам", "Вручную, папка за папкой", "Вручную, папка за папкой"],
                    ["Обнаружение дубликатов и похожих изображений", "Запланировано (V1.x) для дубликатов/похожих изображений", "Частично доступно", "Частично доступно"],
                    ["Зависимость от производителя", "Нет: работает на любом сервере (контейнер)", "Привязан к Synology NAS", "Привязан к QNAP NAS"],
                    ["Куда направлен", "Уровень ИИ-поиска и организации для всех типов файлов", "ИИ-поиск фото внутри Synology Photos", "Управление NAS с фото/медиа-приложениями"]
                ],
                foot: "Воспринимайте TalpaX как дополнительный, независимый от производителя слой для поиска и анализа ваших файлов. Приложения, которые шли с вашим NAS, остаются вполне пригодными для управления системой."
            },
            hw: {
                eyebrow: "Оборудование",
                title: "Какое оборудование нужно TalpaX?",
                sub: "TalpaX не привязан к конкретному оборудованию. Чем мощнее ваша машина, тем больше параллельной ИИ-обработки и скорости поиска вы получаете — особенно на новых NAS, подготовленных под ИИ.",
                lead: "Оценка, а не бенчмарк:",
                body: "Цифры ниже экстраполируют текущую производительность TalpaX на Unraid-оборудовании на спецификации Ugreen iDX6011 Pro. Воспринимайте их как разумную ориентировку, а не как бенчмарк, измеренный на реальном оборудовании Ugreen.",
                th1: "Ресурс", th2: "Сегодня (Unraid)", th4: "Выигрыш",
                rows: [
                    ["ОЗУ", "20 GiB", "64 GB", "+220%"],
                    ["CPU", "6C/12T", "16C/16T", "+167%"],
                    ["Сеть", "1 Gbps", "10 Gbps", "+10×"],
                    ["ИИ-вывод", "~2–3 сек.", "~0.8–1.2 сек.", "~в 2,5× быстрее"]
                ],
                mt: "Минимум, который понадобится",
                ms: "TalpaX работает как контейнерная платформа на любой системе с поддержкой Docker.",
                reqs: [
                    ["CPU", "6 ядер / 12 потоков (Intel Core i3 или аналогичный)"],
                    ["ОЗУ", "рекомендуется 32 GiB"],
                    ["Хранилище", "Около 20 GiB изображений + около 17 GiB данных приложения"],
                    ["Ядро", "Linux с Docker Compose и cgroup v2"],
                    ["Сеть", "Один свободный порт хоста (8787)"]
                ],
                eo: "О NAS, подготовленных под ИИ",
                eos: "TalpaX растёт вместе с вашим оборудованием, и разница особенно заметна в параллельной ИИ-обработке и скорости поиска.",
                cards: [
                    ["Ugreen iDX6011 Pro", "Intel Core Ultra 7, 64 GB ОЗУ и сеть 10 GbE дают более чем достаточно запаса, чтобы запускать несколько служб сразу, ускорить вывод и задействовать быструю сеть: удобный выбор."],
                    ["Ugreen DXP4800 Pro", "С базовыми 8 GB ОЗУ для TalpaX тесновато. Добавьте память — и он отлично работает; тогда минимальные требования выполняются с запасом."]
                ]
            },
            sup: {
                eyebrow: "Поддержка",
                title: "Пожалуйста, поддержите этот проект",
                sub: "TalpaX — частный проект, за которым нет компании, команды или инвестора: только идеи, время и упорство.",
                p1: "Марио Ковальски (Нюрнберг) проводит на GoFundMe кампанию «Privat KI Projekt nearly Noyron, for my Startup possibility» (август 2026). Смысл в том, чтобы дать его идеям шанс превратиться в собственное дело — прежде всего вокруг Deadalus, его самого амбициозного проекта об искусственном интеллекте и обучающих системах.",
                p2: "Главная цель — купить мощную, полностью локальную машину для разработки (Mac Studio с большим объёмом унифицированной памяти), чтобы запускать дома заметно более крупные ИИ-модели, а не арендовать вычислительные мощности в облаке при каждом серьёзном эксперименте.",
                p3: "TalpaX упоминается в кампании как форма благодарности донорам: как только он достигнет стабильного, пригодного к использованию состояния, мы планируем предложить сторонникам свободно доступную версию — без каких-либо маркетинговых обещаний.",
                p4: "Эта страница представляет TalpaX. Сама кампания от него независима и касается работы Марио Ковальски.",
                tag: "Кампания GoFundMe",
                actionH: "Узнать больше и поддержать",
                meta1: "Организатор: Марио Ковальски",
                meta2: "август 2026",
                btn: "Смотреть на GoFundMe",
                note: "Даже просто поделиться кампанией поможет, если сейчас нельзя пожертвовать."
            },
            pr: {
                eyebrow: "Конфиденциальность",
                title: "Конфиденциальность прежде всего",
                sub: "TalpaX следует одному правилу: ваши личные файлы принадлежат вам — равно как и способ их обработки.",
                items: [
                    ["0", "Облачная обработка", "Ваши файлы не отправляются никуда."],
                    ["100%", "На вашем устройстве", "Поиск, распознавание лиц и сортировка работают на вашем собственном сервере."],
                    ["RO", "Доступ только для чтения", "Оригиналы только читаются, никогда не перезаписываются."],
                    ["✔", "Доказательства, а не догадки", "Ничто не связывается и не привязывается без вашего явного подтверждения."]
                ]
            },
            footer: { fine: "Полностью локальная платформа поиска и анализа для личных файлов. © 2026 TalpaX." }
        },

        hi: {
            langLabel: "भाषा",
            nav: { functions: "विशेषताएँ", compare: "तुलना", hardware: "हार्डवेयर", support: "समर्थन करें", privacy: "गोपनीयता" },
            hero: {
                kick: "100% लोकल · शून्य क्लाउड · हमेशा निजी",
                h1a: "आपकी अपनी निजी AI खोज,",
                h1b: "आपकी सभी फ़ाइलों के लिए,",
                h1c: "आपके सर्वर पर।",
                lede: "TalpaX पूरी तरह आपके हार्डवेयर पर चलता है। यह आपकी निजी तस्वीरों, वीडियो, दस्तावेज़ों और ऑडियो फ़ाइलों को अनुक्रमित करता है, चेहरों को पहचानता है, वस्तुएँ और टेक्स्ट ढूँढता है, और हर परिणाम के साथ ऐसा प्रमाण देता है जिसे आप स्वयं जाँच सकते हैं। आपका डेटा कभी घर से बाहर नहीं जाता — बिल्कुल नहीं।",
                btnCompare: "तुलना देखें",
                btnMore: "TalpaX जानें"
            },
            feat: {
                eyebrow: "यह क्या करता है",
                title: "एक ही सिद्धांत: आपकी फ़ाइलें आपकी बनी रहती हैं",
                sub: "ये विशेषताएँ आज ही उपलब्ध हैं — पूरी तरह आपके उपकरण पर और बिना क्लाउड पर निर्भर हुए।",
                cards: [
                    ["एक खोज, आपके सभी स्रोत", "प्राकृतिक भाषा, दस्तावेज़ों और छवियों से टेक्स्ट (OCR), दृश्य वस्तुएँ और सीखे गए संकेत — सब एक ही खोज में।"],
                    ["चेहरे की पहचान", "एक ही व्यक्ति को आपकी तस्वीरों और वीडियो दोनों में ढूँढता है — पुष्ट संदर्भ चेहरों और मीडिया-पार समूहीकरण के कारण।"],
                    ["प्रमाण, अनुमान नहीं", "हर परिणाम सिद्ध होता है, कभी अनुमानित नहीं। पहचान और संयोजन केवल आपकी पुष्टि के बाद ही स्वीकार किए जाते हैं।"],
                    ["दस्तावेज़ों के भीतर खोज", "हम फ़ाइल के नाम को नहीं, बल्कि दस्तावेज़ की सामग्री को अनुक्रमित करते हैं: पूर्ण टेक्स्ट और स्कैन से मिला OCR कितने भी अजीब नामों को आसानी से खोजने योग्य बना देता है।"],
                    ["एक खोज जो आपको समझती है", "चाहें तो खोज यह भी देखती है कि इसे कौन कर रहा है: फ़ोल्डर, पूर्व ज्ञान, पुरानी आदतें — हमेशा आपके नियंत्रण में।"],
                    ["स्कैन के लिए OCR", "आपके स्कैन किए दस्तावेज़ों और तस्वीरों का टेक्स्ट पढ़ा जाता है और खोजने योग्य बनता है — पूरी तरह ऑफ़लाइन।"],
                    ["मीडिया मेटाडेटा", "आपके वीडियो और संगीत का मेटाडेटा पढ़ता और समृद्ध करता है — घर पर, बाहरी सेवाओं को कुछ भी भेजे बिना।"],
                    ["साफ़ MP3 टैग", "आपके संगीत के टैग को व्यवस्थित और समृद्ध करता है, ताकि शीर्षक, कलाकार और एल्बम विश्वसनीय रूप से मिलें।"],
                    ["डिज़ाइन से ही क्लाउड-रहित", "सभी मॉडल आपके हार्डवेयर पर चलते हैं। न क्लाउड, न तृतीय पक्ष, न घर से निकलती कोई निजी फ़ाइल।"],
                    ["जोखिम-रहित संगठन", "हमेशा वापसी का रास्ता देकर नाम बदलता और व्यवस्थित करता है: मूल फ़ाइलें यथावत रहती हैं, हर बदलाव की जाँच और वापसी संभव है। स्वचालित संग्रह V1.x में आ रहा है।"],
                    ["डुप्लिकेट पहचान", "डुप्लिकेट या मिलती-जुलती तस्वीरें ढूँढता है (V1.x के लिए योजना) — सुव्यवस्थित, स्पष्ट संग्रहों की ओर एक बड़ा कदम।"],
                    ["किसी भी निर्माता से स्वतंत्र", "TalpaX किसी NAS से बंधा नहीं है। यह आपके मौजूदा सर्वर पर कंटेनर प्लेटफ़ॉर्म के रूप में चलता है।"]
                ]
            },
            cmp: {
                eyebrow: "तुलना में",
                title: "NAS ऐप्स के सामने TalpaX",
                sub: "NAS निर्माताओं के अंतर्निहित फोटो, संगीत और खोज ऐप्स तथा AI खोज पर एक निष्पक्ष, वस्तुनिष्ठ नज़र — किसी को तरजीह दिए बिना।",
                lead: "इस तुलना के बारे में एक टिप्पणी:",
                body: "नीचे दी तालिका TalpaX (संस्करण 0.7.0) की समान शर्तों पर Synology की AI खोज (Deep Search) और QNAP के अंतर्निहित फोटो/संगीत/खोज ऐप्स (जैसे QuMagie) से तुलना करती है। यह दिशा दिखाने के लिए है, बेंचमार्क नहीं, और पूर्ण होने का दावा नहीं करती। असली अंतर कोई विशिष्ट सुविधा नहीं है: यह सिद्धांत कि सब कुछ आपके अपने हार्डवेयर पर लोकल रहता है — और यही TalpaX की सार्थकता है।",
                th1: "पहलू", th2: "Synology Deep Search", th3: "QNAP (जैसे QuMagie)",
                rows: [
                    ["आपका डेटा कहाँ रहता और संसाधित होता है", "आपके अपने हार्डवेयर पर, लोकल; कोई क्लाउड नहीं", "आपके NAS पर, लोकल", "आपके NAS पर, लोकल"],
                    ["प्राकृतिक भाषा खोज", "AI-संचालित, कई स्रोतों को जोड़ती है", "AI-आधारित (शब्दार्थ खोज, मुख्यतः फोटो में)", "मुख्यतः कीवर्ड और फ़ोल्डर"],
                    ["दस्तावेज़ों के भीतर खोज", "वास्तविक सामग्री अनुक्रमित करता है (पूर्ण टेक्स्ट, स्कैन का OCR), नाम ही नहीं", "फोटो/मीडिया-केंद्रित; दस्तावेज़ सामग्री सीमित", "मुख्यतः फ़ाइल नाम और फ़ोल्डर, कुछ टेक्स्ट अनुक्रमण"],
                    ["चेहरे की पहचान", "फोटो और वीडियो, पुष्टि और प्रमाण के साथ", "केवल फोटो (Synology Photos में अंतर्निहित)", "फोटो; व्यक्ति से जोड़ना कठिन"],
                    ["हर परिणाम पर प्रमाण", "हाँ: हर परिणाम प्रमाण के साथ आता है", "आमतौर पर नहीं", "आमतौर पर नहीं"],
                    ["वीडियो और संगीत मेटाडेटा", "पढ़ता और समृद्ध करता है, घर पर", "Deep Search के दायरे से बाहर", "अलग मीडिया ऐप्स से, पैकेज पर निर्भर"],
                    ["MP3 टैग सुधारना", "हाँ: MP3 मेटाडेटा ढूँढता और साफ़ करता है", "Deep Search के दायरे से बाहर", "आंशिक रूप से, संगीत ऐप्स से"],
                    ["स्वचालित संग्रह", "योजना (V1.x): नियमों से प्रतिवर्ती व्यवस्था", "मैनुअल, फ़ोल्डर-दर-फ़ोल्डर", "मैनुअल, फ़ोल्डर-दर-फ़ोल्डर"],
                    ["डुप्लिकेट और समान छवियों की पहचान", "योजना (V1.x) डुप्लिकेट/समान छवियों के लिए", "आंशिक रूप से उपलब्ध", "आंशिक रूप से उपलब्ध"],
                    ["निर्माता पर निर्भरता", "कोई नहीं: किसी भी सर्वर पर चलता है (कंटेनर)", "Synology NAS से बंधा", "QNAP NAS से बंधा"],
                    ["जिस ओर जाता है", "हर फ़ाइल प्रकार को कवर करने वाली AI खोज-संगठन परत", "Synology Photos के भीतर AI फोटो खोज", "फोटो/मीडिया ऐप्स के साथ NAS प्रबंधन"]
                ],
                foot: "TalpaX को आपकी फ़ाइलों की खोज-विश्लेषण के लिए एक पूरक, निर्माता-स्वतंत्र परत मानिए। आपके NAS के साथ आए ऐप्स सिस्टम प्रबंधन के लिए वैसे ही पर्याप्त रहते हैं।"
            },
            hw: {
                eyebrow: "हार्डवेयर",
                title: "TalpaX के लिए कौन सा हार्डवेयर चाहिए?",
                sub: "TalpaX किसी विशिष्ट हार्डवेयर से बंधा नहीं है। आपकी मशीन जितनी सशक्त, उतनी ही अधिक समानांतर AI प्रोसेसिंग और खोज गति — विशेषकर AI-तैयार नए NAS पर।",
                lead: "एक अनुमान, बेंचमार्क नहीं:",
                body: "नीचे दिए आँकड़े Unraid हार्डवेयर पर वर्तमान TalpaX प्रदर्शन को Ugreen iDX6011 Pro की विशिष्टताओं पर प्रक्षेपित करते हैं। इन्हें एक उचित संकेत मानिए, वास्तविक Ugreen हार्डवेयर पर मापे गए बेंचमार्क के रूप में नहीं।",
                th1: "संसाधन", th2: "आज (Unraid)", th4: "लाभ",
                rows: [
                    ["RAM", "20 GiB", "64 GB", "+220%"],
                    ["CPU", "6C/12T", "16C/16T", "+167%"],
                    ["नेटवर्क", "1 Gbps", "10 Gbps", "+10×"],
                    ["AI इन्फ़रेंस", "~2–3 सेकंड", "~0.8–1.2 सेकंड", "~2.5× तेज़"]
                ],
                mt: "जो न्यूनतम चाहिए",
                ms: "TalpaX किसी भी Docker-क्षमता वाली प्रणाली पर कंटेनर प्लेटफ़ॉर्म के रूप में चलता है।",
                reqs: [
                    ["CPU", "6 कोर / 12 थ्रेड (Intel Core i3 या समकक्ष)"],
                    ["RAM", "अनुशंसित 32 GiB"],
                    ["भंडारण", "इमेज ~20 GiB + ऐप डेटा ~17 GiB"],
                    ["कर्नेल", "Docker Compose और cgroup v2 के साथ Linux"],
                    ["नेटवर्क", "एक मुक्त होस्ट पोर्ट (8787)"]
                ],
                eo: "AI-तैयार NAS के बारे में",
                eos: "TalpaX आपके हार्डवेयर के साथ बढ़ता है, और अंतर विशेषकर समानांतर AI प्रोसेसिंग और खोज गति में दिखता है।",
                cards: [
                    ["Ugreen iDX6011 Pro", "Intel Core Ultra 7, 64 GB RAM और 10 GbE नेटवर्क कई सेवाओं को साथ चलाने, इन्फ़रेंस तेज़ करने और तेज़ नेटवर्क का उपयोग करने के लिए भरपूर गुंजाइश देते हैं: एक आरामदायक विकल्प।"],
                    ["Ugreen DXP4800 Pro", "TalpaX के लिए मूल 8 GB RAM कम पड़ती है। मेमोरी जोड़ने पर यह बढ़िया चलता है; तब न्यूनतम आवश्यकताएँ आराम से पूरी होती हैं।"]
                ]
            },
            sup: {
                eyebrow: "समर्थन",
                title: "कृपया इस परियोजना का समर्थन करें",
                sub: "TalpaX एक निजी परियोजना है — पीछे कोई कंपनी, टीम या निवेशक नहीं: केवल विचार, समय और दृढ़ता।",
                p1: "मारियो कोवाल्स्की (नूर्नबर्ग) GoFundMe पर 'Privat KI Projekt nearly Noyron, for my Startup possibility' अभियान चला रहे हैं (अगस्त 2026)। मकसद अपने विचारों को अपना व्यवसाय बनाने का अवसर देना है — विशेषकर Deadalus के इर्द-गिर्द, जो AI और शिक्षण प्रणालियों पर उनकी सबसे महत्वाकांक्षी परियोजना है।",
                p2: "केंद्रीय लक्ष्य एक शक्तिशाली, पूरी तरह लोकल विकास मशीन (बड़ी यूनिफाइड मेमोरी वाला Mac Studio) खरीदकर घर पर बहुत बड़े AI मॉडल चलाना है, बजाय हर गंभीर प्रयोग में क्लाउड कंप्यूटिंग किराए पर लेने के।",
                p3: "TalpaX का उल्लेख अभियान में दाताओं के लिए धन्यवाद के रूप में किया गया है: जब यह स्थिर, प्रयोग योग्य स्थिति तक पहुँचे, तो समर्थकों को निःशुल्क उपलब्ध संस्करण देने का विचार है — बिना किसी मार्केटिंग वादे के।",
                p4: "यह पृष्ठ TalpaX प्रस्तुत करता है। अभियान इससे स्वतंत्र है और मारियो कोवाल्स्की के कार्य से संबंधित है।",
                tag: "GoFundMe अभियान",
                actionH: "और जानें और समर्थन करें",
                meta1: "आयोजक: मारियो कोवाल्स्की",
                meta2: "अगस्त 2026",
                btn: "GoFundMe पर देखें",
                note: "अभी दान न कर पाएँ, तो भी अभियान साझा करना ही मदद करता है।"
            },
            pr: {
                eyebrow: "गोपनीयता",
                title: "गोपनीयता सर्वोपरि",
                sub: "TalpaX एक ही नियम का पालन करता है: आपकी निजी फ़ाइलें आपकी हैं — और उन्हें संसाधित करने का तरीका भी आपका है।",
                items: [
                    ["0", "क्लाउड प्रोसेसिंग", "आपकी फ़ाइलें कहीं नहीं जातीं।"],
                    ["100%", "आपके उपकरण पर", "खोज, चेहरे की पहचान और संग्रह आपके अपने सर्वर पर चलते हैं।"],
                    ["RO", "केवल-पढ़ने की पहुँच", "मूल फ़ाइलें केवल पढ़ी जाती हैं, कभी फिर से नहीं लिखी जातीं।"],
                    ["✔", "प्रमाण, अनुमान नहीं", "आपकी स्पष्ट पुष्टि के बिना कुछ भी संयोजित या निर्धारित नहीं होता।"]
                ]
            },
            footer: { fine: "निजी फ़ाइलों के लिए 100% लोकल खोज और विश्लेषण प्लेटफ़ॉर्म। © 2026 TalpaX।" }
        },

        ta: {
            langLabel: "மொழி",
            nav: { functions: "அம்சங்கள்", compare: "ஒப்பீடு", hardware: "வன்பொருள்", support: "ஆதரிக்கவும்", privacy: "தனியுரிமை" },
            hero: {
                kick: "100% உள்ளூர் · பூஜ்ஜிய கிளவுட் · எப்போதும் தனிப்பட்டது",
                h1a: "உங்கள் சொந்த தனிப்பட்ட AI தேடல்,",
                h1b: "உங்கள் எல்லா கோப்புகளுக்கும்,",
                h1c: "உங்கள் சேவையகத்தில்.",
                lede: "TalpaX முழுவதுமாக உங்கள் வன்பொருளில் இயங்குகிறது. இது உங்கள் தனிப்பட்ட புகைப்படங்கள், வீடியோக்கள், ஆவணங்கள், ஆடியோ கோப்புகளை அட்டவணைப்படுத்தி, முகங்களை அடையாளம் கண்டு, பொருள்களையும் உரைகளையும் கண்டறிந்து, ஒவ்வொரு முடிவுக்கும் நீங்களே சரிபார்க்கக்கூடிய சான்று அளிக்கிறது. உங்கள் தரவு ஒருபோதும் வீட்டை விட்டு வெளியேறாது.",
                btnCompare: "ஒப்பீடு பார்க்க",
                btnMore: "TalpaX-ஐ அறிய"
            },
            feat: {
                eyebrow: "இது என்ன செய்கிறது",
                title: "ஒரே கொள்கை: உங்கள் கோப்புகள் உங்களுடையவே",
                sub: "இந்த அம்சங்கள் இன்றே கிடைக்கின்றன — முழுவதுமாக உங்கள் சாதனத்தில், கிளவுட்டை நம்பாமல்.",
                cards: [
                    ["ஒரே தேடல், உங்கள் எல்லா மூலங்களும்", "இயற்கை மொழி, ஆவணங்கள் மற்றும் படங்களிலிருந்து உரை (OCR), காட்சிப் பொருள்கள், கற்றுக்கொண்ட சைகைகள் — அனைத்தும் ஒரே தேடலில்."],
                    ["முக அடையாளம்", "ஒரே நபரை உங்கள் புகைப்படங்களிலும் வீடியோக்களிலும் காண்கிறது — உறுதிப்படுத்தப்பட்ட முகங்களும் ஊடகம் கடந்த குழுவாக்கமும் இதற்கு காரணம்."],
                    ["சான்று, யூகம் அல்ல", "ஒவ்வொரு முடிவும் நியாயப்படுத்தப்படுகிறது, ஒருபோதும் யூகிக்கப்படுவதில்லை. அடையாளங்களும் பொருத்தங்களும் உங்கள் உறுதிப்பாட்டிற்குப் பிறகே ஏற்கப்படும்."],
                    ["ஆவணங்களின் உள்ளேயும் தேடல்", "கோப்பின் பெயரை அல்ல, ஆவணம் சொல்வதையே அட்டவணைப்படுத்துகிறோம்: முழு உரையும் ஸ்கேன்களின் OCR-ம் எவ்வளவு வித்தியாசமான பெயரானாலும் எளிதாகக் கண்டறிய உதவுகின்றன."],
                    ["உங்களைப் புரிந்துகொள்ளும் தேடல்", "விரும்பினால், தேடலை யார் செய்கிறாரோ அவரையும் தேடல் கருத்தில் கொள்கிறது: கோப்புறைகள், முன் அறிவு, பழைய பழக்கம் — எப்போதும் உங்கள் கட்டுப்பாட்டில்."],
                    ["ஸ்கேன்களுக்கான OCR", "உங்கள் ஸ்கேன் செய்யப்பட்ட ஆவணங்களின், புகைப்படங்களின் உரை படிக்கப்பட்டு தேடக்கூடியதாகிறது — முழுவதுமாக இணையம் இல்லாமல்."],
                    ["மீடியா மெட்டாடேட்டா", "உங்கள் வீடியோக்களின், இசையின் மெட்டாடேட்டாவைப் படித்து வளப்படுத்துகிறது — வீட்டில், வெளிப்புற சேவைகளுக்கு எதையும் அனுப்பாமல்."],
                    ["சுத்தமான MP3 டேக்குகள்", "உங்கள் இசையின் டேக்குகளை ஒழுங்குபடுத்தி வளப்படுத்துகிறது, அதனால் தலைப்புகள், கலைஞர்கள், ஆல்பங்கள் நம்பகமாகக் கிடைக்கும்."],
                    ["வடிவமைப்பிலேயே கிளவுட் இல்லை", "அனைத்து மாதிரிகளும் உங்கள் வன்பொருளில் இயங்கும். கிளவுட் இல்லை, மூன்றாம் தரப்பு இல்லை, வீட்டை விட்டு வெளியேறும் தனிப்பட்ட கோப்பு இல்லை."],
                    ["ஆபத்தில்லாத ஒழுங்குமுறை", "எப்போதும் திரும்ப வரும் வழியோடு பெயர் மாற்றி ஒழுங்குபடுத்துகிறது: அசல்கள் அப்படியே இருக்கும், ஒவ்வொரு மாற்றத்தையும் சரிபார்த்து மீட்டெடுக்கலாம். தானியங்கி காப்பகம் V1.x-ல் வருகிறது."],
                    ["நகல்களைக் கண்டறிதல்", "நகலான அல்லது ஒத்த படங்களைக் காண்கிறது (V1.x-க்கு திட்டம்) — ஒழுங்கான, தெளிவான சேகரிப்புகளை நோக்கிய பெரிய அடி."],
                    ["எந்த உற்பத்தியாளரிடமிருந்தும் சுதந்திரம்", "TalpaX எந்த NAS-உடனும் பிணைக்கப்படவில்லை. உங்களிடம் ஏற்கனவே உள்ள சேவையகத்தில் கன்டெய்னர் மேடையாக இயங்கும்."]
                ]
            },
            cmp: {
                eyebrow: "ஒப்பீட்டில்",
                title: "NAS செயலிகளுக்கு எதிரே TalpaX",
                sub: "NAS உற்பத்தியாளர்களின் உள்ளமைந்த புகைப்பட, இசை, தேடல் செயலிகளையும் AI தேடலையும் யாரையும் சார்பாக்காமல் நேர்மையாகவும் நடுநிலையாகவும் பார்ப்பது.",
                lead: "இந்த ஒப்பீடு குறித்த குறிப்பு:",
                body: "கீழுள்ள அட்டவணை TalpaX-ஐ (பதிப்பு 0.7.0) சம நிலையில் Synology-இன் AI தேடலுடனும் (Deep Search) QNAP-இன் உள்ளமைந்த புகைப்பட/இசை/தேடல் செயலிகளுடனும் (எ.கா. QuMagie) ஒப்பிடுகிறது. இது திசை காட்டுவதற்கானது, பெஞ்ச்மார்க் அல்ல, முழுமைக்கு உரிமை கோரவில்லை. உண்மையான வேறுபாடு எந்த குறிப்பிட்ட அம்சமும் அல்ல: உங்கள் சொந்த வன்பொருளில் எல்லாம் உள்ளூரில் இருக்கும் என்ற கொள்கையே — அதுவே TalpaX-இன் இருப்புக்கான காரணம்.",
                th1: "பகுதி", th2: "Synology Deep Search", th3: "QNAP (எ.கா. QuMagie)",
                rows: [
                    ["உங்கள் தரவு எங்கு வாழ்கிறது, செயலாக்கப்படுகிறது", "உங்கள் சொந்த வன்பொருளில், உள்ளூர்; கிளவுட் இல்லை", "உங்கள் NAS-இல், உள்ளூர்", "உங்கள் NAS-இல், உள்ளூர்"],
                    ["இயற்கை மொழி தேடல்", "AI-இயக்கப்படும், பல மூலங்களை இணைக்கிறது", "AI-அடிப்படை (சொற்பொருள் தேடல், முக்கியமாக புகைப்படங்களில்)", "முக்கியமாக முக்கியச் சொற்கள் மற்றும் கோப்புறைகள்"],
                    ["ஆவணங்களின் உள்ளேயும் தேடல்", "உண்மையான உள்ளடக்கத்தை அட்டவணைப்படுத்துகிறது (முழு உரை, ஸ்கேன்களின் OCR), பெயர் மட்டுமல்ல", "புகைப்பட/மீடியா மையம்; ஆவண உள்ளடக்கம் குறைவு", "முக்கியமாக கோப்பு பெயர் மற்றும் கோப்புறை, ஓரளவு உரை அட்டவணை"],
                    ["முக அடையாளம்", "புகைப்படங்கள் மற்றும் வீடியோக்கள், உறுதிப்பாடு மற்றும் சான்றுடன்", "புகைப்படங்கள் மட்டும் (Synology Photos-இல் உள்ளமைந்தது)", "புகைப்படங்கள்; நபருடன் பொருத்துவது கடினம்"],
                    ["ஒவ்வொரு முடிவிலும் சான்று", "ஆம்: ஒவ்வொரு முடிவும் சான்றுடன் வருகிறது", "பொதுவாக இல்லை", "பொதுவாக இல்லை"],
                    ["வீடியோ மற்றும் இசை மெட்டாடேட்டா", "படித்து வளப்படுத்துகிறது, வீட்டில்", "Deep Search-இன் எல்லைக்கு வெளியே", "தனி மீடியா செயலிகள் வழியாக, தொகுப்பைப் பொறுத்து"],
                    ["MP3 டேக்குகளை மேம்படுத்துதல்", "ஆம்: MP3 மெட்டாடேட்டாவைக் கண்டு சுத்தம் செய்கிறது", "Deep Search-இன் எல்லைக்கு வெளியே", "ஓரளவு, இசை செயலிகள் வழியாக"],
                    ["தானியங்கி காப்பகம்", "திட்டம் (V1.x): விதிகளால் மீளக்கூடிய ஒழுங்குமுறை", "கைமுறை, கோப்புறை கோப்புறையாக", "கைமுறை, கோப்புறை கோப்புறையாக"],
                    ["நகல் மற்றும் ஒத்த படங்களைக் கண்டறிதல்", "திட்டம் (V1.x) நகல்/ஒத்த படங்களுக்கு", "ஓரளவு கிடைக்கிறது", "ஓரளவு கிடைக்கிறது"],
                    ["உற்பத்தியாளர் சார்பு", "இல்லை: எந்த சேவையகத்திலும் இயங்கும் (கன்டெய்னர்)", "Synology NAS-உடன் பிணைந்தது", "QNAP NAS-உடன் பிணைந்தது"],
                    ["எதை நோக்கியது", "எல்லா கோப்பு வகைகளையும் உள்ளடக்கிய AI தேடல்-ஒழுங்கு அடுக்கு", "Synology Photos-இல் AI புகைப்பட தேடல்", "புகைப்பட/மீடியா செயலிகளுடன் NAS மேலாண்மை"]
                ],
                foot: "TalpaX-ஐ உங்கள் கோப்புகளைத் தேடி பகுப்பாய்வு செய்யும் நிரப்பு, உற்பத்தியாளர் சார்பற்ற அடுக்காக நினையுங்கள். உங்கள் NAS-உடன் வந்த செயலிகள் கணினி நிர்வாகத்திற்கு அப்படியே போதுமானவை."
            },
            hw: {
                eyebrow: "வன்பொருள்",
                title: "TalpaX-க்கு எந்த வன்பொருள் தேவை?",
                sub: "TalpaX குறிப்பிட்ட வன்பொருளுடன் பிணைக்கப்படவில்லை. உங்கள் இயந்திரம் வலுவாக இருந்தால், கூடுதல் இணையான AI செயலாக்கமும் தேடல் வேகமும் கிடைக்கும் — குறிப்பாக AI-தயார் புதிய NAS-களில்.",
                lead: "ஒரு மதிப்பீடு, பெஞ்ச்மார்க் அல்ல:",
                body: "கீழுள்ள எண்கள் Unraid வன்பொருளில் தற்போதைய TalpaX செயல்திறனை Ugreen iDX6011 Pro-இன் தன்மைகளுக்கு விரிவாக்கம் செய்கின்றன. இவற்றை நியாயமான குறிப்பாகக் கொள்ளுங்கள், உண்மையான Ugreen வன்பொருளில் அளக்கப்பட்ட பெஞ்ச்மார்க்காக அல்ல.",
                th1: "வளம்", th2: "இன்று (Unraid)", th4: "பெறுபலன்",
                rows: [
                    ["RAM", "20 GiB", "64 GB", "+220%"],
                    ["CPU", "6C/12T", "16C/16T", "+167%"],
                    ["பிணையம்", "1 Gbps", "10 Gbps", "+10×"],
                    ["AI உள்ளீடு", "~2–3 நொடி", "~0.8–1.2 நொடி", "~2.5× வேகம்"]
                ],
                mt: "உங்களுக்குத் தேவையான குறைந்தபட்சம்",
                ms: "TalpaX Docker திறன் கொண்ட எந்த அமைப்பிலும் கன்டெய்னர் மேடையாக இயங்கும்.",
                reqs: [
                    ["CPU", "6 கோர்கள் / 12 நூல்கள் (Intel Core i3 அல்லது ஒப்பிடத்தக்கது)"],
                    ["RAM", "32 GiB பரிந்துரைக்கப்படுகிறது"],
                    ["சேமிப்பு", "படங்கள் ~20 GiB + செயலி தரவு ~17 GiB"],
                    ["கெர்னல்", "Docker Compose மற்றும் cgroup v2 உடன் Linux"],
                    ["பிணையம்", "ஒரு விடுபட்ட ஹோஸ்ட் துறை (8787)"]
                ],
                eo: "AI-தயார் NAS-கள் பற்றி",
                eos: "TalpaX உங்கள் வன்பொருளுடன் வளர்கிறது, வேறுபாடு குறிப்பாக இணையான AI செயலாக்கத்திலும் தேடல் வேகத்திலும் காணப்படுகிறது.",
                cards: [
                    ["Ugreen iDX6011 Pro", "Intel Core Ultra 7, 64 GB RAM மற்றும் 10 GbE பிணையம் பல சேவைகளை ஒருங்கே இயக்கவும், உள்ளீட்டை வேகப்படுத்தவும், வேகமான பிணையத்தைப் பயன்படுத்தவும் போதுமானதை விட அதிக இடவசதி தருகின்றன: வசதியான தேர்வு."],
                    ["Ugreen DXP4800 Pro", "TalpaX-க்கு அடிப்படை 8 GB RAM குறைவாகும். நினைவகம் சேர்த்தால் இது நன்றாக இயங்கும்; அப்போது குறைந்தபட்ச தேவைகள் இடவசதியுடன் பூர்த்தியாகும்."]
                ]
            },
            sup: {
                eyebrow: "ஆதரவு",
                title: "தயவுசெய்து இந்த திட்டத்தை ஆதரியுங்கள்",
                sub: "TalpaX ஒரு தனிப்பட்ட திட்டம் — பின்னால் நிறுவனமோ குழுவோ முதலீட்டாளரோ இல்லை: யோசனைகள், நேரம், விடாமுயற்சி மட்டுமே.",
                p1: "மரியோ கோவால்ஸ்கி (நியூரம்பெர்க்) GoFundMe-இல் 'Privat KI Projekt nearly Noyron, for my Startup possibility' பிரச்சாரத்தை நடத்துகிறார் (ஆகஸ்ட் 2026). நோக்கம், தன் யோசனைகளைச் சொந்தத் தொழிலாக்க வாய்ப்பு அளிப்பது — குறிப்பாக செயற்கை நுண்ணறிவு மற்றும் கற்றல் அமைப்புகள் குறித்த அவரது மிகவும் லட்சிய திட்டமான Deadalus-ஐச் சுற்றி.",
                p2: "மைய நோக்கம், வலுவான, முழுவதுமாக உள்ளூர் மேம்பாட்டு இயந்திரத்தை (பெரிய யூனிஃபைட் மெமரி கொண்ட Mac Studio) வாங்கி வீட்டில் மிகப் பெரிய AI மாதிரிகளை இயக்குவது — ஒவ்வொரு தீவிர சோதனையிலும் கிளவுட் கம்ப்யூட்டிங்கை வாடகைக்கு எடுப்பதற்குப் பதிலாக.",
                p3: "TalpaX இந்த பிரச்சாரத்தில் நன்கொடையாளர்களுக்கு ஒரு நன்றி வடிவமாகக் குறிப்பிடப்படுகிறது: இது நிலையான, பயன்படுத்தக்கூடிய நிலையை அடைந்ததும், ஆதரவாளர்களுக்கு இலவசமாகக் கிடைக்கும் பதிப்பை வழங்கும் எண்ணம் உள்ளது — எந்த சந்தைப்படுத்தல் வாக்குறுதியும் இல்லாமல்.",
                p4: "இந்த பக்கம் TalpaX-ஐ அறிமுகப்படுத்துகிறது. பிரச்சாரம் இதிலிருந்து சுயாதீனமானது, மரியோ கோவால்ஸ்கியின் பணியைப் பற்றியது.",
                tag: "GoFundMe பிரச்சாரம்",
                actionH: "மேலும் அறிந்து ஆதரிக்கவும்",
                meta1: "ஏற்பாடு: மரியோ கோவால்ஸ்கி",
                meta2: "ஆகஸ்ட் 2026",
                btn: "GoFundMe-இல் பார்க்க",
                note: "இப்போது நன்கொடை அளிக்க முடியாவிட்டாலும், பிரச்சாரத்தைப் பகிர்வது கூட உதவுகிறது."
            },
            pr: {
                eyebrow: "தனியுரிமை",
                title: "தனியுரிமைக்கே முதல் இடம்",
                sub: "TalpaX ஒரே விதியைப் பின்பற்றுகிறது: உங்கள் தனிப்பட்ட கோப்புகள் உங்களுடையவை — அவை செயலாக்கப்படும் விதமும் உங்களுடையது.",
                items: [
                    ["0", "கிளவுட் செயலாக்கம்", "உங்கள் கோப்புகள் எங்கும் செல்வதில்லை."],
                    ["100%", "உங்கள் சாதனத்தில்", "தேடல், முக அடையாளம், காப்பகம் ஆகியவை உங்கள் சொந்த சேவையகத்தில் இயங்கும்."],
                    ["RO", "படிப்பு-மட்டும் அணுகல்", "அசல்கள் படிக்கப்படுவது மட்டுமே, மீண்டும் எழுதப்படுவதில்லை."],
                    ["✔", "சான்று, யூகம் அல்ல", "உங்கள் வெளிப்படையான உறுதிப்பாடு இல்லாமல் எதுவும் இணைக்கப்படவோ ஒதுக்கப்படவோ மாட்டாது."]
                ]
            },
            footer: { fine: "தனிப்பட்ட கோப்புகளுக்கான 100% உள்ளூர் தேடல் மற்றும் பகுப்பாய்வு மேடை. © 2026 TalpaX." }
        },

        es: {
            langLabel: "Idioma",
            nav: { functions: "Funciones", compare: "Comparativa", hardware: "Hardware", support: "Apóyanos", privacy: "Privacidad" },
            hero: {
                kick: "100 % local · cero nube · totalmente privado",
                h1a: "Tu propia búsqueda de IA privada,",
                h1b: "para todos tus archivos,",
                h1c: "en tu propio servidor.",
                lede: "TalpaX funciona por completo en tu hardware. Indexa tus fotos, vídeos, documentos y archivos de audio privados, reconoce rostros, encuentra objetos y textos, y respalda cada resultado con una prueba que puedes comprobar. Tus datos se quedan en casa, siempre.",
                btnCompare: "Ver cómo nos comparamos",
                btnMore: "Descubre TalpaX"
            },
            feat: {
                eyebrow: "Qué hace",
                title: "Una idea, un compromiso: tus archivos siguen siendo tuyos",
                sub: "Estas funciones ya están disponibles hoy, totalmente en tu dispositivo y sin depender de la nube.",
                cards: [
                    ["Un solo buscador, todas tus fuentes", "Lenguaje natural, texto de documentos e imágenes (OCR), objetos visuales y señales aprendidas, todo reunido en una sola búsqueda."],
                    ["Reconocimiento facial", "Encuentra a una misma persona en tus fotos y vídeos, gracias a caras de referencia confirmadas y al agrupamiento entre medios."],
                    ["Pruebas, no suposiciones", "Cada resultado está justificado, nunca adivinado. Las identidades y coincidencias solo se aceptan tras tu confirmación."],
                    ["Busca dentro de los documentos", "Indexamos lo que dice un documento, no solo su nombre de archivo: el texto completo y el OCR de los escaneos hacen fáciles de encontrar hasta los nombres más raros."],
                    ["Una búsqueda que te entiende", "Si quieres, la búsqueda tiene en cuenta a la persona que la hace: carpetas, conocimientos previos, hábitos pasados, siempre bajo tu control."],
                    ["OCR para escaneos", "El texto de tus documentos escaneados y de tus fotos se lee y se vuelve buscable, totalmente sin conexión."],
                    ["Metadatos multimedia", "Lee y enriquece los metadatos de tus vídeos y de tu música, en local y sin enviar nada a servicios externos."],
                    ["Etiquetas MP3 más limpias", "Ordena y enriquece las etiquetas de tu música para que títulos, artistas y álbumes se encuentren de forma fiable."],
                    ["Sin nube, por diseño", "Todos los modelos se ejecutan en tu hardware. Ni nube, ni terceros, ni un solo archivo personal que salga de tu casa."],
                    ["Una organización sin riesgos", "Renombra y clasifica dejando siempre una salida: los originales quedan intactos y cada cambio puede revisarse y deshacerse. El archivado automático llegará en V1.x."],
                    ["Detección de duplicados", "Detecta imágenes duplicadas o parecidas (previsto para V1.x), un gran paso hacia colecciones ordenadas y sin ambigüedad."],
                    ["Independiente de cualquier fabricante", "TalpaX no está atado a ningún NAS concreto. Funciona como plataforma de contenedores en el servidor que ya tienes."]
                ]
            },
            cmp: {
                eyebrow: "Cómo nos comparamos",
                title: "TalpaX frente a las apps de los NAS",
                sub: "Una mirada justa y objetiva a las apps integradas de fotos, música y búsqueda, y a la búsqueda de IA de los fabricantes de NAS, sin favorecer a nadie.",
                lead: "Una nota sobre esta comparativa:",
                body: "La tabla siguiente compara a TalpaX (versión 0.7.0) en igualdad de condiciones con la búsqueda de IA de Synology (Deep Search) y con las apps integradas de fotos, música y búsqueda de QNAP (por ejemplo, QuMagie). Pretende servir de orientación, no de benchmark, y no aspira a ser exhaustiva. La diferencia real no es ninguna función concreta: es el principio de que todo permanece local en un hardware tuyo, y eso es precisamente la razón de ser de TalpaX.",
                th1: "Aspecto", th2: "Synology Deep Search", th3: "QNAP (p. ej. QuMagie)",
                rows: [
                    ["Dónde viven y se procesan tus datos", "En tu propio hardware, en local; sin nube", "En tu NAS, en local", "En tu NAS, en local"],
                    ["Búsqueda por lenguaje natural", "Impulsada por IA, que cruza muchas fuentes", "Basada en IA (búsqueda semántica, sobre todo en fotos)", "Sobre todo por palabras clave y carpetas"],
                    ["Busca dentro de los documentos", "Indexa el contenido real (texto completo, OCR de escaneos), no solo los nombres de archivo", "Centrada en fotos/medios; contenido de documentos limitado", "Sobre todo nombres de archivos y carpetas, algo de indexación de texto"],
                    ["Reconocimiento facial", "Fotos y vídeos, con confirmación y pruebas", "Solo fotos (integrado en Synology Photos)", "Fotos; asociar a una persona cuesta trabajo"],
                    ["Pruebas en cada resultado", "Sí: cada resultado va acompañado de una prueba", "En general no", "En general no"],
                    ["Metadatos de vídeo y música", "Los lee y los enriquece, en local", "Fuera del ámbito de Deep Search", "Mediante apps multimedia aparte, según el paquete"],
                    ["Mejorar las etiquetas MP3", "Sí: localiza y limpia los metadatos MP3", "Fuera del ámbito de Deep Search", "Parcialmente, mediante apps de música"],
                    ["Archivado automático", "Previsto (V1.x): ordenación reversible por reglas", "Manual, carpeta a carpeta", "Manual, carpeta a carpeta"],
                    ["Detección de duplicados e imágenes parecidas", "Previsto (V1.x) para imágenes duplicadas o similares", "Parcialmente disponible", "Parcialmente disponible"],
                    ["Dependencia del fabricante", "Ninguna: funciona en cualquier servidor (contenedor)", "Atado al NAS de Synology", "Atado al NAS de QNAP"],
                    ["Hacia dónde va", "Una capa de búsqueda y organización de IA sobre todo tipo de archivos", "Búsqueda de fotos con IA dentro de Synology Photos", "Gestión del NAS con apps de fotos/medios"]
                ],
                foot: "Piensa en TalpaX como una capa complementaria e independiente del fabricante para buscar y analizar tus archivos. Las apps que vinieron con tu NAS siguen siendo perfectamente utilizables para administrar el sistema."
            },
            hw: {
                eyebrow: "Hardware",
                title: "¿Qué hardware necesita TalpaX?",
                sub: "TalpaX no está atado a ningún hardware concreto. Cuanto más capaz sea tu máquina, más procesamiento de IA en paralelo y más velocidad de búsqueda desbloqueas, sobre todo en los NAS más recientes preparados para IA.",
                lead: "Una estimación, no un benchmark:",
                body: "Las cifras de abajo extrapolan el rendimiento actual de TalpaX en hardware Unraid hacia las especificaciones del Ugreen iDX6011 Pro. Tómalas como una indicación plausible, no como un benchmark medido en un hardware Ugreen real.",
                th1: "Recurso", th2: "Hoy (Unraid)", th4: "Mejora",
                rows: [
                    ["RAM", "20 GiB", "64 GB", "+220%"],
                    ["CPU", "6C/12T", "16C/16T", "+167%"],
                    ["Red", "1 Gbps", "10 Gbps", "+10×"],
                    ["Inferencia de IA", "~2–3 s", "~0.8–1.2 s", "~2,5× más rápida"]
                ],
                mt: "El mínimo que necesitarás",
                ms: "TalpaX funciona como plataforma de contenedores en cualquier sistema compatible con Docker.",
                reqs: [
                    ["CPU", "6 núcleos / 12 hilos (Intel Core i3 o equivalente)"],
                    ["RAM", "32 GiB recomendados"],
                    ["Almacenamiento", "Unos 20 GiB de imágenes + unos 17 GiB de datos de la app"],
                    ["Kernel", "Linux con Docker Compose y cgroup v2"],
                    ["Red", "Un puerto de host libre (8787)"]
                ],
                eo: "Sobre los NAS preparados para IA",
                eos: "TalpaX crece con tu hardware, y el salto se nota sobre todo en el procesamiento de IA en paralelo y en la velocidad de búsqueda.",
                cards: [
                    ["Ugreen iDX6011 Pro", "Un Intel Core Ultra 7, 64 GB de RAM y conexión de 10 GbE dejan margen de sobra para ejecutar varios servicios a la vez, acelerar la inferencia y exprimir una red rápida: una elección cómoda."],
                    ["Ugreen DXP4800 Pro", "Sus 8 GB de RAM base se quedan justos para TalpaX. Añade memoria y funciona muy bien; entonces los requisitos mínimos se cumplen con holgura."]
                ]
            },
            sup: {
                eyebrow: "Apoyo",
                title: "Por favor, apoya este proyecto",
                sub: "TalpaX es un proyecto privado, sin empresa, equipo ni inversor detrás: solo ideas, tiempo y constancia.",
                p1: "Mario Kowalski (Núremberg) impulsa una campaña en GoFundMe, «Privat KI Projekt nearly Noyron, for my Startup possibility» (agosto de 2026). Se trata de dar a sus ideas la oportunidad de convertirse en su propio proyecto empresarial, sobre todo en torno a Deadalus, su proyecto más ambicioso sobre inteligencia artificial y sistemas de aprendizaje.",
                p2: "El objetivo central es comprar una máquina de desarrollo potente y totalmente local (un Mac Studio con mucha memoria unificada) para poder ejecutar en casa modelos de IA mucho más grandes, en lugar de alquilar potencia de cómputo en la nube en cada experimento serio.",
                p3: "TalpaX se menciona en la campaña como un posible agradecimiento a los donantes: cuando alcance un estado estable y utilizable, la idea es ofrecer a quienes le apoyan una versión de libre acceso, sin ninguna promesa de marketing.",
                p4: "Esta página presenta TalpaX. La campaña es independiente de él y se refiere al trabajo de Mario Kowalski.",
                tag: "Campaña en GoFundMe",
                actionH: "Saber más y apoyar",
                meta1: "Organizada por Mario Kowalski",
                meta2: "Agosto de 2026",
                btn: "Ver en GoFundMe",
                note: "Incluso compartir la campaña ayuda, si ahora no puedes donar."
            },
            pr: {
                eyebrow: "Privacidad",
                title: "La privacidad, primero",
                sub: "TalpaX se rige por una regla: tus archivos personales son tuyos, y también lo es la forma en que se procesan.",
                items: [
                    ["0", "Procesamiento en la nube", "Tus archivos nunca van a ninguna parte."],
                    ["100%", "En tu dispositivo", "La búsqueda, el reconocimiento facial y el archivado se ejecutan en tu propio servidor."],
                    ["RO", "Acceso de solo lectura", "Los originales solo se leen, nunca se reescriben."],
                    ["✔", "Pruebas, no suposiciones", "Nada se asocia ni se asigna sin tu confirmación explícita."]
                ]
            },
            footer: { fine: "Una plataforma 100 % local de búsqueda y análisis para archivos privados. © 2026 TalpaX." }
        },

        pt: {
            langLabel: "Idioma",
            nav: { functions: "Recursos", compare: "Comparação", hardware: "Hardware", support: "Apoio", privacy: "Privacidade" },
            hero: {
                kick: "100 % local · zero nuvem · sempre privado",
                h1a: "Uma pesquisa de IA privada,",
                h1b: "para todos os seus arquivos,",
                h1c: "no seu próprio servidor.",
                lede: "A TalpaX roda inteiramente no seu hardware. Ela indexa suas fotos, vídeos, documentos e arquivos de áudio privados, reconhece rostos, encontra objetos e textos e acompanha cada resultado com uma prova verificável. Seus dados nunca saem de casa, ponto final.",
                btnCompare: "Ver a comparação",
                btnMore: "Conheça a TalpaX"
            },
            feat: {
                eyebrow: "O que ela faz",
                title: "Um só princípio: seus arquivos continuam seus",
                sub: "Estes recursos já estão disponíveis hoje, inteiramente no seu dispositivo, sem depender da nuvem.",
                cards: [
                    ["Um só buscador, todas as suas fontes", "Linguagem natural, texto de documentos e imagens (OCR), objetos visuais e sinais aprendidos, tudo reunido em uma única busca."],
                    ["Reconhecimento facial", "Encontre uma mesma pessoa em suas fotos e vídeos, graças a rostos de referência confirmados e ao agrupamento entre mídias."],
                    ["Provas, não suposições", "Cada resultado vem justificado, nunca adivinhado. Identidades e associações só são aceitas após sua confirmação."],
                    ["Busca dentro dos documentos", "Indexamos o que o documento diz, não só o nome do arquivo: o texto completo e o OCR dos escaneados tornam fáceis de encontrar até os nomes mais estranhos."],
                    ["Uma busca que entende você", "Se quiser, a busca considera quem a está fazendo: pastas, conhecimento prévio, hábitos passados, sempre sob seu controle."],
                    ["OCR para escaneados", "O texto dos seus documentos escaneados e das suas fotos é lido e fica pesquisável, totalmente sem internet."],
                    ["Metadados de mídia", "Lê e enriquece os metadados dos seus vídeos e da sua música, em casa e sem enviar nada a serviços externos."],
                    ["Etiquetas MP3 mais limpas", "Organiza e enriquece as etiquetas da sua música para você encontrar títulos, artistas e álbuns com confiança."],
                    ["Sem nuvem, por design", "Todos os modelos rodam no seu hardware. Nem nuvem, nem terceiros, nem um único arquivo pessoal saindo de casa."],
                    ["Uma organização sem riscos", "Renomeia e classifica sempre deixando uma saída: os originais ficam intactos e cada mudança pode ser revisada e desfeita. O arquivamento automático chega no V1.x."],
                    ["Deteção de duplicados", "Detecta imagens duplicadas ou parecidas (previsto para V1.x), um grande passo rumo a coleções organizadas e sem ambiguidades."],
                    ["Independente de fabricante", "A TalpaX não é presa a nenhum NAS. Ela funciona como uma plataforma de contêineres no servidor que você já tem."]
                ]
            },
            cmp: {
                eyebrow: "Como nos comparamos",
                title: "TalpaX frente às apps de NAS",
                sub: "Uma análise justa e objetiva das apps integradas de fotos, música e busca, e da busca de IA dos fabricantes de NAS, sem favorecer ninguém.",
                lead: "Uma nota sobre esta comparação:",
                body: "A tabela abaixo compara a TalpaX (versão 0.7.0) em igualdade de condições com a busca de IA da Synology (Deep Search) e com as apps integradas de fotos, música e busca da QNAP (por ex., QuMagie). Ela serve de orientação, não de benchmark, e não pretende ser exaustiva. A diferença real não é nenhum recurso específico: é o princípio de que tudo permanece local em um hardware seu — e essa é justamente a razão de ser da TalpaX.",
                th1: "Aspecto", th2: "Synology Deep Search", th3: "QNAP (por ex., QuMagie)",
                rows: [
                    ["Onde seus dados vivem e são processados", "No seu próprio hardware, local; sem nuvem", "No seu NAS, local", "No seu NAS, local"],
                    ["Busca por linguagem natural", "Impulsionada por IA, cruzando muitas fontes", "Baseada em IA (busca semântica, sobretudo em fotos)", "Sobretudo por palavras-chave e pastas"],
                    ["Busca dentro dos documentos", "Indexa o conteúdo real (texto completo, OCR de escaneados), não só os nomes de arquivo", "Focada em fotos/mídia; conteúdo de documentos limitado", "Sobretudo nomes de arquivos e pastas, alguma indexação de texto"],
                    ["Reconhecimento facial", "Fotos e vídeos, com confirmação e provas", "Apenas fotos (integrado ao Synology Photos)", "Fotos; associar a uma pessoa dá trabalho"],
                    ["Provas em cada resultado", "Sim: cada resultado vem com uma prova", "Em geral não", "Em geral não"],
                    ["Metadados de vídeo e música", "Lê e enriquece, em casa", "Fora do escopo do Deep Search", "Por meio de apps de mídia à parte, conforme o pacote"],
                    ["Melhorar etiquetas MP3", "Sim: localiza e limpa os metadados MP3", "Fora do escopo do Deep Search", "Parcialmente, por meio de apps de música"],
                    ["Arquivamento automático", "Previsto (V1.x): ordenação reversível por regras", "Manual, pasta a pasta", "Manual, pasta a pasta"],
                    ["Deteção de duplicados e imagens parecidas", "Previsto (V1.x) para imagens duplicadas ou similares", "Parcialmente disponível", "Parcialmente disponível"],
                    ["Dependência do fabricante", "Nenhuma: roda em qualquer servidor (contêiner)", "Preso ao NAS da Synology", "Preso ao NAS da QNAP"],
                    ["Para onde vai", "Uma camada de busca e organização de IA sobre todo tipo de arquivo", "Busca de fotos com IA dentro do Synology Photos", "Gestão do NAS com apps de fotos/mídia"]
                ],
                foot: "Pense na TalpaX como uma camada complementar e independente de fabricante para buscar e analisar seus arquivos. As apps que vieram com o seu NAS continuam totalmente utilizáveis para administrar o sistema."
            },
            hw: {
                eyebrow: "Hardware",
                title: "De que hardware a TalpaX precisa?",
                sub: "A TalpaX não é presa a nenhum hardware específico. Quanto mais capaz for a sua máquina, mais processamento de IA em paralelo e mais velocidade de busca você desbloqueia, sobretudo nos NAS mais novos preparados para IA.",
                lead: "Uma estimativa, não um benchmark:",
                body: "Os números abaixo extrapolam o desempenho atual da TalpaX em hardware Unraid para as especificações do Ugreen iDX6011 Pro. Trate-os como uma indicação plausível, não como um benchmark medido em hardware Ugreen real.",
                th1: "Recurso", th2: "Hoje (Unraid)", th4: "Ganho",
                rows: [
                    ["RAM", "20 GiB", "64 GB", "+220%"],
                    ["CPU", "6C/12T", "16C/16T", "+167%"],
                    ["Rede", "1 Gbps", "10 Gbps", "+10×"],
                    ["Inferência de IA", "~2–3 s", "~0.8–1.2 s", "~2,5× mais rápida"]
                ],
                mt: "O mínimo que você vai precisar",
                ms: "A TalpaX funciona como uma plataforma de contêineres em qualquer sistema compatível com Docker.",
                reqs: [
                    ["CPU", "6 núcleos / 12 threads (Intel Core i3 ou equivalente)"],
                    ["RAM", "32 GiB recomendados"],
                    ["Armazenamento", "Cerca de 20 GiB de imagens + cerca de 17 GiB de dados da app"],
                    ["Kernel", "Linux com Docker Compose e cgroup v2"],
                    ["Rede", "Uma porta de host livre (8787)"]
                ],
                eo: "Sobre os NAS preparados para IA",
                eos: "A TalpaX cresce junto com o seu hardware, e o salto se nota sobretudo no processamento de IA em paralelo e na velocidade de busca.",
                cards: [
                    ["Ugreen iDX6011 Pro", "Um Intel Core Ultra 7, 64 GB de RAM e conexão de 10 GbE deixam folga de sobra para rodar vários serviços ao mesmo tempo, acelerar a inferência e aproveitar uma rede rápida: uma escolha confortável."],
                    ["Ugreen DXP4800 Pro", "Os 8 GB de RAM de fábrica ficam justos para a TalpaX. Acrescente memória e ela funciona muito bem; aí os requisitos mínimos se cumprem com folga."]
                ]
            },
            sup: {
                eyebrow: "Apoio",
                title: "Por favor, apoie este projeto",
                sub: "A TalpaX é um projeto privado, sem empresa, equipe ou investidor por trás: só ideias, tempo e constância.",
                p1: "Mario Kowalski (Nuremberg) toca uma campanha no GoFundMe, «Privat KI Projekt nearly Noyron, for my Startup possibility» (agosto de 2026). O objetivo é dar às suas ideias a chance de virar o próprio negócio, sobretudo em torno do Deadalus, seu projeto mais ambicioso sobre inteligência artificial e sistemas de aprendizado.",
                p2: "O propósito central é comprar uma máquina de desenvolvimento potente e totalmente local (um Mac Studio com muita memória unificada) para rodar em casa modelos de IA bem maiores, em vez de alugar poder de computação na nuvem a cada experimento sério.",
                p3: "A TalpaX aparece na campanha como um possível agradecimento aos doadores: quando alcançar um estado estável e utilizável, a ideia é oferecer aos apoiadores uma versão de acesso livre, sem nenhuma promessa de marketing.",
                p4: "Esta página apresenta a TalpaX. A campanha é independente dela e diz respeito ao trabalho de Mario Kowalski.",
                tag: "Campanha no GoFundMe",
                actionH: "Saiba mais e apoie",
                meta1: "Organizada por Mario Kowalski",
                meta2: "Agosto de 2026",
                btn: "Ver no GoFundMe",
                note: "Até compartilhar a campanha já ajuda, se agora você não puder doar."
            },
            pr: {
                eyebrow: "Privacidade",
                title: "A privacidade em primeiro lugar",
                sub: "A TalpaX segue uma regra: seus arquivos pessoais são seus, e também é sua a forma como eles são processados.",
                items: [
                    ["0", "Processamento na nuvem", "Seus arquivos nunca vão para lugar nenhum."],
                    ["100%", "No seu dispositivo", "A busca, o reconhecimento facial e o arquivamento rodam no seu próprio servidor."],
                    ["RO", "Acesso somente leitura", "Os originais são apenas lidos, nunca reescritos."],
                    ["✔", "Provas, não suposições", "Nada é associado nem atribuído sem a sua confirmação explícita."]
                ]
            },
            footer: { fine: "Uma plataforma 100 % local de pesquisa e análise para arquivos privados. © 2026 TalpaX." }
        },

        fr: {
            langLabel: "Langue",
            nav: { functions: "Fonctionnalités", compare: "Comparaison", hardware: "Matériel", support: "Soutenir", privacy: "Confidentialité" },
            hero: {
                kick: "100 % local · zéro cloud · privé à 100 %",
                h1a: "Votre recherche IA privée,",
                h1b: "pour tous vos fichiers,",
                h1c: "directement sur votre serveur.",
                lede: "TalpaX fonctionne entièrement sur votre matériel. Il indexe vos photos, vidéos, documents et fichiers audio privés, reconnaît les visages, retrouve objets et textes – et appuie chaque résultat sur une preuve que vous pouvez vérifier. Vos données restent chez vous, en toutes circonstances.",
                btnCompare: "Découvrir la comparaison",
                btnMore: "En savoir plus sur TalpaX"
            },
            feat: {
                eyebrow: "Ce qu'il fait",
                title: "Un principe, une promesse : vos fichiers restent les vôtres",
                sub: "Ces fonctionnalités sont disponibles dès aujourd'hui, entièrement sur votre appareil et sans le moindre cloud.",
                cards: [
                    ["Un seul moteur, toutes vos sources", "Langage naturel, texte des documents et images (OCR), objets visuels et signaux appris : le tout réuni dans une seule recherche."],
                    ["Reconnaissance faciale", "Repérez la même personne dans vos photos et vos vidéos, grâce à des visages de référence confirmés et au regroupement entre médias."],
                    ["Des preuves, pas des suppositions", "Chaque résultat est justifié, jamais deviné. Identités et correspondances ne sont acceptées qu'après votre confirmation."],
                    ["Recherche dans le contenu des documents", "Nous indexons ce que dit un document, pas seulement son nom de fichier – le texte intégral et l'OCR des scans rendent même les noms les plus improbables faciles à retrouver."],
                    ["Une recherche qui vous connaît", "À votre demande, la recherche tient compte de la personne qui la lance : dossiers, connaissances préalables, habitudes passées – toujours sous votre contrôle."],
                    ["OCR pour les scans", "Le texte présent dans vos documents scannés et vos photos est lu et rendu interrogeable, entièrement hors ligne."],
                    ["Métadonnées multimédia", "Lisez et enrichissez les métadonnées de vos vidéos et de votre musique, en local, sans rien envoyer à des services externes."],
                    ["Des tags MP3 plus propres", "Nettoyez et enrichissez les balises de votre musique pour que titres, artistes et albums soient fiables à la recherche."],
                    ["Sans cloud, par conception", "Tous les modèles s'exécutent sur votre matériel. Pas de cloud, pas de tiers, aucun fichier personnel qui quitte votre domicile."],
                    ["Une organisation sans risque", "Renomme et classe tout en laissant une porte de sortie : les originaux restent intacts, chaque modification se vérifie et s'annule. Le classement automatique arrive en V1.x."],
                    ["Détection des doublons", "Repérez les images en double et les images proches (prévu en V1.x) – un grand pas vers des collections claires et sans confusion."],
                    ["Indépendant de tout fabricant", "TalpaX n'est lié à aucun NAS particulier. Il s'exécute comme plateforme de conteneurs sur le serveur que vous possédez déjà."]
                ]
            },
            cmp: {
                eyebrow: "Comment nous nous comparons",
                title: "TalpaX face aux applications NAS",
                sub: "Un regard juste et factuel sur les applications photo, musique et recherche intégrées – et sur la recherche IA – des fabricants de NAS, sans favoriser personne.",
                lead: "Une remarque sur cette comparaison :",
                body: "Le tableau ci-dessous compare TalpaX (version 0.7.0) sur un pied d'égalité avec la recherche IA de Synology (Deep Search) et les applications photo, musique et recherche intégrées de QNAP (par exemple QuMagie). Il s'agit d'un repère, pas d'un benchmark, et il ne prétend pas être exhaustif. La vraie différence ne tient à aucune fonction en particulier : c'est le principe que tout reste local sur un matériel qui vous appartient – et c'est précisément la raison d'être de TalpaX.",
                th1: "Critère", th2: "Synology Deep Search", th3: "QNAP (ex. QuMagie)",
                rows: [
                    ["Où vivent vos données, où elles sont traitées", "Sur votre matériel, en local ; aucun cloud", "Sur votre NAS, en local", "Sur votre NAS, en local"],
                    ["Recherche en langage naturel", "Propulsée par l'IA, qui croise de nombreuses sources", "Basée sur l'IA (recherche sémantique, surtout dans les photos)", "Surtout pilotée par mots-clés et dossiers"],
                    ["Recherche dans le contenu des documents", "Indexe le contenu réel (texte intégral, OCR des scans) – pas seulement les noms de fichiers", "Axée photos/médias ; contenu des documents limité", "Surtout noms de fichiers et dossiers, un peu d'indexation de texte"],
                    ["Reconnaissance faciale", "Photos et vidéos, avec confirmation et preuves", "Photos uniquement (intégrée à Synology Photos)", "Photos ; associer une personne demande du travail"],
                    ["Preuves derrière chaque résultat", "Oui – chaque résultat s'accompagne d'une preuve", "En général non", "En général non"],
                    ["Métadonnées vidéo et musique", "Les lit et les enrichit, en local", "Hors du périmètre de Deep Search", "Par des applications média séparées, selon le pack"],
                    ["Améliorer les balises MP3", "Oui – localise et nettoie les métadonnées MP3", "Hors du périmètre de Deep Search", "Partiellement, via des applications musicales"],
                    ["Classement automatique", "Prévu (V1.x) : tri réversible selon des règles", "Manuel, dossier par dossier", "Manuel, dossier par dossier"],
                    ["Détection des doublons et des images proches", "Prévu (V1.x) pour les images en double ou similaires", "Partiellement disponible", "Partiellement disponible"],
                    ["Dépendance au fabricant", "Aucune – fonctionne sur n'importe quel serveur (conteneur)", "Lié au NAS Synology", "Lié au NAS QNAP"],
                    ["Sa trajectoire", "Une couche de recherche et d'organisation IA sur tous types de fichiers", "Recherche photo IA dans Synology Photos", "Administration NAS avec applications photo/média"]
                ],
                foot: "Considérez TalpaX comme une couche complémentaire, indépendante du fabricant, pour rechercher et analyser vos fichiers. Les applications fournies avec votre NAS restent pleinement utilisables pour l'administration du système."
            },
            hw: {
                eyebrow: "Matériel",
                title: "De quel matériel TalpaX a-t-il besoin ?",
                sub: "TalpaX n'est lié à aucun matériel précis. Plus votre machine est capable, plus vous débloquez de traitement IA parallèle et de vitesse de recherche – surtout sur les NAS récents dédiés à l'IA.",
                lead: "Une estimation, pas un benchmark :",
                body: "Les chiffres ci-dessous extrapolent les performances actuelles de TalpaX sur matériel Unraid vers les spécifications de l'Ugreen iDX6011 Pro. Prenez-les comme une indication plausible, et non comme un benchmark mesuré sur un vrai matériel Ugreen.",
                th1: "Ressource", th2: "Aujourd'hui (Unraid)", th4: "Progression",
                rows: [
                    ["RAM", "20 Gio", "64 Go", "+220 %"],
                    ["CPU", "6C/12T", "16C/16T", "+167 %"],
                    ["Réseau", "1 Gbit/s", "10 Gbit/s", "+10×"],
                    ["Inférence IA", "~2–3 s", "~0.8–1.2 s", "~2,5× plus rapide"]
                ],
                mt: "Le minimum dont vous aurez besoin",
                ms: "TalpaX s'exécute comme plateforme de conteneurs sur tout système compatible Docker.",
                reqs: [
                    ["CPU", "6 cœurs / 12 threads (Intel Core i3 ou équivalent)"],
                    ["RAM", "32 Gio recommandés"],
                    ["Stockage", "Environ 20 Gio d'images + environ 17 Gio de données applicatives"],
                    ["Noyau", "Linux avec Docker Compose et cgroup v2"],
                    ["Réseau", "Un port hôte libre (8787)"]
                ],
                eo: "À propos des NAS dédiés à l'IA",
                eos: "TalpaX évolue avec votre matériel, et le gain se voit surtout dans le traitement IA parallèle et la vitesse de recherche.",
                cards: [
                    ["Ugreen iDX6011 Pro", "Un Intel Core Ultra 7, 64 Go de RAM et du 10 GbE laissent une belle marge pour faire tourner plusieurs services à la fois, accélérer l'inférence et profiter d'un réseau rapide – un choix confortable."],
                    ["Ugreen DXP4800 Pro", "Ses 8 Go de RAM de base sont justes pour TalpaX. Ajoutez de la mémoire et tout fonctionne très bien – les exigences minimales sont alors largement couvertes."]
                ]
            },
            sup: {
                eyebrow: "Soutenir",
                title: "Veuillez soutenir ce projet",
                sub: "TalpaX est un projet privé, sans entreprise, équipe ni investisseur derrière lui – seulement des idées, du temps et de la persévérance.",
                p1: "Mario Kowalski (Nuremberg) mène une campagne GoFundMe, « Privat KI Projekt nearly Noyron, for my Startup possibility » (août 2026). Il s'agit de donner une chance à ses idées de devenir son propre projet d'entreprise – avant tout autour de Deadalus, son projet sur l'intelligence artificielle et les systèmes d'apprentissage.",
                p2: "L'objectif central est d'acheter une machine de développement puissante et entièrement locale (un Mac Studio avec beaucoup de mémoire unifiée), afin d'exécuter à la maison des modèles d'IA bien plus vastes au lieu de louer de la puissance de calcul cloud à chaque expérience sérieuse.",
                p3: "TalpaX y est présenté comme un possible remerciement aux donateurs : dès qu'il atteint un état stable et utilisable, l'idée est d'offrir aux soutiens une version librement accessible – sans aucune promesse marketing.",
                p4: "Cette page présente TalpaX. La campagne en est distincte et concerne le travail de Mario Kowalski.",
                tag: "Campagne GoFundMe",
                actionH: "En savoir plus et soutenir",
                meta1: "Organisée par Mario Kowalski",
                meta2: "août 2026",
                btn: "Voir sur GoFundMe",
                note: "Même un simple partage de la campagne aide, si vous ne pouvez pas donner pour l'instant."
            },
            pr: {
                eyebrow: "Confidentialité",
                title: "La confidentialité d'abord",
                sub: "TalpaX obéit à une règle : vos fichiers personnels vous appartiennent – tout comme la manière dont ils sont traités.",
                items: [
                    ["0", "Traitement cloud", "Vos fichiers ne partent jamais nulle part."],
                    ["100%", "Sur votre appareil", "Recherche, reconnaissance faciale et classement s'exécutent sur votre propre serveur."],
                    ["RO", "Accès en lecture seule", "Les originaux ne sont jamais que lus, jamais modifiés."],
                    ["✔", "Des preuves, pas des suppositions", "Aucune correspondance n'est établie sans votre confirmation explicite."]
                ]
            },
            footer: { fine: "Une plateforme 100 % locale de recherche et d'analyse pour vos fichiers privés. © 2026 TalpaX." }
        },

        it: {
            langLabel: "Lingua",
            nav: { functions: "Funzioni", compare: "Confronto", hardware: "Hardware", support: "Sostienici", privacy: "Privacy" },
            hero: {
                kick: "100 % locale · zero cloud · sempre privato",
                h1a: "La tua ricerca IA privata,",
                h1b: "per tutti i tuoi file,",
                h1c: "sul tuo server.",
                lede: "TalpaX gira interamente sul tuo hardware. Indicizza foto, video, documenti e file audio privati, riconosce i volti, trova oggetti e testi e accompagna ogni risultato con una prova che puoi controllare. I tuoi dati restano a casa, punto.",
                btnCompare: "Guarda il confronto",
                btnMore: "Scopri TalpaX"
            },
            feat: {
                eyebrow: "Cosa fa",
                title: "Un solo principio: i tuoi file restano tuoi",
                sub: "Queste funzioni sono già disponibili oggi, interamente sul tuo dispositivo e senza dipendere dalla nuvola.",
                cards: [
                    ["Un unico motore, tutte le tue fonti", "Linguaggio naturale, testo di documenti e immagini (OCR), oggetti visivi e segnali appresi, tutto riunito in un’unica ricerca."],
                    ["Riconoscimento facciale", "Ritrova la stessa persona nelle tue foto e nei tuoi video, grazie a volti di riferimento confermati e al raggruppamento tra media."],
                    ["Prove, non congetture", "Ogni risultato è giustificato, mai indovinato. Identità e assegnazioni vengono accettate solo dopo la tua conferma."],
                    ["Cerca dentro i documenti", "Indicizziamo ciò che il documento dice, non solo il nome del file: il testo integrale e l’OCR degli scans rendono semplici da trovare persino i nomi più strani."],
                    ["Una ricerca che ti capisce", "Se vuoi, la ricerca tiene conto di chi la fa: cartelle, conoscenze precedenti, abitudini passate, sempre sotto il tuo controllo."],
                    ["OCR per le scansioni", "Il testo dei tuoi documenti scansionati e delle tue foto viene letto e diventa ricercabile, totalmente senza connessione."],
                    ["Metadati dei media", "Legge e arricchisce i metadati dei tuoi video e della tua musica, in casa e senza inviare nulla a servizi esterni."],
                    ["Tag MP3 più puliti", "Ripulisce e arricchisce i tag della tua musica perché titoli, artisti e album si ritrovino con sicurezza."],
                    ["Niente cloud, per design", "Tutti i modelli girano sul tuo hardware. Né nuvola, né terzi, né un solo file personale che esca da casa."],
                    ["Un’organizzazione senza rischi", "Rinomina e archivia lasciando sempre una via d’uscita: gli originali restano intatti e ogni modifica può essere controllata e annullata. L’archiviazione automatica arriva in V1.x."],
                    ["Rilevamento dei duplicati", "Individua immagini duplicate o simili (previsto per V1.x), un gran passo verso collezioni ordinate e senza ambiguità."],
                    ["Indipendente da ogni produttore", "TalpaX non è legato a nessun NAS. Gira come piattaforma di container sul server che già possiedi."]
                ]
            },
            cmp: {
                eyebrow: "Come ci confrontiamo",
                title: "TalpaX di fronte alle app dei NAS",
                sub: "Uno sguardo onesto e obiettivo alle app integrate di foto, musica e ricerca, e alla ricerca IA dei produttori di NAS, senza favorire nessuno.",
                lead: "Una nota su questo confronto:",
                body: "La tabella seguente confronta TalpaX (versione 0.7.0) ad armi pari con la ricerca IA di Synology (Deep Search) e con le app integrate di foto, musica e ricerca di QNAP (per es. QuMagie). Serve come orientamento, non come benchmark, e non vuole essere esaustiva. La differenza vera non è in nessuna funzione concreta: è il principio che tutto resta locale su un hardware tuo — e questa è esattamente la ragione d’essere di TalpaX.",
                th1: "Aspetto", th2: "Synology Deep Search", th3: "QNAP (per es. QuMagie)",
                rows: [
                    ["Dove vivono e vengono elaborati i tuoi dati", "Sul tuo hardware, in locale; senza cloud", "Sul tuo NAS, in locale", "Sul tuo NAS, in locale"],
                    ["Ricerca in linguaggio naturale", "Basata sull’IA, che incrocia molte fonti", "Basata sull’IA (ricerca semantica, soprattutto nelle foto)", "Soprattutto per parole chiave e cartelle"],
                    ["Cerca dentro i documenti", "Indicizza il contenuto reale (testo integrale, OCR degli scans), non solo i nomi dei file", "Focalizzata su foto/media; contenuto dei documenti limitato", "Soprattutto nomi di file e cartelle, un po’ di indicizzazione del testo"],
                    ["Riconoscimento facciale", "Foto e video, con conferma e prove", "Solo foto (integrato in Synology Photos)", "Foto; associare alla persona richiede impegno"],
                    ["Prove in ogni risultato", "Sì: ogni risultato arriva con una prova", "In generale no", "In generale no"],
                    ["Metadati di video e musica", "Li legge e li arricchisce, in casa", "Fuori dall’ambito di Deep Search", "Tramite app media separate, a seconda del pacchetto"],
                    ["Migliorare i tag MP3", "Sì: trova e ripulisce i metadati MP3", "Fuori dall’ambito di Deep Search", "Parzialmente, tramite app musicali"],
                    ["Archiviazione automatica", "Prevista (V1.x): ordinamento reversibile per regole", "Manuale, cartella per cartella", "Manuale, cartella per cartella"],
                    ["Rilevamento di duplicati e immagini simili", "Previsto (V1.x) per immagini duplicate o simili", "Parzialmente disponibile", "Parzialmente disponibile"],
                    ["Dipende dal produttore", "No: gira su qualsiasi server (container)", "Legato al NAS Synology", "Legato al NAS QNAP"],
                    ["Dove vuole arrivare", "Un livello di ricerca e organizzazione IA su ogni tipo di file", "Ricerca foto IA dentro Synology Photos", "Gestione del NAS con app foto/media"]
                ],
                foot: "Pensa a TalpaX come a un livello complementare e indipendente dal produttore per cercare e analizzare i tuoi file. Le app che arrivano con il tuo NAS restano perfettamente utilizzabili per amministrare il sistema."
            },
            hw: {
                eyebrow: "Hardware",
                title: "Di che hardware ha bisogno TalpaX?",
                sub: "TalpaX non è legato a un hardware specifico. Più capace è la tua macchina, più elaborazione IA in parallelo e più velocità di ricerca sblocchi, soprattutto sui NAS più recenti pensati per l’IA.",
                lead: "Una stima, non un benchmark:",
                body: "I numeri qui sotto estrapolano le prestazioni attuali di TalpaX su hardware Unraid verso le specifiche dell’Ugreen iDX6011 Pro. Trattali come un’indicazione plausibile, non come un benchmark misurato su un hardware Ugreen reale.",
                th1: "Risorsa", th2: "Oggi (Unraid)", th4: "Gain",
                rows: [
                    ["RAM", "20 GiB", "64 GB", "+220%"],
                    ["CPU", "6C/12T", "16C/16T", "+167%"],
                    ["Rete", "1 Gbps", "10 Gbps", "+10×"],
                    ["Inferenza IA", "~2–3 s", "~0.8–1.2 s", "~2,5× più veloce"]
                ],
                mt: "Il minimo che ti servirà",
                ms: "TalpaX funziona come piattaforma di container su qualsiasi sistema compatibile con Docker.",
                reqs: [
                    ["CPU", "6 core / 12 thread (Intel Core i3 o equivalente)"],
                    ["RAM", "32 GiB consigliati"],
                    ["Archiviazione", "Circa 20 GiB di immagini + circa 17 GiB di dati app"],
                    ["Kernel", "Linux con Docker Compose e cgroup v2"],
                    ["Rete", "Una porta host libera (8787)"]
                ],
                eo: "Sui NAS pensati per l’IA",
                eos: "TalpaX cresce con il tuo hardware, e il salto si nota soprattutto nell’elaborazione IA in parallelo e nella velocità di ricerca.",
                cards: [
                    ["Ugreen iDX6011 Pro", "Un Intel Core Ultra 7, 64 GB di RAM e una rete a 10 GbE lasciano margine più che sufficiente per eseguire più servizi insieme, accelerare l’inferenza e sfruttare una rete veloce: una scelta comoda."],
                    ["Ugreen DXP4800 Pro", "Gli 8 GB di RAM di base sono pochi per TalpaX. Aggiungi memoria e funziona molto bene: a quel punto i requisiti minimi si soddisfano con agio."]
                ]
            },
            sup: {
                eyebrow: "Supporto",
                title: "Ti chiediamo di sostenere questo progetto",
                sub: "TalpaX è un progetto privato, senza azienda, squadra o investitore dietro: solo idee, tempo e costanza.",
                p1: "Mario Kowalski (Norimberga) porta avanti una campagna su GoFundMe, «Privat KI Projekt nearly Noyron, for my Startup possibility» (agosto 2026). Si tratta di dare alle sue idee la possibilità di diventare un’attività tutta sua, soprattutto intorno a Deadalus, il suo progetto più ambizioso su intelligenza artificiale e sistemi di apprendimento.",
                p2: "L’obiettivo centrale è comprare una macchina di sviluppo potente e totalmente locale (un Mac Studio con molta memoria unificata) per eseguire a casa modelli IA molto più grandi, invece di noleggiare potenza di calcolo nel cloud a ogni esperimento serio.",
                p3: "TalpaX è citato nella campagna come possibile ringraziamento ai donatori: una volta raggiunto uno stato stabile e utilizzabile, l’idea è offrire ai sostenitori una versione ad accesso libero, senza nessuna promessa di marketing.",
                p4: "Questa pagina presenta TalpaX. La campagna è indipendente da esso e riguarda il lavoro di Mario Kowalski.",
                tag: "Campagna GoFundMe",
                actionH: "Scopri di più e sostieni",
                meta1: "Organizzata da Mario Kowalski",
                meta2: "agosto 2026",
                btn: "Vedi su GoFundMe",
                note: "Basta anche condividere la campagna, se ora non puoi donare."
            },
            pr: {
                eyebrow: "Privacy",
                title: "Prima la privacy",
                sub: "TalpaX segue una regola: i tuoi file personali sono tuoi, e tua è anche la loro elaborazione.",
                items: [
                    ["0", "Elaborazione nel cloud", "I tuoi file non vanno da nessuna parte."],
                    ["100%", "Sul tuo dispositivo", "Ricerca, riconoscimento facciale e archiviazione girano sul tuo server."],
                    ["RO", "Accesso in sola lettura", "Gli originali vengono solo letti, mai riscritti."],
                    ["✔", "Prove, non congetture", "Nulla viene collegato o assegnato senza la tua conferma esplicita."]
                ]
            },
            footer: { fine: "Una piattaforma 100 % locale di ricerca e analisi per file privati. © 2026 TalpaX." }
        },

        ja: {
            langLabel: "言語",
            nav: { functions: "機能", compare: "比較", hardware: "ハードウェア", support: "支援する", privacy: "プライバシー" },
            hero: {
                kick: "100％ローカル · クラウドゼロ · 常にプライベート",
                h1a: "自分だけのプライベートAI検索、",
                h1b: "あらゆるファイルを対象に、",
                h1c: "自分のサーバーで。",
                lede: "TalpaX はあなたのハードウェアだけで動作します。プライベートな写真、動画、文書、音声ファイルをインデックス化し、顔を認識し、物体やテキストを見つけ、その結果それぞれに検証できる根拠を添えます。データが家の外に出ることは、絶対にありません。",
                btnCompare: "比較を見る",
                btnMore: "TalpaX を知る"
            },
            feat: {
                eyebrow: "できること",
                title: "ひとつの原則：あなたのファイルはあなたのもの",
                sub: "これらの機能は今日すでに、完全に手元の端末だけで、クラウドに頼らずに使えます。",
                cards: [
                    ["ひとつの検索で、すべての情報源", "自然言語、文書や画像のテキスト（OCR）、視覚的なオブジェクト、学習シグナルをすべてひとつの検索に統合。"],
                    ["顔認識", "写真と動画の両方で同じ人物を見つけます。確認済みの参照顔と、メディアをまたぐグループ化のおかげです。"],
                    ["推測でなく、根拠", "結果はすべて根拠つきで、決して推測ではありません。同一人物の特定や結びつけは、あなたの確認後にのみ受け入れられます。"],
                    ["文書の中まで検索", "ファイル名ではなく文書の内容をインデックス化します。全文とスキャンのOCRにより、どんなに変わった名前でも簡単に見つかります。"],
                    ["検索する人を理解する検索", "必要なら、検索には誰がしているかも考慮されます。フォルダ、事前知識、過去の習慣など、すべてあなたの管理下で。"],
                    ["スキャン用OCR", "スキャンした文書や写真の文字を読み取り、検索可能にします。完全にオフラインで。"],
                    ["メディアのメタデータ", "動画と音楽のメタデータを読み取り、補完します。すべて自宅で、外部サービスには何も送信しません。"],
                    ["きれいなMP3タグ", "音楽のタグを整理・補完し、タイトル、アーティスト、アルバムを確実に探し出せます。"],
                    ["設計からしてクラウドなし", "すべてのモデルはあなたのハードウェアで動作。クラウドも第三者も、家を出る個人ファイルも一切ありません。"],
                    ["リスクのない整理", "いつでも元に戻せる形で名前の変更や整理ができます。原本は無傷のまま、変更は確認も取り消しも可能。自動アーカイブはV1.xで登場します。"],
                    ["重複の検出", "重複した、または似た画像を見つけます（V1.xで予定）。整理され、あいまいさのないコレクションへの大きな一歩です。"],
                    ["どのメーカーにも依存しない", "TalpaX は特定のNASに縛られません。お持ちのサーバー上でコンテナプラットフォームとして動作します。"]
                ]
            },
            cmp: {
                eyebrow: "比較のなかで",
                title: "NASアプリとの比較",
                sub: "NASメーカーの内蔵フォト・音楽・検索アプリとAI検索を、特定の製品を優遇せず、公平で客観的な視点で見ます。",
                lead: "この比較についての注記：",
                body: "以下の表は、TalpaX（バージョン0.7.0）を、SynologyのAI検索（Deep Search）、およびQNAPの内蔵フォト・音楽・検索アプリ（たとえばQuMagie）と、対等な条件で比較したものです。方向性を示すもので、ベンチマークではなく、網羅的であると主張するものでもありません。本当の違いは特定の機能ではありません。すべてがあなた自身のハードウェア上にローカルで留まるという原則こそが、TalpaX の存在理由そのものです。",
                th1: "観点", th2: "Synology Deep Search", th3: "QNAP（例：QuMagie）",
                rows: [
                    ["データが存在し処理される場所", "あなた自身のハードウェア上、ローカル、クラウドなし", "あなたのNAS上、ローカル", "あなたのNAS上、ローカル"],
                    ["自然言語による検索", "AI駆動で、多数の情報源を横断", "AIベース（意味検索、主に写真）", "主にキーワードとフォルダ"],
                    ["文書の中まで検索", "実際の内容をインデックス化（全文、スキャンのOCR）、ファイル名だけでなく", "写真/メディア中心、文書内容は限定的", "主にファイル名とフォルダ、一部テキスト索引"],
                    ["顔認識", "写真と動画、確認と根拠つき", "写真のみ（Synology Photosに内蔵）", "写真、人物への結びつけは手間がかかる"],
                    ["結果に根拠が付く", "はい：すべての結果に根拠が付きます", "概ねなし", "概ねなし"],
                    ["動画と音楽のメタデータ", "読み取り・補完、自宅で", "Deep Searchの対象外", "パッケージに応じて別のメディアアプリ経由"],
                    ["MP3タグの改善", "はい：MP3メタデータを探して整理", "Deep Searchの対象外", "部分的に、音楽アプリ経由"],
                    ["自動アーカイブ", "予定（V1.x）：ルールによる元に戻せる整理", "手動、フォルダ単位", "手動、フォルダ単位"],
                    ["重複・類似画像の検出", "予定（V1.x）重複・類似画像向け", "部分的に利用可能", "部分的に利用可能"],
                    ["メーカーへの依存", "なし：どのサーバーでも動作（コンテナ）", "Synology NASに依存", "QNAP NASに依存"],
                    ["めざす姿", "あらゆるファイル種別を対象とするAIの検索・整理レイヤー", "Synology Photos内のAI写真検索", "フォト/メディアアプリによるNAS管理"]
                ],
                foot: "TalpaX を、あなたのファイルを検索・分析するための、メーカーに依存しない補完的なレイヤーだと考えてください。NASに付属していたアプリは、システム管理のためにそのまま十分使えます。"
            },
            hw: {
                eyebrow: "ハードウェア",
                title: "TalpaX に必要なハードウェアは？",
                sub: "TalpaX は特定のハードウェアに縛られません。マシンが高性能なほど、特にAI対応NASでは、並列AI処理と検索速度で大きな利点が得られます。",
                lead: "推定であり、ベンチマークではありません：",
                body: "以下の数値は、Unraidハードウェア上の TalpaX の現在の性能を、Ugreen iDX6011 Pro の仕様へ外挿したものです。実機のUgreenハードウェアで測定したベンチマークではなく、妥当な目安としてお考えください。",
                th1: "リソース", th2: "現状（Unraid）", th4: "向上",
                rows: [
                    ["RAM", "20 GiB", "64 GB", "+220%"],
                    ["CPU", "6C/12T", "16C/16T", "+167%"],
                    ["ネットワーク", "1 Gbps", "10 Gbps", "+10×"],
                    ["AI推論", "約2〜3秒", "約0.8〜1.2秒", "約2.5倍高速"]
                ],
                mt: "最低限必要なもの",
                ms: "TalpaX はDocker対応の任意のシステム上で、コンテナプラットフォームとして動作します。",
                reqs: [
                    ["CPU", "6コア/12スレッド（Intel Core i3 または同等）"],
                    ["RAM", "32 GiB推奨"],
                    ["ストレージ", "画像データ約20 GiB + アプリデータ約17 GiB"],
                    ["カーネル", "Docker Compose と cgroup v2 を備えたLinux"],
                    ["ネットワーク", "空きホストポート1つ（8787）"]
                ],
                eo: "AI対応NASについて",
                eos: "TalpaX はハードウェアとともに伸びます。その差は特に、並列AI処理と検索速度で顕著に表れます。",
                cards: [
                    ["Ugreen iDX6011 Pro", "Intel Core Ultra 7、64 GB RAM、10 GbEネットワークは、複数のサービスを同時に動かし、推論を速め、高速なネットワークを活かすのに十分すぎる余裕があります。快適な選択肢です。"],
                    ["Ugreen DXP4800 Pro", "標準の8 GB RAMでは TalpaX には余裕が少なめです。メモリを増設すれば問題なく動作し、最低要件も余裕を持って満たせます。"]
                ]
            },
            sup: {
                eyebrow: "支援",
                title: "ぜひこのプロジェクトを支援してください",
                sub: "TalpaX は企業もチームも投資家もいない個人プロジェクトです。あるのはアイデア、時間、そして粘り強さだけです。",
                p1: "マリオ・コワルスキ（ニュルンベルク）がGoFundMeで「Privat KI Projekt nearly Noyron, for my Startup possibility」というキャンペーン（2026年8月）を行っています。目的は、自分のアイデアを自分のビジネスに育てるチャンスを掴むこと、とりわけ人工知能と学習システムに関する最も野心的なプロジェクト「Deadalus」を通じてです。",
                p2: "中心となる目的は、強力で完全にローカルな開発マシン（大容量ユニファイドメモリのMac Studio）を購入し、本格的な実験のたびにクラウドの計算能力を借りるのではなく、はるかに大きなAIモデルを自宅で実行することです。",
                p3: "TalpaX はキャンペーンの中で、寄付者へのお礼のひとつとして触れられています。安定して使える状態に達したら、支援者の皆さんに無料で使えるバージョンを提供したいというのがその考えです。マーケティング上の約束は一切ありません。",
                p4: "このページは TalpaX を紹介するものです。キャンペーンはそれとは独立しており、マリオ・コワルスキの活動に関するものです。",
                tag: "GoFundMe キャンペーン",
                actionH: "詳しく見て支援する",
                meta1: "主催：マリオ・コワルスキ",
                meta2: "2026年8月",
                btn: "GoFundMe で見る",
                note: "今すぐ寄付ができなくても、キャンペーンを共有するだけでも役立ちます。"
            },
            pr: {
                eyebrow: "プライバシー",
                title: "プライバシー最優先",
                sub: "TalpaX の唯一のルール：あなたの個人ファイルはあなたのもの。その処理もあなたのものです。",
                items: [
                    ["0", "クラウド処理", "あなたのファイルがどこへ送られることはありません。"],
                    ["100%", "手元の端末で", "検索、顔認識、アーカイブはすべてあなた自身のサーバー上で動作します。"],
                    ["RO", "読み取り専用アクセス", "原本は読み取りのみ。書き換えられることはありません。"],
                    ["✔", "根拠、推測でなく", "あなたの明示的な確認なしに、何かが結びつけられたり割り当てられたりすることはありません。"]
                ]
            },
            footer: { fine: "プライベートファイルのための100％ローカルな検索・分析プラットフォーム。© 2026 TalpaX。" }
        },

        ar: {
            langLabel: "اللغة",
            nav: { functions: "الميزات", compare: "المقارنة", hardware: "العتاد", support: "ادعم", privacy: "الخصوصية" },
            hero: {
                kick: "محلي 100% · صفر سحابة · خاص دائمًا",
                h1a: "بحثك الخاص بالذكاء الاصطناعي،",
                h1b: "لكل ملفاتك،",
                h1c: "على خادمك أنت.",
                lede: "يعمل TalpaX بالكامل على عتادك. يفحص صورك وفيديوهاتك ومستنداتك وملفاتك الصوتية، ويتعرّف على الوجوه، ويعثر على الأشياء والنصوص، مع دليل على كل نتيجة يمكنك التحقق منه بنفسك. بياناتك لا تغادر منزلك أبدًا.",
                btnCompare: "شاهد المقارنة",
                btnMore: "تعرّف على TalpaX"
            },
            feat: {
                eyebrow: "ما الذي يفعله",
                title: "مبدأ واحد: ملفاتك تبقى ملكًا لك",
                sub: "هذه الميزات متاحة اليوم — بالكامل على جهازك، دون أي اعتماد على السحابة.",
                cards: [
                    ["بحث واحد، كل مصادرك", "لغة طبيعية، نصوص من المستندات والصور (OCR)، كائنات بصرية وإشارات مكتسبة — كلها في بحث واحد."],
                    ["التعرف على الوجوه", "يعثر على الشخص نفسه في صورك وفيديوهاتك — بفضل وجوه مرجعية مؤكدة وتجميع عبر الوسائط."],
                    ["دليل، لا تخمين", "كل نتيجة تُبرَّر بدليل، ولا تُخمَّن أبدًا. الهويات والارتباطات تُقبل فقط بعد تأكيدك أنت."],
                    ["البحث داخل المستندات", "نفهرس ما تقوله الوثيقة لا اسم ملفها: النص الكامل وOCR الممسوحات يجعلان حتى أغرب الأسماء قابلة للعثور."],
                    ["بحث يفهمك", "إن رغبت، يراعي البحث من يقوم به: مجلدات، معرفة سابقة، عادات قديمة — دائمًا تحت سيطرتك."],
                    ["OCR للمسوحات", "يُقرأ نص مستنداتك وصورك الممسوحة ويُجعل قابلاً للبحث — دون اتصال بالكامل."],
                    ["بيانات وسائط وصفية", "يقرأ ويثري البيانات الوصفية لفيديوهاتك وموسيقاك — في المنزل، دون إرسال أي شيء لخدمات خارجية."],
                    ["وسوم MP3 نظيفة", "ينظّم ويثري وسوم موسيقاك حتى تجد العناوين والفنانين والألبومات بموثوقية."],
                    ["بلا سحابة منذ التصميم", "كل النماذج تعمل على عتادك. لا سحابة، لا أطراف ثالثة، لا ملف شخصي يغادر منزلك."],
                    ["تنظيم بلا مخاطرة", "يغيّر الأسماء وينظّم مع قناة عودة دائمًا: الأصلية تبقى كما هي، وكل تغيير قابل للفحص والتراجع. الأرشفة التلقائية قادمة في V1.x."],
                    ["كشف المكررات", "يعثر على الصور المكررة أو المتشابهة (مخطّط لـV1.x) — خطوة كبيرة نحو مجموعات منظمة وواضحة."],
                    ["مستقل عن أي مصنّع", "لا يرتبط TalpaX بأي NAS. يعمل كمنصة حاويات على خادمك الحالي."]
                ]
            },
            cmp: {
                eyebrow: "في المقارنة",
                title: "TalpaX أمام تطبيقات NAS",
                sub: "نظرة عادلة وموضوعية إلى تطبيقات الصور والموسيقى والبحث المدمجة لدى مصنّعي NAS وإلى بحث الذكاء الاصطناعي، دون مفاضلة أحد.",
                lead: "ملاحظة حول هذه المقارنة:",
                body: "يقارن الجدول أدناه TalpaX (الإصدار 0.7.0) على قدم المساواة ببحث Synology للذكاء الاصطناعي (Deep Search) وتطبيقات QNAP المدمجة للصور/الموسيقى/البحث (مثل QuMagie). إنه لإعطاء اتجاه وليس معيارًا، ولا يدّعي الشمولية. الفرق الحقيقي ليس في ميزة معيّنة: بل في المبدأ القائل إن كل شيء يبقى محليًا على عتادك — وهذا هو جوهر TalpaX.",
                th1: "المجال", th2: "Synology Deep Search", th3: "QNAP (مثل QuMagie)",
                rows: [
                    ["أين تعيش بياناتك وتُعالج", "على عتادك أنت، محليًا؛ بلا سحابة", "على NAS الخاص بك، محليًا", "على NAS الخاص بك، محليًا"],
                    ["البحث باللغة الطبيعية", "مدعوم بالذكاء الاصطناعي، يربط عدة مصادر", "قائم على الذكاء الاصطناعي (بحث دلالي، خاصة في الصور)", "أساسًا كلمات مفتاحية ومجلدات"],
                    ["البحث داخل المستندات", "يفهرس المحتوى الفعلي (نص كامل، OCR الممسوحات) لا الاسم فقط", "مركز على الصور/الوسائط؛ محتوى المستندات محدود", "غالبًا اسم ملف/مجلد، وبعض فهرسة النصوص"],
                    ["التعرف على الوجوه", "صور وفيديو، مع تأكيد ودليل", "صور فقط (مدمج في Synology Photos)", "صور؛ الربط بشخص يتطلب جهدًا"],
                    ["دليل مع كل نتيجة", "نعم: كل نتيجة تأتي مع دليل", "غالبًا لا", "غالبًا لا"],
                    ["بيانات الفيديو والموسيقى الوصفية", "يقرأ ويثري، في المنزل", "خارج نطاق Deep Search", "عبر تطبيقات وسائط منفصلة، حسب الحزمة"],
                    ["تحسين وسوم MP3", "نعم: يجد وينظّف بيانات MP3 الوصفية", "خارج نطاق Deep Search", "جزئيًا، عبر تطبيقات الموسيقى"],
                    ["الأرشفة التلقائية", "مخطّط (V1.x): تنظيم قابل للتراجع بقواعد", "يدوي، مجلدًا بعد مجلد", "يدوي، مجلدًا بعد مجلد"],
                    ["كشف المكررات والمتشابهات", "مخطّط (V1.x) للصور المكررة/المتشابهة", "متوفر جزئيًا", "متوفر جزئيًا"],
                    ["الاعتماد على المصنّع", "لا شيء: يعمل على أي خادم (حاوية)", "مرتبط بأنظمة Synology NAS", "مرتبط بأنظمة QNAP NAS"],
                    ["إلى أين يتجه", "طبقة بحث وتنظيم بالذكاء الاصطناعي تغطي كل أنواع الملفات", "بحث صور بالذكاء الاصطناعي داخل Synology Photos", "إدارة NAS مع تطبيقات الصور/الوسائط"]
                ],
                foot: "اعتبر TalpaX طبقة تكميلية مستقلة عن المصنّع للبحث والتحليل في ملفاتك. تبقى التطبيقات التي تأتي مع NAS الخاص بك مناسبة لإدارة النظام كما هي."
            },
            hw: {
                eyebrow: "العتاد",
                title: "أي عتاد يحتاجه TalpaX؟",
                sub: "لا يرتبط TalpaX بعتاد محدد. كلما كان جهازك أقوى، زاد ما تكسبه من معالجة ذكاء اصطناعي متوازية وسرعة بحث — خاصة على أنظمة NAS الجديدة الجاهزة للذكاء الاصطناعي.",
                lead: "تقدير، لا معيار:",
                body: "تُسقط الأرقام أدناه أداء TalpaX الحالي على عتاد Unraid على مواصفات Ugreen iDX6011 Pro. اعتبرها مؤشرًا معقولًا، لا معيارًا مُقاسًا على عتاد Ugreen حقيقي.",
                th1: "المورد", th2: "اليوم (Unraid)", th4: "المكسب",
                rows: [
                    ["الذاكرة", "20 GiB", "64 GB", "+220%"],
                    ["المعالج", "6C/12T", "16C/16T", "+167%"],
                    ["الشبكة", "1 جيجابت/ث", "10 جيجابت/ث", "+10×"],
                    ["استدلال الذكاء الاصطناعي", "~2–3 ث", "~0.8–1.2 ث", "أسرع ~2.5×"]
                ],
                mt: "ما تحتاجه كحد أدنى",
                ms: "يعمل TalpaX كمنصة حاويات على أي نظام يدعم Docker.",
                reqs: [
                    ["المعالج", "6 أنوية / 12 مسارات (Intel Core i3 أو ما يعادله)"],
                    ["الذاكرة", "32 GiB موصى بها"],
                    ["التخزين", "صور ~20 GiB + بيانات التطبيق ~17 GiB"],
                    ["النواة", "Linux مع Docker Compose وcgroup v2"],
                    ["الشبكة", "منفذ مضيف حر واحد (8787)"]
                ],
                eo: "حول أنظمة NAS الجاهزة للذكاء الاصطناعي",
                eos: "ينمو TalpaX مع عتادك، ويظهر الفرق خاصة في معالجة الذكاء الاصطناعي المتوازية وسرعة البحث.",
                cards: [
                    ["Ugreen iDX6011 Pro", "معالج Intel Core Ultra 7 وذاكرة 64 GB وشبكة 10 GbE تمنح هامشًا وافرًا لتشغيل خدمات متعددة معًا، وتسريع الاستدلال، واستخدام شبكة أسرع: خيار مريح."],
                    ["Ugreen DXP4800 Pro", "الذاكرة الأساسية 8 GB ضيقة لـ TalpaX. بإضافة ذاكرة يعمل بامتياز؛ حينها تتحقق المتطلبات الدنيا براحة."]
                ]
            },
            sup: {
                eyebrow: "الدعم",
                title: "يرجى دعم هذا المشروع",
                sub: "TalpaX مشروع خاص — لا شركة ولا فريق ولا مستثمر في الخلفية: أفكار ووقت ومثابرة فقط.",
                p1: "يدير ماريو كوفالسكي (نورنبرغ) على GoFundMe حملة بعنوان «Privat KI Projekt nearly Noyron, for my Startup possibility» (أغسطس 2026). هدفها منح أفكاره فرصة أن تصبح مشروعًا خاصًا به — خاصة حول Deadalus، مشروعه الأكثر طموحًا في أنظمة الذكاء الاصطناعي والتعلم.",
                p2: "الهدف المركزي هو شراء جهاز تطوير قوي ومحلي بالكامل (Mac Studio بذاكرة موحدة كبيرة) لتشغيل نماذج ذكاء اصطناعي أكبر بكثير في المنزل، بدلًا من استئجار قوة حوسبة سحابية لكل تجربة جادة.",
                p3: "يُذكر TalpaX في الحملة كشكر للمتبرعين: بمجرد بلوغه حالة مستقرة قابلة للاستخدام، هناك فكرة توفير نسخة متاحة مجانًا للداعمين — دون أي وعود تسويقية.",
                p4: "تعرض هذه الصفحة TalpaX. الحملة مستقلة عنه وتتعلق بعمل ماريو كوفالسكي.",
                tag: "حملة GoFundMe",
                actionH: "اعرف المزيد وادعم",
                meta1: "المنظّم: ماريو كوفالسكي",
                meta2: "أغسطس 2026",
                btn: "شاهد على GoFundMe",
                note: "حتى إن لم تستطع التبرع الآن، فمشاركة الحملة وحدها تساعد."
            },
            pr: {
                eyebrow: "الخصوصية",
                title: "الخصوصية أولًا",
                sub: "يتبع TalpaX قاعدة واحدة: ملفاتك الشخصية ملك لك — وكذلك طريقة معالجتها.",
                items: [
                    ["0", "معالجة سحابية", "ملفاتك لا تذهب إلى أي مكان."],
                    ["100%", "على جهازك", "البحث والتعرف على الوجوه والأرشفة تعمل على خادمك أنت."],
                    ["RO", "وصول للقراءة فقط", "الأصلية تُقرأ فقط ولا تُعاد كتابتها أبدًا."],
                    ["✔", "دليل، لا تخمين", "لا يُربط أو يُحدد شيء دون تأكيدك الصريح."]
                ]
            },
            footer: { fine: "منصة بحث وتحليل محلية 100% لملفاتك الخاصة. © 2026 TalpaX." }
        },

        ko: {
            langLabel: "언어",
            nav: { functions: "기능", compare: "비교", hardware: "하드웨어", support: "후원하기", privacy: "개인정보" },
            hero: {
                kick: "100% 로컬 · 클라우드 제로 · 항상 비공개",
                h1a: "당신만의 비공개 AI 검색,",
                h1b: "모든 파일을 대상으로,",
                h1c: "당신의 서버에서.",
                lede: "TalpaX는 전적으로 당신의 하드웨어에서 작동합니다. 비공개 사진, 동영상, 문서, 오디오 파일을 색인하고 얼굴을 인식하며 객체와 텍스트를 찾고, 그 결과마다 직접 확인할 수 있는 근거를 더해줍니다. 당신의 데이터는 결코 집 밖으로 나가지 않습니다.",
                btnCompare: "비교 보기",
                btnMore: "TalpaX 알아보기"
            },
            feat: {
                eyebrow: "하는 일",
                title: "하나의 원칙: 당신의 파일은 당신의 것",
                sub: "이 기능들은 오늘 이미, 전적으로 당신의 기기에서, 클라우드에 의존하지 않고 사용할 수 있습니다.",
                cards: [
                    ["한 번의 검색, 모든 출처", "자연어, 문서·이미지의 텍스트(OCR), 시각적 객체, 학습된 신호를 모두 한 번의 검색으로 통합합니다."],
                    ["얼굴 인식", "사진과 동영상 어디에서든 같은 사람을 찾아냅니다. 확인된 기준 얼굴과 미디어를 넘나드는 그룹화 덕분입니다."],
                    ["추측이 아닌 근거", "모든 결과는 근거를 동반하며, 절대 추측이 아닙니다. 신원 확인과 연결은 당신의 확인 후에만 받아들여집니다."],
                    ["문서 속까지 검색", "파일 이름이 아니라 문서의 내용을 색인합니다. 전문과 스캔의 OCR 덕분에 아무리 특이한 이름이라도 쉽게 찾을 수 있습니다."],
                    ["검색하는 사람을 이해하는 검색", "원한다면 검색은 누가 하고 있는지도 고려합니다. 폴더, 사전 지식, 과거 습관 등, 언제나 당신의 통제 아래에서 말입니다."],
                    ["스캔용 OCR", "스캔한 문서와 사진 속의 텍스트를 읽어 검색 가능하게 만듭니다. 완전히 오프라인으로."],
                    ["미디어 메타데이터", "동영상과 음악의 메타데이터를 읽고 보강합니다. 모두 집에서, 외부 서비스로는 아무것도 보내지 않습니다."],
                    ["깔끔한 MP3 태그", "음악의 태그를 정리·보강하여 제목, 아티스트, 앨범을 확실하게 찾아냅니다."],
                    ["설계부터 클라우드 없음", "모든 모델은 당신의 하드웨어에서 실행됩니다. 클라우드도, 제3자도, 집을 나가는 개인 파일도 없습니다."],
                    ["위험 없는 정리", "언제든 되돌릴 수 있는 방식으로 이름을 바꾸고 정리합니다. 원본은 그대로이고, 각 변경은 확인·취소할 수 있습니다. 자동 아카이빙은 V1.x에서 제공됩니다."],
                    ["중복 감지", "중복되거나 비슷한 이미지를 찾아냅니다(V1.x 예정). 정돈되고 모호함 없는 컬렉션으로 가는 큰 발걸음입니다."],
                    ["어느 제조사에도 무관", "TalpaX는 특정 NAS에 묶여 있지 않습니다. 이미 보유한 서버에서 컨테이너 플랫폼으로 작동합니다."]
                ]
            },
            cmp: {
                eyebrow: "비교에서 살펴보면",
                title: "NAS 앱과 TalpaX 비교",
                sub: "NAS 제조사의 내장 사진·음악·검색 앱과 AI 검색을, 특정 제품을 편애하지 않고 공정하고 객관적인 시선으로 살펴봅니다.",
                lead: "이 비교에 대한 참고:",
                body: "아래 표는 TalpaX(버전 0.7.0)를 Synology의 AI 검색(Deep Search), 그리고 QNAP의 내장 사진·음악·검색 앱(예: QuMagie)과 대등한 조건으로 비교합니다. 이는 방향을 제시할 뿐 벤치마크가 아니며 완전함을 주장하지도 않습니다. 진짜 차이는 특정 기능이 아닙니다. 모든 것이 당신 자신의 하드웨어에 로컬로 남는다는 원칙이야말로 TalpaX의 존재 이유입니다.",
                th1: "측면", th2: "Synology Deep Search", th3: "QNAP(예: QuMagie)",
                rows: [
                    ["데이터가 존재·처리되는 곳", "당신의 하드웨어, 로컬, 클라우드 없음", "당신의 NAS, 로컬", "당신의 NAS, 로컬"],
                    ["자연어 검색", "AI 기반으로 많은 출처를 아우름", "AI 기반(의미 검색, 주로 사진)", "주로 키워드와 폴더"],
                    ["문서 속까지 검색", "실제 내용 색인(전문, 스캔의 OCR), 파일명만이 아니라", "사진/미디어 중심, 문서 내용 제한적", "주로 파일명과 폴더, 일부 텍스트 색인"],
                    ["얼굴 인식", "사진과 동영상, 확인·근거 포함", "사진만(Synology Photos에 내장)", "사진, 사람 연결에 노력 필요"],
                    ["결과마다 근거", "예: 모든 결과에 근거가 붙습니다", "대체로 없음", "대체로 없음"],
                    ["동영상·음악 메타데이터", "읽고 보강, 집에서", "Deep Search의 범위 밖", "패키지에 따라 별도 미디어 앱으로"],
                    ["MP3 태그 개선", "예: MP3 메타데이터를 찾아 정리", "Deep Search의 범위 밖", "부분적으로, 음악 앱으로"],
                    ["자동 아카이빙", "예정(V1.x): 규칙 기반 되돌릴 수 있는 정리", "수동, 폴더 단위", "수동, 폴더 단위"],
                    ["중복·유사 이미지 감지", "예정(V1.x): 중복·유사 이미지 대상", "부분적으로 가능", "부분적으로 가능"],
                    ["제조사 의존성", "없음: 모든 서버에서 작동(컨테이너)", "Synology NAS에 종속", "QNAP NAS에 종속"],
                    ["지향하는 모습", "모든 파일 유형을 아우르는 AI 검색·정리 계층", "Synology Photos 안의 AI 사진 검색", "사진/미디어 앱을 갖춘 NAS 관리"]
                ],
                foot: "TalpaX를 파일을 검색·분석하기 위한, 제조사에 독립적인 보완 계층이라고 생각해 보세요. NAS에 딸려 온 앱들은 시스템 관리에 그대로 충분히 쓸 수 있습니다."
            },
            hw: {
                eyebrow: "하드웨어",
                title: "TalpaX에는 어떤 하드웨어가 필요할까요?",
                sub: "TalpaX는 특정 하드웨어에 묶여 있지 않습니다. 기기가 강력할수록, 특히 AI 대응 NAS에서 병렬 AI 처리와 검색 속도의 이점이 커집니다.",
                lead: "추정치이며 벤치마크가 아닙니다:",
                body: "아래 수치는 Unraid 하드웨어에서의 현재 TalpaX 성능을 Ugreen iDX6011 Pro의 사양으로 외삽한 것입니다. 실제 Ugreen 하드웨어에서 측정한 벤치마크가 아니라 합리적인 안내로 보아 주십시오.",
                th1: "리소스", th2: "현재(Unraid)", th4: "향상",
                rows: [
                    ["RAM", "20 GiB", "64 GB", "+220%"],
                    ["CPU", "6C/12T", "16C/16T", "+167%"],
                    ["네트워크", "1 Gbps", "10 Gbps", "+10×"],
                    ["AI 추론", "약 2~3초", "약 0.8~1.2초", "약 2.5배 빠름"]
                ],
                mt: "필요한 최소 사양",
                ms: "TalpaX는 Docker를 지원하는 모든 시스템에서 컨테이너 플랫폼으로 실행됩니다.",
                reqs: [
                    ["CPU", "6코어/12스레드(Intel Core i3 또는 동급)"],
                    ["RAM", "32 GiB 권장"],
                    ["저장소", "이미지 약 20 GiB + 앱 데이터 약 17 GiB"],
                    ["커널", "Docker Compose와 cgroup v2가 있는 Linux"],
                    ["네트워크", "여유 호스트 포트 1개(8787)"]
                ],
                eo: "AI 대응 NAS에 대해",
                eos: "TalpaX는 하드웨어와 함께 성장합니다. 그 차이는 특히 병렬 AI 처리와 검색 속도에서 두드러집니다.",
                cards: [
                    ["Ugreen iDX6011 Pro", "Intel Core Ultra 7, 64GB RAM, 10GbE 네트워크는 여러 서비스를 동시에 돌리고 추론을 빠르게 하며 빠른 네트워크를 활용하기에 충분한 여유를 줍니다. 편안한 선택입니다."],
                    ["Ugreen DXP4800 Pro", "기본 8GB RAM은 TalpaX에 빠듯합니다. 메모리를 추가하면 문제없이 작동하며, 최소 사양도 여유 있게 충족합니다."]
                ]
            },
            sup: {
                eyebrow: "후원",
                title: "이 프로젝트를 후원해 주세요",
                sub: "TalpaX는 뒤에 회사도 팀도 투자자도 없는 개인 프로젝트입니다. 아이디어와 시간, 그리고 끈기뿐입니다.",
                p1: "마리오 코발스키(뉘른베르크)는 GoFundMe에서 'Privat KI Projekt nearly Noyron, for my Startup possibility' 캠페인(2026년 8월)을 진행하고 있습니다. 목적은 자신의 아이디어를 자신의 사업으로 키울 기회를 잡는 일, 특히 인공지능과 학습 시스템에 관한 가장 야심찬 프로젝트인 Deadalus를 중심으로 하는 것입니다.",
                p2: "핵심 목표는 강력하고 완전히 로컬인 개발 머신(대용량 유니파이드 메모리를 갖춘 Mac Studio)을 구입하여, 진지한 실험 때마다 클라우드 컴퓨팅을 빌리는 대신 훨씬 더 큰 AI 모델을 집에서 실행하는 것입니다.",
                p3: "TalpaX는 캠페인에서 기부자에 대한 감사의 한 형태로 언급됩니다. 안정적으로 쓸 수 있는 상태가 되면, 지지자들에게 무료로 쓸 수 있는 버전을 제공하겠다는 계획입니다. 마케팅상의 약속은 일체 없습니다.",
                p4: "이 페이지는 TalpaX를 소개합니다. 캠페인은 그것과 독립적이며 마리오 코발스키의 작업에 관한 것입니다.",
                tag: "GoFundMe 캠페인",
                actionH: "자세히 보고 후원하기",
                meta1: "주최: 마리오 코발스키",
                meta2: "2026년 8월",
                btn: "GoFundMe에서 보기",
                note: "지금 기부할 수 없어도 캠페인을 공유하는 것만으로도 도움이 됩니다."
            },
            pr: {
                eyebrow: "개인정보",
                title: "개인정보를 최우선으로",
                sub: "TalpaX가 따르는 한 가지 규칙: 당신의 개인 파일은 당신의 것이며, 그 처리 방식도 당신의 것입니다.",
                items: [
                    ["0", "클라우드 처리", "당신의 파일이 어디로도 가지 않습니다."],
                    ["100%", "당신의 기기에서", "검색, 얼굴 인식, 아카이빙이 모두 당신의 서버에서 실행됩니다."],
                    ["RO", "읽기 전용 접근", "원본은 읽기만 하며, 절대 다시 쓰지 않습니다."],
                    ["✔", "근거, 추측이 아닌", "당신의 명시적 확인 없이는 어떤 것도 연결되거나 할당되지 않습니다."]
                ]
            },
            footer: { fine: "개인 파일을 위한 100% 로컬 검색·분석 플랫폼. © 2026 TalpaX." }
        },

        tr: {
            langLabel: "Dil",
            nav: { functions: "Özellikler", compare: "Karşılaştırma", hardware: "Donanım", support: "Destekle", privacy: "Gizlilik" },
            hero: {
                kick: "%100 yerel · sıfır bulut · her zaman özel",
                h1a: "Size özel gizli YZ aramanız,",
                h1b: "tüm dosyalarınız için,",
                h1c: "kendi sunucunuzda.",
                lede: "TalpaX tamamen sizin donanımınızda çalışır. Özel fotoğraflarınızı, videolarınızı, belgelerinizi ve ses dosyalarınızı dizinler, yüzleri tanır, nesneleri ve metinleri bulur ve her sonucu kendiniz doğrulayabileceğiniz bir kanıtla destekler. Verileriniz asla evinizden çıkmaz, nokta.",
                btnCompare: "Karşılaştırmayı gör",
                btnMore: "TalpaX'i tanıyın"
            },
            feat: {
                eyebrow: "Ne yapar",
                title: "Tek bir ilke: dosyalarınız sizin kalır",
                sub: "Bu özellikler bugün zaten, tamamen kendi cihazınızda ve buluta bağımlı olmadan kullanılabilir.",
                cards: [
                    ["Tek arama, tüm kaynaklarınız", "Doğal dil, belgeler ve görsellerdeki metin (OCR), görsel nesneler ve öğrenilmiş sinyaller — hepsi tek bir aramada toplanır."],
                    ["Yüz tanıma", "Aynı kişiyi fotoğraflarınızda ve videolarınızda bulur; doğrulanmış referans yüzler ve medyalar arası gruplama sayesinde."],
                    ["Tahmin değil, kanıt", "Her sonuç gerekçelendirilir, asla tahmin edilmez. Kimlik ve eşleştirmeler yalnızca sizin onayınızdan sonra kabul edilir."],
                    ["Belgelerin içine kadar arama", "Dosya adını değil, belgenin ne söylediğini dizinleriz. Tam metin ve taramaların OCR'ı, ne kadar tuhaf ad olursa olsun bulmayı kolaylaştırır."],
                    ["Sizi anlayan bir arama", "İsterseniz arama, onu kimin yaptığını da dikkate alır: klasörler, ön bilgi, geçmiş alışkanlıklar — her zaman sizin kontrolünüzde."],
                    ["Taramalar için OCR", "Taranmış belgelerinizdeki ve fotoğraflarınızdaki metin okunur ve aranabilir hâle getirilir, tamamen çevrimdışı."],
                    ["Medya meta verileri", "Videolarınızın ve müziğinizin meta verilerini okur ve zenginleştirir; hepsi evinizde, dış hizmetlere hiçbir şey göndermeden."],
                    ["Daha temiz MP3 etiketleri", "Müziğinizin etiketlerini derleyip zenginleştirir, böylece başlık, sanatçı ve albüm güvenle bulunur."],
                    ["Tasarım gereği bulut yok", "Tüm modeller sizin donanımınızda çalışır. Bulut yok, üçüncü taraf yok, evinizden çıkan tek bir kişisel dosya yok."],
                    ["Risksiz düzenleme", "Her zaman geri dönüşü olan şekilde yeniden adlandırır ve düzenler: orijinaller olduğu gibi kalır, her değişiklik denetlenip geri alınabilir. Otomatik arşivleme V1.x'te geliyor."],
                    ["Yinelenenleri algılama", "Yinelenen veya birbirine benzeyen görselleri bulur (V1.x için planlı) — derli toplu, belirsizliksiz koleksiyonlara doğru büyük bir adım."],
                    ["Hiçbir üreticiye bağımlı değil", "TalpaX belirli bir NAS'a bağlı değildir. Zaten sahip olduğunuz sunucuda kapsayıcı platformu olarak çalışır."]
                ]
            },
            cmp: {
                eyebrow: "Karşılaştırmada",
                title: "TalpaX, NAS uygulamalarının karşısında",
                sub: "NAS üreticilerinin yerleşik fotoğraf, müzik ve arama uygulamalarına ve YZ aramasına; kimseyi kayırmadan adil ve nesnel bir bakış.",
                lead: "Bu karşılaştırma hakkında bir not:",
                body: "Aşağıdaki tablo, TalpaX'i (sürüm 0.7.0) Synology'nin YZ aramasıyla (Deep Search) ve QNAP'in yerleşik fotoğraf/müzik/arama uygulamalarıyla (örn. QuMagie) eşit koşullarda karşılaştırır. Yön gösterme amaçlıdır; kıyaslama değildir ve eksiksiz olduğu iddiasında değildir. Gerçek fark belirli bir özellik değildir: her şeyin size ait bir donanımda yerel kalması ilkesi — TalpaX'in var olma nedeni tam da budur.",
                th1: "Konu", th2: "Synology Deep Search", th3: "QNAP (örn. QuMagie)",
                rows: [
                    ["Verileriniz nerede yaşıyor, nerede işleniyor", "Kendi donanımınızda, yerel; bulut yok", "NAS'ınızda, yerel", "NAS'ınızda, yerel"],
                    ["Doğal dil araması", "YZ destekli, birçok kaynağı birleştirir", "YZ tabanlı (anlamsal arama, en çok fotoğraflarda)", "Daha çok anahtar kelime ve klasör"],
                    ["Belgelerin içine kadar arama", "Gerçek içeriği dizinler (tam metin, taramaların OCR'ı) — yalnızca dosya adı değil", "Fotoğraf/medya odaklı; belge içeriği sınırlı", "Çoğunlukla dosya adı ve klasör, kısmen metin dizinleme"],
                    ["Yüz tanıma", "Fotoğraf ve video, onay ve kanıtla", "Yalnızca fotoğraf (Synology Photos'a yerleşik)", "Fotoğraf; kişiye eşleştirme çaba ister"],
                    ["Her sonuçta kanıt", "Evet: her sonuç bir kanıtla gelir", "Genellikle hayır", "Genellikle hayır"],
                    ["Video ve müzik meta verileri", "Okur ve zenginleştirir, evde", "Deep Search'in kapsamı dışında", "Pakete göre ayrı medya uygulamalarıyla"],
                    ["MP3 etiketlerini iyileştirme", "Evet: MP3 meta verilerini bulur ve derler", "Deep Search'in kapsamı dışında", "Kısmen, müzik uygulamalarıyla"],
                    ["Otomatik arşivleme", "Planlı (V1.x): kurallarla geri alınabilir düzenleme", "Manuel, klasör klasör", "Manuel, klasör klasör"],
                    ["Yinelenen ve benzer görselleri algılama", "Planlı (V1.x): yinelenen veya benzer görseller için", "Kısmen mevcut", "Kısmen mevcut"],
                    ["Üreticiye bağımlılık", "Yok: her sunucuda çalışır (kapsayıcı)", "Synology NAS'a bağlı", "QNAP NAS'a bağlı"],
                    ["Hedeflediği şey", "Her dosya türünü kapsayan YZ arama ve düzenleme katmanı", "Synology Photos içinde YZ fotoğraf araması", "Fotoğraf/medya uygulamalarıyla NAS yönetimi"]
                ],
                foot: "TalpaX'i, dosyalarınızı aramak ve analiz etmek için üreticiden bağımsız, tamamlayıcı bir katman olarak düşünün. NAS'ınızla gelen uygulamalar, sistemi yönetmek için aynen yeterince kullanılabilir."
            },
            hw: {
                eyebrow: "Donanım",
                title: "TalpaX için hangi donanım gerekir?",
                sub: "TalpaX belirli bir donanıma bağlı değildir. Makineniz ne kadar güçlüyse, özellikle YZ'ye hazır yeni NAS'larda o kadar paralel YZ işleme ve arama hızı kazanırsınız.",
                lead: "Bir tahmin, kıyaslama değil:",
                body: "Aşağıdaki sayılar, Unraid donanımındaki mevcut TalpaX performansını Ugreen iDX6011 Pro'nun özelliklerine genişletir. Bunları gerçek Ugreen donanımında ölçülmüş bir kıyaslama değil, makul bir gösterge olarak kabul edin.",
                th1: "Kaynak", th2: "Bugün (Unraid)", th4: "Kazanç",
                rows: [
                    ["RAM", "20 GiB", "64 GB", "+%220"],
                    ["CPU", "6C/12T", "16C/16T", "+%167"],
                    ["Ağ", "1 Gbps", "10 Gbps", "+10×"],
                    ["YZ çıkarımı", "~2–3 sn", "~0.8–1.2 sn", "~2,5× daha hızlı"]
                ],
                mt: "Minimum ihtiyacınız",
                ms: "TalpaX, Docker destekli her sistemde kapsayıcı platformu olarak çalışır.",
                reqs: [
                    ["CPU", "6 çekirdek / 12 iş parçacığı (Intel Core i3 veya eşdeğeri)"],
                    ["RAM", "32 GiB önerilir"],
                    ["Depolama", "Görseller için yakl. 20 GiB + uygulama verisi için yakl. 17 GiB"],
                    ["Çekirdek", "Docker Compose ve cgroup v2 ile Linux"],
                    ["Ağ", "Bir boş ana bilgisayar bağlantı noktası (8787)"]
                ],
                eo: "YZ'ye hazır NAS'lar hakkında",
                eos: "TalpaX donanımınızla birlikte büyür; fark özellikle paralel YZ işlemede ve arama hızında belirginleşir.",
                cards: [
                    ["Ugreen iDX6011 Pro", "Intel Core Ultra 7, 64 GB RAM ve 10 GbE ağ; birden çok hizmeti aynı anda çalıştırmaya, çıkarımı hızlandırmaya ve hızlı bir ağı kullanmaya fazlasıyla izin verir. Rahat bir seçim."],
                    ["Ugreen DXP4800 Pro", "Temel 8 GB RAM, TalpaX için yetersiz kalır. Bellek eklediğinizde sorunsuz çalışır; o zaman minimum gereksinim de rahatça karşılanır."]
                ]
            },
            sup: {
                eyebrow: "Destek",
                title: "Lütfen bu projeyi destekleyin",
                sub: "TalpaX, arkasında şirket, ekip veya yatırımcı olmayan özel bir projedir: yalnızca fikirler, zaman ve azim.",
                p1: "Mario Kowalski (Nürnberg), GoFundMe'de 'Privat KI Projekt nearly Noyron, for my Startup possibility' kampanyasını (Ağustos 2026) yürütüyor. Amaç, fikirlerine kendi işini kurma şansı vermek; özellikle yapay zekâ ve öğrenme sistemleri üzerine en iddialı projesi Deadalus etrafında.",
                p2: "Temel amaç, güçlü ve tamamen yerel bir geliştirme makinesi (geniş birleşik belleğe sahip bir Mac Studio) satın alıp, her ciddi denemede bulut bilişim kiralamak yerine çok daha büyük YZ modellerini evde çalıştırmaktır.",
                p3: "TalpaX, kampanyada bağışçılara bir teşekkür biçimi olarak geçer: istikrarlı ve kullanılabilir bir duruma ulaştığında, destekçilere ücretsiz erişilebilir bir sürüm sunmak niyetindeyiz; hiçbir pazarlama vaadi olmadan.",
                p4: "Bu sayfa TalpaX'i tanıtır. Kampanya ondan bağımsızdır ve Mario Kowalski'nin çalışmasıyla ilgilidir.",
                tag: "GoFundMe kampanyası",
                actionH: "Daha fazla bilgi ve destek",
                meta1: "Düzenleyen: Mario Kowalski",
                meta2: "Ağustos 2026",
                btn: "GoFundMe'de gör",
                note: "Şu an bağış yapamasanız bile kampanyayı paylaşmak bile yardımcı olur."
            },
            pr: {
                eyebrow: "Gizlilik",
                title: "Gizlilik her şeyden önce",
                sub: "TalpaX tek bir kurala uyar: kişisel dosyalarınız sizindir; nasıl işlendikleri de size aittir.",
                items: [
                    ["0", "Bulut işleme", "Dosyalarınız hiçbir yere gitmez."],
                    ["%100", "Kendi cihazınızda", "Arama, yüz tanıma ve arşivleme kendi sunucunuzda çalışır."],
                    ["RO", "Salt okunur erişim", "Orijinaller yalnızca okunur, asla yeniden yazılmaz."],
                    ["✔", "Kanıt, tahmin değil", "Sizin açık onayınız olmadan hiçbir şey ilişkilendirilmez veya atanmaz."]
                ]
            },
            footer: { fine: "Özel dosyalar için %100 yerel arama ve analiz platformu. © 2026 TalpaX." }
        },

        nl: {
            langLabel: "Taal",
            nav: { functions: "Functies", compare: "Vergelijking", hardware: "Hardware", support: "Steun ons", privacy: "Privacy" },
            hero: {
                kick: "100 % lokaal · nul cloud · altijd privé",
                h1a: "Jouw eigen privé AI-zoekopdracht,",
                h1b: "voor al je bestanden,",
                h1c: "op je eigen server.",
                lede: "TalpaX draait helemaal op jouw hardware. Het indexeert je privé foto's, video's, documenten en audiobestanden, herkent gezichten, vindt objecten en teksten en onderbouwt elk resultaat met een bewijs dat je zelf kunt controleren. Je gegevens blijven thuis, punt.",
                btnCompare: "Bekijk de vergelijking",
                btnMore: "Ontdek TalpaX"
            },
            feat: {
                eyebrow: "Wat het doet",
                title: "Één principe: je bestanden blijven van jou",
                sub: "Deze functies zijn vandaag al beschikbaar, volledig op je eigen apparaat en zonder afhankelijkheid van de cloud.",
                cards: [
                    ["Eén zoekmachine, al je bronnen", "Natuurlijke taal, tekst uit documenten en afbeeldingen (OCR), visuele objecten en geleerde signalen, alles verenigd in één zoekopdracht."],
                    ["Gezichtsherkenning", "Vind dezelfde persoon in je foto's én video's, dankzij bevestigde referentiegezichten en clustering tussen media."],
                    ["Bewijs, geen gokwerk", "Elk resultaat is onderbouwd, nooit gegokt. Identiteiten en koppelingen worden pas geaccepteerd na jouw bevestiging."],
                    ["Zoek binnen documenten", "We indexeren wat een document zegt, niet alleen de bestandsnaam: de volledige tekst en de OCR van scans maken zelfs de vreemdste namen makkelijk vindbaar."],
                    ["Een zoekopdracht die je snapt", "Als je wilt houdt de zoekopdracht rekening met wie er zoekt: mappen, voorkennis, vroeger gedrag, altijd onder jouw controle."],
                    ["OCR voor scans", "De tekst in je gescande documenten en foto's wordt gelezen en doorzoekbaar, volledig offline."],
                    ["Metadata van media", "Leest en verrijkt de metadata van je video's en je muziek, thuis en zonder iets naar externe diensten te sturen."],
                    ["Opgeruimde MP3-tags", "Ruimt de tags van je muziek op en verrijkt ze, zodat titels, artiesten en albums betrouwbaar terug te vinden zijn."],
                    ["Geen cloud, by design", "Alle modellen draaien op jouw hardware. Geen cloud, geen derden, geen enkel persoonlijk bestand dat je huis verlaat."],
                    ["Organiseren zonder risico", "Hernoemt en archiveert altijd met een uitweg: originelen blijven intact en elke wijziging kun je controleren en ongedaan maken. Automatisch archiveren komt in V1.x."],
                    ["Detectie van duplicaten", "Vind dubbele of op elkaar lijkende afbeeldingen (gepland voor V1.x), een grote stap naar opgeruimde, ondubbelzinnige collecties."],
                    ["Onafhankelijk van elke fabrikant", "TalpaX is niet aan een NAS gebonden. Het draait als containerplatform op de server die je al hebt."]
                ]
            },
            cmp: {
                eyebrow: "Hoe we ons meten",
                title: "TalpaX vergeleken met NAS-apps",
                sub: "Een eerlijke en objectieve blik op de ingebouwde foto-, muziek- en zoek-apps en op de AI-zoekopdracht van NAS-fabrikanten, zonder iemand voort te trekken.",
                lead: "Een opmerking over deze vergelijking:",
                body: "De tabel hieronder vergelijkt TalpaX (versie 0.7.0) op gelijke voet met de AI-zoekopdracht van Synology (Deep Search) en met de ingebouwde foto-, muziek- en zoek-apps van QNAP (bijv. QuMagie). Bedoeld als richting, niet als benchmark, en zonder de pretentie volledig te zijn. Het echte verschil zit niet in één functie: het is het principe dat alles lokaal blijft op hardware van jou — en dat is precies waar TalpaX om draait.",
                th1: "Aspect", th2: "Synology Deep Search", th3: "QNAP (bijv. QuMagie)",
                rows: [
                    ["Waar je gegevens leven en worden verwerkt", "Op je eigen hardware, lokaal; geen cloud", "Op je NAS, lokaal", "Op je NAS, lokaal"],
                    ["Zoekopdracht in natuurlijke taal", "Aangedreven door AI, kruist veel bronnen", "Gebaseerd op AI (semantische zoekopdracht, vooral in foto's)", "Vooral trefwoorden en mappen"],
                    ["Zoek binnen documenten", "Indexeert de echte inhoud (volledige tekst, OCR van scans), niet alleen bestandsnamen", "Foto-/mediagericht; documentinhoud beperkt", "Vooral bestandsnamen en mappen, wat tekstindexering"],
                    ["Gezichtsherkenning", "Foto's en video's, met bevestiging en bewijs", "Alleen foto's (ingebouwd in Synology Photos)", "Foto's; koppelen aan een persoon kost moeite"],
                    ["Bewijs bij elk resultaat", "Ja: elk resultaat komt met bewijs", "In het algemeen niet", "In het algemeen niet"],
                    ["Metadata van video en muziek", "Leest en verrijkt ze, thuis", "Buiten bereik van Deep Search", "Via aparte media-apps, afhankelijk van het pakket"],
                    ["MP3-tags verbeteren", "Ja: vindt en ruimt MP3-metadata op", "Buiten bereik van Deep Search", "Gedeeltelijk, via muziek-apps"],
                    ["Automatisch archiveren", "Gepland (V1.x): omkeerbaar sorteren op regels", "Handmatig, map voor map", "Handmatig, map voor map"],
                    ["Detectie van duplicaten en gelijkende beelden", "Gepland (V1.x) voor dubbele of gelijkende afbeeldingen", "Gedeeltelijk aanwezig", "Gedeeltelijk aanwezig"],
                    ["Afhankelijkheid van de fabrikant", "Geen: draait op elke server (container)", "Gebonden aan een Synology NAS", "Gebonden aan een QNAP NAS"],
                    ["Waar het naartoe wil", "Een zoek- en organisatielaag met AI over elk bestandstype", "AI-fotozoekopdracht binnen Synology Photos", "NAS-beheer met foto-/media-apps"]
                ],
                foot: "Zie TalpaX als een aanvullende, fabrikantonafhankelijke laag om je bestanden te doorzoeken en analyseren. De apps die bij je NAS zaten blijven prima bruikbaar om het systeem te beheren."
            },
            hw: {
                eyebrow: "Hardware",
                title: "Welke hardware heeft TalpaX nodig?",
                sub: "TalpaX is niet aan specifieke hardware gebonden. Hoe capabeler je machine, hoe meer parallelle AI-verwerking en zoeksnelheid je vrijspeelt, zeker op nieuwere, op AI voorbereide NAS-apparaten.",
                lead: "Een schatting, geen benchmark:",
                body: "De cijfers hieronder extrapoleren de huidige TalpaX-prestaties op Unraid-hardware naar de specificaties van de Ugreen iDX6011 Pro. Zie ze als een aannemelijke aanduiding, niet als een gemeten benchmark op echte Ugreen-hardware.",
                th1: "Middel", th2: "Vandaag (Unraid)", th4: "Winst",
                rows: [
                    ["RAM", "20 GiB", "64 GB", "+220%"],
                    ["CPU", "6C/12T", "16C/16T", "+167%"],
                    ["Netwerk", "1 Gbps", "10 Gbps", "+10×"],
                    ["AI-verwerking", "~2–3 s", "~0.8–1.2 s", "~2,5× sneller"]
                ],
                mt: "Het minimum dat je nodig hebt",
                ms: "TalpaX draait als containerplatform op elk systeem met Docker-ondersteuning.",
                reqs: [
                    ["CPU", "6 kernen / 12 threads (Intel Core i3 of vergelijkbaar)"],
                    ["RAM", "32 GiB aanbevolen"],
                    ["Opslag", "Ongeveer 20 GiB aan beelden + ongeveer 17 GiB aan appdata"],
                    ["Kernel", "Linux met Docker Compose en cgroup v2"],
                    ["Netwerk", "Één vrije hostpoort (8787)"]
                ],
                eo: "Over op AI voorbereide NAS-apparaten",
                eos: "TalpaX groeit met je hardware mee, en de sprong merk je vooral in parallelle AI-verwerking en zoeksnelheid.",
                cards: [
                    ["Ugreen iDX6011 Pro", "Een Intel Core Ultra 7, 64 GB RAM en een 10 GbE-netwerk laten ruimschoots marge om meerdere diensten tegelijk te draaien, de verwerking te versnellen en een snelle netwerk te benutten: een comfortabele keuze."],
                    ["Ugreen DXP4800 Pro", "Met 8 GB basis-RAM is het krap voor TalpaX. Voeg geheugen toe en het werkt prima; dan haal je de minimumeisen ruim."
                    ]
                ]
            },
            sup: {
                eyebrow: "Steun",
                title: "Steun dit project alsjeblieft",
                sub: "TalpaX is een privéproject, zonder bedrijf, team of investeerder erachter: alleen ideeën, tijd en doorzettingsvermogen.",
                p1: "Mario Kowalski (Neurenberg) voert een campagne op GoFundMe, «Privat KI Projekt nearly Noyron, for my Startup possibility» (augustus 2026). Het gaat erom zijn ideeën een kans te geven om zijn eigen bedrijf te worden, vooral rond Deadalus, zijn meest ambitieuze project over kunstmatige intelligentie en leersystemen.",
                p2: "Het centrale doel is de aanschaf van een krachtige, volledig lokale ontwikkelmachine (een Mac Studio met veel unified memory) om thuis aanzienlijk grotere AI-modellen te draaien, in plaats van bij elk serieus experiment cloudrekenkracht te huren.",
                p3: "TalpaX wordt in de campagne genoemd als mogelijk bedankje aan donateurs: zodra het een stabiele, bruikbare status bereikt, is het idee om supporters een vrij toegankelijke versie te bieden, zonder enige marketingbelofte.",
                p4: "Deze pagina stelt TalpaX voor. De campagne is daarvan onafhankelijk en betreft het werk van Mario Kowalski.",
                tag: "GoFundMe-campagne",
                actionH: "Meer weten en steunen",
                meta1: "Georganiseerd door Mario Kowalski",
                meta2: "augustus 2026",
                btn: "Bekijk op GoFundMe",
                note: "Zelfs de campagne delen helpt al, als je nu niet kunt doneren."
            },
            pr: {
                eyebrow: "Privacy",
                title: "Privacy voorop",
                sub: "TalpaX volgt één regel: je persoonlijke bestanden zijn van jou, en dat geldt ook voor hoe ze worden verwerkt.",
                items: [
                    ["0", "Cloudverwerking", "Je bestanden gaan nergens heen."],
                    ["100%", "Op je eigen apparaat", "Zoekopdracht, gezichtsherkenning en archivering draaien op je eigen server."],
                    ["RO", "Alleen-lezen toegang", "Originelen worden alleen gelezen, nooit herschreven."],
                    ["✔", "Bewijs, geen gokwerk", "Niets wordt gekoppeld of toegewezen zonder jouw expliciete bevestiging."]
                ]
            },
            footer: { fine: "Een 100 % lokaal zoek- en analyseplatform voor privébestanden. © 2026 TalpaX." }
        },

        pl: {
            langLabel: "Język",
            nav: { functions: "Funkcje", compare: "Porównanie", hardware: "Sprzęt", support: "Wesprzyj nas", privacy: "Prywatność" },
            hero: {
                kick: "100% lokalnie · zero chmury · zawsze prywatnie",
                h1a: "Twoje prywatne wyszukiwanie AI,",
                h1b: "dla wszystkich plików,",
                h1c: "na Twoim własnym serwerze.",
                lede: "TalpaX działa w całości na Twoim sprzęcie. Indeksuje Twoje prywatne zdjęcia, filmy, dokumenty i pliki audio, rozpoznaje twarze, znajduje obiekty i teksty, a każdy wynik opatruje dowodem, który możesz sam sprawdzić. Twoje dane nigdy nie opuszczają domu — kropka.",
                btnCompare: "Zobacz porównanie",
                btnMore: "Poznaj TalpaX"
            },
            feat: {
                eyebrow: "Co robi",
                title: "Jedna zasada: Twoje pliki pozostają Twoje",
                sub: "Te funkcje są dostępne już dziś, w całości na Twoim urządzeniu i bez polegania na chmurze.",
                cards: [
                    ["Jedna wyszukiwarka, wszystkie Twoje źródła", "Język naturalny, tekst z dokumentów i obrazów (OCR), obiekty wizualne i wyuczone sygnały — wszystko w jednym wyszukiwaniu."],
                    ["Rozpoznawanie twarzy", "Znajduje tę samą osobę Twoich zdjęciach i filmach — dzięki potwierdzonym twarzom referencyjnym i grupowaniu między mediami."],
                    ["Dowód, nie zgadywanie", "Każdy wynik jest uzasadniony, nigdy zgadnięty. Tożsamości i dopasowania przyjmowane są dopiero po Twoim potwierdzeniu."],
                    ["Wyszukiwanie wewnątrz dokumentów", "Indeksujemy to, co dokument mówi, a nie tylko nazwę pliku: pełny tekst i OCR skanów sprawiają, że nawet najdziwniejsze nazwy łatwo znaleźć."],
                    ["Wyszukiwanie, które Cię rozumie", "Jeśli chcesz, wyszukiwanie bierze pod uwagę to, kto je wykonuje: foldery, wcześniejszą wiedzę, dawne nawyki — zawsze pod Twoją kontrolą."],
                    ["OCR dla skanów", "Tekst w Twoich zeskanowanych dokumentach i zdjęciach jest odczytywany i udostępniany do wyszukiwania — w pełni offline."],
                    ["Metadane multimediów", "Czyta i wzbogaca metadane Twoich filmów i muzyki — w domu, bez wysyłania czegokolwiek do zewnętrznych usług."],
                    ["Czystsze tagi MP3", "Porządkuje i wzbogaca tagi Twojej muzyki, dzięki czemu tytuły, wykonawcy i albumy są wiarygodnie do znalezienia."],
                    ["Bez chmury, z założenia", "Wszystkie modele działają na Twoim sprzęcie. Żadnej chmury, żadnych osób trzecich, żadnego pliku osobistego, który opuszcza dom."],
                    ["Organizacja bez ryzyka", "Zmienia nazwy i porządkuje, zawsze zostawiając wyjście: oryginały pozostają nienaruszone, a każdą zmianę można sprawdzić i cofnąć. Automatyczne archiwizowanie nadchodzi w V1.x."],
                    ["Wykrywanie duplikatów", "Znajduje zduplikowane lub podobne obrazy (planowane w V1.x) — duży krok w stronę uporządkowanych, jednoznacznych kolekcji."],
                    ["Niezależny od każdego producenta", "TalpaX nie jest przypisany do żadnego NAS. Działa jako platforma kontenerowa na serwerze, który już masz."]
                ]
            },
            cmp: {
                eyebrow: "W porównaniu",
                title: "TalpaX na tle aplikacji NAS",
                sub: "Uczciwe i obiektywne spojrzenie na wbudowane aplikacje zdjęć, muzyki i wyszukiwania oraz na wyszukiwanie AI producentów NAS — bez faworyzowania kogokolwiek.",
                lead: "Uwaga o tym porównaniu:",
                body: "Poniższa tabela porównuje TalpaX (wersja 0.7.0) na równych zasadach z wyszukiwaniem AI firmy Synology (Deep Search) oraz z wbudowanymi aplikacjami zdjęć/muzyki/wyszukiwania QNAP (np. QuMagie). Ma służyć wskazówką, nie benchmarkiem, i nie rości sobie prawa do kompletności. Prawdziwa różnica to nie żadna konkretna funkcja: to zasada, że wszystko pozostaje lokalnie na Twoim sprzęcie — i właśnie w tym tkwi racja istnienia TalpaX.",
                th1: "Aspekt", th2: "Synology Deep Search", th3: "QNAP (np. QuMagie)",
                rows: [
                    ["Gdzie Twoje dane żyją i są przetwarzane", "Na Twoim sprzęcie, lokalnie; bez chmury", "Na Twoim NAS, lokalnie", "Na Twoim NAS, lokalnie"],
                    ["Wyszukiwanie w języku naturalnym", "Napędzane AI, łączy wiele źródeł", "Oparte na AI (wyszukiwanie semantyczne, głównie w zdjęciach)", "Głównie słowa kluczowe i foldery"],
                    ["Wyszukiwanie wewnątrz dokumentów", "Indeksuje prawdziwą treść (pełny tekst, OCR skanów), nie tylko nazwy plików", "Skoncentrowane na zdjęciach/mediach; treść dokumentów ograniczona", "Głównie nazwy plików i folderów, częściowo indeksacja tekstu"],
                    ["Rozpoznawanie twarzy", "Zdjęcia i filmy, z potwierdzeniem i dowodem", "Tylko zdjęcia (wbudowane w Synology Photos)", "Zdjęcia; przypisanie do osoby wymaga wysiłku"],
                    ["Dowód przy każdym wyniku", "Tak: każdy wynik ma dowód", "Zazwyczaj nie", "Zazwyczaj nie"],
                    ["Metadane wideo i muzyki", "Czyta i wzbogaca, w domu", "Poza zakresem Deep Search", "Poprzez osobne aplikacje medialne, zależnie od pakietu"],
                    ["Poprawa tagów MP3", "Tak: znajduje i porządkuje metadane MP3", "Poza zakresem Deep Search", "Częściowo, poprzez aplikacje muzyczne"],
                    ["Automatyczne archiwizowanie", "Planowane (V1.x): odwracalne porządkowanie według reguł", "Ręcznie, folder po folderze", "Ręcznie, folder po folderze"],
                    ["Wykrywanie duplikatów i podobnych obrazów", "Planowane (V1.x) dla zduplikowanych lub podobnych obrazów", "Częściowo dostępne", "Częściowo dostępne"],
                    ["Zależność od producenta", "Brak: działa na dowolnym serwerze (kontener)", "Przypisany do NAS Synology", "Przypisany do NAS QNAP"],
                    ["Dokąd zmierza", "Warstwa wyszukiwania i organizacji AI dla każdego typu plików", "AI-owe wyszukiwanie zdjęć w Synology Photos", "Zarządzanie NAS z aplikacjami zdjęć/mediów"]
                ],
                foot: "Pomyśl o TalpaX jako o uzupełniającej, niezależnej od producenta warstwie do wyszukiwania i analizowania plików. Aplikacje, które przyszły z Twoim NAS, pozostają w pełni wystarczające do administrowania systemem."
            },
            hw: {
                eyebrow: "Sprzęt",
                title: "Jakiego sprzętu potrzebuje TalpaX?",
                sub: "TalpaX nie jest przypisany do konkretnego sprzętu. Im bardziej wydajna maszyna, tym więcej równoległego przetwarzania AI i szybkości wyszukiwania odblokujesz — zwłaszcza na nowszych NAS-ach przygotowanych pod AI.",
                lead: "Szacunek, nie benchmark:",
                body: "Poniższe liczby ekstrapolują obecną wydajność TalpaX na sprzęcie Unraid do specyfikacji Ugreen iDX6011 Pro. Traktuj je jako rozsądną wskazówkę, a nie benchmark zmierzony na prawdziwym sprzęcie Ugreen.",
                th1: "Zasób", th2: "Dziś (Unraid)", th4: "Zysk",
                rows: [
                    ["RAM", "20 GiB", "64 GB", "+220%"],
                    ["CPU", "6C/12T", "16C/16T", "+167%"],
                    ["Sieć", "1 Gbps", "10 Gbps", "+10×"],
                    ["Przetwarzanie AI", "~2–3 s", "~0.8–1.2 s", "~2,5× szybciej"]
                ],
                mt: "Minimum, którego potrzebujesz",
                ms: "TalpaX działa jako platforma kontenerowa na dowolnym systemie z obsługą Docker.",
                reqs: [
                    ["CPU", "6 rdzeni / 12 wątków (Intel Core i3 lub odpowiednik)"],
                    ["RAM", "zalecane 32 GiB"],
                    ["Pamięć", "Ok. 20 GiB obrazów + ok. 17 GiB danych aplikacji"],
                    ["Jądro", "Linux z Docker Compose i cgroup v2"],
                    ["Sieć", "Jeden wolny port hosta (8787)"]
                ],
                eo: "O NAS-ach przygotowanych pod AI",
                eos: "TalpaX rośnie wraz z Twoim sprzętem, a skok widać zwłaszcza w równoległym przetwarzaniu AI i szybkości wyszukiwania.",
                cards: [
                    ["Ugreen iDX6011 Pro", "Intel Core Ultra 7, 64 GB RAM i sieć 10 GbE dają aż nadto zapasu na uruchomienie kilku usług naraz, przyspieszenie przetwarzania i wykorzystanie szybkiej sieci: wygodny wybór."],
                    ["Ugreen DXP4800 Pro", "Z fabrycznymi 8 GB RAM jest ciasno dla TalpaX. Dodaj pamięć i działa bardzo dobrze; wtedy minimalne wymagania spełnisz z zapasem."]
                ]
            },
            sup: {
                eyebrow: "Wsparcie",
                title: "Proszę, wesprzyj ten projekt",
                sub: "TalpaX to prywatny projekt — bez firmy, zespołu czy inwestora w tle: tylko pomysły, czas i wytrwałość.",
                p1: "Mario Kowalski (Norymberga) prowadzi na GoFundMe kampanię «Privat KI Projekt nearly Noyron, for my Startup possibility» (sierpień 2026). Chodzi o to, by dać jego pomysłom szansę przekształcenia się we własny biznes, zwłaszcza wokół Deadalusa — jego najbardziej ambitnego projektu o sztucznej inteligencji i systemach uczenia.",
                p2: "Głównym celem jest zakup wydajnej, w pełni lokalnej maszyny deweloperskiej (Mac Studio z dużą pamięcią ujednoliconą), aby uruchamiać w domu znacznie większe modele AI, zamiast przy każdym poważnym eksperymencie wynajmować moc obliczeniową w chmurze.",
                p3: "TalpaX pojawia się w kampanii jako forma podziękowania dla darczyńców: kiedy osiągnie stabilny, użyteczny stan, zamierzamy zaoferować wspierającym wersję o swobodnym dostępie — bez żadnych obietnic marketingowych.",
                p4: "Ta strona prezentuje TalpaX. Kampania jest od niego niezależna i dotyczy pracy Maria Kowalskiego.",
                tag: "Kampania GoFundMe",
                actionH: "Dowiedz się więcej i wesprzyj",
                meta1: "Organizuje Mario Kowalski",
                meta2: "sierpień 2026",
                btn: "Zobacz na GoFundMe",
                note: "Nawet samo udostępnienie kampanii pomaga, jeśli nie możesz teraz przekazać darowizny."
            },
            pr: {
                eyebrow: "Prywatność",
                title: "Prywatność na pierwszym miejscu",
                sub: "TalpaX kieruje się jedną zasadą: Twoje pliki osobiste należą do Ciebie — także sposób, w jaki są przetwarzane.",
                items: [
                    ["0", "Przetwarzanie w chmurze", "Twoje pliki nie trafiają nigdzie indziej."],
                    ["100%", "Na Twoim urządzeniu", "Wyszukiwanie, rozpoznawanie twarzy i archiwizowanie działają na Twoim serwerze."],
                    ["RO", "Dostęp tylko do odczytu", "Oryginały są tylko odczytywane, nigdy nadpisywane."],
                    ["✔", "Dowód, nie zgadywanie", "Nic nie jest łączone ani przypisywane bez Twojego wyraźnego potwierdzenia."]
                ]
            },
            footer: { fine: "W 100% lokalna platforma wyszukiwania i analizy dla plików prywatnych. © 2026 TalpaX." }
        }
    };

    var GITHUB_TEXT = {
        de: {
            eyebrow: "GitHub",
            title: "TalpaX auf GitHub",
            body: "Dies ist das offizielle GitHub-Repository von TalpaX. Quellcode und Releases sind derzeit nicht öffentlich verfügbar.",
            button: "Projekt auf GitHub öffnen"
        },
        en: {
            eyebrow: "GitHub",
            title: "TalpaX on GitHub",
            body: "This is the official GitHub repository for TalpaX. Source code and releases are not currently publicly available.",
            button: "Open project on GitHub"
        },
        "zh-CN": {
            eyebrow: "GitHub",
            title: "GitHub 上的 TalpaX",
            body: "这是 TalpaX 的官方 GitHub 仓库。源代码和版本目前尚未公开。",
            button: "在 GitHub 上打开项目"
        },
        "zh-TW": {
            eyebrow: "GitHub",
            title: "GitHub 上的 TalpaX",
            body: "這是 TalpaX 的官方 GitHub 儲存庫。原始碼和版本目前尚未公開。",
            button: "在 GitHub 上開啟專案"
        },
        ru: {
            eyebrow: "GitHub",
            title: "TalpaX на GitHub",
            body: "Это официальный репозиторий TalpaX на GitHub. Исходный код и выпуски сейчас не доступны публично.",
            button: "Открыть проект на GitHub"
        },
        hi: {
            eyebrow: "GitHub",
            title: "GitHub पर TalpaX",
            body: "यह TalpaX का आधिकारिक GitHub रिपॉज़िटरी है। सोर्स कोड और रिलीज़ अभी सार्वजनिक रूप से उपलब्ध नहीं हैं।",
            button: "GitHub पर प्रोजेक्ट खोलें"
        },
        ta: {
            eyebrow: "GitHub",
            title: "GitHub-இல் TalpaX",
            body: "இது TalpaX-இன் அதிகாரப்பூர்வ GitHub களஞ்சியம். மூலக் குறியீடும் வெளியீடுகளும் தற்போது பொதுவாகக் கிடைக்கவில்லை.",
            button: "GitHub-இல் திட்டத்தைத் திறக்கவும்"
        },
        es: {
            eyebrow: "GitHub",
            title: "TalpaX en GitHub",
            body: "Este es el repositorio oficial de TalpaX en GitHub. El código fuente y las versiones no están disponibles públicamente por el momento.",
            button: "Abrir proyecto en GitHub"
        },
        pt: {
            eyebrow: "GitHub",
            title: "TalpaX no GitHub",
            body: "Este é o repositório oficial do TalpaX no GitHub. O código-fonte e as versões não estão disponíveis publicamente neste momento.",
            button: "Abrir projeto no GitHub"
        },
        fr: {
            eyebrow: "GitHub",
            title: "TalpaX sur GitHub",
            body: "Il s’agit du dépôt GitHub officiel de TalpaX. Le code source et les versions ne sont actuellement pas accessibles au public.",
            button: "Ouvrir le projet sur GitHub"
        },
        it: {
            eyebrow: "GitHub",
            title: "TalpaX su GitHub",
            body: "Questo è il repository GitHub ufficiale di TalpaX. Il codice sorgente e le versioni non sono attualmente disponibili al pubblico.",
            button: "Apri il progetto su GitHub"
        },
        ja: {
            eyebrow: "GitHub",
            title: "GitHub の TalpaX",
            body: "これは TalpaX の公式 GitHub リポジトリです。ソースコードとリリースは現在公開されていません。",
            button: "GitHub でプロジェクトを開く"
        },
        ar: {
            eyebrow: "GitHub",
            title: "TalpaX على GitHub",
            body: "هذا هو مستودع TalpaX الرسمي على GitHub. الشفرة المصدرية والإصدارات غير متاحة للعامة حاليًا.",
            button: "فتح المشروع على GitHub"
        },
        ko: {
            eyebrow: "GitHub",
            title: "GitHub의 TalpaX",
            body: "TalpaX의 공식 GitHub 저장소입니다. 소스 코드와 릴리스는 현재 공개되어 있지 않습니다.",
            button: "GitHub에서 프로젝트 열기"
        },
        tr: {
            eyebrow: "GitHub",
            title: "GitHub'da TalpaX",
            body: "Bu, TalpaX'in resmi GitHub deposudur. Kaynak kodu ve sürümler şu anda herkese açık değildir.",
            button: "Projeyi GitHub'da aç"
        },
        nl: {
            eyebrow: "GitHub",
            title: "TalpaX op GitHub",
            body: "Dit is de officiële GitHub-repository van TalpaX. De broncode en releases zijn momenteel niet openbaar beschikbaar.",
            button: "Project openen op GitHub"
        },
        pl: {
            eyebrow: "GitHub",
            title: "TalpaX na GitHubie",
            body: "To oficjalne repozytorium TalpaX w serwisie GitHub. Kod źródłowy i wydania nie są obecnie dostępne publicznie.",
            button: "Otwórz projekt na GitHubie"
        }
    };

    /* ---------- Rendering ---------- */

    var DEFAULT = "de";
    var saved = null;
    try { saved = localStorage.getItem("talpax-lang"); } catch (e) { saved = null; }
    var current = (saved && T[saved]) ? saved : DEFAULT;

    function el(id) { return document.getElementById(id); }

    var BRAND_IMG = '<img src="talpax-wordmark.svg" alt="TalpaX" class="brand-inline" loading="lazy">';

    function toBrand(text) {
        if (typeof text !== "string") return text;
        return text.replace(/TalpaX/g, BRAND_IMG);
    }

    var cmpRowsEl = el("cmpBody");
    var hwRowsEl = el("hwBody");
    var featGrid = el("featGrid");
    var reqGrid = el("reqGrid");
    var hwCardsEl = el("hwCards");
    var prGrid = el("prGrid");

    function setText(node, text) {
        if (node) node.innerHTML = toBrand(text);
    }

    function apply(dict) {
        var i, nodes = document.querySelectorAll("[data-i18n]");
        for (i = 0; i < nodes.length; i++) {
            var key = nodes[i].getAttribute("data-i18n");
            var val = dict;
            var parts = key.split(".");
            var ok = true;
            var j;
            for (j = 0; j < parts.length; j++) {
                if (val && typeof val === "object" && parts[j] in val) { val = val[parts[j]]; }
                else { ok = false; break; }
            }
            if (ok) setText(nodes[i], val);
        }
        document.documentElement.lang = (LANGS[current] && LANGS[current].htmlLang) || "de";
        document.title = dict.hero.h1a + " – TalpaX";
    }

    function applyGitHubText() {
        var dict = GITHUB_TEXT[current] || GITHUB_TEXT.en;
        var nodes = document.querySelectorAll("[data-github-i18n]");
        var i, key;
        for (i = 0; i < nodes.length; i++) {
            key = nodes[i].getAttribute("data-github-i18n");
            if (dict[key]) setText(nodes[i], dict[key]);
        }
    }

    function buildFeatures(dict) {
        var cards = dict.feat.cards;
        var i;
        featGrid.innerHTML = "";
        for (i = 0; i < cards.length; i++) {
            var div = document.createElement("div");
            div.className = "card";
            var h = document.createElement("h3");
            h.innerHTML = '<span class="tick">✓</span> ' + toBrand(cards[i][0]);
            var p = document.createElement("p");
            p.innerHTML = toBrand(cards[i][1]);
            div.appendChild(h);
            div.appendChild(p);
            featGrid.appendChild(div);
        }
    }

    function buildCmp(dict) {
        var rows = dict.cmp.rows;
        var i;
        cmpRowsEl.innerHTML = "";
        for (i = 0; i < rows.length; i++) {
            var tr = document.createElement("tr");
            var th = document.createElement("th");
            th.innerHTML = toBrand(rows[i][0]);
            tr.appendChild(th);
            var tdA = document.createElement("td");
            tdA.className = "talpax";
            if (i === 0 || i === 7 || i === 8) {
                tdA.innerHTML = toBrand(rows[i][1].replace(/\s*\(.*?\)$/, ""));
                var core = document.createElement("span");
                core.className = "tag tag-core";
                core.textContent = i === 0 ? "Kern" : "Stand";
                tdA.appendChild(core);
            } else {
                tdA.innerHTML = toBrand(rows[i][1]);
            }
            tr.appendChild(tdA);
            var tdB = document.createElement("td");
            tdB.innerHTML = toBrand(rows[i][2]);
            tr.appendChild(tdB);
            var tdC = document.createElement("td");
            tdC.innerHTML = toBrand(rows[i][3]);
            tr.appendChild(tdC);
            cmpRowsEl.appendChild(tr);
        }
    }

    function buildHw(dict) {
        var rows = dict.hw.rows;
        var i;
        hwRowsEl.innerHTML = "";
        for (i = 0; i < rows.length; i++) {
            var tr = document.createElement("tr");
            var th = document.createElement("th");
            th.innerHTML = toBrand(rows[i][0]);
            tr.appendChild(th);
            var r, td;
            for (r = 1; r < 4; r++) {
                td = document.createElement("td");
                td.innerHTML = toBrand(rows[i][r]);
                tr.appendChild(td);
            }
            hwRowsEl.appendChild(tr);
        }
        reqGrid.innerHTML = "";
        var reqs = dict.hw.reqs;
        for (i = 0; i < reqs.length; i++) {
            var d = document.createElement("div");
            d.className = "req";
            var l = document.createElement("div");
            l.className = "req-label";
            l.innerHTML = toBrand(reqs[i][0]);
            var v = document.createElement("div");
            v.className = "req-val";
            v.innerHTML = toBrand(reqs[i][1]);
            d.appendChild(l);
            d.appendChild(v);
            reqGrid.appendChild(d);
        }
        hwCardsEl.innerHTML = "";
        var cards = dict.hw.cards;
        for (i = 0; i < cards.length; i++) {
            var cd = document.createElement("div");
            cd.className = "card";
            var ch = document.createElement("h3");
            ch.innerHTML = toBrand(cards[i][0]);
            var cp = document.createElement("p");
            cp.innerHTML = toBrand(cards[i][1]);
            cd.appendChild(ch);
            cd.appendChild(cp);
            hwCardsEl.appendChild(cd);
        }
    }

    function buildPrivacy(dict) {
        var items = dict.pr.items;
        var i;
        prGrid.innerHTML = "";
        for (i = 0; i < items.length; i++) {
            var d = document.createElement("div");
            d.className = "privacy-item";
            var num = document.createElement("div");
            num.className = "num";
            num.textContent = items[i][0];
            var h = document.createElement("h4");
            h.textContent = items[i][1];
            var p = document.createElement("p");
            p.textContent = items[i][2];
            d.appendChild(num);
            d.appendChild(h);
            d.appendChild(p);
            prGrid.appendChild(d);
        }
    }

    function labelResponsiveTables() {
        var tables = document.querySelectorAll(".table-scroll table");
        var t, i, j, headers, rows, cells, label, img;
        for (t = 0; t < tables.length; t++) {
            headers = tables[t].querySelectorAll("thead th");
            rows = tables[t].querySelectorAll("tbody tr");
            for (i = 0; i < rows.length; i++) {
                cells = rows[i].children;
                for (j = 1; j < cells.length; j++) {
                    label = headers[j] ? headers[j].textContent.trim() : "";
                    img = headers[j] ? headers[j].querySelector("img") : null;
                    if (!label && img) label = img.alt;
                    cells[j].setAttribute("data-label", label);
                }
            }
        }
    }

    function render() {
        var dict = T[current] || T[DEFAULT];
        apply(dict);
        applyGitHubText();
        buildFeatures(dict);
        buildCmp(dict);
        buildHw(dict);
        buildPrivacy(dict);
        var cmpHead = el("cmpHead");
        if (cmpHead) cmpHead.innerHTML = BRAND_IMG;
        labelResponsiveTables();
    }

    function buildLangSelect() {
        var sel = el("lang");
        var keys = Object.keys(T);
        var i;
        for (i = 0; i < keys.length; i++) {
            var k = keys[i];
            var meta = LANGS[k];
            var opt = document.createElement("option");
            opt.value = k;
            opt.textContent = meta.flag + " " + meta.name + " (" + (meta.aiLabel || "KI-Übersetzung") + ")";
            if (k === current) opt.selected = true;
            sel.appendChild(opt);
        }
        sel.addEventListener("change", function (e) {
            current = e.target.value;
            try { localStorage.setItem("talpax-lang", current); } catch (err) { /* ignore */ }
            render();
        });
    }

    buildLangSelect();
    render();
})();
