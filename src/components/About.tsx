"use client";

import Reveal from "./Reveal";
import { useT } from "./LanguageProvider";

export default function About() {
  const t = useT();

  return (
    <section className="about" id="ueber-uns">
      <div className="wrap about-grid">
        <Reveal className="about-text">
          <span className="eyebrow">{t.about.eyebrow}</span>
          <h2 style={{ fontSize: "clamp(1.9rem,4.4vw,2.7rem)", marginBottom: 26 }}>
            {t.about.heading}
          </h2>
          <p>
            {t.about.lead}
            <strong>{t.about.leadStrong}</strong>
          </p>
          <p>{t.about.body}</p>
          <div className="ru-note" lang={t.about.otherNote.lang}>
            <span className="mono">{t.about.otherNote.label}</span>
            <p>{t.about.otherNote.text}</p>
          </div>
          <details className="creed">
            <summary>{t.about.creedSummary}</summary>
            <div className="creed-body">
              {t.about.creed.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </details>
        </Reveal>
        <Reveal delay={0.1}>
          <ul className="belief-list">
            {t.about.beliefs.map((b) => (
              <li key={b.num}>
                <span className="bnum">{b.num}</span>
                <div>
                  <h3>{b.title}</h3>
                  <p>{b.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
