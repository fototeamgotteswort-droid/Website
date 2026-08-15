"use client";

import { useEffect, useState } from "react";
import posthog from "posthog-js";

const CONSENT_KEY = "cgw_analytics_consent";

let posthogLoaded = false;

function loadPostHog() {
  if (posthogLoaded) return;
  posthogLoaded = true;
  posthog.init("phc_vPeTHGfcN3yAzAucU9x765AUtfyiMv9mR8cmqWLS6toP", {
    api_host: "https://eu.i.posthog.com",
    person_profiles: "identified_only",
  });
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (consent === "granted") {
      loadPostHog();
    } else if (consent !== "denied") {
      queueMicrotask(() => setVisible(true));
    }

    const openSettings = () => setVisible(true);
    window.addEventListener("open-cookie-settings", openSettings);
    return () => window.removeEventListener("open-cookie-settings", openSettings);
  }, []);

  const accept = () => {
    localStorage.setItem(CONSENT_KEY, "granted");
    setVisible(false);
    loadPostHog();
  };

  const decline = () => {
    localStorage.setItem(CONSENT_KEY, "denied");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div id="cookieBanner" className="cookie-banner">
      <div className="cookie-banner-inner">
        <p>
          Wir nutzen PostHog (EU-Server), um zu sehen, wie die Website genutzt
          wird, und sie so besser zu machen. Dafür setzen wir Cookies. Mehr
          dazu in unserer{" "}
          <a
            href="https://christusgemeinde-bo-nord.de/datenschutz/"
            style={{ textDecoration: "underline" }}
          >
            Datenschutzerklärung
          </a>
          .
        </p>
        <div className="cookie-banner-actions">
          <button type="button" className="btn btn-ghost" onClick={decline}>
            Ablehnen
          </button>
          <button type="button" className="btn btn-solid" onClick={accept}>
            Akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}
