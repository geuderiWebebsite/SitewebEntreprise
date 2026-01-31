"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "Quels services un serrurier à Paris propose-t-il ?",
        answer: "Un serrurier professionnel propose l'ouverture de porte claquée, le changement de serrure (A2P), l'installation de porte blindée, et le dépannage d'urgence 24h/24. Que vous soyez à Paris 15, Paris 17 ou Paris 11, nos artisans interviennent rapidement pour votre sécurité."
    },
    {
        question: "Combien coûte une intervention de serrurier pas cher à Paris ?",
        answer: "Le tarif dépend du type d'intervention (ouverture de porte, remplacement de cylindre, sos serrurier). Nous proposons les meilleurs tarifs pour un serrurier paris pas cher avec un devis transparent avant chaque travail."
    },
    {
        question: "Comment trouver un serrurier de confiance à Paris en urgence ?",
        answer: "Pour une urgence serrurier paris, privilégiez un artisan local reconnu. Nous intervenons dans tous les arrondissements (Paris 18, Paris 12, Paris 16, Paris 20) en moins de 30 minutes pour tout dépannage de serrurerie paris."
    },
    {
        question: "Pourquoi choisir un serrurier certifié pour une ouverture de porte ?",
        answer: "L'ouverture de porte paris sans casse nécessite un savoir-faire spécifique. Nos serruriers à Paris (75017, 75015, 75011) utilisent des méthodes professionnelles pour préserver votre serrure et votre porte blindée."
    },
    {
        question: "Quelles sont vos zones d'intervention pour un dépannage serrurier ?",
        answer: "Nous couvrons tout Paris (Paris 1er au Paris 20ème) ainsi que la banlieue proche. Que vous cherchiez un serrurier paris 17, un serrurier paris 15 ou un serrurier paris 19, notre équipe gère vos urgences de serrurerie 24h/24."
    },
    {
        question: "Est-il possible de changer ma serrure pour une serrure de haute sécurité ?",
        answer: "Oui, nous installons des serrures multipoints certifiées A2P pour renforcer la sécurité de votre domicile à Paris. Nos experts en serrurerie paris 16 et paris 14 vous conseillent sur les meilleurs modèles (Fichet, Picard, Bricard)."
    },
    {
        question: "Que faire en cas de clé cassée ou de serrure bloquée ?",
        answer: "Ne forcez pas ! Appelez un sos serrurier paris immédiatement. Un serrurier paris 13 ou paris 14 interviendra pour extraire la clé et réparer votre cylindre sans endommager votre installation."
    },
    {
        question: "Quels sont les délais d'intervention pour un serrurier paris 17 ou paris 15 ?",
        answer: "Grâce à notre implantation locale, nous garantissons une arrivée en 20 à 30 minutes pour tout dépannage serrurier paris 15, paris 17 ou paris 11. La rapidité est notre priorité pour vos urgences."
    },
    {
        question: "Quel est le prix d'un changement de serrure ou d'un barillet ?",
        answer: "Le prix changement serrure dépend du modèle (multipoints, A2P). Pour un simple changement barillet porte ou cylindre serrure, nous proposons des tarifs compétitifs. Demandez votre devis serrurerie gratuit pour connaître le tarif serrurier exact."
    },
    {
        question: "Pourquoi faire installer une porte blindée dans son appartement à Paris ?",
        answer: "Installer une porte blindée ou réaliser un blindage de porte existante augmente considérablement votre sécurité. Nos experts en porte blindée appartement vous proposent des solutions certifiées pour prévenir toute effraction."
    }
];

// Additional keywords distributed in a hidden or subtle section for SEO
const hiddenKeywords = [
    "serrurier paris 7", "depannage serrurier paris", "serrurier paris 10", "serrurier paris 5",
    "serrurier 75015", "serrurier paris 6", "serrurier paris 9", "serrurier paris 4",
    "serrurier paris 8", "serrurerie paris 11", "artisan serrurier paris", "serrurier paris 3",
    "serrurerie paris 16", "serrurier paris 2", "serrurier pas cher paris", "serrurier paris 1er",
    "serrurerie paris 18", "serrurerie paris 12", "serrurier 75018", "serrurier paris 1",
    "changement serrure paris", "serrurier 75020", "serrurerie paris 14", "serrurier 75016",
    "recherche serrurier paris", "serrurier 75012", "serrurerie paris 20", "serrurerie paris 13",
    "serrurier 75019", "serrurier paris 13eme", "sos serrurier", "serrurier proche de moi",
    "ouverture de porte blindee paris", "sos serrurerie paris", "serrurier paris 15eme",
    "serrurier paris 17eme", "serrurier paris 11eme", "serrurier paris 18eme", "serrurier paris 12eme",
    "serrurier paris 16eme", "serrurier paris 20eme", "serrurier parís 14eme", "serrurier paris 19eme",
    "serrurier urgence", "porte de garage", "installer porte blindee", "depannage serrurerie",
    "prix serrurier", "changement de serrure", "serrure de securite", "blindage de porte",
    "artisan serrurier", "serrurier brico depôt", "serrure connectee", "reparer serrure",
    "barillet serrure", "cylindre serrure", "serrurier autour de moi", "double de cle",
    "cle cassee", "serrure connectee porte", "serrurier d urgence", "reparation porte blindee",
    "porte blindee prix", "cylindre de serrure", "reparation serrure", "ouverture de porte claquee",
    "cylindre serrure haute securite", "prix changement serrure", "entreprise de serrurerie",
    "porte blindee appartement", "installation serrure", "remplacement serrure", "changement cylindre serrure",
    "depannage serrure", "serrure porte blindee", "chiffre d affaire serrurerie", "devis serrurerie",
    "urgence serrurerie", "changer cylindre serrure", "serrurerie d urgence", "tarif serrurier changement de serrure",
    "ouverture de porte serrurier prix", "serrurerie metallerie", "prix barillet porte", "changement serrure porte blindee",
    "changer barillet porte", "changement de serrure prix"
];

export default function Faq() {
    return (
        <section className="py-20 bg-white" id="faq">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Questions Fréquentes - Votre Serrurier à Paris
                    </h2>
                    <p className="text-lg text-gray-600">
                        Tout ce que vous devez savoir sur nos services de serrurerie et dépannage d'urgence à Paris.
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

                {/* SEO Keyword Cloud - Visually subtle but accessible to bots */}
                <div className="mt-16 pt-8 border-t border-gray-100 opacity-60 text-xs text-gray-400">
                    <p className="mb-2">Expertise locale en serrurerie à Paris :</p>
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
