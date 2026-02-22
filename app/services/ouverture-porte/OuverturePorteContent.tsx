"use client";

import { useState } from "react";
import { Phone, Clock, MapPin, Shield, CheckCircle, Star, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function OuverturePorteContent() {
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
                            🚨 PORTE CLAQUÉE ? INTERVENTION EN 30 MIN
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Ouverture de Porte
                        <br />
                        <span className="text-orange-400">Ouverture Sans Casse 89€</span>
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-gray-100">
                        Serruriers experts en ouverture fine (radio) pour préserver votre serrure. Prix fixe annoncé d'avance.
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

            {/* Promises */}
            <section className="py-12 bg-white border-b border-gray-100">
                <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="p-6">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                            <Shield className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Garantie Sans Casse</h3>
                        <p className="text-gray-600">Technique radio privilégiée pour préserver votre serrure.</p>
                    </div>
                    <div className="p-6">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                            <Clock className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Arrivée en 30 min</h3>
                        <p className="text-gray-600">Géolocalisation des techniciens pour une urgence réelle.</p>
                    </div>
                    <div className="p-6">
                        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 text-red-600">
                            <Lock className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Prix Fixe 89€</h3>
                        <p className="text-gray-600">Tarif annoncé au téléphone. Pas de surprise.</p>
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                        Détails de l'intervention
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-sm">
                            <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="font-bold text-lg mb-2">
                                    Porte Claquée
                                </h3>
                                <p className="text-gray-600">
                                    Ouverture en quelques secondes par technique "radio"
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-sm">
                            <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="font-bold text-lg mb-2">
                                    Porte Fermée à Clé
                                </h3>
                                <p className="text-gray-600">
                                    Extraction ou perçage ciblé du cylindre si nécessaire
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-sm">
                            <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="font-bold text-lg mb-2">
                                    Clé Cassée
                                </h3>
                                <p className="text-gray-600">
                                    Retrait de l'embout cassé sans démonter la serrure
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-sm">
                            <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="font-bold text-lg mb-2">
                                    Serrure Bloquée
                                </h3>
                                <p className="text-gray-600">
                                    Dégrippage ou déblocage du mécanisme
                                </p>
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
                        Porte bloquée ? Appelez maintenant
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
