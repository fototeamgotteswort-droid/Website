"use client";

import Image from "next/image";
import { useT } from "./LanguageProvider";
import Reveal from "./Reveal";

// Fotos echter Gemeindemomente, in Reihenfolge des Tages. Fuer "Gemeinschaft"
// fehlt noch ein Volleyball-Foto (Briefing 3.3), bis dahin das Gruppenbild.
const PHOTOS = [
  { src: "/images/img-2938.jpg", position: "center 40%" },
  { src: "/images/events/kleingruppen.jpg", position: "60% center" },
  { src: "/images/jugend-konferenz.jpg", position: "center 45%" },
];

export default function Sunday() {
  const t = useT();

  return (
    <section className="section section-mist" id="sonntag">
      <div className="wrap stack-xl">
        <Reveal className="section-head">
          <h2>{t.sunday.heading}</h2>
          <p className="lead">{t.sunday.text}</p>
        </Reveal>

        {/* Der Tag als Zeitleiste: eine durchgehende Linie verbindet die drei Stationen */}
        <ol className="day-line">
          {t.sunday.items.map((item, i) => (
            <li key={item.title} className="day-stop">
              <Reveal delay={i * 0.1} className="day-stop-inner">
                <span className="day-time">{item.time}</span>
                <div className="day-photo">
                  <Image
                    src={PHOTOS[i].src}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 760px) 90vw, 400px"
                    style={{ objectFit: "cover", objectPosition: PHOTOS[i].position }}
                  />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
