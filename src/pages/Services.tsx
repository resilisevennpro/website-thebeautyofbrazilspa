import { useReveal } from "@/hooks/useReveal";
import { usePageMeta } from "@/hooks/usePageMeta";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { useLanguage } from "@/lib/language";
import { ArrowRight, Calendar, MessageCircle, Sparkles, Wand2 } from "lucide-react";
import glowImg from "@/assets/tbobs/service-signature-glow.webp";
import antiAgingImg from "@/assets/tbobs/service-anti-aging.webp";
import sculptImg from "@/assets/tbobs/service-body-contour-sculpt.jpg";
import firmingImg from "@/assets/tbobs/service-firming-rf.jpeg";

const metaCopy = {
  pt: {
    title: "Todos os Serviços | The Beauty of Brazil Aesthetics SPA",
    description: "Conheça todos os tratamentos faciais e de contorno corporal da The Beauty of Brazil Aesthetics SPA em Pembroke Pines, FL.",
  },
  en: {
    title: "All Services | The Beauty of Brazil Aesthetics SPA",
    description: "Explore every facial and body contour treatment at The Beauty of Brazil Aesthetics SPA in Pembroke Pines, FL.",
  },
};

const skincare = {
  pt: [
    { title: "Signature Glow Facial", tag: "Hidratação & Brilho", img: glowImg, desc: "Facial de limpeza profunda com terapia a vácuo e alta frequência, finalizado com máscara hidratante para uma pele equilibrada e radiante." },
    { title: "Diamond Radiance Facial", tag: "Renovação da Pele", desc: "Tratamento de renovação com esfoliação de diamante, tecnologia de ultrassom e sérum nutritivo para uma pele mais lisa e radiante." },
    { title: "Collagen Renewal Facial", tag: "Antienvelhecimento", desc: "Facial antienvelhecimento que combina limpeza profunda, séruns potencializados por ultrassom e crioterapia para lifting, hidratação e suavização de linhas finas." },
    { title: "Radiofrequency Anti-Aging Facial", tag: "Antienvelhecimento", img: antiAgingImg, desc: "Usa tecnologia de radiofrequência para estimular a produção de colágeno, firmar a pele e reduzir linhas finas e rugas." },
    { title: "Clarifying Acne Facial", tag: "Pele Oleosa & Acne", desc: "Tratamento direcionado para pele oleosa e com tendência à acne, com extrações, alta frequência e máscara calmante para reduzir inflamação." },
    { title: "Microcurrent Sculpt Facial", tag: "Lifting Facial", desc: "Tratamento não invasivo que usa microcorrente para tonificar os músculos faciais, proporcionando um efeito lifting e esculpido." },
    { title: "Back Detox Facial", tag: "Limpeza Profunda", desc: "Tratamento de limpeza profunda para as costas, combinando esfoliação, extrações e alta frequência para uma pele limpa e renovada." },
    { title: "Brighten & Glow Peel", tag: "Manchas & Uniformidade", desc: "Peeling renovador que trata hiperpigmentação e danos solares, revelando uma pele mais lisa e uniforme." },
    { title: "Nano Infusion Facial", tag: "Hidratação & Textura", desc: "Usa tecnologia de nano-agulhamento para infundir séruns especializados e antioxidantes, melhorando hidratação e textura sem tempo de recuperação." },
  ],
  en: [
    { title: "Signature Glow Facial", tag: "Hydration & Glow", img: glowImg, desc: "A deep-cleansing facial with vacuum therapy and high-frequency technology, finished with a hydrating mask for balanced, radiant skin." },
    { title: "Diamond Radiance Facial", tag: "Skin Resurfacing", desc: "A resurfacing treatment with diamond exfoliation, ultrasound technology, and a nutrient serum for a smoother, more radiant complexion." },
    { title: "Collagen Renewal Facial", tag: "Anti-Aging", desc: "An age-defying facial combining deep cleansing, ultrasound-enhanced serums, and cryo-cooling therapy to lift, hydrate, and smooth fine lines." },
    { title: "Radiofrequency Anti-Aging Facial", tag: "Anti-Aging", img: antiAgingImg, desc: "Uses Radiofrequency technology to stimulate collagen production, tighten skin, and reduce the appearance of fine lines and wrinkles." },
    { title: "Clarifying Acne Facial", tag: "Acne & Oily Skin", desc: "A targeted treatment for acne-prone and oily skin, with extractions, high-frequency, and a calming mask to reduce inflammation." },
    { title: "Microcurrent Sculpt Facial", tag: "Facial Lifting", desc: "A non-invasive treatment that uses microcurrent technology to tone facial muscles for a lifted, sculpted appearance." },
    { title: "Back Detox Facial", tag: "Deep Cleanse", desc: "A deep-cleansing treatment for the back, combining exfoliation, extractions, and high-frequency therapy for clear, refreshed skin." },
    { title: "Brighten & Glow Peel", tag: "Pigmentation & Tone", desc: "A resurfacing peel that targets hyperpigmentation and sun damage, revealing a smoother, more even complexion." },
    { title: "Nano Infusion Facial", tag: "Hydration & Texture", desc: "Uses nano-needling technology to deliver specialized serums and antioxidants, improving hydration and texture with no downtime." },
  ],
};

