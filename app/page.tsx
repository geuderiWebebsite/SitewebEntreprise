"use client";

import { useState, useEffect } from "react";
import {
  Phone,
  Clock,
  MapPin,
  Shield,
  Key,
  Star,
  Menu,
  X,
  ArrowRight,
  Users,
  Award,
  Zap,
  Heart,
  CircleCheck as CheckCircle,
  AlertCircle,
  TrendingUp,
  Gift,
  BadgePercent,
  Sparkles,
  PhoneIncoming as HomeIcon,
  ChevronRight,
  Lock,
  DoorOpen,
  Wrench,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AnimatedCounter from "./components/AnimatedCounter";
import TestimonialsCarousel from "./components/TestimonialsCarousel";
import ServicesShowcase from "./components/ServicesShowcase";
import InteractiveMap from "./components/InteractiveMap";
import FloatingActions from "./components/FloatingActions";
import HeroSection from "./components/HeroSection";
import Link from "next/link";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeBanner, setActiveBanner] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);

  useEffect(() => {
    const timer1 = setInterval(() => {
      setCount1((prev) => (prev < 2500 ? prev + 50 : 2500));
    }, 20);
    const timer2 = setInterval(() => {
      setCount2((prev) => (prev < 15 ? prev + 1 : 15));
    }, 100);
    const timer3 = setInterval(() => {
      setCount3((prev) => (prev < 98 ? prev + 2 : 98));
    }, 30);
    const timer4 = setInterval(() => {
      setCount4((prev) => (prev < 24 ? prev + 1 : 24));
    }, 50);

    return () => {
      clearInterval(timer1);
      clearInterval(timer2);
      clearInterval(timer3);
      clearInterval(timer4);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % 6);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBanner((prev) => (prev + 1) % 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulaire soumis:", formData);
    // Animation de succès
    const button = e.target as HTMLFormElement;
    button.classList.add("animate-pulse");
    setTimeout(() => {
      button.classList.remove("animate-pulse");
    }, 2000);
  };

  const stats = [
    { number: 2500, suffix: "+", label: "Interventions réalisées" },
    { number: 15, suffix: " ans", label: "D'expérience" },
    { number: 98, suffix: "%", label: "Clients satisfaits" },
    { number: 24, suffix: "h/24", label: "Disponibilité" },
  ];
  const promotions = [
    {
      icon: Gift,
      title: "Diagnostic gratuit",
      description: "Évaluation sans engagement",
      color: "from-purple-500 to-pink-600",
    },
  ];
  const zones = [
    {
      name: "Paris 1er-8ème",
      time: "15-20 min",
      image:
        "https://images.pexels.com/photos/1461974/pexels-photo-1461974.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Paris 9ème-16ème",
      time: "20-25 min",
      image:
        "https://images.pexels.com/photos/2363/france-landmark-lights-night.jpg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Paris 17ème-20ème",
      time: "20-30 min",
      image:
        "https://images.pexels.com/photos/1461974/pexels-photo-1461974.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Banlieue ",
      time: "30-40 min",
      image:
        "https://images.pexels.com/photos/2363/france-landmark-lights-night.jpg?auto=compress&cs=tinysrgb&w=600",
    },
  ];
  const urgencyFeatures = [
    {
      icon: Zap,
      title: "Intervention Express",
      description: "Arrivée garantie en moins de 30 minutes",
      color: "text-yellow-500",
    },
    {
      icon: Shield,
      title: "Sans Casse",
      description: "Ouverture sans dégâts dans 95% des cas",
      color: "text-green-500",
    },
    {
      icon: Heart,
      title: "Tarif Transparent",
      description: "Prix fixe annoncé au téléphone",
      color: "text-red-500",
    },
  ];

  return (
    <div className="min-h-screen bg-cream-100">
      <Header />
      <HeroSection />
      {/* Bannière Promotionnelle Rotative */}
      <section className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 py-6 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative h-20 flex items-center justify-center">
            {promotions.map((promo, index) => {
              const IconComponent = promo.icon;
              return (
                <div
                  key={index}
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ${
                    index === activeBanner
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                >
                  <div className="flex items-center space-x-4 text-white">
                    <IconComponent className="h-10 w-10" />
                    <div>
                      <h3 className="text-2xl font-bold">{promo.title}</h3>
                      <p className="text-sm">{promo.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {urgencyFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              const backgroundImages = [
                "WhatsApp Image 2025-10-27 à 13.26.34_b9b1b618.jpg",
                "image_ea75904f5fa785ae25930f557f9f0d10.jpeg",
                "WhatsApp Image 2025-10-27 à 13.28.51_4c136f17.jpg",
              ];
              return (
                <div
                  key={index}
                  className="relative h-80 overflow-hidden rounded-2xl group cursor-pointer"
                >
                  <img
                    src={backgroundImages[index]}
                    alt={feature.title}
                    loading="lazy"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-red-900/95 via-red-800/80 to-black/40 group-hover:from-red-900/85 group-hover:via-red-800/70 group-hover:to-black/30 transition-all duration-500"></div>
                  <div className="absolute inset-0 p-8 flex flex-col justify-end text-white text-center">
                    <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-gray-200">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section
        className="relative py-20 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1920)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-red-900/80 to-black/85"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Nos Chiffres Parlent D&apos;Eux-Mêmes
            </h2>
            <p className="text-xl text-gray-200">
              La confiance de milliers de Parisiens
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 border border-white/20">
                  <div className="text-6xl font-bold text-orange-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                    <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                  </div>
                  <p className="text-white text-lg font-semibold">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Zone d'Intervention avec Photos */}
      <section id="zones" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Zones d&apos;Intervention
            </h2>
            <p className="text-xl text-gray-600">Tout Paris et banlieue</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {zones.map((zone, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-2xl shadow-xl h-64 cursor-pointer"
              >
                <img
                  src={zone.image}
                  alt={zone.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent group-hover:from-red-900/90 transition duration-500"></div>
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                  <h3 className="text-2xl font-bold mb-2">{zone.name}</h3>
                  <div className="flex items-center text-orange-300">
                    <Clock className="h-5 w-5 mr-2" />
                    <span className="font-semibold">{zone.time}</span>
                  </div>
                  <div className="mt-3 inline-flex items-center bg-orange-500 px-4 py-2 rounded-full text-sm font-bold opacity-0 group-hover:opacity-100 transition">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Disponible maintenant
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Showcase */}
      <ServicesShowcase />

      {/* Témoignages Clients */}
      <TestimonialsCarousel />

      {/* Zone d'intervention interactive */}
      <InteractiveMap />

      {/* Contact Form amélioré */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Demande d&apos;Intervention Rapide
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Décrivez votre situation et nous vous rappelons dans les 5
                minutes
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="group">
                  <Input
                    placeholder="Votre nom complet"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="transition-all duration-300 focus:ring-4 focus:ring-red-500/20 group-hover:shadow-lg"
                    required
                  />
                </div>
                <div className="group">
                  <Input
                    type="tel"
                    placeholder="Votre numéro de téléphone"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="transition-all duration-300 focus:ring-4 focus:ring-red-500/20 group-hover:shadow-lg"
                    required
                  />
                </div>
                <div className="group">
                  <Textarea
                    placeholder="Décrivez votre problème (porte claquée, serrure cassée, etc.)"
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="transition-all duration-300 focus:ring-4 focus:ring-red-500/20 group-hover:shadow-lg"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full transform hover:scale-105 transition-all duration-300 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 shadow-xl hover:shadow-2xl"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Demander un Rappel Immédiat
                </Button>
              </form>
            </div>

            <div className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-2xl border-2 border-red-100">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                    <Phone className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Urgence Immédiate ?
                  </h3>
                  <p className="text-gray-600">
                    Appelez directement notre ligne d&apos;urgence
                  </p>
                </div>

                <div className="text-center">
                  <p className="text-4xl font-bold text-red-700 mb-4">
                    +33185440131
                  </p>
                  <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      24h/24
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      Tout Paris
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-400 rounded-full animate-ping"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-red-400 rounded-full animate-bounce delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingActions />
    </div>
  );
}
