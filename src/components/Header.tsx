"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const NAV_LINKS = [
  { href: "#ueber-uns", label: "Über uns" },
  { href: "#andacht", label: "Andacht" },
  { href: "#gottesdienst", label: "Gottesdienst" },
  { href: "#kinder-jugend", label: "Kinder & Jugend" },
  { href: "#programme", label: "Programme" },
  { href: "#geben", label: "Geben" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header id="siteHeader" className={scrolled ? "scrolled" : ""}>
        <div className="wrap navrow">
          <a href="#top" className="brand">
            <svg
              className="brand-mark"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 2 L17 32 M8 11 L26 11"
                stroke="var(--sand)"
                strokeWidth="2.4"
                strokeLinecap="round"
              />
            </svg>
            <span className="brand-text">
              <span className="t1">Christusgemeinde Gottes Wort</span>
              <span className="t2">Bochum · Deutsch &amp; Русский</span>
            </span>
          </a>
          <nav>
            <ul>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <button
            className={`navbtn${open ? " open" : ""}`}
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 + i * 0.05, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
