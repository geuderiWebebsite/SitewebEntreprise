import { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import FloatingActions from "@/app/components/FloatingActions";
import CallButton from "@/components/city/CallButton";
import { generateArticleSchema, generateSEOMetadata } from "@/app/seo/seoConfig";
import { AlertTriangle, Phone, FileText, Camera, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = generateSEOMetadata({
    title: "Cambriolage : Que faire ? Les 5 étapes d'urgence (Guide 2025)",
    description: "Victime d'un cambriolage ? Ne touchez à rien ! Suivez notre guide d'urgence : Police, Assurance, Sécurisation provisoire. Dépannage serrurerie 24/7.",
    canonical: "https://www.dclik-serrure.com/blog/que-faire-apres-cambriolage",
    keywords: ["que faire après cambriolage", "dépôt plainte cambriolage", "fermeture provisoire serrurier", "assurance cambriolage délai"],
    ogType: "article",
    publishedTime: "2025-10-29T10:00:00+01:00",
    author: "D'Clik Serrure",
});

export default function PostBurglaryGuide() {
    const articleSchema = generateArticleSchema({
        title: "Cambriolage : Que faire ? Le Guide d'Urgence",
        description: "Les 5 étapes cruciales à suivre immédiatement après un cambriolage pour être bien indemnisé.",
        url: "https://www.dclik-serrure.com/blog/que-faire-apres-cambriolage",
        image: "https://images.unsplash.com/photo-1563911302283-d2bc129e7c1f?w=1200",
        publishedTime: "2025-10-29T10:00:00+01:00",
        author: "D'Clik Serrure",
        category: "Urgence",
    });

    return (
        <div className="min-h-screen bg-white">
            <Script
                id="article-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <Header />

            <section className="relative pt-32 pb-16 px-4 bg-red-50">
                <div className="max-w-4xl mx-auto">
                    <span className="bg-red-600 text-white px-3 py-1 rounded font-bold text-sm mb-4 inline-block tracking-wider">GUIDE D'URGENCE</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        Vous venez d'être <span className="text-red-700">cambriolé</span> ?<br />
                        Voici les 5 étapes à suivre immédiatement.
                    </h1>
                    <div className="flex items-center gap-4 text-gray-500 mb-8 border-b border-gray-300 pb-8">
                        <span>Par <strong className="text-gray-900">Expert D'Clik</strong></span>
                        <span>•</span>
                        <span>3 min de lecture</span>
                    </div>
                </div>
            </section>

            <article className="max-w-3xl mx-auto px-4 pb-20 prose prose-red prose-lg">
                <div className="bg-red-100 border-l-4 border-red-600 p-6 rounded-r mb-12 not-prose">
                    <h3 className="text-xl font-bold text-red-800 flex items-center mb-2">
                        <AlertTriangle className="mr-2" /> Règle d'or : Ne touchez à rien !
                    </h3>
                    <p className="text-red-900">
                        Pour faciliter l'enquête de police et le relevé d'empreintes, il est crucial de ne rien déplacer et de ne pas nettoyer avant l'arrivée des forces de l'ordre.
                    </p>
                </div>

                <h2>Étape 1 : Appelez la Police (17)</h2>
                <p>
                    Composez immédiatement le <strong>17</strong> ou le <strong>112</strong>. La police ou la gendarmerie viendra constater l'effraction. Ce constat est indispensable pour votre dossier d'assurance.
                </p>

                <h2>Étape 2 : Faites opposition (Si nécessaire)</h2>
                <p>
                    Si des moyens de paiement (chéquier, cartes bleues) ont été volés, appelez immédiatement votre banque pour faire opposition. Idem pour vos téléphones (opérateur).
                </p>

                <h2>Étape 3 : Sécurisez votre domicile (Fermeture Provisoire)</h2>
                <p>
                    Une fois la police passée, vous ne pouvez pas laisser votre porte ouverte. Vous devez faire appel à un serrurier pour une <strong>"Mise en sécurité"</strong> ou <strong>"Fermeture Provisoire"</strong>.
                </p>
                <ul>
                    <li>Si la porte est réparable : remplacement de la serrure.</li>
                    <li>Si la porte est détruite : installation de panneaux de bois pour clore l'accès en attendant une nouvelle porte.</li>
                </ul>

                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 not-prose my-8">
                    <h3 className="text-lg font-bold mb-4">Besoin d'un serrurier agrée maintenant ?</h3>
                    <p className="mb-4 text-gray-600">Nous intervenons en 30 minutes pour sécuriser votre domicile. Facture détaillée pour votre assurance.</p>
                    <div className="flex gap-4">
                        <CallButton phone="0185490707" label="Urgence Sécurisation" className="bg-red-600 hover:bg-red-700 w-full md:w-auto" />
                    </div>
                </div>

                <h2>Étape 4 : Déposez plainte (Sous 24-48h)</h2>
                <p>
                    Rendez-vous au commissariat pour déposer plainte. Listez tous les objets volés. Conservez précieusement le récépissé de dépôt de plainte, il est exigé par l'assureur.
                </p>

                <h2>Étape 5 : Déclarez le sinistre à l'assurance (Sous 2 jours)</h2>
                <p>
                    Envoyez une lettre recommandée avec accusé de réception à votre assureur dans les <strong>2 jours ouvrés</strong> suivant la découverte du vol. Joignez-y le dépôt de plainte.
                </p>

                <h3>Que rembourse l'assurance ?</h3>
                <p>
                    En général, l'assurance prend en charge :
                </p>
                <ul>
                    <li>Les frais de réparation de la porte / serrure (Fermeture provisoire incluse).</li>
                    <li>La valeur des objets volés (selon vétusté et factures).</li>
                </ul>
                <p>
                    <strong>Attention</strong> : La plupart des contrats ne remboursent PAS le déplacement du serrurier en totalité (souvent plafonné), mais remboursent bien les pièces et main d'œuvre.
                </p>

                <div className="mt-12 not-prose border-t pt-8">
                    <h3 className="text-2xl font-bold mb-4">Prévenir plutôt que guérir</h3>
                    <p className="text-gray-600 mb-6">
                        Une fois le choc passé, pensez à renforcer votre sécurité pour éviter une récidive. Une porte blindée ou une serrure 3 points A2P sont les meilleures dissuasions.
                    </p>
                    <Link href="/services/porte-blindee">
                        <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
                            Découvrir nos portes blindées
                        </Button>
                    </Link>
                </div>

            </article>

            <Footer />
            <FloatingActions />
        </div>
    );
}
