'use client';

import { Gift, Users, Lightbulb, X } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function PromoBanners() {
  const [showTopBanner, setShowTopBanner] = useState(true);
  const [showBottomBanner, setShowBottomBanner] = useState(true);
  const [showSideBanners, setShowSideBanners] = useState(true);

  return (
    <>
      {showTopBanner && (
        <div className="fixed top-20 left-0 right-0 z-40 animate-fade-in-up">
          <div className="relative bg-gradient-to-r from-beige-200 via-beige-100 to-beige-200 border-b border-beige-300 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Gift className="h-5 w-5 text-red-600" />
                  <p className="text-sm md:text-base text-anthracite">
                    <span className="font-bold">Offre Spéciale :</span> -15% sur toute installation de serrure A2P jusqu'au 31 octobre
                  </p>
                </div>
                <Link href="/devis" className="hidden sm:block px-4 py-1.5 bg-anthracite text-white text-sm rounded-full hover:bg-anthracite-light transition-colors">
                  Profiter
                </Link>
                <button onClick={() => setShowTopBanner(false)} className="p-1 hover:bg-beige-300 rounded transition-colors">
                  <X className="h-4 w-4 text-anthracite-light" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showBottomBanner && (
        <div className="fixed bottom-0 left-0 right-0 z-40 animate-fade-in-up">
          <div className="relative bg-gradient-to-r from-light-200 via-light-100 to-light-200 border-t border-light-400 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Users className="h-6 w-6 text-red-600" />
                  <div>
                    <p className="text-sm md:text-base text-anthracite font-bold">
                      Programme de Parrainage
                    </p>
                    <p className="text-xs md:text-sm text-anthracite-lighter">
                      Parrainez un ami et recevez 30€ de réduction sur votre prochaine intervention
                    </p>
                  </div>
                </div>
                <Link href="/contact" className="hidden sm:block px-5 py-2 bg-anthracite text-white text-sm font-medium rounded-full hover:bg-anthracite-light transition-all duration-300 transform hover:scale-105">
                  En savoir plus
                </Link>
                <button onClick={() => setShowBottomBanner(false)} className="p-1 hover:bg-light-300 rounded transition-colors">
                  <X className="h-4 w-4 text-anthracite-light" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showSideBanners && (
        <>
          <div className="hidden xl:block fixed left-4 top-1/2 transform -translate-y-1/2 z-30 animate-fade-in-right">
            <div className="bg-gradient-to-b from-beige-100 to-beige-200 rounded-2xl shadow-lg p-6 w-56 border border-beige-300">
              <button onClick={() => setShowSideBanners(false)} className="absolute top-2 right-2 p-1 hover:bg-beige-300 rounded transition-colors">
                <X className="h-3 w-3 text-anthracite-light" />
              </button>
              <Lightbulb className="h-10 w-10 text-red-600 mb-4" />
              <h3 className="text-lg font-bold text-anthracite mb-2">
                Conseils Sécurité
              </h3>
              <ul className="space-y-2 text-sm text-anthracite-lighter">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  Changez votre serrure après une perte de clés
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  Vérifiez vos serrures tous les 2 ans
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  Privilégiez les serrures A2P
                </li>
              </ul>
              <Link href="/services" className="mt-4 block text-center px-4 py-2 bg-anthracite text-white text-sm rounded-full hover:bg-anthracite-light transition-colors">
                Nos conseils
              </Link>
            </div>
          </div>

          <div className="hidden xl:block fixed right-4 top-1/2 transform -translate-y-1/2 z-30 animate-fade-in-right">
            <div className="bg-gradient-to-b from-light-100 to-light-300 rounded-2xl shadow-lg p-6 w-56 border border-light-400">
              <button onClick={() => setShowSideBanners(false)} className="absolute top-2 right-2 p-1 hover:bg-light-400 rounded transition-colors">
                <X className="h-3 w-3 text-anthracite-light" />
              </button>
              <div className="text-center">
                <div className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                  URGENCE 24/7
                </div>
                <p className="text-2xl font-bold text-anthracite mb-2">
                  01 85 49 07 07
                </p>
                <p className="text-sm text-anthracite-lighter mb-4">
                  Intervention en moins de 30 minutes
                </p>
                <Link href="tel:0185490707" className="block px-4 py-2 bg-anthracite text-white text-sm font-medium rounded-full hover:bg-anthracite-light transition-all duration-300 transform hover:scale-105">
                  Appeler maintenant
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
