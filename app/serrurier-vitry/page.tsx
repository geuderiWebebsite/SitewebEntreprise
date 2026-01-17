import { Metadata } from "next";
import Script from "next/script";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingActions from "../components/FloatingActions";
import CityForm from "@/components/city/CityForm";
import CallButton from "@/components/city/CallButton";
import FAQSection from "@/components/rich/FAQSection";
import PricingTable from "@/components/rich/PricingTable";
import NearbyCities from "@/components/city/NearbyCities";
import { generateLocalBusinessSchema, generateSEOMetadata } from "@/app/seo/seoConfig";
import { Clock, MapPin, Shield, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = generateSEOMetadata({
    title: "Serrurier Vitry-sur-Seine (94400) - Pas Cher & Urgent | Devis Gratuit",
    description: "Serrurier Vitry-sur-Seine pas cher. Ouverture de porte, changement de cylindre, dépannage rapide. Intervention 24h/24 Centre, Moulin Vert, Port.",
    canonical: "https://www.dclik-serrure.com/serrurier-vitry",
    keywords: ["serrurier vitry sur seine", "serrurier pas cher 94400", "ouverture porte vitry", "urgence serrurerie vitry"],
});

export default function SerrurierVitry() {
    const localBusinessSchema = generateLocalBusinessSchema({
        name: "D'Clik Serrure Vitry",
        description: "Serrurerie d'urgence économique à Vitry-sur-Seine",
        city: "Vitry-sur-Seine",
        latitude: 48.7876,
        longitude: 2.4007,
    });

    const faqs = [
        {
            question: "Pratiquez-vous des tarifs pas chers à Vitry ?",
            answer: "Nous nous efforçons de proposer les tarifs les plus justes et compétitifs. Nos forfaits ouverture de porte à 89€ sont parmi les plus clairs du marché. Pas de frais cachés."
        },
        {
            question: "Combien de temps pour venir au Centre-Ville de Vitry ?",
            answer: "Nos techniciens circulant en scooter peuvent être en centre-ville ou quartier du Port à l'Anglais en 20 à 30 minutes généralement."
        },
        {
            question: "Intervenez-vous pour les serrures de boîte aux lettres ?",
            answer: "Oui, nous intervenons fréquemment pour les changements de serrures de boîtes aux lettres, caves et garages sur Vitry-sur-Seine."
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

            <section className="relative bg-gradient-to-br from-red-600 to-red-800 text-white pt-32 pb-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Serrurier Vitry-sur-Seine
                        <br />
                        <span className="text-yellow-400">Prix Justes & Transparence</span>
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-2xl mx-auto">
                        Besoin d'un serrurier honnête à Vitry (94400) ?
                        Ouverture de porte et dépannage urgent au meilleur rapport qualité/prix.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <CallButton
                            phone="0185490707"
                            label="01 85 49 07 07 - Devis Direct"
                            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-xl px-8 py-6 h-auto shadow-2xl"
                        />
                    </div>
                </div>
            </section>

            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Pourquoi choisir D'Clik Serrure à Vitry ?</h2>
                        <div className="space-y-4">
                            <div className="flex gap-4">
                                <div className="bg-red-100 p-2 rounded h-fit"><Clock className="text-red-600" /></div>
                                <div>
                                    <h3 className="font-bold text-lg">Rapidité</h3>
                                    <p className="text-gray-600">Nous sommes habitués à intervenir vite dans les grands ensembles et zones pavillonnaires.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="bg-red-100 p-2 rounded h-fit"><Shield className="text-red-600" /></div>
                                <div>
                                    <h3 className="font-bold text-lg">Qualité</h3>
                                    <p className="text-gray-600">Même pour un dépannage pas cher, nous installons du matériel de qualité (Vachette, city...).</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                        <h3 className="text-xl font-bold mb-4">Urgence Serrurier 94400</h3>
                        <ul className="space-y-3">
                            <li className="flex justify-between items-center border-b pb-2">
                                <span>Ouverture de porte claquée</span>
                                <span className="font-bold text-red-600">89€</span>
                            </li>
                            <li className="flex justify-between items-center border-b pb-2">
                                <span>Ouverture porte fermée</span>
                                <span className="font-bold text-red-600">119€</span>
                            </li>
                            <li className="flex justify-between items-center border-b pb-2">
                                <span>Changement serrure Boîte aux lettres</span>
                                <span className="font-bold text-red-600">Sur devis</span>
                            </li>
                        </ul>
                        <div className="mt-6 text-center">
                            <CallButton phone="0185490707" label="Appeler" className="w-full bg-red-600" />
                        </div>
                    </div>
                </div>
            </section>

            <PricingTable />

            <section className="py-16 px-4 bg-gray-100">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-8">Nous intervenons partout à Vitry</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                        <div className="bg-white p-3 shadow-sm rounded">Centre-Ville</div>
                        <div className="bg-white p-3 shadow-sm rounded">Le Port à l'Anglais</div>
                        <div className="bg-white p-3 shadow-sm rounded">Clos Langlois</div>
                        <div className="bg-white p-3 shadow-sm rounded">Gare de Vitry</div>
                        <div className="bg-white p-3 shadow-sm rounded">Moulin Vert</div>
                        <div className="bg-white p-3 shadow-sm rounded">Plateau</div>
                    </div>
                    <div className="h-64 bg-gray-200 rounded-lg overflow-hidden">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2627.427847427184!2d2.4006857!3d48.7876389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e673a38f328f55%3A0x40b82c3688b3bc0!2sVitry-sur-Seine!5e0!3m2!1sfr!2sfr"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </section>

            <FAQSection faqs={faqs} title="FAQ Dépannage Vitry" />

            <section id="devis-form" className="py-16 px-4 bg-white">
                <div className="max-w-xl mx-auto bg-gray-50 p-8 rounded-xl shadow-lg border border-gray-100">
                    <h2 className="text-2xl font-bold text-center mb-6">Contactez votre serrurier à Vitry</h2>
                    <CityForm />
                </div>
            </section>

            <NearbyCities currentCity="Vitry-sur-Seine" />

            <Footer />
            <FloatingActions />
        </div>
    );
}
