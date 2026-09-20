export const LANGS = ["de", "ru"] as const;
export type Lang = (typeof LANGS)[number];

export const DEFAULT_LANG: Lang = "de";

export function isLang(value: unknown): value is Lang {
  return typeof value === "string" && (LANGS as readonly string[]).includes(value);
}

const de = {
  htmlLang: "de",
  documentTitle: "Christengemeinde Gottes Wort Bochum",
  skipLink: "Zum Inhalt springen",

  brand: {
    name: "Christengemeinde Gottes Wort",
    tagline: "Bochum · Deutsch & Русский",
  },

  nav: {
    about: "Über uns",
    andacht: "Andacht",
    service: "Gottesdienst",
    kids: "Kinder & Jugend",
    programs: "Programme",
    giving: "Geben",
    contact: "Kontakt",
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
    kicker: "Christengemeinde Gottes Wort",
    headline: ["Gemeinsam Glauben", "Gemeinsam Wachsen"],
    ctaOnsite: "Persönlich teilnehmen",
    ctaOnline: "Online teilnehmen",
    address: "Harpener Heide 9 · 44805 Bochum",
    strip: [
      { num: "11:00", lbl: "Sonntags · DE & RU" },
      { num: "3–12", lbl: "Kinderarche" },
      { num: "A40/A43", lbl: "Eigener Parkplatz" },
    ],
  },

  about: {
    eyebrow: "Über uns",
    heading: "Wer wir sind.",
    lead: "Wir sind eine evangelisch-pfingstliche Freikirche auf biblischer Grundlage — deutsch-russischsprachig, mitten in Bochum. ",
    leadStrong:
      "Wir feiern gemeinsam den Glauben, leben ihn im Alltag und pflegen echte, freundschaftliche Beziehungen.",
    body: "Als eingetragener Verein gehören wir zur Gemeinschaft Freier Christusgemeinden und zum Bund Freikirchlicher Pfingstgemeinden (KdöR).",
    // hinweis in der jeweils anderen sprache — damit sich beide gruppen abgeholt fühlen
    otherNote: {
      lang: "ru",
      label: "По-русски",
      text: "Мы — немецко-русскоязычная церковь в Бохуме. Богослужение проходит каждое воскресенье в 11:00, с переводом на русский язык. Регистрация не нужна — просто приходите. Harpener Heide 9, 44805 Bochum.",
    },
    creedSummary: "Unser Glaubensbekenntnis lesen",
    creed: [
      "Wir glauben an die göttliche Inspiration der Bibel als unfehlbares Wort Gottes und höchste Autorität in Fragen des Glaubens und Lebens.",
      "Wir glauben an den einen ewigen Gott in drei Personen — Vater, Sohn und Heiliger Geist — als Schöpfer aller sichtbaren und unsichtbaren Welten.",
      "Wir glauben, dass Jesus Christus, Gottes Sohn, wahrer Gott und wahrer Mensch ist und als Einziger ohne Sünde lebte.",
      "Wir glauben, dass der Mensch mit freiem Willen geschaffen wurde und allein durch den Glauben an Jesus Christus als Herrn und Retter von der Sünde erlöst wird — durch sein stellvertretendes Sühneopfer am Kreuz.",
      "Wir glauben an die Notwendigkeit zweier Sakramente: die Wassertaufe als Zeichen des Heils durch vollständiges Untertauchen nach persönlicher Entscheidung, und das Abendmahl, das Tod und Auferstehung Jesu verkündet.",
      "Wir glauben, dass die Gemeinde als Leib Christi der Ort der Auferbauung und des gegenseitigen Dienstes ist, bevollmächtigt durch die Taufe des Heiligen Geistes.",
      "Wir glauben an den Missionsauftrag aus Matthäus 28 — Zeugen der Frohen Botschaft zu sein und Jünger zu machen, ausgestattet mit individuellen Geistesgaben.",
      "Wir glauben, dass Heiligung in der Verantwortung jedes Gläubigen liegt, getragen durch die Überführung des Heiligen Geistes und die Reinigung durch das Opfer Jesu.",
      "Wir glauben, dass Jesus Christus wiederkommen wird — den Erretteten zum ewigen Leben, den Ungläubigen zum ewigen Gericht.",
    ],
    beliefs: [
      {
        num: "01",
        title: "Zweisprachig von der Bühne",
        text: "Predigt und Lobpreis werden live ins Deutsche oder Russische übersetzt — niemand bleibt außen vor.",
      },
      {
        num: "02",
        title: "Raum für alle Generationen",
        text: "Von der Kinderarche bis zur Jugendarbeit hat jede Altersgruppe ihren eigenen Platz.",
      },
      {
        num: "03",
        title: "Getragen von Freiwilligen",
        text: "Unsere Gemeinde finanziert und gestaltet sich durch Menschen, die anpacken und geben.",
      },
    ],
  },

  andacht: {
    eyebrow: "Andacht",
    heading: "Gefeiert — und doch für uns ans Kreuz gegangen.",
    text: "An Palmsonntag zog Jesus auf einem Esel in Jerusalem ein — nicht mit Macht, sondern in Demut. Die Menge feierte ihn. Wenige Tage später ging er für uns ans Kreuz. Deshalb feiern wir ihn: nicht weil er herrschte, sondern weil er sich hingab.",
    imageAlt:
      "Illustration: Jesus reitet auf einem Esel nach Jerusalem, im Hintergrund ein Kreuz auf einem Hügel",
  },

  service: {
    eyebrow: "Gottesdienst",
    heading: ["Jeden Sonntag,", "gemeinsam."],
    lead: "Lobpreis, Gebet und eine Predigt, die im Alltag ankommt — bilingual, für jeden verständlich.",
    imageAlt:
      "Gottesdienst der Christengemeinde Gottes Wort mit Lobpreisband und Gemeinde",
    timeLabel: "Jeden Sonntag",
    time: "11:00",
    desc: [
      "Der Gottesdienst wird von der Bühne aus ins Deutsche und Russische übersetzt — bilingual, ca. 2 Stunden.",
      "Komm ruhig 15 Minuten früher, für einen Parkplatz, einen Kaffee und einen entspannten Start.",
    ],
    ctaOnline: "Online mitfeiern",
    ctaNote:
      "Der Link führt direkt zur laufenden Übertragung auf YouTube. Läuft gerade nichts, siehst du den nächsten Termin.",
    infoCar: {
      label: "Anfahrt · PKW",
      text: "Gut erreichbar über A40 & A43. Eigener Parkplatz sowie entlang der Harpener Heide.",
    },
    infoTransit: {
      label: "Anfahrt · ÖPNV",
      text: "Rund 10 Min. Fußweg von der S-Bahn-Haltestelle Weserstraße.",
    },
    faq: [
      {
        q: "Wo kann ich parken?",
        a: "Wir haben einen eigenen Parkplatz auf dem Gemeindegrundstück, die ganze Straße Harpener Heide steht zur Verfügung und umliegend findest du größere Parkplätze.",
      },
      {
        q: "Gibt es einen Dresscode?",
        a: "Nein — bei uns ist alles dabei, von lässiger Freizeitkleidung bis zur adretten Sonntagsgarderobe.",
      },
      {
        q: "Was passiert nach dem Gottesdienst?",
        a: "Wir laden dich herzlich ein, länger zu bleiben: In unserer Kantine gibt's Mittagessen (3 € Erw. / 2 € Kinder), danach Gespräche, Gruppentreffen und sportliche Aktivitäten wie Volleyball oder Tischtennis.",
      },
      {
        q: "Muss ich mich vorher anmelden?",
        a: "Nein, du kannst einfach kommen. Wir freuen uns auf dich!",
      },
    ],
  },

  kids: {
    eyebrow: "Kinder & Jugend",
    heading: ["Für jedes", "Alter ein Zuhause."],
    lead: "Altersgerecht, verlässlich, jede Woche — auf Deutsch & Russisch.",
    arche: {
      badge: "Kinderarche",
      age: "3–12 Jahre",
      title: "Kinderarche",
      text: "Die Kinder werden zu Beginn gesegnet und ziehen dann in eigene Räume, wo biblische Inhalte altersgerecht & spielerisch vermittelt werden. Für die ganz Kleinen gibt's ein Babyzimmer mit Blick auf die Bühne.",
      groups: ["Kita", "Vorschule", "1.–2. Kl.", "3.–4. Kl.", "5.–6. Kl."],
    },
    youth: {
      meta: "Jugendtreff · Samstags ab 18:00",
      title: "Jugend",
      text: "Wir schaffen Räume, in denen Jugendliche Gott ganz persönlich begegnen und erleben können — mit eigenen Treffen unter der Woche.",
      imageAlt:
        "Jugendgruppe der Christengemeinde Gottes Wort bei einem Treffen",
    },
  },

  programs: {
    eyebrow: "Unter der Woche",
    heading: "Programme.",
    lead: "Kleine Kreise, verschiedene Rhythmen — hier findest du deinen Platz.",
    cards: [
      {
        meta: "Gebet",
        title: "Gebetsabend",
        when: "Jeden Freitag · 19:00–21:00",
        text: "Als Gemeinde wollen wir Gott näherkommen und gemeinsam füreinander im Gebet einstehen.",
      },
      {
        meta: "Kleingruppen",
        title: "Bibelkreise",
        when: "Unterschiedliche Zeiten in der Woche",
        text: "Kleine Kreise an unterschiedlichen Orten teilen Interessen & Alltag — und entdecken gemeinsam mehr über Gott.",
      },
    ],
  },

  giving: {
    eyebrow: "Geben",
    heading: ["Möglichmacher", "werden."],
    text: "Unsere Gemeinde finanziert sich ausschließlich durch die Großzügigkeit von Menschen wie dir. Auf Wunsch stellen wir dir gerne eine Spendenbescheinigung aus.",
    cta: "Jetzt unterstützen",
    mailSubject: "Spendenbescheinigung",
    bankLabel: "Bankverbindung",
    recipientLabel: "Empfänger",
    recipient: "Gemeinschaft Freier Christusgemeinden e. V.",
  },

  contact: {
    eyebrow: "Kontakt & Anfahrt",
    heading: ["Wir freuen", "uns auf dich."],
    addressLabel: "Adresse",
    address: ["Harpener Heide 9", "44805 Bochum"],
    serviceLabel: "Gottesdienst",
    serviceText: "Sonntags, 11:00 Uhr",
    routeLabel: "Anfahrt",
    routeText:
      "Eigener Parkplatz · ca. 10 Min. Fußweg von der S-Bahn-Haltestelle Weserstraße.",
    mailLabel: "Nachricht schreiben",
  },

  map: {
    address: "Harpener Heide 9 · 44805 Bochum",
    hint: "Beim Laden der Karte werden Daten an OpenStreetMap übertragen.",
    load: "Karte laden",
    route: "Route planen",
    title: "Karte: Harpener Heide 9, 44805 Bochum",
  },

  copy: {
    action: "Kopieren",
    done: "Kopiert",
  },

  footer: {
    addressHeading: "Christengemeinde Gottes Wort",
    address: ["Harpener Heide 9", "44805 Bochum"],
    discoverHeading: "Entdecken",
    livestream: "Livestream",
    joinHeading: "Mitmachen",
    legalHeading: "Rechtliches",
    imprint: "Impressum",
    privacy: "Datenschutz",
    copyright: "© Christengemeinde Gottes Wort Bochum",
    meta: "Sonntags 11:00 Uhr · Harpener Heide 9, Bochum",
  },
};

