'use client';

import { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, MapPin, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    id: 1,
    name: 'Marie Dubois',
    location: 'Paris 15ème',
    date: 'Il y a 2 jours',
    rating: 5,
    text: 'Service exceptionnel ! J\'étais enfermée dehors à 23h avec mon bébé. L\'équipe est arrivée en 20 minutes et a ouvert ma porte sans aucun dégât. Prix très correct et technicien très professionnel.',
    service: 'Ouverture de porte d\'urgence',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?w=100&h=100&fit=crop&crop=face'
  },
  {
    id: 2,
    name: 'Jean-Pierre Martin',
    location: 'Paris 11ème',
    date: 'Il y a 1 semaine',
    rating: 5,
    text: 'Après une tentative d\'effraction, j\'ai fait appel à eux pour sécuriser mon appartement. Installation d\'une serrure 7 points impeccable. Je recommande vivement !',
    service: 'Installation serrure haute sécurité',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?w=100&h=100&fit=crop&crop=face'
  },
  {
    id: 3,
    name: 'Sophie Leroy',
    location: 'Paris 8ème',
    date: 'Il y a 3 jours',
    rating: 5,
    text: 'Clé cassée dans la serrure un dimanche matin. Intervention rapide, extraction parfaite et remplacement immédiat. Tarif annoncé respecté. Parfait !',
    service: 'Extraction clé cassée',
    avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?w=100&h=100&fit=crop&crop=face'
  },
  {
    id: 4,
    name: 'Ahmed Benali',
    location: 'Paris 19ème',
    date: 'Il y a 5 jours',
    rating: 5,
    text: 'Excellent service ! Ma serrure était bloquée depuis 2 jours. Le serrurier a diagnostiqué le problème rapidement et l\'a réparé sur place. Très satisfait du travail.',
    service: 'Réparation serrure',
    avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?w=100&h=100&fit=crop&crop=face'
  },
  {
    id: 5,
    name: 'Isabelle Moreau',
    location: 'Paris 6ème',
    date: 'Il y a 1 semaine',
    rating: 5,
    text: 'Suite à un déménagement, j\'ai voulu changer toutes mes serrures. Conseil personnalisé, installation soignée et prix très compétitif. Je recommande !',
    service: 'Changement serrures complètes',
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?w=100&h=100&fit=crop&crop=face'
  },
  {
    id: 6,
    name: 'Thomas Rousseau',
    location: 'Paris 12ème',
    date: 'Il y a 4 jours',
    rating: 5,
    text: 'Intervention d\'urgence à 2h du matin après une soirée. Professionnel, rapide et discret. Aucun dégât sur ma porte. Service irréprochable !',
    service: 'Ouverture de porte nocturne',
    avatar: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?w=100&h=100&fit=crop&crop=face'
  }
];

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ce que Disent Nos Clients
          </h2>
          <p className="text-xl text-gray-600">
            Plus de 2500 interventions réussies et des clients satisfaits
          </p>
          <div className="flex items-center justify-center mt-4">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="ml-2 text-lg font-semibold text-gray-700">4.9/5</span>
            <span className="ml-2 text-gray-500">(2,547 avis)</span>
          </div>
        </div>

        <div className="relative">
          {/* Main Testimonial */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <Card className="max-w-4xl mx-auto shadow-2xl border-2 border-blue-100 hover:border-blue-200 transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-8">
                        {/* Avatar */}
                        <div className="flex-shrink-0">
                          <img
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="w-20 h-20 rounded-full object-cover border-4 border-blue-200"
                          />
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h3 className="text-xl font-bold text-gray-900">{testimonial.name}</h3>
                              <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                                <div className="flex items-center">
                                  <MapPin className="h-4 w-4 mr-1" />
                                  {testimonial.location}
                                </div>
                                <div className="flex items-center">
                                  <Calendar className="h-4 w-4 mr-1" />
                                  {testimonial.date}
                                </div>
                              </div>
                            </div>
                            <Quote className="h-8 w-8 text-blue-300 flex-shrink-0" />
                          </div>
                          
                          {/* Rating */}
                          <div className="flex items-center space-x-1 mb-4">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                            ))}
                          </div>
                          
                          {/* Service */}
                          <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
                            {testimonial.service}
                          </div>
                          
                          {/* Testimonial Text */}
                          <p className="text-gray-700 text-lg leading-relaxed italic">
                            "{testimonial.text}"
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg border-2 border-blue-200 hover:border-blue-300"
            onClick={prevTestimonial}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg border-2 border-blue-200 hover:border-blue-300"
            onClick={nextTestimonial}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-blue-600 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                onClick={() => goToTestimonial(index)}
              />
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-green-50 p-6 rounded-xl">
            <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
            <p className="text-gray-700">Clients satisfaits</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-xl">
            <div className="text-3xl font-bold text-blue-600 mb-2">&lt; 30min</div>
            <p className="text-gray-700">Temps d'intervention moyen</p>
          </div>
          <div className="bg-orange-50 p-6 rounded-xl">
            <div className="text-3xl font-bold text-orange-600 mb-2">24h/24</div>
            <p className="text-gray-700">Disponibilité garantie</p>
          </div>
        </div>
      </div>
    </section>
  );
}