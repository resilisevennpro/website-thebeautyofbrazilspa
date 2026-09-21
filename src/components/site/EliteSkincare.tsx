import { Sun, Sparkles } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/whatsapp";
import { useLanguage } from "@/lib/language";
import g1 from "@/assets/tbobs/gallery-1.jpg";
import g2 from "@/assets/tbobs/gallery-2.jpg";
import g3 from "@/assets/tbobs/gallery-3.jpg";
import g4 from "@/assets/tbobs/gallery-4.jpg";

const gallery = {
  pt: [
    { src: g2, label: "Signature Glow Facial", caption: "Limpeza profunda e radiância", span: "md:col-span-2 md:row-span-2 aspect-[4/5]" },
    { src: g1, label: "Elite Skincare", caption: "Faciais clínicos", span: "aspect-square" },
    { src: g4, label: "Nano Infusion", caption: "Tecnologia de nano-agulhamento", span: "aspect-[4/5]" },
    { src: g3, label: "Diamond Radiance", caption: "Esfoliação com diamante", span: "aspect-[4/5]" },
  ],
  en: [
    { src: g2, label: "Signature Glow Facial", caption: "Deep cleanse and radiance", span: "md:col-span-2 md:row-span-2 aspect-[4/5]" },
    { src: g1, label: "Elite Skincare", caption: "Clinical-grade facials", span: "aspect-square" },
    { src: g4, label: "Nano Infusion", caption: "Nano-needling technology", span: "aspect-[4/5]" },
    { src: g3, label: "Diamond Radiance", caption: "Diamond exfoliation", span: "aspect-[4/5]" },
  ],
};

const copy = {
  pt: {
    eyebrow: "Elite Skincare Treatments",
    title1: "Revele a",
    titleGold: "melhor versão",
    title3: "da sua pele.",
    body: "Faciais avançados e de nível clínico, feitos para limpar profundamente, estimular colágeno e revelar instantaneamente uma pele radiante e jovial, personalizados para as necessidades únicas da sua pele.",
    stats: [
      { v: "9+", label: "Tratamentos faciais" },
      { v: "0", label: "Tempo de recuperação" },
      { v: "100%", label: "Personalizado" },
    ],
    cta: "Agendar meu facial",
  },
  en: {
    eyebrow: "Elite Skincare Treatments",
    title1: "Unveil your",
    titleGold: "best skin",
    title3: "ever.",
    body: "Advanced, clinical-grade facials designed to deep-clean, boost collagen, and instantly reveal a radiant, youthful complexion, personalized to your skin's unique needs.",
    stats: [
      { v: "9+", label: "Facial treatments" },
      { v: "0", label: "Downtime" },
      { v: "100%", label: "Personalized" },
    ],
    cta: "Book my facial",
  },
};

export const EliteSkincare = () => {
  const { lang } = useLanguage();
  const t = copy[lang];

  return (
    <section id="skincare" className="py-24 md:py-32 relative overflow-hidden">
      <div aria-hidden className="absolute -top-20 right-0 w-[480px] h-[480px] rounded-full bg-gradient-radial-gold blur-3xl opacity-70 pointer-events-none" />

      <div className="container relative">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-5 reveal">
            <span className="inline-flex items-center gap-2 font-accent text-primary text-xl">
              <span className="h-px w-10 bg-primary/60" />
              {t.eyebrow}
            </span>
            <h2 className="mt-3 font-display text-4xl md:text-6xl leading-[1.05] text-balance">
              {t.title1} <span className="gold-text italic font-accent">{t.titleGold}</span> {t.title3}
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed max-w-md">{t.body}</p>

            <div className="mt-8 grid grid-cols-3 gap-3">
              {t.stats.map((s) => (
                <div key={s.label} className="text-center px-3 py-4 rounded-2xl bg-secondary border border-primary/20 shadow-luxe">
                  <div className="text-2xl font-display gold-text">{s.v}</div>
                  <div className="text-[10px] text-secondary-foreground/70 uppercase tracking-wider mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            <a
              href={WHATSAPP_LINK}
              target="_blank" rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground font-medium px-6 py-3 rounded-full shadow-gold hover:shadow-gold-strong transition-all"
            >
              <Sun size={16} /> {t.cta}
            </a>
          </div>

          <div className="lg:col-span-7 reveal">
            <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[140px] md:auto-rows-[160px] gap-3">
              {gallery[lang].map((g, i) => (
                <figure
                  key={i}
                  className={`group relative overflow-hidden rounded-2xl border border-border shadow-luxe ${g.span}`}
                >
                  <img
                    src={g.src}
                    alt={g.label}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/0 to-transparent" />
                  <figcaption className="absolute bottom-0 left-0 right-0 p-3 text-card">
                    <div className="font-accent text-primary-glow text-base leading-none">{g.label}</div>
                    <div className="text-[10px] uppercase tracking-[0.18em] mt-1 opacity-80">{g.caption}</div>
                  </figcaption>
                  <span className="absolute top-2 right-2 w-7 h-7 rounded-full bg-card/85 backdrop-blur flex items-center justify-center">
                    <Sparkles size={12} className="text-primary" />
                  </span>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
