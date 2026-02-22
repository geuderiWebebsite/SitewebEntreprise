"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import Script from "next/script";

interface FaqProps {
    city?: string;
}

export default function Faq({ city = "Paris" }: FaqProps) {
    const faqs = [
        {
            question: `Quels services un serrurier à ${city} propose-t-il ?`,
            answer: `Un serrurier professionnel propose l'ouverture de porte claquée, le changement de serrure (A2P), l'installation de porte blindée, et le dépannage d'urgence 24h/24. Nos artisans interviennent rapidement à ${city} pour votre sécurité.`
        },
        {
            question: `Combien coûte une intervention de serrurier pas cher à ${city} ?`,
            answer: `Le tarif dépend du type d'intervention (ouverture de porte, remplacement de cylindre, sos serrurier). Nous proposons les meilleurs tarifs pour un serrurier à ${city} avec un devis transparent avant chaque travail.`
        },
        {
            question: `Comment trouver un serrurier de confiance à ${city} en urgence ?`,
            answer: `Pour une urgence serrurier à ${city}, privilégiez un artisan local reconnu. Nous intervenons dans tous les quartiers de ${city} en moins de 30 minutes pour tout dépannage de serrurerie.`
        },
        {
            question: "Pourquoi choisir un serrurier certifié pour une ouverture de porte ?",
            answer: `L'ouverture de porte à ${city} sans casse nécessite un savoir-faire spécifique. Nos serruriers à ${city} utilisent des méthodes professionnelles pour préserver votre serrure et votre porte blindée.`
        },
        {
            question: `Quelles sont vos zones d'intervention pour un dépannage serrurier à ${city} ?`,
            answer: `Nous couvrons tout ${city} ainsi que les communes aux alentours. Notre équipe gère vos urgences de serrurerie 24h/24.`
        },
        {
            question: "Est-il possible de changer ma serrure pour une serrure de haute sécurité ?",
            answer: `Oui, nous installons des serrures multipoints certifiées A2P pour renforcer la sécurité de votre domicile à ${city}. Nos experts vous conseillent sur les meilleurs modèles (Fichet, Picard, Bricard).`
        },
        {
            question: "Que faire en cas de clé cassée ou de serrure bloquée ?",
            answer: `Ne forcez pas ! Appelez un sos serrurier à ${city} immédiatement. Un technicien interviendra pour extraire la clé et réparer votre cylindre sans endommager votre installation.`
        },
        {
            question: `Quels sont les délais d'intervention pour un serrurier à ${city} ?`,
            answer: `Grâce à notre implantation locale, nous garantissons une arrivée en 20 à 30 minutes pour tout dépannage serrurier à ${city}. La rapidité est notre priorité pour vos urgences.`
        },
        {
            question: "Quel est le prix d'un changement de serrure ou d'un barillet ?",
            answer: "Le prix changement serrure dépend du modèle (multipoints, A2P). Pour un simple changement barillet porte ou cylindre serrure, nous proposons des tarifs compétitifs. Demandez votre devis serrurerie gratuit pour connaître le tarif serrurier exact."
        },
        {
            question: `Pourquoi faire installer une porte blindée dans son logement à ${city} ?`,
            answer: "Installer une porte blindée ou réaliser un blindage de porte existante augmente considérablement votre sécurité. Nos experts en porte blindée vous proposent des solutions certifiées pour prévenir toute effraction."
        }
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
            },
        })),
    };

    const hiddenKeywords = [
        `serrurier ${city}`, `depannage serrurier ${city}`, `serrurier ${city} pas cher`,
        "sos serrurier", "serrurier proche de moi", "ouverture de porte blindee",
        "sos serrurerie", "serrurier urgence", "installer porte blindee", "depannage serrurerie",
        "prix serrurier", "changement de serrure", "serrure de securite", "blindage de porte",
        "artisan serrurier", "serrure connectee", "reparer serrure", "barillet serrure",
        "cylindre serrure", "serrurier autour de moi", "double de cle", "cle cassee",
        "reparation porte blindee", "porte blindee prix", "reparation serrure",
        "ouverture de porte claquee", "prix changement serrure", "installation serrure",
        "remplacement serrure", "changement cylindre serrure", "depannage serrure",
        "devis serrurerie", "urgence serrurerie", "serrurerie metallerie"
    ];

    return (
        <section className="py-20 bg-white" id="faq">
            <Script
                id={`faq-schema-${city.toLowerCase().replace(/\s+/g, '-')}`}
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Questions Fréquentes - Votre Serrurier à {city}
                    </h2>
                    <p className="text-lg text-gray-600">
                        Tout ce que vous devez savoir sur nos services de serrurerie et dépannage d'urgence à {city}.
                    </p>
                </div>

                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-left text-lg font-semibold hover:text-red-600">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-600 text-base leading-relaxed">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>

                <div className="mt-16 pt-8 border-t border-gray-100 opacity-60 text-xs text-gray-400">
                    <p className="mb-2">Expertise locale en serrurerie à {city} :</p>
                    <div className="flex flex-wrap gap-2">
                        {hiddenKeywords.map((kw, i) => (
                            <span key={i} className="hover:text-gray-600">{kw}</span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
