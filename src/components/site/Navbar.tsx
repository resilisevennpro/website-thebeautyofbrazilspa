import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { useLanguage } from "@/lib/language";
import logo from "@/assets/imagens/logo.png";

const links = {
  pt: [
    { href: "/", label: "Início" },
    { href: "/#servicos", label: "Destaques" },
    { href: "/services", label: "Todos os Serviços" },
    { href: "/#sobre", label: "Sobre" },
    { href: "/#contato", label: "Contato" },
  ],
  en: [
    { href: "/", label: "Home" },
    { href: "/#servicos", label: "Highlights" },
    { href: "/services", label: "All Services" },
    { href: "/#sobre", label: "About" },
    { href: "/#contato", label: "Contact" },
  ],
};

const bookLabel = { pt: "Agendar Agora", en: "Book Now" };

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { lang, toggleLang } = useLanguage();
  const whatsappLink = buildWhatsAppLink(lang);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-secondary/95 backdrop-blur-xl border-b border-primary/20 py-3 shadow-card-luxe">
      <nav className="container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-display text-xl md:text-2xl tracking-wide text-secondary-foreground">
          <img src={logo} alt="The Beauty of Brazil" className="w-9 h-9 rounded-full" />
          The Beauty of <span className="gold-text font-semibold">Brazil</span>
        </Link>
        <ul className="hidden md:flex items-center gap-8 text-sm text-secondary-foreground/80">
          {links[lang].map((l) => (
            <li key={l.href}>
              <Link
                to={l.href}
                className="hover:text-primary transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleLang}
            aria-label="Toggle language"
            className="inline-flex items-center gap-1 text-xs font-medium px-3 py-2 rounded-full border border-primary/40 transition-all hover:bg-primary/10"
          >
            <span className={lang === "pt" ? "text-primary" : "text-secondary-foreground/60"}>PT</span>
            <span className="text-secondary-foreground/40">/</span>
            <span className={lang === "en" ? "text-primary" : "text-secondary-foreground/60"}>EN</span>
          </button>
          <a
            href={whatsappLink}
            target="_blank" rel="noreferrer"
            className="shimmer inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground font-medium px-5 py-2.5 rounded-full shadow-gold hover:shadow-gold-strong transition-all"
          >
            {bookLabel[lang]}
          </a>
        </div>
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleLang}
            aria-label="Toggle language"
            className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1.5 rounded-full border border-primary/40"
          >
            <span className={lang === "pt" ? "text-primary" : "text-secondary-foreground/60"}>PT</span>
            <span className="text-secondary-foreground/40">/</span>
            <span className={lang === "en" ? "text-primary" : "text-secondary-foreground/60"}>EN</span>
          </button>
          <button
            className="text-primary"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="md:hidden mt-4 mx-4 glass-card p-6 flex flex-col gap-4">
          {links[lang].map((l) => (
            <Link key={l.href} to={l.href} onClick={() => setOpen(false)} className="text-foreground hover:text-primary">
              {l.label}
            </Link>
          ))}
          <a href={whatsappLink} target="_blank" rel="noreferrer" onClick={() => setOpen(false)} className="bg-gradient-gold text-primary-foreground font-medium px-5 py-2.5 rounded-full text-center">
            {bookLabel[lang]}
          </a>
        </div>
      )}
    </header>
  );
};
