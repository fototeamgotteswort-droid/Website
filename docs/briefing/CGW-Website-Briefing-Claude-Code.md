# Website-Briefing für Claude Code – Christengemeinde Gottes Wort Bochum

Stand: 03.10.2026 · Erstellt im Mediateam zusammen mit Claude (Design-Canvas „Landing Page CGW Bochum")

---

## Prompt zum Einfügen in Claude Code

> Lies dieses Briefing vollständig. Unsere Website liegt in diesem Repo und wird auf Vercel deployt (Preview: https://cgw-bochum-preview.vercel.app/). Bitte:
> 1. Analysiere zuerst die bestehende Projektstruktur (Framework, Komponenten, Styling, i18n DE/RU) und nenne mir kurz deinen Plan, bevor du Dateien änderst.
> 2. Baue die Startseite nach Abschnitt 3 um und lege die Seite `/was-wir-glauben` nach Abschnitt 4 an. Bestehende Komponenten wiederverwenden, wo möglich. Die Seiten „Neu hier" und „Gemeindeleben" kommen später; bis dahin gelten die Übergangs-Links aus Abschnitt 6.
> 3. Übernimm alle Texte **wörtlich**. Texte in [eckigen Klammern] sind Platzhalter: sichtbar als Platzhalter lassen und in einer Liste am Ende ausgeben.
> 4. Halte dich an die globalen Regeln (Abschnitt 1), vor allem Mobile-First und Coastal-Farben.
> 5. Bau die Interaktionen aus Abschnitt 5 und die Links aus Abschnitt 6.
> 6. Arbeite auf einem eigenen Branch, erstelle einen Preview-Deploy und schick mir den Link. Nicht auf Production deployen, bevor ich freigebe.

---

## 0. Kontext und Ziel

- **Wer:** Christengemeinde Gottes Wort Bochum, deutsch-russische Freikirche, Teil des BFP (Bund Freikirchlicher Pfingstgemeinden). Harpener Heide 9, 44805 Bochum.
- **Ziel der Website:** Neue Menschen in Bochum zu einem ersten Sonntagsbesuch einladen. Wichtigste Kennzahl: Erstbesucher, die wiederkommen.
- **Zielgruppen:** (1) 20–45 Jahre, Singles und Studierende, die Gemeinschaft suchen. (2) Eltern, die eine Wertegemeinschaft für ihre Kinder suchen. (3) Christen, die prüfen, ob wir eine seriöse, bibeltreue Gemeinde sind.
- **Werte in der Kommunikation:** echt, gastfreundlich, einladend.
- **Kernbotschaft:** Bei uns endet der Sonntag nicht mit dem Gottesdienst. Gäste sind keine Zuschauer, sondern eingeladen.

---

## 1. Globale Regeln

### Sprache und Stil
- Anrede durchgehend **„du"**.
- Immer **Wir-Perspektive** („Wir glauben …", „Wir treffen uns …").
- **Keine Gedankenstriche (–) im Fließtext.** Ausnahmen: Zeitspannen/Bereiche (11–13 Uhr, 3–12 Jahre, Matthäus 28,18–20) und genau ein bewusst gesetzter Strich in der Sonntags-Unterzeile (siehe 3.3).
- **Überschriften ohne Punkt am Ende.** Fragen behalten ihr Fragezeichen.
- Wenig Text auf der Startseite: pro Section eine Überschrift, maximal ein bis zwei kurze Sätze.
- Begriff **„Kinderkirche"** (nicht „Kinderarche").

### Farben (Coastal-Palette)
| Token | Hex | Einsatz |
|---|---|---|
| navy-tide | `#1B3B4D` | Haupttext, Navigation, Footer, Primär-Buttons |
| storm-blue | `#2F4858` | Fließtext, Video-Fallback |
| deep-sea | `#1F577A` | Links, Akzenttexte |
| muted-teal | `#367588` | Labels, Nummern, Akzente |
| shell | `#F6F1E9` | Seitenhintergrund (hell) |
| sea-mist | `#DFF3F5` | Hero-Hintergründe Unterseiten, Info-Kästen |
| sand | `#E8D8C3` | Trennlinien, Bildflächen |
| aqua-foam | `#66CDAA` | Button „Besuch planen" in der Navigation |
| powder-blue | `#B0E0E6` | Labels auf dunklem Grund |
| weitere Bildflächen | `#7EC8E3`, `#9FE2BF`, `#4BA3C7`, `#87A96B`, `#C2B280` | nur als Platzhalterflächen für Fotos |

Textkontrast mindestens 4.5:1. Fließtext `#2F4858` auf hellem Grund, sekundärer Text `#5A6B73`.

### Typografie
- **Playfair Display** (500/600, kursiv 500): alle Überschriften, große Nummern, Bibelzitate, „Kurz gesagt"-Sätze.
- **Montserrat** (400/500/600/700): Fließtext, Buttons, Navigation, Labels.
- H1 ca. `clamp(40px, 5vw, 72px)` (Startseite bis 92px), H2 `clamp(30px, 3.4vw, 48px)`, Fließtext 16–18px, Labels 13–14px in Versalien mit Laufweite.

### Layout und Komponenten
- Container max. 1200px, Seitenabstand 24px, Sections ca. 104–112px vertikales Padding (mobil 64–72px).
- Buttons: Pillenform (`border-radius: 999px`), mindestens 44–48px hoch. Primär: navy gefüllt; sekundär: navy Rahmen.
- Karten: weiß, `border-radius: 12–16px`, keine Rahmen-Akzente links, keine Verläufe.
- Icons: schlichte Linien-Icons (z. B. Lucide), keine Emojis.
- Bilder: Fotos echter Gemeindemomente. **Gäste werden nicht fotografiert oder gefilmt.** Kinder nur mit Einverständnis der Eltern.

### Mobile (viele Besucher kommen über das Handy)
- Navigation: Links ausblenden, Hamburger-Menü plus sichtbarer Button „Besuch planen".
- Spalten stapeln, Karussells horizontal wischbar (scroll-snap).
- Memory-Karten der Startseite mobil als wischbare Reihe (ca. 82 % Breite pro Karte).

### Barrierefreiheit
- Echte `<button>`, `<a>`, `<label>`; `aria-label` bei Icon-Buttons; Fokus sichtbar.
- FAQ als `<details>/<summary>` oder zugängliches Akkordeon.

---

## 2. Seitenstruktur und Routen

| Route | Seite |
|---|---|
| `/` | Startseite |
| `/was-wir-glauben` | Glaubensbekenntnis |
| `/impressum`, `/datenschutz` | von der alten Seite übernehmen; Datenschutz um Formular und PostHog ergänzen |
| `/neu-hier`, `/gemeindeleben` | **später**, noch nicht bauen |
| `/ru/...` | russische Version, später |

**Navigation (alle Seiten):** Logo „Gottes Wort / Christengemeinde Bochum" → `/` · Wer wir sind (→ `/#glaube`) · Sonntag (→ `/#sonntag`) · Termine (→ `/#termine`) · Was wir glauben (→ `/was-wir-glauben`) · Geben (öffnet den Spenden-Dialog, siehe 3.9) · DE/RU · Button **Besuch planen** → `/#besuch`

Der Menüpunkt „Gemeindeleben" kommt erst mit der Gemeindeleben-Seite dazu.

---

## 3. Startseite `/`

Reihenfolge der Sections: Hero → Wer wir sind → Ein Sonntag bei uns → Bochumer Geschichten → Termine → Wir freuen uns auf dich → Häufige Fragen (inkl. Kontakt-Kasten) → Footer. Dazu schwebt ein Spenden-Herz unten rechts.

### 3.1 Hero (dunkel, Video)
- Hintergrund: Video-Loop (CapCut, 20–30 s, ohne Ton, `autoplay muted loop playsinline`), dunkles Overlay `rgba(27,59,77,0.55)`, Fallback-Farbe `#2F4858`. Poster-Bild für Mobil/Datensparmodus.
- **H1:** Gemeinsam glauben / Gemeinsam wachsen *(zweizeilig, ohne Punkte)*
- **Buttons:** „Persönlich vorbeikommen →" (hell gefüllt, scrollt zu `#besuch`) · „Online mitfeiern" (Rahmen, Play-Icon, → YouTube-Livestream, neuer Tab)
- **Info-Leiste (3 Felder, mobil untereinander):**
  - Sonntags 11:00 · Deutsch & Russisch
  - Harpener Heide 9 · 44805 Bochum
  - Kinderkirche · für 3–12 Jahre

### 3.2 Wer wir sind `#glaube` (hell, Shell)
- **H2:** Wir leben echte Gemeinschaft, die trägt, herausfordert und Menschen in ihrer Beziehung zu Gott wachsen lässt
- **Text:** Wir sind eine deutsch-russische Freikirche für alle Generationen und ein Zuhause mitten in Bochum.
- **Drei Memory-/Flip-Karten** nebeneinander (mobil wischbar). Vorderseite: farbige Fläche, Linien-Icon, Wort, runder navy Plus-Button. Rückseite: navy Hintergrund, Wort als Label, × oben rechts, Satz in Playfair.
  - **Bibel** (Vorderseite `#DFF3F5`, Icon Buch): Wir glauben, dass die Bibel Gottes inspiriertes Wort ist. Sie ist unsere höchste Autorität für Glauben und Leben und das Fundament für alles, was wir tun.
  - **Jesus** (Vorderseite `#E8D8C3`, Icon Kreuz): Wir glauben, dass Jesus wahrer Gott und wahrer Mensch ist. Er ging für unsere Schuld ans Kreuz. Allein durch den Glauben an ihn finden wir Erlösung.
  - **Heiliger Geist** (Vorderseite `#9FE2BF`, Icon Flamme): Wir glauben, dass der Heilige Geist heute noch wirkt. Er rüstet uns zu, und durch die Taufe im Heiligen Geist sendet er uns mit Kraft und Vollmacht in den Dienst.
- **Fußzeile der Section** (Trennlinie oben): Link „Unser ganzes Glaubensbekenntnis lesen →" (→ `/was-wir-glauben`) · rechts dezent „Teil des BFP" (später mit BFP-Logo)

### 3.3 Ein Sonntag bei uns `#sonntag` (Sea Mist)
- **H2:** Bei uns endet der Sonntag nicht mit dem Gottesdienst
- **Text:** Es folgen ein gedeckter Tisch, gute Gespräche und viel gemeinsame Zeit – komm als Gast und fühl dich wie zu Hause. *(Gedankenstrich hier bewusst)*
- **Drei Spalten (Foto 4:3, Zeitangabe in Playfair, Titel, Text):**
  - **11–13 Uhr · Gottesdienst** (Foto: Lobpreis im Gottesdienst): Wir feiern mit Lobpreis, Gebet und einer Predigt, die mitten ins Leben spricht. Alles wird auf Deutsch und Russisch übersetzt, und auch für Kinder haben wir eine eigene Kinderkirche.
  - **13–14:30 Uhr · Mittagstisch** (Foto: gemeinsames Mittagessen): In unserer Kantine essen und lachen wir zusammen, denn am Tisch lernt man sich am besten kennen. Setz dich gern dazu, das erste Essen geht auf uns.
  - **Ab 14:30 Uhr · Gemeinschaft** (Foto: Volleyball & Gespräche): Beim Volleyball, Fußball oder bei einem Kaffee ist immer Platz für einen mehr. Viele von uns bleiben bis in den Abend und verbringen den Sonntag zusammen.

### 3.4 Bochumer Geschichten `#geschichten` (dunkel, Deep Sea `#1F577A`, optional ein-/ausblendbar)
- Links: Reel-Thumbnail (9:10), öffnet das Instagram-Reel, kein Autoplay.
- Rechts: Zitat in Playfair kursiv: „[Kernsatz aus einem echten Zeugnis: mit dem Problem einsteigen, freigegeben von der Person]"
- Darunter: [Vorname] aus Bochum
- Link: „Weitere Geschichten ansehen →" (→ Instagram-Highlight „Bochumer Geschichten")
- Kein Label über der Überschrift.

