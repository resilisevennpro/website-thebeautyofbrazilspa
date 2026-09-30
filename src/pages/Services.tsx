import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import { usePageMeta } from "@/hooks/usePageMeta";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { useLanguage } from "@/lib/language";
import { ArrowRight, Calendar, Info, MessageCircle, Sparkles, Wand2 } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import glowImg from "@/assets/imagens/service-signature-glow.webp";
import antiAgingImg from "@/assets/imagens/service-anti-aging.webp";
import sculptImg from "@/assets/imagens/service-body-contour-sculpt.jpg";
import firmingImg from "@/assets/imagens/service-firming-rf.jpeg";
import diamondRadianceImg from "@/assets/imagens/service-diamond-radiance.png";
import collagenRenewalImg from "@/assets/imagens/service-collagen-renewal.png";
import clarifyingAcneImg from "@/assets/imagens/service-clarifying-acne.png";
import microcurrentSculptImg from "@/assets/imagens/service-microcurrent-sculpt.png";
import backDetoxImg from "@/assets/imagens/service-back-detox.png";
import nanoInfusionImg from "@/assets/imagens/service-nano-infusion.png";
import contourDefineImg from "@/assets/imagens/service-contour-define.avif";
import peelImg from "@/assets/imagens/chemical-peel-facial.webp";

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

type Treatment = {
  title: string;
  tag: string;
  img?: string;
  desc: string;
  fullDesc: string;
};

