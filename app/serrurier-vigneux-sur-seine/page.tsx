"use client";

import { useState } from "react";
import { Phone, Clock, MapPin, Shield, CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function SerrurierVigneuxSurSeine() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "conversion", {
        send_to: "AW-CONVERSION_ID/CONVERSION_LABEL",
        value: 1.0,
        currency: "EUR",
      });
    }
    console.log("Formulaire soumis:", formData);
  };

  const handlePhoneClick = () => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "conversion", {
        send_to: "AW-CONVERSION_ID/PHONE_CONVERSION_LABEL",
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
        <section className="relative bg-gradient-to-br from-red-700 to-red-900 text-white py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4 animate-pulse">
                🚨 DISPONIBLE À VIGNEUX-SUR-SEINE
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Serrurier à Vigneux-sur-Seine
              <br />
              <span className="text-orange-400">Dépannage en 30 min 24h/24</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Ouverture de porte, serrure bloquée, porte blindée – Intervention
              garantie sans casse.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="tel:0185490707" onClick={handlePhoneClick}>
                <Button
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white text-xl px-8 py-6 transform hover:scale-105 transition-all duration-200 shadow-2xl"
                >
                  <Phone className="h-6 w-6 mr-3" />
                  01 85 49 07 07
                </Button>
              </a>
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-red-700 border-2 border-white hover:bg-gray-100 text-lg px-8 py-6"
                onClick={() =>
                  document
                    .getElementById("devis-form")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Devis Gratuit
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Intervention 24h/24</h3>
                <p className="text-gray-600">7 jours sur 7, même jours fériés</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Agréé assurances</h3>
                <p className="text-gray-600">Devis pris en charge</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Déplacement rapide</h3>
                <p className="text-gray-600">En moins de 30 minutes</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Techniciens certifiés</h3>
                <p className="text-gray-600">Qualifiés A2P</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Nos Services à Vigneux-sur-Seine
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg hover:bg-orange-50 transition-colors">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">
                    Ouverture de porte à partir de 89€
                  </h3>
                  <p className="text-gray-600">
                    Porte claquée, clé perdue ou cassée dans la serrure
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg hover:bg-orange-50 transition-colors">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">
                    Réparation ou remplacement de serrure
                  </h3>
                  <p className="text-gray-600">
                    Toutes marques, tous modèles de serrures
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg hover:bg-orange-50 transition-colors">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">
                    Dépannage de porte blindée
                  </h3>
                  <p className="text-gray-600">
                    Intervention spécialisée sans dégâts
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg hover:bg-orange-50 transition-colors">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">
                    Sécurisation après effraction
                  </h3>
                  <p className="text-gray-600">
                    Installation immédiate de sécurité provisoire
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg hover:bg-orange-50 transition-colors">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">
                    Installation de serrures multipoints
                  </h3>
                  <p className="text-gray-600">Systèmes A2P certifiés</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg hover:bg-orange-50 transition-colors">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">
                    Rideaux métalliques et vitrines
                  </h3>
                  <p className="text-gray-600">
                    Pour commerces et locaux professionnels
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Zones couvertes à Vigneux-sur-Seine
            </h2>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-bold text-xl mb-4 text-red-700">
                    Tous les quartiers de Vigneux-sur-Seine
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ Vigneux-sur-Seine Centre-Ville / Gare</li>
                    <li>✓ Le Lac / Lac Montalbot</li>
                    <li>✓ Les Fleurs / Clos de la Régale / Bergeries</li>
                    <li>✓ Parc du Château / Port Premier</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-4 text-red-700">
                    Temps moyen d&apos;intervention
                  </h3>
                  <div className="bg-orange-50 p-4 rounded-lg mb-4">
                    <p className="text-3xl font-bold text-orange-600 mb-2">
                      35-45 minutes
                    </p>
                    <p className="text-gray-600">en moyenne pour Vigneux-sur-Seine</p>
                  </div>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Autres zones :</span> Paris 20,
                    Bagnolet, Vincennes, Rosny-sous-Bois
                  </p>
                </div>
              </div>
              <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21065.420412036237!2d2.406847718838363!3d48.702087237155546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67545018e6cff%3A0x4ec2412ea11bc9a7!2sVigneux-sur-Seine!5e0!3m2!1sfr!2sfr!4v1763135235288!5m2!1sfr!2sfr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gradient-to-br from-orange-50 to-red-50">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-start space-x-4 mb-6">
                <Star className="h-8 w-8 text-yellow-500 flex-shrink-0" />
                <div>
                  <p className="text-lg italic text-gray-700 mb-4">
                    &quot;Serrurier appelé en urgence, arrivé en 20 minutes à Vigneux-sur-Seine.
                    Ouverture sans casse, prix correct, technicien
                    très sympa. Je recommande !&quot;
                  </p>
                  <p className="font-bold text-gray-900">
                    - Karim B., Vigneux-sur-Seine
                  </p>
                  <div className="flex space-x-1 mt-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-500 fill-yellow-500"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="devis-form" className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Demandez votre devis gratuit
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Remplissez le formulaire et nous vous rappelons dans les 5
                  minutes pour vous donner un tarif exact.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    <span className="text-gray-700">Devis transparent et détaillé</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    <span className="text-gray-700">Sans engagement</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    <span className="text-gray-700">Réponse immédiate</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-xl">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    placeholder="Votre nom"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="bg-white"
                  />
                  <Input
                    type="tel"
                    placeholder="Votre téléphone"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    required
                    className="bg-white"
                  />
                  <Input
                    placeholder="Votre adresse à Vigneux-sur-Seine"
                    value={formData.address}
                    onChange={(e) =>
                      setFormData({ ...formData, address: e.target.value })
                    }
                    required
                    className="bg-white"
                  />
                  <Textarea
                    placeholder="Décrivez votre problème (ex: porte claquée, serrure cassée...)"
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    className="bg-white"
                  />
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-red-600 hover:bg-red-700 text-white text-lg py-6"
                  >
                    Obtenir mon devis gratuit
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 px-4 bg-red-700 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Urgence ? Appelez maintenant
            </h2>
            <p className="text-xl mb-8">
              Un serrurier se déplace immédiatement à Vigneux-sur-Seine
            </p>
            <a href="tel:0185490707" onClick={handlePhoneClick}>
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white text-2xl px-12 py-8 transform hover:scale-105 transition-all duration-200 shadow-2xl"
              >
                <Phone className="h-8 w-8 mr-4" />
                01 85 49 07 07
              </Button>
            </a>
            <p className="text-sm mt-6 text-gray-200">
              Disponible 24h/24 - 7j/7 - Même jours fériés
            </p>
          </div>
        </section>

        <footer className="py-8 px-4 bg-gray-900 text-gray-400 text-center text-sm">
          <p>
            © 2025 D&apos;Clik Serrure - Serrurier Vigneux-sur-Seine - Tous droits
            réservés
          </p>
          <p className="mt-2">RCS Paris - Garantie décennale - Agrément assurances</p>
        </footer>
      </div>
  );
}
