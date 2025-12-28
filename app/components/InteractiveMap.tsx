"use client";

import { useState } from "react";
import { MapPin, Clock, Phone, Car, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CONTACT_INFO } from "@/app/constants";

const zones = [
  {
    id: "paris-center",
    name: "Paris Centre (1er-4ème)",
    time: "15-20 min",
    color: "bg-green-500",
    districts: ["1er", "2ème", "3ème", "4ème"],
    interventions: 450,
    satisfaction: 98,
  },
  {
    id: "paris-west",
    name: "Paris Ouest (7ème, 8ème, 16ème, 17ème)",
    time: "20-25 min",
    color: "bg-blue-500",
    districts: ["7ème", "8ème", "16ème", "17ème"],
    interventions: 380,
    satisfaction: 97,
  },
  {
    id: "paris-east",
    name: "Paris Est (11ème, 12ème, 19ème, 20ème)",
    time: "20-30 min",
    color: "bg-orange-500",
    districts: ["11ème", "12ème", "19ème", "20ème"],
    interventions: 420,
    satisfaction: 96,
  },
  {
    id: "paris-south",
    name: "Paris Sud (13ème, 14ème, 15ème)",
    time: "25-30 min",
    color: "bg-purple-500",
    districts: ["13ème", "14ème", "15ème"],
    interventions: 340,
    satisfaction: 98,
  },
  {
    id: "banlieue-proche",
    name: "Banlieue (92, 93, 94)",
    time: "30-40 min",
    color: "bg-red-500",
    districts: [
      "Hauts-de-Seine",
      "Seine-Saint-Denis",
      "Val-de-Marne",
      "Limeil brevanne",
      "Créteil",
      "Saint maur",
    ],
    interventions: 280,
    satisfaction: 95,
  },
];

const popularCities = [
  { name: "Boulogne-Billancourt", time: "25 min", interventions: 45 },
  { name: "Neuilly-sur-Seine", time: "30 min", interventions: 38 },
  { name: "Vincennes", time: "35 min", interventions: 42 },
  { name: "Saint-Denis", time: "40 min", interventions: 33 },
  { name: "Créteil", time: "45 min", interventions: 29 },
  { name: "Montreuil", time: "35 min", interventions: 31 },
];

export default function InteractiveMap() {
  const [selectedZone, setSelectedZone] = useState(zones[0]);
  const [hoveredZone, setHoveredZone] = useState<string | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Zone d'Intervention Paris & Région
          </h2>
          <p className="text-xl text-gray-600">
            Intervention rapide dans tout Paris et la petite couronne
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Interactive Map */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 min-h-96">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Temps d'Intervention par Zone
              </h3>

              {/* Zone Buttons */}
              <div className="space-y-3">
                {zones.map((zone) => (
                  <div
                    key={zone.id}
                    className={`p-4 rounded-lg cursor-pointer transition-all duration-300 transform hover:scale-105 ${selectedZone.id === zone.id
                      ? `${zone.color} text-white shadow-xl`
                      : hoveredZone === zone.id
                        ? "bg-white shadow-lg border-2 border-blue-300"
                        : "bg-white shadow-md hover:shadow-lg"
                      }`}
                    onClick={() => setSelectedZone(zone)}
                    onMouseEnter={() => setHoveredZone(zone.id)}
                    onMouseLeave={() => setHoveredZone(null)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <MapPin className="h-5 w-5" />
                        <div>
                          <h4 className="font-semibold">{zone.name}</h4>
                          <p
                            className={`text-sm ${selectedZone.id === zone.id
                              ? "text-white/80"
                              : "text-gray-600"
                              }`}
                          >
                            {zone.districts.join(", ")}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span className="font-bold">{zone.time}</span>
                        </div>
                        <div
                          className={`text-sm ${selectedZone.id === zone.id
                            ? "text-white/80"
                            : "text-gray-600"
                            }`}
                        >
                          {zone.interventions} interventions
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Legend */}
              <div className="mt-6 p-4 bg-white/80 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Légende</h4>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                    &lt; 25 min
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
                    25-35 min
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                    &gt; 35 min
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Zone Details */}
          <div className="space-y-6">
            <Card className="shadow-xl border-2 border-blue-100">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <div
                    className={`w-4 h-4 ${selectedZone.color} rounded-full`}
                  ></div>
                  <span>{selectedZone.name}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <Clock className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-green-600">
                      {selectedZone.time}
                    </div>
                    <p className="text-sm text-gray-600">Temps d'arrivée</p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <CheckCircle className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-blue-600">
                      {selectedZone.satisfaction}%
                    </div>
                    <p className="text-sm text-gray-600">Satisfaction</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">
                    Arrondissements couverts :
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedZone.districts.map((district, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                      >
                        {district}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 p-4 bg-orange-50 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Car className="h-5 w-5 text-orange-600" />
                    <span className="font-semibold text-orange-800">
                      Intervention Express
                    </span>
                  </div>
                  <p className="text-sm text-orange-700">
                    {selectedZone.interventions} interventions réalisées dans
                    cette zone avec un taux de satisfaction de{" "}
                    {selectedZone.satisfaction}%
                  </p>
                </div>

                <a href={CONTACT_INFO.phoneLink} className="w-full">
                  <Button className="w-full mt-6 transform hover:scale-105 transition-all duration-200">
                    <Phone className="h-4 w-4 mr-2" />
                    Intervention dans cette Zone
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* Popular Cities */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Villes les Plus Demandées</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {popularCities.map((city, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <MapPin className="h-4 w-4 text-gray-600" />
                        <span className="font-medium">{city.name}</span>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-semibold text-blue-600">
                          {city.time}
                        </div>
                        <div className="text-xs text-gray-500">
                          {city.interventions} interventions
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Votre Zone n'est pas Listée ?
            </h3>
            <p className="text-xl text-blue-100 mb-6">
              Contactez-nous ! Nous intervenons également dans d'autres communes
              de la région parisienne
            </p>
            <a href={CONTACT_INFO.phoneLink}>
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 transform hover:scale-105 transition-all duration-200"
              >
                <Phone className="h-5 w-5 mr-2" />
                {CONTACT_INFO.phoneDisplay}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
