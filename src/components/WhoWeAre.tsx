"use client";

import Image, { type StaticImageData } from "next/image";
import { photos } from "@/lib/photos";
import { useRef, useState } from "react";
import { Plus, X } from "lucide-react";
import type { Dict } from "@/lib/i18n";
import { useT } from "./LanguageProvider";
import PageLink from "./PageLink";
import Reveal from "./Reveal";

type CardId = keyof Dict["who"]["cards"];

// Fotos von Unsplash (freie Unsplash-Lizenz, Namensnennung nicht noetig):
// Bibel: Aaron Burden · unsplash.com/photos/9zsHNt5OpqE
// Kreuz: Shutter Speed · unsplash.com/photos/3APnkQ8h60Q
// Taube: Oleg Sotnikov · unsplash.com/photos/QNrlMTX91a4
const CARDS: { id: CardId; image: StaticImageData; position: string }[] = [
  { id: "bibel", image: photos.bibel, position: "50% 70%" },
  { id: "jesus", image: photos.kreuz, position: "52% center" },
  { id: "geist", image: photos.taube, position: "50% 40%" },
];

export default function WhoWeAre() {
  const t = useT();
  const [flipped, setFlipped] = useState<Record<CardId, boolean>>({
    bibel: false,
    jesus: false,
    geist: false,
  });
  // Handy: die Karten stehen in einer wischbaren Reihe, die Punkte darunter
  // zeigen, welche gerade zu sehen ist, und springen per Tipp dorthin.
  const row = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const onScroll = () => {
    const el = row.current;
    if (!el) return;
    const cards = Array.from(el.children) as HTMLElement[];
    const start = el.scrollLeft;
    let nearest = 0;
    cards.forEach((card, i) => {
      if (
        Math.abs(card.offsetLeft - cards[0].offsetLeft - start) <
        Math.abs(cards[nearest].offsetLeft - cards[0].offsetLeft - start)
      ) {
        nearest = i;
      }
    });
    // am Ende der Reihe gilt die letzte Karte
    if (start + el.clientWidth >= el.scrollWidth - 4) nearest = cards.length - 1;
    setActive(nearest);
  };

  const goTo = (i: number) => {
    const el = row.current;
    const cards = el ? (Array.from(el.children) as HTMLElement[]) : [];
    if (!el || !cards[i]) return;
    el.scrollTo({ left: cards[i].offsetLeft - cards[0].offsetLeft, behavior: "smooth" });
  };

  return (
    <section className="section section-shell" id="glaube">
      <div className="wrap stack-xl">
        <Reveal className="section-head">
          <h2>{t.who.heading}</h2>
          <p className="lead">{t.who.text}</p>
        </Reveal>

        <div className="flip-cards" ref={row} onScroll={onScroll}>
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
                    <span className="flip-media">
                      <Image
                        src={image}
                        placeholder="blur"
                        loading="eager"
                        alt=""
                        fill
                        sizes="(max-width: 760px) 82vw, 400px"
                        style={{ objectFit: "cover", objectPosition: position }}
                      />
                    </span>
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

        <div className="flip-dots">
          {CARDS.map(({ id }, i) => (
            <button
              key={id}
              type="button"
              aria-label={t.who.cards[id].word}
              aria-current={active === i ? "true" : undefined}
              onClick={() => goTo(i)}
            />
          ))}
        </div>

        <div className="section-foot">
          <PageLink href="/was-wir-glauben" className="text-link">
            {t.who.readAll} <span aria-hidden="true">→</span>
          </PageLink>
          {/* spaeter mit offiziellem BFP-Logo */}
          <span className="muted-label">{t.who.bfp}</span>
        </div>
      </div>
    </section>
  );
}
