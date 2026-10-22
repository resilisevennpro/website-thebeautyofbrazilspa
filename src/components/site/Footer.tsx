import { Instagram, MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { useLanguage } from "@/lib/language";
import { ONLINE_BOOKING_URL, useOnlineBookingCopy } from "@/lib/booking";
import logo from "@/assets/imagens/logo.webp";

const copy = {
  pt: {
    tagline: "Aesthetics SPA em Pembroke Pines, FL. Tratamentos de elite para pele e corpo com toque brasileiro.",
    navTitle: "Navegação",
    links: [
      { href: "#services", label: "Serviços" },
      { href: "#resultados", label: "Tratamentos" },
      { href: "#about", label: "Sobre" },
      { href: "#contato", label: "Contato" },
    ],
    contactTitle: "Contato",
    hours: "Seg–Sex 9h–18h · Sáb 9h–16h",
    rights: "Todos os direitos reservados",
  },
  en: {
    tagline: "Aesthetics SPA in Pembroke Pines, FL. Elite skincare and body contour treatments with a Brazilian touch.",
    navTitle: "Navigation",
    links: [
      { href: "#services", label: "Services" },
      { href: "#resultados", label: "Treatments" },
      { href: "#about", label: "About" },
      { href: "#contato", label: "Contact" },
    ],
    contactTitle: "Contact",
    hours: "Mon–Fri 9am–6pm · Sat 9am–4pm",
    rights: "All rights reserved",
  },
  es: {
    tagline: "Aesthetics SPA en Pembroke Pines, FL. Tratamientos Exclusivos para el Cuidado de la Piel.",
    navTitle: "Navegación",
    links: [
      { href: "#services", label: "Servicios" },
      { href: "#resultados", label: "Tratamientos" },
      { href: "#about", label: "Sobre mí" },
      { href: "#contato", label: "Contacto" },
    ],
    contactTitle: "Contacto",
    hours: "Lun–Vie 9h–18h · Sáb 9h–16h",
    rights: "Todos los derechos reservados",
  },
};

export const Footer = () => {
  const { lang } = useLanguage();
  const t = copy[lang];
  const whatsappLink = buildWhatsAppLink(lang);
  const onlineCopy = useOnlineBookingCopy();

  return (
    <footer className="border-t border-primary/20 bg-secondary text-secondary-foreground py-14">
      <div className="container grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2 font-display text-2xl">
            <img src={logo} alt="The Beauty of Brazil" width={40} height={40} loading="lazy" className="w-10 h-10 rounded-full" />
            The Beauty of <span className="gold-text">Brazil</span>
          </div>
          <p className="mt-3 text-sm text-secondary-foreground/70 max-w-xs">{t.tagline}</p>
        </div>
        <div>
          <div className="font-accent text-primary text-lg">{t.navTitle}</div>
          <ul className="mt-4 space-y-2 text-sm text-secondary-foreground/70">
            {t.links.map((l) => (
              <li key={l.href}><a href={l.href} className="hover:text-primary">{l.label}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <div className="font-accent text-primary text-lg">{t.contactTitle}</div>
          <div className="mt-4 flex gap-3">
            <a href="https://instagram.com/thebeautyofbrazilspa" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-primary/40 flex items-center justify-center hover:bg-primary/10 transition">
              <Instagram size={16} className="text-primary" />
            </a>
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-primary/40 flex items-center justify-center hover:bg-primary/10 transition">
              <MessageCircle size={16} className="text-primary" />
            </a>
          </div>
          <a href={ONLINE_BOOKING_URL} target="_blank" rel="noreferrer" className="mt-4 inline-block text-xs underline underline-offset-4 text-secondary-foreground/70 hover:text-primary transition-colors">
            {onlineCopy.button}
          </a>
          <p className="mt-4 text-xs text-secondary-foreground/70">11070 Pines Blvd Ste C-5</p>
          <p className="text-xs text-secondary-foreground/70">Pembroke Pines, FL 33025</p>
          <p className="mt-2 text-xs text-secondary-foreground/70">(954) 405-5414</p>
          <p className="mt-2 text-xs text-secondary-foreground/70">{t.hours}</p>
        </div>
      </div>
      <div className="container mt-10 pt-6 border-t border-primary/20 text-xs text-secondary-foreground/50 flex flex-col md:flex-row justify-between gap-2">
        <span>© 2026 The Beauty of Brazil Aesthetics SPA</span>
        <span>Pembroke Pines, FL · {t.rights}</span>
      </div>
    </footer>
  );
};
