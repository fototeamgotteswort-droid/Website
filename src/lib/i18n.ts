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
    name: "Gottes Wort",
    tagline: "Christengemeinde Bochum",
  },

  nav: {
    label: "Hauptnavigation",
    who: "Wer wir sind",
    sunday: "Sonntag",
    events: "Termine",
    belief: "Was wir glauben",
    give: "Geben",
    visit: "Besuch planen",
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
    ctaOnline: "Online mitfeiern",
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
        title: "Teenie Treff (12–16 Jahre)",
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
    ctaPlan: "Besuch planen",
    ctaRoute: "Route planen",
    onlineStrong: "Lieber erst online reinschauen?",
    onlineText: "Sonntags ab 11:00 live auf YouTube.",
    onlineLink: "Zum Livestream",
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
    contactHeading: "Hast du noch Fragen oder ist etwas unklar geblieben?",
    contactText: "Schreib uns jederzeit, wir melden uns so bald wie möglich bei dir.",
    whatsapp: "WhatsApp",
    phone: "[Telefonnummer]",
  },

  // vorausgefuellte WhatsApp-Nachrichten aus Abschnitt 3 und 6
  whatsappText: {
    visit: "Hallo, ich möchte am Sonntag vorbeikommen",
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
    copyright: "© 2026 Christengemeinde Gottes Wort Bochum · Sonntags 11:00",
    bfp: "Teil des BFP",
  },

  belief: {
    heading: "Was wir glauben",
    lead: "Die Bibel ist das Fundament unseres Glaubens. Deshalb halten wir an diesen zehn Grundsätzen fest.",
    parts: [
      {
        label: "Teil I",
        heading: "Gott und sein Wort",
        photo: "Foto: aufgeschlagene Bibel",
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
        photo: "Foto: Taufe",
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
        photo: "Foto: Lobpreis im Gottesdienst",
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

// TODO(ru): Die russischen Inhalte folgen mit der RU-Version. Bis dahin zeigt
// RU die deutschen Texte; nur Bedienelemente sind schon uebersetzt. Spaeter
// hier die Inhalte eintragen, die Struktur muss der deutschen entsprechen.
const ru: typeof de = {
  ...de,
  htmlLang: "ru",
  skipLink: "Перейти к содержанию",
  menu: {
    open: "Открыть меню",
    close: "Закрыть меню",
  },
  lang: {
    label: "Выбрать язык",
    de: "Немецкий",
    ru: "Русский",
  },
};

export const translations = { de, ru } satisfies Record<Lang, typeof de>;

export type Dict = typeof de;
