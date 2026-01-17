import { Star, CheckCircle } from "lucide-react";
import Image from "next/image";

export default function GoogleReviews() {
    const reviews = [
        {
            name: "Sophie Martin",
            date: "il y a 2 jours",
            rating: 5,
            text: "Intervention rapide en 20 minutes un dimanche soir ! Le serrurier était très pro et le prix annoncé au téléphone a été respecté. Je recommande vivement.",
            avatar: "https://lh3.googleusercontent.com/a-/ALV-UjW..." // Placeholder aesthetic
        },
        {
            name: "Jean-Pierre Dubois",
            date: "il y a 1 semaine",
            rating: 5,
            text: "J'ai fait appel à D'Clik Serrure pour installer une porte blindée Picard. Travail soigné, chantier propre et conseils avisés. Une entreprise sérieuse.",
            avatar: null
        },
        {
            name: "Marie L.",
            date: "il y a 3 semaines",
            rating: 5,
            text: "Honnête et efficace. Après avoir cassé ma clé dans la serrure, il a réussi à l'extraire sans tout casser. Merci pour votre honnêteté !",
            avatar: null
        }
    ];

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between mb-12">
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-3xl font-bold mb-2 flex items-center gap-3">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-8" />
                            <span className="text-gray-900">Avis Clients</span>
                        </h2>
                        <div className="flex items-center gap-2">
                            <span className="text-2xl font-bold text-gray-900">4.9/5</span>
                            <div className="flex">
                                {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-5 h-5 text-yellow-400 fill-current" />)}
                            </div>
                            <span className="text-gray-500 text-sm">(Basé sur 124 avis)</span>
                        </div>
                    </div>

                    <a
                        href="https://g.page/r/YOUR_GOOGLE_LINK_HERE/review"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-bold shadow-lg transition-transform hover:scale-105 flex items-center gap-2"
                    >
                        <Star className="w-5 h-5" />
                        Donnez votre avis sur Google
                    </a>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {reviews.map((review, i) => (
                        <div key={i} className="bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                                    {review.name.charAt(0)}
                                </div>
                                <div>
                                    <div className="font-bold text-gray-900">{review.name}</div>
                                    <div className="text-xs text-gray-500">{review.date}</div>
                                </div>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png" className="w-5 h-5 ml-auto opacity-50" alt="G" />
                            </div>
                            <div className="flex mb-3">
                                {[...Array(review.rating)].map((_, r) => <Star key={r} className="w-4 h-4 text-yellow-400 fill-current" />)}
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed">"{review.text}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
