"use client";
import { Phone, MessageCircle } from "lucide-react";
import { CONTACT_INFO } from "@/app/constants";

export default function FloatingActions() {
  const handleCallClick = () => {
    if (typeof window !== "undefined" && (window as any).gtag_report_conversion) {
      (window as any).gtag_report_conversion();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* WhatsApp Button */}
      <a
        href={CONTACT_INFO.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center"
        aria-label="Contactez-nous sur WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
      </a>

      {/* Phone Button */}
      <a
        href={CONTACT_INFO.phoneLink}
        onClick={handleCallClick}
        className="bg-red-600 hover:bg-red-700 text-white rounded-full p-4 shadow-2xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center animate-bounce"
        aria-label="Appeler maintenant"
      >
        <Phone className="h-7 w-7" />
      </a>
    </div>
  );
}
