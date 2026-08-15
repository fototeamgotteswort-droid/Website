import Reveal from "./Reveal";

export default function Programs() {
  return (
    <section className="programs" id="programme">
      <div className="wrap">
        <Reveal className="section-head">
          <div>
            <span className="eyebrow">Unter der Woche</span>
            <h2>Programme.</h2>
          </div>
          <p>Kleine Kreise, verschiedene Rhythmen — hier findest du deinen Platz.</p>
        </Reveal>
        <div className="program-grid">
          <Reveal className="program-card">
            <span className="mono">Gebet</span>
            <h3>Gebetsabend</h3>
            <span className="when">Jeden Freitag · 19:00–21:00</span>
            <p>
              Als Gemeinde wollen wir Gott näherkommen und gemeinsam
              füreinander im Gebet einstehen.
            </p>
          </Reveal>
          <Reveal className="program-card" delay={0.1}>
            <span className="mono">Kleingruppen</span>
            <h3>Bibelkreise</h3>
            <span className="when">Unterschiedliche Zeiten in der Woche</span>
            <p>
              Kleine Kreise an unterschiedlichen Orten teilen Interessen &amp;
              Alltag — und entdecken gemeinsam mehr über Gott.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
