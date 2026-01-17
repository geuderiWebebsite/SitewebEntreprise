import { Metadata } from "next";

export const SITE_CONFIG = {
  name: "D'Clik Serrure",
  title: "Serrurier Paris - Dépannage 24h/24 - Intervention Rapide",
  description:
    "Serrurier professionnel à Paris et Île-de-France. Dépannage serrurerie 24h/24, ouverture de porte, installation serrures. Intervention rapide et tarifs transparents.",
  url: "https://www.dclik-serrure.com/",
  domain: "dclik-serrure.com",
  phone: "01 85 44 01 31",
  email: "contact@dclik-serrure.com",
  address: {
    streetAddress: "123 Rue de la Paix",
    addressLocality: "Paris",
    postalCode: "75001",
    addressCountry: "FR",
  },
  social: {
    twitter: "@dclikserrure",
    facebook: "https://facebook.com/dclikserrure",
    instagram: "https://instagram.com/dclikserrure",
  },
  languages: ["fr"],
  defaultLanguage: "fr",
} as const;

export interface SEOPageData {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  noindex?: boolean;
  nofollow?: boolean;
  ogImage?: string;
  ogType?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  category?: string;
  tags?: string[];
  breadcrumbs?: Array<{ name: string; url: string }>;
  structuredData?: Record<string, any>[];
}

export function generateCanonicalUrl(path: string): string {
  const cleanPath = path.replace(/\/$/, "");
  return `${SITE_CONFIG.url}${cleanPath}`;
}

export function generateSEOMetadata(data: SEOPageData): Metadata {
  const {
    title,
    description,
    keywords = [],
    canonical,
    noindex = false,
    nofollow = false,
    ogImage = `${SITE_CONFIG.url}/logo.jpg`,
    ogType = "website",
    publishedTime,
    modifiedTime,
    author,
  } = data;

  const fullTitle = title.includes(SITE_CONFIG.name)
    ? title
    : `${title} | ${SITE_CONFIG.name}`;

  const canonicalUrl = canonical || generateCanonicalUrl("/");

  const metadata: Metadata = {
    title: fullTitle,
    description,
    keywords: keywords.join(", "),
    authors: author ? [{ name: author }] : [{ name: SITE_CONFIG.name }],
    robots: {
      index: !noindex,
      follow: !nofollow,
      googleBot: {
        index: !noindex,
        follow: !nofollow,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: SITE_CONFIG.name,
      locale: "fr_FR",
      type: ogType as "website" | "article",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(publishedTime && ogType === "article" && { publishedTime }),
      ...(modifiedTime && ogType === "article" && { modifiedTime }),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
      creator: SITE_CONFIG.social.twitter,
      site: SITE_CONFIG.social.twitter,
    },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        fr: canonicalUrl,
      },
    },
    other: {
      "mobile-web-app-capable": "yes",
      "apple-mobile-web-app-capable": "yes",
      "apple-mobile-web-app-status-bar-style": "black-translucent",
    },
  };

  return metadata;
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocksmithService",
    "@id": `${SITE_CONFIG.url}/#organization`,
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/logo.jpg`,
    image: `${SITE_CONFIG.url}/logo.jpg`,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.address.streetAddress,
      addressLocality: SITE_CONFIG.address.addressLocality,
      postalCode: SITE_CONFIG.address.postalCode,
      addressCountry: SITE_CONFIG.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 48.8566,
      longitude: 2.3522,
    },
    areaServed: [
      {
        "@type": "City",
        name: "Paris",
      },
      {
        "@type": "City",
        name: "Île-de-France",
      },
    ],
    openingHours: "Mo-Su 00:00-23:59",
    priceRange: "€€",
    paymentAccepted: "Cash, Credit Card, Check",
    currenciesAccepted: "EUR",
    sameAs: [
      SITE_CONFIG.social.facebook,
      SITE_CONFIG.social.instagram,
      SITE_CONFIG.social.twitter,
      // Placeholder for future citations (to be populated by user)
      "https://www.pagesjaunes.fr/annuaire/paris-75/serrurerie",
      "https://fr.yelp.ca/paris",
      "https://fr.mappy.com/activite/serrurier",
      "https://www.linkedin.com/company/dclik-serrure",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services de serrurerie",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Ouverture de porte",
            description: "Ouverture de porte claquée ou fermée à clé",
            serviceType: "Emergency Locksmith",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Installation de serrure",
            description: "Installation de serrures multipoints A2P",
            serviceType: "Lock Installation",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Porte blindée",
            description: "Installation et dépannage de portes blindées",
            serviceType: "Security Door Installation",
          },
        },
      ],
    },
  };
}

export function generateBreadcrumbSchema(
  breadcrumbs: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
}

export function generateArticleSchema(data: {
  title: string;
  description: string;
  url: string;
  image: string;
  publishedTime: string;
  modifiedTime?: string;
  author: string;
  category?: string;
  tags?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: data.title,
    description: data.description,
    image: data.image,
    datePublished: data.publishedTime,
    dateModified: data.modifiedTime || data.publishedTime,
    author: {
      "@type": "Person",
      name: data.author,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_CONFIG.url}/logo.jpg`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": data.url,
    },
    ...(data.category && { articleSection: data.category }),
    ...(data.tags && { keywords: data.tags.join(", ") }),
  };
}

