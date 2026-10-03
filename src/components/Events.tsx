"use client";

import Image from "next/image";
import { useCallback, useRef, useSyncExternalStore } from "react";
import { useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Dict } from "@/lib/i18n";
import {
  EVENTBRITE_URL,
  INSTAGRAM_YOUTH_URL,
  whatsappUrl,
} from "@/lib/links";
import { useT } from "./LanguageProvider";
import Reveal from "./Reveal";

type EventId = keyof Dict["events"]["items"];

// Termine in Briefing-Reihenfolge. Texte stehen im Woerterbuch, hier nur
// Darstellung und Ziel. "until" (JJJJ-MM-TT) blendet einmalige Termine nach
// diesem Tag automatisch aus; regelmaessige Termine haben keins.
// "Mehr erfahren"-Links sind Uebergaenge, bis es /gemeindeleben gibt.
const EVENTS: {
  id: EventId;
  image: string;
  position: string;
  until?: string;
  href: (t: Dict) => string;
  external: boolean;
}[] = [
  {
    id: "machineGunPreacher",
    image: "/images/events/machine-gun-preacher.jpg",
    position: "center",
    until: "2026-10-18",
    href: () => EVENTBRITE_URL,
    external: true,
  },
  {
    id: "gebetsabend",
    image: "/images/events/gebetsabend.jpg",
    position: "55% center",
    // spaeter: /gemeindeleben#gebet
    href: (t) => whatsappUrl(t.whatsappText.gebetsabend),
    external: true,
  },
  {
    id: "jugendtreff",
    image: "/images/events/jugendtreff.jpg",
    position: "center",
    // spaeter: /gemeindeleben#jugend
    href: () => INSTAGRAM_YOUTH_URL,
    external: true,
  },
  {
    id: "teenieTreff",
    image: "/images/events/teenie-treff.jpg",
    position: "center",
    // spaeter: /gemeindeleben#teens
    href: (t) => whatsappUrl(t.whatsappText.teenieTreff),
    external: true,
  },
  {
    id: "frauentreff",
    image: "/images/events/frauentreff.jpg",
    position: "40% center",
    // spaeter: /gemeindeleben#frauen
    href: (t) => whatsappUrl(t.whatsappText.frauentreff),
    external: true,
  },
  {
    id: "kleingruppen",
    image: "/images/events/kleingruppen-runde.jpg",
    position: "center 30%",
    // spaeter: /gemeindeleben#kleingruppen
    href: (t) => whatsappUrl(t.whatsappText.kleingruppen),
    external: true,
  },
];

// Heutiges Datum (Ortszeit) als JJJJ-MM-TT. Der Server rendert ohne Datum
// alle Termine; im Browser wird direkt nach der Hydration gefiltert.
function today() {
  const d = new Date();
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}
const noop = () => () => {};

export default function Events() {
  const t = useT();
  const reduced = useReducedMotion();
  const scroller = useRef<HTMLDivElement>(null);
  const now = useSyncExternalStore(noop, today, () => null);

  const upcoming = EVENTS.filter(
    (event) => !event.until || now === null || event.until >= now,
  );

  const step = useCallback(
    (direction: 1 | -1) => {
      const el = scroller.current;
      if (!el) return;
      const card = el.querySelector<HTMLElement>(".event-card");
      const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
      const distance = card ? card.offsetWidth + gap : el.clientWidth * 0.8;
      el.scrollBy({
        left: distance * direction,
        behavior: reduced ? "auto" : "smooth",
      });
    },
    [reduced],
  );

  return (
    <section className="section section-shell events" id="termine">
      <div className="wrap">
        <Reveal className="events-head">
          <h2>{t.events.heading}</h2>
          <div className="events-nav">
            <button
              type="button"
              className="icon-btn"
              aria-label={t.events.prev}
              aria-controls="events-scroller"
              onClick={() => step(-1)}
            >
              <ChevronLeft size={20} strokeWidth={2} aria-hidden="true" />
            </button>
            <button
              type="button"
              className="icon-btn filled"
              aria-label={t.events.next}
              aria-controls="events-scroller"
              onClick={() => step(1)}
            >
              <ChevronRight size={20} strokeWidth={2} aria-hidden="true" />
            </button>
          </div>
        </Reveal>

        <div
          id="events-scroller"
          className="events-scroller"
          ref={scroller}
          role="region"
          aria-label={t.events.regionLabel}
          tabIndex={0}
        >
          {upcoming.map((event, i) => {
            const info = t.events.items[event.id];
            return (
              <article className="event-card" key={event.id}>
                <div className="event-media">
                  <Image
                    src={event.image}
                    alt={info.imageAlt}
                    fill
                    sizes="330px"
                    loading={i < 3 ? "eager" : "lazy"}
                    style={{ objectFit: "cover", objectPosition: event.position }}
                  />
                </div>
                <div className="event-body">
                  <span className="event-when">{info.when}</span>
                  <h3>{info.title}</h3>
                  {info.verse && (
                    <p className="event-verse">
                      {info.verse.text} <cite>{info.verse.ref}</cite>
                    </p>
                  )}
                  <p className="event-text">{info.text}</p>
                  <a
                    href={event.href(t)}
                    className="text-link event-cta"
                    {...(event.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {info.cta} <span aria-hidden="true">→</span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
