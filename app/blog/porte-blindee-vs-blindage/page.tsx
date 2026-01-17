import { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import FloatingActions from "@/app/components/FloatingActions";
import CallButton from "@/components/city/CallButton";
import { generateArticleSchema, generateSEOMetadata } from "@/app/seo/seoConfig";
import { Shield, Check, X, DoorOpen, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = generateSEOMetadata({
    title: "Porte Blindée ou Blindage de Porte ? Le Comparatif (2025)",
    description: "Quelle différence entre un bloc-porte blindé et un blindage sur porte existante ? Prix, sécurité A2P, avantages et inconvénients. Notre avis d'expert.",
    canonical: "https://www.dclik-serrure.com/blog/porte-blindee-vs-blindage",
    keywords: ["porte blindée ou blindage", "prix blindage porte", "différence bloc porte blindé", "blindage porte existante avis"],
    ogType: "article",
    publishedTime: "2025-10-30T10:00:00+01:00",
    author: "D'Clik Serrure",
});

export default function ArmoredDoorVsShielding() {
    const articleSchema = generateArticleSchema({
        title: "Porte Blindée vs Blindage : Lequel Choisir ?",
        description: "Comparatif complet pour faire le bon choix de sécurité selon votre budget et votre copropriété.",
        url: "https://www.dclik-serrure.com/blog/porte-blindee-vs-blindage",
        image: "https://images.unsplash.com/photo-1516937941348-c09e554b9aa2?w=1200",
        publishedTime: "2025-10-30T10:00:00+01:00",
        author: "D'Clik Serrure",
        category: "Comparatifs",
    });

    return (
        <div className="min-h-screen bg-white">
            <Script
                id="article-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <Header />

            <section className="relative pt-32 pb-16 px-4 bg-gray-900 text-white">
                <div className="max-w-4xl mx-auto">
                    <span className="text-orange-400 font-bold tracking-wider text-sm uppercase mb-4 block">Comparatif Expert</span>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                        Porte Blindée <span className="text-gray-400">vs</span> Blindage de Porte<br />
                        <span className="text-orange-400">Lequel choisir ?</span>
                    </h1>
                    <div className="flex items-center gap-4 text-gray-400 mb-8 pb-8 border-b border-gray-700">
                        <span>Par <strong className="text-white">Expert D'Clik</strong></span>
                        <span>•</span>
                        <span>6 min de lecture</span>
                    </div>
                </div>
            </section>

            <article className="max-w-4xl mx-auto px-4 py-16 prose prose-lg prose-red">
                <p className="lead text-xl text-gray-700 mb-12">
                    C'est la question n°1 de nos clients : "Dois-je changer toute ma porte (Bloc-Porte) ou puis-je renforcer ma porte actuelle (Blindage) ?". La réponse dépend de votre <strong>budget</strong>, de l'<strong>esthétique</strong> exigée par votre copropriété, et du niveau de <strong>sécurité</strong> souhaité.
                </p>

                <div className="grid md:grid-cols-2 gap-8 not-prose mb-16">
                    <div className="bg-gray-50 p-8 rounded-2xl border-2 border-gray-100">
                        <h2 className="text-2xl font-bold mb-4 flex items-center"><DoorOpen className="mr-2 text-blue-600" /> Le Blindage de Porte</h2>
                        <p className="mb-4 text-gray-600">On conserve votre porte en bois actuelle et on vient la "shunter" : on habille l'intérieur d'une tôle d'acier et on renforce le bâti.</p>
                        <ul className="space-y-2 mb-6">
                            <li className="flex items-center text-green-600"><Check className="mr-2" /> Moins cher</li>
                            <li className="flex items-center text-green-600"><Check className="mr-2" /> Conserve l'aspect extérieur (Idéal Copro)</li>
                            <li className="flex items-center text-red-500"><X className="mr-2" /> Moins isolant qu'un bloc porte</li>
                        </ul>
                        <div className="text-2xl font-bold text-gray-900">dès 1200€</div>
                    </div>

                    <div className="bg-gray-50 p-8 rounded-2xl border-2 border-gray-100">
                        <h2 className="text-2xl font-bold mb-4 flex items-center"><Shield className="mr-2 text-red-600" /> Le Bloc-Porte Blindé</h2>
                        <p className="mb-4 text-gray-600">On retire TOUT (porte + cadre) et on pose un ensemble monobloc en acier certifié.</p>
                        <ul className="space-y-2 mb-6">
                            <li className="flex items-center text-green-600"><Check className="mr-2" /> Sécurité Maximale (A2P BP1 à BP3)</li>
                            <li className="flex items-center text-green-600"><Check className="mr-2" /> Isolation Phonique & Thermique Top</li>
                            <li className="flex items-center text-red-500"><X className="mr-2" /> Plus onéreux</li>
                        </ul>
                        <div className="text-2xl font-bold text-gray-900">dès 1800€</div>
                    </div>
                </div>

                <h2>1. Le Blindage de Porte : La solution "Rénovation"</h2>
                <p>
                    Le blindage est la solution préférée à Paris. Pourquoi ? Parce que de nombreuses copropriétés interdisent de changer l'aspect extérieur de la porte palière.
                </p>
                <p>
                    <strong>La technique :</strong> Nous fixons une plaque d'acier de 15/10ème ou 20/10ème sur la face intérieure de votre porte. Nous installons également une serrure carénée multi-points (3 à 7 points) et des cornières anti-pinces.
                </p>

                <h2>2. Le Bloc-Porte Blindé : La Forteresse</h2>
                <p>
                    C'est la solution radicale. Votre ancienne porte part à la déchetterie. Nous installons un bloc complet en acier, avec une serrure de haute sécurité intégrée dans la structure.
                </p>
                <p>
                    C'est le choix à faire si :
                </p>
                <ul>
                    <li>Votre porte actuelle est trop abîmée ou trop fine.</li>
                    <li>Vous voulez une isolation thermique/phonique parfaite (fini d'entendre l'ascenseur !).</li>
                    <li>Vous voulez une certification A2P BP1, BP2 ou BP3 sur l'ensemble.</li>
                </ul>

                <h2>Le Verdict de l'Expert</h2>
                <p>
                    <strong>Choisissez le Blindage si :</strong> Vous avez un budget serré (&lt; 1500€) et une porte en bois massif en bon état, ou des contraintes de syndic strictes.
                </p>
                <p>
                    <strong>Choisissez le Bloc-Porte si :</strong> Vous êtes propriétaire et voulez valoriser votre bien avec une sécurité et un confort acoustique irréprochables.
                </p>

                <div className="bg-orange-50 p-8 rounded-xl border border-orange-200 not-prose mt-12 text-center">
                    <h3 className="text-2xl font-bold mb-4 text-orange-900">Toujours indécis ?</h3>
                    <p className="mb-6 text-orange-800">
                        Le mieux est de laisser un technicien évaluer la solidité de votre porte actuelle (gonds, bâti...).
                        <br />
                        <strong>Le diagnostic est gratuit à Paris.</strong>
                    </p>
                    <div className="flex justify-center gap-4 flex-col sm:flex-row">
                        <CallButton phone="0185490707" label="Demander un avis technique" className="bg-orange-600 hover:bg-orange-700" />
                        <Link href="/contact">
                            <Button variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-100 w-full sm:w-auto h-full">
                                Devis en ligne
                            </Button>
                        </Link>
                    </div>
                </div>
            </article>

            <Footer />
            <FloatingActions />
        </div>
    );
}
