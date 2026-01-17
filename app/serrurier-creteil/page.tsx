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
import { Clock, MapPin, Shield, CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

// SEO Metadata
export const metadata: Metadata = generateSEOMetadata({
  title: "Serrurier Créteil (94000) - Dépannage Urgent 30 min | D'Clik Serrure",
  description: "Serrurier Créteil disponible 24h/24. Ouverture de porte, changement de serrure à Créteil Préfecture, Échat, Mont-Mesly. Tarifs agréés assurances.",
  canonical: "https://www.dclik-serrure.com/serrurier-creteil",
  keywords: ["serrurier créteil", "dépannage serrurerie 94000", "ouverture de porte créteil", "urgence serrurier créteil"],
});

export default function SerrurierCreteil() {
  const city = "Créteil";
  const zip = "94000";

  // Specific Schema for Créteil
  const localBusinessSchema = generateLocalBusinessSchema({
    name: "D'Clik Serrure Créteil",
    description: "Service de serrurerie d'urgence à Créteil et Val-de-Marne",
    city: "Créteil",
    latitude: 48.7904,
    longitude: 2.4556,
  });

  const faqs = [
    {
      question: "Intervenez-vous dans tous les quartiers de Créteil ?",
      answer: "Oui, nos serruriers couvrent tout Créteil : Préfecture, L'Échat, Mont-Mesly, Village, Port, etc. Nous sommes motorisés pour intervenir rapidement vers le Centre Commercial Créteil Soleil ou l'Hôpital Mondor."
    },
    {
      question: "Quel est le délai d'intervention à Créteil (94000) ?",
      answer: "Nous avons une équipe dédiée au Val-de-Marne. Comptez environ 30 minutes pour une arrivée sur place à Créteil, selon la circulation sur l'A86."
    },
    {
      question: "Êtes-vous agréé par les assurances ?",
      answer: "Oui, nos tarifs sont alignés sur les barèmes de remboursement des assurances habitation classiques (Maaf, GMF, Axa...). Nous vous fournissons un devis et une facture détaillée."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-800 to-red-950 text-white pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <span className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4 animate-pulse">
              🚨 SERRURIER CRÉTEIL (94)
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Serrurier à Créteil
            <br />
            <span className="text-orange-400">Intervention Rapide 24h/24</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-2xl mx-auto">
            Expertise locale à Créteil. Ouverture de porte, blindage et sécurisation.
            Devis gratuit avant travaux.
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
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <Clock className="h-8 w-8 text-orange-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Urgence Créteil</h3>
              <p className="text-gray-600">30 min chrono</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <Shield className="h-8 w-8 text-green-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Tarifs Agréés</h3>
              <p className="text-gray-600">Pas de surprise</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <MapPin className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Artisan Local</h3>
              <p className="text-gray-600">Connaît le secteur</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <CheckCircle className="h-8 w-8 text-red-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Devis Gratuit</h3>
              <p className="text-gray-600">Avant intervention</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid (Condensed) */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Dépannage Serrurerie 94000
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Reusing standard services but with local context mentally */}
            <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-green-600" />
              <span className="font-bold">Ouverture de porte claquée</span>
            </div>
            <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-green-600" />
              <span className="font-bold">Changement cylindre A2P</span>
            </div>
            <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-green-600" />
              <span className="font-bold">Blindage de porte sur mesure</span>
            </div>
            <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-green-600" />
              <span className="font-bold">Fermeture provisoire suite effraction</span>
            </div>
          </div>
        </div>
      </section>

      <PricingTable />

      <BeforeAfter
        beforeImage="https://images.unsplash.com/photo-1622372738946-a2e485841e9d?w=800&q=80"
        afterImage="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
        title="Remplacement de serrure à Créteil Université"
        description="Sécurisation d'un appartement étudiant après perte de clés. Installation d'une serrure 3 points carénée."
      />

      {/* Map & Zones */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Zone d'intervention : Créteil et environs
          </h2>
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/2">
              <p className="mb-4 text-gray-700">
                Notre point d'ancrage dans le 94 nous permet d'intervenir très rapidement sur :
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Créteil (94000) - Tous quartiers</li>
                <li>Maisons-Alfort (94700)</li>
                <li>Saint-Maur-des-Fossés (94100)</li>
                <li>Bonneuil-sur-Marne (94380)</li>
                <li>Alfortville (94140)</li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 h-64 bg-gray-200 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42065.97236859341!2d2.42878235!3d48.79036735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e672c21946dc35%3A0x40b82c3688b3940!2sCr%C3%A9teil!5e0!3m2!1sfr!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title="Questions fréquentes - Serrurier Créteil" />

      <section id="devis-form" className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Urgence à Créteil ?</h2>
            <p className="mb-6">
              Remplissez le formulaire, nous vous rappelons immédiatement.
              Le devis est gratuit et sans engagement.
            </p>
            <div className="flex gap-4 mb-4">
              <Star className="text-yellow-400 fill-yellow-400" />
              <Star className="text-yellow-400 fill-yellow-400" />
              <Star className="text-yellow-400 fill-yellow-400" />
              <Star className="text-yellow-400 fill-yellow-400" />
              <Star className="text-yellow-400 fill-yellow-400" />
            </div>
            <p className="font-bold">"Intervention rapide rue du Général Leclerc, merci !"</p>
            <p className="text-sm text-gray-500">- Karim B.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <CityForm />
          </div>
        </div>
      </section>

      <Footer />
      <FloatingActions />
    </div>
  );
}
