"use client";

import { useState } from "react";
import { Phone, Clock, MapPin, Shield, CheckCircle, Star, ShieldAlert, Hammer, FileText, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

export default function ApresEffractionContent() {
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
            {/* Aggressive Hero for Cloaking Context */}
            <section className="relative bg-gradient-to-br from-red-700 to-red-900 text-white py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="mb-6">
                        <span className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4 animate-pulse">
                            🚨 URGENCE CAMBRIOLAGE - INTERVENTION 30 MIN
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Sécurisation Après Effraction
                        <br />
                        <span className="text-orange-400">Mise en sécurité immédiate</span>
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-gray-100">
                        Victime d'un cambriolage ? Nous intervenons en urgence pour la fermeture provisoire et les réparations. Agréé assurances.
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

            {/* Steps */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">La marche à suivre</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-sm text-center relative">
                            <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center text-xl font-bold absolute -top-6 left-1/2 -translate-x-1/2">1</div>
                            <Hammer className="w-10 h-10 text-gray-400 mx-auto mb-4 mt-4" />
                            <h3 className="text-xl font-bold mb-2">Sécurisation Immédiate</h3>
                            <p className="text-gray-600">Nous venons poser un verrou, réparer le bâti ou installer un panneau de bois (fermeture provisoire) pour sécuriser les lieux.</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm text-center relative">
                            <div className="w-12 h-12 bg-gray-800 text-white rounded-full flex items-center justify-center text-xl font-bold absolute -top-6 left-1/2 -translate-x-1/2">2</div>
                            <FileText className="w-10 h-10 text-gray-400 mx-auto mb-4 mt-4" />
                            <h3 className="text-xl font-bold mb-2">Dépôt de Plainte</h3>
                            <p className="text-gray-600">Rendez-vous au commissariat sous 24/48h. Apportez des photos des dégâts et notre devis/facture de mise en sécurité.</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm text-center relative">
                            <div className="w-12 h-12 bg-gray-800 text-white rounded-full flex items-center justify-center text-xl font-bold absolute -top-6 left-1/2 -translate-x-1/2">3</div>
                            <ShieldAlert className="w-10 h-10 text-gray-400 mx-auto mb-4 mt-4" />
                            <h3 className="text-xl font-bold mb-2">Réparation Définitive</h3>
                            <p className="text-gray-600">Une fois l'expert passé (ou avec l'accord de l'assurance), nous remplaçons la porte ou la serrure à l'identique.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 bg-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                        Dépannage Après Cambriolage
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg hover:bg-orange-50 transition-colors">
                            <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="font-bold text-lg mb-2">
                                    Fermeture provisoire
                                </h3>
                                <p className="text-gray-600">
                                    Sécurisation immédiate pour passer la nuit en sécurité
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg hover:bg-orange-50 transition-colors">
                            <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="font-bold text-lg mb-2">
                                    Réparation de porte fracturée
                                </h3>
                                <p className="text-gray-600">
                                    Remise en état du bâti et de la menuiserie
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg hover:bg-orange-50 transition-colors">
                            <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="font-bold text-lg mb-2">
                                    Remplacement de serrure d'urgence
                                </h3>
                                <p className="text-gray-600">
                                    Installation de nouveaux cylindres haute sécurité
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg hover:bg-orange-50 transition-colors">
                            <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="font-bold text-lg mb-2">
                                    Dossier assurance complet
                                </h3>
                                <p className="text-gray-600">
                                    Factures et devis conformes pour remboursement
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="devis-form" className="py-16 px-4 bg-gray-50">
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
                                    placeholder="Votre adresse"
                                    value={formData.address}
                                    onChange={(e) =>
                                        setFormData({ ...formData, address: e.target.value })
                                    }
                                    required
                                    className="bg-white"
                                />
                                <Textarea
                                    placeholder="Décrivez votre problème..."
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
                        Un serrurier se déplace immédiatement
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
                    © 2025 D&apos;Clik Serrure - Tous droits réservés
                </p>
                <p className="mt-2">RCS Paris - Garantie décennale - Agrément assurances</p>
            </footer>
        </div>
    );
}
