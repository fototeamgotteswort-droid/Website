"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const STRIP = [
  { num: "11:00", lbl: "Sonntags · DE & RU" },
  { num: "3–12", lbl: "Kinderarche" },
  { num: "A40/A43", lbl: "Eigener Parkplatz" },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  return (
    <section className="hero" id="top" ref={sectionRef}>
      <motion.div className="hero-photo" style={{ y }}>
        <Image
          src="/images/hero-beach.jpg"
          alt=""
          priority
          fill
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center 30%" }}
        />
      </motion.div>
      <div className="wrap hero-inner">
        <motion.div
          className="eyebrow on-dark"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          Harpener Heide 9 · 44805 Bochum
        </motion.div>
        <motion.h1
          className="headline"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          Herzlich willkommen.
        </motion.h1>
        <motion.div
          className="headline-sub"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          Gemeinde für die ganze Familie.
        </motion.div>
        <motion.p
          className="hero-text"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        >
          Eine deutsch-russischsprachige Gemeinde mitten in Bochum. Jeden Sonntag
          feiern wir gemeinsam Gottesdienst — komm wie du bist und bleib so lange
          du magst.
        </motion.p>
        <motion.div
          className="hero-cta"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        >
          <a href="#gottesdienst" className="btn btn-solid">
            Gottesdienst besuchen
          </a>
          <a href="#kontakt" className="btn btn-ghost">
            Anfahrt &amp; Kontakt
          </a>
        </motion.div>
        <div className="hero-strip">
          {STRIP.map((item, i) => (
            <motion.div
              key={item.lbl}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.55 + i * 0.1,
              }}
            >
              <div className="num">{item.num}</div>
              <div className="lbl">{item.lbl}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
