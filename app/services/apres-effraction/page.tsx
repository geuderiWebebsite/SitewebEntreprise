import { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FloatingActions from "../../components/FloatingActions";
import CityForm from "@/components/city/CityForm";
import CallButton from "@/components/city/CallButton";
import FAQSection from "@/components/rich/FAQSection";
import { generateSEOMetadata } from "@/app/seo/seoConfig";
import { FileText, ShieldAlert, Hammer, Phone } from "lucide-react";

export const metadata: Metadata = generateSEOMetadata({
    title: "Dépannage Après Cambriolage Paris - Mise en Sécurité Immédiate",
    description: "Victime d'une effraction ? Intervention d'urgence pour fermeture provisoire et sécurisation. Tarifs agréés assurances, dossier remboursé.",
    canonical: "https://www.dclik-serrure.com/services/apres-effraction",
    keywords: ["serrurier après cambriolage", "fermeture provisoire", "réparation porte fracturée", "assurance serrurier"],
});

import { generateServiceSchema } from "@/app/seo/serviceSchema";
import Script from "next/script";

export default function ApresEffractionPage() {
    const serviceSchema = generateServiceSchema({
        name: "Dépannage Après Cambriolage Paris",
        description: "Intervention d'urgence pour fermeture provisoire et sécurisation après effraction",
        url: "https://www.dclik-serrure.com/services/apres-effraction",
        serviceType: "Emergency Locksmith",
        offers: {
            price: "150",
            priceCurrency: "EUR",
            description: "Mise en sécurité provisoire"
        }
    });

    const faqs = [
        {
            question: "Dois-je porter plainte avant votre intervention ?",
            answer: "Non, l'urgence est de sécuriser votre domicile. Nous intervenons immédiatement pour fermer la porte. Vous pourrez porter plainte ensuite, le commissariat vous demandera souvent notre facture comme preuve."
        },
        {
            question: "Vais-je être remboursé par mon assurance ?",
            answer: "Dans la majorité des cas d'effraction avérée, l'assurance habitation couvre les frais de mise en sécurité provisoire et de réparation à l'identique (hors franchise)."
        },
        {
            question: "Faites-vous la fermeture provisoire ?",
            answer: "Oui, si la porte ou la serrure est trop endommagée pour être réparée immédiatement, nous installons un système de fermeture provisoire pour que vous puissiez passer la nuit en sécurité."
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <Script
                id="service-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <Header />

            {/* Hero Urgent Compassionate */}
            <section className="relative bg-white pt-32 pb-12 px-4 border-b border-gray-100">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full font-bold mb-6">
                        <ShieldAlert className="w-5 h-5" /> URGENCE CAMBRIOLAGE
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                        Vous avez été cambriolé ?
                        <br />
                        <span className="text-red-600">Nous sécurisons votre domicile tout de suite.</span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        Ne restez pas avec une porte ouverte. Nos techniciens interviennent en priorité pour la fermeture provisoire et les réparations.
                    </p>
                    <div className="flex justify-center">
                        <CallButton
                            phone="0185490707"
                            label="SOS Mise en Sécurité : 01 85 49 07 07"
                            className="bg-red-600 hover:bg-red-700 text-white text-xl px-8 py-6 h-auto shadow-xl"
                        />
                    </div>
                </div>
            </section>

            {/* Steps */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">La marche à suivre</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-sm text-center relative">
                            <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center text-xl font-bold absolute -top-6 left-1/2 -translate-x-1/2">1</div>
                            <Hammer className="w-10 h-10 text-gray-400 mx-auto mb-4 mt-4" />
                            <h3 className="text-xl font-bold mb-2">Sécurisation Immédiate</h3>
                            <p className="text-gray-600">Nous venons poser un verrou, réparer le bâti ou installer un panneau de bois (fermeture provisoire) pour sécuriser les lieux.</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm text-center relative">
                            <div className="w-12 h-12 bg-gray-800 text-white rounded-full flex items-center justify-center text-xl font-bold absolute -top-6 left-1/2 -translate-x-1/2">2</div>
                            <FileText className="w-10 h-10 text-gray-400 mx-auto mb-4 mt-4" />
                            <h3 className="text-xl font-bold mb-2">Dépôt de Plainte</h3>
                            <p className="text-gray-600">Rendez-vous au commissariat sous 24/48h. Apportez des photos des dégâts et notre devis/facture de mise en sécurité.</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm text-center relative">
                            <div className="w-12 h-12 bg-gray-800 text-white rounded-full flex items-center justify-center text-xl font-bold absolute -top-6 left-1/2 -translate-x-1/2">3</div>
                            <ShieldAlert className="w-10 h-10 text-gray-400 mx-auto mb-4 mt-4" />
                            <h3 className="text-xl font-bold mb-2">Réparation Définitive</h3>
                            <p className="text-gray-600">Une fois l'expert passé (ou avec l'accord de l'assurance), nous remplaçons la porte ou la serrure à l'identique.</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-xl mx-auto py-16 px-4">
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold">Besoin d'un devis pour l'assurance ?</h2>
                    <p className="text-gray-600">Nous rédigeons des devis conformes aux exigences des assureurs.</p>
                </div>
                <CityForm />
            </div>

            <FAQSection faqs={faqs} title="Questions fréquentes après cambriolage" />

            <Footer />
            <FloatingActions />
        </div>
    );
}
