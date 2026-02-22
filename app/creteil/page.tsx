import { Metadata } from "next";
import Script from "next/script";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import FloatingActions from "@/app/components/FloatingActions";
import { generateLocalBusinessSchema, generateSEOMetadata } from "@/app/seo/seoConfig";
import Cloaker from "@/components/Cloaker";
import CreteilAlentoursContent from "./CreteilAlentoursContent";

// SEO Metadata
export const metadata: Metadata = generateSEOMetadata({
    title: "Serrurier Créteil et alentours (94000) - Dépannage Urgent 30 min | D'Clik Serrure",
    description: "Serrurier Créteil et environs disponible 24h/24. Ouverture de porte, changement de serrure à Créteil, Bonneuil, Maisons-Alfort. Tarifs agréés assurances.",
    canonical: "https://www.dclik-serrure.com/creteil",
    keywords: ["serrurier créteil", "serrurier alentours créteil", "dépannage serrurerie 94000", "ouverture de porte créteil", "urgence serrurier créteil"],
});

export default function SerrurierCreteilAlentours() {
    const city = "Créteil";

    const localBusinessSchema = generateLocalBusinessSchema({
        name: "D'Clik Serrure Créteil et alentours",
        description: "Service de serrurerie d'urgence à Créteil and its surrounding areas in Val-de-Marne",
        city: "Créteil",
        latitude: 48.7904,
        longitude: 2.4556,
    });

    return (
        <Cloaker city={city} phone="0185440131" phoneDisplay="01 85 44 01 31">
            <div className="min-h-screen bg-white">
                <Script
                    id="local-business-schema-alentours"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
                />
                <Header />
                <CreteilAlentoursContent />
                <Footer />
                <FloatingActions />
            </div>
        </Cloaker>
    );
}
