import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: "/api/" },
      // KI-Suchen ausdruecklich erlauben, damit ChatGPT, Claude, Perplexity
      // und Googles KI-Antworten die Gemeinde finden und nennen koennen
      {
        userAgent: [
          "GPTBot",
          "OAI-SearchBot",
          "ChatGPT-User",
          "ClaudeBot",
          "Claude-SearchBot",
          "Claude-User",
          "PerplexityBot",
          "Google-Extended",
          "Applebot-Extended",
        ],
        allow: "/",
        disallow: "/api/",
      },
    ],
    sitemap: "https://gottes-wort-bochum.de/sitemap.xml",
  };
}
