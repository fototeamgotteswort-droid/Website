"use client";

import Link from "next/link";
import { useState } from "react";
import { BookOpen, Cross, Flame, Plus, X, type LucideIcon } from "lucide-react";
import type { Dict } from "@/lib/i18n";
import { useT } from "./LanguageProvider";
import Reveal from "./Reveal";

type CardId = keyof Dict["who"]["cards"];

const CARDS: { id: CardId; icon: LucideIcon; color: string }[] = [
  { id: "bibel", icon: BookOpen, color: "var(--sea-mist)" },
  { id: "jesus", icon: Cross, color: "var(--sand)" },
  { id: "geist", icon: Flame, color: "var(--mint)" },
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
          {CARDS.map(({ id, icon: Icon, color }) => {
            const card = t.who.cards[id];
            const isBack = flipped[id];
            return (
              <button
                key={id}
                type="button"
                className={`flip-card${isBack ? " is-back" : ""}`}
                aria-pressed={isBack}
                onClick={() => setFlipped((prev) => ({ ...prev, [id]: !prev[id] }))}
                style={isBack ? undefined : { background: color }}
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
                    <Icon
                      className="flip-icon-art"
                      size={56}
                      strokeWidth={1.3}
                      aria-hidden="true"
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
