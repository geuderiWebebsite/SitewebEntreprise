import { Metadata } from "next";
import Script from "next/script";
import Footer from "@/app/components/Footer";
import FloatingActions from "@/app/components/FloatingActions";
import { generateLocalBusinessSchema, generateSEOMetadata } from "@/app/seo/seoConfig";
import Cloaker from "@/components/Cloaker";
import ParisContent from "./ParisContent";
import Header from "@/app/components/Header";

// SEO Metadata for Server Side Rendering
export const metadata: Metadata = generateSEOMetadata({
  title: "Serrurier Paris - Dépannage Urgent 30 min | D'Clik Serrure",
  description: "Serrurier Paris disponible 24h/24 et 7j/7 pour ouverture de porte, changement de serrure and urgence serrurerie paris. Intervention rapide à Paris 15, Paris 17, Paris 11.",
  canonical: "https://www.dclik-serrure.com/serrurier-paris",
  keywords: ["serrurier paris", "serrurerie paris", "serrurier paris 15", "serrurier paris 17", "serrurier paris 11", "serrurier paris 18", "serrurier paris 12", "serrurier paris 16", "serrurier paris 20", "serrurier paris 14", "urgence serrurier paris", "serrurier paris pas cher", "sos serrurier paris"],
});

export default function SerrurierParis() {
  const city = "Paris";

  const localBusinessSchema = generateLocalBusinessSchema({
    name: "D'Clik Serrure",
    description: "Service de serrurerie d'urgence à Paris",
    city: "Paris",
    latitude: 48.8566,
    longitude: 2.3522,
  });

  return (
    <Cloaker city={city} phone="0185440131" phoneDisplay="01 85 44 01 31">
      <div className="min-h-screen bg-white">
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Header />
        <ParisContent />
        <Footer />
        <FloatingActions />
      </div>
    </Cloaker>
  );
}
