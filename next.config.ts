import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // Pfad der Datenschutzerklaerung auf der bisherigen Seite
    return [{ source: "/datenschutzerklaerung", destination: "/datenschutz", permanent: true }];
  },
};

export default nextConfig;
