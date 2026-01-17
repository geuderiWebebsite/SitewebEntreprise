import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingActions from "../components/FloatingActions";
import CallButton from "@/components/city/CallButton";
import { generateSEOMetadata } from "@/app/seo/seoConfig";
import { CheckCircle, XCircle, Star, ShieldCheck, Trophy } from "lucide-react";

export const metadata: Metadata = generateSEOMetadata({
    title: "Comparatif Serrures Haute Sécurité 2025 - Avis d'Expert | Fichet, Picard, Vachette",
    description: "Quelle serrure choisir ? Notre comparatif complet des meilleures marques : Fichet, Picard, Vachette, Bricard. Prix, sécurité A2P, résistance.",
    canonical: "https://www.dclik-serrure.com/comparatif-serrures",
    keywords: ["comparatif serrure", "meilleure serrure porte blindée", "avis serrure fichet", "prix serrure 3 points"],
});

export default function ComparatifSerruresPage() {
    const comparisonData = [
        {
            brand: "Fichet",
            model: "Fortissime T",
            stars: 5,
            a2p: "*** (Max)",
            price: "€€€€",
            pros: ["Sécurité absolue", "Clé inconstatable", "Design premium"],
            cons: ["Prix élevé", "Délai de commande"],
            verdict: "Le top du top pour ceux qui ne veulent aucun compromis.",
            bestFor: "Appartement de luxe",
            badge: "🏆 Choix Premium"
        },
        {
            brand: "Picard",
            model: "Présence 2",
            stars: 4.5,
            a2p: "**",
            price: "€€€",
            pros: ["Excellent rapport Q/P", "Clé protégée", "Installation rapide"],
            cons: ["Design un peu daté", "Clé volumineuse"],
            verdict: "Notre recommandation n°1 pour le meilleur équilibre sécurité/prix.",
            bestFor: "Résidence principale",
            badge: "✅ Meilleur Rapport Q/P"
        },
        {
            brand: "Vachette",
            model: "Radial NT",
            stars: 4,
            a2p: "*",
            price: "€€",
            pros: ["Marque reconnue", "Pièces détachées faciles", "Prix accessible"],
            cons: ["Moins robuste que Fichet", "Reproduction clé facile"],
            verdict: "Idéal pour le locatif ou budget maîtrisé.",
            bestFor: "Location / Budget",
            badge: "💰 Choix Malin"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />

            {/* Hero Section */}
            <section className="bg-slate-900 text-white pt-32 pb-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
                    <h1 className="text-3xl md:text-5xl font-bold mb-6">
                        Comparatif Serrures 2025
                        <br />
                        <span className="text-yellow-500">Lesquelles résistent vraiment ?</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                        Fichet, Picard, Vachette... Nous avons testé pour vous les serrures les plus vendues du marché.
                        Voici notre verdict d'artisan indépendant.
                    </p>
                    <div className="text-sm text-gray-400">
                        Mis à jour : Janvier 2025 • Par D'Clik Serrure
                    </div>
                </div>
            </section>

            {/* Intro Content */}
            <section className="py-12 px-4 max-w-4xl mx-auto">
                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-yellow-500">
                    <h2 className="text-xl font-bold mb-2">Notre critère principal : La Norme A2P</h2>
                    <p className="text-gray-700">
                        Pour ce comparatif, nous ne retenons que des serrures certifiées A2P (Assurance Prévention Protection).
                        C'est la seule garantie reconnue par votre assurance habitation en cas d'effraction.
                    </p>
                </div>
            </section>

            {/* Comparison Cards (Mobile Friendly) */}
            <section className="py-8 px-4 max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-3 gap-8">
                    {comparisonData.map((item, index) => (
                        <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col border border-gray-100 relative">
                            {item.badge && (
                                <div className="absolute top-0 right-0 bg-yellow-500 text-black font-bold px-3 py-1 rounded-bl-lg z-10 text-sm">
                                    {item.badge}
                                </div>
                            )}
                            <div className="p-6 bg-gray-50 text-center border-b border-gray-100">
                                <h3 className="text-2xl font-bold text-gray-800">{item.brand}</h3>
                                <div className="text-gray-500 mb-2">{item.model}</div>
                                <div className="flex justify-center gap-1 mb-2">
                                    {[...Array(Math.floor(item.stars))].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />)}
                                </div>
                                <div className="font-bold text-slate-700">A2P {item.a2p}</div>
                                <div className="text-2xl font-bold text-green-600 mt-2">{item.price}</div>
                            </div>

                            <div className="p-6 flex-grow">
                                <div className="mb-4">
                                    <h4 className="font-bold text-sm text-gray-400 uppercase tracking-wide mb-2">Points Forts</h4>
                                    <ul className="space-y-2">
                                        {item.pros.map((pro, i) => (
                                            <li key={i} className="flex items-start text-sm">
                                                <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-1" />
                                                {pro}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="mb-6">
                                    <h4 className="font-bold text-sm text-gray-400 uppercase tracking-wide mb-2">Points Faibles</h4>
                                    <ul className="space-y-2">
                                        {item.cons.map((con, i) => (
                                            <li key={i} className="flex items-start text-sm">
                                                <XCircle className="w-4 h-4 text-red-500 mr-2 flex-shrink-0 mt-1" />
                                                {con}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <span className="block text-xs font-bold text-blue-600 mb-1">NOTRE VERDICT</span>
                                    <p className="text-sm text-blue-900 italic">"{item.verdict}"</p>
                                </div>
                            </div>

                            <div className="p-4 bg-gray-50 border-t border-gray-100">
                                <Link href="/contact" className="block w-full text-center bg-slate-900 text-white py-3 rounded-lg font-bold hover:bg-slate-800 transition-colors">
                                    Obtenir un devis {item.brand}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* SEO Content Block */}
            <section className="py-16 px-4 max-w-4xl mx-auto prose prose-slate">
                <h2>Comment choisir sa serrure de sécurité ?</h2>
                <p>
                    Au-delà de la marque, plusieurs critères techniques doivent guider votre choix pour garantir la sécurité de votre domicile.
                </p>
                <h3>1. La certification A2P</h3>
                <p>
                    Délivrée par le CNPP, elle classe les serrures selon leur temps de résistance à l'effraction :
                    <ul>
                        <li><strong>A2P *</strong> : 5 minutes (Opportuniste)</li>
                        <li><strong>A2P **</strong> : 10 minutes (Cambrioleur averti)</li>
                        <li><strong>A2P ***</strong> : 15 minutes (Professionnel)</li>
                    </ul>
                </p>
                <h3>2. Le nombre de points de fermeture</h3>
                <p>
                    Pour une porte d'entrée classique, un minimum de <strong>3 points</strong> est requis. Pour les grandes portes ou pour une sécurité maximale, optez pour 5 ou 7 points (haut et bas).
                </p>
                <h3>3. La protection des clés</h3>
                <p>
                    Privilégiez les clés brevetées fournies avec une <strong>carte de propriété</strong>. Cela empêche toute reproduction frauduleuse de vos clés sans ce justificatif.
                </p>
            </section>

            {/* CTA Final */}
            <section className="py-16 bg-yellow-400">
                <div className="max-w-4xl mx-auto text-center px-4">
                    <ShieldCheck className="w-16 h-16 text-black mx-auto mb-6" />
                    <h2 className="text-3xl font-bold mb-4 text-black">Besoin d'un installateur agréé ?</h2>
                    <p className="text-xl mb-8 text-black/80">Nous installons toutes les marques présentées dans ce comparatif (Fichet, Picard, Vachette). Devis gratuit sur place.</p>
                    <div className="flex justify-center gap-4 flex-col sm:flex-row">
                        <CallButton phone="0185490707" label="Appeler un expert" />
                    </div>
                </div>
            </section>

            <Footer />
            <FloatingActions />
        </div>
    );
}
