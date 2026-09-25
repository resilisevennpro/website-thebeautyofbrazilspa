import { Calendar, MessageCircle, Sparkles, Wand2 } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { useLanguage } from "@/lib/language";
import leaf from "@/assets/tbobs/leaf-decor.png";

const copy = {
  pt: {
    eyebrow: "Processo",
    title1: "A jornada da sua pele até a",
    titleGold: "perfeição",
    steps: [
      { n: "01", icon: Calendar, title: "Agende sua sessão", desc: "Ligue, envie mensagem ou agende online para reservar seu horário na The Beauty of Brazil SPA." },
      { n: "02", icon: Wand2, title: "Consulta personalizada", desc: "Christiane avalia sua pele e seus objetivos para recomendar o tratamento ideal para você." },
      { n: "03", icon: Sparkles, title: "Seu brilho, entregue", desc: "Tratamentos não invasivos e de alta performance, com resultados visíveis." },
    ],
    footer: "Pronta para transformar sua pele? Ligue ou envie mensagem para agendar sua sessão personalizada.",
    cta: "Agendar meu horário",
  },
  en: {
    eyebrow: "Process",
    title1: "Your skin's journey to",
    titleGold: "perfection",
    steps: [
      { n: "01", icon: Calendar, title: "Book your session", desc: "Call, text, or book online to reserve your appointment at The Beauty of Brazil SPA." },
      { n: "02", icon: Wand2, title: "Personalized consultation", desc: "Christiane evaluates your skin and goals to recommend the ideal treatment for you." },
      { n: "03", icon: Sparkles, title: "Your glow, delivered", desc: "High-performance, non-invasive treatments with visible, radiant results." },
    ],
    footer: "Ready to transform your skin? Call or text us to schedule your custom session.",
    cta: "Book my appointment",
  },
};

export const HowItWorks = () => {
  const { lang } = useLanguage();
  const t = copy[lang];
  const whatsappLink = buildWhatsAppLink(lang);

  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-secondary text-secondary-foreground">
      <img
        src={leaf}
        aria-hidden
        className="absolute -right-24 -top-16 w-[26rem] opacity-[0.08] rotate-12 pointer-events-none select-none"
      />
      <img
        src={leaf}
        aria-hidden
        className="absolute -left-28 -bottom-20 w-[22rem] opacity-[0.06] -rotate-[24deg] pointer-events-none select-none"
      />

      <div className="container relative">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="font-accent text-primary text-xl">{t.eyebrow}</span>
          <h2 className="mt-2 text-4xl md:text-5xl font-display text-secondary-foreground">
            {t.title1} <span className="gold-text">{t.titleGold}</span>
          </h2>
        </div>

        <div className="mt-20 relative grid md:grid-cols-3 gap-10">
          <div className="hidden md:block absolute top-10 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

          {t.steps.map((s, i) => (
            <div key={s.n} className="reveal text-center" style={{ transitionDelay: `${i * 120}ms` }}>
              <div className="relative mx-auto w-20 h-20 rounded-full bg-secondary border border-primary/50 flex items-center justify-center shadow-gold">
                <s.icon className="text-primary" size={28} />
                <span className="absolute -top-2 -right-2 bg-gradient-gold text-primary-foreground text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center">
                  {s.n}
                </span>
              </div>
              <h3 className="mt-6 text-xl font-display text-secondary-foreground">{s.title}</h3>
              <p className="mt-3 text-sm text-secondary-foreground/70 max-w-xs mx-auto">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center reveal">
          <p className="text-secondary-foreground/70">{t.footer}</p>
          <a
            href={whatsappLink}
            target="_blank" rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground font-medium px-6 py-3.5 rounded-full shadow-gold hover:shadow-gold-strong hover:-translate-y-0.5 transition-all"
          >
            <MessageCircle size={18} /> {t.cta}
          </a>
        </div>
      </div>
    </section>
  );
};
