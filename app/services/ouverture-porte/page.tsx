import { Metadata } from "next";
import Script from "next/script";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FloatingActions from "../../components/FloatingActions";
import CityForm from "@/components/city/CityForm";
import CallButton from "@/components/city/CallButton";
import FAQSection from "@/components/rich/FAQSection";
import PricingTable from "@/components/rich/PricingTable";
import { generateSEOMetadata } from "@/app/seo/seoConfig";
import { Clock, Shield, CheckCircle, Phone, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = generateSEOMetadata({
    title: "Ouverture de Porte Paris - Sans Casse ni Dégât 89€ - 24h/24",
    description: "Porte claquée ou fermée à clé ? Dépannage ouverture de porte à Paris sans casse. Tarif unique annoncé d'avance : 89€. Intervention en 30 min.",
    canonical: "https://www.dclik-serrure.com/services/ouverture-porte",
    keywords: ["ouverture de porte paris", "serrurier ouverture porte", "porte claquée paris", "ouvrir porte sans clé"],
});

export default function OuverturePortePage() {
    const faqs = [
        {
            question: "Combien coûte une ouverture de porte ?",
            answer: "Pour une porte simplement claquée (non verrouillée), le tarif fixe est de 89€ TTC (hors majoration nuit). Pour une porte fermée à clé, le tarif est de 119€ TTC. Le devis est toujours gratuit."
        },
        {
            question: "Allez-vous casser ma serrure ?",
            answer: "Non. Dans 95% des cas de porte claquée, nous utilisons la technique de la radio pour ouvrir sans aucun dégât. Si la porte est fermée à clé, nous perçons le cylindre uniquement si c'est strictement nécessaire."
        },
        {
            question: "Combien de temps faut-il attendre ?",
            answer: "Notre délai moyen d'intervention à Paris et proche banlieue est de 30 minutes grâce à notre dispatching en temps réel."
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Hero Urgent */}
            <section className="relative bg-red-900 text-white pt-32 pb-20 px-4 overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative max-w-4xl mx-auto text-center z-10">
                    <div className="inline-block bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold mb-6 animate-pulse">
                        INTERVENTION IMMÉDIATE
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        Ouverture de Porte <span className="text-orange-400">Sans Casse</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-2xl mx-auto">
                        Porte claquée ? Clé perdue ? Ne forcez pas.
                        <br />
                        Un serrurier est chez vous en 30 minutes.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <CallButton
                            phone="0185490707"
                            label="Appeler : 01 85 49 07 07"
                            className="bg-orange-500 hover:bg-orange-600 text-white text-xl px-12 py-8 h-auto shadow-2xl animate-bounce-subtle rounded-full"
                        />
                    </div>
                    <p className="mt-4 text-sm text-red-200">Rejoignez nos 500+ clients satisfaits cette année</p>
                </div>
            </section>

            {/* Promises */}
            <section className="py-12 bg-white border-b border-gray-100">
                <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="p-6">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                            <Shield className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Garantie Sans Casse</h3>
                        <p className="text-gray-600">Technique radio privilégiée pour préserver votre serrure.</p>
                    </div>
                    <div className="p-6">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                            <Clock className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Arrivée en 30 min</h3>
                        <p className="text-gray-600">Géolocalisation des techniciens pour une urgence réelle.</p>
                    </div>
                    <div className="p-6">
                        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 text-red-600">
                            <Lock className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Prix Fixe 89€</h3>
                        <p className="text-gray-600">Tarif annoncé au téléphone. Pas de surprise.</p>
                    </div>
                </div>
            </section>

            {/* Pricing Focus */}
            <PricingTable />

            {/* Content & SEO Text */}
            <section className="py-16 px-4">
                <div className="max-w-4xl mx-auto prose prose-red prose-lg">
                    <h2 className="text-center">Pourquoi faire appel à D'Clik Serrure pour votre ouverture de porte ?</h2>
                    <p className="lead text-center">
                        Se retrouver bloqué dehors est une source de stress intense. Notre mission est de vous faire rentrer chez vous le plus vite possible, au prix le plus juste.
                    </p>
                    <div className="grid md:grid-cols-2 gap-8 not-prose mt-12">
                        <div className="bg-gray-50 p-8 rounded-xl">
                            <h3 className="text-xl font-bold mb-4 flex items-center"><CheckCircle className="text-green-500 mr-2" /> Porte Claquée</h3>
                            <p className="text-gray-600">Vous êtes sorti chercher le courrier ou descendre les poubelles et la porte s'est refermée ?</p>
                            <p className="mt-4 font-bold text-red-600">Solution : Ouverture à la radio en 5 min. Coût : 89€.</p>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-xl">
                            <h3 className="text-xl font-bold mb-4 flex items-center"><CheckCircle className="text-orange-500 mr-2" /> Porte Verrouillée</h3>
                            <p className="text-gray-600">Vous avez perdu vos clés ou elles ont été volées ? La serrure tourne dans le vide ?</p>
                            <p className="mt-4 font-bold text-red-600">Solution : Perçage précis du cylindre + remplacement. Devis sur place.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Conversion Section */}
            <section className="py-16 bg-gradient-to-br from-red-50 to-orange-50">
                <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Demandez votre devis avant intervention</h2>
                        <p className="text-lg text-gray-700 mb-6">
                            Même dans l'urgence, vous avez le droit à la transparence. Décrivez votre situation et recevez une estimation immédiate.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="bg-white p-2 rounded-full shadow-sm"><CheckCircle className="text-green-500 w-5 h-5" /></div>
                                <span>Agréé par les plus grandes assurances</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="bg-white p-2 rounded-full shadow-sm"><CheckCircle className="text-green-500 w-5 h-5" /></div>
                                <span>Facture détaillée fournie</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-xl">
                        <CityForm />
                    </div>
                </div>
            </section>

            <FAQSection faqs={faqs} title="Questions sur l'ouverture de porte" />

            <Footer />
            <FloatingActions />
        </div>
    );
}
