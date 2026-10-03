"use client";

import Link from "next/link";
import { INSTAGRAM_URL, PRIVACY_URL } from "@/lib/links";
import { useOpenGive } from "./Give";
import { useT } from "./LanguageProvider";

export default function Footer() {
  const t = useT();
  const openGive = useOpenGive();

  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <span className="brand-name">{t.brand.name}</span>
            <span>
              {t.brand.tagline}
              <br />
              Harpener Heide 9
              <br />
              44805 Bochum
            </span>
          </div>
          <nav aria-label={t.footer.discoverHeading}>
            <h2>{t.footer.discoverHeading}</h2>
            <ul>
              <li>
                <Link href="/#glaube">{t.nav.who}</Link>
              </li>
              <li>
                <Link href="/was-wir-glauben">{t.nav.belief}</Link>
              </li>
              <li>
                <Link href="/#termine">{t.nav.events}</Link>
              </li>
            </ul>
          </nav>
          <nav aria-label={t.footer.joinHeading}>
            <h2>{t.footer.joinHeading}</h2>
            <ul>
              <li>
                <button type="button" onClick={openGive}>
                  {t.nav.give}
                </button>
              </li>
              <li>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                  {t.footer.instagram}
                </a>
              </li>
            </ul>
          </nav>
          <nav aria-label={t.footer.legalHeading}>
            <h2>{t.footer.legalHeading}</h2>
            <ul>
              <li>
                <Link href="/impressum">{t.footer.imprint}</Link>
              </li>
              <li>
                <a href={PRIVACY_URL}>{t.footer.privacy}</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="foot-bottom">
          <span>{t.footer.copyright}</span>
          <span>{t.footer.bfp}</span>
        </div>
      </div>
    </footer>
  );
}
