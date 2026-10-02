import { useLanguage } from "@/lib/language";

export const WHATSAPP_NUMBER = "19544055414";

export type MessageCategory = "general" | "skincare" | "body-contour";

const messages: Record<"pt" | "en", Record<MessageCategory, string>> = {
  pt: {
    general: "Oi! Vim através do website e gostaria de mais informações sobre os tratamentos.",
    skincare: "Oi! Vim através do website e gostaria de mais informações sobre os tratamentos faciais (skincare).",
    "body-contour": "Oi! Vim através do website e gostaria de mais informações sobre os tratamentos de contorno corporal.",
  },
  en: {
    general: "Hi! I came from your website and I'd like more information about your treatments.",
    skincare: "Hi! I came from your website and I'd like more information about your facial/skincare treatments.",
    "body-contour": "Hi! I came from your website and I'd like more information about your body contour treatments.",
  },
};

export const buildWhatsAppLink = (lang: "pt" | "en", category: MessageCategory = "general") =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(messages[lang][category])}`;

export const useWhatsAppLink = (category: MessageCategory = "general") => {
  const { lang } = useLanguage();
  return buildWhatsAppLink(lang, category);
};
