"use client";

import Image from "next/image";
import { photos } from "@/lib/photos";
import { useT } from "./LanguageProvider";
import Reveal from "./Reveal";

// Fotos echter Gemeindemomente, in Reihenfolge des Tages.
const PHOTOS = [
  { src: photos.gottesdienst, position: "50% 45%" },
  { src: photos.mittagstisch, position: "28% center" },
  { src: photos.gemeinschaft, position: "45% center" },
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

        {/* Der Tag in drei Stationen, die Uhrzeit steht als Etikett auf dem Foto */}
        <ol className="day-line">
          {t.sunday.items.map((item, i) => (
            <li key={item.title} className="day-stop">
              <Reveal delay={i * 0.1} className="day-stop-inner">
                <div className="day-photo">
                  <span className="day-time">{item.time}</span>
                  <Image
                    src={PHOTOS[i].src}
                    placeholder="blur"
                    loading="eager"
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
