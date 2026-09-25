import heroImg from "@/assets/tbobs/christiane-portrait.png";
import { ArrowRight, Star, Sparkles } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { useLanguage } from "@/lib/language";

const copy = {
  pt: {
    eyebrow: "Aesthetics Spa · Pembroke Pines, FL",
    title1: "Onde a Beleza Brasileira",
    titleGold: "Encontra a Estética de Luxo",
    subtitle:
      "A The Beauty of Brazil SPA une skincare clínico avançado a tratamentos corporais personalizados e luxuosos. Entregamos resultados visíveis e radiantes para elevar sua beleza natural e confiança.",
    ctaPrimary: "Agende Sua Sessão",
    ctaSecondary: "Ver Tratamentos",
    trust: "Esteticista Licenciada · Técnica Brasileira",
    badgeTitle: "Licença de Esteticista da Flórida",
    badgeSub: "Christiane Roberts",
    ratingLabel: "Agende Agora",
  },
  en: {
    eyebrow: "Aesthetics Spa · Pembroke Pines, FL",
    title1: "Where Brazilian Beauty",
    titleGold: "Meets Luxury Aesthetics",
    subtitle:
      "The Beauty of Brazil SPA blends advanced clinical skincare with luxurious, personalized body treatments. We deliver visible, radiant results to elevate your natural beauty and confidence.",
    ctaPrimary: "Book Your Appointment",
    ctaSecondary: "Explore Treatments",
    trust: "Licensed Esthetician · Brazilian Technique",
    badgeTitle: "Florida Esthetician License",
    badgeSub: "Christiane Roberts",
    ratingLabel: "Book Now",
  },
};

export const Hero = () => {
  const { lang } = useLanguage();
  const t = copy[lang];
  const whatsappLink = buildWhatsAppLink(lang);

  return (
    <section className="relative grain min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-primary/15 blur-3xl animate-bokeh" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-primary-glow/20 blur-3xl animate-bokeh" style={{ animationDelay: "2s" }} />
        <div className="absolute top-10 right-1/3 w-40 h-40 rounded-full bg-primary-glow/25 blur-2xl animate-bokeh" style={{ animationDelay: "4s" }} />
      </div>

      <div aria-hidden className="absolute -left-10 top-1/3 font-display text-[28rem] leading-none text-primary/5 select-none pointer-events-none hidden lg:block">
        BB
      </div>

      <div className="container grid lg:grid-cols-12 gap-12 lg:gap-12 items-center">
        <div className="reveal lg:col-span-6 relative">
          <span className="inline-flex items-center gap-2 font-accent text-primary text-xl md:text-2xl">
            <span className="h-px w-10 bg-primary/60" />
            {t.eyebrow}
          </span>
          <h1 className="mt-4 font-display text-4xl md:text-6xl xl:text-7xl leading-[1.03] text-balance">
            {t.title1}
            <br />
            <span className="gold-text italic font-accent">{t.titleGold}</span>
          </h1>
          <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-md leading-relaxed">
            {t.subtitle}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href={whatsappLink}
              target="_blank" rel="noreferrer"
              className="shimmer group inline-flex items-center justify-center gap-2 bg-gradient-gold text-primary-foreground font-medium px-7 py-4 rounded-full shadow-gold hover:shadow-gold-strong transition-all"
            >
              {t.ctaPrimary}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 border border-primary/40 text-foreground font-medium px-7 py-4 rounded-full hover:bg-primary/10 transition-all"
            >
              {t.ctaSecondary}
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex -space-x-2">
              {[1,2,3,4].map(i => (
                <div key={i} className="w-9 h-9 rounded-full border-2 border-background bg-gradient-gold" />
              ))}
            </div>
            <span>{t.trust}</span>
          </div>
        </div>

        <div className="relative reveal lg:col-span-6 flex justify-center lg:justify-end mt-4 lg:mt-0">
          <div className="absolute inset-0 bg-gradient-radial-gold blur-2xl" />

          <div className="relative">
            <div className="absolute -inset-4 md:-inset-6 rounded-[2.5rem] border border-primary/30" />
            <div className="absolute -inset-8 md:-inset-12 rounded-[3rem] border border-primary/15" />

            <div className="relative w-[260px] sm:w-[320px] md:w-[420px] aspect-[3/4] rounded-[2rem] overflow-hidden shadow-luxe bg-card animate-float-slow">
              <img
                src={heroImg}
                alt="Christiane Roberts, founder of The Beauty of Brazil SPA"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent" />
            </div>

            <div className="absolute -left-4 md:-left-16 bottom-10 md:bottom-12 luxe-card px-3.5 py-2.5 md:px-5 md:py-4 flex items-center gap-2 md:gap-3 animate-float-slow" style={{ animationDelay: "1.4s" }}>
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-gold flex items-center justify-center text-primary-foreground">
                <Sparkles size={14} className="md:hidden" />
                <Sparkles size={18} className="hidden md:block" />
              </div>
              <div className="text-xs md:text-sm">
                <div className="font-display text-sm md:text-base leading-tight">{t.badgeTitle}</div>
                <div className="text-[10px] md:text-xs text-muted-foreground">{t.badgeSub}</div>
              </div>
            </div>

            <div className="absolute right-2 md:right-4 -bottom-3 md:-bottom-6 luxe-card px-3 py-1.5 md:px-4 md:py-2 flex items-center gap-1.5 md:gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => <Star key={i} size={10} className="md:hidden text-primary fill-primary" />)}
                {[...Array(5)].map((_, i) => <Star key={`d${i}`} size={12} className="hidden md:inline text-primary fill-primary" />)}
              </div>
              <span className="text-[10px] md:text-xs text-muted-foreground">{t.ratingLabel}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
