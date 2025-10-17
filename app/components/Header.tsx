"use client";

import { useState, useEffect } from "react";
import { Phone, Clock, MapPin, Shield, Key, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import logo from "public/image/logo.jpg";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-elegant-50/95 backdrop-blur-md shadow-lg"
            : "bg-elegant-50 shadow-lg"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-2 group">
              <Image
                src="/logo.jpg"
                alt="D'Clik Serrure"
                width={60}
                height={60}
                className="transition-transform duration-300 group-hover:rotate-12"
              />
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-bold text-gray-900 whitespace-nowrap">
                  D'Clik <span className="text-red-600">Serrure</span>
                </span>
                <span className="text-[10px] md:text-xs text-orange-500 font-semibold whitespace-nowrap">
                  24/7 Intervention Rapide
                </span>
              </div>
            </Link>

            {/* Navigation Desktop */}
            <nav className="hidden lg:flex space-x-6">
              <Link
                href="/"
                className="text-charcoal hover:text-red-600 transition-colors relative group font-medium"
              >
                Accueil
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/services"
                className="text-charcoal hover:text-red-600 transition-colors relative group font-medium"
              >
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/gallery"
                className="text-charcoal hover:text-red-600 transition-colors relative group font-medium"
              >
                Galerie
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/blog"
                className="text-charcoal hover:text-red-600 transition-colors relative group font-medium"
              >
                Blog
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/test-securite"
                className="text-charcoal hover:text-red-600 transition-colors relative group font-medium whitespace-nowrap"
              >
                Test Sécurité
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/about"
                className="text-charcoal hover:text-red-600 transition-colors relative group font-medium"
              >
                À Propos
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/devis"
                className="text-charcoal hover:text-red-600 transition-colors relative group font-medium whitespace-nowrap"
              >
                Devis Instantané
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/contact"
                className="text-charcoal hover:text-red-600 transition-colors relative group font-medium"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </nav>

            {/* CTA Phone */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm text-gray-600 whitespace-nowrap">Urgence 24h/24</p>
                <p className="text-lg font-bold text-red-600 animate-pulse whitespace-nowrap">
                  01 85 49 07 07
                </p>
              </div>
              <Button className="bg-red-600 hover:bg-red-700 text-white transform hover:scale-105 transition-all duration-200 shadow-lg">
                <Phone className="h-4 w-4 mr-2" />
                Appeler
              </Button>
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
              <Image
                src="/logo.jpg"
                alt="D'Clik Serrure"
                width={50}
                height={50}
              />
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
            <div className="flex flex-col space-y-2">
              <Link
                href="/"
                onClick={closeMenu}
                className="text-gray-900 hover:text-red-600 hover:bg-red-50 transition-all font-medium py-3 px-4 rounded-lg whitespace-nowrap"
              >
                Accueil
              </Link>
              <Link
                href="/services"
                onClick={closeMenu}
                className="text-gray-900 hover:text-red-600 hover:bg-red-50 transition-all font-medium py-3 px-4 rounded-lg whitespace-nowrap"
              >
                Services
              </Link>
              <Link
                href="/gallery"
                onClick={closeMenu}
                className="text-gray-900 hover:text-red-600 hover:bg-red-50 transition-all font-medium py-3 px-4 rounded-lg whitespace-nowrap"
              >
                Galerie
              </Link>
              <Link
                href="/blog"
                onClick={closeMenu}
                className="text-gray-900 hover:text-red-600 hover:bg-red-50 transition-all font-medium py-3 px-4 rounded-lg whitespace-nowrap"
              >
                Blog
              </Link>
              <Link
                href="/test-securite"
                onClick={closeMenu}
                className="text-gray-900 hover:text-red-600 hover:bg-red-50 transition-all font-medium py-3 px-4 rounded-lg whitespace-nowrap"
              >
                Test Sécurité
              </Link>
              <Link
                href="/about"
                onClick={closeMenu}
                className="text-gray-900 hover:text-red-600 hover:bg-red-50 transition-all font-medium py-3 px-4 rounded-lg whitespace-nowrap"
              >
                À Propos
              </Link>
              <Link
                href="/devis"
                onClick={closeMenu}
                className="text-gray-900 hover:text-red-600 hover:bg-red-50 transition-all font-medium py-3 px-4 rounded-lg whitespace-nowrap"
              >
                Devis Instantané
              </Link>
              <Link
                href="/contact"
                onClick={closeMenu}
                className="text-gray-900 hover:text-red-600 hover:bg-red-50 transition-all font-medium py-3 px-4 rounded-lg whitespace-nowrap"
              >
                Contact
              </Link>
            </div>
          </nav>

          {/* Footer du drawer avec CTA */}
          <div className="p-6 border-t border-gray-200 bg-gray-50">
            <div className="mb-4 text-center">
              <p className="text-sm text-gray-600 whitespace-nowrap">Urgence 24h/24</p>
              <p className="text-2xl font-bold text-red-600 animate-pulse whitespace-nowrap">
                01 85 49 07 07
              </p>
            </div>
            <Button 
              className="bg-red-600 hover:bg-red-700 text-white w-full shadow-lg"
              onClick={closeMenu}
            >
              <Phone className="h-4 w-4 mr-2" />
              Appeler Maintenant
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}