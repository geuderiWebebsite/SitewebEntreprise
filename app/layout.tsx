import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Serrurier Paris - Dépannage 24h/24 - Intervention Rapide',
  description: 'Serrurier professionnel à Paris. Dépannage serrurerie 24h/24, ouverture de porte, installation serrures. Intervention rapide et tarifs transparents.',
  keywords: 'serrurier, Paris, dépannage, serrure, porte, urgence, 24h, ouverture, installation, sécurité',
  authors: [{ name: 'Serrurerie Expert Paris' }],
  openGraph: {
    title: 'Serrurier Paris - Dépannage 24h/24',
    description: 'Votre serrurier de confiance à Paris. Intervention rapide pour tous vos problèmes de serrurerie.',
    type: 'website',
    locale: 'fr_FR',
  },
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocksmithService',
              name: 'Serrurerie Expert Paris',
              description: 'Serrurier professionnel à Paris, dépannage 24h/24',
              url: 'https://votre-site-serrurier.fr',
              telephone: '+33 1 23 45 67 89',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '123 Rue de la Paix',
                addressLocality: 'Paris',
                postalCode: '75001',
                addressCountry: 'FR',
              },
              areaServed: {
                '@type': 'City',
                name: 'Paris',
              },
              openingHours: '24/7',
              priceRange: '€€',
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}