import { Metadata } from "next";
import {
  generateSEOMetadata,
  generateBreadcrumbSchema,
  generateArticleSchema,
  generateOrganizationSchema,
  generateStructuredDataScript,
  SITE_CONFIG,
  mergeSEO,
} from "@/app/seo/seoConfig";

const pageData = {
  title: "Exemple de Page SEO Optimisée",
  description:
    "Cette page démontre toutes les optimisations SEO avancées : meta tags, JSON-LD, breadcrumbs, canonical, OpenGraph et plus encore.",
  keywords: [
    "exemple",
    "SEO",
    "optimisation",
    "Next.js",
    "meta tags",
    "structured data",
  ],
  canonical: `${SITE_CONFIG.url}/seo-example`,
  ogImage: `${SITE_CONFIG.url}/logo.jpg`,
  ogType: "article" as const,
  publishedTime: "2025-01-15T10:00:00.000Z",
  modifiedTime: "2025-01-15T12:00:00.000Z",
  author: "D'Clik Serrure",
  category: "Guide SEO",
  tags: ["SEO", "Next.js", "Tutorial"],
  breadcrumbs: [
    { name: "Accueil", url: SITE_CONFIG.url },
    { name: "Exemple SEO", url: `${SITE_CONFIG.url}/seo-example` },
  ],
};

export async function generateMetadata(): Promise<Metadata> {
  return generateSEOMetadata(pageData);
}