const bodyContour = {
  pt: [
    { title: "Body Contour Sculpt Treatment", tag: "Redução de Gordura", img: sculptImg, desc: "Serviço exclusivo 3 em 1 que combina ativação linfática, cavitação e radiofrequência para redução de gordura e firmamento da pele." },
    { title: "Contour & Define Body Treatment", tag: "Contorno Corporal", desc: "Nosso método brasileiro 4 em 1 que combina ativação linfática, cavitação, radiofrequência e terapia a vácuo para o contorno corporal definitivo." },
    { title: "Firming Radiofrequency Treatment", tag: "Firmeza da Pele", img: firmingImg, desc: "Energia avançada de RF que firma e tonifica a pele enquanto reduz a aparência de celulite, finalizado com drenagem por terapia a vácuo." },
  ],
  en: [
    { title: "Body Contour Sculpt Treatment", tag: "Fat Reduction", img: sculptImg, desc: "A signature 3-in-1 service combining lymphatic activation, cavitation, and radiofrequency for fat reduction and skin tightening." },
    { title: "Contour & Define Body Treatment", tag: "Body Contouring", desc: "Our Brazilian 4-in-1 method combining lymphatic activation, cavitation, radiofrequency, and vacuum therapy for the ultimate body sculpting." },
    { title: "Firming Radiofrequency Treatment", tag: "Skin Firming", img: firmingImg, desc: "Advanced RF energy tightens and tones skin while reducing the appearance of cellulite, completed with vacuum therapy drainage." },
  ],
};

const firstTimeSteps = {
  pt: [
    { n: "01", icon: Calendar, title: "Chame no WhatsApp", desc: "Conte o que você procura e a gente te ajuda a escolher o tratamento certo." },
    { n: "02", icon: Wand2, title: "Consulta personalizada", desc: "Christiane avalia sua pele ou objetivo corporal antes de começar." },
    { n: "03", icon: Sparkles, title: "Seu primeiro tratamento", desc: "Sessão personalizada, sem compromisso de pacote na primeira vez." },
  ],
  en: [
    { n: "01", icon: Calendar, title: "Message us on WhatsApp", desc: "Tell us what you're looking for and we'll help you choose the right treatment." },
    { n: "02", icon: Wand2, title: "Personalized consultation", desc: "Christiane evaluates your skin or body goals before getting started." },
    { n: "03", icon: Sparkles, title: "Your first treatment", desc: "A personalized session, no package commitment required for your first visit." },
  ],
};

const copy = {
  pt: {
    eyebrow: "Nossos Tratamentos",
    title1: "Todos os",
    titleGold: "serviços",
    body: "Do skincare clínico ao contorno corporal, cada tratamento é personalizado por Christiane para entregar resultados visíveis e uma experiência relaxante.",
    skincareTitle: "Elite Skincare Treatments",
    bodyTitle: "Body Contour Treatments",
    cta: "Agendar",
    ctaFinal: "Não sabe qual tratamento é ideal para você?",
    ctaFinalBtn: "Fale com a gente no WhatsApp",
    firstTimeEyebrow: "Primeira vez aqui?",
    firstTimeTitle: "Como funciona sua primeira visita",
  },
  en: {
    eyebrow: "Our Treatments",
    title1: "All",
    titleGold: "services",
    body: "From clinical skincare to body contouring, every treatment is personalized by Christiane to deliver visible results and a relaxing experience.",
    skincareTitle: "Elite Skincare Treatments",
    bodyTitle: "Body Contour Treatments",
    cta: "Book now",
    ctaFinal: "Not sure which treatment is right for you?",
    ctaFinalBtn: "Talk to us on WhatsApp",
    firstTimeEyebrow: "First time here?",
    firstTimeTitle: "How your first visit works",
  },
};

