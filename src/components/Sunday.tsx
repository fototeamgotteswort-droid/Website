"use client";

import { useT } from "./LanguageProvider";
import PhotoPlaceholder from "./PhotoPlaceholder";
import Reveal from "./Reveal";

// Platzhalterflaechen, bis echte Fotos da sind (Briefing: nur Personen mit Einwilligung).
const PHOTO_COLORS = ["#7EC8E3", "#E8D8C3", "#9FE2BF"];

export default function Sunday() {
  const t = useT();

  return (
    <section className="section section-mist" id="sonntag">
      <div className="wrap stack-xl">
        <Reveal className="section-head">
          <h2>{t.sunday.heading}</h2>
          <p className="lead">{t.sunday.text}</p>
        </Reveal>

        <div className="sunday-grid">
          {t.sunday.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <article className="sunday-item">
                <PhotoPlaceholder
                  label={item.photo}
                  color={PHOTO_COLORS[i]}
                  ratio="4 / 3"
                />
                <span className="sunday-time">{item.time}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
