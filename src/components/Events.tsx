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

// Die Liste steht dreimal hintereinander im Markup. Gelaufen wird immer in
// der mittleren Kopie: so ist links und rechts eine ganze Runde Vorlauf da,
// und beim Umsetzen um genau eine Runde sieht das Bild identisch aus.
const COPIES = 3;
/** Tempo des Selbstlaufs in Pixeln pro Sekunde. */
const SPEED = 26;
/** So lange nach einer Eingabe bleibt der Selbstlauf aus. */
const HOLD_AFTER_INPUT = 2500;

export default function Events() {
  const t = useT();
  const reduced = useReducedMotion();
  const scroller = useRef<HTMLDivElement>(null);

  // Laenge einer Runde, also aller sechs Karten inklusive Abstaenden.
  const lap = useRef(0);
  // Sollposition als Gleitkommazahl: 26 px/s sind pro Bild weniger als ein
  // Pixel, ein Integer-Zaehler wuerde stehen bleiben.
  const target = useRef<number | null>(null);
  const placed = useRef(false);
  const pointerDown = useRef(false);
  const hovered = useRef(false);
  const holdUntil = useRef(0);
  const [visible, setVisible] = useState(false);

  const hold = useCallback((ms: number) => {
    holdUntil.current = Math.max(
      holdUntil.current,
      performance.now() + ms,
    );
  }, []);

  useEffect(() => {
    const el = scroller.current;
    if (!el) return;

    const measure = () => {
      const cards = Array.from(el.querySelectorAll<HTMLElement>(".event-card"));
      const first = cards[0];
      const secondLap = cards[EVENTS.length];
      lap.current =
        first && secondLap ? secondLap.offsetLeft - first.offsetLeft : 0;
    };

    // Der Observer meldet sich direkt nach observe() einmal von selbst —
    // damit steht das Mass da, ohne setState im Effekt-Rumpf.
    const sizes = new ResizeObserver(measure);
    sizes.observe(el);
    // Ausserhalb des Blickfelds muss nichts laufen.
    const inView = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { rootMargin: "120px" },
    );
    inView.observe(el);

    return () => {
      sizes.disconnect();
      inView.disconnect();
    };
  }, []);

  // Eingaben anmelden: waehrend und kurz nach einer Beruehrung, einem Wisch
  // oder einem Radscroll fassen wir die Position nicht an, sonst wuerde der
  // Selbstlauf den Schwung des Nutzers abschneiden.
  useEffect(() => {
    const el = scroller.current;
    if (!el) return;

    const down = () => {
      pointerDown.current = true;
      hold(HOLD_AFTER_INPUT);
    };
    const up = () => {
      pointerDown.current = false;
      hold(HOLD_AFTER_INPUT);
    };
    const input = () => hold(HOLD_AFTER_INPUT);
    const enter = () => {
      hovered.current = true;
    };
    const leave = () => {
      hovered.current = false;
    };

    el.addEventListener("pointerdown", down);
    el.addEventListener("wheel", input, { passive: true });
    el.addEventListener("keydown", input);
    el.addEventListener("mouseenter", enter);
    el.addEventListener("mouseleave", leave);
    window.addEventListener("pointerup", up);
    window.addEventListener("pointercancel", up);

    return () => {
      el.removeEventListener("pointerdown", down);
      el.removeEventListener("wheel", input);
      el.removeEventListener("keydown", input);
      el.removeEventListener("mouseenter", enter);
      el.removeEventListener("mouseleave", leave);
      window.removeEventListener("pointerup", up);
      window.removeEventListener("pointercancel", up);
    };
  }, [hold]);

  useEffect(() => {
    if (reduced || !visible) return;
    const el = scroller.current;
    if (!el) return;

    let frame = 0;
    let previous = performance.now();

    // Tastaturfokus im Karussell: der Browser scrollt das fokussierte Element
    // selbst ins Bild. Dann darf weder der Selbstlauf noch der Umlauf die
    // Position verschieben, sonst wandert der Fokusrahmen aus dem Bild.
    // ":focus-visible" trennt Tastatur von Maus — nach einem Klick bleibt das
    // Karussell also nicht stehen.
    const keyboardInside = () => {
      const active = document.activeElement;
      return !!active && el.contains(active) && active.matches(":focus-visible");
    };

    const tick = (now: number) => {
      frame = requestAnimationFrame(tick);
      // Nach einem Tab-Wechsel ist der Abstand riesig — nicht springen.
      const elapsed = Math.min(now - previous, 100);
      previous = now;

      const length = lap.current;
      if (length <= 0) return;

      if (!placed.current) {
        el.scrollLeft = length;
        target.current = length;
        placed.current = true;
        return;
      }

      if (pointerDown.current || now < holdUntil.current) {
        // Der Nutzer hat das Steuer; danach lesen wir neu ein.
        target.current = null;
        return;
      }

      const focusHeld = keyboardInside();
      if (focusHeld) {
        target.current = null;
        return;
      }

      if (target.current === null || Math.abs(el.scrollLeft - target.current) > 2) {
        target.current = el.scrollLeft;
      }
      if (!hovered.current) {
        target.current += (SPEED * elapsed) / 1000;
      }
      // In der mittleren Kopie halten. Weil sich der Inhalt alle "length"
      // Pixel wiederholt, ist der Sprung nicht zu sehen.
      if (target.current >= length * 2) target.current -= length;
      else if (target.current < length) target.current += length;

      el.scrollLeft = target.current;
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [reduced, visible]);

  const step = useCallback(
    (direction: 1 | -1) => {
      const el = scroller.current;
      if (!el) return;
      const card = el.querySelector<HTMLElement>(".event-card");
      const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
      const distance = card ? card.offsetWidth + gap : el.clientWidth * 0.8;
      // Der Selbstlauf schreibt jedes Bild in scrollLeft und wuerde die
      // weiche Bewegung sofort ueberschreiben — also kurz aussetzen.
      hold(reduced ? 0 : 900);
      el.scrollBy({
        left: distance * direction,
        behavior: reduced ? "auto" : "smooth",
      });
    },
    [hold, reduced],
  );

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
              onClick={() => step(-1)}
            >
              <span aria-hidden="true">←</span>
            </button>
            <button
              type="button"
              aria-label={t.events.next}
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
        {Array.from({ length: COPIES }, (_, copy) =>
          EVENTS.map((event, i) => {
            const copy0 = copy === 0;
            const info = t.events.items[event.id];
            return (
              <article
                className="event-card"
                key={`${copy}-${event.id}`}
                data-copy={copy0 ? undefined : "repeat"}
                aria-hidden={copy0 ? undefined : true}
              >
                <div className="event-media">
                  <Image
                    src={event.image}
                    alt={copy0 ? info.imageAlt : ""}
                    fill
                    sizes="(max-width: 640px) 78vw, (max-width: 1024px) 40vw, 320px"
                    loading={copy0 && i < 2 ? "eager" : "lazy"}
                    style={{ objectFit: "cover", objectPosition: event.position }}
                  />
                </div>
                <div className="event-body">
                  <span className="event-when">{info.when}</span>
                  <h3>{info.title}</h3>
                  <p>{info.text}</p>
                  <a
                    href={event.href}
                    className="btn btn-ghost on-light event-cta"
                    tabIndex={copy0 ? undefined : -1}
                  >
                    {info.cta}
                  </a>
                </div>
              </article>
            );
          }),
        )}
      </div>
    </section>
  );
}
