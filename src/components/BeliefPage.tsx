"use client";

import Image from "next/image";
import { Mail, MessageCircle } from "lucide-react";
import { EMAIL_URL, whatsappUrl } from "@/lib/links";
import { useT } from "./LanguageProvider";
import Reveal from "./Reveal";

// Hintergrund und Foto je Teil (Briefing 4.2: weiss, Shell, weiss).
// Teil II sollte laut Briefing ein Tauffoto zeigen, bis dahin das Kreuz.
const PARTS = [
  { section: "section-white", image: "/images/glaube/bibel.jpg", position: "50% 70%" },
  { section: "section-shell", image: "/images/glaube/kreuz.jpg", position: "50% 35%" },
  { section: "section-white", image: "/images/sonntag/gottesdienst.jpg", position: "50% 45%" },
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
          aria-labelledby={`teil-${i + 1}`}
        >
          <div className="wrap stack-lg">
            <div className="part-head">
              <div>
                <span className="part-label">{part.label}</span>
                <h2 id={`teil-${i + 1}`}>{part.heading}</h2>
              </div>
              <div className="part-photo">
                <Image
                  src={PARTS[i].image}
                  alt={part.imageAlt}
                  fill
                  sizes="(max-width: 760px) 90vw, 420px"
                  style={{ objectFit: "cover", objectPosition: PARTS[i].position }}
                />
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
                    <span className="creed-refs">{item.refs}</span>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>
      ))}

      <section className="section section-navy closing">
        <div className="wrap closing-inner">
          <h2>{b.closingHeading}</h2>
          <p>{b.closingText}</p>
          <div className="btn-row">
            <a
              href={whatsappUrl()}
              className="btn btn-light"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={20} strokeWidth={1.8} aria-hidden="true" />
              {b.whatsapp}
            </a>
            <a href={EMAIL_URL} className="btn btn-outline-light">
              <Mail size={20} strokeWidth={1.8} aria-hidden="true" />
              {b.email}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