### 3.5 Termine `#termine` (Shell, horizontales Karussell)
- **H2:** Das steht bei uns als Nächstes an
- Pfeil-Buttons rechts (vorherige/nächste), Karten 330px breit, wischbar.
- **Kartenaufbau:** Bildfläche 16:10 · Termin (Versalien, klein, Teal) · Titel (Playfair) · Text · Link
- Karten (Reihenfolge):
  1. **18. OKTOBER · 11:00 · Gastprediger: Machine Gun Preacher**
     Der Machine Gun Preacher, Sam Childers, ist bei uns zu Gast und erzählt seine persönliche Geschichte: vom Rocker zum Pastor und Retter von Kindern im Südsudan.
     → „Jetzt anmelden →" (Eventbrite-Link [Eventbrite-URL])
  2. **FREITAG · 19:00 · Gebetsabend**
     Bibelzitat (Playfair kursiv, Teal): „Denn wo zwei oder drei versammelt sind in meinem Namen, da bin ich mitten unter ihnen." Matthäus 18,20
     Jeden Freitag kommen wir gemeinsam vor Gott, bringen ihm, was uns bewegt, danken ihm und beten für unsere Stadt und füreinander. Wir glauben: Wenn Christen gemeinsam beten, liegt darin eine gewaltige Kraft, die etwas bewegt.
     → „Mehr erfahren →" (Übergang: WhatsApp mit vorausgefüllter Nachricht „Frage zum Gebetsabend"; später `/gemeindeleben#gebet`)
  3. **SAMSTAG · 18:00 · Jugendtreff (16–24 Jahre)**
     Wir sind eine Generation, die für Jesus brennt, und glauben, dass Gott mit der Jugend Großes vorhat. Komm samstags dazu, feiere mit uns Gottesdienst, tausch dich aus und lass uns gemeinsam im Glauben wachsen.
     → „Mehr erfahren →" (Übergang: Instagram der Jugend; später `/gemeindeleben#jugend`)
  4. **JEDEN 2. SAMSTAG · 14:00 · Teenie Treff (12–16 Jahre)**
     Wir glauben, dass Glaube schon in jungen Herzen Wurzeln schlägt. Deshalb treffen wir uns alle zwei Wochen samstags, lernen zusammen von Jesus, spielen, lachen und verbringen Zeit miteinander. Wer neu dazukommt, findet bei uns schnell Freunde.
     → „Mehr erfahren →" (Übergang: WhatsApp „Frage zum Teenie Treff"; später `/gemeindeleben#teens`)
  5. **NACH ABSPRACHE · Kleingruppen**
     Christliches Leben spielt sich nicht nur am Sonntag ab. Deshalb treffen wir uns wie die ersten Christen in kleinen Gruppen, in der Gemeinde oder zu Hause. Wir sprechen über den Glauben und unseren Alltag und stärken uns gegenseitig als Brüder und Schwestern. Es gibt viele Gruppen, bestimmt auch eine, die zu dir passt.
     → „Finde deine Gruppe →" (Übergang: WhatsApp „Ich interessiere mich für eine Kleingruppe"; später `/gemeindeleben#kleingruppen`)
