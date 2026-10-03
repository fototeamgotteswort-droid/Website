"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";
import { useT } from "./LanguageProvider";

// Die Karte laedt erst nach Klick, damit ohne Zustimmung keine Daten an
// OpenStreetMap gehen.
export default function MapEmbed() {
  const t = useT();
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  return (
    <div className="map-shell">
      {isMapLoaded ? (
        // koordinaten grob, bei bedarf nachjustieren
        <iframe
          className="map-frame"
          src="https://www.openstreetmap.org/export/embed.html?bbox=7.2680%2C51.4930%2C7.2880%2C51.5030&layer=mapnik&marker=51.4980%2C7.2780"
          title={t.map.title}
          loading="lazy"
        />
      ) : (
        <div className="map-consent">
          <MapPin size={40} strokeWidth={1.5} aria-hidden="true" />
          <p className="map-address">{t.map.address}</p>
          <p className="map-hint">{t.map.hint}</p>
          <button
            type="button"
            className="btn btn-outline btn-sm"
            onClick={() => setIsMapLoaded(true)}
          >
            {t.map.load}
          </button>
        </div>
      )}
    </div>
  );
}
