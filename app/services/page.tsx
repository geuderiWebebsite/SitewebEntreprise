"use client";

import {
  Key,
  Shield,
  PhoneIncoming,
  Lock,
  DoorOpen,
  Wrench,
  Camera,
  Car,
  GlassWater,
  Clock,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingActions from "../components/FloatingActions";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      icon: DoorOpen,
      title: "Serrurerie & Dépannage",
      description:
        "Besoin d'un dépannage en urgence pour une serrure bloquée ou d'un remplacement de cylindre ? Notre équipe de serruriers qualifiés intervient 24h/24 pour tous vos besoins, avec une intervention soignée et rapide, sans dommage pour votre porte.",
      price: "À partir de 89€",
      features: [
        "Ouverture de porte claquée, verrouillée ou bloquée",
        "Réparation et remplacement de serrures toutes marques",
        "Installation de serrures multipoints",
        "Mise en sécurité après effraction",
      ],
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80",
    },
    {
      icon: Shield,
      title: "Dépannage de Porte Blindée",
      description:
        "Votre porte blindée est un gage de sécurité, mais elle peut nécessiter un dépannage en urgence. Nous intervenons pour débloquer, réparer et sécuriser toutes les portes blindées sans endommager la structure.",
      price: "À partir de 120€",
      features: [
        "Déblocage de serrures bloquées ou endommagées",
        "Remplacement de serrures haute sécurité",
        "Mise en sécurité renforcée après effraction",
        "Ajustement et maintenance de portes blindées",
      ],
      image:
        "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1920&q=80",
    },
    {
      icon: Wrench,
      title: "Rideaux Métalliques",
      description:
        "Protégez vos commerces et entrepôts contre les intrusions grâce à nos rideaux métalliques. Installation, entretien et dépannage assurés par des techniciens qualifiés pour une sécurité optimale.",
      price: "Devis personnalisé",
      features: [
        "Installation sur mesure adaptée à vos besoins",
        "Réparation rapide en cas de blocage ou panne moteur",
        "Maintenance préventive pour éviter les pannes",
        "Motorisation de rideaux métalliques",
      ],
      image:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80",
    },
    {
      icon: Camera,
      title: "Vidéosurveillance",
      description:
        "Assurez la sécurité de vos locaux grâce à des systèmes de vidéosurveillance modernes. Nous proposons l'installation et la maintenance de caméras connectées adaptées à chaque environnement.",
      price: "Devis gratuit",
      features: [
        "Installation de caméras intérieures et extérieures",
        "Systèmes connectés avec visualisation à distance",
        "Maintenance et support technique",
        "Conseils en positionnement stratégique",
      ],
      image:
        "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1920&q=80",
    },
    {
      icon: Car,
      title: "Ouverture de Véhicules",
      description:
        "Clés perdues, oubliées ou serrure bloquée ? Nous intervenons rapidement pour ouvrir tous types de véhicules sans causer de dommages.",
      price: "À partir de 90€",
      features: [
        "Ouverture rapide et sans dégât",
        "Intervention sur voitures, motos et utilitaires",
        "Compatible avec toutes marques et modèles",
        "Disponible 24h/24 et 7j/7",
      ],
      image:
        "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1920&q=80",
    },
    {
      icon: GlassWater,
      title: "Vitrerie",
      description:
        "Installation, réparation et remplacement de vitres pour particuliers et professionnels. Travail soigné, rapide et conforme aux normes de sécurité.",
      price: "Devis sur mesure",
      features: [
        "Remplacement de vitres cassées",
        "Installation de vitrines commerciales",
        "Pose de parois vitrées et fenêtres isolantes",
        "Intervention rapide après sinistre",
      ],
      image:
        "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?w=1920&q=80",
    },
  ];

  const certifications = [
    { name: "A2P", description: "Serrures certifiées haute sécurité" },
    { name: "APSAD", description: "Norme de sécurité incendie et intrusion" },
    {
      name: "CNPP",
      description: "Centre national de prévention et protection",
    },
    {
      name: "Garantie D'clik",
      description: "Intervention assurée et garantie",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center pt-20"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white">
              Serrurerie & Dépannage à Paris
            </h1>
            <p className="text-xl text-gray-200">
              Votre sécurité est notre priorité. Intervention rapide 24h/24 pour
              toute ouverture, installation ou réparation de serrure, porte
              blindée, rideau métallique et plus encore.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`flex flex-col ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  } gap-8 items-center`}
                >
                  {/* Image */}
                  <div className="w-full lg:w-1/2">
                    <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
                      <img
                        src={service.image}
                        alt={service.title}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="w-full lg:w-1/2">
                    <div className="flex items-center justify-center w-20 h-20 bg-red-600 rounded-2xl mb-6">
                      <IconComponent className="h-10 w-10 text-white" />
                    </div>

                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h2>

                    <p className="text-xl text-gray-600 mb-6">
                      {service.description}
                    </p>

                    <div className="bg-gray-50 rounded-2xl p-6 mb-6">
                      <div className="text-3xl font-bold text-red-600 mb-4">
                        {service.price}
                      </div>

                      <ul className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-start text-gray-700"
                          >
                            <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <Link href="/contact">
                        <Button
                          size="lg"
                          className="bg-red-600 hover:bg-red-700 text-white"
                        >
                          Demander un Devis
                        </Button>
                      </Link>
                      <Link href="/urgence">
                        <Button
                          size="lg"
                          variant="outline"
                          className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
                        >
                          Urgence
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section
        className="relative py-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1565008576549-57569a49371d?w=1920&q=80)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-gray-900/90 to-black/85"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Certifications & Garanties
            </h2>
            <p className="text-xl text-gray-200">
              Nous travaillons avec des produits certifiés et respectons les
              normes les plus strictes en matière de sécurité.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {cert.name}
                </h3>
                <p className="text-gray-200">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="relative py-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1553481187-be93c21490a9?w=1920&q=80)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/90 via-red-800/85 to-red-900/90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Besoin d'une Intervention Rapide ?
          </h2>
          <p className="text-xl mb-8 text-gray-100 max-w-2xl mx-auto">
            Nos experts sont disponibles 24h/24 pour tous vos dépannages
            d'urgence, partout à Paris et en Île-de-France.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/devis">
              <Button
                size="lg"
                className="bg-white hover:bg-gray-100 text-red-900 px-8 py-6 text-lg"
              >
                <Clock className="h-5 w-5 mr-2" />
                Devis Instantané
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-900 px-8 py-6 text-lg"
              >
                Nous Contacter
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingActions />
    </div>
  );
}
