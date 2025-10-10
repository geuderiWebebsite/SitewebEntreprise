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

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-elegant-50/95 backdrop-blur-md shadow-lg"
          : "bg-elegant-50 shadow-lg"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="flex items-center space-x-2">
              {/* Ton logo */}
              <Image
                src="/logo.jpg" // chemin vers ton logo dans /public
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
          <nav className="hidden md:flex space-x-8">
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
              className="text-charcoal hover:text-red-600 transition-colors relative group font-medium"
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
              className="text-charcoal hover:text-red-600 transition-colors relative group font-medium"
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
          <div className="hidden md:flex items-center space-x-4">
            <div className="text-right">
              <p className="text-sm text-gray-600">Urgence 24h/24</p>
              <p className="text-lg font-bold text-red-600 animate-pulse">
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
            className="md:hidden transform hover:scale-110 transition-transform duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-neutral-300 py-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-charcoal hover:text-red-600 transition-colors font-medium"
              >
                Accueil
              </Link>
              <Link
                href="/services"
                className="text-charcoal hover:text-red-600 transition-colors font-medium"
              >
                Services
              </Link>
              <Link
                href="/gallery"
                className="text-charcoal hover:text-red-600 transition-colors font-medium"
              >
                Galerie
              </Link>
              <Link
                href="/about"
                className="text-charcoal hover:text-red-600 transition-colors font-medium"
              >
                À Propos
              </Link>
              <Link
                href="/devis"
                className="text-charcoal hover:text-red-600 transition-colors font-medium"
              >
                Devis Instantané
              </Link>
              <Link
                href="/contact"
                className="text-charcoal hover:text-red-600 transition-colors font-medium"
              >
                Contact
              </Link>
              <Button className="bg-red-600 hover:bg-red-700 text-white w-full shadow-lg">
                <Phone className="h-4 w-4 mr-2" />
                01 85 49 07 07
              </Button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
