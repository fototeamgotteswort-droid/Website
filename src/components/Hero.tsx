"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useT } from "./LanguageProvider";

export default function Hero() {
  const t = useT();
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
        <motion.h1 className="hero-title" {...enter(26, 0.05, 0.9)}>
          {t.hero.headline[0]}
          <br />
          {t.hero.headline[1]}
        </motion.h1>

        <motion.div className="btn-row" {...enter(16, 0.2)}>
          <a href="#besuch" className="btn btn-light">
            {t.hero.ctaOnsite} <span aria-hidden="true">→</span>
          </a>
        </motion.div>
      </div>

      {/* Leiste im Stil der bisherigen Seite: volle Breite am unteren Rand */}
      <motion.div className="hero-strip" {...enter(0, 0.4)}>
        <ul className="wrap hero-strip-inner">
          {t.hero.strip.map((item) => (
            <li key={item.strong}>
              <span className="num">{item.strong}</span>
              <span className="lbl">{item.text}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
