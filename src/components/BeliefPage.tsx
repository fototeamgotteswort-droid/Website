"use client";

import Image from "next/image";
import { photos } from "@/lib/photos";
import { useT } from "./LanguageProvider";
import Reveal from "./Reveal";

// Hintergrund und Foto je Teil (Briefing 4.2: weiss, Shell, weiss).
// Teil II sollte laut Briefing ein Tauffoto zeigen, bis dahin das Kreuz.
const PARTS = [
  { section: "section-white", image: photos.bibel, position: "50% 70%" },
  { section: "section-shell", image: photos.kreuz, position: "50% 35%" },
  { section: "section-white", image: photos.gottesdienst, position: "50% 45%" },
];

export default function BeliefPage() {
  const t = useT();
  const b = t.belief;

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <Reveal className="section-head">
            <h1>{b.heading}</h1>
            <p className="lead">{b.lead}</p>
          </Reveal>
        </div>
      </section>

      {b.parts.map((part, i) => (
        <section
          key={part.label}
          className={`section ${PARTS[i].section}`}
          aria-labelledby={`teil-${i + 1}-titel`}
        >
          <div className="wrap stack-lg">
            {/* Bildbanner zum Auftakt jedes Teils */}
            <div className="part-banner" id={`teil-${i + 1}`}>
              <Image
                src={PARTS[i].image}
                placeholder="blur"
                loading="eager"
                alt={part.imageAlt}
                fill
                sizes="(max-width: 1320px) 100vw, 1224px"
                style={{ objectFit: "cover", objectPosition: PARTS[i].position }}
              />
              <div className="part-banner-text">
                <span className="part-label">{part.label}</span>
                <h2 id={`teil-${i + 1}-titel`}>{part.heading}</h2>
              </div>
            </div>

            <ol className="creed">
              {part.items.map((item) => (
                <li key={item.num} className="creed-row" id={`punkt-${item.num}`}>
                  <div className="creed-left">
                    <span className="creed-num" aria-hidden="true">
                      {item.num}
                    </span>
                    <div>
                      <h3>{item.title}</h3>
                      <p className="creed-short">{item.short}</p>
                    </div>
                  </div>
                  <div className="creed-right">
                    <p>{item.text}</p>
                    {/* Bibelstellen als einzelne Etiketten */}
                    <ul className="creed-refs">
                      {item.refs.split(" · ").map((ref) => (
                        <li key={ref}>{ref}</li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>
      ))}
    </>
  );
}
