import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";

interface NearbyCitiesProps {
    currentCity: string;
}

export default function NearbyCities({ currentCity }: NearbyCitiesProps) {
    const cities = [
        { name: "Paris", slug: "/serrurier-paris" },
        { name: "Saint-Maur-des-Fossés", slug: "/serrurier-saint-maur" },
        { name: "Vitry-sur-Seine", slug: "/serrurier-vitry" },
        { name: "Créteil", slug: "/serrurier-creteil-et-alentours" },
        { name: "Boulogne-Billancourt", slug: "/serrurier-boulogne-billancourt" }, // Fallback/Future
        { name: "Saint-Denis", slug: "/serrurier-saint-denis" }, // Fallback/Future
        // Add more strategic cities as needed
    ];

    // Filter out current city
    const otherCities = cities.filter((city) => city.name !== currentCity).slice(0, 6);

    return (
        <section className="py-12 bg-gray-100 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center gap-2 mb-6">
                    <MapPin className="text-red-600 w-6 h-6" />
                    <h2 className="text-xl font-bold text-gray-800">
                        Nos serruriers à proximité de {currentCity}
                    </h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {otherCities.map((city) => (
                        <Link
                            key={city.slug}
                            href={city.slug}
                            className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center justify-between group border border-gray-100"
                        >
                            <span className="text-sm font-medium text-gray-700 group-hover:text-red-600 transition-colors">
                                {city.name}
                            </span>
                            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all" />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
