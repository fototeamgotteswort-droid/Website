"use client";

import { MessageCircle, Phone, Plus } from "lucide-react";
import { PHONE_URL, whatsappUrl } from "@/lib/links";
import { useT } from "./LanguageProvider";
import Reveal from "./Reveal";

export default function Faq() {
  const t = useT();

  return (
    <section className="section section-shell" id="faq">
      <div className="wrap stack-lg">
        <Reveal>
          <h2>{t.faq.heading}</h2>
        </Reveal>

        <div className="faq-list">
          {t.faq.items.map((item, i) => (
            // Gleicher "name" macht daraus ein Akkordeon: der Browser schliesst
            // die anderen Fragen, sobald eine geoeffnet wird. onToggle macht
            // dasselbe fuer aeltere Browser ohne diese Funktion.
            <details
              key={item.q}
              name="faq"
              open={i === 0}
              onToggle={(event) => {
                const opened = event.currentTarget;
                if (!opened.open) return;
                opened.parentElement
                  ?.querySelectorAll("details[open]")
                  .forEach((other) => {
                    if (other !== opened) other.removeAttribute("open");
                  });
              }}
            >
              <summary>
                {item.q}
                <Plus
                  className="faq-icon"
                  size={20}
                  strokeWidth={2.2}
                  aria-hidden="true"
                />
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>

        <div className="contact-box">
          <div>
            <h3>{t.faq.contactHeading}</h3>
            <p>{t.faq.contactText}</p>
          </div>
          <div className="btn-row">
            <a
              href={whatsappUrl()}
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={20} strokeWidth={1.8} aria-hidden="true" />
              {t.faq.whatsapp}
            </a>
            <a href={PHONE_URL} className="btn btn-outline">
              <Phone size={20} strokeWidth={1.8} aria-hidden="true" />
              {t.faq.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
