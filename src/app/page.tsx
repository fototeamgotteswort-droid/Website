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

export default function Home() {
  return (
    <>
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
