import { Flame, Sparkles as SparklesIcon, Sun, Zap, ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/language";

const services = {
  pt: [
    { icon: Flame, title: "Firming Radiofrequency", desc: "Calor de RF avançado e drenagem a vácuo para reduzir celulite e firmar a pele instantaneamente, sem tempo de recuperação." },
    { icon: Zap, title: "Body Contour Sculpt", desc: "Um serviço 3 em 1 com ativação linfática, cavitação e radiofrequência para reduzir gordura e contornar o corpo." },
    { icon: SparklesIcon, title: "Signature Glow Facial", desc: "Nosso facial de luxo limpa profundamente, esfolia e usa tecnologia avançada para iluminar a pele na hora." },
    { icon: Sun, title: "Anti-Aging Facial", desc: "Tecnologia avançada para estimular colágeno, firmar a pele e suavizar rugas, revelando uma aparência jovial." },
  ],
  en: [
    { icon: Flame, title: "Firming Radiofrequency", desc: "Advanced RF heat and vacuum drainage to reduce cellulite and instantly tighten skin with zero downtime." },
    { icon: Zap, title: "Body Contour Sculpt", desc: "A 3-in-1 service using lymphatic activation, cavitation, and radiofrequency to destroy fat and contour your body." },
    { icon: SparklesIcon, title: "Signature Glow Facial", desc: "Our luxury facial deeply cleanses, exfoliates, and uses advanced tech to instantly glow your skin." },
    { icon: Sun, title: "Anti-Aging Facial", desc: "Advanced technology to boost collagen, tighten skin, and smooth wrinkles for a youthful complexion." },
  ],
};

const copy = {
  pt: {
    eyebrow: "Alguns dos nossos melhores tratamentos",
    title1: "Descubra seu",
    titleGold: "brilho exclusivo",
    body: "Seja para tratar preocupações específicas com a pele ou esculpir sua silhueta, cada serviço é feito sob medida por Christiane para entregar resultados visíveis, que elevam sua confiança e proporcionam relaxamento profundo.",
    cta: "Agendar agora",
  },
  en: {
    eyebrow: "Some of our best treatments",
    title1: "Discover your",
    titleGold: "signature glow",
    body: "Whether you are targeting specific skin concerns or sculpting your silhouette, each service is custom-crafted by Christiane to deliver visible, confidence-boosting results alongside deep relaxation.",
    cta: "Book now",
  },
};

export const Services = () => {
  const { lang } = useLanguage();
  const t = copy[lang];

  return (
    <section id="servicos" className="py-24 md:py-32 relative">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="font-accent text-primary text-xl">{t.eyebrow}</span>
          <h2 className="mt-2 text-4xl md:text-5xl font-display">
            {t.title1} <span className="gold-text">{t.titleGold}</span>
          </h2>
          <p className="mt-4 text-muted-foreground">{t.body}</p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services[lang].map((s, i) => (
            <div
              key={s.title}
              className="reveal group p-7 rounded-2xl bg-secondary text-secondary-foreground border border-primary/20 shadow-luxe hover:-translate-y-2 hover:shadow-gold transition-all duration-500"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-gold-soft border border-primary/40 flex items-center justify-center text-primary group-hover:bg-gradient-gold group-hover:text-primary-foreground transition-all">
                <s.icon size={22} />
              </div>
              <h3 className="mt-5 text-xl font-display text-secondary-foreground">{s.title}</h3>
              <p className="mt-3 text-sm text-secondary-foreground/70 leading-relaxed">{s.desc}</p>
              <a href="#contato" className="mt-5 inline-flex items-center gap-1 text-sm text-primary opacity-90 group-hover:opacity-100 group-hover:gap-2 transition-all">
                {t.cta} <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
