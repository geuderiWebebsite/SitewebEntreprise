import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Serrurier Paris - Dépannage 24h/24 - Intervention Rapide",
  description:
    "Serrurier professionnel à Paris. Dépannage serrurerie 24h/24, ouverture de porte, installation serrures. Intervention rapide et tarifs transparents.",
  keywords:
    "serrurier, Paris, dépannage, serrure, porte, urgence, 24h, ouverture, installation, sécurité",
  authors: [{ name: "Serrurerie Expert Paris" }],
  openGraph: {
    title: "Serrurier Paris - Dépannage 24h/24",
    description:
      "Votre serrurier de confiance à Paris. Intervention rapide pour tous vos problèmes de serrurerie.",
    type: "website",
    locale: "fr_FR",
  },
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        {/* --- Balise JSON-LD --- */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocksmithService",
              name: "Serrurerie Expert Paris",
              description: "Serrurier professionnel à Paris, dépannage 24h/24",
              url: "https://votre-site-serrurier.fr",
              telephone: "+33 1 23 45 67 89",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Rue de la Paix",
                addressLocality: "Paris",
                postalCode: "75001",
                addressCountry: "FR",
              },
              areaServed: {
                "@type": "City",
                name: "Paris",
              },
              openingHours: "24/7",
              priceRange: "€€",
            }),
          }}
        />

        {/* --- Google Tag Manager --- */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PQCSB2G6');
          `}
        </Script>
        {/* --- Fin Google Tag Manager --- */}

        {/* --- Microsoft Clarity --- */}
        <Script id="clarity-script" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "tp14yye93b");
          `}
        </Script>
        {/* --- Fin Microsoft Clarity --- */}

        {/* --- Google Analytics 4 (optionnel si non géré via GTM) --- */}
        {/*
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-LNWV5ZSWVR"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LNWV5ZSWVR');
          `}
        </Script>
        */}
        {/* --- Fin Google Analytics 4 --- */}
      </head>

      <body className={inter.className}>
        {/* --- Google Tag Manager (noscript) --- */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PQCSB2G6"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* --- Fin Google Tag Manager (noscript) --- */}

        {children}
      </body>
    </html>
  );
}
