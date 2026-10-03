import type { Metadata } from "next";
import BeliefPage from "@/components/BeliefPage";

export const metadata: Metadata = {
  title: "Was wir glauben · Christengemeinde Gottes Wort Bochum",
  description:
    "Die Bibel ist das Fundament unseres Glaubens. Deshalb halten wir an diesen zehn Grundsätzen fest.",
  alternates: { canonical: "/was-wir-glauben" },
};

export default function WasWirGlauben() {
  return <BeliefPage />;
}
