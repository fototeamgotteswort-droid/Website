"use client";

import { Car, MapPin, MonitorPlay, TrainFront } from "lucide-react";
import { LIVESTREAM_URL, ROUTE_URL } from "@/lib/links";
import { useT } from "./LanguageProvider";
import MapEmbed from "./MapEmbed";
import Reveal from "./Reveal";

export default function Visit() {
  const t = useT();

  return (
    <section className="section section-white" id="besuch">
      <div className="wrap visit">
        <Reveal className="visit-body">
          <h2>{t.visit.heading}</h2>
          <p className="lead">{t.visit.text}</p>

          <ul className="icon-list">
            <li>
              <MapPin size={22} strokeWidth={1.8} aria-hidden="true" />
              <span>
                <strong>{t.visit.address}</strong>
                <br />
                {t.visit.time}
              </span>
            </li>
            <li>
              <Car size={22} strokeWidth={1.8} aria-hidden="true" />
              <span>
                <strong>{t.visit.carLabel}</strong>
                <br />
                {t.visit.carText}
              </span>
            </li>
            <li>
              <TrainFront size={22} strokeWidth={1.8} aria-hidden="true" />
              <span>
                <strong>{t.visit.transitLabel}</strong>
                <br />
                {t.visit.transitText}
              </span>
            </li>
          </ul>

          <div className="btn-row">
            <a
              href={ROUTE_URL}
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.visit.ctaRoute} <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="info-box">
            <MonitorPlay size={26} strokeWidth={1.8} aria-hidden="true" />
            <p>
              <strong>{t.visit.onlineStrong}</strong> {t.visit.onlineText}{" "}
              <a href={LIVESTREAM_URL} target="_blank" rel="noopener noreferrer">
                {t.visit.onlineLink}
              </a>
            </p>
          </div>
        </Reveal>

        <MapEmbed />
      </div>
    </section>
  );
}
