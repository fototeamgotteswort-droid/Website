"use client";

import { useState } from "react";

const ROUTE_URL =
  "https://www.google.com/maps/dir/?api=1&destination=Harpener+Heide+9%2C+44805+Bochum";

export default function MapEmbed() {
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  if (isMapLoaded) {
    return (
      <div>
        <div className="map-shell">
          {/* koordinaten grob, bei bedarf nachjustieren */}
          <iframe
            className="map-frame"
            src="https://www.openstreetmap.org/export/embed.html?bbox=7.2680%2C51.4930%2C7.2880%2C51.5030&layer=mapnik&marker=51.4980%2C7.2780"
            title="Karte: Harpener Heide 9, 44805 Bochum"
            loading="lazy"
          />
        </div>
        <div className="map-actions">
          <a
            href={ROUTE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-solid"
          >
            Route planen
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="map-shell">
      <div>
        <div className="pin" />
        <p className="mono">Harpener Heide 9 · 44805 Bochum</p>
        <p className="map-hint">
          Beim Laden der Karte werden Daten an OpenStreetMap übertragen.
        </p>
        <div className="map-actions">
          <button
            type="button"
            className="btn btn-ghost on-light"
            onClick={() => setIsMapLoaded(true)}
          >
            Karte laden
          </button>
          <a
            href={ROUTE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-solid"
          >
            Route planen
          </a>
        </div>
      </div>
    </div>
  );
}
