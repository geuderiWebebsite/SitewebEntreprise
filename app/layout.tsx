import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import {
  generateSEOMetadata,
  generateOrganizationSchema,
  generateWebSiteSchema,
  generateStructuredDataScript,
  getDefaultSEO,
} from "@/app/seo/seoConfig";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-inter",
});

export const metadata: Metadata = generateSEOMetadata(getDefaultSEO());

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebSiteSchema();
  const schemas = [organizationSchema, websiteSchema];

  return (
    <html lang="fr" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.clarity.ms" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={generateStructuredDataScript(schemas)}
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

        {/* --- Google Ads Conversion Linker --- */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17860666652"
          strategy="afterInteractive"
        />
        <Script id="google-ads-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17860666652');
          `}
        </Script>
        {/* --- Fin Google Ads --- */}
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