- **Hinweis:** Termine idealerweise aus einer Datenquelle (JSON/CMS) pflegen, vergangene Termine automatisch ausblenden. Nächste Highlights ergänzen: Evangelisationssonntage 25.10. und 29.11., Heiligabend 24.12., Weihnachtsmusical [Datum], Jugendcamp [Datum].

### 3.6 Wir freuen uns auf dich `#besuch` (weiß)
- **H2:** Wir freuen uns auf dich
- **Text:** Wir möchten, dass du dich vom ersten Moment an willkommen fühlst. Sag uns deshalb gern vor deinem Besuch Bescheid, dann ist jemand für dich da und beantwortet all deine Fragen.
- **Infos mit Icons:**
  - Harpener Heide 9, 44805 Bochum · Sonntags 11:00
  - **Mit dem Auto:** Über A40 & A43. Eigener Parkplatz und Plätze entlang der Harpener Heide.
  - **Mit Bus & Bahn:** Rund 10 Minuten zu Fuß von der S-Bahn-Haltestelle Weserstraße.
- **Buttons:** „Besuch planen →" (primär; Übergang: WhatsApp mit vorausgefüllter Nachricht „Hallo, ich möchte am Sonntag vorbeikommen", später `/neu-hier` mit Formular) · „Route planen" (sekundär, Google-Maps-Route zur Harpener Heide 9)
- **Kasten:** **Lieber erst online reinschauen?** Sonntags ab 11:00 live auf YouTube. Link „Zum Livestream"
- Rechts: Karte (OpenStreetMap-Embed), mobil darunter.