export function generateProductSchema(data: {
  name: string;
  description: string;
  image: string;
  price: number;
  currency?: string;
  availability?: string;
  rating?: number;
  reviewCount?: number;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: data.name,
    description: data.description,
    image: data.image,
    offers: {
      "@type": "Offer",
      price: data.price,
      priceCurrency: data.currency || "EUR",
      availability: data.availability || "https://schema.org/InStock",
      url: SITE_CONFIG.url,
    },
    ...(data.rating &&
      data.reviewCount && {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: data.rating,
        reviewCount: data.reviewCount,
      },
    }),
  };
}

export function generateFAQSchema(
  faqs: Array<{ question: string; answer: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateLocalBusinessSchema(data: {
  name: string;
  description: string;
  city: string;
  latitude?: number;
  longitude?: number;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "LocksmithService",
    name: `${data.name} - ${data.city}`,
    description: data.description,
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: data.city,
      addressCountry: "FR",
    },
    ...(data.latitude &&
      data.longitude && {
      geo: {
        "@type": "GeoCoordinates",
        latitude: data.latitude,
        longitude: data.longitude,
      },
    }),
    areaServed: {
      "@type": "City",
      name: data.city,
    },
    openingHours: "Mo-Su 00:00-23:59",
    priceRange: "€€",
  };
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_CONFIG.url}/#website`,
    url: SITE_CONFIG.url,
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    publisher: {
      "@id": `${SITE_CONFIG.url}/#organization`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_CONFIG.url}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function generateStructuredDataScript(
  data: Record<string, any> | Record<string, any>[]
) {
  const jsonLd = Array.isArray(data) ? data : [data];
  return {
    __html: JSON.stringify(jsonLd),
  };
}

export function getDefaultSEO(): SEOPageData {
  return {
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    keywords: [
      "serrurier",
      "Paris",
      "dépannage",
      "serrure",
      "porte",
      "urgence",
      "24h",
      "ouverture",
      "installation",
      "sécurité",
    ],
    canonical: SITE_CONFIG.url,
    ogImage: `${SITE_CONFIG.url}/logo.jpg`,
    breadcrumbs: [{ name: "Accueil", url: SITE_CONFIG.url }],
  };
}

export function mergeSEO(custom: Partial<SEOPageData>): SEOPageData {
  const defaultSEO = getDefaultSEO();
  return {
    ...defaultSEO,
    ...custom,
    keywords: [...(defaultSEO.keywords || []), ...(custom.keywords || [])],
  };
}
