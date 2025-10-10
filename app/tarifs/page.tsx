'use client';

import { Check, X, Star, Clock, Shield, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Tarifs() {
  const pricingPlans = [
    {
      name: 'Dépannage Standard',
      price: '89',
      description: 'Pour les interventions en journée',
      features: [
        'Ouverture de porte simple',
        'Intervention 8h-18h',
        'Devis gratuit',
        'Garantie 6 mois',
        'Paiement après intervention'
      ],
      notIncluded: [
        'Intervention nocturne',
        'Week-end et jours fériés',
        'Serrure haute sécurité'
      ],
      popular: false
    },
    {
      name: 'Dépannage Urgence',
      price: '129',
      description: 'Disponible 24h/24 et 7j/7',
      features: [
        'Intervention 24h/24',
        'Week-end et jours fériés',
        'Arrivée en moins de 30 min',
        'Tous types de serrures',
        'Garantie 1 an',
        'Devis gratuit'
      ],
      notIncluded: [
        'Serrures blindées spéciales'
      ],
      popular: true
    },
    {
      name: 'Installation Premium',
      price: '250',
      description: 'Installation de serrures haute sécurité',
      features: [
        'Serrure multipoints A2P',
        'Installation professionnelle',
        'Conseil personnalisé',
        'Garantie constructeur',
        'Suivi après-vente',
        'Certificat d\'installation'
      ],
      notIncluded: [],
      popular: false
    }
  ];

  const additionalServices = [
    { service: 'Reproduction de clé standard', price: '15€' },
    { service: 'Reproduction de clé sécurisée', price: '35€' },
    { service: 'Changement de cylindre', price: '75€' },
    { service: 'Installation barillet', price: '95€' },
    { service: 'Blindage de porte', price: '450€' },
    { service: 'Diagnostic sécurité', price: 'Gratuit' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white pt-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Tarifs Transparents
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Découvrez nos tarifs clairs et sans surprise. 
              Devis gratuit pour toutes nos interventions.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nos Forfaits d'Intervention
            </h2>
            <p className="text-xl text-gray-600">
              Choisissez le forfait adapté à votre situation
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                plan.popular ? 'border-2 border-orange-500 scale-105' : ''
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Le plus populaire
                    </span>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold text-blue-700 my-4">
                    {plan.price}€
                    <span className="text-lg text-gray-600 font-normal">/intervention</span>
                  </div>
                  <CardDescription className="text-lg">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                    {plan.notIncluded.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <X className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-500">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact">
                    <Button className={`w-full transform hover:scale-105 transition-all duration-200 ${
                      plan.popular ? 'bg-orange-500 hover:bg-orange-600' : ''
                    }`}>
                      Choisir ce forfait
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Additionnels */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Services Additionnels
            </h2>
            <p className="text-xl text-gray-600">
              Tarifs pour nos autres prestations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {additionalServices.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex justify-between items-center">
                  <span className="text-lg text-gray-900">{item.service}</span>
                  <span className="text-xl font-bold text-blue-700">{item.price}</span>
                </div>
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
              Nos Garanties Tarifaires
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-8 rounded-lg shadow-lg">
              <Star className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Devis Gratuit</h3>
              <p className="text-gray-600">Estimation gratuite et sans engagement pour tous vos projets</p>
            </div>
            <div className="text-center bg-white p-8 rounded-lg shadow-lg">
              <Clock className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Prix Fixe</h3>
              <p className="text-gray-600">Le prix annoncé au téléphone est respecté, aucun supplément caché</p>
            </div>
            <div className="text-center bg-white p-8 rounded-lg shadow-lg">
              <Shield className="h-12 w-12 text-blue-700 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Paiement Sécurisé</h3>
              <p className="text-gray-600">Paiement après intervention, CB, chèque ou espèces acceptés</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Besoin d'un Devis Personnalisé ?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Contactez-nous pour obtenir un devis gratuit adapté à vos besoins
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 transform hover:scale-105 transition-all duration-200">
                Demander un Devis
              </Button>
            </Link>
            <Link href="/urgence">
              <Button size="lg" variant="outline" className="text-blue-900 border-white hover:bg-white transform hover:scale-105 transition-all duration-200">
                <Phone className="h-5 w-5 mr-2" />
                Appel d'Urgence
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}