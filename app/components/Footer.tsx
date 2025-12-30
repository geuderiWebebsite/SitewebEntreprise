import {
  Key,
  Phone,
  MapPin,
  Clock,
  Mail,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";
import Link from "next/link";
import { CONTACT_INFO } from "@/app/constants";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Key className="h-8 w-8 text-red-500" />
              <span className="text-2xl font-bold">
                D'Clik <span className="text-red-500">Serrure</span>
              </span>
            </div>
            <p className="text-gray-400">
              Votre serrurier de confiance à Paris. Intervention rapide 24h/24
              et 7j/7. Tarifs transparents et professionnalisme garanti.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/share/1Es6qpU165/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-6 w-6 text-gray-400 hover:text-blue-600 cursor-pointer transition-colors" />
              </Link>
              <Link
                href="https://www.tiktok.com/@dclik.serrure?_r=1&_t=ZN-919aBx5BtrC"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </Link>
              <Link
                href="https://www.instagram.com/dclikserrure?igsh=MW1zYXlnb29zeXl6ZQ%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-6 w-6 text-gray-400 hover:text-pink-600 cursor-pointer transition-colors" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link
                  href="/services"
                  className="hover:text-red-400 transition-colors"
                >
                  Ouverture de porte
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-red-400 transition-colors"
                >
                  Installation serrures
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-red-400 transition-colors"
                >
                  Dépannage d'urgence
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-red-400 transition-colors"
                >
                  Sécurisation domicile
                </Link>
              </li>
              <li>
                <Link
                  href="/devis"
                  className="hover:text-red-400 transition-colors"
                >
                  Devis instantané
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-gray-400">
              <a href={CONTACT_INFO.phoneLink} className="flex items-center hover:text-white transition-colors">
                <Phone className="h-4 w-4 mr-2" />
                {CONTACT_INFO.phoneDisplay}
              </a>
              <a href={CONTACT_INFO.mobileLink} className="flex items-center hover:text-white transition-colors">
                <Phone className="h-4 w-4 mr-2" />
                {CONTACT_INFO.mobileDisplay}
              </a>
              <p className="flex items-center hover:text-white transition-colors">
                <Mail className="h-4 w-4 mr-2" />
                guediriali30@gmail.com
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
              <p>Clichy</p>
              <p>Valenton</p>
              <p>Bonneuil-sur-Marne</p>
              <p>Saint-Maur-des-Fossés</p>
              <p>Limeil-Brévannes</p>
              <p>Brunoy</p>
              <p>Montgeron</p>
              <p>Vigneux-sur-Seine</p>
              <p>Villeneuve-Saint-Georges</p>
              <p>Boissy-Saint-Léger</p>
              <p>Choisy-le-Roi</p>
              <p>Vitry-sur-Seine</p>
              <p>Draveil</p>
              <p>Thiais</p>
              <p>Charenton-le-Pont</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © 2026 D'Clik Serrure. Tous droits réservés.{" "}
              <br className="md:hidden" />
              <span className="relative text-sm font-medium text-gray-300 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient">
                Développé par Achraf Briki
              </span>
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/mentions-legales"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Mentions légales
              </Link>
              <Link
                href="/politique-confidentialite"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