const skincare: Record<"pt" | "en", Treatment[]> = {
  pt: [
    { title: "Signature Glow Facial", tag: "Hidratação & Brilho", img: glowImg, desc: "Facial de limpeza profunda com terapia a vácuo e alta frequência, finalizado com máscara hidratante para uma pele equilibrada e radiante.", fullDesc: "Nosso facial de luxo exclusivo é feito para revitalizar e iluminar a pele instantaneamente. O tratamento começa com uma limpeza profunda potencializada por vapor suave para abrir os poros e preparar a pele para resultados ideais. Uma esfoliação delicada e eficaz suaviza a textura e refina a aparência dos poros, seguida de terapia a vácuo facial para estimular a circulação. Em seguida, aplicamos tecnologia de alta frequência para energizar a pele com benefícios purificantes e antibacterianos. A experiência é finalizada com uma máscara hidratante personalizada, deixando a pele equilibrada, radiante e renovada." },
    { title: "Diamond Radiance Facial", tag: "Renovação da Pele", img: diamondRadianceImg, desc: "Tratamento de renovação com esfoliação de diamante, tecnologia de ultrassom e sérum nutritivo para uma pele mais lisa e radiante.", fullDesc: "Esse tratamento de renovação é feito para promover limpeza profunda e revitalização da pele. Começa com uma limpeza purificante e vapor suave para abrir os poros, seguido de esfoliação com diamante para remover células mortas e revelar uma pele mais lisa e radiante. O tratamento inclui tecnologia de ultrassom para acalmar a pele, um sérum nutritivo para hidratação, e o que há de melhor em nutrição para a saúde da pele. Finaliza com uma máscara ultra-hidratante que completa o efeito radiante." },
    { title: "Collagen Renewal Facial", tag: "Antienvelhecimento", img: collagenRenewalImg, desc: "Facial antienvelhecimento que combina limpeza profunda, séruns potencializados por ultrassom e crioterapia para lifting, hidratação e suavização de linhas finas.", fullDesc: "Esse facial de luxo antienvelhecimento é feito para limpar, firmar, suavizar e restaurar a radiância jovial da pele. O tratamento avançado de estímulo de colágeno combina limpeza profunda e esfoliação refinada com nossos cuidados antienvelhecimento exclusivos, potencializados por ultrassom para melhorar a penetração dos séruns escolhidos para seu tipo de pele. Finaliza com uma crioterapia refrescante e máscara de regeneração com células-tronco, deixando a pele visivelmente mais firme, hidratada e luminosa. Ideal para melhorar elasticidade, suavizar linhas finas e uniformizar o tom e a textura da pele." },
    { title: "Radiofrequency Anti-Aging Facial", tag: "Antienvelhecimento", img: antiAgingImg, desc: "Usa tecnologia de radiofrequência para estimular a produção de colágeno, firmar a pele e reduzir linhas finas e rugas.", fullDesc: "O Radiofrequency Anti-Aging Facial usa tecnologia avançada de radiofrequência para estimular a produção de colágeno, firmando a pele e reduzindo a aparência de linhas finas e rugas. É um tratamento não invasivo que promove um brilho jovial, melhorando a textura e a firmeza da pele." },
    { title: "Clarifying Acne Facial", tag: "Pele Oleosa & Acne", img: clarifyingAcneImg, desc: "Tratamento direcionado para pele oleosa e com tendência à acne, com extrações, alta frequência e máscara calmante para reduzir inflamação.", fullDesc: "Nosso tratamento direcionado para pele oleosa e com tendência à acne limpa profundamente, esfolia e desobstrui os poros congestionados. Inclui extrações, alta frequência e nossa máscara calmante exclusiva para reduzir inflamação e controlar a oleosidade excessiva. É um dos tratamentos mais procurados pelas nossas clientes com pele acneica." },
    { title: "Microcurrent Sculpt Facial", tag: "Lifting Facial", img: microcurrentSculptImg, desc: "Tratamento não invasivo que usa microcorrente para tonificar os músculos faciais, proporcionando um efeito lifting e esculpido.", fullDesc: "Tratamento não invasivo de firmamento da pele, feito para tonificar e definir os contornos naturais do seu rosto. Usando tecnologia de microcorrente, esse facial estimula os músculos faciais por meio de pequenas contrações, melhorando o contorno do rosto, a firmeza da pele e proporcionando efeito lifting. Você vai notar uma aparência mais levantada, renovada e esculpida, sem tempo de recuperação." },
    { title: "Back Detox Facial", tag: "Limpeza Profunda", img: backDetoxImg, desc: "Tratamento de limpeza profunda para as costas, combinando esfoliação, extrações e alta frequência para uma pele limpa e renovada.", fullDesc: "O Back Detox Facial é um tratamento completo que limpa profundamente as costas para tratar cravos e congestionamento. Esse serviço inclui esfoliação, extrações, terapia de alta frequência com benefícios antibacterianos, e finaliza com uma máscara purificante para acne, garantindo uma pele lisa, limpa e renovada." },
    { title: "Brighten & Glow Peel", tag: "Manchas & Uniformidade", img: peelImg, desc: "Peeling renovador que trata hiperpigmentação e danos solares, revelando uma pele mais lisa e uniforme.", fullDesc: "O Brighten & Glow Peel é um tratamento renovador avançado que trata eficazmente hiperpigmentação, danos solares e tom de pele desigual. O peeling suave esfolia a pele opaca, clareia manchas escuras e melhora a claridade da pele, resultando em uma pele mais lisa e radiante, com brilho saudável e uniforme. Diferentes peelings estão disponíveis de acordo com o seu tipo de pele." },
    { title: "Nano Infusion Facial", tag: "Hidratação & Textura", img: nanoInfusionImg, desc: "Usa tecnologia de nano-agulhamento para infundir séruns especializados e antioxidantes, melhorando hidratação e textura sem tempo de recuperação.", fullDesc: "Um dos nossos tratamentos não invasivos mais procurados, que usa tecnologia de nano-agulhamento para criar microcanais na pele e infundir séruns especializados, antioxidantes e complexos de regeneração celular personalizados para as necessidades da sua pele. Esse processo de infusão ajuda a melhorar a hidratação, refinar a textura, suavizar a aparência de linhas finas e promover um brilho saudável e luminoso, sem tempo de recuperação. Ideal para todos os tipos de pele, inclusive sensível, e pode ser combinado com o Signature Glow Facial para resultados ainda melhores." },
  ],
  en: [
    { title: "Signature Glow Facial", tag: "Hydration & Glow", img: glowImg, desc: "A deep-cleansing facial with vacuum therapy and high-frequency technology, finished with a hydrating mask for balanced, radiant skin.", fullDesc: "Our exclusive luxury facial is designed to instantly revive and illuminate the skin. This comprehensive treatment begins with a deep cleanse enhanced by soothing steam to open pores and prepare the skin for optimal results. A gentle yet effective exfoliation smooths texture and refines the appearance of pores, followed by vacuum therapy facial cupping to stimulate circulation and promote skin circulation. High-frequency technology is then applied to energize the skin and deliver purifying, antibacterial benefits. The experience is completed with a customized hydrating mask, leaving the skin balanced, radiant, and refreshed." },
    { title: "Diamond Radiance Facial", tag: "Skin Resurfacing", img: diamondRadianceImg, desc: "A resurfacing treatment with diamond exfoliation, ultrasound technology, and a nutrient serum for a smoother, more radiant complexion.", fullDesc: "This resurfacing treatment is designed to provide deep cleansing and renewal of the skin. It begins with a purifying cleanse and soothing steam to gently open pores, followed by diamond exfoliation to remove dead skin cells and reveal a smoother, more radiant complexion. Our treatment includes ultrasound technology to soothe the skin, a nutrient serum to provide hydration, and the ultimate in skin nutrition for optimal skin health. The treatment is sealed off with an ultra-hydrating mask to complete your skin's radiant appearance." },
    { title: "Collagen Renewal Facial", tag: "Anti-Aging", img: collagenRenewalImg, desc: "An age-defying facial combining deep cleansing, ultrasound-enhanced serums, and cryo-cooling therapy to lift, hydrate, and smooth fine lines.", fullDesc: "Our luxurious, age-defying facial is designed to cleanse, firm, smooth, and restore youthful radiance. This advanced collagen-boosting treatment combines deep cleansing and refined exfoliation with our signature anti-aging skincare, coupled with ultrasound technology to enhance the penetration of anti-aging serums selected for your skin type. The treatment is finished with a refreshing cryo-cooling therapy and a stem cell regeneration facial mask, leaving skin visibly lifted, hydrated, and luminous. Ideal for improving elasticity, softening fine lines, and enhancing overall tone and texture." },
    { title: "Radiofrequency Anti-Aging Facial", tag: "Anti-Aging", img: antiAgingImg, desc: "Uses Radiofrequency technology to stimulate collagen production, tighten skin, and reduce the appearance of fine lines and wrinkles.", fullDesc: "The Radiofrequency Anti-Aging Facial employs advanced radiofrequency technology to stimulate collagen production, effectively tightening the skin and reducing the appearance of fine lines and wrinkles. This non-invasive treatment promotes a youthful glow, enhancing skin texture and firmness for a revitalized complexion." },
    { title: "Clarifying Acne Facial", tag: "Acne & Oily Skin", img: clarifyingAcneImg, desc: "A targeted treatment for acne-prone and oily skin, with extractions, high-frequency, and a calming mask to reduce inflammation.", fullDesc: "Our targeted acne treatment for acne-prone and oily skin deeply cleanses, exfoliates, and clears congested pores. This treatment includes extractions, high-frequency, and our signature calming mask to reduce inflammation and control excess oil. It's one of our most popular treatments for acne-prone clients." },
    { title: "Microcurrent Sculpt Facial", tag: "Facial Lifting", img: microcurrentSculptImg, desc: "A non-invasive treatment that uses microcurrent technology to tone facial muscles for a lifted, sculpted appearance.", fullDesc: "A non-invasive skin tightening treatment designed to tone and define your skin's natural features. Using microcurrent technology, this facial stimulates facial muscles by producing small muscle contractions across the skin to enhance facial contour, improve skin firmness, and provide a lifting effect. You'll notice a more lifted, refreshed, and sculpted appearance with no downtime." },
    { title: "Back Detox Facial", tag: "Deep Cleanse", img: backDetoxImg, desc: "A deep-cleansing treatment for the back, combining exfoliation, extractions, and high-frequency therapy for clear, refreshed skin.", fullDesc: "The Back Detox Facial is a comprehensive treatment that deeply cleanses the back to target breakouts and congestion. This service incorporates exfoliation, extractions, high-frequency therapy for antibacterial benefits, and concludes with a purifying acne treatment mask, ensuring smooth, clear, and refreshed skin." },
    { title: "Brighten & Glow Peel", tag: "Pigmentation & Tone", img: peelImg, desc: "A resurfacing peel that targets hyperpigmentation and sun damage, revealing a smoother, more even complexion.", fullDesc: "Brighten & Glow Peel is an advanced resurfacing treatment that effectively targets hyperpigmentation, sun damage, and uneven skin tone. This gentle peel exfoliates dull skin, fades dark spots, and enhances clarity, resulting in a smoother, radiant complexion with a healthy, even glow. Various peels are available depending on your skin type." },
    { title: "Nano Infusion Facial", tag: "Hydration & Texture", img: nanoInfusionImg, desc: "Uses nano-needling technology to deliver specialized serums and antioxidants, improving hydration and texture with no downtime.", fullDesc: "One of our most popular non-invasive treatments, using nano-needling technology to create microchannels in the skin to deliver specialized serums, antioxidants, and cell regeneration complexes tailored to your skin's unique needs. This infusion process helps improve hydration, refine texture, soften the appearance of fine lines, and promote a healthy, luminous glow with no downtime. Ideal for all skin types, including sensitive skin, and can be paired with the Signature Glow Facial for optimal results." },
  ],
};

