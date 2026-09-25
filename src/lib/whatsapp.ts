import { useLanguage } from "@/lib/language";

export const WHATSAPP_NUMBER = "19544055414";

const messages = {
  pt: "Oi! Vim através do website e gostaria de mais informações sobre os tratamentos.",
  en: "Hi! I came from your website and I'd like more information about your treatments.",
};

export const buildWhatsAppLink = (lang: "pt" | "en") =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(messages[lang])}`;

export const useWhatsAppLink = () => {
  const { lang } = useLanguage();
  return buildWhatsAppLink(lang);
};
