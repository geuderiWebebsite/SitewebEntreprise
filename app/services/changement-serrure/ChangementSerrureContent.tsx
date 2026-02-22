"use client";

import { useState } from "react";
import { Phone, Clock, MapPin, Shield, CheckCircle, Star, Settings, Key, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ChangementSerrureContent() {
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
                            🚨 REMPLACEMENT IMMÉDIAT - TOUTES MARQUES
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Changement de Serrure
                        <br />
                        <span className="text-orange-400">Installation A2P Certifiée</span>
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-gray-100">
                        Remplacement de cylindre, serrure multipoints et haute sécurité. Intervention rapide sur Paris et Île-de-France.
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

            {/* Services Detail */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
                    <div className="border border-gray-100 rounded-xl p-8 hover:shadow-lg transition-shadow">
                        <Key className="w-10 h-10 text-red-600 mb-6" />
                        <h3 className="text-2xl font-bold mb-4">Cylindre Standard</h3>
                        <p className="text-gray-600 mb-4">Pour un changement de locataire ou une clé perdue. Solution économique et rapide.</p>
                        <ul className="space-y-2 text-sm">
                            <li className="flex gap-2"><Check className="w-4 h-4 text-green-500" /> Clés protégées</li>
                            <li className="flex gap-2"><Check className="w-4 h-4 text-green-500" /> Carte de propriété</li>
                        </ul>
                    </div>
                    <div className="border border-red-100 bg-red-50 rounded-xl p-8 shadow-md relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">TOP VENTE</div>
                        <Shield className="w-10 h-10 text-red-600 mb-6" />
                        <h3 className="text-2xl font-bold mb-4">Serrure A2P **</h3>
                        <p className="text-gray-600 mb-4">Haute sécurité résistante au perçage et au crochetage. Recommandé par les assurances.</p>
                        <ul className="space-y-2 text-sm">
                            <li className="flex gap-2"><Check className="w-4 h-4 text-green-500" /> Résistance 10 min</li>
                            <li className="flex gap-2"><Check className="w-4 h-4 text-green-500" /> 3 à 5 points d'ancrage</li>
                        </ul>
                    </div>
                    <div className="border border-gray-100 rounded-xl p-8 hover:shadow-lg transition-shadow">
                        <Settings className="w-10 h-10 text-red-600 mb-6" />
                        <h3 className="text-2xl font-bold mb-4">Serrure Connectée</h3>
                        <p className="text-gray-600 mb-4">Gérez l'accès à votre domicile depuis votre smartphone. Idéal Airbnb.</p>
                        <ul className="space-y-2 text-sm">
                            <li className="flex gap-2"><Check className="w-4 h-4 text-green-500" /> Ouverture à distance</li>
                            <li className="flex gap-2"><Check className="w-4 h-4 text-green-500" /> Journal d'activité</li>
                        </ul>
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
                        Besoin d'un changement ? Appelez maintenant
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
