"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import { useT } from "./LanguageProvider";

export default function Andacht() {
  const t = useT();

  return (
    <section className="andacht" id="andacht">
      <div className="andacht-photo">
        <Image
          src="/images/andacht-palmsonntag.png"
          alt={t.andacht.imageAlt}
          width={1600}
          height={1100}
          sizes="100vw"
          loading="lazy"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <Reveal className="wrap andacht-inner" style={{ color: "var(--shell)" }}>
        <span className="eyebrow on-dark">{t.andacht.eyebrow}</span>
        <h2>{t.andacht.heading}</h2>
        <p className="andacht-text">{t.andacht.text}</p>
      </Reveal>
    </section>
  );
}