### 3.7 Häufige Fragen `#faq` (Shell)
- **H2:** Häufige Fragen *(Überschrift oben, Fragen darunter, max. 880px breit, Akkordeon mit Plus-Icon, das sich beim Öffnen zum × dreht; erste Frage offen)*
  - **Muss ich mich anmelden?** Nein, komm einfach vorbei, so wie du bist. Unser Welcome-Team begrüßt dich am Eingang, zeigt dir alles und beantwortet gern deine Fragen. Wir freuen uns auf dich!
  - **Gibt es einen Dresscode?** Nein, komm so, wie du dich wohlfühlst. Bei uns ist von Jeans bis Sonntagsgarderobe alles dabei.
  - **Ich spreche kein Russisch. Kann ich trotzdem kommen?** Kein Problem! Predigt und Moderation werden live übersetzt, so verstehst du alles auf Deutsch.
- **Kontakt-Kasten** (Sea Mist, unter den FAQs):
  - **H3:** Hast du noch Fragen oder ist etwas unklar geblieben?
  - Schreib uns jederzeit, wir melden uns so bald wie möglich bei dir.
  - Buttons: WhatsApp ([WhatsApp-Link der Gemeinde-Nummer]) · [Telefonnummer] (`tel:`)

### 3.8 Footer (Navy)
- Spalte 1: Gottes Wort · Christengemeinde Bochum · Harpener Heide 9 · 44805 Bochum
- **Entdecken:** Wer wir sind · Was wir glauben · Termine
- **Mitmachen:** Geben (öffnet Spenden-Dialog) · Instagram (https://www.instagram.com/gottes_wort.bochum/)
- **Rechtliches:** Impressum · Datenschutz
- Unterzeile: © 2026 Christengemeinde Gottes Wort Bochum · Sonntags 11:00 · rechts „Teil des BFP"

### 3.9 Spenden-Herz (schwebend, alle Seiten)
- Runder navy Button 64px unten rechts (`position: fixed`), Herz-Icon, `aria-label="Spenden – Möglichmacher werden"`.
- Klick öffnet Dialog (Overlay, unten rechts, max. 420px, schließbar mit × und Esc):
  - **H2:** Möglichmacher werden
  - Alles, was du hier siehst, ist möglich, weil Menschen von Herzen geben. Danke an alle, die unsere Gemeinde mittragen!
  - QR-Code (GiroCode/EPC-QR) · IBAN [IBAN] · Empfänger [Kontoinhaber]
  - Button: „IBAN kopieren" (Clipboard + kurze Bestätigung „Kopiert"). Der Link „Mehr zum Geben" kommt erst mit der Gemeindeleben-Seite.
  - Klein: Auf Wunsch stellen wir dir eine Spendenbescheinigung aus.

