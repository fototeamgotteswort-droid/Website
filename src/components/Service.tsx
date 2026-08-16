import Image from "next/image";
import Reveal from "./Reveal";

const FAQ = [
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
    a: "Wir laden dich herzlich ein, länger zu bleiben: In unserer Kantine gibt's Mittagessen (3 € Erw. / 2 € Kinder), danach Gespräche, Gruppentreffen und sportliche Aktivitäten wie Volleyball oder Tischtennis.",
  },
  {
    q: "Muss ich mich vorher anmelden?",
    a: "Nein, du kannst einfach kommen. Wir freuen uns auf dich!",
  },
];

export default function Service() {
  return (
    <section className="service" id="gottesdienst">
      <div className="wrap">
        <Reveal className="section-head">
          <div>
            <span className="eyebrow on-dark">Gottesdienst</span>
            <h2>
              Jeden Sonntag,
              <br />
              gemeinsam.
            </h2>
          </div>
          <p>
            Lobpreis, Gebet und eine Predigt, die im Alltag ankommt — bilingual,
            für jeden verständlich.
          </p>
        </Reveal>
        <Reveal className="service-grid">
          <div className="service-photo">
            <Image
              src="/images/img-2938.jpg"
              alt="Gottesdienst der Christusgemeinde Gottes Wort mit Lobpreisband und Gemeinde"
              width={1000}
              height={1250}
              sizes="(max-width: 900px) 100vw, 45vw"
              loading="lazy"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div>
            <div className="service-time">
              <span>Jeden Sonntag</span>11:00
            </div>
            <div className="service-desc">
              <p>
                Der Gottesdienst wird von der Bühne aus ins Deutsche und
                Russische übersetzt — bilingual, ca. 2 Stunden.
              </p>
              <p>
                Komm ruhig 15 Minuten früher, für einen Parkplatz, einen
                Kaffee und einen entspannten Start.
              </p>
            </div>
            <div className="info-row">
              <div className="info-cell">
                <span className="mono">Anfahrt · PKW</span>
                <p>
                  Gut erreichbar über A40 &amp; A43. Eigener Parkplatz sowie
                  entlang der Harpener Heide.
                </p>
              </div>
              <div className="info-cell">
                <span className="mono">Anfahrt · ÖPNV</span>
                <p>
                  Rund 10 Min. Fußweg von der S-Bahn-Haltestelle Weserstraße.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="faq">
          {FAQ.map((item) => (
            <details className="faq-item" key={item.q}>
              <summary>{item.q}</summary>
              <div className="faq-a">{item.a}</div>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
