
'use client';

import { DoorOpen, Shield, Wrench, Home, ArrowRight, Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const services = [
  {
    id: 'ouverture',
    icon: DoorOpen,
    title: 'Ouverture de Porte',
    shortDesc: 'Intervention rapide sans dégât',
    fullDesc: 'Vous êtes enfermé à l\'extérieur ? Notre équipe d\'experts intervient en moins de 30 minutes pour ouvrir votre porte sans aucun dégât dans 95% des cas. Service professionnel et discret.',
    price: '89€',
    duration: '15-25 min',
    features: ['Sans casse garantie', 'Tous types de serrures', 'Intervention 24h/24', 'Tarif fixe transparent'],
    image: 'https://images.pexels.com/photos/5691641/pexels-photo-5691641.jpeg?auto=compress&cs=tinysrgb&w=1920'
  },
  {
    id: 'installation',
    icon: Shield,
    title: 'Installation de Serrures',
    shortDesc: 'Serrures haute sécurité certifiées A2P',
    fullDesc: 'Installation professionnelle de serrures multipoints certifiées A2P. Garantissez une sécurité maximale pour votre domicile avec nos équipements de pointe conformes aux normes d\'assurance.',
    price: '250€',
    duration: '45-60 min',
    features: ['Serrures certifiées A2P', 'Multipoints 3 à 7 points', 'Garantie constructeur', 'Conseil personnalisé gratuit'],
    image: 'https://images.pexels.com/photos/5691604/pexels-photo-5691604.jpeg?auto=compress&cs=tinysrgb&w=1920'
  },
  {
    id: 'depannage',
    icon: Wrench,
    title: 'Dépannage Express',
    shortDesc: 'Réparation sur place immédiate',
    fullDesc: 'Votre serrure est bloquée ou défaillante ? Nos techniciens qualifiés diagnostiquent et réparent votre serrure directement sur place avec des pièces de qualité professionnelle.',
    price: '75€',
    duration: '20-35 min',
    features: ['Diagnostic gratuit', 'Réparation immédiate', 'Pièces de qualité certifiée', 'Garantie 1 an pièces et main-d\'œuvre'],
    image: 'https://images.pexels.com/photos/4246096/pexels-photo-4246096.jpeg?auto=compress&cs=tinysrgb&w=1920'
  },
  {
    id: 'securisation',
    icon: Home,
    title: 'Sécurisation Complète',
    shortDesc: 'Audit complet et renforcement sécurité',
    fullDesc: 'Bénéficiez d\'un audit sécurité gratuit et professionnel. Nos experts renforcent l\'ensemble de vos accès pour une protection optimale : blindage, cylindres haute sécurité, barres anti-effraction.',
    price: 'Sur devis',
    duration: '1-2h',
    features: ['Audit sécurité gratuit', 'Blindage de porte certifié', 'Barres de seuil renforcées', 'Cylindres haute sécurité A2P'],
    image:'https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=1920'
  },
];

export default function ServicesShowcase() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nos Services Professionnels
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des solutions complètes et sur mesure pour tous vos besoins en serrurerie professionnelle
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const IconComponent = service.icon;

            return (
              <div
                key={service.id}
                className="relative h-[550px] overflow-hidden rounded-2xl group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                {/* Image Background */}
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/30 group-hover:from-black/90 group-hover:via-black/60 group-hover:to-black/20 transition-all duration-500"></div>

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                  {/* Icon */}
                  <div className="mb-4">
                    <div className="bg-red-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                      <IconComponent className="h-7 w-7" />
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-red-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-200 text-base mb-3">
                      {service.shortDesc}
                    </p>
                    <p className="text-gray-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-3">
                      {service.fullDesc}
                    </p>
                  </div>

                  {/* Price & Duration */}
                  <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/20">
                    <div>
                      <div className="text-2xl font-bold text-red-400">{service.price}</div>
                      <div className="text-gray-300 text-xs">À partir de</div>
                    </div>
                    <div className="flex items-center text-gray-200 text-sm">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{service.duration}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-1.5 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-xs text-gray-200">
                        <CheckCircle className="h-3 w-3 text-green-400 mr-1.5 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="space-y-2">
                    <Link href="/contact" className="block">
                      <Button className="w-full bg-red-600 hover:bg-red-700 text-white transform hover:scale-105 transition-all duration-300 shadow-lg text-sm py-5">
                        Réserver
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <Link href="/services">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 px-8"
            >
              Voir tous nos services
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}