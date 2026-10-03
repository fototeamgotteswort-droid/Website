"use client";

import Link from "next/link";
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

export default function Header() {
  const t = useT();
  const openGive = useOpenGive();
  const [open, setOpen] = useState(false);

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
    <header className="site-header">
      <div className="wrap navrow">
        <Link href="/" className="brand">
          <span className="brand-name">{t.brand.name}</span>
          <span className="brand-tag">{t.brand.tagline}</span>
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
          <LanguageToggle />
        </nav>

        <div className="navrow-end">
          <button
            type="button"
            className="icon-btn on-dark nav-menu-btn"
            aria-label={open ? t.menu.close : t.menu.open}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <X size={20} strokeWidth={2} aria-hidden="true" />
            ) : (
              <Menu size={20} strokeWidth={2} aria-hidden="true" />
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
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
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
            <LanguageToggle />
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
