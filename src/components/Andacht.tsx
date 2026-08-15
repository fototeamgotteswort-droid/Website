import Image from "next/image";
import Reveal from "./Reveal";

export default function Andacht() {
  return (
    <section className="andacht" id="andacht">
      <div className="andacht-photo">
        <Image
          src="/images/andacht-palmsonntag.png"
          alt="Illustration: Jesus reitet auf einem Esel nach Jerusalem, im Hintergrund ein Kreuz auf einem Hügel"
          width={1600}
          height={1100}
          loading="lazy"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <Reveal className="wrap andacht-inner" style={{ color: "var(--shell)" }}>
        <span className="eyebrow on-dark">Andacht</span>
        <h2>Gefeiert — und doch für uns ans Kreuz gegangen.</h2>
        <p className="andacht-text">
          An Palmsonntag zog Jesus auf einem Esel in Jerusalem ein — nicht mit
          Macht, sondern in Demut. Die Menge feierte ihn. Wenige Tage später
          ging er für uns ans Kreuz. Deshalb feiern wir ihn: nicht weil er
          herrschte, sondern weil er sich hingab.
        </p>
      </Reveal>
    </section>
  );
}
