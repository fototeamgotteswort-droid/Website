import type { MetadataRoute } from "next";

const SITE_URL = "https://gottes-wort-bochum.de";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/was-wir-glauben`, changeFrequency: "yearly", priority: 0.8 },
  ];
}
