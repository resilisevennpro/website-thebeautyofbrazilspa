import { useEffect, useState } from "react";
import { Leaf, Menu, X } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/whatsapp";
import { useLanguage } from "@/lib/language";

const links = {
  pt: [
    { href: "#servicos", label: "Serviços" },
    { href: "#resultados", label: "Tratamentos" },
    { href: "#sobre", label: "Sobre" },
    { href: "#contato", label: "Contato" },
  ],
  en: [
    { href: "#servicos", label: "Services" },
    { href: "#resultados", label: "Treatments" },
    { href: "#sobre", label: "About" },
    { href: "#contato", label: "Contact" },
  ],
};

const bookLabel = { pt: "Agendar Agora", en: "Book Now" };

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { lang, toggleLang } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-secondary/95 backdrop-blur-xl border-b border-primary/20 py-3 shadow-card-luxe"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="container flex items-center justify-between">
        <a href="#" className={`flex items-center gap-2 font-display text-xl md:text-2xl tracking-wide transition-colors ${scrolled ? "text-secondary-foreground" : "text-foreground"}`}>
          <Leaf className="text-primary" size={20} />
          The Beauty of <span className="gold-text font-semibold">Brazil</span>
        </a>
        <ul className={`hidden md:flex items-center gap-8 text-sm transition-colors ${scrolled ? "text-secondary-foreground/80" : "text-muted-foreground"}`}>
          {links[lang].map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="hover:text-primary transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleLang}
            aria-label="Toggle language"
            className={`inline-flex items-center gap-1 text-xs font-medium px-3 py-2 rounded-full border transition-all ${
              scrolled ? "border-primary/40 text-secondary-foreground" : "border-primary/40 text-foreground"
            } hover:bg-primary/10`}
          >
            <span className={lang === "pt" ? "text-primary" : ""}>PT</span>
            <span className="opacity-40">/</span>
            <span className={lang === "en" ? "text-primary" : ""}>EN</span>
          </button>
          <a
            href={WHATSAPP_LINK}
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
            className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1.5 rounded-full border border-primary/40 text-foreground"
          >
            <span className={lang === "pt" ? "text-primary" : ""}>PT</span>
            <span className="opacity-40">/</span>
            <span className={lang === "en" ? "text-primary" : ""}>EN</span>
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
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-foreground hover:text-primary">
              {l.label}
            </a>
          ))}
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" onClick={() => setOpen(false)} className="bg-gradient-gold text-primary-foreground font-medium px-5 py-2.5 rounded-full text-center">
            {bookLabel[lang]}
          </a>
        </div>
      )}
    </header>
  );
};
