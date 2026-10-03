"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import { useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import type { Dict } from "@/lib/i18n";
import { EVENTBRITE_URL } from "@/lib/links";
import Dialog from "./Dialog";
import { useT } from "./LanguageProvider";
import Reveal from "./Reveal";

type EventId = keyof Dict["events"]["items"];

// Termine in Briefing-Reihenfolge. Texte stehen im Woerterbuch, hier nur
// Darstellung und Ziel. "until" (JJJJ-MM-TT) blendet einmalige Termine nach
// diesem Tag automatisch aus; regelmaessige Termine haben keins.
// Nur Termine mit echtem Ziel (Anmeldung) haben einen Link; fuer die
// regelmaessigen Treffen kommt er mit der Seite /gemeindeleben.
type EventEntry = {
  id: EventId;
  image: string;
  position: string;
  until?: string;
  href?: string;
};

const EVENTS: EventEntry[] = [
  {
    id: "machineGunPreacher",
    image: "/images/events/machine-gun-preacher.jpg",
    position: "center",
    until: "2026-10-18",
    href: EVENTBRITE_URL,
  },
  {
    id: "gebetsabend",
    image: "/images/events/gebetsabend.jpg",
    position: "55% center",
  },
  {
    id: "jugendtreff",
    image: "/images/events/jugendtreff-wiese.jpg",
    position: "30% center",
  },
  {
    id: "teenieTreff",
    image: "/images/events/teenie-treff.jpg",
    position: "center",
  },
  {
    id: "frauentreff",
    image: "/images/events/frauentreff-runde.jpg",
    // im Hochformat passen nicht alle drei: so sind zwei Gesichter ganz im Bild
    position: "22% center",
  },
  {
    id: "kleingruppen",
    image: "/images/events/kleingruppen-tisch.jpg",
    position: "40% center",
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
  const now = useSyncExternalStore(noop, today, () => null);
  const [openId, setOpenId] = useState<EventId | null>(null);
  const close = useCallback(() => setOpenId(null), []);
  const opened = EVENTS.find((event) => event.id === openId);

  const upcoming = EVENTS.filter(
    (event) => !event.until || now === null || event.until >= now,
  );
  const count = upcoming.length;

  // Laenge einer Runde, also aller Karten inklusive Abstaenden.
  const lap = useRef(0);
  // Sollposition als Gleitkommazahl: 26 px/s sind pro Bild weniger als ein
  // Pixel, ein Integer-Zaehler wuerde stehen bleiben.
  const target = useRef<number | null>(null);
  const placed = useRef(false);
  const pointerDown = useRef(false);
  const hovered = useRef(false);
  const holdUntil = useRef(0);
  const dialogOpen = useRef(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    dialogOpen.current = openId !== null;
  }, [openId]);

  const hold = useCallback((ms: number) => {
    holdUntil.current = Math.max(holdUntil.current, performance.now() + ms);
  }, []);

  useEffect(() => {
    const el = scroller.current;
    if (!el) return;

    const measure = () => {
      const cards = Array.from(el.querySelectorAll<HTMLElement>(".event-card"));
      const first = cards[0];
      const secondLap = cards[count];
      lap.current =
        first && secondLap ? secondLap.offsetLeft - first.offsetLeft : 0;
    };
    // Aendert sich die Zahl der Termine (Filter nach der Hydration), wird
    // neu in die mittlere Kopie gesetzt.
    placed.current = false;

    // Der Observer meldet sich direkt nach observe() einmal von selbst.
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
  }, [count]);

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

      if (
        pointerDown.current ||
        now < holdUntil.current ||
        dialogOpen.current ||
        keyboardInside()
      ) {
        // Der Nutzer hat das Steuer; danach lesen wir neu ein.
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
          {Array.from({ length: COPIES }, (_, copy) =>
            upcoming.map((event, i) => {
              // nur die erste Kopie ist fuer Screenreader und Tastatur da
              const copy0 = copy === 0;
              const info = t.events.items[event.id];
              return (
                <article
                  className="event-card"
                  key={`${copy}-${event.id}`}
                  aria-hidden={copy0 ? undefined : true}
                >
                  <div className="event-media">
                    <Image
                      src={event.image}
                      alt={copy0 ? info.imageAlt : ""}
                      fill
                      sizes="(max-width: 640px) 84vw, 330px"
                      loading={copy0 && i < 3 ? "eager" : "lazy"}
                      style={{ objectFit: "cover", objectPosition: event.position }}
                    />
                  </div>
                  <div className="event-body">
                    <span className="event-when">{info.when}</span>
                    <h3>{info.title}</h3>
                    {/* auf der Karte nur angerissen, alles Weitere im Pop-up */}
                    <p className="event-text">{info.text}</p>
                    <button
                      type="button"
                      className="text-link event-cta"
                      aria-haspopup="dialog"
                      tabIndex={copy0 ? undefined : -1}
                      onClick={() => setOpenId(event.id)}
                    >
                      {t.events.more} <span aria-hidden="true">→</span>
                    </button>
                  </div>
                </article>
              );
            }),
          )}
        </div>
      </div>

      {opened && <EventDialog event={opened} onClose={close} />}
    </section>
  );
}

function EventDialog({
  event,
  onClose,
}: {
  event: EventEntry;
  onClose: () => void;
}) {
  const t = useT();
  const info = t.events.items[event.id];

  return (
    <Dialog
      onClose={onClose}
      labelledBy="event-dialog-title"
      overlayClassName="event-overlay"
      className="event-dialog"
    >
      <button
        type="button"
        className="icon-btn event-dialog-close"
        aria-label={t.events.close}
        onClick={onClose}
      >
        <X size={18} strokeWidth={2.2} aria-hidden="true" />
      </button>
      <div className="event-dialog-media">
        <Image
          src={event.image}
          alt={info.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, 560px"
          style={{ objectFit: "cover", objectPosition: event.position }}
        />
      </div>
      <div className="event-dialog-body">
        <span className="event-when">{info.when}</span>
        <h2 id="event-dialog-title">{info.title}</h2>
        {info.verse && (
          <p className="event-verse">
            {info.verse.text} <cite>{info.verse.ref}</cite>
          </p>
        )}
        <p>{info.text}</p>
        {event.href && info.action && (
          <div>
            <a
              href={event.href}
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              {info.action}
              <ArrowRight size={18} strokeWidth={2} aria-hidden="true" />
            </a>
          </div>
        )}
      </div>
    </Dialog>
  );
}
