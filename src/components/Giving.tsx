import Reveal from "./Reveal";

export default function Giving() {
  return (
    <section className="giving" id="geben">
      <div className="wrap">
        <Reveal>
          <span className="eyebrow on-dark">Geben</span>
          <h2>
            Möglichmacher
            <br />
            werden.
          </h2>
          <p>
            Unsere Gemeinde finanziert sich ausschließlich durch die
            Großzügigkeit von Menschen wie dir. Auf Wunsch stellen wir dir
            gerne eine Spendenbescheinigung aus.
          </p>
          <div style={{ marginTop: 30 }}>
            <a
              href="mailto:info@christusgemeinde-bo-nord.de?subject=Spendenbescheinigung"
              className="btn btn-solid"
            >
              Jetzt unterstützen
            </a>
          </div>
        </Reveal>
        <Reveal className="giving-box" delay={0.1}>
          <span className="mono">Bankverbindung</span>
          <dl>
            <div>
              <dt>Empfänger</dt>
              <dd>Gemeinschaft Freier Christusgemeinden e. V.</dd>
            </div>
            <div>
              <dt>IBAN</dt>
              <dd style={{ fontFamily: "var(--mono)", fontSize: "0.92rem" }}>
                DE62 4526 0475 0012 6367 00
              </dd>
            </div>
            <div>
              <dt>BIC</dt>
              <dd style={{ fontFamily: "var(--mono)", fontSize: "0.92rem" }}>
                GENODEM1BFG
              </dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
