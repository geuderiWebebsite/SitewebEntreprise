import { Key, Phone, MapPin, Clock, Mail, Facebook, Twitter, Instagram } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Key className="h-8 w-8 text-red-500" />
              <span className="text-2xl font-bold">D'Clik <span className="text-red-500">Serrure</span></span>
            </div>
            <p className="text-gray-400">
              Votre serrurier de confiance à Paris. Intervention rapide 24h/24 et 7j/7.
              Tarifs transparents et professionnalisme garanti.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-400 hover:text-red-500 cursor-pointer transition-colors" />
              <Twitter className="h-6 w-6 text-gray-400 hover:text-red-500 cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 text-gray-400 hover:text-red-500 cursor-pointer transition-colors" />
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/services" className="hover:text-red-400 transition-colors">Ouverture de porte</Link></li>
              <li><Link href="/services" className="hover:text-red-400 transition-colors">Installation serrures</Link></li>
              <li><Link href="/services" className="hover:text-red-400 transition-colors">Dépannage d'urgence</Link></li>
              <li><Link href="/services" className="hover:text-red-400 transition-colors">Sécurisation domicile</Link></li>
              <li><Link href="/devis" className="hover:text-red-400 transition-colors">Devis instantané</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-gray-400">
              <p className="flex items-center hover:text-white transition-colors">
                <Phone className="h-4 w-4 mr-2" />
                01 85 49 07 07
              </p>
              <p className="flex items-center hover:text-white transition-colors">
                <Mail className="h-4 w-4 mr-2" />
                contact@dclikserrure.fr
              </p>
              <p className="flex items-center hover:text-white transition-colors">
                <MapPin className="h-4 w-4 mr-2" />
                Paris et Île-de-France
              </p>
              <p className="flex items-center hover:text-white transition-colors">
                <Clock className="h-4 w-4 mr-2" />
                24h/24 - 7j/7
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Zones d'intervention</h3>
            <div className="text-gray-400 space-y-1">
              <p>Paris (tous arrondissements)</p>
              <p>Boulogne-Billancourt</p>
              <p>Neuilly-sur-Seine</p>
              <p>Vincennes</p>
              <p>Saint-Denis</p>
              <p>Créteil</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2026 D'Clik Serrure. Tous droits réservés.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/mentions-legales" className="text-gray-400 hover:text-white transition-colors">Mentions légales</Link>
              <Link href="/politique-confidentialite" className="text-gray-400 hover:text-white transition-colors">Politique de confidentialité</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}