"use client";

import { useState } from "react";
import { Phone, Clock, MapPin, Shield, CheckCircle, Star, ShieldAlert, DoorClosed, Lock, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function PorteBlindeeContent() {
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
                            🚨 PORTES BLINDÉES - INSTALLATION SOUS 24H
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Portes Blindées Certifiées
                        <br />
                        <span className="text-orange-400">Sécurité Maximale A2P BP3</span>
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-gray-100">
                        Blindage de porte ou bloc-porte blindé sur mesure. Protégez votre domicile avec les meilleures solutions métier.
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

            {/* Benefits Grid */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-red-600">
                        <Shield className="h-10 w-10 text-red-600 mb-4" />
                        <h3 className="font-bold text-lg mb-2">Certification A2P</h3>
                        <p className="text-gray-600">Niveaux BP1 à BP3 pour une résistance maximale</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-red-600">
                        <DoorClosed className="h-10 w-10 text-red-600 mb-4" />
                        <h3 className="font-bold text-lg mb-2">Isolation Totale</h3>
                        <p className="text-gray-600">Thermique et phonique haute performance (-40dB)</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-red-600">
                        <Settings className="h-10 w-10 text-red-600 mb-4" />
                        <h3 className="font-bold text-lg mb-2">Sur Mesure</h3>
                        <p className="text-gray-600">Fabrication et pose adaptée à votre bâti</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-red-600">
                        <CheckCircle className="h-10 w-10 text-red-600 mb-4" />
                        <h3 className="font-bold text-lg mb-2">Garantie 10 ans</h3>
                        <p className="text-gray-600">Pose certifiée avec garantie décennale</p>
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 bg-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                        Nos Solutions de Blindage
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-8 bg-gray-50 rounded-2xl hover:shadow-xl transition-shadow">
                            <h3 className="text-2xl font-bold mb-4">Blindage de porte (Fourreau)</h3>
                            <p className="text-gray-600 mb-6">Conservez votre porte d'origine en l'habillant d'acier. Idéal pour respecter les règles de copropriété.</p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-2"><Check className="text-green-600" /> Tôle d'acier 20/10ème</li>
                                <li className="flex items-center gap-2"><Check className="text-green-600" /> Serrure multipoints A2P</li>
                                <li className="flex items-center gap-2"><Check className="text-green-600" /> Cornières anti-pinces</li>
                            </ul>
                        </div>
                        <div className="p-8 bg-gray-900 text-white rounded-2xl shadow-2xl scale-105 transform">
                            <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">RECOMMANDÉ</div>
                            <h3 className="text-2xl font-bold mb-4">Bloc-Porte Blindé</h3>
                            <p className="text-gray-400 mb-6">Remplacement complet de la porte et du bâti par un ensemble tout-acier haute sécurité.</p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-2"><Check className="text-orange-500" /> Structure acier renforcée</li>
                                <li className="flex items-center gap-2"><Check className="text-orange-500" /> Certification BP1 à BP3</li>
                                <li className="flex items-center gap-2"><Check className="text-orange-500" /> Design personnalisable</li>
                            </ul>
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
                                minutes pour vous donner un tarif exact ou fixer un rendez-vous d'expertise.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <CheckCircle className="h-6 w-6 text-green-600" />
                                    <span className="text-gray-700">Devis transparent et détaillé</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <CheckCircle className="h-6 w-6 text-green-600" />
                                    <span className="text-gray-700">Expertise gratuite à domicile</span>
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
                                    placeholder="Décrivez votre projet (ex: blindage, bloc-porte...)"
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
                        Besoin de sécuriser votre entrée ? Appelez maintenant
                    </h2>
                    <p className="text-xl mb-8">
                        Conseils et devis gratuits par téléphone
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
