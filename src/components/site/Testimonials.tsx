import { useEffect, useRef, useState } from "react";
import { Star, Quote } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { useLanguage } from "@/lib/language";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";

const copy = {
  pt: {
    eyebrow: "Depoimentos",
    title1: "O que nossas",
    titleGold: "clientes dizem",
    body: "Avaliações reais do Google de quem já viveu a experiência The Beauty of Brazil.",
  },
  en: {
    eyebrow: "Testimonials",
    title1: "What our",
    titleGold: "clients say",
    body: "Real Google reviews from people who've experienced The Beauty of Brazil.",
  },
  es: {
    eyebrow: "Testimonios",
    title1: "Lo que dicen",
    titleGold: "nuestros clientes",
    body: "Reseñas reales de Google de quienes ya vivieron la experiencia The Beauty of Brazil.",
  },
};

const testimonials = {
  pt: [
    {
      name: "Porsha Morgan",
      text: "Esse foi o melhor facial que eu já fiz na vida. Tão relaxante! Comprei o Glow facial e meu rosto ficou renovado. Christiane \"Chris\" explicou cada etapa em detalhes e me deu um plano para a pele atingir seu potencial máximo. Saí radiante de verdade!",
    },
    {
      name: "Ellen Almeida",
      text: "Fiz meu primeiro tratamento facial com a Christiane e foi uma experiência maravilhosa! Ela foi incrivelmente gentil, atenciosa, qualificada e cuidadosa durante todo o tratamento. Minha pele chegou opaca e saiu transformada.",
    },
    {
      name: "Gabriella Metelits",
      text: "Obrigada por um facial incrível e uma conversa ainda melhor. Saí me sentindo energizada e pronta para encarar o dia com o rosto renovado.",
    },
    {
      name: "Anita Paiva",
      text: "A melhor massagem esculpida que eu fiz na minha vida!! Não vejo a hora de fazer as outras sessões!!! Recomendo demais.",
    },
    {
      name: "Michelle C",
      text: "Tive resultados incríveis com a Chris! Ela é gentil e profissional, e sua sala é super limpa e bem decorada. Recomendo demais os serviços dela e voltarei em breve!",
    },
    {
      name: "Fabio Wanzeler",
      text: "The Beauty of Brazil Aesthetics SPA oferece o cuidado que você precisa. Agende seu horário com quem entende do assunto!",
    },
  ],
  en: [
    {
      name: "Porsha Morgan",
      text: "This was the absolute best facial that I've ever had. So relaxing! I purchased the Glow facial and my face feels rejuvenated. Christiane \"Chris\" thoroughly explained every step in depth and gave me a plan to get my skin to its fullest potential. I truly left out glowing!",
    },
    {
      name: "Ellen Almeida",
      text: "Had my first facial treatment with Christiane, and it was such a wonderful experience! She was incredibly kind, caring, knowledgeable, and accommodating throughout the entire treatment. My skin looked dull when arriving, but left transformed.",
    },
    {
      name: "Gabriella Metelits",
      text: "Thank you for a great facial and an even greater conversation. Left feeling energized and ready to conquer the day with a fresh face.",
    },
    {
      name: "Anita Paiva",
      text: "The best sculpting massage I've ever had in my life!! Can't wait for the other sessions!!! I highly recommend it.",
    },
    {
      name: "Michelle C",
      text: "I had amazing results with Chris! She is kind and professional, and her room is super clean and beautifully decorated. I definitely recommend her services and I will be back!",
    },
    {
      name: "Fabio Wanzeler",
      text: "The Beauty of Brazil Aesthetics SPA provides the care you need, schedule your appointment with who knows the best!",
    },
  ],
  es: [
    {
      name: "Porsha Morgan",
      text: "Este fue el mejor facial que he tenido en mi vida. ¡Tan relajante! Compré el Glow facial y mi rostro se siente rejuvenecido. Christiane \"Chris\" explicó cada paso a fondo y me dio un plan para que mi piel alcance su máximo potencial. ¡Salí verdaderamente radiante!",
    },
    {
      name: "Ellen Almeida",
      text: "Tuve mi primer tratamiento facial con Christiane, ¡y fue una experiencia maravillosa! Fue increíblemente amable, atenta, conocedora y servicial durante todo el tratamiento. Mi piel llegó opaca pero salió transformada.",
    },
    {
      name: "Gabriella Metelits",
      text: "Gracias por un facial increíble y una conversación aún mejor. Salí sintiéndome energizada y lista para enfrentar el día con el rostro renovado.",
    },
    {
      name: "Anita Paiva",
      text: "¡La mejor masaje esculpido que he tenido en mi vida!! No puedo esperar a las próximas sesiones!!! Lo recomiendo muchísimo.",
    },
    {
      name: "Michelle C",
      text: "¡Tuve resultados increíbles con Chris! Es amable y profesional, y su sala está súper limpia y bellamente decorada. Definitivamente recomiendo sus servicios, ¡volveré pronto!",
    },
    {
      name: "Fabio Wanzeler",
      text: "The Beauty of Brazil Aesthetics SPA ofrece el cuidado que necesita, ¡reserve su cita con quien más sabe!",
    },
  ],
};

const TestimonialCard = ({ item, delay = 0 }: { item: { name: string; text: string }; delay?: number }) => (
  <figure className="reveal luxe-card p-6 flex flex-col h-full" style={{ transitionDelay: `${delay}ms` }}>
    <Quote className="text-primary/30" size={28} />
    <div className="mt-3 flex gap-0.5">
      {[...Array(5)].map((_, s) => (
        <Star key={s} size={14} className="text-primary fill-primary" />
      ))}
    </div>
    <blockquote className="mt-3 text-sm text-foreground/90 leading-relaxed flex-1">"{item.text}"</blockquote>
    <figcaption className="mt-4 font-accent text-secondary text-base">{item.name}</figcaption>
  </figure>
);

export const Testimonials = () => {
  const { lang } = useLanguage();
  const t = copy[lang];
  const items = testimonials[lang];
  const autoplay = useRef(Autoplay({ delay: 5000, stopOnInteraction: false }));
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!carouselApi) return;
    setCurrentSlide(carouselApi.selectedScrollSnap());
    const onSelect = () => setCurrentSlide(carouselApi.selectedScrollSnap());
    carouselApi.on("select", onSelect);
    return () => {
      carouselApi.off("select", onSelect);
    };
  }, [carouselApi]);

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div aria-hidden className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-gradient-radial-gold blur-3xl opacity-50 pointer-events-none" />

      <div className="container relative">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="font-accent text-primary text-xl">{t.eyebrow}</span>
          <h2 className="mt-2 text-4xl md:text-6xl font-display text-balance">
            {t.title1} <span className="gold-text italic font-accent">{t.titleGold}</span>
          </h2>
          <p className="mt-5 text-muted-foreground">{t.body}</p>
        </div>

        <div className="mt-14 sm:hidden">
          <Carousel opts={{ loop: true }} plugins={[autoplay.current]} setApi={setCarouselApi} className="reveal">
            <CarouselContent>
              {items.map((item, i) => (
                <CarouselItem key={i}>
                  <TestimonialCard item={item} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="mt-5 flex justify-center gap-2">
            {items.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`${i + 1}`}
                onClick={() => carouselApi?.scrollTo(i)}
                className={`h-2 rounded-full transition-all ${
                  i === currentSlide ? "w-6 bg-primary" : "w-2 bg-primary/30"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="mt-14 hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <TestimonialCard key={i} item={item} delay={i * 60} />
          ))}
        </div>
      </div>
    </section>
  );
};