---

## 4. Was wir glauben `/was-wir-glauben`

### 4.1 Hero (Sea Mist)
- **H1:** Was wir glauben
- Die Bibel ist das Fundament unseres Glaubens. Deshalb halten wir an diesen zehn Grundsätzen fest.

### 4.2 Bekenntnis in drei Teilen
Jeder Teil: kleines Label „Teil I/II/III" (Playfair kursiv) · H2 · rechts ein Foto (16:7). Darunter die Punkte als Zeilen mit Trennlinien.
**Zeile (Desktop zweispaltig 5/7):** links große Nummer (Playfair, Teal) + Titel (H3) + „Kurz gesagt"-Satz (Playfair kursiv, Deep Sea); rechts vollständiger Text (17px) + Bibelstellen (13px, grau). **Mobil:** alles untereinander, ohne Boxen.

**Teil I · Gott und sein Wort** (weiß, Foto: aufgeschlagene Bibel)
- **01 Die Bibel** · *Die Bibel ist Gottes Wort und unser Maßstab.*
  Wir glauben an die göttliche Inspiration der Bibel. Die 66 Bücher der Heiligen Schrift sind das unfehlbare Wort Gottes und die absolute und höchste Quelle und Autorität in allen Fragen des Glaubens und des Lebens.
  2. Timotheus 3,16 · 2. Petrus 1,21
