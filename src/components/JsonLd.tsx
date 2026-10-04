import { EMAIL, INSTAGRAM_URL } from "@/lib/links";
import { translations } from "@/lib/i18n";

const SITE_URL = "https://gottes-wort-bochum.de";
const CHURCH_ID = `${SITE_URL}/#church`;

const de = translations.de;

// Wiederkehrende Termine: Wochentag, Beginn, Ende und Rhythmus (P1W = woechentlich)
const recurring = [
  { name: "Gottesdienst", day: "Sunday", start: "11:00", end: "13:00", every: "P1W" },
  { name: "Gebetsabend", day: "Friday", start: "19:00", every: "P1W" },
  { name: de.events.items.jugendtreff.title, day: "Saturday", start: "18:00", every: "P1W" },
  { name: de.events.items.teenieTreff.title, day: "Saturday", start: "14:00", every: "P2W" },
];

const place = {
  "@type": "Place",
  name: "Christengemeinde Gottes Wort Bochum",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Harpener Heide 9",
    postalCode: "44805",
    addressLocality: "Bochum",
    addressRegion: "Nordrhein-Westfalen",
    addressCountry: "DE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.50071,
    longitude: 7.25269,
  },
};

export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Church",
        "@id": CHURCH_ID,
        name: "Christengemeinde Gottes Wort Bochum",
        alternateName: "Gottes Wort Bochum",
        description: `${de.who.text} Gottesdienst sonntags um 11 Uhr auf Deutsch und Russisch, mit Kinderkirche, Teenie- und Jugendtreff.`,
        url: SITE_URL,
        email: EMAIL,
        telephone: "+49 1578 2986760",
        image: `${SITE_URL}/images/hero-poster.jpg`,
        logo: `${SITE_URL}/icon.svg`,
        address: place.address,
        geo: place.geo,
        hasMap: "https://www.google.com/maps/search/?api=1&query=Harpener+Heide+9%2C+44805+Bochum",
        areaServed: { "@type": "City", name: "Bochum" },
        knowsLanguage: ["de", "ru"],
        memberOf: {
          "@type": "Organization",
          name: "Bund Freikirchlicher Pfingstgemeinden (BFP)",
        },
        sameAs: [INSTAGRAM_URL],
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "https://schema.org/Sunday",
            opens: "11:00",
            closes: "13:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "https://schema.org/Friday",
            opens: "19:00",
            closes: "21:00",
          },
        ],
        event: recurring.map((e) => ({
          "@type": "Event",
          name: e.name,
          eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
          location: place,
          organizer: { "@id": CHURCH_ID },
          isAccessibleForFree: true,
          eventSchedule: {
            "@type": "Schedule",
            byDay: `https://schema.org/${e.day}`,
            startTime: e.start,
            ...(e.end && { endTime: e.end }),
            repeatFrequency: e.every,
            scheduleTimezone: "Europe/Berlin",
          },
        })),
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "Christengemeinde Gottes Wort Bochum",
        inLanguage: ["de", "ru"],
        publisher: { "@id": CHURCH_ID },
      },
      {
        "@type": "FAQPage",
        mainEntity: de.faq.items.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
