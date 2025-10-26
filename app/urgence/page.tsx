"use client";

import {
  Phone,
  Clock,
  MapPin,
  AlertTriangle,
  CheckCircle,
  Car,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Urgence() {
  const urgencyTypes = [
    {
      icon: AlertTriangle,
      title: "Porte Claquée",
      description: "Vous êtes enfermé dehors ? Intervention immédiate",
      time: "15-25 min",
      price: "89€",
    },
    {
      icon: Shield,
      title: "Tentative d'Effraction",
      description:
        "Serrure forcée ou endommagée suite à une tentative de cambriolage",
      time: "20-30 min",
      price: "120€",
    },
    {
      icon: Car,
      title: "Clé Cassée",
      description: "Clé cassée dans la serrure, extraction et remplacement",
      time: "25-35 min",
      price: "95€",
    },
  ];

  const interventionSteps = [
    {
      step: "1",
      title: "Appel d'Urgence",
      description:
        "Contactez-nous au +33185440131, nous répondons immédiatement",
    },
    {
      step: "2",
      title: "Diagnostic Téléphonique",
      description:
        "Nous évaluons votre situation et vous donnons un premier tarif",
    },
    {
      step: "3",
      title: "Intervention Rapide",
      description: "Notre technicien arrive sur place en moins de 30 minutes",
    },
    {
      step: "4",
      title: "Résolution",
      description:
        "Problème résolu rapidement avec garantie sur l'intervention",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white pt-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full animate-pulse">
                <Phone className="h-16 w-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Urgence Serrurerie
              <span className="block text-orange-300">24h/24 - 7j/7</span>
            </h1>
            <p className="text-xl text-red-100 max-w-3xl mx-auto mb-8">
              Enfermé dehors ? Serrure cassée ? Tentative d'effraction ? Nous
              intervenons en moins de 30 minutes partout à Paris !
            </p>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 max-w-md mx-auto">
              <p className="text-3xl font-bold mb-2">01 23 45 67 89</p>
              <p className="text-red-100">Ligne d'urgence disponible 24h/24</p>
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 mt-4 w-full animate-bounce hover:animate-none"
              >
                <Phone className="h-5 w-5 mr-2" />
                Appeler Maintenant
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Types d'Urgence */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Situations d'Urgence
            </h2>
            <p className="text-xl text-gray-600">
              Nous intervenons pour tous types d'urgences serrurerie
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {urgencyTypes.map((urgency, index) => {
              const IconComponent = urgency.icon;
              return (
                <Card
                  key={index}
                  className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-red-100"
                >
                  <CardHeader>
                    <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-red-600" />
                    </div>
                    <CardTitle className="text-2xl text-gray-900">
                      {urgency.title}
                    </CardTitle>
                    <CardDescription className="text-lg">
                      {urgency.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center mb-4">
                      <div className="text-center">
                        <p className="text-sm text-gray-600">Temps d'arrivée</p>
                        <p className="text-lg font-bold text-blue-700">
                          {urgency.time}
                        </p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-gray-600">À partir de</p>
                        <p className="text-lg font-bold text-orange-500">
                          {urgency.price}
                        </p>
                      </div>
                    </div>
                    <Button className="w-full bg-red-600 hover:bg-red-700">
                      <Phone className="h-4 w-4 mr-2" />
                      Appeler pour cette urgence
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process d'Intervention */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comment ça marche ?
            </h2>
            <p className="text-xl text-gray-600">
              Un processus simple et rapide pour résoudre votre urgence
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {interventionSteps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="bg-blue-700 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
                {index < interventionSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-1/2 w-full h-0.5 bg-blue-200 transform translate-x-6"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Garanties */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nos Garanties d'Urgence
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-8 rounded-lg shadow-lg">
              <Clock className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Intervention Rapide
              </h3>
              <p className="text-gray-600">
                Arrivée garantie en moins de 30 minutes ou intervention gratuite
              </p>
            </div>
            <div className="text-center bg-white p-8 rounded-lg shadow-lg">
              <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Tarif Transparent</h3>
              <p className="text-gray-600">
                Prix annoncé au téléphone, pas de surprise sur la facture
              </p>
            </div>
            <div className="text-center bg-white p-8 rounded-lg shadow-lg">
              <Shield className="h-12 w-12 text-blue-700 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Travail Garanti</h3>
              <p className="text-gray-600">
                Garantie 1 an sur toutes nos interventions d'urgence
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Une Urgence ? N'attendez plus !
          </h2>
          <p className="text-xl mb-8 text-red-100">
            Chaque minute compte en cas d'urgence. Contactez-nous immédiatement.
          </p>
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 max-w-lg mx-auto">
            <p className="text-5xl font-bold mb-4">+33185440131</p>
            <p className="text-red-100 mb-6">
              Disponible 24h/24 - 365 jours par an
            </p>
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-xl px-12 py-4 animate-pulse hover:animate-none"
            >
              <Phone className="h-6 w-6 mr-2" />
              APPELER MAINTENANT
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