- **02 Der dreieinige Gott** · *Ein Gott in drei Personen.*
  Wir glauben an den einen ewigen, allmächtigen und vollkommenen Gott, der in drei Personen existiert: Vater, Sohn und Heiliger Geist. Er ist der Schöpfer der sichtbaren und unsichtbaren Welten.
  1. Mose 1,1 · Matthäus 28,19 · Kolosser 1,16
- **03 Jesus Christus** · *Ganz Gott und ganz Mensch.*
  Wir glauben an Jesus Christus, den Sohn Gottes. Er wurde vom Heiligen Geist empfangen und von der Jungfrau Maria geboren. Er ist wahrer Gott und wahrer Mensch und der Einzige, der nie eine Sünde begangen hat.
  Lukas 1,35 · Johannes 1,14 · Hebräer 4,15

**Teil II · Der Mensch und die Erlösung** (Shell, Foto: Taufe)
- **04 Der Mensch und der Sündenfall** · *Frei geschaffen und auf Erlösung angewiesen.*
  Wir glauben, dass Gott den Menschen mit einem freien Willen geschaffen hat. Der Sündenfall war eine freiwillige Entscheidung des Menschen. Dadurch veränderte sich seine Natur: Er starb für Gott und wurde der Sünde lebendig.
  1. Mose 3 · Römer 5,12
- **05 Das Sühneopfer Jesu** · *Durch Jesus sind wir für immer gerettet.*
  Wir glauben, dass Jesus Christus durch seinen stellvertretenden Tod am Kreuz die Menschen vor Gottes Gericht bewahrt. Wer persönlich an Jesus als Herrn und Retter glaubt, wird von der Sünde erlöst und auf ewig errettet.
  Johannes 3,16 · Römer 3,23–24 · Römer 10,9
- **06 Taufe und Abendmahl** · *Zeichen der Nachfolge und der Erinnerung.*
  Wir glauben an zwei Sakramente der Gemeinde: die Wassertaufe und das Abendmahl. Die Taufe durch vollständiges Untertauchen ist ein Zeichen der Nachfolge und beruht auf einer persönlichen Entscheidung, deshalb taufen wir keine Säuglinge. Im Abendmahl feiern wir gemeinsam und verkündigen den Tod und die Auferstehung Jesu Christi.
  Römer 6,4 · 1. Korinther 11,26

