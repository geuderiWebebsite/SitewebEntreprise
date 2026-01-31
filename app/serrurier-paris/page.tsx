import { Metadata } from "next";
import Script from "next/script";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingActions from "../components/FloatingActions";
import CityForm from "@/components/city/CityForm";
import CallButton from "@/components/city/CallButton";
import FAQSection from "@/components/rich/FAQSection";
import PricingTable from "@/components/rich/PricingTable";
import BeforeAfter from "@/components/rich/BeforeAfter";
import { generateLocalBusinessSchema, generateSEOMetadata } from "@/app/seo/seoConfig";
import { Clock, MapPin, Shield, CheckCircle, Star, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import NearbyCities from "@/components/city/NearbyCities";

// SEO Metadata for Server Side Rendering
export const metadata: Metadata = generateSEOMetadata({
  title: "Serrurier Paris - Dépannage Urgent 30 min | D'Clik Serrure",
  description: "Serrurier Paris disponible 24h/24 et 7j/7 pour ouverture de porte, changement de serrure et urgence serrurerie paris. Intervention rapide à Paris 15, Paris 17, Paris 11.",
  canonical: "https://www.dclik-serrure.com/serrurier-paris",
  keywords: ["serrurier paris", "serrurerie paris", "serrurier paris 15", "serrurier paris 17", "serrurier paris 11", "serrurier paris 18", "serrurier paris 12", "serrurier paris 16", "serrurier paris 20", "serrurier paris 14", "urgence serrurier paris", "serrurier paris pas cher", "sos serrurier paris"],
});

export default function SerrurierParis() {
  const city = "Paris";

  // Specific Schema for this city
  const localBusinessSchema = generateLocalBusinessSchema({
    name: "D'Clik Serrure",
    description: "Service de serrurerie d'urgence à Paris",
    city: "Paris",
    latitude: 48.8566,
    longitude: 2.3522,
  });

  const faqs = [
    {
      question: "Quel est le prix d'une ouverture de porte à Paris ?",
      answer: "Pour une porte claquée (non verrouillée), le tarif est de 89€ TTC. Si la porte est fermée à clé, l'ouverture est à 119€ TTC. Le devis est gratuit et sans engagement avant intervention."
    },
    {
      question: "En combien de temps intervenez-vous à Paris ?",
      answer: "Grâce à notre réseau de serruriers basés dans les différents arrondissements, nous garantissons une intervention en 30 minutes maximum dans tout Paris intra-muros."
    },
    {
      question: "Vos serruriers sont-ils agréés assurances ?",
      answer: "Oui, nous travaillons avec les tarifs agréés par les principales compagnies d'assurance (AXA, Macif, Allianz, etc.), ce qui facilite votre remboursement en cas de sinistre."
    },
    {
      question: "Intervenez-vous la nuit et le week-end ?",
      answer: "Absolument. Notre service d'urgence est opérationnel 24h/24 et 7j/7, y compris les dimanches et jours fériés, pour tout dépannage de serrurerie à Paris."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Inject JSON-LD Schema */}
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-700 to-red-900 text-white pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <span className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4 animate-pulse">
              🚨 DISPONIBLE MAINTENANT À PARIS
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Serrurier à Paris
            <br />
            <span className="text-orange-400">Dépannage en 30 min 24h/24</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-2xl mx-auto">
            Ouverture de porte, serrure bloquée, porte blindée – Intervention
            garantie sans casse et prix transparents.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <CallButton
              phone="0185490707"
              label="01 85 49 07 07"
              className="bg-orange-500 hover:bg-orange-600 text-white text-xl px-8 py-6 h-auto shadow-2xl animate-bounce-subtle"
            />
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-red-700 border-2 border-white hover:bg-gray-100 text-lg px-8 py-6 h-auto"
              asChild
            >
              <a href="#devis-form">Devis Gratuit</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
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

      {/* Services Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Nos Services à Paris
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Ouverture de porte", desc: "Porte claquée ou fermée à clé, sans dégât.", price: "dès 89€" },
              { title: "Remplacement de serrure", desc: "Toutes marques (Vachette, Picard, Bricard...)", price: "Sur devis" },
              { title: "Porte Blindée", desc: "Installation ou dépannage de porte haute sécurité.", price: "Sur devis" },
              { title: "Mise en sécurité", desc: "Fermeture provisoire suite à effraction.", price: "Immédiat" },
              { title: "Serrure Multipoints", desc: "Installation A2P 3, 5 ou 7 points.", price: "Sur devis" },
              { title: "Ouverture Véhicule", desc: "Sans casse, toutes marques.", price: "dès 90€" },
            ].map((service, idx) => (
              <div key={idx} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg hover:bg-orange-50 transition-colors border border-transparent hover:border-orange-100">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">{service.desc}</p>
                  <span className="text-red-600 font-bold bg-white px-2 py-0.5 rounded text-sm">{service.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <PricingTable />

      {/* Before / After Section */}
      <BeforeAfter
        beforeImage="https://images.unsplash.com/photo-1622372738946-a2e485841e9d?w=800&q=80"
        afterImage="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
        title="Remplacement de serrure après tentative d'effraction"
        description="Installation d'une serrure 3 points A2P** avec protecteur de cylindre. Travail soigné sans endommager la porte existante."
      />

      {/* Map & Zones */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Zones d'intervention à Paris
          </h2>
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div>
                <h3 className="font-bold text-xl mb-4 text-red-700">
                  Arrondissements
                </h3>
                <ul className="space-y-2 text-gray-700 columns-2 text-sm">
                  <li>✓ Paris 1er</li>
                  <li>✓ Paris 2ème</li>
                  <li>✓ Paris 3ème</li>
                  <li>✓ Paris 4ème</li>
                  <li>✓ Paris 5ème</li>
                  <li>✓ Paris 6ème</li>
                  <li>✓ Paris 7ème</li>
                  <li>✓ Paris 8ème</li>
                  <li>✓ Paris 9ème</li>
                  <li>✓ Paris 10ème</li>
                  <li>✓ Paris 11ème</li>
                  <li>✓ Paris 12ème</li>
                  <li>✓ Paris 13ème</li>
                  <li>✓ Paris 14ème</li>
                  <li>✓ Paris 15ème</li>
                  <li>✓ Paris 16ème</li>
                  <li>✓ Paris 17ème</li>
                  <li>✓ Paris 18ème</li>
                  <li>✓ Paris 19ème</li>
                  <li>✓ Paris 20ème</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-4 text-red-700">
                  Délais d'arrivée
                </h3>
                <div className="bg-orange-50 p-4 rounded-lg mb-4 text-center">
                  <p className="text-4xl font-bold text-orange-600 mb-1">
                    25 min
                  </p>
                  <p className="text-gray-600 text-sm">Temps moyen constaté à Paris</p>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  Notre centre d&apos;appel optimise les trajets pour vous envoyer le technicien le plus proche grâce à la géolocalisation.
                </p>
              </div>
            </div>
            <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.94722687218!2d2.277019999999999!3d48.8589507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b005%3A0x40b82c3688c9460!2sParis!5e0!3m2!1sfr!2sfr!4v1234567890"
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

      {/* Reviews */}
      <section className="py-16 px-4 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Star className="h-32 w-32 text-yellow-500" />
            </div>
            <div className="flex items-start space-x-4 mb-6 relative z-10">
              <div className="bg-yellow-100 p-3 rounded-full">
                <Star className="h-8 w-8 text-yellow-600 flex-shrink-0" />
              </div>
              <div>
                <div className="flex space-x-1 mb-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-500 fill-yellow-500"
                    />
                  ))}
                </div>
                <p className="text-lg italic text-gray-700 mb-4">
                  &quot;J'ai appelé pour une porte claquée un dimanche soir. Le serrurier est arrivé en 20 min comme promis. Le devis a été fait avant de commencer (89€ respectés) et il a ouvert la porte en 5 minutes sans percer le cylindre. Très honnête !&quot;
                </p>
                <p className="font-bold text-gray-900">
                  - Julien M., Paris 11ème
                </p>
                <p className="text-xs text-gray-400 mt-1">Intervention : Ouverture de porte claquée</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} title="Questions fréquentes sur nos serruriers à Paris" />

      {/* Contact Form Section */}
      <section id="devis-form" className="py-16 px-4 bg-white scroll-mt-20">
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
                  <span className="text-gray-700">Devis 100% gratuit</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="text-gray-700">Prix fixe annoncé avant travaux</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="text-gray-700">Réponse immédiate</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-xl shadow-inner-lg">
              <CityForm />
            </div>
          </div>
        </div>
      </section>

      {/* Emergency footer CTA */}
      <section className="py-12 px-4 bg-red-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Urgence à Paris ?
          </h2>
          <p className="text-xl mb-8">
            Un serrurier est peut-être déjà dans votre quartier.
          </p>
          <CallButton
            phone="0185490707"
            label="01 85 49 07 07 - APPEL DIRECT"
            variant="secondary"
            className="bg-white text-red-700 hover:bg-gray-100 text-xl px-12 py-8 h-auto shadow-xl"
          />
          <p className="text-sm mt-6 text-red-100">
            Disponible 24h/24 - 7j/7 - Même jours fériés
          </p>
        </div>
      </section>

      {/* Internal Linking */}
      <NearbyCities currentCity="Paris" />

      <Footer />
      <FloatingActions />
    </div>

  );
}
