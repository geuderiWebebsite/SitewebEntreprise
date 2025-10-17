'use client';

import { Gift, Users, Lightbulb, X } from 'lucide-react';
import { useState } from 'react';

export default function PromoBanners() {
  const [showTopBanner, setShowTopBanner] = useState(true);
  const [showBottomBanner, setShowBottomBanner] = useState(true);
  const [showSideBanners, setShowSideBanners] = useState(true);

  return (
    <>
      {showTopBanner && (
        <div className="fixed top-20 left-0 right-0 z-40 animate-fade-in-up">
          <div className="relative bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 border-b border-gray-700 shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Gift className="h-5 w-5 text-red-500" />
                  <p className="text-sm md:text-base text-white">
                    <span className="font-bold">Offre Spéciale :</span> -15% sur toute installation de serrure A2P jusqu'au 31 octobre
                  </p>
                </div>
                <a href="/devis" className="hidden sm:block px-4 py-1.5 bg-red-600 text-white text-sm rounded-full hover:bg-red-700 transition-colors">
                  Profiter
                </a>
                <button onClick={() => setShowTopBanner(false)} className="p-1 hover:bg-gray-700 rounded transition-colors">
                  <X className="h-4 w-4 text-gray-400" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showBottomBanner && (
        <div className="fixed bottom-0 left-0 right-0 z-40 animate-fade-in-up">
          <div className="relative bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 border-t border-gray-700 shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-black/20 to-black/40"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Users className="h-6 w-6 text-red-500" />
                  <div>
                    <p className="text-sm md:text-base text-white font-bold">
                      Programme de Parrainage
                    </p>
                    <p className="text-xs md:text-sm text-gray-300">
                      Parrainez un ami et recevez 30€ de réduction sur votre prochaine intervention
                    </p>
                  </div>
                </div>
                <a href="/contact" className="hidden sm:block px-5 py-2 bg-red-600 text-white text-sm font-medium rounded-full hover:bg-red-700 transition-all duration-300 transform hover:scale-105">
                  En savoir plus
                </a>
                <button onClick={() => setShowBottomBanner(false)} className="p-1 hover:bg-gray-700 rounded transition-colors">
                  <X className="h-4 w-4 text-gray-400" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showSideBanners && (
        <>
          <div className="hidden xl:block fixed left-4 top-1/2 transform -translate-y-1/2 z-30 animate-fade-in-right">
            <div className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-2xl shadow-2xl p-6 w-56 border border-gray-700 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/60"></div>
              <div className="relative z-10">
                <button onClick={() => setShowSideBanners(false)} className="absolute top-0 right-0 p-1 hover:bg-gray-700 rounded transition-colors">
                  <X className="h-3 w-3 text-gray-400" />
                </button>
                <Lightbulb className="h-10 w-10 text-red-500 mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">
                  Conseils Sécurité
                </h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    Changez votre serrure après une perte de clés
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    Vérifiez vos serrures tous les 2 ans
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    Privilégiez les serrures A2P
                  </li>
                </ul>
                <a href="/services" className="mt-4 block text-center px-4 py-2 bg-red-600 text-white text-sm rounded-full hover:bg-red-700 transition-colors">
                  Nos conseils
                </a>
              </div>
            </div>
          </div>

          <div className="hidden xl:block fixed right-4 top-1/2 transform -translate-y-1/2 z-30 animate-fade-in-right">
            <div className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-2xl shadow-2xl p-6 w-56 border border-gray-700 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/60"></div>
              <div className="relative z-10">
                <button onClick={() => setShowSideBanners(false)} className="absolute top-0 right-0 p-1 hover:bg-gray-700 rounded transition-colors">
                  <X className="h-3 w-3 text-gray-400" />
                </button>
                <div className="text-center">
                  <div className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                    URGENCE 24/7
                  </div>
                  <p className="text-2xl font-bold text-white mb-2">
                    01 85 49 07 07
                  </p>
                  <p className="text-sm text-gray-300 mb-4">
                    Intervention en moins de 30 minutes
                  </p>
                  <a href="tel:0185490707" className="block px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-full hover:bg-red-700 transition-all duration-300 transform hover:scale-105">
                    Appeler maintenant
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}