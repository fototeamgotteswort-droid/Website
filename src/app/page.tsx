import Hero from "@/components/Hero";
import WhoWeAre from "@/components/WhoWeAre";
import Sunday from "@/components/Sunday";
import Stories from "@/components/Stories";
import Events from "@/components/Events";
import Visit from "@/components/Visit";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Hero />
      <WhoWeAre />
      <Sunday />
      <Stories />
      <Events />
      <Visit />
      <Faq />
    </>
  );
}
