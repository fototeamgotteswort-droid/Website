"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import { useT } from "./LanguageProvider";

export default function Service() {
  const t = useT();

  return (
    <section className="service" id="gottesdienst">
      <div className="wrap">
        <Reveal className="section-head">
          <div>
            <span className="eyebrow on-dark">{t.service.eyebrow}</span>
            <h2>
              {t.service.heading[0]}
              <br />
              {t.service.heading[1]}
            </h2>
          </div>
          <p>{t.service.lead}</p>
        </Reveal>
        <Reveal className="service-grid">
          <div className="service-photo">
            <Image
              src="/images/img-2938.jpg"
              alt={t.service.imageAlt}
              width={1000}
              height={1250}
              sizes="(max-width: 900px) 100vw, 45vw"
              loading="lazy"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div>
            <div className="service-time">
              <span>{t.service.timeLabel}</span>
              {t.service.time}
            </div>
            <div className="service-desc">
              {t.service.desc.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
            <div className="service-cta">
              <a
                href="/api/live"
                className="btn btn-solid"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.service.ctaOnline}
              </a>
              <p>{t.service.ctaNote}</p>
            </div>
            <div className="info-row">
              <div className="info-cell">
                <span className="mono">{t.service.infoCar.label}</span>
                <p>{t.service.infoCar.text}</p>
              </div>
              <div className="info-cell">
                <span className="mono">{t.service.infoTransit.label}</span>
                <p>{t.service.infoTransit.text}</p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="faq">
          {t.service.faq.map((item) => (
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
