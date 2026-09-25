import { useReveal } from "@/hooks/useReveal";
import { usePageMeta } from "@/hooks/usePageMeta";
import { useScrollToHash } from "@/hooks/useScrollToHash";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { TrustBar } from "@/components/site/TrustBar";
import { Services } from "@/components/site/Services";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { EliteSkincare } from "@/components/site/EliteSkincare";
import { BodyContour } from "@/components/site/BodyContour";
import { HowItWorks } from "@/components/site/HowItWorks";
import { About } from "@/components/site/About";
import { InstagramFeed } from "@/components/site/InstagramFeed";
import { BookingCTA } from "@/components/site/BookingCTA";
import { Footer } from "@/components/site/Footer";

const metaCopy = {
  pt: {
    title: "The Beauty of Brazil Aesthetics SPA | Pembroke Pines, FL",
    description: "Tratamentos de elite para pele e contorno corporal em Pembroke Pines, FL. Viva a experiência definitiva do brilho brasileiro com Christiane Roberts.",
  },
  en: {
    title: "The Beauty of Brazil Aesthetics SPA | Pembroke Pines, FL",
    description: "Elite skincare and body contour treatments in Pembroke Pines, FL. Indulge in the ultimate Brazilian glow experience with Christiane Roberts.",
  },
};

const Index = () => {
  useReveal();
  usePageMeta(metaCopy);
  useScrollToHash();

  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <BeforeAfter />
      <EliteSkincare />
      <BodyContour />
      <HowItWorks />
      <About />
      <InstagramFeed />
      <BookingCTA />
      <Footer />
    </main>
  );
};

export default Index;
