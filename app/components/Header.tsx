"use client";

import { useState, useEffect } from "react";
import { Phone, Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(
    null
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setOpenMobileSubmenu(null);
  };

  const toggleMobileSubmenu = (menu: string) => {
    setOpenMobileSubmenu(openMobileSubmenu === menu ? null : menu);
  };

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-white shadow-lg"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="flex items-center space-x-2">
                {/* Ton logo */}
                <Image
                  src="/logo.png" // chemin vers ton logo dans /public
                  alt="D'Clik Serrure"
                  width={100}
                  height={100}
                  className="transition-transform duration-300 group-hover:rotate-12"
                />
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-gray-900">
                    D'Clik <span className="text-red-600">Serrure</span>
                  </span>
                  <span className="text-xs text-orange-500 font-semibold">
                    24/7 Intervention Rapide
                  </span>
                </div>
              </div>
            </Link>

            {/* Navigation Desktop */}
            <nav className="hidden lg:flex space-x-6">
              <a
                href="/"
                className="text-gray-900 hover:text-red-600 transition-colors relative group font-medium"
              >
                Accueil
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
              </a>

              {/* Entreprise Dropdown (Services + À Propos) */}
              <div
                className="relative group"
                onMouseEnter={() => setOpenDropdown("entreprise")}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="text-gray-900 hover:text-red-600 transition-colors font-medium flex items-center gap-1 whitespace-nowrap">
                  L'Entreprise
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div
                  className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 transition-all duration-200 ${
                    openDropdown === "entreprise"
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-2"
                  }`}
                >
                  <a
                    href="/services"
                    className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors whitespace-nowrap"
                  >
                    Nos Services
                  </a>
                  <a
                    href="/about"
                    className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors whitespace-nowrap"
                  >
                    À Propos de Nous
                  </a>
                </div>
              </div>

              {/* Outils Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setOpenDropdown("outils")}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="text-gray-900 hover:text-red-600 transition-colors font-medium flex items-center gap-1 whitespace-nowrap">
                  Outils & Devis
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div
                  className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 transition-all duration-200 ${
                    openDropdown === "outils"
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-2"
                  }`}
                >
                  <a
                    href="/devis"
                    className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors whitespace-nowrap"
                  >
                    Devis Instantané
                  </a>
                  <a
                    href="/test-securite"
                    className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors whitespace-nowrap"
                  >
                    Test Sécurité
                  </a>
                </div>
              </div>

              <a
                href="/gallery"
                className="text-gray-900 hover:text-red-600 transition-colors relative group font-medium"
              >
                Galerie
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
              </a>

              <a
                href="/blog"
                className="text-gray-900 hover:text-red-600 transition-colors relative group font-medium"
              >
                Blog
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
              </a>

              <a
                href="/contact"
                className="text-gray-900 hover:text-red-600 transition-colors relative group font-medium"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </nav>

            {/* CTA Phone */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm text-gray-600 whitespace-nowrap">
                  Urgence 24h/24
                </p>
                <p className="text-lg font-bold text-red-600 animate-pulse whitespace-nowrap">
                  +33185440131
                </p>
              </div>
              <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transform hover:scale-105 transition-all duration-200 shadow-lg flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                Appeler
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden transform hover:scale-110 transition-transform duration-200 p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6 text-gray-900" />
            </button>
          </div>
        </div>
      </header>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeMenu}
      />

      {/* Drawer Sidebar Mobile */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header du drawer */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">DC</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-gray-900 whitespace-nowrap">
                  D'Clik <span className="text-red-600">Serrure</span>
                </span>
                <span className="text-xs text-orange-500 font-semibold whitespace-nowrap">
                  24/7 Intervention
                </span>
              </div>
            </div>
            <button
              onClick={closeMenu}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Close menu"
            >
              <X className="h-6 w-6 text-gray-900" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto py-6 px-4">
            <div className="flex flex-col space-y-1">
              <a
                href="/"
                onClick={closeMenu}
                className="text-gray-900 hover:text-red-600 hover:bg-red-50 transition-all font-medium py-3 px-4 rounded-lg whitespace-nowrap"
              >
                Accueil
              </a>

              {/* L'Entreprise Mobile Submenu */}
              <div>
                <button
                  onClick={() => toggleMobileSubmenu("entreprise")}
                  className="w-full text-left text-gray-900 hover:text-red-600 hover:bg-red-50 transition-all font-medium py-3 px-4 rounded-lg whitespace-nowrap flex items-center justify-between"
                >
                  L'Entreprise
                  <ChevronRight
                    className={`h-4 w-4 transition-transform duration-200 ${
                      openMobileSubmenu === "entreprise" ? "rotate-90" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-200 ${
                    openMobileSubmenu === "entreprise" ? "max-h-32" : "max-h-0"
                  }`}
                >
                  <div className="pl-4 space-y-1">
                    <a
                      href="/services"
                      onClick={closeMenu}
                      className="block text-gray-700 hover:text-red-600 hover:bg-red-50 transition-all py-2 px-4 rounded-lg text-sm whitespace-nowrap"
                    >
                      Nos Services
                    </a>
                    <a
                      href="/about"
                      onClick={closeMenu}
                      className="block text-gray-700 hover:text-red-600 hover:bg-red-50 transition-all py-2 px-4 rounded-lg text-sm whitespace-nowrap"
                    >
                      À Propos de Nous
                    </a>
                  </div>
                </div>
              </div>

              {/* Outils & Devis Mobile Submenu */}
              <div>
                <button
                  onClick={() => toggleMobileSubmenu("outils")}
                  className="w-full text-left text-gray-900 hover:text-red-600 hover:bg-red-50 transition-all font-medium py-3 px-4 rounded-lg whitespace-nowrap flex items-center justify-between"
                >
                  Outils & Devis
                  <ChevronRight
                    className={`h-4 w-4 transition-transform duration-200 ${
                      openMobileSubmenu === "outils" ? "rotate-90" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-200 ${
                    openMobileSubmenu === "outils" ? "max-h-32" : "max-h-0"
                  }`}
                >
                  <div className="pl-4 space-y-1">
                    <a
                      href="/devis"
                      onClick={closeMenu}
                      className="block text-gray-700 hover:text-red-600 hover:bg-red-50 transition-all py-2 px-4 rounded-lg text-sm whitespace-nowrap"
                    >
                      Devis Instantané
                    </a>
                    <a
                      href="/test-securite"
                      onClick={closeMenu}
                      className="block text-gray-700 hover:text-red-600 hover:bg-red-50 transition-all py-2 px-4 rounded-lg text-sm whitespace-nowrap"
                    >
                      Test Sécurité
                    </a>
                  </div>
                </div>
              </div>

              <a
                href="/gallery"
                onClick={closeMenu}
                className="text-gray-900 hover:text-red-600 hover:bg-red-50 transition-all font-medium py-3 px-4 rounded-lg whitespace-nowrap"
              >
                Galerie
              </a>

              <a
                href="/blog"
                onClick={closeMenu}
                className="text-gray-900 hover:text-red-600 hover:bg-red-50 transition-all font-medium py-3 px-4 rounded-lg whitespace-nowrap"
              >
                Blog
              </a>

              <a
                href="/contact"
                onClick={closeMenu}
                className="text-gray-900 hover:text-red-600 hover:bg-red-50 transition-all font-medium py-3 px-4 rounded-lg whitespace-nowrap"
              >
                Contact
              </a>
            </div>
          </nav>

          {/* Footer du drawer avec CTA */}
          <div className="p-6 border-t border-gray-200 bg-gray-50">
            <div className="mb-4 text-center">
              <p className="text-sm text-gray-600 whitespace-nowrap">
                Urgence 24h/24
              </p>
              <p className="text-2xl font-bold text-red-600 animate-pulse whitespace-nowrap">
                +33185440131
              </p>
            </div>
            <button
              className="bg-red-600 hover:bg-red-700 text-white w-full py-3 rounded-lg shadow-lg flex items-center justify-center"
              onClick={closeMenu}
            >
              <Phone className="h-4 w-4 mr-2" />
              Appeler Maintenant
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
