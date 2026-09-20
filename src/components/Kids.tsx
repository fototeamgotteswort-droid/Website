"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import { useT } from "./LanguageProvider";

export default function Kids() {
  const t = useT();

  return (
    <section className="kids" id="kinder-jugend">
      <div className="wrap">
        <Reveal className="section-head">
          <div>
            <span className="eyebrow">{t.kids.eyebrow}</span>
            <h2>
              {t.kids.heading[0]}
              <br />
              {t.kids.heading[1]}
            </h2>
          </div>
          <p>{t.kids.lead}</p>
        </Reveal>

        <Reveal className="kids-grid">
          <div className="kid-card">
            <div className="kid-photo placeholder">
              <div className="placeholder-mark">
                <svg viewBox="0 0 34 34" stroke="var(--sand)" strokeWidth="2.4" strokeLinecap="round" fill="none">
                  <path d="M17 2 L17 32 M8 11 L26 11" />
                </svg>
                <span>{t.kids.arche.badge}</span>
              </div>
            </div>
            <div className="kid-body">
              <span className="mono">{t.kids.arche.age}</span>
              <h3>{t.kids.arche.title}</h3>
              <p>{t.kids.arche.text}</p>
              <div className="agegroups">
                {t.kids.arche.groups.map((g) => (
                  <span key={g}>{g}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="kid-card">
            <div className="kid-photo">
              <Image
                src="/images/jugend-konferenz.jpg"
                alt={t.kids.youth.imageAlt}
                width={1000}
                height={800}
                sizes="(max-width: 820px) 100vw, 50vw"
                loading="lazy"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div className="kid-body">
              <span className="mono">{t.kids.youth.meta}</span>
              <h3>{t.kids.youth.title}</h3>
              <p>{t.kids.youth.text}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
