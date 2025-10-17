'use client';

import { Calendar, User, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingActions from '../components/FloatingActions';
import PromoBanners from '../components/PromoBanners';
import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: 'Comment choisir sa serrure A2P ?',
    excerpt: 'Découvrez les critères essentiels pour sélectionner une serrure haute sécurité adaptée à vos besoins et votre budget.',
    image: 'https://images.pexels.com/photos/5691604/pexels-photo-5691604.jpeg?auto=compress&cs=tinysrgb&w=1920',
    author: 'Jean Dupont',
    date: '2024-10-01',
    category: 'Sécurité',
    readTime: '5 min'
  },
  {
    id: 2,
    title: 'Les 5 signes qu\'il faut changer votre serrure',
    excerpt: 'Apprenez à reconnaître les signaux d\'alerte qui indiquent qu\'il est temps de remplacer votre serrure pour garantir votre sécurité.',
    image: 'https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=1920',
    author: 'Marie Martin',
    date: '2024-09-28',
    category: 'Conseils',
    readTime: '4 min'
  },
  {
    id: 3,
    title: 'Que faire en cas de perte de clés ?',
    excerpt: 'Guide pratique des étapes à suivre immédiatement après avoir perdu vos clés pour assurer votre sécurité.',
    image: 'https://images.pexels.com/photos/4246096/pexels-photo-4246096.jpeg?auto=compress&cs=tinysrgb&w=1920',
    author: 'Pierre Lefebvre',
    date: '2024-09-25',
    category: 'Urgence',
    readTime: '3 min'
  },
  {
    id: 4,
    title: 'Blindage de porte : est-ce vraiment efficace ?',
    excerpt: 'Analyse complète des avantages et inconvénients du blindage de porte pour renforcer la sécurité de votre domicile.',
    image: 'https://images.pexels.com/photos/5691641/pexels-photo-5691641.jpeg?auto=compress&cs=tinysrgb&w=1920',
    author: 'Sophie Bernard',
    date: '2024-09-20',
    category: 'Sécurité',
    readTime: '6 min'
  },
  {
    id: 5,
    title: 'Les nouvelles serrures connectées',
    excerpt: 'Tout ce qu\'il faut savoir sur les serrures intelligentes : avantages, prix, installation et compatibilité.',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1920',
    author: 'Luc Durand',
    date: '2024-09-15',
    category: 'Innovation',
    readTime: '7 min'
  },
  {
    id: 6,
    title: 'Entretien de serrure : les bons gestes',
    excerpt: 'Conseils pratiques pour entretenir vos serrures et prolonger leur durée de vie tout en garantissant leur efficacité.',
    image: 'https://images.pexels.com/photos/8092403/pexels-photo-8092403.jpeg?auto=compress&cs=tinysrgb&w=1920',
    author: 'Anne Petit',
    date: '2024-09-10',
    category: 'Maintenance',
    readTime: '4 min'
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-light-100">
      <Header />
      <PromoBanners />

      <main className="pt-32 pb-20">
        <section
          className="relative bg-cover bg-center mb-16"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/5691604/pexels-photo-5691604.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        >
          <div className="absolute inset-0 bg-overlay-light"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-anthracite mb-6">
                Blog & Actualités
              </h1>
              <p className="text-xl text-anthracite-light">
                Conseils d'experts, actualités et guides pratiques pour la sécurité de votre domicile
              </p>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-overlay-lighter group-hover:bg-overlay-light transition-all duration-500"></div>

                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-anthracite text-white text-sm font-semibold rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="bg-light-50 p-6">
                  <div className="flex items-center gap-4 text-sm text-anthracite-lighter mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString('fr-FR')}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-anthracite mb-3 group-hover:text-red-600 transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-anthracite-light mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-anthracite-light">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>

                    <Link href={`/blog/${post.id}`}>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-anthracite hover:text-red-600 hover:bg-beige-100 transition-all group/btn"
                      >
                        Lire
                        <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-anthracite-light mb-4">
              Vous avez des questions sur la serrurerie ?
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-anthracite hover:bg-anthracite-light text-white px-8 py-6 text-lg rounded-full transform hover:scale-105 transition-all duration-300">
                Contactez nos experts
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}
