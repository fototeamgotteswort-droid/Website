import Image from "next/image";
import Reveal from "./Reveal";

export default function Kids() {
  return (
    <section className="kids" id="kinder-jugend">
      <div className="wrap">
        <Reveal className="section-head">
          <div>
            <span className="eyebrow">Kinder &amp; Jugend</span>
            <h2>
              Für jedes
              <br />
              Alter ein Zuhause.
            </h2>
          </div>
          <p>Altersgerecht, verlässlich, jede Woche — auf Deutsch &amp; Russisch.</p>
        </Reveal>

        <Reveal className="kids-grid">
          <div className="kid-card">
            <div className="kid-photo placeholder">
              <span className="flag">Foto folgt</span>
            </div>
            <div className="kid-body">
              <span className="mono">3–12 Jahre</span>
              <h3>Kinderarche</h3>
              <p>
                Die Kinder werden zu Beginn gesegnet und ziehen dann in eigene
                Räume, wo biblische Inhalte altersgerecht &amp; spielerisch
                vermittelt werden. Für die ganz Kleinen gibt&apos;s ein
                Babyzimmer mit Blick auf die Bühne.
              </p>
              <div className="agegroups">
                <span>Kita</span>
                <span>Vorschule</span>
                <span>1.–2. Kl.</span>
                <span>3.–4. Kl.</span>
                <span>5.–6. Kl.</span>
              </div>
            </div>
          </div>
          <div className="kid-card">
            <div className="kid-photo">
              <Image
                src="/images/jugend-konferenz.jpg"
                alt="Jugendgruppe der Christusgemeinde Gottes Wort bei einem Treffen"
                width={1000}
                height={800}
                loading="lazy"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div className="kid-body">
              <span className="mono">Jugendtreff · Samstags ab 18:00</span>
              <h3>Jugend</h3>
              <p>
                Wir schaffen Räume, in denen Jugendliche Gott ganz persönlich
                begegnen und erleben können — mit eigenen Treffen unter der
                Woche.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
