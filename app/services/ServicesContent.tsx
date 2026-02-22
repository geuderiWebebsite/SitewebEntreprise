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
    Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ServicesContent() {
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

    const services = [
        {
            icon: DoorOpen,
            title: "Serrurerie & Dépannage",
            description:
                "Besoin d'un dépannage en urgence pour une serrure bloquée ou d'un remplacement de cylindre ? Notre équipe de serruriers qualifiés intervient 24h/24.",
            price: "À partir de 89€",
            features: [
                "Ouverture de porte claquée",
                "Remplacement de serrures",
                "Installation multipoints",
                "Mise en sécurité",
            ],
        },
        {
            icon: Shield,
            title: "Porte Blindée",
            description:
                "Nous intervenons pour débloquer, réparer et sécuriser toutes les portes blindées sans endommager la structure.",
            price: "À partir de 120€",
            features: [
                "Déblocage certifié",
                "Installation haute sécurité",
                "Mise en sécurité renforcée",
                "Maintenance préventive",
            ],
        },
        {
            icon: Wrench,
            title: "Rideaux Métalliques",
            description:
                "Protégez vos commerces avec nos rideaux métalliques. Installation, entretien et dépannage urgents.",
            price: "Devis personnalisé",
            features: [
                "Installation sur mesure",
                "Réparation moteur",
                "Maintenance",
                "Motorisation",
            ],
        },
        {
            icon: CheckCircle,
            title: "Urgence 24h/24",
            description:
                "Une urgence en pleine nuit ou le week-end ? Nos techniciens sont mobilisés pour vous dépanner en moins de 30 minutes.",
            price: "Intervention Rapide",
            features: [
                "7j/7 et 24h/24",
                "Arrivée en 30 min",
                "Techniciens qualifiés",
                "Agréé assurances",
            ],
        },
    ];

    return (
        <div className="min-h-screen bg-white">
            <section className="relative bg-gradient-to-br from-red-700 to-red-900 text-white py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="mb-6">
                        <span className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4 animate-pulse">
                            🚨 SERVICES DE SERRURERIE - PARIS & IDF
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Nos Services de Serrurerie
                        <br />
                        <span className="text-orange-400">Dépannage Urgent 24h/24</span>
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-gray-100">
                        Ouverture de porte, changement de serrure, porte blindée. Profitez d'une expertise reconnue au meilleur prix.
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

            {/* Services Grid */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-red-600">
                                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                                        <Icon className="h-6 w-6 text-red-600" />
                                    </div>
                                    <h3 className="font-bold text-xl mb-2">{service.title}</h3>
                                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.description}</p>
                                    <div className="font-bold text-red-600 mb-4">{service.price}</div>
                                    <ul className="space-y-2">
                                        {service.features.map((feature, fIndex) => (
                                            <li key={fIndex} className="flex items-center text-xs text-gray-500">
                                                <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
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
                                Besoin d'un tarif précis ? Nos experts vous répondent immédiatement avec une estimation transparente et sans engagement.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <CheckCircle className="h-6 w-6 text-green-600" />
                                    <span className="text-gray-700">Tarifs annoncés et respectés</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <CheckCircle className="h-6 w-6 text-green-600" />
                                    <span className="text-gray-700">Conseils d'experts sécurité</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <CheckCircle className="h-6 w-6 text-green-600" />
                                    <span className="text-gray-700">Intervention dans l'heure</span>
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
                                    placeholder="Votre commune"
                                    value={formData.address}
                                    onChange={(e) =>
                                        setFormData({ ...formData, address: e.target.value })
                                    }
                                    required
                                    className="bg-white"
                                />
                                <Textarea
                                    placeholder="Comment pouvons-nous vous aider ?"
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
                                    Demander mon devis
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 px-4 bg-red-700 text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Une question ? Un dépannage ?
                    </h2>
                    <p className="text-xl mb-8">
                        Parlez directement à un technicien qualifié
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
                        Disponible 24h/24 - 7j/7 - Partout en Île-de-France
                    </p>
                </div>
            </section>

            <footer className="py-8 px-4 bg-gray-900 text-gray-400 text-center text-sm">
                <p>
                    © 2025 D&apos;Clik Serrure - Tous droits réservés
                </p>
                <p className="mt-2">RCS Paris - Assurance RC Professionnelle - Garantie décennale</p>
            </footer>
        </div>
    );
}
