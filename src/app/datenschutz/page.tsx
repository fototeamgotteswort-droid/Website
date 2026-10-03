import type { Metadata } from "next";
import Link from "next/link";
import { EMAIL, EMAIL_URL } from "@/lib/links";

export const metadata: Metadata = {
  title: "Datenschutz · Christengemeinde Gottes Wort Bochum",
  alternates: { canonical: "/datenschutz" },
  robots: { index: false, follow: true },
};

// ENTWURF: beschreibt, was diese Website technisch tut (Stand Oktober 2026).
// Die alte Seite enthielt nur die unausgefuellte WordPress-Vorlage. Vor dem
// Go-live rechtlich pruefen lassen oder durch einen Generator-Text ersetzen.
export default function Datenschutz() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="section-head">
            <h1>Datenschutz</h1>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="wrap">
          <div className="legal">
            <p className="legal-note">
              [Entwurf: Diese Datenschutzerklärung muss vor dem Go-live rechtlich
              geprüft werden.]
            </p>

            <h2>Verantwortlich</h2>
            <p>
              Christengemeinde Gottes Wort e. V.
              <br />
              Harpener Heide 9
              <br />
              44805 Bochum
              <br />
              E-Mail: <a href={EMAIL_URL}>{EMAIL}</a>
            </p>
            <p>
              Weitere Angaben findest du im <Link href="/impressum">Impressum</Link>.
            </p>

            <h2>Das Wichtigste in Kürze</h2>
            <p>
              Du kannst unsere Website besuchen, ohne Angaben über dich zu machen.
              Wir setzen keine Cookies, nutzen kein Kontaktformular und binden
              keine Inhalte ein, die beim Laden der Seite Daten an Dritte
              schicken. Schriften und Kartenausschnitt liegen auf unserem eigenen
              Server. Daten fließen an andere Anbieter erst, wenn du selbst auf
              einen Link zu ihnen klickst.
            </p>

            <h2>Hosting und Server-Logfiles</h2>
            <p>
              Unsere Website wird bei Vercel Inc., 440 N Barranca Ave #4133,
              Covina, CA 91723, USA, betrieben. Beim Aufruf der Seite verarbeitet
              Vercel technisch notwendige Daten, die dein Browser automatisch
              übermittelt: IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene
              Adresse, Referrer-URL sowie Browser und Betriebssystem. Das ist nötig,
              um die Website auszuliefern und vor Missbrauch zu schützen
              (Art. 6 Abs. 1 lit. f DSGVO).
            </p>
            <p>
              Dabei können Daten in die USA übertragen werden. [Bitte prüfen: Grundlage
              der Übermittlung, z. B. EU-US Data Privacy Framework oder
              Standardvertragsklauseln, und Auftragsverarbeitungsvertrag mit Vercel.]
            </p>

            <h2>Reichweitenmessung</h2>
            <p>
              Um zu verstehen, wie unsere Website genutzt wird und wie schnell sie
              lädt, verwenden wir Vercel Web Analytics und Vercel Speed Insights.
              Beide arbeiten ohne Cookies und erstellen keine Profile über mehrere
              Besuche hinweg. Erfasst werden zusammengefasste Angaben wie
              aufgerufene Seiten, Herkunftsseite, Gerätetyp, Land und Ladezeiten.
              Rechtsgrundlage ist unser berechtigtes Interesse an einer
              funktionierenden und gut nutzbaren Website (Art. 6 Abs. 1 lit. f
              DSGVO).
            </p>

            <h2>Speicherung in deinem Browser</h2>
            <p>
              Wenn du die Sprache zwischen Deutsch und Russisch wechselst, merkt
              sich dein Browser diese Auswahl im lokalen Speicher (localStorage),
              damit die Seite beim nächsten Besuch in deiner Sprache erscheint.
              Diese Angabe verlässt deinen Browser nicht und du kannst sie
              jederzeit über die Browsereinstellungen löschen. Sie ist für die von
              dir gewünschte Funktion erforderlich (§ 25 Abs. 2 TDDDG).
            </p>

            <h2>Links zu anderen Anbietern</h2>
            <p>
              Unsere Website enthält Links, zum Beispiel zur Routenplanung in
              Google Maps, zu unserem Instagram-Profil und zur Anmeldung bei
              Eventbrite. Erst wenn du einen solchen Link anklickst, wird die Seite
              des jeweiligen Anbieters geöffnet und dieser erhält Daten von dir.
              Dafür gelten die Datenschutzhinweise des jeweiligen Anbieters.
            </p>

            <h2>Spenden</h2>
            <p>
              Bankverbindung und GiroCode im Spendenfenster werden direkt in
              deinem Browser angezeigt. Wir erhalten dabei keine Daten von dir.
              Eine Spende läuft ausschließlich über deine Bank.
            </p>

            <h2>Kontakt per E-Mail</h2>
            <p>
              Wenn du uns eine E-Mail schreibst, verarbeiten wir deine Angaben, um
              deine Anfrage zu beantworten (Art. 6 Abs. 1 lit. b und f DSGVO). Wir
              löschen sie, sobald sie dafür nicht mehr gebraucht werden und keine
              gesetzlichen Aufbewahrungspflichten bestehen.
            </p>

            <h2>Deine Rechte</h2>
            <p>
              Du hast das Recht auf Auskunft über deine bei uns gespeicherten
              Daten, auf Berichtigung, Löschung und Einschränkung der Verarbeitung,
              auf Datenübertragbarkeit sowie das Recht, einer Verarbeitung auf
              Grundlage von Art. 6 Abs. 1 lit. f DSGVO zu widersprechen
              (Art. 15 bis 21 DSGVO). Schreib uns dazu einfach eine E-Mail.
            </p>
            <p>
              Außerdem kannst du dich bei einer Datenschutz-Aufsichtsbehörde
              beschweren, zum Beispiel bei der Landesbeauftragten für Datenschutz
              und Informationsfreiheit Nordrhein-Westfalen in Düsseldorf.
            </p>

            <p className="legal-meta">Stand: Oktober 2026</p>
          </div>
        </div>
      </section>
    </>
  );
}
