import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Andacht from "@/components/Andacht";
import Service from "@/components/Service";
import Kids from "@/components/Kids";
import Programs from "@/components/Programs";
import Giving from "@/components/Giving";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import JsonLd from "@/components/JsonLd";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Header />
      <Hero />
      <About />
      <Andacht />
      <Service />
      <Kids />
      <Programs />
      <Giving />
      <Contact />
      <Footer />
      <CookieConsent />
    </>
  );
}
