"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import type { Dict } from "@/lib/i18n";
import { useT } from "./LanguageProvider";
import LanguageToggle from "./LanguageToggle";
import { useOpenGive } from "./Give";

// Absolute Pfade, damit die Links auch von Unterseiten aus funktionieren.
const NAV_LINKS: { href: string; key: keyof Dict["nav"] }[] = [
  { href: "/", key: "home" },
  { href: "/was-wir-glauben", key: "belief" },
];

// Stil der bisherigen Seite: ueber dem Hero-Video transparent mit heller
// Schrift, nach dem Scrollen hell hinterlegt. Unterseiten haben keinen
// dunklen Kopf, dort ist der Header von Anfang an hell.
export default function Header() {
  const t = useT();
  const openGive = useOpenGive();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const solid = scrolled || pathname !== "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const give = () => {
    setOpen(false);
    openGive();
  };

  return (
    <header
      className={`site-header${solid ? " solid" : ""}${open ? " menu-open" : ""}`}
    >
      <div className="wrap navrow">
        <Link href="/" className="brand">
          <svg className="brand-mark" viewBox="0 0 34 34" fill="none" aria-hidden="true">
            <path
              d="M17 2 L17 32 M8 11 L26 11"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
            />
          </svg>
          <span className="brand-text">
            <span className="brand-name">{t.brand.name}</span>
            <span className="brand-tag">{t.brand.tagline}</span>
          </span>
        </Link>

        <nav aria-label={t.nav.label} className="nav-main">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{t.nav[link.key]}</Link>
              </li>
            ))}
            <li>
              <button type="button" className="nav-give" onClick={give}>
                {t.nav.give}
              </button>
            </li>
          </ul>
        </nav>

        <div className="navrow-end">
          <LanguageToggle />
          <button
            type="button"
            className="nav-menu-btn"
            aria-label={open ? t.menu.close : t.menu.open}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <X size={22} strokeWidth={2} aria-hidden="true" />
            ) : (
              <Menu size={22} strokeWidth={2} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            className="mobile-menu"
            aria-label={t.nav.label}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <ul>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} onClick={() => setOpen(false)}>
                    {t.nav[link.key]}
                  </Link>
                </li>
              ))}
              <li>
                <button type="button" onClick={give}>
                  {t.nav.give}
                </button>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
