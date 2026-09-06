"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";

const STRIP = [
  { num: "11:00", lbl: "Sonntags · DE & RU" },
  { num: "3–12", lbl: "Kinderarche" },
  { num: "A40/A43", lbl: "Eigener Parkplatz" },
];

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduced = useReducedMotion();

  const enter = (offsetY: number, delay: number, duration = 0.8) =>
    reduced
      ? {
          initial: { opacity: 1, y: 0 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0 },
        }
      : {
          initial: { opacity: 0, y: offsetY },
          animate: { opacity: 1, y: 0 },
          transition: { duration, ease: [0.16, 1, 0.3, 1] as const, delay },
        };

  // Die Quelle wird erst im Browser gesetzt: So laden Handys die kleine
  // Datei, und wer "Bewegung reduzieren" aktiviert hat, sieht nur das
  // Standbild.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    video.src = window.matchMedia("(max-width: 900px)").matches
      ? "/video/hero-mobile.mp4"
      : "/video/hero.mp4";
    // Safari startet den Autoplay gelegentlich erst nach einem play()-Aufruf.
    video.play().catch(() => {});
  }, []);

  return (
    <section className="hero" id="top">
      <div className="hero-media">
        <video
          ref={videoRef}
          className="hero-video"
          poster="/images/hero-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          tabIndex={-1}
        />
      </div>

      <div className="wrap hero-inner">
        <motion.div className="hero-kicker" {...enter(12, 0, 0.7)}>
          Christengemeinde Gottes Wort
        </motion.div>

        <motion.h1 className="headline" {...enter(26, 0.1, 0.9)}>
          Gemeinsam Glauben
          <br />
          Gemeinsam Wachsen
        </motion.h1>

        <motion.div className="hero-cta" {...enter(16, 0.25)}>
          <a href="#gottesdienst" className="btn-hero">
            Persönlich teilnehmen <span aria-hidden="true">→</span>
          </a>
          <a
            href="/api/live"
            className="btn-hero"
            target="_blank"
            rel="noopener noreferrer"
          >
            Online teilnehmen <span aria-hidden="true">→</span>
          </a>
        </motion.div>
      </div>

      <motion.div
        className="hero-strip"
        initial={reduced ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={
          reduced
            ? { duration: 0 }
            : { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const, delay: 0.5 }
        }
      >
        <div className="wrap hero-strip-inner">
          <div className="hero-strip-addr">Harpener Heide 9 · 44805 Bochum</div>
          <div className="hero-strip-facts">
            {STRIP.map((item) => (
              <div key={item.lbl}>
                <span className="num">{item.num}</span>
                <span className="lbl">{item.lbl}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