const Services = () => {
  useReveal();
  usePageMeta(metaCopy);
  const { lang } = useLanguage();
  const t = copy[lang];
  const whatsappLink = buildWhatsAppLink(lang);

  return (
    <main className="relative">
      <Navbar />

      <section className="relative grain pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-primary/15 blur-3xl animate-bokeh" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-primary-glow/20 blur-3xl animate-bokeh" style={{ animationDelay: "2s" }} />
        </div>
        <div className="container text-center max-w-2xl mx-auto reveal">
          <span className="inline-flex items-center gap-2 font-accent text-primary text-xl">
            <span className="h-px w-10 bg-primary/60" />
            {t.eyebrow}
          </span>
          <h1 className="mt-3 font-display text-4xl md:text-6xl leading-[1.05] text-balance">
            {t.title1} <span className="gold-text italic font-accent">{t.titleGold}</span>
          </h1>
          <p className="mt-5 text-muted-foreground leading-relaxed">{t.body}</p>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="container">
          <h2 className="reveal font-display text-2xl md:text-3xl mb-8">{t.skincareTitle}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skincare[lang].map((s, i) => (
              <div
                key={s.title}
                className="reveal glass-card group overflow-hidden hover:-translate-y-1 hover:shadow-gold transition-all duration-500"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                {s.img && (
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={s.img} alt={s.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                )}
                <div className="p-6">
                  <span className="inline-block text-[10px] font-medium uppercase tracking-[0.15em] px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground">
                    {s.tag}
                  </span>
                  <h3 className="mt-3 text-lg font-display">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  <a href={whatsappLink} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground text-sm font-medium px-4 py-2 rounded-full shadow-gold hover:shadow-gold-strong hover:gap-3 transition-all">
                    {t.cta} <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="container">
          <h2 className="reveal font-display text-2xl md:text-3xl mb-8">{t.bodyTitle}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {bodyContour[lang].map((s, i) => (
              <div
                key={s.title}
                className="reveal overflow-hidden rounded-2xl bg-secondary text-secondary-foreground border border-primary/20 shadow-luxe group hover:-translate-y-1 hover:shadow-gold transition-all duration-500"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                {s.img && (
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={s.img} alt={s.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                )}
                <div className="p-6">
                  <span className="inline-block text-[10px] font-medium uppercase tracking-[0.15em] px-2.5 py-1 rounded-full bg-primary text-primary-foreground">
                    {s.tag}
                  </span>
                  <h3 className="mt-3 text-lg font-display text-secondary-foreground">{s.title}</h3>
                  <p className="mt-2 text-sm text-secondary-foreground/70 leading-relaxed">{s.desc}</p>
                  <a href={whatsappLink} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground text-sm font-medium px-4 py-2 rounded-full shadow-gold hover:shadow-gold-strong hover:gap-3 transition-all">
                    {t.cta} <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-secondary text-secondary-foreground">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto reveal">
            <span className="font-accent text-primary text-xl">{t.firstTimeEyebrow}</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-display text-secondary-foreground">{t.firstTimeTitle}</h2>
          </div>

          <div className="mt-14 relative grid md:grid-cols-3 gap-10">
            <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
            {firstTimeSteps[lang].map((s, i) => (
              <div key={s.n} className="reveal text-center" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="relative mx-auto w-16 h-16 rounded-full bg-secondary border border-primary/50 flex items-center justify-center shadow-gold">
                  <s.icon className="text-primary" size={24} />
                  <span className="absolute -top-2 -right-2 bg-gradient-gold text-primary-foreground text-[10px] font-bold w-7 h-7 rounded-full flex items-center justify-center">
                    {s.n}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-display text-secondary-foreground">{s.title}</h3>
                <p className="mt-2 text-sm text-secondary-foreground/70 max-w-xs mx-auto">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center reveal">
            <p className="text-secondary-foreground/70">{t.ctaFinal}</p>
            <a
              href={whatsappLink}
              target="_blank" rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground font-medium px-7 py-3.5 rounded-full shadow-gold hover:shadow-gold-strong transition-all"
            >
              <MessageCircle size={18} /> {t.ctaFinalBtn}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Services;
