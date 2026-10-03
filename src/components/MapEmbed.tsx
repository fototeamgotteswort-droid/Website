"use client";

import { ArrowUpRight, Church } from "lucide-react";
import { ROUTE_URL } from "@/lib/links";
import { useT } from "./LanguageProvider";

// 3x3 Kacheln (Zoom 16) von tile.openstreetmap.org, lokal unter
// public/images/karte gespeichert. Mitte: Harpener Heide 9 (51.50071, 7.25269).
const TILES = [0, 1, 2].flatMap((row) =>
  [0, 1, 2].map((col) => `/images/karte/${col}-${row}.png`),
);

export default function MapEmbed() {
  const t = useT();

  return (
    <a
      href={ROUTE_URL}
      className="map-shell"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.map.label}
    >
      <span className="map-tiles" aria-hidden="true">
        {TILES.map((src) => (
          <span key={src} style={{ backgroundImage: `url(${src})` }} />
        ))}
      </span>
      <span className="map-pin" aria-hidden="true">
        <Church size={20} strokeWidth={2} />
      </span>
      <span className="map-label" aria-hidden="true">
        <strong>{t.map.address}</strong>
        <span>
          {t.map.open}
          <ArrowUpRight size={16} strokeWidth={2} />
        </span>
      </span>
      <small className="map-credit">{t.map.credit}</small>
    </a>
  );
}