**Teil III · Gemeinde und Hoffnung** (weiß, Foto: Lobpreis im Gottesdienst)
- **07 Die Gemeinde** · *Gemeinschaft, die Gottes Kraft erlebt.*
  Wir glauben, dass die Gemeinde die von Gott herausgerufene Gemeinschaft der Nachfolger Christi ist, der Leib Christi. Sie dient der gegenseitigen Auferbauung und dem gegenseitigen Dienst. Durch die Taufe im Heiligen Geist werden Gläubige bevollmächtigt, mit Kraft und Autorität zu dienen. Auch heute geschehen nach Gottes Willen Heilungen und Wunder.
  Apostelgeschichte 1,8 · 1. Korinther 12,27
- **08 Der große Auftrag** · *Wir geben weiter, was wir empfangen haben.*
  Wir glauben an den großen Auftrag der Gemeinde. Mit den Geistesgaben, die Gott jedem Einzelnen schenkt, und mit der Frucht des Geistes sind wir Zeugen der Frohen Botschaft und machen Menschen zu Jüngern.
  Matthäus 28,18–20 · Galater 5,22
- **09 Die Heiligung** · *Ein Leben, das Gott ehrt.*
  Wir glauben, dass Heiligung ein notwendiger Teil des Glaubenslebens ist. Sie geschieht durch die Überführung des Heiligen Geistes, die Erkenntnis der Heiligen Schrift und die Reinigung durch das Blut Jesu. Jeder Einzelne trägt dafür Verantwortung.
  1. Thessalonicher 4,3 · Hebräer 12,14 · 1. Johannes 1,7
- **10 Die Wiederkunft Christi** · *Jesus kommt wieder.*
  Wir glauben, dass Jesus Christus, unser Herr, seine Gemeinde entrücken und in Kraft und Herrlichkeit wiederkommen wird: den Erretteten zum ewigen Leben und den Ungläubigen zum ewigen Gericht.
  Apostelgeschichte 1,11 · 1. Thessalonicher 4,16–17

### 4.3 Abschluss (Navy)
- **H2:** Fragen zu unserem Glauben?
- Schreib uns gern, wir nehmen uns Zeit für deine Fragen.
- Buttons: WhatsApp · E-Mail ([E-Mail-Adresse])

---

## 5. Interaktionen

| Element | Verhalten |
|---|---|
| Memory-Karten (Startseite) | Klick/Tap dreht Karte (Vorder-/Rückseite), `aria-pressed`. Hover: Karte hebt sich leicht (translateY −4px, stärkerer Schatten). Mobil: wischbare Reihe. |
| Termin-Karussell | Horizontal scrollbar mit scroll-snap, Pfeil-Buttons scrollen um eine Karte. |
| FAQ | Akkordeon, Plus-Icon rotiert 45° zum ×, erste Frage offen. |
| Spenden-Herz | Fester Button unten rechts auf allen Seiten, öffnet Dialog (Fokus-Falle, Esc schließt). |
| IBAN kopieren | Clipboard-API, Feedback „Kopiert". |
| Hero-Video | Autoplay stumm im Loop; bei `prefers-reduced-motion` nur Standbild. |

---

## 6. Link- und CTA-Übersicht

