import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="kontakt">
      <div className="wrap contact-grid">
        <Reveal>
          <span className="eyebrow">Kontakt &amp; Anfahrt</span>
          <h2 style={{ fontSize: "clamp(1.9rem,4.4vw,2.7rem)" }}>
            Wir freuen
            <br />
            uns auf dich.
          </h2>
          <div className="contact-list">
            <div>
              <span className="mono">Adresse</span>
              <p>
                Harpener Heide 9
                <br />
                44805 Bochum
              </p>
            </div>
            <div>
              <span className="mono">Gottesdienst</span>
              <p>Sonntags, 11:00 Uhr</p>
            </div>
            <div>
              <span className="mono">Nachricht schreiben</span>
              <a href="mailto:info@christusgemeinde-bo-nord.de">
                info@christusgemeinde-bo-nord.de
              </a>
            </div>
          </div>
        </Reveal>
        <Reveal className="map-box" delay={0.1}>
          <div>
            <div className="pin"></div>
            <p className="mono">Harpener Heide 9 · 44805 Bochum</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
