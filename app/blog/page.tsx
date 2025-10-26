"use client";

import { Calendar, User, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingActions from "../components/FloatingActions";
import PromoBanners from "../components/PromoBanners";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "Comment choisir sa serrure A2P ?",
    excerpt:
      "Découvrez les critères essentiels pour sélectionner une serrure haute sécurité adaptée à vos besoins et votre budget.",
    image: "11607-securite-2.jpg",
    author: "Jean Dupont",
    date: "2024-10-01",
    category: "Sécurité",
    readTime: "5 min",
  },
  {
    id: 2,
    title: "Les 5 signes qu'il faut changer votre serrure",
    excerpt:
      "Apprenez à reconnaître les signaux d'alerte qui indiquent qu'il est temps de remplacer votre serrure pour garantir votre sécurité.",
    image: "IMG-20251021-WA0009.jpg",
    author: "Marie Martin",
    date: "2024-09-28",
    category: "Conseils",
    readTime: "4 min",
  },
  {
    id: 3,
    title: "Que faire en cas de perte de clés ?",
    excerpt:
      "Guide pratique des étapes à suivre immédiatement après avoir perdu vos clés pour assurer votre sécurité.",
    image: "IMG-20251021-WA0004.jpg",
    author: "Pierre Lefebvre",
    date: "2024-09-25",
    category: "Urgence",
    readTime: "3 min",
  },
  {
    id: 4,
    title: "Blindage de porte : est-ce vraiment efficace ?",
    excerpt:
      "Analyse complète des avantages et inconvénients du blindage de porte pour renforcer la sécurité de votre domicile.",
    image: "IMG_1193-scaled.jpg",
    author: "Sophie Bernard",
    date: "2024-09-20",
    category: "Sécurité",
    readTime: "6 min",
  },
  {
    id: 5,
    title: "Les nouvelles serrures connectées",
    excerpt:
      "Tout ce qu'il faut savoir sur les serrures intelligentes : avantages, prix, installation et compatibilité.",
    image: "test-avis-serrure-welock-smart-lock-010-780x470.jpg",
    author: "Luc Durand",
    date: "2024-09-15",
    category: "Innovation",
    readTime: "7 min",
  },
  {
    id: 6,
    title: "Entretien de serrure : les bons gestes",
    excerpt:
      "Conseils pratiques pour entretenir vos serrures et prolonger leur durée de vie tout en garantissant leur efficacité.",
    image: "serrure-3-points-applique.jpg",
    author: "Anne Petit",
    date: "2024-09-10",
    category: "Maintenance",
    readTime: "4 min",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-light-100">
      <Header />
      <PromoBanners />

      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section
          className="relative bg-cover bg-center mb-16"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/5691604/pexels-photo-5691604.jpeg?auto=compress&cs=tinysrgb&w=1920)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Blog & Actualités
              </h1>
              <p className="text-xl text-gray-200">
                Conseils d'experts, actualités et guides pratiques pour la
                sécurité de votre domicile
              </p>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 transition-all duration-500"></div>

                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-red-600 text-white text-sm font-semibold rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content Section with Dark Overlay */}
                <div className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black p-6 overflow-hidden">
                  {/* Subtle overlay for extra depth */}
                  <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-black/50"></div>

                  <div className="relative z-10">
                    {/* Meta Info */}
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>
                          {new Date(post.date).toLocaleDateString("fr-FR")}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-gray-300 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>

                      <a href={`/blog/${post.id}`}>
                        <button className="text-white hover:text-red-500 transition-all group/btn flex items-center gap-2 text-sm font-medium">
                          Lire
                          <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-2xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/60"></div>
            <div className="relative z-10">
              <p className="text-gray-300 mb-6 text-lg">
                Vous avez des questions sur la serrurerie ?
              </p>
              <a href="/contact">
                <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg">
                  Contactez nos experts
                </button>
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
