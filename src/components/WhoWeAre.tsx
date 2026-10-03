"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Plus, X } from "lucide-react";
import type { Dict } from "@/lib/i18n";
import { useT } from "./LanguageProvider";
import Reveal from "./Reveal";

type CardId = keyof Dict["who"]["cards"];

// Fotos von Unsplash (freie Unsplash-Lizenz, Namensnennung nicht noetig):
// Bibel: Aaron Burden · unsplash.com/photos/9zsHNt5OpqE
// Kreuz: Shutter Speed · unsplash.com/photos/3APnkQ8h60Q
// Taube: Ahmed Nishaath · unsplash.com/photos/2EoMV_zj9gQ
const CARDS: { id: CardId; image: string; position: string }[] = [
  { id: "bibel", image: "/images/glaube/bibel.jpg", position: "50% 70%" },
  { id: "jesus", image: "/images/glaube/kreuz.jpg", position: "52% center" },
  { id: "geist", image: "/images/glaube/taube-himmel.jpg", position: "48% 40%" },
];

export default function WhoWeAre() {
  const t = useT();
  const [flipped, setFlipped] = useState<Record<CardId, boolean>>({
    bibel: false,
    jesus: false,
    geist: false,
  });

  return (
    <section className="section section-shell" id="glaube">
      <div className="wrap stack-xl">
        <Reveal className="section-head">
          <h2>{t.who.heading}</h2>
          <p className="lead">{t.who.text}</p>
        </Reveal>

        <div className="flip-cards">
          {CARDS.map(({ id, image, position }) => {
            const card = t.who.cards[id];
            const isBack = flipped[id];
            return (
              <button
                key={id}
                type="button"
                className={`flip-card${isBack ? " is-back" : ""}`}
                aria-pressed={isBack}
                onClick={() => setFlipped((prev) => ({ ...prev, [id]: !prev[id] }))}
              >
                {isBack ? (
                  <>
                    <span className="flip-top">
                      <span className="flip-label">{card.word}</span>
                      <span className="flip-close" aria-hidden="true">
                        <X size={18} strokeWidth={2.2} />
                      </span>
                    </span>
                    <span className="flip-text">{card.back}</span>
                  </>
                ) : (
                  <>
                    {/* Bild ist Stimmung, der Name der Karte steht im Text */}
                    <Image
                      className="flip-photo"
                      src={image}
                      alt=""
                      fill
                      sizes="(max-width: 760px) 82vw, 400px"
                      style={{ objectFit: "cover", objectPosition: position }}
                    />
                    <span className="flip-bottom">
                      <span className="flip-word">{card.word}</span>
                      <span className="flip-plus" aria-hidden="true">
                        <Plus size={22} strokeWidth={2.2} />
                      </span>
                    </span>
                  </>
                )}
              </button>
            );
          })}
        </div>

        <div className="section-foot">
          <Link href="/was-wir-glauben" className="text-link">
            {t.who.readAll} <span aria-hidden="true">→</span>
          </Link>
          {/* spaeter mit offiziellem BFP-Logo */}
          <span className="muted-label">{t.who.bfp}</span>
        </div>
      </div>
    </section>
  );
}
