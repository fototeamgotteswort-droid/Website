"use client";

import Reveal from "./Reveal";
import { useT } from "./LanguageProvider";

export default function Programs() {
  const t = useT();

  return (
    <section className="programs" id="programme">
      <div className="wrap">
        <Reveal className="section-head">
          <div>
            <span className="eyebrow">{t.programs.eyebrow}</span>
            <h2>{t.programs.heading}</h2>
          </div>
          <p>{t.programs.lead}</p>
        </Reveal>
        <div className="program-grid">
          {t.programs.cards.map((card, i) => (
            <Reveal className="program-card" key={card.title} delay={i * 0.1}>
              <span className="mono">{card.meta}</span>
              <h3>{card.title}</h3>
              <span className="when">{card.when}</span>
              <p>{card.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
