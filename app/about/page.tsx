"use client";

import {
  Shield,
  Clock,
  Award,
  Users,
  CircleCheck as CheckCircle,
  Target,
  Heart,
  Wrench,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingActions from "../components/FloatingActions";

export default function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: "Sécurité",
      description:
        "Votre sécurité est notre priorité absolue. Nous utilisons uniquement du matériel certifié.",
    },
    {
      icon: Clock,
      title: "Rapidité",
      description:
        "Intervention en moins de 30 minutes partout à Paris et en Île-de-France.",
    },
    {
      icon: Award,
      title: "Qualité",
      description:
        "Des artisans qualifiés et certifiés pour un travail impeccable.",
    },
    {
      icon: Heart,
      title: "Transparence",
      description:
        "Devis gratuit et transparent avant toute intervention. Pas de surprise.",
    },
  ];

  const stats = [
    { value: "15+", label: "Ans d'expérience" },
    { value: "5000+", label: "Clients satisfaits" },
    { value: "24/7", label: "Disponibilité" },
    { value: "98%", label: "Taux de satisfaction" },
  ];

  const certifications = [
    "Certification Assurance Qualité",
    "Assurance Responsabilité Civile",
    "Formation Continue des Techniciens",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="pt-24">
        <section
          className="relative py-20 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(C:UsersAshraDownloadsproject-bolt-sb1-brepgff2projectpubliclogo.png)",
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
              À Propos de D'Clik Serrure
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
              Votre expert en serrurerie à Paris depuis plus de 15 ans
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Notre Histoire
                </h2>
                <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                  <p>
                    Depuis 2022,{" "}
                    <span className="font-bold text-red-600">
                      D'Clik Serrure
                    </span>{" "}
                    s'est imposée comme la référence en matière de serrurerie à
                    Paris et en Île-de-France. Notre entreprise a été fondée
                    avec une mission simple : offrir un service de serrurerie
                    rapide, fiable et transparent.
                  </p>
                  <p>
                    Au fil des années, nous avons aidé plus de 5000 clients à
                    résoudre leurs problèmes de serrurerie, qu'il s'agisse d'une
                    urgence d'ouverture de porte, d'une installation de serrure
                    haute sécurité, ou d'une simple réparation.
                  </p>
                  <p>
                    Notre équipe de{" "}
                    <span className="font-bold text-red-600">
                      serruriers certifiés
                    </span>{" "}
                    est disponible 24h/24 et 7j/7 pour répondre à tous vos
                    besoins. Nous nous engageons à intervenir rapidement,
                    généralement en moins de 30 minutes, tout en maintenant les
                    plus hauts standards de qualité.
                  </p>
                </div>
              </div>
              <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="logo.png"
                  alt="Équipe D'Clik Serrure"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
              Nos Valeurs
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                const backgroundImages = [
                  "https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=800",
                  "https://images.pexels.com/photos/5691604/pexels-photo-5691604.jpeg?auto=compress&cs=tinysrgb&w=800",
                  "https://images.pexels.com/photos/4246096/pexels-photo-4246096.jpeg?auto=compress&cs=tinysrgb&w=800",
                  "https://images.pexels.com/photos/5691641/pexels-photo-5691641.jpeg?auto=compress&cs=tinysrgb&w=800",
                ];

                return (
                  <div
                    key={index}
                    className="relative h-80 overflow-hidden rounded-xl group cursor-pointer shadow-lg"
                  >
                    <img
                      src={backgroundImages[index]}
                      alt={value.title}
                      loading="lazy"
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-red-900/95 via-red-800/85 to-black/50 group-hover:from-red-900/85 group-hover:via-red-800/75 group-hover:to-black/40 transition-all duration-500"></div>
                    <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                      <div className="bg-orange-500 w-14 h-14 rounded-full flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="h-7 w-7" />
                      </div>
                      <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                      <p className="text-gray-200">{value.description}</p>
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
          <div className="absolute inset-0 bg-white/90"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
              Nos Chiffres Clés
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-white/90 backdrop-blur-md rounded-2xl p-8 hover:bg-white transition-all duration-300 transform hover:scale-105 border border-gray-200 shadow-lg">
                    <div className="text-6xl font-bold text-red-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                      {stat.value}
                    </div>
                    <div className="text-xl text-gray-900 font-semibold">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl order-2 md:order-1">
                <img
                  src="https://images.pexels.com/photos/4246096/pexels-photo-4246096.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Serrurier professionnel"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Pourquoi Nous Choisir ?
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg text-gray-900">
                        Intervention Rapide
                      </h3>
                      <p className="text-gray-600">
                        Disponibles 24h/24, nous intervenons en moyenne sous 30
                        minutes.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg text-gray-900">
                        Tarifs Transparents
                      </h3>
                      <p className="text-gray-600">
                        Devis gratuit et détaillé avant toute intervention.
                        Aucune mauvaise surprise.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg text-gray-900">
                        Professionnels Certifiés
                      </h3>
                      <p className="text-gray-600">
                        Tous nos serruriers sont formés, certifiés et assurés.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg text-gray-900">
                        Matériel de Qualité
                      </h3>
                      <p className="text-gray-600">
                        Nous utilisons uniquement des serrures et équipements
                        certifiés A2P.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="relative py-20 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/8092403/pexels-photo-8092403.jpeg?auto=compress&cs=tinysrgb&w=1920)",
          }}
        >
          <div className="absolute inset-0 bg-white/92"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
              Certifications & Agréments
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-white/95 backdrop-blur-md border border-gray-200 rounded-xl p-6 flex items-center space-x-4 hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:scale-105 group"
                >
                  <Award className="h-8 w-8 text-red-600 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <p className="font-medium text-gray-900">{cert}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}
