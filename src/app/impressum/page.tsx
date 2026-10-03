import type { Metadata } from "next";
import { EMAIL, EMAIL_URL } from "@/lib/links";

export const metadata: Metadata = {
  title: "Impressum · Christengemeinde Gottes Wort Bochum",
  alternates: { canonical: "/impressum" },
  robots: { index: false, follow: true },
};

// Angaben von der bisherigen Seite (christusgemeinde-bo-nord.de/impressum),
// Rechtsgrundlage auf das Digitale-Dienste-Gesetz (DDG) aktualisiert.
export default function Impressum() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="section-head">
            <h1>Impressum</h1>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="wrap">
          <div className="legal">
          <h2>Angaben gemäß § 5 DDG</h2>
          <p>
            Christengemeinde Gottes Wort e. V.
            <br />
            Harpener Heide 9
            <br />
            44805 Bochum
          </p>

          <h3>Vertreten durch</h3>
          <p>
            Ivan Stukert, Tel.: <a href="tel:+4917663304601">+49 176 63304601</a>
            <br />
            Dmitrij Derxen, Tel.: <a href="tel:+4915782986760">+49 157 82986760</a>
          </p>

          <h3>Kontakt</h3>
          <p>
            E-Mail: <a href={EMAIL_URL}>{EMAIL}</a>
          </p>

          <h3>Registereintrag</h3>
          <p>
            Eintragung im Vereinsregister
            <br />
            Registergericht: Amtsgericht Bochum
            <br />
            Registernummer: VR 4309
          </p>

          <h3>Bankverbindung</h3>
          <p>
            IBAN: DE62 4526 0475 0012 6367 00
            <br />
            BIC: GENODEM1BFG
          </p>

          <h2>Haftungsausschluss</h2>

          <h3>Haftung für Inhalte</h3>
          <p>
            Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach
            den allgemeinen Gesetzen verantwortlich. Wir sind jedoch nicht
            verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
            überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
            Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der
            Nutzung von Informationen nach den allgemeinen Gesetzen bleiben
            hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
            Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
            Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese
            Inhalte umgehend entfernen.
          </p>

          <h3>Haftung für Links</h3>
          <p>
            Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren
            Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden
            Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
            Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
            verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
            Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte
            waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente
            inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
            Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden
            von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
          </p>

          <h3>Urheberrecht</h3>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
            Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
            Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
            Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
            jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite
            sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
            Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
            wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden
            Inhalte Dritter als solche gekennzeichnet. Solltest du trotzdem auf
            eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
            entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden
            wir derartige Inhalte umgehend entfernen.
          </p>
          </div>
        </div>
      </section>
    </>
  );
}
