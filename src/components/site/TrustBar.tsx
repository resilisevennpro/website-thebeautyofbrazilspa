import { Leaf } from "lucide-react";
import { useLanguage } from "@/lib/language";

const items = {
  pt: [
    "Esteticista Licenciada",
    "Elite Skincare",
    "Body Contour",
    "Pembroke Pines, FL",
    "Técnica Brasileira",
    "Sem Tempo de Recuperação",
  ],
  en: [
    "Licensed Esthetician",
    "Elite Skincare",
    "Body Contour",
    "Pembroke Pines, FL",
    "Brazilian Technique",
    "Zero Downtime",
  ],
};

export const TrustBar = () => {
  const { lang } = useLanguage();
  const all = [...items[lang], ...items[lang]];
  return (
    <div className="relative border-y border-primary/20 bg-secondary py-5 overflow-hidden">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-secondary to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-secondary to-transparent z-10 pointer-events-none" />
      <div className="flex animate-marquee gap-12 whitespace-nowrap">
        {all.map((it, i) => (
          <div key={i} className="flex items-center gap-12 text-secondary-foreground/80">
            <Leaf className="text-primary" size={18} />
            <span className="font-accent text-xl tracking-wide">{it}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
