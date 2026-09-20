"use client";

import { useT } from "./LanguageProvider";

export default function Footer() {
  const t = useT();

  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <h4>{t.footer.addressHeading}</h4>
            <ul>
              {t.footer.address.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4>{t.footer.discoverHeading}</h4>
            <ul>
              <li>
                <a href="#ueber-uns">{t.nav.about}</a>
              </li>
              <li>
                <a href="#gottesdienst">{t.nav.service}</a>
              </li>
              <li>
                <a href="/api/live" target="_blank" rel="noopener noreferrer">
                  {t.footer.livestream}
                </a>
              </li>
              <li>
                <a href="#kinder-jugend">{t.nav.kids}</a>
              </li>
              <li>
                <a href="#programme">{t.nav.programs}</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>{t.footer.joinHeading}</h4>
            <ul>
              <li>
                <a href="#geben">{t.nav.giving}</a>
              </li>
              <li>
                <a href="#andacht">{t.nav.andacht}</a>
              </li>
              <li>
                <a href="#kontakt">{t.nav.contact}</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>{t.footer.legalHeading}</h4>
            <ul>
              {/* zeigen noch auf die alte wordpress-seite — vor domain-umzug prüfen */}
              <li>
                <a href="https://christusgemeinde-bo-nord.de/impressum/">
                  {t.footer.imprint}
                </a>
              </li>
              <li>
                <a href="https://christusgemeinde-bo-nord.de/datenschutz/">
                  {t.footer.privacy}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span>{t.footer.copyright}</span>
          <span>{t.footer.meta}</span>
        </div>
      </div>
    </footer>
  );
}
