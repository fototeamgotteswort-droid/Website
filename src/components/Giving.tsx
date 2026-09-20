"use client";

import CopyField from "./CopyField";
import Reveal from "./Reveal";
import { useT } from "./LanguageProvider";

export default function Giving() {
  const t = useT();

  return (
    <section className="giving" id="geben">
      <div className="wrap">
        <Reveal>
          <span className="eyebrow on-dark">{t.giving.eyebrow}</span>
          <h2>
            {t.giving.heading[0]}
            <br />
            {t.giving.heading[1]}
          </h2>
          <p>{t.giving.text}</p>
          <div style={{ marginTop: 30 }}>
            <a
              href={`mailto:info@christusgemeinde-bo-nord.de?subject=${encodeURIComponent(
                t.giving.mailSubject,
              )}`}
              className="btn btn-solid"
            >
              {t.giving.cta}
            </a>
          </div>
        </Reveal>
        <Reveal className="giving-box" delay={0.1}>
          <span className="mono">{t.giving.bankLabel}</span>
          <dl>
            <div>
              <dt>{t.giving.recipientLabel}</dt>
              <dd>{t.giving.recipient}</dd>
            </div>
            <div>
              <dt>IBAN</dt>
              <dd>
                <CopyField
                  value="DE62 4526 0475 0012 6367 00"
                  copyValue="DE62452604750012636700"
                />
              </dd>
            </div>
            <div>
              <dt>BIC</dt>
              <dd>
                <CopyField value="GENODEM1BFG" />
              </dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
