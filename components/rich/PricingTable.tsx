import { Check } from "lucide-react";

export default function PricingTable() {
    const prices = [
        {
            service: "Ouverture de porte claquée",
            price: "89€",
            details: ["Sans dégât garanti", "Déplacement inclus", "Main d'oeuvre incluse"],
            highlight: false
        },
        {
            service: "Ouverture porte fermée à clé",
            price: "119€",
            details: ["Remplacement cylindre si nécessaire (en sus)", "Déplacement inclus", "Devis avant intervention"],
            highlight: true
        },
        {
            service: "Remplacement Cylindre Standard",
            price: "149€",
            details: ["Cylindre fourni", "3 clés incluses", "Garantie 2 ans"],
            highlight: false
        },
        {
            service: "Installation Serrure 3 Points",
            price: "490€",
            details: ["Serrure A2P*", "Installation complète", "Garantie 5 ans"],
            highlight: false
        }
    ];

    return (
        <section className="py-16 px-4 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    Tarifs Transparents 2024
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {prices.map((item, index) => (
                        <div
                            key={index}
                            className={`bg-white rounded-xl shadow-lg p-6 flex flex-col relative ${item.highlight ? 'border-2 border-red-600 transform scale-105 z-10' : 'border border-gray-100'}`}
                        >
                            {item.highlight && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                                    LE PLUS COURANT
                                </div>
                            )}
                            <h3 className="text-lg font-bold mb-4 text-center min-h-[50px] flex items-center justify-center">
                                {item.service}
                            </h3>
                            <div className="text-4xl font-bold text-center text-red-600 mb-6">
                                {item.price} <span className="text-sm text-gray-400 font-normal">TTC</span>
                            </div>
                            <ul className="space-y-3 mb-6 flex-grow">
                                {item.details.map((detail, idx) => (
                                    <li key={idx} className="flex items-start text-sm text-gray-600">
                                        <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                                        {detail}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <p className="text-center text-gray-500 mt-8 text-sm max-w-2xl mx-auto">
                    * Les tarifs sont donnés à titre indicatif et peuvent varier selon le type de serrure, l'heure d'intervention (majoration nuit/week-end) et la complexité. Un devis définitif est établi avant toute intervention.
                </p>
            </div>
        </section>
    );
}
