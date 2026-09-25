import { Gem } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { useLanguage } from "@/lib/language";
import r1 from "@/assets/tbobs/service-body-contour-sculpt.jpg";
import r2 from "@/assets/tbobs/service-firming-rf.jpeg";

const copy = {
  pt: {
    eyebrow: "Body Contour Treatments",
    title1: "Silhueta esculpida,",
    titleGold: "sem tempo de recuperação",
    body: "Terapias de alta performance e não invasivas, feitas para reduzir gordura localizada, tratar celulite e firmar a pele solta, com nossa técnica brasileira certificada 4 em 1.",
    imgLabel1: "Body Contour Sculpt",
    imgLabel2: "Firming RF",
    calloutTitle: "Técnica exclusiva",
    calloutSub: "Método brasileiro 4 em 1",
    calloutDesc: "Ativação linfática, cavitação, RF e terapia a vácuo",
    items: [
      "Ativação linfática e cavitação",
      "Firmamento da pele com radiofrequência",
      "Terapia a vácuo para contorno",
      "Recomendado em pacotes de 6 sessões",
    ],
    cta: "Agendar minha sessão de contorno corporal",
  },
  en: {
    eyebrow: "Body Contour Treatments",
    title1: "Sculpted silhouette,",
    titleGold: "zero downtime",
    body: "High-performance, non-invasive therapies designed to reduce stubborn fat, target cellulite, and tighten loose skin, using our Brazilian certified 4-in-1 technique.",
    imgLabel1: "Body Contour Sculpt",
    imgLabel2: "Firming RF",
    calloutTitle: "Signature technique",
    calloutSub: "4-in-1 Brazilian method",
    calloutDesc: "Lymphatic activation, cavitation, RF and vacuum therapy",
    items: [
      "Lymphatic activation and cavitation",
      "Radiofrequency skin tightening",
      "Vacuum therapy for contouring",
      "Recommended in packages of 6 sessions",
    ],
    cta: "Book my body contour session",
  },
};

export const BodyContour = () => {
  const { lang } = useLanguage();
  const t = copy[lang];
  const whatsappLink = buildWhatsAppLink(lang);

  return (
    <section id="contour" className="py-24 md:py-32 relative overflow-hidden bg-gradient-cream">
      <div aria-hidden className="absolute -bottom-32 -left-20 w-[520px] h-[520px] rounded-full bg-gradient-radial-gold blur-3xl opacity-60 pointer-events-none" />
      <div aria-hidden className="absolute right-4 top-10 font-display italic text-[12rem] leading-none text-primary/10 select-none pointer-events-none hidden md:block">
        bc
      </div>

      <div className="container relative">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 reveal order-2 lg:order-1">
            <div className="grid grid-cols-12 gap-4">
              <figure className="col-span-7 relative rounded-2xl overflow-hidden border border-border shadow-luxe aspect-[3/4] group">
                <img
                  src={r1}
                  alt="Body Contour Sculpt Treatment"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 text-[10px] uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-card/90 backdrop-blur border border-border text-foreground">
                  {t.imgLabel1}
                </span>
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
              </figure>

              <div className="col-span-5 flex flex-col gap-4">
                <figure className="relative rounded-2xl overflow-hidden border border-border shadow-luxe aspect-[3/4] group mt-8">
                  <img
                    src={r2}
                    alt="Firming Radiofrequency Treatment"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 text-[10px] uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-gradient-gold text-primary-foreground">
                    {t.imgLabel2}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
                </figure>

                <div className="luxe-card p-5">
                  <div className="font-accent text-primary text-sm">{t.calloutTitle}</div>
                  <div className="font-display text-lg leading-tight mt-1">{t.calloutSub}</div>
                  <div className="text-xs text-muted-foreground mt-2">{t.calloutDesc}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 reveal order-1 lg:order-2">
            <span className="inline-flex items-center gap-2 font-accent text-primary text-xl">
              <span className="h-px w-10 bg-primary/60" />
              {t.eyebrow}
            </span>
            <h2 className="mt-3 font-display text-4xl md:text-6xl leading-[1.05] text-balance">
              {t.title1}
              <br />
              <span className="gold-text italic font-accent">{t.titleGold}</span>.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed max-w-md">{t.body}</p>

            <ul className="mt-8 space-y-3">
              {t.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground/90">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-gold shadow-gold flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <a
              href={whatsappLink}
              target="_blank" rel="noreferrer"
              className="mt-9 inline-flex items-center gap-2 border border-primary/40 px-6 py-3 rounded-full hover:bg-primary/10 transition-all font-medium"
            >
              <Gem size={16} className="text-primary" />
              {t.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
