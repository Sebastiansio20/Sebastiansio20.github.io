import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Services from "@/components/Services";
import Approach from "@/components/Approach";
import Work from "@/components/Work";
import WhySiordia from "@/components/WhySiordia";
import Technology from "@/components/Technology";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Intro />
      <Services />
      <Approach />
      <Work />
      <WhySiordia />
      <Technology />
      <CTA />
      <Contact />
    </main>
  );
}
