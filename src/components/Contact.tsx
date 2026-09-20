"use client";

import MapEmbed from "./MapEmbed";
import Reveal from "./Reveal";
import { useT } from "./LanguageProvider";

export default function Contact() {
  const t = useT();

  return (
    <section id="kontakt">
      <div className="wrap contact-grid">
        <Reveal>
          <span className="eyebrow">{t.contact.eyebrow}</span>
          <h2 style={{ fontSize: "clamp(1.9rem,4.4vw,2.7rem)" }}>
            {t.contact.heading[0]}
            <br />
            {t.contact.heading[1]}
          </h2>
          <div className="contact-list">
            <div>
              <span className="mono">{t.contact.addressLabel}</span>
              <p>
                {t.contact.address[0]}
                <br />
                {t.contact.address[1]}
              </p>
            </div>
            <div>
              <span className="mono">{t.contact.serviceLabel}</span>
              <p>{t.contact.serviceText}</p>
            </div>
            <div>
              <span className="mono">{t.contact.routeLabel}</span>
              <p>{t.contact.routeText}</p>
            </div>
            <div>
              <span className="mono">{t.contact.mailLabel}</span>
              <a href="mailto:info@christusgemeinde-bo-nord.de">
                info@christusgemeinde-bo-nord.de
              </a>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <MapEmbed />
        </Reveal>
      </div>
    </section>
  );
}
