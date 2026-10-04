import type { Metadata } from "next";
import BeliefPage from "@/components/BeliefPage";

export const metadata: Metadata = {
  title: "Was wir glauben · Christengemeinde Gottes Wort Bochum",
  description:
    "Das Glaubensbekenntnis der Christengemeinde Gottes Wort, einer Freikirche in Bochum: zehn Grundsätze zu Bibel, Jesus Christus, Heiligem Geist, Taufe und Gemeinde.",
  alternates: { canonical: "/was-wir-glauben" },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "Christengemeinde Gottes Wort Bochum",
    title: "Was wir glauben · Christengemeinde Gottes Wort Bochum",
    description:
      "Die Bibel ist das Fundament unseres Glaubens. Deshalb halten wir an diesen zehn Grundsätzen fest.",
    url: "/was-wir-glauben",
    images: [{ url: "/images/hero-poster.jpg", width: 1600, height: 900 }],
  },
};

export default function WasWirGlauben() {
  return <BeliefPage />;
}
