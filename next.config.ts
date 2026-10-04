import type { NextConfig } from "next";
import { PRIVACY_URL } from "./src/lib/links";

const nextConfig: NextConfig = {
  async redirects() {
    // die Datenschutzerklaerung pflegen wir bei iubenda;
    // /datenschutzerklaerung ist der Pfad der bisherigen Seite
    return ["/datenschutz", "/datenschutzerklaerung"].map((source) => ({
      source,
      destination: PRIVACY_URL,
      permanent: false,
    }));
  },
};

export default nextConfig;
