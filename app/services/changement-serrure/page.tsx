import { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FloatingActions from "../../components/FloatingActions";
import CityForm from "@/components/city/CityForm";
import FAQSection from "@/components/rich/FAQSection";
import BeforeAfter from "@/components/rich/BeforeAfter";
import { generateSEOMetadata } from "@/app/seo/seoConfig";
import { Shield, Settings, Key, Check } from "lucide-react";

export const metadata: Metadata = generateSEOMetadata({
    title: "Changement de Serrure Paris - A2P et Haute Sécurité - Devis Gratuit",
    description: "Remplacement de serrure toute marque et cylindre haute sécurité à Paris. Installation A2P certifiée pour assurances. Devis gratuit sur place.",
    canonical: "https://www.dclik-serrure.com/services/changement-serrure",
    keywords: ["changement serrure paris", "remplacement cylindre", "serrure fichet paris", "serrure bricard", "prix changement serrure"],
});

export default function ChangementSerrurePage() {
    const faqs = [
        {
            question: "Quelles marques de serrures installez-vous ?",
            answer: "Nous travaillons avec les plus grandes marques : Fichet, Bricard, Picard, Vachette, Mottura, Héraclès... Nous avons la plupart des cylindres en stock dans nos véhicules."
        },
        {
            question: "La serrure sera-t-elle compatible ?",
            answer: "Oui, nous remplaçons à l'identique ou proposons une mise à niveau (adaptation) pour renforcer la sécurité sans changer toute la porte."
        },
        {
            question: "Quelle est la garantie ?",
            answer: "Toutes nos serrures installées bénéficient d'une garantie pièces et main d'œuvre de 2 ans minimum. Les modèles A2P peuvent aller jusqu'à 5 ou 10 ans selon le fabricant."
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Hero */}
            <section className="relative bg-gray-900 text-white pt-32 pb-20 px-4">
                <div className="absolute inset-0 bg-blue-900/20"></div>
                <div className="relative max-w-5xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Remplacement de Serrure & Cylindre
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
                        Renforcez la sécurité de votre domicile avec des serrures certifiées A2P.
                        Installation soignée compatible toutes marques.
                    </p>
                </div>
            </section>

            {/* Brands Grid */}
            <section className="py-12 bg-gray-50 border-b border-gray-200">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <p className="text-gray-500 mb-8 font-semibold uppercase tracking-wider">Nos marques partenaires</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-70 grayscale hover:grayscale-0 transition-all">
                        {/* Text representation of logos for now */}
                        <div className="text-xl font-bold font-serif">FICHET</div>
                        <div className="text-xl font-bold font-sans">VICARD</div>
                        <div className="text-xl font-bold font-mono">BRICARD</div>
                        <div className="text-xl font-bold">VACHETTE</div>
                        <div className="text-xl font-bold italic">MOTTURA</div>
                        <div className="text-xl font-bold">ABUS</div>
                    </div>
                </div>
            </section>

            {/* Services Detail */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
                    <div className="border border-gray-100 rounded-xl p-8 hover:shadow-lg transition-shadow">
                        <Key className="w-10 h-10 text-red-600 mb-6" />
                        <h3 className="text-2xl font-bold mb-4">Cylindre Standard</h3>
                        <p className="text-gray-600 mb-4">Pour un changement de locataire ou une clé perdue. Solution économique et rapide.</p>
                        <ul className="space-y-2 text-sm">
                            <li className="flex gap-2"><Check className="w-4 h-4 text-green-500" /> Clés protégées</li>
                            <li className="flex gap-2"><Check className="w-4 h-4 text-green-500" /> Carte de propriété</li>
                        </ul>
                    </div>
                    <div className="border border-red-100 bg-red-50 rounded-xl p-8 shadow-md relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">TOP VENTE</div>
                        <Shield className="w-10 h-10 text-red-600 mb-6" />
                        <h3 className="text-2xl font-bold mb-4">Serrure A2P **</h3>
                        <p className="text-gray-600 mb-4">Haute sécurité résistante au perçage et au crochetage. Recommandé par les assurances.</p>
                        <ul className="space-y-2 text-sm">
                            <li className="flex gap-2"><Check className="w-4 h-4 text-green-500" /> Résistance 10 min</li>
                            <li className="flex gap-2"><Check className="w-4 h-4 text-green-500" /> 3 à 5 points d'ancrage</li>
                        </ul>
                    </div>
                    <div className="border border-gray-100 rounded-xl p-8 hover:shadow-lg transition-shadow">
                        <Settings className="w-10 h-10 text-red-600 mb-6" />
                        <h3 className="text-2xl font-bold mb-4">Serrure Connectée</h3>
                        <p className="text-gray-600 mb-4">Gérez l'accès à votre domicile depuis votre smartphone. Idéal Airbnb.</p>
                        <ul className="space-y-2 text-sm">
                            <li className="flex gap-2"><Check className="w-4 h-4 text-green-500" /> Ouverture à distance</li>
                            <li className="flex gap-2"><Check className="w-4 h-4 text-green-500" /> Journal d'activité</li>
                        </ul>
                    </div>
                </div>
            </section>

            <BeforeAfter
                beforeImage="https://images.unsplash.com/photo-1516937941348-c09e554b9aa2?w=800&q=80"
                afterImage="https://images.unsplash.com/photo-1558002038-109177381793?w=800&q=80"
                title="Installation Serrure 5 points"
                description="Remplacement d'une vieille serrure monopoint par une serrure carénée 5 points Vachette A2P* pour une sécurité maximale."
            />

            <section className="py-16 bg-white px-4">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <h2 className="text-3xl font-bold mb-6">Demander un devis pour ma serrure</h2>
                    <p className="text-gray-600">Envoyez-nous une photo de votre serrure actuelle pour un devis précis.</p>
                </div>
                <div className="max-w-2xl mx-auto bg-gray-50 p-8 rounded-xl">
                    <CityForm />
                </div>
            </section>

            <FAQSection faqs={faqs} title="Questions sur le changement de serrure" />

            <Footer />
            <FloatingActions />
        </div>
    );
}
