import { Instagram } from "lucide-react";
import { useLanguage } from "@/lib/language";
import secondaryImg from "@/assets/imagens/instagram-secondary.webp";

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
  es: {
    title1: "Síganos en nuestras",
    titleGold: "redes sociales",
    body: "Descubra nuestros tratamientos más recientes, transformaciones y momentos detrás de cámaras en Instagram.",
    cta: "Ver nuestro perfil",
  },
};

export const InstagramFeed = () => {
  const { lang } = useLanguage();
  const t = copy[lang];

  return (
    <section className="pt-12 md:pt-16 pb-12 md:pb-16 relative">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="reveal text-center lg:text-left">
            <span className="font-accent text-primary text-xl">@thebeautyofbrazilspa</span>
            <h2 className="mt-2 text-4xl md:text-5xl font-display">
              {t.title1} <span className="gold-text italic font-accent">{t.titleGold}</span>
            </h2>
            <p className="mt-4 text-muted-foreground">{t.body}</p>

            <div className="mt-8">
              <a
                href="https://instagram.com/thebeautyofbrazilspa"
                target="_blank" rel="noreferrer"
                className="shimmer inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground font-medium px-7 py-3.5 rounded-full shadow-gold hover:shadow-gold-strong transition-all"
              >
                <Instagram size={18} /> {t.cta}
              </a>
            </div>
          </div>

          <div className="reveal">
            <div className="rounded-2xl overflow-hidden border border-border shadow-luxe aspect-square max-w-md mx-auto">
              <img
                src={secondaryImg}
                alt="The Beauty of Brazil Spa"
                loading="lazy"
                width={700}
                height={700}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