const bodyContour: Record<"pt" | "en", Treatment[]> = {
  pt: [
    { title: "Body Contour Sculpt Treatment", tag: "Redução de Gordura", img: sculptImg, desc: "Serviço exclusivo 3 em 1 que combina ativação linfática, cavitação e radiofrequência para redução de gordura e firmamento da pele.", fullDesc: "O Body Contour Sculpt Treatment é um serviço exclusivo 3 em 1 que ativa o sistema linfático, utiliza cavitação e emprega tecnologia de radiofrequência para redução eficaz de gordura e firmamento da pele. O tratamento é finalizado com a aplicação de um creme emagrecedor especializado para potencializar os resultados e promover um contorno mais definido." },
    { title: "Contour & Define Body Treatment", tag: "Contorno Corporal", img: contourDefineImg, desc: "Nosso método brasileiro 4 em 1 que combina ativação linfática, cavitação, radiofrequência e terapia a vácuo para o contorno corporal definitivo.", fullDesc: "Esse tratamento combina nossas tecnologias emagrecedoras definitivas em nosso método brasileiro 4 em 1, que incorpora ativação do sistema linfático, cavitação e radiofrequência, finalizado com tecnologia a vácuo para o contorno corporal definitivo. É feito para reduzir gordura localizada, firmar a pele solta e ajudar na redução de celulite, usando nossa técnica brasileira certificada. Bônus: inclui envolvimento corporal (body wrap) ao final do tratamento por tempo limitado. Recomendado em pacotes de 6 sessões para melhores resultados." },
    { title: "Firming Radiofrequency Treatment", tag: "Firmeza da Pele", img: firmingImg, desc: "Energia avançada de RF que firma e tonifica a pele enquanto reduz a aparência de celulite, finalizado com drenagem por terapia a vácuo.", fullDesc: "O Firming Radiofrequency Treatment utiliza energia avançada de RF para gerar calor na pele, firmando e tonificando enquanto reduz a aparência de celulite. É um procedimento não invasivo, sem tempo de recuperação, que permite desfrutar de uma pele mais lisa e firme. O tratamento é finalizado com drenagem por Terapia a Vácuo para quebrar ainda mais a gordura e melhorar o contorno." },
  ],
  en: [
    { title: "Body Contour Sculpt Treatment", tag: "Fat Reduction", img: sculptImg, desc: "A signature 3-in-1 service combining lymphatic activation, cavitation, and radiofrequency for fat reduction and skin tightening.", fullDesc: "Body Contour Sculpt Treatment is a signature 3-in-1 service that activates the lymphatic system, utilizes cavitation, and employs radiofrequency technology for effective fat reduction and skin tightening. The treatment concludes with the application of our specialized slimming cream to enhance results and promote a more contoured appearance." },
    { title: "Contour & Define Body Treatment", tag: "Body Contouring", img: contourDefineImg, desc: "Our Brazilian 4-in-1 method combining lymphatic activation, cavitation, radiofrequency, and vacuum therapy for the ultimate body sculpting.", fullDesc: "This treatment combines our ultimate slimming technologies in our 4-in-1 Brazilian method, incorporating activation of the lymphatic system, cavitation, and radiofrequency, finished off with vacuum technology for the ultimate body sculpting treatment. It's designed to reduce stubborn fat, tighten loose skin, and aid in the reduction of cellulite and toning, using our Brazilian certified technique. Bonus: includes a body wrap at the end of treatment for a limited time. Recommended in packages of 6 sessions for optimal results." },
    { title: "Firming Radiofrequency Treatment", tag: "Skin Firming", img: firmingImg, desc: "Advanced RF energy tightens and tones skin while reducing the appearance of cellulite, completed with vacuum therapy drainage.", fullDesc: "Firming Radiofrequency Treatment utilizes advanced RF energy to generate heat within the skin, effectively tightening and toning while reducing the appearance of cellulite. This non-invasive procedure requires no downtime, allowing clients to enjoy smoother, firmer skin. Our treatment is completed with our Vacuum Therapy drainage to further break down fat and enhance contouring." },
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
    details: "Ver detalhes",
    ctaFinal: "Não sabe qual tratamento é ideal para você?",
    ctaFinalBtn: "Fale com a gente no WhatsApp",
    firstTimeEyebrow: "Primeira vez aqui?",
    firstTimeTitle: "Como funciona sua primeira visita",
    modalCta: "Agendar no WhatsApp",
  },
  en: {
    eyebrow: "Our Treatments",
    title1: "All",
    titleGold: "services",
    body: "From clinical skincare to body contouring, every treatment is personalized by Christiane to deliver visible results and a relaxing experience.",
    skincareTitle: "Elite Skincare Treatments",
    bodyTitle: "Body Contour Treatments",
    cta: "Book now",
    details: "See details",
    ctaFinal: "Not sure which treatment is right for you?",
    ctaFinalBtn: "Talk to us on WhatsApp",
    firstTimeEyebrow: "First time here?",
    firstTimeTitle: "How your first visit works",
    modalCta: "Book on WhatsApp",
  },
};

