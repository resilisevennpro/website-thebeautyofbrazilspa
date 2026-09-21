import { Instagram } from "lucide-react";
import { useLanguage } from "@/lib/language";

const copy = {
  pt: {
    title1: "Siga nossas",
    titleGold: "redes sociais",
    body: "Veja nossos tratamentos mais recentes, transformações e bastidores no Instagram.",
    cta: "Ver nosso perfil",
  },
  en: {
    title1: "Follow our",
    titleGold: "social media",
    body: "See our latest treatments, transformations, and behind-the-scenes on Instagram.",
    cta: "View our profile",
  },
};

export const InstagramFeed = () => {
  const { lang } = useLanguage();
  const t = copy[lang];

  return (
    <section className="py-24 md:py-32 relative">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="font-accent text-primary text-xl">@thebeautyofbrazilspa</span>
          <h2 className="mt-2 text-4xl md:text-5xl font-display">
            {t.title1} <span className="gold-text italic font-accent">{t.titleGold}</span>
          </h2>
          <p className="mt-4 text-muted-foreground">{t.body}</p>
        </div>

        <div className="mt-12 text-center reveal">
          <a
            href="https://instagram.com/thebeautyofbrazilspa"
            target="_blank" rel="noreferrer"
            className="shimmer inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground font-medium px-7 py-3.5 rounded-full shadow-gold hover:shadow-gold-strong transition-all"
          >
            <Instagram size={18} /> {t.cta}
          </a>
        </div>
      </div>
    </section>
  );
};
