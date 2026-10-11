import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // AVIF ist meist deutlich kleiner als WebP; aeltere Browser bekommen WebP
    formats: ["image/avif", "image/webp"],
    // Fotos aendern sich selten: optimierte Fassungen 31 Tage zwischenspeichern
    minimumCacheTTL: 60 * 60 * 24 * 31,
  },
  async redirects() {
    // Pfad der Datenschutzerklaerung auf der bisherigen Seite
    return [{ source: "/datenschutzerklaerung", destination: "/datenschutz", permanent: true }];
  },
};

export default nextConfig;
