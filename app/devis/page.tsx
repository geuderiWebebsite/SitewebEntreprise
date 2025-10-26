"use client";

import { useState } from "react";
import {
  Calculator,
  Clock,
  Euro,
  CircleCheck as CheckCircle,
  Phone,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
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

export default function DevisPage() {
  const [serviceType, setServiceType] = useState("");
  const [urgency, setUrgency] = useState("normal");
  const [lockType, setLockType] = useState("standard");
  const [timeSlot, setTimeSlot] = useState("day");
  const [estimate, setEstimate] = useState<number | null>(null);

  const services = [
    { value: "ouverture", label: "Ouverture de porte", basePrice: 89 },
    { value: "installation", label: "Installation de serrure", basePrice: 150 },
    { value: "reparation", label: "Réparation de serrure", basePrice: 120 },
    { value: "changement", label: "Changement de serrure", basePrice: 130 },
    { value: "blindage", label: "Blindage de porte", basePrice: 450 },
    { value: "extraction", label: "Extraction clé cassée", basePrice: 95 },
    { value: "depannage", label: "Dépannage général", basePrice: 100 },
  ];

  const calculateEstimate = () => {
    const service = services.find((s) => s.value === serviceType);
    if (!service) return;

    let price = service.basePrice;

    if (lockType === "high-security") {
      price += 80;
    } else if (lockType === "multipoint") {
      price += 50;
    }

    if (urgency === "urgent") {
      price *= 1.3;
    } else if (urgency === "emergency") {
      price *= 1.5;
    }

    if (timeSlot === "night") {
      price += 40;
    } else if (timeSlot === "weekend") {
      price += 30;
    }

    setEstimate(Math.round(price));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="pt-24 pb-16">
        <section className="py-16 bg-gradient-to-br from-red-600 to-orange-500 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Calculator className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-5xl font-bold mb-6">Devis Instantané</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Obtenez une estimation immédiate et transparente pour votre
              intervention de serrurerie
            </p>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="shadow-2xl border-2 border-red-100">
                <CardHeader className="bg-gradient-to-r from-red-50 to-orange-50">
                  <CardTitle className="text-2xl text-gray-900">
                    Configurez votre intervention
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8 space-y-8">
                  <div>
                    <Label className="text-lg font-semibold text-gray-900 mb-4 block">
                      Type de service
                    </Label>
                    <Select value={serviceType} onValueChange={setServiceType}>
                      <SelectTrigger className="w-full h-12 text-base border-2 border-gray-300 focus:border-red-500">
                        <SelectValue placeholder="Sélectionnez un service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service.value} value={service.value}>
                            {service.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-lg font-semibold text-gray-900 mb-4 block">
                      Type de serrure
                    </Label>
                    <RadioGroup value={lockType} onValueChange={setLockType}>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-lg hover:border-red-300 cursor-pointer">
                          <RadioGroupItem value="standard" id="standard" />
                          <Label
                            htmlFor="standard"
                            className="cursor-pointer flex-1"
                          >
                            <div className="font-medium">Serrure standard</div>
                            <div className="text-sm text-gray-500">
                              Simple point
                            </div>
                          </Label>
                        </div>
                        <div className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-lg hover:border-red-300 cursor-pointer">
                          <RadioGroupItem value="multipoint" id="multipoint" />
                          <Label
                            htmlFor="multipoint"
                            className="cursor-pointer flex-1"
                          >
                            <div className="font-medium">
                              Serrure multipoints
                            </div>
                            <div className="text-sm text-gray-500">
                              3 à 5 points (+50€)
                            </div>
                          </Label>
                        </div>
                        <div className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-lg hover:border-red-300 cursor-pointer">
                          <RadioGroupItem
                            value="high-security"
                            id="high-security"
                          />
                          <Label
                            htmlFor="high-security"
                            className="cursor-pointer flex-1"
                          >
                            <div className="font-medium">
                              Serrure haute sécurité
                            </div>
                            <div className="text-sm text-gray-500">
                              Certifiée A2P (+80€)
                            </div>
                          </Label>
                        </div>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label className="text-lg font-semibold text-gray-900 mb-4 block">
                      Urgence de l'intervention
                    </Label>
                    <RadioGroup value={urgency} onValueChange={setUrgency}>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-lg hover:border-red-300 cursor-pointer">
                          <RadioGroupItem value="normal" id="normal" />
                          <Label
                            htmlFor="normal"
                            className="cursor-pointer flex-1"
                          >
                            <div className="font-medium">Normal</div>
                            <div className="text-sm text-gray-500">
                              Sous 2-3 heures
                            </div>
                          </Label>
                        </div>
                        <div className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-lg hover:border-red-300 cursor-pointer">
                          <RadioGroupItem value="urgent" id="urgent" />
                          <Label
                            htmlFor="urgent"
                            className="cursor-pointer flex-1"
                          >
                            <div className="font-medium">Urgent</div>
                            <div className="text-sm text-gray-500">
                              Sous 1 heure (+30%)
                            </div>
                          </Label>
                        </div>
                        <div className="flex items-center space-x-3 p-4 border-2 border-red-200 rounded-lg hover:border-red-300 cursor-pointer bg-red-50">
                          <RadioGroupItem value="emergency" id="emergency" />
                          <Label
                            htmlFor="emergency"
                            className="cursor-pointer flex-1"
                          >
                            <div className="font-medium text-red-700">
                              Urgence immédiate
                            </div>
                            <div className="text-sm text-red-600">
                              Sous 30 minutes (+50%)
                            </div>
                          </Label>
                        </div>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label className="text-lg font-semibold text-gray-900 mb-4 block">
                      Créneau horaire
                    </Label>
                    <RadioGroup value={timeSlot} onValueChange={setTimeSlot}>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-lg hover:border-red-300 cursor-pointer">
                          <RadioGroupItem value="day" id="day" />
                          <Label
                            htmlFor="day"
                            className="cursor-pointer flex-1"
                          >
                            <div className="font-medium">Journée (8h-20h)</div>
                            <div className="text-sm text-gray-500">
                              Tarif normal
                            </div>
                          </Label>
                        </div>
                        <div className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-lg hover:border-red-300 cursor-pointer">
                          <RadioGroupItem value="weekend" id="weekend" />
                          <Label
                            htmlFor="weekend"
                            className="cursor-pointer flex-1"
                          >
                            <div className="font-medium">Week-end</div>
                            <div className="text-sm text-gray-500">
                              Samedi/Dimanche (+30€)
                            </div>
                          </Label>
                        </div>
                        <div className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-lg hover:border-red-300 cursor-pointer">
                          <RadioGroupItem value="night" id="night" />
                          <Label
                            htmlFor="night"
                            className="cursor-pointer flex-1"
                          >
                            <div className="font-medium">Nuit (20h-8h)</div>
                            <div className="text-sm text-gray-500">
                              Tarif de nuit (+40€)
                            </div>
                          </Label>
                        </div>
                      </div>
                    </RadioGroup>
                  </div>

                  <Button
                    onClick={calculateEstimate}
                    disabled={!serviceType}
                    className="w-full h-14 text-lg bg-red-600 hover:bg-red-700 text-white shadow-lg"
                  >
                    <Calculator className="h-5 w-5 mr-2" />
                    Calculer mon devis
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {estimate !== null ? (
                  <Card className="shadow-2xl border-4 border-red-500 bg-gradient-to-br from-red-50 to-orange-50">
                    <CardHeader className="text-center pb-4">
                      <CardTitle className="text-2xl text-gray-900">
                        Votre Estimation
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-center space-y-6">
                      <div>
                        <div className="text-6xl font-bold text-red-600 mb-2">
                          {estimate}€
                        </div>
                        <p className="text-sm text-gray-600">
                          Prix indicatif TTC
                        </p>
                      </div>

                      <div className="bg-white rounded-lg p-4 space-y-3 text-left">
                        <div className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="h-5 w-5 text-green-600" />
                          <span>Déplacement inclus</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="h-5 w-5 text-green-600" />
                          <span>Main d'œuvre comprise</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="h-5 w-5 text-green-600" />
                          <span>Garantie 1 an</span>
                        </div>
                      </div>

                      <Button className="w-full bg-green-600 hover:bg-green-700 text-white h-12">
                        <Phone className="h-5 w-5 mr-2" />
                        Appeler maintenant
                      </Button>

                      <p className="text-xs text-gray-500">
                        * Prix indicatif sujet à confirmation après diagnostic
                        sur place
                      </p>
                    </CardContent>
                  </Card>
                ) : (
                  <Card className="shadow-xl border-2 border-gray-200">
                    <CardHeader>
                      <CardTitle className="text-xl text-gray-900">
                        Comment ça marche ?
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="bg-red-100 text-red-600 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                          1
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Configurez</h4>
                          <p className="text-sm text-gray-600">
                            Sélectionnez vos options
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="bg-red-100 text-red-600 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                          2
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Calculez</h4>
                          <p className="text-sm text-gray-600">
                            Obtenez votre estimation
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="bg-red-100 text-red-600 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                          3
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Contactez-nous</h4>
                          <p className="text-sm text-gray-600">
                            Intervention rapide
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}

                <Card className="shadow-xl border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-yellow-50">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <Clock className="h-6 w-6 text-orange-600" />
                      <h3 className="font-bold text-lg text-gray-900">
                        Disponible 24/7
                      </h3>
                    </div>
                    <p className="text-sm text-gray-700 mb-4">
                      Notre équipe est disponible jour et nuit pour vos urgences
                      de serrurerie.
                    </p>
                    <div className="text-center bg-white rounded-lg p-3">
                      <p className="text-sm text-gray-600 mb-1">
                        Appelez-nous maintenant
                      </p>
                      <p className="text-2xl font-bold text-red-600">
                        +33185440131
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        <section className="py-16 mt-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Pourquoi choisir notre devis instantané ?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-2 border-red-100">
                <CardContent className="p-6 text-center">
                  <Euro className="h-12 w-12 text-red-600 mx-auto mb-4" />
                  <h3 className="font-bold text-xl mb-2">
                    Transparence totale
                  </h3>
                  <p className="text-gray-600">
                    Pas de frais cachés. Le prix affiché est le prix final.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 border-red-100">
                <CardContent className="p-6 text-center">
                  <Clock className="h-12 w-12 text-red-600 mx-auto mb-4" />
                  <h3 className="font-bold text-xl mb-2">Rapide et simple</h3>
                  <p className="text-gray-600">
                    Obtenez votre estimation en moins de 2 minutes.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 border-red-100">
                <CardContent className="p-6 text-center">
                  <CheckCircle className="h-12 w-12 text-red-600 mx-auto mb-4" />
                  <h3 className="font-bold text-xl mb-2">Sans engagement</h3>
                  <p className="text-gray-600">
                    Estimation gratuite, aucune obligation de votre part.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}
