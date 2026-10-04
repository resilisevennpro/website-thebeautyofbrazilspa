import { useLanguage, type Lang } from "@/lib/language";

export const ONLINE_BOOKING_URL = "https://app.sevennclinic360.com/agendar/the-beauty-of-brazil-spa-29292";

export const onlineBookingCopy: Record<Lang, { question: string; button: string }> = {
  pt: { question: "Prefere Agendar Online?", button: "Agendar online" },
  en: { question: "Prefer to book online?", button: "Book online" },
  es: { question: "¿Prefiere reservar en línea?", button: "Reservar en línea" },
};

export const useOnlineBookingCopy = () => {
  const { lang } = useLanguage();
  return onlineBookingCopy[lang];
};
