import { Metadata } from "next";
import Script from "next/script";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingActions from "../components/FloatingActions";
import CityForm from "@/components/city/CityForm";
import CallButton from "@/components/city/CallButton";
import FAQSection from "@/components/rich/FAQSection";
import PricingTable from "@/components/rich/PricingTable";
import BeforeAfter from "@/components/rich/BeforeAfter";
import NearbyCities from "@/components/city/NearbyCities";
import { generateLocalBusinessSchema, generateSEOMetadata } from "@/app/seo/seoConfig";
import { Clock, MapPin, Shield, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = generateSEOMetadata({
    title: "Serrurier Saint-Maur-des-Fossés - La Varenne - Artisan Local 94100",
    description: "Serrurier Saint-Maur et La Varenne Saint-Hilaire. Installation porte blindée, changement de serrure Fichet, dépannage 24/7. Travail soigné.",
    canonical: "https://www.dclik-serrure.com/serrurier-saint-maur",
    keywords: ["serrurier saint-maur", "serrurier la varenne", "porte blindée saint maur", "serrurier 94100"],
});

export default function SerrurierSaintMaur() {
    const localBusinessSchema = generateLocalBusinessSchema({
        name: "D'Clik Serrure Saint-Maur",
        description: "Serrurerie fine et dépannage à Saint-Maur-des-Fossés",
        city: "Saint-Maur-des-Fossés",
        latitude: 48.8038,
        longitude: 2.4853,
    });

    const faqs = [
        {
            question: "Intervenez-vous à La Varenne Saint-Hilaire ?",
            answer: "Absolument. Nous couvrons tous les quartiers de Saint-Maur : La Varenne, Le Parc, Adamville, Vieux Saint-Maur, etc. Nous sommes familiers avec les portes blindées et pavillons du secteur."
        },
        {
            question: "Installez-vous des serrures haute sécurité (Fichet, Picard) ?",
            answer: "Oui, nous sommes spécialisés dans l'installation de serrures A2P ** et *** et de blocs-portes blindés, souvent demandés dans les zones pavillonnaires de Saint-Maur pour contrer les cambriolages."
        },
        {
            question: "Quels sont vos tarifs pour une ouverture de porte le dimanche ?",
            answer: "Notre tarif de base est de 89€ pour une ouverture. Le dimanche et jours fériés, une majoration spécifique s'applique mais le prix total est toujours annoncé et validé par devis avant intervention."
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <Script
                id="local-business-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />

            <Header />

            <section className="relative bg-gradient-to-r from-slate-800 to-slate-900 text-white pt-32 pb-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Serrurier Saint-Maur-des-Fossés
                        <br />
                        <span className="text-sky-400">Expertise & Sécurité</span>
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
                        Installation de portes blindées et dépannage d'urgence à Saint-Maur (94100).
                        Service premium pour votre pavillon ou appartement.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <CallButton
                            phone="0185490707"
                            label="Appeler l'Artisan"
                            className="bg-sky-600 hover:bg-sky-700 text-white text-xl px-8 py-6 h-auto shadow-md"
                        />
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <Shield className="w-10 h-10 text-sky-600 mx-auto mb-4" />
                        <h3 className="font-bold text-lg">Sécurité Renforcée</h3>
                        <p className="text-gray-600">Spécialiste portes blindées pavillonnaires</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <MapPin className="w-10 h-10 text-sky-600 mx-auto mb-4" />
                        <h3 className="font-bold text-lg">Proximité</h3>
                        <p className="text-gray-600">Intervention rapide La Varenne / Le Parc</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <CheckCircle className="w-10 h-10 text-sky-600 mx-auto mb-4" />
                        <h3 className="font-bold text-lg">Travail Soigné</h3>
                        <p className="text-gray-600">Finiton impeccable et chantier propre</p>
                    </div>
                </div>
            </section>

            <PricingTable />

            <BeforeAfter
                beforeImage="https://images.unsplash.com/photo-1516937941348-c09e554b9aa2?w=800&q=80"
                afterImage="https://images.unsplash.com/photo-1558002038-109177381793?w=800&q=80"
                title="Installation Porte Blindée Pavillon"
                description="Remplacement d'une porte d'entrée bois par un bloc-porte blindé certifié A2P BP3 style classique pour respecter l'esthétique de la maison."
            />

            <section className="py-16 px-4 bg-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-8">Zones d'intervention 94100</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        <div className="bg-gray-100 p-3 rounded">Le Parc</div>
                        <div className="bg-gray-100 p-3 rounded">La Varenne</div>
                        <div className="bg-gray-100 p-3 rounded">Adamville</div>
                        <div className="bg-gray-100 p-3 rounded">Champignol</div>
                        <div className="bg-gray-100 p-3 rounded">Les Mûriers</div>
                        <div className="bg-gray-100 p-3 rounded">La Pie</div>
                        <div className="bg-gray-100 p-3 rounded">Vieux St-Maur</div>
                        <div className="bg-gray-100 p-3 rounded">Créteil (Limitrophe)</div>
                    </div>
                    <div className="mt-8 h-64 bg-gray-200 rounded-xl overflow-hidden">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42047.88219904268!2d2.45544625!3d48.80378175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e60d1b324025c1%3A0x40b82c3688b4080!2sSaint-Maur-des-Foss%C3%A9s!5e0!3m2!1sfr!2sfr"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </section>

            <FAQSection faqs={faqs} title="FAQ D'Clik Serrure Saint-Maur" />

            <section id="devis-form" className="py-16 px-4 bg-gray-50">
                <div className="max-w-md mx-auto text-center mb-8">
                    <h2 className="text-3xl font-bold">Devis Gratuit à Saint-Maur</h2>
                    <p>Réponse sous 5 minutes.</p>
                </div>
                <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-lg">
                    <CityForm />
                </div>
            </section>

            <NearbyCities currentCity="Saint-Maur-des-Fossés" />

            <Footer />
            <FloatingActions />
        </div>
    );
}
