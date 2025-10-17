'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, Phone, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const heroSlides = [
  {
    image: 'https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=1920',
    title: 'Serrurier Expert à Paris',
    subtitle: 'Intervention rapide 24h/24 et 7j/7',
    cta: 'Appeler Maintenant',
    ctaLink: 'tel:0123456789'
  },
  {
    image: 'https://images.pexels.com/photos/5691604/pexels-photo-5691604.jpeg?auto=compress&cs=tinysrgb&w=1920',
    title: 'Installation Serrures A2P',
    subtitle: 'Sécurisez votre domicile avec nos experts certifiés',
    cta: 'Devis Gratuit',
    ctaLink: '/devis'
  },
  {
    image: 'https://images.pexels.com/photos/4246096/pexels-photo-4246096.jpeg?auto=compress&cs=tinysrgb&w=1920',
    title: 'Dépannage Sans Casse',
    subtitle: 'Ouverture de porte en moins de 30 minutes',
    cta: 'Urgence 24/7',
    ctaLink: '/urgence'
  }
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-10"></div>

          <img
            src={slide.image}
            alt={slide.title}
            loading={index === 0 ? 'eager' : 'lazy'}
            className="absolute inset-0 w-full h-full object-cover transform scale-105"
          />

          <div className="absolute inset-0 z-20 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-2xl">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl text-white/95 mb-8 leading-relaxed drop-shadow-md">
                  {slide.subtitle}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href={slide.ctaLink}>
                    <Button
                      size="lg"
                      className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-6 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg"
                    >
                      {slide.cta}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>

                  <Link href="/contact">
                    <Button
                      size="lg"
                      variant="outline"
                      className="bg-white/90 backdrop-blur-sm hover:bg-white text-gray-900 border-2 border-white text-lg px-8 py-6 rounded-full transform hover:scale-105 transition-all duration-300"
                    >
                      Nous Contacter
                    </Button>
                  </Link>
                </div>

                <div className="mt-12 flex items-center gap-8 text-white">
                  <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
                    <Phone className="h-5 w-5 text-red-500" />
                    <span className="text-lg font-medium">01 23 45 67 89</span>
                  </div>
                  <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
                    <Clock className="h-5 w-5 text-red-500" />
                    <span className="text-lg">24h/24 - 7j/7</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex gap-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white w-8'
                : 'bg-white/50 hover:bg-white/80 w-3'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-30 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}