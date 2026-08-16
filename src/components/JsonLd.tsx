export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Church",
    name: "Christusgemeinde Gottes Wort Bochum",
    url: "https://christusgemeinde-bo-nord.de",
    email: "info@christusgemeinde-bo-nord.de",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Harpener Heide 9",
      postalCode: "44805",
      addressLocality: "Bochum",
      addressCountry: "DE",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "https://schema.org/Sunday",
      opens: "11:00",
    },
    knowsLanguage: ["de", "ru"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
