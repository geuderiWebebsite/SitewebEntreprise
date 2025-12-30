"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Shield,
  Award,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingActions from "../components/FloatingActions";
import { CONTACT_INFO } from "@/app/constants";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    urgency: "",
    address: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          urgency: "",
          address: "",
          message: "",
        });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        alert("Une erreur est survenue. Veuillez essayer de nous appeler.");
      }
    } catch (error) {
      alert("Erreur de connexion. Veuillez vérifier votre internet ou nous appeler.");
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Téléphone",
      info: CONTACT_INFO.phoneDisplay,
      SecondNumber: CONTACT_INFO.mobileDisplay,
      description: "Disponible 24h/24 pour les urgences",
    },
    {
      icon: Mail,
      title: "Email",
      info: CONTACT_INFO.email,
      description: "Réponse sous 2h en journée",
    },
    {
      icon: MapPin,
      title: "Adresse",
      info: "Paris et Île-de-France",
      description: "Intervention dans toute la région",
    },
    {
      icon: Clock,
      title: "Horaires",
      info: "Lun-Ven: 8h-18h | Sam: 9h-17h",
      description: "Urgences 24h/24 et 7j/7",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* === Bannière Hero avec image réelle === */}
      <section
        className="relative bg-cover bg-center bg-no-repeat text-white pt-16"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop')",
        }}
      >
        {/* Overlay avec dégradé sophistiqué */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-950/95 via-black/85 to-red-900/90"></div>

        {/* Motif de texture subtile */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'url(\'data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')',
          }}
        ></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-12">
            <div className="inline-block mb-6">
              <div className="flex items-center space-x-2 bg-red-600/30 backdrop-blur-sm px-6 py-2 rounded-full border border-red-400/30">
                <Shield className="h-5 w-5 text-red-300" />
                <span className="text-red-100 font-medium">
                  Service Premium 24/7
                </span>
              </div>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white">Contactez-</span>
              <span className="text-red-400">Nous</span>
            </h1>

            <p className="text-xl lg:text-2xl text-red-50 max-w-3xl mx-auto mb-8 leading-relaxed">
              Une question ? Un devis ? Une urgence ?<br />
              <span className="text-red-300 font-semibold">
                Nous sommes là pour vous aider 24h/24, 7j/7
              </span>
            </p>

            {/* Stats en bannière */}
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-12">
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20 hover:bg-white/15 transition-all">
                <Award className="h-10 w-10 text-red-300 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">15 ans</div>
                <div className="text-red-200 text-sm">D'expérience</div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20 hover:bg-white/15 transition-all">
                <Users className="h-10 w-10 text-red-300 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">5000+</div>
                <div className="text-red-200 text-sm">Clients Satisfaits</div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20 hover:bg-white/15 transition-all">
                <Clock className="h-10 w-10 text-red-300 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">20 min</div>
                <div className="text-red-200 text-sm">Temps d'intervention</div>
              </div>
            </div>
          </div>
        </div>

        {/* Vague décorative en bas */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 120"
            className="w-full h-auto"
          >
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* === Informations de contact === */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-16">
            {contactInfo.map((info, index, SecondNumber) => {
              const IconComponent = info.icon;
              return (
                <Card
                  key={index}
                  className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <CardHeader>
                    <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-red-700" />
                    </div>
                    <CardTitle className="text-xl text-red-700 flex flex-col gap-1">
                      {info.title === "Téléphone" ? (
                        <>
                          <a href={CONTACT_INFO.phoneLink} className="hover:underline">{info.info}</a>
                          <a href={CONTACT_INFO.mobileLink} className="hover:underline text-lg">{info.SecondNumber}</a>
                        </>
                      ) : (
                        <>
                          {info.title}
                          {info.SecondNumber}
                        </>
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {info.title !== "Téléphone" && (
                      <p className="text-lg font-semibold text-gray-900 mb-2">
                        {info.info}
                      </p>
                    )}
                    <p className="text-gray-600">{info.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* === Formulaire de contact === */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Demandez votre{" "}
                <span className="text-red-700">Devis Gratuit</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Remplissez ce formulaire et nous vous recontactons rapidement
                avec une estimation personnalisée.
              </p>

              {isSubmitted && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6 flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  Votre demande a été envoyée avec succès ! Nous vous
                  recontactons rapidement.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Nom complet *
                    </label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                      className="transition-all duration-200 focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Téléphone *
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      required
                      className="transition-all duration-200 focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="transition-all duration-200 focus:ring-2 focus:ring-red-500"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Type de service
                    </label>
                    <Select
                      onValueChange={(value) =>
                        setFormData({ ...formData, service: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez un service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ouverture">
                          Ouverture de porte
                        </SelectItem>
                        <SelectItem value="installation">
                          Installation serrure
                        </SelectItem>
                        <SelectItem value="depannage">Dépannage</SelectItem>
                        <SelectItem value="securisation">
                          Sécurisation
                        </SelectItem>
                        <SelectItem value="blindage">
                          Blindage de porte
                        </SelectItem>
                        <SelectItem value="autre">Autre</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label
                      htmlFor="urgency"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Urgence
                    </label>
                    <Select
                      onValueChange={(value) =>
                        setFormData({ ...formData, urgency: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Niveau d'urgence" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="immediate">
                          Immédiate (dans l'heure)
                        </SelectItem>
                        <SelectItem value="today">Aujourd'hui</SelectItem>
                        <SelectItem value="week">Cette semaine</SelectItem>
                        <SelectItem value="month">Ce mois-ci</SelectItem>
                        <SelectItem value="planning">À planifier</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Adresse d'intervention
                  </label>
                  <Input
                    id="address"
                    value={formData.address}
                    onChange={(e) =>
                      setFormData({ ...formData, address: e.target.value })
                    }
                    placeholder="Adresse complète à Paris ou région parisienne"
                    className="transition-all duration-200 focus:ring-2 focus:ring-red-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Décrivez votre situation *
                  </label>
                  <Textarea
                    id="message"
                    rows={6}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Décrivez votre problème en détail : type de porte, serrure, circonstances..."
                    required
                    className="transition-all duration-200 focus:ring-2 focus:ring-red-500"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full transform hover:scale-105 bg-red-700 hover:bg-red-800 transition-all duration-200"
                  disabled={isSubmitted}
                >
                  <Send className="h-5 w-5 mr-2" />
                  {isSubmitted ? "Demande envoyée !" : "Envoyer ma Demande"}
                </Button>
              </form>
            </div>

            {/* === Carte et infos === */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Notre <span className="text-red-700">Zone d'Intervention</span>
              </h2>

              <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
                <h3 className="text-xl font-semibold mb-4 text-red-700">
                  Paris et Région Parisienne
                </h3>
                <div className="space-y-3 text-gray-700">
                  <p>
                    <strong>Paris intra-muros :</strong> Tous les
                    arrondissements
                  </p>
                  <p>
                    <strong>Hauts-de-Seine (92) :</strong> Boulogne-Billancourt,
                    Neuilly-sur-Seine, Levallois-Perret...
                  </p>
                  <p>
                    <strong>Seine-Saint-Denis (93) :</strong> Saint-Denis,
                    Montreuil, Aubervilliers...
                  </p>
                  <p>
                    <strong>Val-de-Marne (94) :</strong> Créteil, Vincennes,
                    Saint-Mandé...
                  </p>
                </div>
              </div>

              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-red-900 mb-4">
                  Temps d'Intervention
                </h3>
                <div className="space-y-2 text-red-800">
                  <p>
                    🚗 Paris intra-muros : <strong>15-25 minutes</strong>
                  </p>
                  <p>
                    🚗 Première couronne : <strong>25-35 minutes</strong>
                  </p>
                  <p>
                    🚗 Deuxième couronne : <strong>35-45 minutes</strong>
                  </p>
                </div>
                <div className="mt-6 p-4 bg-orange-100 rounded-lg">
                  <p className="text-orange-800 font-semibold">
                    ⚡ Urgence ? Appelez directement le{" "}
                    <a href={CONTACT_INFO.phoneLink} className="text-red-700 font-bold hover:underline">
                      {CONTACT_INFO.phoneDisplay}
                    </a>
                    <br />
                    <a href={CONTACT_INFO.mobileLink} className="hover:underline">
                      {CONTACT_INFO.mobileDisplay}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingActions />
    </div>
  );
}
