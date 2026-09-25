import portrait from "@/assets/tbobs/christiane-portrait.png";
import portrait2 from "@/assets/tbobs/about-portrait.jpg";
import { useLanguage } from "@/lib/language";

const copy = {
  pt: {
    eyebrow: "Conheça a fundadora",
    name1: "Christiane",
    name2: "Roberts",
    p1: "Por muitos anos, Christiane construiu sua carreira em gestão administrativa e financeira, desenvolvendo fortes habilidades de organização, liderança e atendimento ao cliente. Embora valorizasse muito essa experiência, ela sempre se sentiu atraída pela indústria da beleza e do bem-estar e sonhava em ajudar as pessoas a se sentirem confiantes em sua própria pele.",
    p2: "Essa paixão inspirou uma transição de carreira que mudou sua vida. Ela cursou Estética na Flórida, concluiu seu treinamento profissional e obteve sua Licença de Esteticista da Flórida. Hoje, ela combina sua formação em negócios com sua dedicação ao skincare e ao bem-estar corporal, especializando-se em cuidado excepcional, resultados visíveis e uma experiência relaxante que fortalece confiança e bem-estar.",
    quote: "Para mim, estética é mais do que uma profissão, é uma verdadeira paixão. Ajudar as pessoas a se sentirem e parecerem bem é a parte mais gratificante da minha jornada.",
    licenseTitle: "Flórida",
    licenseSub: "Licença de Esteticista",
  },
  en: {
    eyebrow: "Meet the founder",
    name1: "Christiane",
    name2: "Roberts",
    p1: "For many years, Christiane built her career in administrative and financial management, developing strong organizational, leadership, and client service skills. While she truly valued that experience, she always felt drawn to the beauty and wellness industry and dreamed of helping people feel confident in their own skin.",
    p2: "That passion inspired a life-changing career transition. She pursued her education in Esthetics in Florida, completed her professional training, and earned her Florida Esthetician License. Today, she combines her business background with her dedication to skincare and body wellness, specializing in exceptional care, visible results, and a relaxing experience that enhances both confidence and well-being.",
    quote: "For me, aesthetics is more than a profession; it is a true passion. Helping people look and feel their best is the most rewarding part of my journey.",
    licenseTitle: "Florida",
    licenseSub: "Esthetician License",
  },
};

export const About = () => {
  const { lang } = useLanguage();
  const t = copy[lang];

  return (
    <section id="sobre" className="py-24 md:py-32 relative">
      <div className="container grid lg:grid-cols-2 gap-14 items-center">
        <div className="relative reveal">
          <div className="absolute -inset-4 bg-gradient-radial-gold blur-2xl" />
          <div className="relative grid grid-cols-5 gap-4">
            <div className="col-span-3 rounded-2xl overflow-hidden border border-border shadow-luxe">
              <img src={portrait} alt="Christiane Roberts, founder of The Beauty of Brazil SPA" className="w-full h-full object-cover" />
            </div>
            <div className="col-span-2 flex flex-col gap-4 pt-12">
              <div className="rounded-2xl overflow-hidden border border-border shadow-luxe aspect-[3/4]">
                <img src={portrait2} alt="The Beauty of Brazil SPA skincare treatment" className="w-full h-full object-cover" />
              </div>
              <div className="luxe-card p-5 text-center">
                <div className="font-accent text-primary text-base leading-none">{t.licenseTitle}</div>
                <div className="text-lg font-display gold-text mt-1">{t.licenseSub}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="reveal">
          <span className="font-accent text-primary text-xl">{t.eyebrow}</span>
          <h2 className="mt-2 text-4xl md:text-5xl font-display">
            {t.name1} <span className="gold-text">{t.name2}</span>
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">{t.p1}</p>
          <p className="mt-4 text-muted-foreground leading-relaxed">{t.p2}</p>

          <div className="mt-8 luxe-card p-5">
            <p className="text-sm text-foreground/90 italic">"{t.quote}"</p>
          </div>
        </div>
      </div>
    </section>
  );
};
