import { WHATSAPP_LINK } from "@/lib/whatsapp";
import { useLanguage } from "@/lib/language";
import glow from "@/assets/tbobs/service-signature-glow.webp";
import sculpt from "@/assets/tbobs/service-body-contour-sculpt.jpg";
import firmingRf from "@/assets/tbobs/service-firming-rf.jpeg";
import antiAging from "@/assets/tbobs/service-anti-aging.webp";

const treatments = {
  pt: [
    { img: glow, label: "Signature Glow Facial" },
    { img: sculpt, label: "Body Contour Sculpt" },
    { img: firmingRf, label: "Firming Radiofrequency" },
    { img: antiAging, label: "Radiofrequency Anti-Aging" },
  ],
  en: [
    { img: glow, label: "Signature Glow Facial" },
    { img: sculpt, label: "Body Contour Sculpt" },
    { img: firmingRf, label: "Firming Radiofrequency" },
    { img: antiAging, label: "Radiofrequency Anti-Aging" },
  ],
};

const copy = {
  pt: {
    eyebrow: "Serviços Estéticos Avançados",
    title1: "Tratamentos não invasivos,",
    titleGold: "resultados visíveis",
    body: "Tratamentos de alta performance feitos para transformar sua pele e remodelar sua silhueta, unindo tecnologias clínicas de skincare a soluções direcionadas de contorno corporal.",
    cta: "Clique aqui para agendar sua sessão →",
  },
  en: {
    eyebrow: "Advanced Aesthetic Services",
    title1: "Non-invasive treatments,",
    titleGold: "visible results",
    body: "High-performance treatments designed to transform your skin and reshape your silhouette, pairing clinical skincare technologies with targeted body contouring solutions.",
    cta: "Click here to book your appointment →",
  },
};

export const BeforeAfter = () => {
  const { lang } = useLanguage();
  const t = copy[lang];

  return (
    <section id="resultados" className="py-24 md:py-32 relative">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="font-accent text-primary text-xl">{t.eyebrow}</span>
          <h2 className="mt-2 text-4xl md:text-6xl font-display text-balance">
            {t.title1} <span className="gold-text italic font-accent">{t.titleGold}</span>
          </h2>
          <p className="mt-5 text-muted-foreground">{t.body}</p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {treatments[lang].map((tr) => (
            <figure key={tr.label} className="reveal luxe-card border border-secondary/30 p-3 group">
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-muted">
                <img
                  src={tr.img}
                  alt={tr.label}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <figcaption className="px-2 pt-4 pb-1 text-center">
                <span className="font-accent italic text-secondary text-lg">{tr.label}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-12 text-center reveal">
          <a
            href={WHATSAPP_LINK}
            target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground font-medium px-7 py-3.5 rounded-full shadow-luxe hover:-translate-y-0.5 hover:gap-3 transition-all"
          >
            {t.cta}
          </a>
        </div>
      </div>
    </section>
  );
};
