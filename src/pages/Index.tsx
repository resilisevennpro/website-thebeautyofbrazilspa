import { useReveal } from "@/hooks/useReveal";
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
import { LanguageProvider, useLanguage } from "@/lib/language";
import { useEffect } from "react";

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

const PageContent = () => {
  useReveal();
  const { lang } = useLanguage();

  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
    document.title = metaCopy[lang].title;
    const meta = document.querySelector('meta[name="description"]') || document.head.appendChild(Object.assign(document.createElement("meta"), { name: "description" }));
    (meta as HTMLMetaElement).content = metaCopy[lang].description;
  }, [lang]);

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

const Index = () => (
  <LanguageProvider>
    <PageContent />
  </LanguageProvider>
);

export default Index;
