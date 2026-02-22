import { Metadata } from "next";
import Script from "next/script";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import FloatingActions from "@/app/components/FloatingActions";
import { generateLocalBusinessSchema, generateSEOMetadata } from "@/app/seo/seoConfig";
import Cloaker from "@/components/Cloaker";
import CreteilContent from "./CreteilContent";

// SEO Metadata
export const metadata: Metadata = generateSEOMetadata({
  title: "Serrurier Créteil (94000) - Dépannage Urgent 30 min | D'Clik Serrure",
  description: "Serrurier Créteil disponible 24h/24 pour ouverture de porte et changement de serrure. Urgence serrurier Créteil (94) intervention rapide Échat, Mont-Mesly, Préfecture.",
  canonical: "https://www.dclik-serrure.com/serrurier-creteil",
  keywords: ["serrurier créteil", "serrurier 94000", "urgence serrurier créteil", "dépannage serrurerie créteil", "ouverture de porte créteil", "serrurier créteil pas cher"],
});

export default function SerrurierCreteil() {
  const city = "Créteil";

  const localBusinessSchema = generateLocalBusinessSchema({
    name: "D'Clik Serrure Créteil",
    description: "Service de serrurerie d'urgence à Créteil et Val-de-Marne",
    city: "Créteil",
    latitude: 48.7904,
    longitude: 2.4556,
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
        <CreteilContent />
        <Footer />
        <FloatingActions />
      </div>
    </Cloaker>
  );
}
