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

const SITE_URL = "https://gottes-wort-bochum.de";
const SITE_NAME = "Christengemeinde Gottes Wort Bochum";
const SITE_TITLE = "Freikirche in Bochum · Christengemeinde Gottes Wort";
const SITE_DESCRIPTION =
  "Deutsch-russische Freikirche in Bochum für alle Generationen. Gottesdienst sonntags um 11 Uhr, mit Kinderkirche, Teenie- und Jugendtreff. Harpener Heide 9, herzlich willkommen!";

// Beim Neuladen soll die Seite immer oben beginnen. Der Browser wuerde sonst
// die alte Scrollposition wiederherstellen oder zu einem #anker springen.
// Laeuft im <head>, also bevor der Browser scrollt. Danach gilt fuer Vor und
// Zurueck wieder das normale Verhalten.
const SCROLL_TOP_ON_RELOAD = `(function(){try{
var nav=performance.getEntriesByType("navigation")[0];
if(!nav||nav.type!=="reload")return;
history.scrollRestoration="manual";
if(location.hash)history.replaceState(history.state,"",location.pathname+location.search);
addEventListener("load",function(){
window.scrollTo({top:0,behavior:"instant"});
setTimeout(function(){history.scrollRestoration="auto";},0);
});
}catch(e){}})();`;

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
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: [
    "Freikirche Bochum",
    "Gemeinde Bochum",
    "Gottesdienst Bochum",
    "russische Gemeinde Bochum",
    "русская церковь Бохум",
    "Pfingstgemeinde Bochum",
    "Kinderkirche Bochum",
    "Jugendgottesdienst Bochum",
  ],
  openGraph: {
    type: "website",
    locale: "de_DE",
    alternateLocale: ["ru_RU"],
    siteName: SITE_NAME,
    title: SITE_TITLE,
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
      <head>
        <script dangerouslySetInnerHTML={{ __html: SCROLL_TOP_ON_RELOAD }} />
      </head>
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
