"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CircleCheck as CheckCircle,
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulaire soumis:", formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Téléphone",
      info: "06 50 09 55 83",
      description: "Disponible 24h/24 pour les urgences",
    },
    {
      icon: Mail,
      title: "Email",
      info: "guediriali30@gmail.com",
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

      {/* === Bannière avec image et overlay dégradé === */}
      <section
        className="relative bg-cover bg-center bg-no-repeat text-white pt-20"
        style={{
          backgroundImage: "url('/images/contact-bg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/90 via-black/70 to-red-700/80"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-red-400">Contactez-</span>Nous
          </h1>
          <p className="text-xl text-red-100 max-w-3xl mx-auto">
            Une question ? Un devis ? Une urgence ?{" "}
            <span className="text-red-400 font-semibold">
              Nous sommes là pour vous aider 24h/24.
            </span>
          </p>
        </div>
      </section>

      {/* === Informations de contact === */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-16">
            {contactInfo.map((info, index) => {
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
                    <CardTitle className="text-xl text-red-700">
                      {info.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg font-semibold text-gray-900 mb-2">
                      {info.info}
                    </p>
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
                    <span className="text-red-700 font-bold">
                      06 50 09 55 83
                    </span>
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
