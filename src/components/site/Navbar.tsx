import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useLanguage, type Lang } from "@/lib/language";
import { BookingChoiceDialog } from "@/components/site/BookingChoiceDialog";
import logo from "@/assets/imagens/logo.webp";

const links: Record<Lang, { href: string; label: string }[]> = {
  pt: [
    { href: "/", label: "Início" },
    { href: "/#services", label: "Destaques" },
    { href: "/services", label: "Todos os Serviços" },
    { href: "/#about", label: "Sobre" },
    { href: "/#contato", label: "Contato" },
  ],
  en: [
    { href: "/", label: "Home" },
    { href: "/#services", label: "Highlights" },
    { href: "/services", label: "All Services" },
    { href: "/#about", label: "About" },
    { href: "/#contato", label: "Contact" },
  ],
  es: [
    { href: "/", label: "Inicio" },
    { href: "/#services", label: "Destacados" },
    { href: "/services", label: "Todos los Servicios" },
    { href: "/#about", label: "Sobre mí" },
    { href: "/#contato", label: "Contacto" },
  ],
};

const bookLabel: Record<Lang, string> = { pt: "Agendar Agora", en: "Book Now", es: "Reservar Ahora" };

const languages: { code: Lang; label: string }[] = [
  { code: "pt", label: "PT" },
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
];

const LanguageToggle = ({ compact = false }: { compact?: boolean }) => {
  const { lang, setLang } = useLanguage();
  return (
    <div
      role="group"
      aria-label="Language"
      className={`inline-flex items-center gap-1 rounded-full border border-primary/40 ${compact ? "text-xs px-2 py-1" : "text-xs font-medium px-3 py-2"}`}
    >
      {languages.map((l, i) => (
        <span key={l.code} className="inline-flex items-center gap-1">
          {i > 0 && <span className="text-secondary-foreground/40">/</span>}
          <button
            onClick={() => setLang(l.code)}
            aria-pressed={lang === l.code}
            className={`transition-colors ${lang === l.code ? "text-primary font-semibold" : "text-secondary-foreground/60 hover:text-primary"}`}
          >
            {l.label}
          </button>
        </span>
      ))}
    </div>
  );
};

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [bookOpen, setBookOpen] = useState(false);
  const { lang } = useLanguage();

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-secondary/95 backdrop-blur-xl border-b border-primary/20 py-3 shadow-card-luxe">
      <nav className="container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-1.5 sm:gap-2 min-w-0 shrink-0 font-display text-base sm:text-xl md:text-2xl tracking-wide text-secondary-foreground whitespace-nowrap">
          <img src={logo} alt="The Beauty of Brazil" width={36} height={36} className="w-7 h-7 sm:w-9 sm:h-9 rounded-full shrink-0" />
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
          <LanguageToggle />
          <button
            onClick={() => setBookOpen(true)}
            className="shimmer inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground font-medium px-5 py-2.5 rounded-full shadow-gold hover:shadow-gold-strong transition-all"
          >
            {bookLabel[lang]}
          </button>
        </div>
        <div className="flex items-center gap-3 md:hidden">
          <LanguageToggle compact />
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
          <button
            onClick={() => { setOpen(false); setBookOpen(true); }}
            className="bg-gradient-gold text-primary-foreground font-medium px-5 py-2.5 rounded-full text-center"
          >
            {bookLabel[lang]}
          </button>
        </div>
      )}

      <BookingChoiceDialog open={bookOpen} onOpenChange={setBookOpen} />
    </header>
  );
};
