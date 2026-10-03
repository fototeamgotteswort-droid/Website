import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import MotionProvider from "@/components/MotionProvider";
import LanguageProvider from "@/components/LanguageProvider";
import SkipLink from "@/components/SkipLink";
import GiveProvider from "@/components/Give";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ScrollToTopOnNavigate } from "@/components/PageLink";
import "./globals.css";

const SITE_URL = "https://christusgemeinde-bo-nord.de";
const SITE_NAME = "Christengemeinde Gottes Wort Bochum";
const SITE_DESCRIPTION =
  "Christengemeinde Gottes Wort Bochum: eine deutsch-russische Freikirche für alle Generationen. Sonntags 11:00, Harpener Heide 9.";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
});

const montserrat = Montserrat({
  variable: "--font-body",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: "/",
    images: [
      {
        url: "/images/hero-poster.jpg",
        width: 1600,
        height: 900,
        alt: "Christengemeinde Gottes Wort Bochum",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="de"
      className={`${playfair.variable} ${montserrat.variable}`}
    >
      <body>
        <LanguageProvider>
          <SkipLink />
          <MotionProvider>
            {/* Header und Footer im Layout: so beginnt jede Seite mit ihrem
                Inhalt, und Next scrollt beim Seitenwechsel nach oben */}
            <GiveProvider>
              <ScrollToTopOnNavigate />
              <Header />
              <main id="main">{children}</main>
              <Footer />
            </GiveProvider>
          </MotionProvider>
        </LanguageProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
