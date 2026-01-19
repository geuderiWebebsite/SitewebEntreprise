import { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FloatingActions from "../../components/FloatingActions";
import CityForm from "@/components/city/CityForm";
import CallButton from "@/components/city/CallButton";
import FAQSection from "@/components/rich/FAQSection";
import BeforeAfter from "@/components/rich/BeforeAfter";
import { generateSEOMetadata } from "@/app/seo/seoConfig";
import { ShieldAlert, DoorClosed, Lock, Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = generateSEOMetadata({
    title: "Installation Porte Blindée Paris - Bloc-Porte A2P BP3",
    description: "Installation et dépannage de portes blindées à Paris. Blindage sur mesure ou bloc-porte certifié. Devis gratuit et garantie décennale.",
    canonical: "https://www.dclik-serrure.com/services/porte-blindee",
    keywords: ["porte blindée paris", "blindage porte", "tordjman métal", "picard serrures", "prix porte blindée"],
});

import { generateServiceSchema } from "@/app/seo/serviceSchema";
import Script from "next/script";

export default function PorteBlindeePage() {
    const serviceSchema = generateServiceSchema({
        name: "Installation Porte Blindée Paris",
        description: "Installation de blocs-portes blindés certifiés A2P BP1 et BP3",
        url: "https://www.dclik-serrure.com/services/porte-blindee",
        serviceType: "Security Door Installation",
        offers: {
            price: "1890",
            priceCurrency: "EUR",
            description: "Bloc-Porte A2P BP1"
        }
    });

    const faqs = [
        {
            question: "Quelle est la différence entre blindage et bloc-porte ?",
            answer: "Le blindage consiste à habiller votre porte existante d'acier (super-blindage) et renforcer le bâti. Le bloc-porte remplace l'ensemble par une porte entièrement en acier. Le bloc-porte est plus sûr, le blindage est plus économique et conserve l'esthétique extérieure."
        },
        {
            question: "Combien coûte une porte blindée ?",
            answer: "Un blindage de porte commence autour de 590€ HT. Un bloc-porte certifié A2P BP1 débute généralement à 1890€ HT pose comprise, selon les finitions."
        },
        {
            question: "Combien de temps dure l'installation ?",
            answer: "En général, une demi-journée suffit pour installer une porte blindée ou réaliser un blindage sur mesure."
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

            {/* Hero */}
            <section className="relative bg-teal-900 text-white pt-32 pb-20 px-4">
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2">
                        <span className="text-teal-400 font-bold tracking-wider text-sm">SÉCURITÉ MAXIMALE</span>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 mt-2">
                            Portes Blindées Certifiées
                        </h1>
                        <p className="text-xl text-gray-200 mb-8">
                            Protégez ce qui compte le plus. Installation de blocs-portes A2P BP1 et BP3 leaders du marché (Picard, Tordjman).
                        </p>
                        <div className="flex gap-4">
                            <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white">
                                Demander un devis
                            </Button>
                            <CallButton phone="0185490707" label="Conseil Gratuit" variant="outline" className="text-white border-white hover:bg-white/10" />
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                            <ul className="space-y-4">
                                <li className="flex items-center text-lg"><Check className="text-teal-400 mr-4 w-6 h-6" /> Certification A2P BP1 / BP3</li>
                                <li className="flex items-center text-lg"><Check className="text-teal-400 mr-4 w-6 h-6" /> Isolation Phonique -40dB</li>
                                <li className="flex items-center text-lg"><Check className="text-teal-400 mr-4 w-6 h-6" /> Résistance Feu 30 min</li>
                                <li className="flex items-center text-lg"><Check className="text-teal-400 mr-4 w-6 h-6" /> Garantie 10 ans</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Options */}
            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold">Le Blindage Sur Mesure</h2>
                            <p className="text-gray-600">
                                Idéal pour les copropriétés imposant de conserver l'aspect extérieur de la porte. Nous habillons votre porte bois d'une tôle d'acier et renforçons le dormant.
                            </p>
                            <ul className="grid grid-cols-2 gap-4">
                                <div className="bg-gray-50 p-4 rounded-lg text-center">
                                    <div className="font-bold text-xl mb-1">Économique</div>
                                    <div className="text-sm text-gray-500">Dès 590€</div>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg text-center">
                                    <div className="font-bold text-xl mb-1">Discret</div>
                                    <div className="text-sm text-gray-500">Aspect inchangé</div>
                                </div>
                            </ul>
                        </div>
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold">Le Bloc-Porte Blindé</h2>
                            <p className="text-gray-600">
                                La solution ultime. On remplace tout : porte + bâti. Une forteresse imprenable. Large choix de designs, couleurs et niveaux de sécurité.
                            </p>
                            <ul className="grid grid-cols-2 gap-4">
                                <div className="bg-gray-50 p-4 rounded-lg text-center">
                                    <div className="font-bold text-xl mb-1">Sécurité +++</div>
                                    <div className="text-sm text-gray-500">Certifié A2P</div>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg text-center">
                                    <div className="font-bold text-xl mb-1">Isolation</div>
                                    <div className="text-sm text-gray-500">Thermique & Phonique</div>
                                </div>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-16 text-center">
                        <p className="text-lg text-gray-600 mb-6">Encore indécis entre Blindage et Bloc-Porte ?</p>
                        <Link href="/blog/porte-blindee-vs-blindage">
                            <Button size="lg" variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50">
                                Lire notre Comparatif Détaillé <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <BeforeAfter
                beforeImage="/porte-blindee-installation.png"
                afterImage="/porte-blindee-installation.png"
                title="Installation Bloc-Porte Blindé"
                description="Installation professionnelle d'une porte blindée certifiée A2P. Travail soigné avec renforcement du bâti et système de sécurité multi-points."
            />

            {/* CTA Form */}
            <section className="py-16 bg-gray-50 px-4">
                <div className="max-w-4xl mx-auto text-center mb-8">
                    <h2 className="text-3xl font-bold mb-4">Besoin d'un devis pour sécuriser votre entrée ?</h2>
                    <p className="text-gray-600">Nos experts sécurité se déplacent gratuitement pour étudier la faisabilité.</p>
                </div>
                <div className="max-w-xl mx-auto">
                    <CityForm />
                </div>
            </section>

            <FAQSection faqs={faqs} title="Questions fréquentes sur les portes blindées" />

            <Footer />
            <FloatingActions />
        </div>
    );
}
