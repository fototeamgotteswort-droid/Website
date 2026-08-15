import Reveal from "./Reveal";

const BELIEFS = [
  {
    num: "01",
    title: "Zweisprachig von der Bühne",
    text: "Predigt und Lobpreis werden live ins Deutsche oder Russische übersetzt — niemand bleibt außen vor.",
  },
  {
    num: "02",
    title: "Raum für alle Generationen",
    text: "Von der Kinderarche bis zur Jugendarbeit hat jede Altersgruppe ihren eigenen Platz.",
  },
  {
    num: "03",
    title: "Getragen von Freiwilligen",
    text: "Unsere Gemeinde finanziert und gestaltet sich durch Menschen, die anpacken und geben.",
  },
];

const CREED = [
  "Wir glauben an die göttliche Inspiration der Bibel als unfehlbares Wort Gottes und höchste Autorität in Fragen des Glaubens und Lebens.",
  "Wir glauben an den einen ewigen Gott in drei Personen — Vater, Sohn und Heiliger Geist — als Schöpfer aller sichtbaren und unsichtbaren Welten.",
  "Wir glauben, dass Jesus Christus, Gottes Sohn, wahrer Gott und wahrer Mensch ist und als Einziger ohne Sünde lebte.",
  "Wir glauben, dass der Mensch mit freiem Willen geschaffen wurde und allein durch den Glauben an Jesus Christus als Herrn und Retter von der Sünde erlöst wird — durch sein stellvertretendes Sühneopfer am Kreuz.",
  "Wir glauben an die Notwendigkeit zweier Sakramente: die Wassertaufe als Zeichen des Heils durch vollständiges Untertauchen nach persönlicher Entscheidung, und das Abendmahl, das Tod und Auferstehung Jesu verkündet.",
  "Wir glauben, dass die Gemeinde als Leib Christi der Ort der Auferbauung und des gegenseitigen Dienstes ist, bevollmächtigt durch die Taufe des Heiligen Geistes.",
  "Wir glauben an den Missionsauftrag aus Matthäus 28 — Zeugen der Frohen Botschaft zu sein und Jünger zu machen, ausgestattet mit individuellen Geistesgaben.",
  "Wir glauben, dass Heiligung in der Verantwortung jedes Gläubigen liegt, getragen durch die Überführung des Heiligen Geistes und die Reinigung durch das Opfer Jesu.",
  "Wir glauben, dass Jesus Christus wiederkommen wird — den Erretteten zum ewigen Leben, den Ungläubigen zum ewigen Gericht.",
];

export default function About() {
  return (
    <section className="about" id="ueber-uns">
      <div className="wrap about-grid">
        <Reveal className="about-text">
          <span className="eyebrow">Über uns</span>
          <h2 style={{ fontSize: "clamp(1.9rem,4.4vw,2.7rem)", marginBottom: 26 }}>
            Wer wir sind.
          </h2>
          <p>
            Wir sind eine evangelisch-pfingstliche Freikirche auf biblischer
            Grundlage — deutsch-russischsprachig, mitten in Bochum.{" "}
            <strong>
              Wir feiern gemeinsam den Glauben, leben ihn im Alltag und pflegen
              echte, freundschaftliche Beziehungen.
            </strong>
          </p>
          <p>
            Als eingetragener Verein gehören wir zur Gemeinschaft Freier
            Christusgemeinden und zum Bund Freikirchlicher Pfingstgemeinden
            (KdöR).
          </p>
          <details className="creed">
            <summary>Unser Glaubensbekenntnis lesen</summary>
            <div className="creed-body">
              {CREED.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </details>
        </Reveal>
        <Reveal delay={0.1}>
          <ul className="belief-list">
            {BELIEFS.map((b) => (
              <li key={b.num}>
                <span className="bnum">{b.num}</span>
                <div>
                  <h3>{b.title}</h3>
                  <p>{b.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
