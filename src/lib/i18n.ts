export const LANGS = ["de", "ru"] as const;
export type Lang = (typeof LANGS)[number];

export const DEFAULT_LANG: Lang = "de";

export function isLang(value: unknown): value is Lang {
  return typeof value === "string" && (LANGS as readonly string[]).includes(value);
}

// Alle Texte stammen woertlich aus docs/briefing/CGW-Website-Briefing-Claude-Code.md.
// Texte in [eckigen Klammern] sind Platzhalter und bleiben bewusst sichtbar.
const de = {
  htmlLang: "de",
  skipLink: "Zum Inhalt springen",

  brand: {
    name: "Christengemeinde Gottes Wort",
    tagline: "Bochum · Deutsch & Русский",
  },

  nav: {
    label: "Hauptnavigation",
    home: "Startseite",
    who: "Wer wir sind",
    sunday: "Sonntag",
    events: "Termine",
    belief: "Was wir glauben",
    give: "Geben",
  },

  menu: {
    open: "Menü öffnen",
    close: "Menü schließen",
  },

  lang: {
    label: "Sprache wählen",
    de: "Deutsch",
    ru: "Russisch",
  },

  hero: {
    headline: ["Gemeinsam glauben", "Gemeinsam wachsen"],
    ctaOnsite: "Persönlich vorbeikommen",
    strip: [
      { strong: "Sonntags 11:00", text: "Deutsch & Russisch" },
      { strong: "Harpener Heide 9", text: "44805 Bochum" },
      { strong: "Kinderkirche", text: "für 3–12 Jahre" },
    ],
  },

  who: {
    heading:
      "Wir leben echte Gemeinschaft, die trägt, herausfordert und Menschen in ihrer Beziehung zu Gott wachsen lässt",
    text: "Wir sind eine deutsch-russische Freikirche für alle Generationen und ein Zuhause mitten in Bochum.",
    cards: {
      bibel: {
        word: "Bibel",
        back: "Wir glauben, dass die Bibel Gottes inspiriertes Wort ist. Sie ist unsere höchste Autorität für Glauben und Leben und das Fundament für alles, was wir tun.",
      },
      jesus: {
        word: "Jesus",
        back: "Wir glauben, dass Jesus wahrer Gott und wahrer Mensch ist. Er ging für unsere Schuld ans Kreuz. Allein durch den Glauben an ihn finden wir Erlösung.",
      },
      geist: {
        word: "Heiliger Geist",
        back: "Wir glauben, dass der Heilige Geist heute noch wirkt. Er rüstet uns zu, und durch die Taufe im Heiligen Geist sendet er uns mit Kraft und Vollmacht in den Dienst.",
      },
    },
    readAll: "Unser ganzes Glaubensbekenntnis lesen",
    bfp: "Teil des BFP",
  },

  sunday: {
    heading: "Bei uns endet der Sonntag nicht mit dem Gottesdienst",
    // Der Gedankenstrich in diesem Satz ist laut Briefing bewusst gesetzt.
    text: "Es folgen ein gedeckter Tisch, gute Gespräche und viel gemeinsame Zeit – komm als Gast und fühl dich wie zu Hause.",
    items: [
      {
        time: "11–13 Uhr",
        title: "Gottesdienst",
        imageAlt: "Lobpreisband auf der Bühne vor einem leuchtenden Kreuz, davor steht die Gemeinde",
        text: "Wir feiern mit Lobpreis, Gebet und einer Predigt, die mitten ins Leben spricht. Alles wird auf Deutsch und Russisch übersetzt, und auch für Kinder haben wir eine eigene Kinderkirche.",
      },
      {
        time: "13–14:30 Uhr",
        title: "Mittagstisch",
        imageAlt: "Eine Frau mit Kaffeebecher unterhält sich lächelnd mit anderen am Tisch",
        text: "In unserer Kantine essen und lachen wir zusammen, denn am Tisch lernt man sich am besten kennen. Setz dich gern dazu, das erste Essen geht auf uns.",
      },
      {
        time: "Ab 14:30 Uhr",
        title: "Gemeinschaft",
        imageAlt: "Jugendliche spielen draußen auf dem Gemeindegelände Volleyball",
        text: "Beim Volleyball, Fußball oder bei einem Kaffee ist immer Platz für einen mehr. Viele von uns bleiben bis in den Abend und verbringen den Sonntag zusammen.",
      },
    ],
  },

  stories: {
    reel: "Reel ansehen",
    reelPlaceholder: "[Reel-Thumbnail: Bochumer Geschichte]",
    quote:
      "„[Kernsatz aus einem echten Zeugnis: mit dem Problem einsteigen, freigegeben von der Person]“",
    person: "[Vorname] aus Bochum",
    more: "Weitere Geschichten ansehen",
  },

  events: {
    heading: "Das steht bei uns als Nächstes an",
    regionLabel: "Termine",
    prev: "Vorherige Termine",
    next: "Nächste Termine",
    more: "Mehr erfahren",
    close: "Schließen",
    items: {
      machineGunPreacher: {
        when: "18. Oktober · 11:00",
        title: "Gastprediger: Machine Gun Preacher",
        text: "Der Machine Gun Preacher, Sam Childers, ist bei uns zu Gast und erzählt seine persönliche Geschichte: vom Rocker zum Pastor und Retter von Kindern im Südsudan.",
        verse: null,
        action: "Jetzt anmelden",
        imageAlt: "Plakat: Machine Gun Preacher Sam Childers zu Gast",
      },
      gebetsabend: {
        when: "Freitag · 19:00",
        title: "Gebetsabend",
        verse: {
          text: "„Denn wo zwei oder drei versammelt sind in meinem Namen, da bin ich mitten unter ihnen.“",
          ref: "Matthäus 18,20",
        },
        text: "Jeden Freitag kommen wir gemeinsam vor Gott, bringen ihm, was uns bewegt, danken ihm und beten für unsere Stadt und füreinander. Wir glauben: Wenn Christen gemeinsam beten, liegt darin eine gewaltige Kraft, die etwas bewegt.",
        action: null,
        imageAlt: "Frau mit rotem Kopftuch betet mit gefalteten Händen an einem Tisch",
      },
      jugendtreff: {
        when: "Samstag · 18:00",
        title: "Jugendtreff (16–24 Jahre)",
        verse: null,
        text: "Wir sind eine Generation, die für Jesus brennt, und glauben, dass Gott mit der Jugend Großes vorhat. Komm samstags dazu, feiere mit uns Gottesdienst, tausch dich aus und lass uns gemeinsam im Glauben wachsen.",
        action: null,
        imageAlt: "Jugendliche sitzen nebeneinander an einer Hauswand im Gras und lächeln in die Kamera",
      },
      teenieTreff: {
        when: "Jeden 2. Samstag · 14:00",
        title: "Teenietreff (12–16 Jahre)",
        verse: null,
        text: "Wir glauben, dass Glaube schon in jungen Herzen Wurzeln schlägt. Deshalb treffen wir uns alle zwei Wochen samstags, lernen zusammen von Jesus, spielen, lachen und verbringen Zeit miteinander. Wer neu dazukommt, findet bei uns schnell Freunde.",
        action: null,
        imageAlt: "Gruppe von Kindern und Teenagern mit erhobenen Händen vor einer Leinwand",
      },
      // nicht aus dem Briefing: aus der Einladung des Frauendienst-Teams zusammengefasst
      frauentreff: {
        when: "Jeden 2. Sonntag · 14:00",
        title: "Frauentreff",
        verse: null,
        text: "Bei uns ist jede Frau von Herzen willkommen, egal wie alt du bist oder in welcher Lebensphase du gerade stehst. Wir lachen miteinander, beten füreinander und wachsen gemeinsam im Glauben. Hier dürfen neue Freundschaften entstehen.",
        action: null,
        imageAlt: "Drei Frauen sitzen lächelnd zusammen an einem Tisch",
      },
      kleingruppen: {
        when: "Nach Absprache",
        title: "Kleingruppen",
        verse: null,
        text: "Christliches Leben spielt sich nicht nur am Sonntag ab. Deshalb treffen wir uns wie die ersten Christen in kleinen Gruppen, in der Gemeinde oder zu Hause. Wir sprechen über den Glauben und unseren Alltag und stärken uns gegenseitig als Brüder und Schwestern. Es gibt viele Gruppen, bestimmt auch eine, die zu dir passt.",
        action: null,
        imageAlt: "Frau spricht zu einer Gruppe an einem festlich gedeckten Tisch mit Kerzen",
      },
    },
  },

  visit: {
    heading: "Wir freuen uns auf dich",
    text: "Wir möchten, dass du dich vom ersten Moment an willkommen fühlst. Sag uns deshalb gern vor deinem Besuch Bescheid, dann ist jemand für dich da und beantwortet all deine Fragen.",
    address: "Harpener Heide 9, 44805 Bochum",
    time: "Sonntags 11:00",
    carLabel: "Mit dem Auto",
    carText: "Über A40 & A43. Eigener Parkplatz und Plätze entlang der Harpener Heide.",
    transitLabel: "Mit Bus & Bahn",
    transitText: "Rund 10 Minuten zu Fuß von der S-Bahn-Haltestelle Weserstraße.",
    ctaRoute: "Route planen",
  },

  faq: {
    heading: "Häufige Fragen",
    items: [
      {
        q: "Muss ich mich anmelden?",
        a: "Nein, komm einfach vorbei, so wie du bist. Unser Welcome-Team begrüßt dich am Eingang, zeigt dir alles und beantwortet gern deine Fragen. Wir freuen uns auf dich!",
      },
      {
        q: "Gibt es einen Dresscode?",
        a: "Nein, komm so, wie du dich wohlfühlst. Bei uns ist von Jeans bis Sonntagsgarderobe alles dabei.",
      },
      {
        q: "Ich spreche kein Russisch. Kann ich trotzdem kommen?",
        a: "Kein Problem! Predigt und Moderation werden live übersetzt, so verstehst du alles auf Deutsch.",
      },
    ],
  },

  map: {
    address: "Harpener Heide 9 · 44805 Bochum",
    open: "Route in Google Maps",
    label: "Karte: Harpener Heide 9, 44805 Bochum. Öffnet die Route in Google Maps",
    credit: "© OpenStreetMap-Mitwirkende",
  },

  give: {
    fabLabel: "Spenden – Möglichmacher werden",
    heading: "Möglichmacher werden",
    text: "Alles, was du hier siehst, ist möglich, weil Menschen von Herzen geben. Danke an alle, die unsere Gemeinde mittragen!",
    qrLabel: "GiroCode zum Scannen mit der Banking-App",
    ibanLabel: "IBAN",
    recipientLabel: "Empfänger",
    copy: "IBAN kopieren",
    copied: "Kopiert",
    note: "Auf Wunsch stellen wir dir eine Spendenbescheinigung aus.",
    close: "Schließen",
  },

  footer: {
    discoverHeading: "Entdecken",
    joinHeading: "Mitmachen",
    legalHeading: "Rechtliches",
    instagram: "Instagram",
    imprint: "Impressum",
    privacy: "Datenschutz",
    copyright: "© 2026 Christengemeinde Gottes Wort Bochum",
    bfp: "Teil des BFP",
  },

  belief: {
    heading: "Was wir glauben",
    lead: "Die Bibel ist das Fundament unseres Glaubens. Deshalb halten wir an diesen zehn Grundsätzen fest.",
    parts: [
      {
        label: "Teil I",
        heading: "Gott und sein Wort",
        imageAlt: "Aufgeschlagene Bibel mit rotem Lesebändchen",
        items: [
          {
            num: "01",
            title: "Die Bibel",
            short: "Die Bibel ist Gottes Wort und unser Maßstab.",
            text: "Wir glauben an die göttliche Inspiration der Bibel. Die 66 Bücher der Heiligen Schrift sind das unfehlbare Wort Gottes und die absolute und höchste Quelle und Autorität in allen Fragen des Glaubens und des Lebens.",
            refs: "2. Timotheus 3,16 · 2. Petrus 1,21",
          },
          {
            num: "02",
            title: "Der dreieinige Gott",
            short: "Ein Gott in drei Personen.",
            text: "Wir glauben an den einen ewigen, allmächtigen und vollkommenen Gott, der in drei Personen existiert: Vater, Sohn und Heiliger Geist. Er ist der Schöpfer der sichtbaren und unsichtbaren Welten.",
            refs: "1. Mose 1,1 · Matthäus 28,19 · Kolosser 1,16",
          },
          {
            num: "03",
            title: "Jesus Christus",
            short: "Ganz Gott und ganz Mensch.",
            text: "Wir glauben an Jesus Christus, den Sohn Gottes. Er wurde vom Heiligen Geist empfangen und von der Jungfrau Maria geboren. Er ist wahrer Gott und wahrer Mensch und der Einzige, der nie eine Sünde begangen hat.",
            refs: "Lukas 1,35 · Johannes 1,14 · Hebräer 4,15",
          },
        ],
      },
      {
        label: "Teil II",
        heading: "Der Mensch und die Erlösung",
        imageAlt: "Holzkreuz vor einem dunklen Wolkenhimmel",
        items: [
          {
            num: "04",
            title: "Der Mensch und der Sündenfall",
            short: "Frei geschaffen und auf Erlösung angewiesen.",
            text: "Wir glauben, dass Gott den Menschen mit einem freien Willen geschaffen hat. Der Sündenfall war eine freiwillige Entscheidung des Menschen. Dadurch veränderte sich seine Natur: Er starb für Gott und wurde der Sünde lebendig.",
            refs: "1. Mose 3 · Römer 5,12",
          },
          {
            num: "05",
            title: "Das Sühneopfer Jesu",
            short: "Durch Jesus sind wir für immer gerettet.",
            text: "Wir glauben, dass Jesus Christus durch seinen stellvertretenden Tod am Kreuz die Menschen vor Gottes Gericht bewahrt. Wer persönlich an Jesus als Herrn und Retter glaubt, wird von der Sünde erlöst und auf ewig errettet.",
            refs: "Johannes 3,16 · Römer 3,23–24 · Römer 10,9",
          },
          {
            num: "06",
            title: "Taufe und Abendmahl",
            short: "Zeichen der Nachfolge und der Erinnerung.",
            text: "Wir glauben an zwei Sakramente der Gemeinde: die Wassertaufe und das Abendmahl. Die Taufe durch vollständiges Untertauchen ist ein Zeichen der Nachfolge und beruht auf einer persönlichen Entscheidung, deshalb taufen wir keine Säuglinge. Im Abendmahl feiern wir gemeinsam und verkündigen den Tod und die Auferstehung Jesu Christi.",
            refs: "Römer 6,4 · 1. Korinther 11,26",
          },
        ],
      },
      {
        label: "Teil III",
        heading: "Gemeinde und Hoffnung",
        imageAlt: "Lobpreisband auf der Bühne vor einem leuchtenden Kreuz, davor steht die Gemeinde",
        items: [
          {
            num: "07",
            title: "Die Gemeinde",
            short: "Gemeinschaft, die Gottes Kraft erlebt.",
            text: "Wir glauben, dass die Gemeinde die von Gott herausgerufene Gemeinschaft der Nachfolger Christi ist, der Leib Christi. Sie dient der gegenseitigen Auferbauung und dem gegenseitigen Dienst. Durch die Taufe im Heiligen Geist werden Gläubige bevollmächtigt, mit Kraft und Autorität zu dienen. Auch heute geschehen nach Gottes Willen Heilungen und Wunder.",
            refs: "Apostelgeschichte 1,8 · 1. Korinther 12,27",
          },
          {
            num: "08",
            title: "Der große Auftrag",
            short: "Wir geben weiter, was wir empfangen haben.",
            text: "Wir glauben an den großen Auftrag der Gemeinde. Mit den Geistesgaben, die Gott jedem Einzelnen schenkt, und mit der Frucht des Geistes sind wir Zeugen der Frohen Botschaft und machen Menschen zu Jüngern.",
            refs: "Matthäus 28,18–20 · Galater 5,22",
          },
          {
            num: "09",
            title: "Die Heiligung",
            short: "Ein Leben, das Gott ehrt.",
            text: "Wir glauben, dass Heiligung ein notwendiger Teil des Glaubenslebens ist. Sie geschieht durch die Überführung des Heiligen Geistes, die Erkenntnis der Heiligen Schrift und die Reinigung durch das Blut Jesu. Jeder Einzelne trägt dafür Verantwortung.",
            refs: "1. Thessalonicher 4,3 · Hebräer 12,14 · 1. Johannes 1,7",
          },
          {
            num: "10",
            title: "Die Wiederkunft Christi",
            short: "Jesus kommt wieder.",
            text: "Wir glauben, dass Jesus Christus, unser Herr, seine Gemeinde entrücken und in Kraft und Herrlichkeit wiederkommen wird: den Erretteten zum ewigen Leben und den Ungläubigen zum ewigen Gericht.",
            refs: "Apostelgeschichte 1,11 · 1. Thessalonicher 4,16–17",
          },
        ],
      },
    ],
    closingHeading: "Fragen zu unserem Glauben?",
    closingText: "Schreib uns gern, wir nehmen uns Zeit für deine Fragen.",
    whatsapp: "WhatsApp",
    email: "E-Mail",
  },
};

