import { Metadata } from "next";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import FloatingActions from "@/app/components/FloatingActions";
import CityForm from "@/components/city/CityForm";
import CallButton from "@/components/city/CallButton";
import { generateArticleSchema, generateSEOMetadata } from "@/app/seo/seoConfig";
import { Shield, Star, CheckCircle, AlertTriangle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = generateSEOMetadata({
    title: "Serrure A2P 1, 2 ou 3 Étoiles : Le Guide Complet (2025)",
    description: "Comprendre la certification A2P pour votre assurance. Quelle différence entre 1, 2 ou 3 étoiles ? Prix, installation et obligations assurance à Paris.",
    canonical: "https://www.dclik-serrure.com/blog/serrure-a2p-guide",
    keywords: ["serrure A2P", "certification A2P", "assurance porte blindée", "A2P 3 étoiles prix", "norme serrure assurance"],
    ogType: "article",
    publishedTime: "2025-10-28T09:00:00+01:00",
    author: "D'Clik Serrure",
});

export default function SerrureA2PGuide() {
    const articleSchema = generateArticleSchema({
        title: "Serrure A2P : Le Guide Complet pour votre Assurance",
        description: "Tout comprendre sur la certification A2P : étoiles, résistance effraction et exigences des assuranceshabitation.",
        url: "https://www.dclik-serrure.com/blog/serrure-a2p-guide",
        image: "https://images.unsplash.com/photo-1558002038-109177381793?w=1200",
        publishedTime: "2025-10-28T09:00:00+01:00",
        author: "D'Clik Serrure",
        category: "Conseils Sécurité",
    });

    return (
        <div className="min-h-screen bg-white">
            <Script
                id="article-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <Header />

            {/* Hero Article */}
            <section className="relative pt-32 pb-16 px-4 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <span className="text-red-600 font-bold tracking-wider text-sm uppercase mb-4 block">Guide Sécurité</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        Serrure A2P : Pourquoi est-elle <span className="text-red-600">obligatoire</span> pour votre assurance ?
                    </h1>
                    <div className="flex items-center gap-4 text-gray-500 mb-8 border-b border-gray-200 pb-8">
                        <span>Par <strong className="text-gray-900">Expert D'Clik</strong></span>
                        <span>•</span>
                        <span>5 min de lecture</span>
                        <span>•</span>
                        <span>Mis à jour le 28 Oct 2025</span>
                    </div>
                    <img
                        src="https://images.unsplash.com/photo-1558002038-109177381793?w=1200&h=600&fit=crop"
                        alt="Serrure certifiée A2P sur porte blindée"
                        className="w-full h-[400px] object-cover rounded-xl shadow-lg mb-12"
                    />
                </div>
            </section>

            {/* Content */}
            <article className="max-w-3xl mx-auto px-4 pb-20 prose prose-lg prose-red">
                <p className="lead text-xl text-gray-700 mb-12">
                    Vous avez sûrement déjà vu ce logo "A2P" avec des étoiles sur une clé ou une serrure. Ce n'est pas juste du marketing : c'est la <strong>seule certification reconnue par les assureurs</strong> en France pour garantir la résistance d'une porte aux tentatives d'effraction.
                </p>

                <h2 className="flex items-center gap-3">
                    <Shield className="w-8 h-8 text-red-600" />
                    Qu'est-ce que la certification A2P ?
                </h2>
                <p>
                    Délivrée par le CNPP (Centre National de Prévention et de Protection), la certification A2P (Assurance Prévention Protection) classe les serrures selon leur temps de résistance face à un cambrioleur équipé d'outillage professionnel (pied de biche, perceuse, crochetage...).
                </p>

                <div className="bg-red-50 p-6 rounded-xl border border-red-100 my-8 not-prose">
                    <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-2">
                        <Star className="fill-red-600 text-red-600" /> Le Classement par Étoiles
                    </h3>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <div className="bg-white p-2 rounded-full shadow-sm font-bold text-red-600 min-w-[3rem] text-center">A2P *</div>
                            <div>
                                <strong>1 Étoile</strong> : Résiste au moins <span className="text-red-700 font-bold">5 minutes</span>.
                                <br /><span className="text-sm text-gray-600">Suffisant pour la plupart des appartements en étage.</span>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="bg-white p-2 rounded-full shadow-sm font-bold text-red-600 min-w-[3rem] text-center">A2P **</div>
                            <div>
                                <strong>2 Étoiles</strong> : Résiste au moins <span className="text-red-700 font-bold">10 minutes</span>.
                                <br /><span className="text-sm text-gray-600">Recommandé pour les rez-de-chaussée ou maisons.</span>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="bg-white p-2 rounded-full shadow-sm font-bold text-red-600 min-w-[3rem] text-center">A2P ***</div>
                            <div>
                                <strong>3 Étoiles</strong> : Résiste au moins <span className="text-red-700 font-bold">15 minutes</span>.
                                <br /><span className="text-sm text-gray-600">Le niveau maximal (Forteresse). Souvent exigé pour les commerces ou biens de valeur.</span>
                            </div>
                        </li>
                    </ul>
                </div>

                <h2>Pourquoi votre assurance l'exige-t-elle ?</h2>
                <p>
                    C'est simple : 80% des cambrioleurs abandonnent si la porte résiste plus de 3 minutes. Une serrure A2P garantie 5 minutes minimum décourage la grande majorité des tentatives.
                </p>
                <div className="flex items-center gap-4 bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400 not-prose my-6">
                    <AlertTriangle className="text-yellow-600 w-8 h-8 flex-shrink-0" />
                    <p className="text-yellow-800 m-0 text-sm">
                        <strong>Attention</strong> : Relisez votre contrat d'habitation ("Clause vol"). Si vous êtes cambriolé sans effraction visible ou avec une serrure non conforme, l'assureur peut refuser de vous indemniser ou appliquer une franchise majorée.
                    </p>
                </div>

                <h2>Comment reconnaître une vraie serrure A2P ?</h2>
                <p>
                    Méfiez-vous des contrefaçons. Une vraie serrure certifiée possède le logo A2P gravé sur :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>La <strong>clé</strong></li>
                    <li>Le <strong>cylindre</strong> (barillet)</li>
                    <li>Le <strong>pêne</strong> ou le coffre de la serrure</li>
                </ul>
                <p>
                    De plus, la serrure complète (cylindre + carénage) doit être de la même marque pour conserver la certification.
                </p>

                <h2>Quel prix pour une installation A2P ?</h2>
                <p>
                    La qualité a un prix, mais c'est un investissement pour 15 ans.
                    <br />
                    Comptez environ :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>400€ à 600€</strong> pour un verrou ou cylindre A2P*</li>
                    <li><strong>600€ à 900€</strong> pour une serrure carénée A2P*</li>
                    <li><strong>1200€+</strong> pour du haut de gamme A2P***</li>
                </ul>

                <div className="bg-gray-900 text-white p-8 rounded-2xl shadow-xl mt-12 not-prose text-center">
                    <h3 className="text-2xl font-bold mb-4">Besoin de mettre votre porte aux normes ?</h3>
                    <p className="mb-6 text-gray-300">
                        Nos serruriers installent quotidiennement des serrures Picard, Vachette et Fichet certifiées A2P.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link href="/services/changement-serrure">
                            <Button size="lg" className="bg-red-600 hover:bg-red-700">
                                Voir nos forfaits <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </Link>
                        <CallButton phone="0185490707" label="Conseil Gratuit" variant="outline" className="border-white text-white hover:bg-white/10" />
                    </div>
                </div>

            </article>

            <Footer />
            <FloatingActions />
        </div>
    );
}