const Services = () => {
  useReveal();
  usePageMeta(metaCopy);
  const { lang } = useLanguage();
  const t = copy[lang];
  const whatsappLink = buildWhatsAppLink(lang);
  const [selected, setSelected] = useState<Treatment | null>(null);

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
                  <div className="mt-4 flex items-center gap-3">
                    <a href={whatsappLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground text-sm font-medium px-4 py-2 rounded-full shadow-gold hover:shadow-gold-strong hover:gap-3 transition-all">
                      {t.cta} <ArrowRight size={14} />
                    </a>
                    <button
                      onClick={() => setSelected(s)}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-secondary hover:text-primary transition-colors"
                    >
                      <Info size={14} /> {t.details}
                    </button>
                  </div>
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
                  <div className="mt-4 flex items-center gap-3">
                    <a href={whatsappLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground text-sm font-medium px-4 py-2 rounded-full shadow-gold hover:shadow-gold-strong hover:gap-3 transition-all">
                      {t.cta} <ArrowRight size={14} />
                    </a>
                    <button
                      onClick={() => setSelected(s)}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-secondary-foreground/80 hover:text-primary transition-colors"
                    >
                      <Info size={14} /> {t.details}
                    </button>
                  </div>
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

      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-w-lg">
          {selected && (
            <>
              {selected.img && (
                <div className="-mx-6 -mt-6 aspect-[16/9] overflow-hidden rounded-t-lg">
                  <img src={selected.img} alt={selected.title} className="w-full h-full object-cover" />
                </div>
              )}
              <DialogHeader>
                <span className="inline-block w-fit text-[10px] font-medium uppercase tracking-[0.15em] px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground">
                  {selected.tag}
                </span>
                <DialogTitle className="font-display text-2xl mt-2">{selected.title}</DialogTitle>
              </DialogHeader>
              <p className="text-sm text-muted-foreground leading-relaxed">{selected.fullDesc}</p>
              <a
                href={whatsappLink}
                target="_blank" rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-gold text-primary-foreground font-medium px-6 py-3 rounded-full shadow-gold hover:shadow-gold-strong transition-all"
              >
                <MessageCircle size={16} /> {t.modalCta}
              </a>
            </>
          )}
        </DialogContent>
      </Dialog>
    </main>
  );
};

export default Services;
