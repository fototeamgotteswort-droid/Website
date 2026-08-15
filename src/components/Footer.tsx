"use client";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <h4>Christusgemeinde Gottes Wort</h4>
            <ul>
              <li>Harpener Heide 9</li>
              <li>44805 Bochum</li>
            </ul>
          </div>
          <div>
            <h4>Entdecken</h4>
            <ul>
              <li>
                <a href="#ueber-uns">Über uns</a>
              </li>
              <li>
                <a href="#gottesdienst">Gottesdienst</a>
              </li>
              <li>
                <a href="#kinder-jugend">Kinder &amp; Jugend</a>
              </li>
              <li>
                <a href="#programme">Programme</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Mitmachen</h4>
            <ul>
              <li>
                <a href="#geben">Geben</a>
              </li>
              <li>
                <a href="#kontakt">Kontakt</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Rechtliches</h4>
            <ul>
              <li>
                <a href="https://christusgemeinde-bo-nord.de/impressum/">
                  Impressum
                </a>
              </li>
              <li>
                <a href="https://christusgemeinde-bo-nord.de/datenschutz/">
                  Datenschutz
                </a>
              </li>
              <li>
                <button
                  type="button"
                  className="cookie-settings-link"
                  onClick={() =>
                    window.dispatchEvent(new Event("open-cookie-settings"))
                  }
                >
                  Cookie-Einstellungen
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© Christusgemeinde Gottes Wort Bochum</span>
          <span>Neuer Website-Entwurf · in Arbeit</span>
        </div>
      </div>
    </footer>
  );
}
