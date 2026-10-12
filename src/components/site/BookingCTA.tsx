import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { useLanguage } from "@/lib/language";
import { ONLINE_BOOKING_URL, useOnlineBookingCopy } from "@/lib/booking";

const copy = {
  pt: {
    eyebrow: "Vamos conversar",
    title1: "Pronta para transformar sua",
    titleGold: "pele?",
    body: "Clique abaixo para falar com a gente no WhatsApp, ou ligue para (954) 405-5414 para marcar seu horário personalizado.",
    callTitle: "Ligue ou Envie Mensagem",
    cta: "Agendar no WhatsApp",
    or: "ou",
  },
  en: {
    eyebrow: "Let's talk",
    title1: "Ready to transform your",
    titleGold: "skin?",
    body: "Click below to message us on WhatsApp, or call us at (954) 405-5414 to schedule your custom session.",
    callTitle: "Call or Text",
    cta: "Book on WhatsApp",
    or: "or",
  },
  es: {
    eyebrow: "Hablemos",
    title1: "¿Lista para transformar su",
    titleGold: "piel?",
    body: "Haga clic abajo para escribirnos por WhatsApp, o llámenos al (954) 405-5414 para programar su sesión personalizada.",
    callTitle: "Llame o Envíe un Mensaje",
    cta: "Reservar por WhatsApp",
    or: "o",
  },
};

export const BookingCTA = () => {
  const { lang } = useLanguage();
  const t = copy[lang];
  const onlineCopy = useOnlineBookingCopy();
  const whatsappLink = buildWhatsAppLink(lang);

  return (
    <section id="contato" className="relative pt-12 md:pt-16 pb-24 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial-gold blur-3xl" />
        <div className="absolute bottom-10 left-10 w-40 h-40 rounded-full bg-primary/20 blur-3xl animate-bokeh" />
        <div className="absolute top-20 right-20 w-56 h-56 rounded-full bg-primary-glow/15 blur-3xl animate-bokeh" style={{animationDelay:"3s"}} />
      </div>

      <div className="container max-w-5xl">
        <div className="text-center reveal">
          <span className="font-accent text-primary text-xl">{t.eyebrow}</span>
          <h2 className="mt-2 text-4xl md:text-6xl font-display text-balance">
            {t.title1} <span className="gold-text">{t.titleGold}</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-lg max-w-xl mx-auto">{t.body}</p>
        </div>

        <div className="mt-14 max-w-md mx-auto reveal">
          <div className="glass-card p-8 flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-2xl bg-[#25D366]/15 border border-[#25D366]/40 flex items-center justify-center text-[#25D366]">
              <MessageCircle size={26} />
            </div>
            <h3 className="mt-5 text-2xl font-display">{t.callTitle}</h3>
            <p className="mt-2 text-muted-foreground text-sm">(954) 405-5414</p>

            <p className="mt-7 text-sm text-muted-foreground">{onlineCopy.question}</p>
            <a
              href={ONLINE_BOOKING_URL}
              target="_blank" rel="noreferrer"
              className="mt-3 w-full inline-flex items-center justify-center gap-2 bg-emerald-600 text-white font-medium px-5 py-3 rounded-full shadow-luxe hover:bg-emerald-500 transition-all"
            >
              {onlineCopy.button}
            </a>

            <div className="mt-6 w-full flex items-center gap-3 text-xs text-muted-foreground before:h-px before:flex-1 before:bg-border after:h-px after:flex-1 after:bg-border">
              {t.or}
            </div>

            <a
              href={whatsappLink}
              target="_blank" rel="noreferrer"
              className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-gradient-gold text-primary-foreground font-medium px-5 py-3 rounded-full shadow-gold hover:shadow-gold-strong transition-all"
            >
              <MessageCircle size={18} /> {t.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
