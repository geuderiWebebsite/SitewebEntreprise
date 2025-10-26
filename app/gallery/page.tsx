"use client";

import { useState } from "react";
import { Search, Filter, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingActions from "../components/FloatingActions";

const categories = [
  "Tous",
  "Ouverture de porte",
  "Installation",
  "Réparation",
  "Blindage",
];

const galleryItems = [
  {
    id: 1,
    image: "serrure-3-points-applique.jpg",
    title: "Installation Serrure Multipoints",
    category: "Installation",
    location: "Paris 15ème",
    date: "2024-09-15",
    height: "tall",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&q=80",
    title: "Ouverture Porte Blindée",
    category: "Ouverture de porte",
    location: "Paris 8ème",
    date: "2024-09-10",
    height: "normal",
  },
  {
    id: 3,
    image: "CYLINDRE+FICHET-1920w.webp",
    title: "Réparation Cylindre",
    category: "Réparation",
    location: "Paris 11ème",
    date: "2024-09-05",
    height: "normal",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80",
    title: "Blindage de Porte",
    category: "Blindage",
    location: "Paris 17ème",
    date: "2024-08-28",
    height: "tall",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800&q=80",
    title: "Installation Serrure A2P",
    category: "Installation",
    location: "Paris 12ème",
    date: "2024-08-20",
    height: "normal",
  },
  {
    id: 6,
    image: "IMG-20251021-WA0006.jpg",
    title: "Dépannage Urgent",
    category: "Ouverture de porte",
    location: "Paris 10ème",
    date: "2024-08-15",
    height: "normal",
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1597423244036-ef5020e83f3c?w=800&q=80",
    title: "Remplacement Serrure",
    category: "Réparation",
    location: "Paris 19ème",
    date: "2024-07-10",
    height: "tall",
  },
  {
    id: 8,
    image: "test-avis-serrure-welock-smart-lock-010-780x470.jpg",
    title: "Serrure Connectée",
    category: "Installation",
    location: "Paris 7ème",
    date: "2024-08-05",
    height: "normal",
  },
  {
    id: 9,
    image: "IMG-20251021-WA0019.jpg",
    title: "Ouverture Porte Claquée",
    category: "Ouverture de porte",
    location: "Paris 16ème",
    date: "2024-07-30",
    height: "normal",
  },
  {
    id: 10,
    image: "11607-securite-2.jpg",
    title: "Installation Serrure Haute Sécurité",
    category: "Installation",
    location: "Paris 9ème",
    date: "2024-07-25",
    height: "tall",
  },
  {
    id: 11,
    image:
      "Debloquer_une_serrure_sans_l_endommager__Techniques_efficaces-1536x867.webp",
    title: "Réparation Serrure Bloquée",
    category: "Réparation",
    location: "Paris 13ème",
    date: "2024-07-20",
    height: "normal",
  },
  {
    id: 12,
    image: "porteblindeappartementmarseilleJPGJPG_59f8ee10c71a5.jpeg",
    title: "Blindage Porte Appartement",
    category: "Blindage",
    location: "Paris 14ème",
    date: "2024-07-15",
    height: "normal",
  },
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedImage, setSelectedImage] = useState<
    (typeof galleryItems)[0] | null
  >(null);

  const filteredItems = galleryItems.filter((item) => {
    const matchesCategory =
      selectedCategory === "Tous" || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-cream-100">
      <Header />

      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Notre Galerie de Réalisations
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Découvrez nos interventions et installations professionnelles à
              Paris et en Île-de-France
            </p>
          </div>

          <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-neutral-600" />
              <Input
                type="text"
                placeholder="Rechercher par titre ou localisation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-white border-neutral-300 focus:border-red-500"
              />
            </div>

            <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto">
              {categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  variant={
                    selectedCategory === category ? "default" : "outline"
                  }
                  className={`whitespace-nowrap ${
                    selectedCategory === category
                      ? "bg-neutral-900 text-white hover:bg-neutral-800"
                      : "bg-white text-neutral-900 border-neutral-300 hover:bg-cream-100"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className={`relative overflow-hidden rounded-2xl cursor-pointer group ${
                  item.height === "tall" ? "row-span-2" : ""
                }`}
                onClick={() => setSelectedImage(item)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>

                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                  <span className="inline-block px-3 py-1 bg-red-600 text-white text-sm font-semibold rounded-full mb-3 w-fit">
                    {item.category}
                  </span>
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <div className="flex items-center justify-between text-sm text-gray-300">
                    <span>{item.location}</span>
                    <span>
                      {new Date(item.date).toLocaleDateString("fr-FR")}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-neutral-600">Aucun résultat trouvé</p>
            </div>
          )}
        </div>
      </main>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-red-500 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-8 w-8" />
          </button>

          <div
            className="max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <div className="mt-6 text-white">
              <span className="inline-block px-3 py-1 bg-red-600 text-white text-sm font-semibold rounded-full mb-3">
                {selectedImage.category}
              </span>
              <h2 className="text-3xl font-bold mb-2">{selectedImage.title}</h2>
              <div className="flex items-center gap-4 text-gray-300">
                <span>{selectedImage.location}</span>
                <span>•</span>
                <span>
                  {new Date(selectedImage.date).toLocaleDateString("fr-FR")}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
      <FloatingActions />
    </div>
  );
}