| Button / Link | Ziel |
|---|---|
| Besuch planen (Navigation) | `/#besuch` (Scroll) |
| Persönlich vorbeikommen (Hero) | `/#besuch` (Scroll) |
| Besuch planen (Section „Wir freuen uns auf dich") | Übergang: `https://wa.me/[Nummer]?text=Hallo, ich möchte am Sonntag vorbeikommen` · später `/neu-hier` |
| Online mitfeiern / Zum Livestream | [YouTube-Livestream-URL], neuer Tab |
| Unser ganzes Glaubensbekenntnis lesen | `/was-wir-glauben` |
| Weitere Geschichten ansehen | [Instagram-Highlight „Bochumer Geschichten"] |
| Machine Gun Preacher · Jetzt anmelden | [Eventbrite-URL] |
| Gebetsabend / Teenie · Mehr erfahren | Übergang: WhatsApp mit vorausgefüllter Nachricht · später Gemeindeleben |
| Jugend · Mehr erfahren | Übergang: [Instagram-Account der Jugend] · später Gemeindeleben |
| Kleingruppen · Finde deine Gruppe | Übergang: WhatsApp mit vorausgefüllter Nachricht · später Gemeindeleben |
| Route planen | Google Maps Directions: Harpener Heide 9, 44805 Bochum |
| WhatsApp-Buttons | `https://wa.me/[Nummer]?text=[vorausgefüllte Nachricht]` (zentrale Gemeinde-/Welcome-Nummer, nicht privat) |
| Telefon | `tel:[Nummer]` |
| E-Mail (Was wir glauben) | `mailto:[E-Mail-Adresse]` |
| Geben (Navigation/Footer) | öffnet Spenden-Dialog |
| Instagram | https://www.instagram.com/gottes_wort.bochum/ |

---

## 7. Platzhalter und offene Punkte (vor Go-live klären)

**Inhalte**
- Hero-Video (CapCut), alle Fotos (nur Personen mit Einwilligung, keine Gäste)
- Telefonnummer, WhatsApp-Nummer (zentral), E-Mail-Adresse
- IBAN, Kontoinhaber, QR-Code
- Eventbrite-Link Machine Gun Preacher, YouTube-Livestream-Link
- Zeugnis-Zitat und Vorname für „Bochumer Geschichten"
- BFP-Logo (offizielle Datei, Nutzungsfreigabe)

**Zu prüfen**
- Glaubensbekenntnis: Formulierungen, „Kurz gesagt"-Sätze und Bibelstellen vom Pastor gegenlesen lassen. Bei der Taufe klären, ob „nicht heilsnotwendig" oder „notwendiges Zeichen des Heils" gilt (die alte Seite war beim Auslesen widersprüchlich).
- Teenie Treff wirklich jeden 2. Samstag?
- Datenschutzerklärung um PostHog ergänzen; Cookie-/Consent-Lösung für PostHog.
- Newsletter (Brevo) ist bewusst vorerst entfernt.

---

## 8. Tracking (PostHog)

Ziel: Funnel von Aufmerksamkeit bis Erstbesuch messen. UTM-Parameter (z. B. aus der Instagram-Bio) bei Klick-Events mitschicken.

| Event | Auslöser |
|---|---|
| `cta_besuch_planen_click` | jeder „Besuch planen"- und „Persönlich vorbeikommen"-Button (Property: `location`) |
| `whatsapp_click` / `phone_click` / `email_click` | Kontakt-Buttons (Property: `location`, `bereich`) |
| `livestream_click` | Online mitfeiern / Zum Livestream |
| `event_click` | Termin-Karte (Property: `event`) |
| `eventbrite_click` | Jetzt anmelden |
| `belief_card_flip` | Memory-Karte gedreht (Property: `card`) |
| `give_open` / `iban_copy` | Spenden-Herz geöffnet / IBAN kopiert |
| `route_click` | Route planen |

---

## 9. Referenz

Das visuelle Design liegt im Claude-Design-Canvas „Landing Page CGW Bochum" (Desktop- und Handy-Ansicht pro Seite). Die Design-Dateien für Startseite und „Was wir glauben" liegen als Referenz bei (`cgw-design-dateien.zip`, HTML mit Inline-Styles). Sie zeigen Abstände, Farben und Komponenten. Bitte nicht 1:1 als Code übernehmen, sondern in die Komponenten des bestehenden Projekts übertragen.
