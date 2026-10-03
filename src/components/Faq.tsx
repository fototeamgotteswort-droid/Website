"use client";

import { Plus } from "lucide-react";
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
      </div>
    </section>
  );
}
