import { MessageCircle } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { buildWhatsAppLink, type MessageCategory } from "@/lib/whatsapp";
import { ONLINE_BOOKING_URL, useOnlineBookingCopy } from "@/lib/booking";
import { useLanguage, type Lang } from "@/lib/language";

const chooseTitle: Record<Lang, string> = {
  pt: "Como você prefere agendar?",
  en: "How would you like to book?",
  es: "¿Cómo prefiere reservar?",
};

const whatsappLabel: Record<Lang, string> = {
  pt: "Agendar no WhatsApp",
  en: "Book on WhatsApp",
  es: "Reservar por WhatsApp",
};

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  category?: MessageCategory;
};

export const BookingChoiceDialog = ({ open, onOpenChange, category }: Props) => {
  const { lang } = useLanguage();
  const onlineCopy = useOnlineBookingCopy();
  const whatsappLink = buildWhatsAppLink(lang, category);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-sm">
        <DialogHeader>
          <DialogTitle className="font-display text-xl">{chooseTitle[lang]}</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-3">
          <a
            href={ONLINE_BOOKING_URL}
            target="_blank" rel="noreferrer"
            onClick={() => onOpenChange(false)}
            className="inline-flex items-center justify-center gap-2 bg-emerald-600 text-white font-medium px-6 py-3 rounded-full shadow-luxe hover:bg-emerald-500 transition-all"
          >
            {onlineCopy.button}
          </a>
          <a
            href={whatsappLink}
            target="_blank" rel="noreferrer"
            onClick={() => onOpenChange(false)}
            className="inline-flex items-center justify-center gap-2 bg-gradient-gold text-primary-foreground font-medium px-6 py-3 rounded-full shadow-gold hover:shadow-gold-strong transition-all"
          >
            <MessageCircle size={16} /> {whatsappLabel[lang]}
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
};