// Russische Fassung. Entwurf von Claude, bitte von einer Muttersprachlerin
// bzw. einem Muttersprachler gegenlesen lassen, beim Glaubensbekenntnis auch
// vom Pastor. Bibelstellen und Matthaeus 18,20 nach der Synodaluebersetzung.
const ru: typeof de = {
  htmlLang: "ru",
  skipLink: "Перейти к содержанию",

  // Name und Unterzeile bleiben als Eigenname gleich
  brand: de.brand,

  nav: {
    label: "Главная навигация",
    home: "Главная",
    who: "Кто мы",
    sunday: "Воскресенье",
    events: "Мероприятия",
    belief: "Во что мы верим",
    give: "Пожертвования",
  },

  menu: {
    open: "Открыть меню",
    close: "Закрыть меню",
  },

  lang: {
    label: "Выбрать язык",
    de: "Немецкий",
    ru: "Русский",
  },

  hero: {
    headline: ["Вместе верить", "Вместе расти"],
    ctaOnsite: "Прийти лично",
    strip: [
      { strong: "По воскресеньям 11:00", text: "на немецком и русском" },
      { strong: "Harpener Heide 9", text: "44805 Бохум" },
      { strong: "Детская церковь", text: "для детей 3–12 лет" },
    ],
  },

  who: {
    heading:
      "Мы живём настоящей общиной, которая поддерживает, бросает вызов и помогает людям расти в отношениях с Богом",
    text: "Мы немецко-русская свободная церковь для всех поколений и дом в самом сердце Бохума.",
    cards: {
      bibel: {
        word: "Библия",
        back: "Мы верим, что Библия является богодухновенным Словом Божьим. Она наш высший авторитет в вопросах веры и жизни и основание всего, что мы делаем.",
      },
      jesus: {
        word: "Иисус",
        back: "Мы верим, что Иисус истинный Бог и истинный Человек. Он пошёл на крест за наши грехи. Только через веру в Него мы обретаем спасение.",
      },
      geist: {
        word: "Святой Дух",
        back: "Мы верим, что Святой Дух действует и сегодня. Он снаряжает нас и через крещение Святым Духом посылает нас служить с силой и властью.",
      },
    },
    readAll: "Прочитать наше вероучение полностью",
    bfp: "Член BFP",
  },

  sunday: {
    heading: "У нас воскресенье не заканчивается богослужением",
    text: "Потом нас ждут накрытый стол, хорошие разговоры и много времени вместе – приходи в гости и чувствуй себя как дома.",
    items: [
      {
        time: "11–13 ч",
        title: "Богослужение",
        imageAlt: "Группа прославления на сцене перед светящимся крестом, перед ней стоит община",
        text: "Мы празднуем с прославлением, молитвой и проповедью, которая говорит прямо в жизнь. Всё переводится на немецкий и русский, а для детей у нас есть своя детская церковь.",
      },
      {
        time: "13–14:30 ч",
        title: "Обед",
        imageAlt: "Женщина с кофейным стаканчиком с улыбкой беседует с другими за столом",
        text: "В нашей столовой мы вместе едим и смеёмся, ведь за столом лучше всего знакомиться. Садись с нами, первый обед за наш счёт.",
      },
      {
        time: "С 14:30",
        title: "Общение",
        imageAlt: "Молодёжь играет в волейбол на территории церкви",
        text: "За волейболом, футболом или чашкой кофе всегда найдётся место ещё для одного. Многие из нас остаются до вечера и проводят воскресенье вместе.",
      },
    ],
  },

  // Section ist ausgeblendet, Platzhalter bleiben deutsch wie im Briefing
  stories: de.stories,

  events: {
    heading: "Что у нас впереди",
    regionLabel: "Мероприятия",
    prev: "Предыдущие мероприятия",
    next: "Следующие мероприятия",
    more: "Подробнее",
    close: "Закрыть",
    items: {
      machineGunPreacher: {
        when: "18 октября · 11:00",
        title: "Гость-проповедник: Machine Gun Preacher",
        text: "Machine Gun Preacher Сэм Чилдерс у нас в гостях и расскажет свою историю: как байкер стал пастором и спасителем детей в Южном Судане.",
        verse: null,
        action: "Зарегистрироваться",
        imageAlt: "Плакат: в гостях Machine Gun Preacher Сэм Чилдерс",
      },
      gebetsabend: {
        when: "Пятница · 19:00",
        title: "Молитвенный вечер",
        verse: {
          text: "«Ибо, где двое или трое собраны во имя Моё, там Я посреди них».",
          ref: "Матфея 18:20",
        },
        text: "Каждую пятницу мы вместе приходим к Богу, приносим Ему то, что нас волнует, благодарим Его и молимся за наш город и друг за друга. Мы верим: когда христиане молятся вместе, в этом есть огромная сила, которая меняет многое.",
        action: null,
        imageAlt: "Женщина в красном платке молится со сложенными руками за столом",
      },
      jugendtreff: {
        when: "Суббота · 18:00",
        title: "Молодёжная встреча (16–24 года)",
        verse: null,
        text: "Мы поколение, которое горит для Иисуса, и верим, что у Бога большие планы на молодёжь. Приходи по субботам, празднуй с нами богослужение, общайся, и давай вместе расти в вере.",
        action: null,
        imageAlt: "Молодёжь сидит в ряд у стены дома на траве и улыбается в камеру",
      },
      teenieTreff: {
        when: "Каждую вторую субботу · 14:00",
        title: "Подростковая встреча (12–16 лет)",
        verse: null,
        text: "Мы верим, что вера пускает корни уже в юных сердцах. Поэтому раз в две недели по субботам мы собираемся, вместе учимся у Иисуса, играем, смеёмся и проводим время друг с другом. Кто приходит впервые, быстро находит у нас друзей.",
        action: null,
        imageAlt: "Группа детей и подростков с поднятыми руками перед экраном",
      },
      frauentreff: {
        when: "Каждое второе воскресенье · 14:00",
        title: "Женская встреча",
        verse: null,
        text: "Мы от всего сердца рады каждой женщине, неважно, сколько тебе лет и на каком этапе жизни ты сейчас. Мы смеёмся вместе, молимся друг за друга и вместе растём в вере. Здесь может начаться новая дружба.",
        action: null,
        imageAlt: "Три женщины с улыбкой сидят вместе за столом",
      },
      kleingruppen: {
        when: "По договорённости",
        title: "Малые группы",
        verse: null,
        text: "Христианская жизнь не ограничивается воскресеньем. Поэтому, как первые христиане, мы встречаемся в малых группах, в церкви или дома. Мы говорим о вере и нашей повседневной жизни и поддерживаем друг друга как братья и сёстры. Групп много, наверняка есть и та, которая подойдёт тебе.",
        action: null,
        imageAlt: "Женщина говорит с группой за празднично накрытым столом со свечами",
      },
    },
  },

  visit: {
    heading: "Мы рады тебе",
    text: "Нам хочется, чтобы ты с первой минуты чувствовал себя желанным гостем. Поэтому дай нам знать перед визитом, и тебя встретят и ответят на все твои вопросы.",
    address: "Harpener Heide 9, 44805 Бохум",
    time: "По воскресеньям 11:00",
    carLabel: "На машине",
    carText: "По автобанам A40 и A43. Собственная парковка и места вдоль улицы Harpener Heide.",
    transitLabel: "На автобусе и поезде",
    transitText: "Около 10 минут пешком от остановки городской электрички Weserstraße.",
    ctaRoute: "Построить маршрут",
  },

  faq: {
    heading: "Частые вопросы",
    items: [
      {
        q: "Нужно ли записываться заранее?",
        a: "Нет, просто приходи такой, какой ты есть. Наша команда встречающих поприветствует тебя у входа, всё покажет и с радостью ответит на твои вопросы. Мы рады тебе!",
      },
      {
        q: "Есть ли дресс-код?",
        a: "Нет, приходи в том, в чём тебе удобно. У нас бывают все, от джинсов до воскресного костюма.",
      },
      {
        q: "Я не говорю по-немецки. Могу ли я всё равно прийти?",
        a: "Конечно! Проповедь и ведение переводятся в реальном времени, так что ты всё поймёшь на русском.",
      },
    ],
  },

  map: {
    address: "Harpener Heide 9 · 44805 Бохум",
    open: "Маршрут в Google Maps",
    label: "Карта: Harpener Heide 9, 44805 Бохум. Открывает маршрут в Google Maps",
    credit: "© участники OpenStreetMap",
  },

  give: {
    fabLabel: "Пожертвовать: помоги сделать это возможным",
    heading: "Помоги сделать это возможным",
    text: "Всё, что ты здесь видишь, возможно, потому что люди жертвуют от всего сердца. Спасибо всем, кто поддерживает нашу церковь!",
    qrLabel: "GiroCode для сканирования в банковском приложении",
    ibanLabel: "IBAN",
    recipientLabel: "Получатель",
    copy: "Скопировать IBAN",
    copied: "Скопировано",
    note: "По желанию мы выдадим тебе справку о пожертвовании.",
    close: "Закрыть",
  },

  footer: {
    discoverHeading: "Обзор",
    joinHeading: "Участвовать",
    legalHeading: "Правовая информация",
    instagram: "Instagram",
    imprint: "Выходные данные",
    privacy: "Защита данных",
    copyright: "© 2026 Christengemeinde Gottes Wort Bochum",
    bfp: "Член BFP",
  },

  belief: {
    heading: "Во что мы верим",
    lead: "Библия является основанием нашей веры. Поэтому мы придерживаемся этих десяти принципов.",
    parts: [
      {
        label: "Часть I",
        heading: "Бог и Его Слово",
        imageAlt: "Раскрытая Библия с красной закладкой",
        items: [
          {
            num: "01",
            title: "Библия",
            short: "Библия есть Слово Божье и наше мерило.",
            text: "Мы верим в богодухновенность Библии. 66 книг Священного Писания являются непогрешимым Словом Божьим и абсолютным, высшим источником и авторитетом во всех вопросах веры и жизни.",
            refs: "2 Тимофею 3:16 · 2 Петра 1:21",
          },
          {
            num: "02",
            title: "Триединый Бог",
            short: "Один Бог в трёх Лицах.",
            text: "Мы верим в единого вечного, всемогущего и совершенного Бога, существующего в трёх Лицах: Отец, Сын и Святой Дух. Он Творец видимого и невидимого мира.",
            refs: "Бытие 1:1 · Матфея 28:19 · Колоссянам 1:16",
          },
          {
            num: "03",
            title: "Иисус Христос",
            short: "Полностью Бог и полностью Человек.",
            text: "Мы верим в Иисуса Христа, Сына Божьего. Он был зачат от Святого Духа и рождён от Девы Марии. Он истинный Бог и истинный Человек и единственный, Кто никогда не согрешил.",
            refs: "Луки 1:35 · Иоанна 1:14 · Евреям 4:15",
          },
        ],
      },
      {
        label: "Часть II",
        heading: "Человек и спасение",
        imageAlt: "Деревянный крест на фоне тёмного облачного неба",
        items: [
          {
            num: "04",
            title: "Человек и грехопадение",
            short: "Создан свободным и нуждается в спасении.",
            text: "Мы верим, что Бог создал человека со свободной волей. Грехопадение было добровольным решением человека. Из-за него изменилась его природа: он умер для Бога и стал жив для греха.",
            refs: "Бытие 3 · Римлянам 5:12",
          },
          {
            num: "05",
            title: "Искупительная жертва Иисуса",
            short: "Через Иисуса мы спасены навеки.",
            text: "Мы верим, что Иисус Христос Своей заместительной смертью на кресте избавляет людей от Божьего суда. Кто лично верит в Иисуса как Господа и Спасителя, освобождается от греха и спасён навеки.",
            refs: "Иоанна 3:16 · Римлянам 3:23–24 · Римлянам 10:9",
          },
          {
            num: "06",
            title: "Крещение и Вечеря Господня",
            short: "Знаки следования и воспоминания.",
            text: "Мы верим в два таинства церкви: водное крещение и Вечерю Господню. Крещение через полное погружение является знаком следования за Христом и основано на личном решении, поэтому мы не крестим младенцев. На Вечере Господней мы вместе празднуем и возвещаем смерть и воскресение Иисуса Христа.",
            refs: "Римлянам 6:4 · 1 Коринфянам 11:26",
          },
        ],
      },
      {
        label: "Часть III",
        heading: "Церковь и надежда",
        imageAlt: "Группа прославления на сцене перед светящимся крестом, перед ней стоит община",
        items: [
          {
            num: "07",
            title: "Церковь",
            short: "Община, которая переживает Божью силу.",
            text: "Мы верим, что церковь является призванным Богом сообществом последователей Христа, Телом Христовым. Она служит взаимному созиданию и взаимному служению. Через крещение Святым Духом верующие получают полномочия служить с силой и властью. И сегодня по воле Божьей происходят исцеления и чудеса.",
            refs: "Деяния 1:8 · 1 Коринфянам 12:27",
          },
          {
            num: "08",
            title: "Великое поручение",
            short: "Мы передаём дальше то, что получили.",
            text: "Мы верим в великое поручение церкви. С духовными дарами, которые Бог даёт каждому, и с плодом Духа мы являемся свидетелями Благой вести и делаем людей учениками.",
            refs: "Матфея 28:18–20 · Галатам 5:22",
          },
          {
            num: "09",
            title: "Освящение",
            short: "Жизнь, которая прославляет Бога.",
            text: "Мы верим, что освящение является необходимой частью жизни в вере. Оно происходит через обличение Святого Духа, познание Священного Писания и очищение кровью Иисуса. Каждый несёт за это ответственность.",
            refs: "1 Фессалоникийцам 4:3 · Евреям 12:14 · 1 Иоанна 1:7",
          },
          {
            num: "10",
            title: "Второе пришествие Христа",
            short: "Иисус придёт снова.",
            text: "Мы верим, что Иисус Христос, наш Господь, восхитит Свою церковь и придёт снова в силе и славе: спасённым для вечной жизни, а неверующим для вечного суда.",
            refs: "Деяния 1:11 · 1 Фессалоникийцам 4:16–17",
          },
        ],
      },
    ],
    closingHeading: "Есть вопросы о нашей вере?",
    closingText: "Напиши нам, мы найдём время для твоих вопросов.",
    whatsapp: "WhatsApp",
    email: "E-Mail",
  },
};

export const translations = { de, ru } satisfies Record<Lang, typeof de>;

export type Dict = typeof de;
