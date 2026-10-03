// Alle Ziel-URLs an einer Stelle (Briefing, Abschnitt 6). Werte in
// [eckigen Klammern] sind Platzhalter und muessen vor dem Go-live ersetzt werden.

/** Zentrale Gemeinde-/Welcome-Nummer fuer WhatsApp, international ohne "+", z. B. 49234… */
export const WHATSAPP_NUMBER = "[Nummer]";
export const EMAIL = "info@christusgemeinde-bo-nord.de";

// leitet serverseitig auf den aktuellen YouTube-Livestream weiter
export const LIVESTREAM_URL = "/api/live";
export const INSTAGRAM_URL = "https://www.instagram.com/gottes_wort.bochum/";
export const STORIES_HIGHLIGHT_URL = "[Instagram-Highlight „Bochumer Geschichten“]";
export const STORY_REEL_URL = "[Instagram-Reel-URL]";
export const EVENTBRITE_URL = "[Eventbrite-URL]";
export const ROUTE_URL =
  "https://www.google.com/maps/dir/?api=1&destination=Harpener+Heide+9%2C+44805+Bochum";

// zeigen noch auf die alte WordPress-Seite, bis /impressum und /datenschutz hier stehen
export const IMPRINT_URL = "https://christusgemeinde-bo-nord.de/impressum/";
export const PRIVACY_URL = "https://christusgemeinde-bo-nord.de/datenschutz/";

export const BANK = {
  recipient: "Gemeinschaft Freier Christusgemeinden e. V.",
  iban: "DE62452604750012636700",
  ibanDisplay: "DE62 4526 0475 0012 6367 00",
  bic: "GENODEM1BFG",
};

export function whatsappUrl(text?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

export const EMAIL_URL = `mailto:${EMAIL}`;