export default function SEOExamplePage() {
  const breadcrumbSchema = generateBreadcrumbSchema(pageData.breadcrumbs);

  const articleSchema = generateArticleSchema({
    title: pageData.title,
    description: pageData.description,
    url: pageData.canonical,
    image: pageData.ogImage,
    publishedTime: pageData.publishedTime,
    modifiedTime: pageData.modifiedTime,
    author: pageData.author,
    category: pageData.category,
    tags: pageData.tags,
  });

  const organizationSchema = generateOrganizationSchema();

  const allSchemas = [organizationSchema, breadcrumbSchema, articleSchema];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={generateStructuredDataScript(allSchemas)}
      />

      <div className="min-h-screen bg-white">
        <nav className="bg-gray-100 py-4 px-6">
          <div className="max-w-7xl mx-auto">
            <ol className="flex items-center space-x-2 text-sm">
              {pageData.breadcrumbs.map((crumb, index) => (
                <li key={index} className="flex items-center">
                  {index > 0 && <span className="mx-2 text-gray-400">/</span>}
                  <a
                    href={crumb.url}
                    className={
                      index === pageData.breadcrumbs.length - 1
                        ? "text-gray-900 font-semibold"
                        : "text-blue-600 hover:underline"
                    }
                  >
                    {crumb.name}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </nav>

        <main className="max-w-4xl mx-auto px-6 py-12">
          <article>
            <header className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {pageData.title}
              </h1>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <time dateTime={pageData.publishedTime}>
                  Publié le {new Date(pageData.publishedTime).toLocaleDateString("fr-FR")}
                </time>
                <span>•</span>
                <span>Par {pageData.author}</span>
                {pageData.category && (
                  <>
                    <span>•</span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                      {pageData.category}
                    </span>
                  </>
                )}
              </div>
            </header>

            <div className="prose prose-lg max-w-none">
              <p className="lead text-xl text-gray-700 mb-6">
                {pageData.description}
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Optimisations SEO Implémentées
              </h2>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6">
                <h3 className="font-bold text-green-900 mb-2">✓ Meta Tags Complets</h3>
                <ul className="text-green-800 space-y-1">
                  <li>Title unique et descriptif</li>
                  <li>Meta description optimisée</li>
                  <li>Keywords pertinents</li>
                  <li>Canonical URL absolue</li>
                  <li>Robots meta (index/noindex)</li>
                </ul>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                <h3 className="font-bold text-blue-900 mb-2">
                  ✓ Open Graph & Twitter Cards
                </h3>
                <ul className="text-blue-800 space-y-1">
                  <li>og:title, og:description, og:image</li>
                  <li>og:type, og:url, og:site_name</li>
                  <li>twitter:card, twitter:title, twitter:image</li>
                  <li>Optimisé pour le partage social</li>
                </ul>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-6">
                <h3 className="font-bold text-purple-900 mb-2">
                  ✓ Structured Data (JSON-LD)
                </h3>
                <ul className="text-purple-800 space-y-1">
                  <li>Organization Schema</li>
                  <li>Article Schema</li>
                  <li>BreadcrumbList Schema</li>
                  <li>LocalBusiness Schema</li>
                  <li>FAQ Schema (si applicable)</li>
                </ul>
              </div>

              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-6">
                <h3 className="font-bold text-orange-900 mb-2">
                  ✓ Optimisations Techniques
                </h3>
                <ul className="text-orange-800 space-y-1">
                  <li>Middleware pour redirections 301</li>
                  <li>Suppression automatique des / finaux</li>
                  <li>Headers X-Robots-Tag pour pages noindex</li>
                  <li>Headers de sécurité (CSP, X-Frame-Options)</li>
                  <li>Support hreflang multilingue</li>
                </ul>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
                <h3 className="font-bold text-red-900 mb-2">
                  ✓ Core Web Vitals
                </h3>
                <ul className="text-red-800 space-y-1">
                  <li>next/font pour optimisation des fonts</li>
                  <li>Preload des ressources critiques</li>
                  <li>Images optimisées avec next/image</li>
                  <li>Code splitting automatique</li>
                  <li>Static Site Generation (SSG)</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Comment Utiliser ce Système
              </h2>

              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">
                  1. Importer les fonctions SEO
                </h3>
                <pre className="bg-gray-800 text-green-400 p-4 rounded overflow-x-auto text-sm">
{`import {
  generateSEOMetadata,
  generateBreadcrumbSchema,
  generateArticleSchema,
  SITE_CONFIG,
} from "@/app/seo/seoConfig";`}
                </pre>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg mt-4">
                <h3 className="font-bold text-gray-900 mb-3">
                  2. Définir les données de la page
                </h3>
                <pre className="bg-gray-800 text-green-400 p-4 rounded overflow-x-auto text-sm">
{`const pageData = {
  title: "Mon Titre",
  description: "Ma description",
  keywords: ["mot-clé", "seo"],
  canonical: \`\${SITE_CONFIG.url}/ma-page\`,
};`}
                </pre>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg mt-4">
                <h3 className="font-bold text-gray-900 mb-3">
                  3. Générer les metadata
                </h3>
                <pre className="bg-gray-800 text-green-400 p-4 rounded overflow-x-auto text-sm">
{`export async function generateMetadata(): Promise<Metadata> {
  return generateSEOMetadata(pageData);
}`}
                </pre>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg mt-4">
                <h3 className="font-bold text-gray-900 mb-3">
                  4. Ajouter les JSON-LD schemas
                </h3>
                <pre className="bg-gray-800 text-green-400 p-4 rounded overflow-x-auto text-sm">
{`<script
  type="application/ld+json"
  dangerouslySetInnerHTML={generateStructuredDataScript(schemas)}
/>`}
                </pre>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Vérification SEO
              </h2>

              <p className="text-gray-700">
                Pour vérifier que tout fonctionne correctement, utilisez ces outils :
              </p>

              <ul className="list-disc list-inside space-y-2 text-gray-700 mt-4">
                <li>
                  <a
                    href="https://search.google.com/test/rich-results"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Google Rich Results Test
                  </a>{" "}
                  - Validation des structured data
                </li>
                <li>
                  <a
                    href="https://validator.schema.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Schema.org Validator
                  </a>{" "}
                  - Validation JSON-LD
                </li>
                <li>
                  <a
                    href="https://pagespeed.web.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    PageSpeed Insights
                  </a>{" "}
                  - Core Web Vitals
                </li>
                <li>
                  <a
                    href="https://search.google.com/search-console"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Google Search Console
                  </a>{" "}
                  - Suivi indexation
                </li>
              </ul>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mt-8">
                <h3 className="font-bold text-yellow-900 mb-2">
                  💡 Conseil Pro
                </h3>
                <p className="text-yellow-800">
                  Testez toujours vos pages avec les outils Google avant la mise
                  en production. Vérifiez que tous les schemas JSON-LD sont valides
                  et que les meta tags sont correctement générés.
                </p>
              </div>
            </div>

            {pageData.tags && pageData.tags.length > 0 && (
              <footer className="mt-12 pt-6 border-t border-gray-200">
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm font-semibold text-gray-700">Tags:</span>
                  {pageData.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </footer>
            )}
          </article>
        </main>
      </div>
    </>
  );
}
