"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import type { Dict } from "@/lib/i18n";
import { useT } from "./LanguageProvider";
import Reveal from "./Reveal";

type EventId = keyof Dict["events"]["items"];

// Bild und Sprungziel gehoeren zur Darstellung, nicht zur Uebersetzung —
// deshalb hier und nicht im Woerterbuch. "position" legt den Bildausschnitt
// fest: die Karten sind 3:4, die beiden Plakate und zwei der Fotos brauchen
// einen anderen Schnitt als die Mitte, damit Text bzw. Motiv drin bleiben.
const EVENTS: {
  id: EventId;
  image: string;
  position: string;
  href: string;
}[] = [
  {
    id: "erntedankfest",
    image: "/images/events/erntedankfest.jpg",
    position: "center top",
    href: "#kontakt",
  },
  {
    id: "machineGunPreacher",
    image: "/images/events/machine-gun-preacher.jpg",
    position: "center",
    href: "#gottesdienst",
  },
  {
    id: "gebetsabend",
    image: "/images/events/gebetsabend.jpg",
    position: "55% center",
    href: "#programme",
  },
  {
    id: "jugendtreff",
    image: "/images/events/jugendtreff.jpg",
    position: "center",
    href: "#kinder-jugend",
  },
  {
    id: "teenieTreff",
    image: "/images/events/teenie-treff.jpg",
    position: "center",
    href: "#kinder-jugend",
  },
  {
    id: "kleingruppen",
    image: "/images/events/kleingruppen.jpg",
    position: "40% center",
    href: "#programme",
  },
];

type Metrics = {
  atStart: boolean;
  atEnd: boolean;
  /** Anteil des Sichtfensters am Gesamtinhalt — die Breite des Balkens. */
  visible: number;
  /** Scrollfortschritt von 0 bis 1 — die Position des Balkens. */
  progress: number;
};

function readMetrics(el: HTMLElement): Metrics {
  const scrollable = el.scrollWidth - el.clientWidth;
  return {
    atStart: el.scrollLeft <= 1,
    atEnd: el.scrollLeft >= scrollable - 1,
    visible: el.scrollWidth > 0 ? el.clientWidth / el.scrollWidth : 1,
    progress: scrollable > 0 ? el.scrollLeft / scrollable : 0,
  };
}

export default function Events() {
  const t = useT();
  const reduced = useReducedMotion();
  const scroller = useRef<HTMLDivElement>(null);
  /** Zuletzt angefragte Scrollposition, solange die Bewegung noch laeuft. */
  const pending = useRef<number | null>(null);
  const [metrics, setMetrics] = useState<Metrics>({
    atStart: true,
    atEnd: false,
    visible: 1,
    progress: 0,
  });

  useEffect(() => {
    const el = scroller.current;
    if (!el) return;

    let idle: ReturnType<typeof setTimeout>;
    const update = () => {
      setMetrics(readMetrics(el));
      // Kommen keine Scroll-Events mehr, ist die Bewegung angekommen und das
      // angefragte Ziel darf vergessen werden.
      clearTimeout(idle);
      idle = setTimeout(() => {
        pending.current = null;
      }, 140);
    };

    el.addEventListener("scroll", update, { passive: true });
    // Der Observer meldet sich direkt nach observe() einmal von selbst —
    // damit stehen die Startwerte da, ohne setState im Effekt-Rumpf.
    const observer = new ResizeObserver(update);
    observer.observe(el);

    return () => {
      clearTimeout(idle);
      el.removeEventListener("scroll", update);
      observer.disconnect();
    };
  }, []);

  const step = useCallback(
    (direction: 1 | -1) => {
      const el = scroller.current;
      if (!el) return;
      const cards = Array.from(el.querySelectorAll<HTMLElement>(".event-card"));
      if (cards.length === 0) return;

      // Die Rastpunkte liegen genau auf den Kartenkanten. Wir springen auf
      // einen davon statt um eine Distanz zu scrollen: bei "mandatory" macht
      // der Browser eine Zwischenposition sonst sofort wieder rueckgaengig.
      const base = cards[0].offsetLeft;
      const stops = cards.map((card) => card.offsetLeft - base);

      // Waehrend eine weiche Bewegung noch laeuft, liefert scrollLeft einen
      // Zwischenwert. Dann rechnen wir vom angefragten Ziel weiter, sonst
      // verpuffen schnelle Klicks.
      const from = pending.current ?? el.scrollLeft;
      const next =
        direction > 0
          ? stops.find((stop) => stop > from + 1)
          : stops.filter((stop) => stop < from - 1).pop();
      if (next === undefined) return;

      const left = Math.min(next, el.scrollWidth - el.clientWidth);
      pending.current = left;
      el.scrollTo({ left, behavior: reduced ? "auto" : "smooth" });
    },
    [reduced],
  );

  const barWidth = Math.min(100, metrics.visible * 100);

  return (
    <section className="events" id="termine">
      <Reveal className="wrap events-head">
        <div>
          <span className="eyebrow">{t.events.eyebrow}</span>
          <h2>{t.events.heading}</h2>
        </div>
        <div className="events-head-end">
          <p>{t.events.lead}</p>
          <div className="events-nav">
            <button
              type="button"
              aria-label={t.events.prev}
              disabled={metrics.atStart}
              onClick={() => step(-1)}
            >
              <span aria-hidden="true">←</span>
            </button>
            <button
              type="button"
              aria-label={t.events.next}
              disabled={metrics.atEnd}
              onClick={() => step(1)}
            >
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </Reveal>

      <div
        className="events-scroller"
        ref={scroller}
        role="region"
        aria-label={t.events.regionLabel}
        tabIndex={0}
      >
        {EVENTS.map((event, i) => {
          const copy = t.events.items[event.id];
          return (
            <article className="event-card" key={event.id}>
              <div className="event-media">
                <Image
                  src={event.image}
                  alt={copy.imageAlt}
                  fill
                  sizes="(max-width: 640px) 78vw, (max-width: 1024px) 40vw, 320px"
                  loading={i < 2 ? "eager" : "lazy"}
                  style={{ objectFit: "cover", objectPosition: event.position }}
                />
              </div>
              <div className="event-body">
                <span className="event-when">{copy.when}</span>
                <h3>{copy.title}</h3>
                <p>{copy.text}</p>
                <a href={event.href} className="btn btn-ghost on-light event-cta">
                  {copy.cta}
                </a>
              </div>
            </article>
          );
        })}
      </div>

      <div className="wrap">
        <div className="events-rail" aria-hidden="true">
          <span
            style={{
              width: `${barWidth}%`,
              left: `${metrics.progress * (100 - barWidth)}%`,
            }}
          />
        </div>
      </div>
    </section>
  );
}
