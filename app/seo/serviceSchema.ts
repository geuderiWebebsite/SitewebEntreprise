import { SITE_CONFIG } from "./seoConfig";

export function generateServiceSchema(data: {
    name: string;
    description: string;
    url?: string;
    serviceType: string;
    providerName?: string;
    areaServed?: string;
    offers?: {
        price: string | number;
        priceCurrency: string;
        description?: string;
    };
}) {
    return {
        "@context": "https://schema.org",
        "@type": "Service",
        name: data.name,
        description: data.description,
        provider: {
            "@type": "LocalBusiness",
            name: data.providerName || SITE_CONFIG.name,
            telephone: SITE_CONFIG.phone,
            address: {
                "@type": "PostalAddress",
                addressLocality: "Paris", // Default base
                addressCountry: "FR",
            },
        },
        serviceType: data.serviceType,
        areaServed: {
            "@type": "City",
            name: data.areaServed || "Paris",
        },
        ...(data.url && { url: data.url }),
        ...(data.offers && {
            offers: {
                "@type": "Offer",
                price: data.offers.price,
                priceCurrency: data.offers.priceCurrency || "EUR",
                description: data.offers.description,
            },
        }),
    };
}