const ru: typeof de = {
  htmlLang: "ru",
  documentTitle: "Церковь «Слово Божие» Бохум",
  skipLink: "Перейти к содержанию",

  brand: {
    name: "Церковь «Слово Божие»",
    tagline: "Бохум · Deutsch & Русский",
  },

  nav: {
    about: "О нас",
    andacht: "Размышление",
    service: "Богослужение",
    kids: "Дети и молодёжь",
    programs: "Программы",
    giving: "Пожертвования",
    contact: "Контакты",
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
    kicker: "Церковь «Слово Божие»",
    headline: ["Вместе верить", "Вместе расти"],
    ctaOnsite: "Прийти лично",
    ctaOnline: "Участвовать онлайн",
    address: "Harpener Heide 9 · 44805 Бохум",
    strip: [
      { num: "11:00", lbl: "По воскресеньям · DE и RU" },
      { num: "3–12", lbl: "Детский ковчег" },
      { num: "A40/A43", lbl: "Своя парковка" },
    ],
  },

  about: {
    eyebrow: "О нас",
    heading: "Кто мы такие.",
    lead: "Мы — евангельская пятидесятническая свободная церковь на библейском основании: немецко-русскоязычная, в самом центре Бохума. ",
    leadStrong:
      "Мы вместе празднуем веру, живём ею в повседневности и храним настоящие, дружеские отношения.",
    body: "Как зарегистрированное объединение мы принадлежим к Содружеству свободных церквей Христа (Gemeinschaft Freier Christusgemeinden) и к Союзу свободных пятидесятнических церквей (BFP, KdöR).",
    otherNote: {
      lang: "de",
      label: "Auf Deutsch",
      text: "Wir sind eine deutsch-russischsprachige Gemeinde in Bochum. Der Gottesdienst ist jeden Sonntag um 11:00 Uhr, mit Übersetzung ins Deutsche. Eine Anmeldung ist nicht nötig — komm einfach vorbei. Harpener Heide 9, 44805 Bochum.",
    },
    creedSummary: "Прочитать наше исповедание веры",
    creed: [
      "Мы верим в божественное вдохновение Библии как непогрешимого Слова Божьего и высшего авторитета в вопросах веры и жизни.",
      "Мы верим в единого вечного Бога в трёх лицах — Отца, Сына и Святого Духа — как Творца всех видимых и невидимых миров.",
      "Мы верим, что Иисус Христос, Сын Божий, есть истинный Бог и истинный человек и что Он единственный жил без греха.",
      "Мы верим, что человек создан со свободной волей и получает спасение от греха только через веру в Иисуса Христа как Господа и Спасителя — через Его заместительную искупительную жертву на кресте.",
      "Мы верим в необходимость двух таинств: водного крещения как знака спасения через полное погружение по личному решению, и Господней трапезы, которая возвещает смерть и воскресение Иисуса.",
      "Мы верим, что церковь как Тело Христа есть место созидания и взаимного служения, облечённое силой через крещение Святым Духом.",
      "Мы верим в миссионерское поручение из Евангелия от Матфея 28 — быть свидетелями Благой Вести и приобретать учеников, имея каждый свои духовные дары.",
      "Мы верим, что освящение — ответственность каждого верующего, совершаемая через обличение Святого Духа и очищение жертвой Иисуса.",
      "Мы верим, что Иисус Христос вернётся — спасённым к жизни вечной, неверующим к вечному суду.",
    ],
    beliefs: [
      {
        num: "01",
        title: "Двуязычно прямо со сцены",
        text: "Проповедь и прославление переводятся вживую на немецкий или русский — никто не остаётся в стороне.",
      },
      {
        num: "02",
        title: "Место для всех поколений",
        text: "От «Детского ковчега» до работы с молодёжью — у каждого возраста своё место.",
      },
      {
        num: "03",
        title: "На плечах добровольцев",
        text: "Наша церковь живёт и развивается благодаря людям, которые вкладываются и жертвуют.",
      },
    ],
  },

  andacht: {
    eyebrow: "Размышление",
    heading: "Его встречали ликованием — и всё же Он пошёл за нас на крест.",
    text: "В Вербное воскресенье Иисус въехал в Иерусалим на осле — не в силе, а в смирении. Толпа встречала Его ликованием. Через несколько дней Он пошёл за нас на крест. Поэтому мы чтим Его: не потому, что Он господствовал, а потому, что Он отдал Себя.",
    imageAlt:
      "Иллюстрация: Иисус въезжает в Иерусалим на осле, на заднем плане крест на холме",
  },

  service: {
    eyebrow: "Богослужение",
    heading: ["Каждое воскресенье,", "вместе."],
    lead: "Прославление, молитва и проповедь, которая находит отклик в повседневной жизни — на двух языках, понятно каждому.",
    imageAlt:
      "Богослужение церкви «Слово Божие» с группой прославления и общиной",
    timeLabel: "Каждое воскресенье",
    time: "11:00",
    desc: [
      "Богослужение переводится со сцены на немецкий и русский — на двух языках, около 2 часов.",
      "Приходи спокойно на 15 минут раньше — найдётся место на парковке, будет кофе и спокойное начало.",
    ],
    ctaOnline: "Смотреть онлайн",
    ctaNote:
      "Ссылка ведёт прямо к текущей трансляции на YouTube. Если трансляции нет, ты увидишь дату следующей.",
    infoCar: {
      label: "Как добраться · авто",
      text: "Удобный подъезд по A40 и A43. Своя парковка, а также места вдоль улицы Harpener Heide.",
    },
    infoTransit: {
      label: "Как добраться · транспорт",
      text: "Около 10 минут пешком от остановки городской электрички Weserstraße.",
    },
    faq: [
      {
        q: "Где можно припарковаться?",
        a: "У нас есть своя парковка на территории церкви, в распоряжении вся улица Harpener Heide, а рядом есть парковки побольше.",
      },
      {
        q: "Есть ли дресс-код?",
        a: "Нет — у нас есть всё: от повседневной одежды до нарядного воскресного костюма.",
      },
      {
        q: "Что происходит после богослужения?",
        a: "Мы от души приглашаем тебя остаться подольше: в нашей столовой есть обед (3 € взрослые / 2 € дети), затем общение, встречи групп и спорт — волейбол или настольный теннис.",
      },
      {
        q: "Нужно ли записываться заранее?",
        a: "Нет, просто приходи. Мы будем рады тебе!",
      },
    ],
  },

  kids: {
    eyebrow: "Дети и молодёжь",
    heading: ["Дом для", "любого возраста."],
    lead: "По возрасту, надёжно, каждую неделю — на немецком и русском.",
    arche: {
      badge: "Детский ковчег",
      age: "3–12 лет",
      title: "Детский ковчег",
      text: "В начале детей благословляют, а затем они уходят в свои комнаты, где библейские истины передаются по возрасту и через игру. Для самых маленьких есть детская комната с видом на сцену.",
      groups: [
        "Садик",
        "Подготовка к школе",
        "1–2 кл.",
        "3–4 кл.",
        "5–6 кл.",
      ],
    },
    youth: {
      meta: "Молодёжные встречи · по субботам с 18:00",
      title: "Молодёжь",
      text: "Мы создаём пространство, где подростки могут лично встретить Бога и пережить Его присутствие — со своими встречами в течение недели.",
      imageAlt: "Молодёжная группа церкви «Слово Божие» на встрече",
    },
  },

  programs: {
    eyebrow: "В течение недели",
    heading: "Программы.",
    lead: "Небольшие группы, разные ритмы — здесь ты найдёшь своё место.",
    cards: [
      {
        meta: "Молитва",
        title: "Молитвенный вечер",
        when: "Каждую пятницу · 19:00–21:00",
        text: "Как церковь мы хотим приближаться к Богу и вместе молиться друг за друга.",
      },
      {
        meta: "Малые группы",
        title: "Библейские кружки",
        when: "Разное время в течение недели",
        text: "Небольшие группы в разных местах делятся интересами и повседневной жизнью — и вместе узнают больше о Боге.",
      },
    ],
  },

  giving: {
    eyebrow: "Пожертвования",
    heading: ["Стань тем, кто", "делает это возможным."],
    text: "Наша церковь существует исключительно благодаря щедрости людей вроде тебя. По желанию мы охотно выдадим справку о пожертвовании.",
    cta: "Поддержать сейчас",
    mailSubject: "Справка о пожертвовании",
    bankLabel: "Банковские данные",
    recipientLabel: "Получатель",
    recipient: "Gemeinschaft Freier Christusgemeinden e. V.",
  },

  contact: {
    eyebrow: "Контакты и как добраться",
    heading: ["Мы будем", "рады тебе."],
    addressLabel: "Адрес",
    address: ["Harpener Heide 9", "44805 Бохум"],
    serviceLabel: "Богослужение",
    serviceText: "По воскресеньям, 11:00",
    routeLabel: "Как добраться",
    routeText:
      "Своя парковка · около 10 минут пешком от остановки городской электрички Weserstraße.",
    mailLabel: "Написать нам",
  },

  map: {
    address: "Harpener Heide 9 · 44805 Бохум",
    hint: "При загрузке карты данные передаются в OpenStreetMap.",
    load: "Загрузить карту",
    route: "Построить маршрут",
    title: "Карта: Harpener Heide 9, 44805 Бохум",
  },

  copy: {
    action: "Копировать",
    done: "Скопировано",
  },

  footer: {
    addressHeading: "Церковь «Слово Божие»",
    address: ["Harpener Heide 9", "44805 Бохум"],
    discoverHeading: "Обзор",
    livestream: "Трансляция",
    joinHeading: "Участвовать",
    legalHeading: "Правовая информация",
    imprint: "Выходные данные",
    privacy: "Политика конфиденциальности",
    copyright: "© Церковь «Слово Божие», Бохум",
    meta: "По воскресеньям 11:00 · Harpener Heide 9, Бохум",
  },
};

export const translations = { de, ru } satisfies Record<Lang, typeof de>;

export type Dict = typeof de;
