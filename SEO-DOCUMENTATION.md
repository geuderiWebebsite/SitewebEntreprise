# 🚀 Documentation SEO Complète - Next.js App Router

Ce projet contient un système SEO avancé et complet pour Next.js 14+ (App Router).

## 📁 Structure des Fichiers SEO

```
/app
  /seo
    seoConfig.ts          # Configuration et fonctions SEO centralisées
  /seo-example
    page.tsx              # Page exemple avec toutes les optimisations
  layout.tsx              # Layout principal avec SEO global
/middleware.ts            # Gestion headers SEO et redirections
/next-sitemap.config.js   # Configuration sitemap et robots.txt
```

---

## 🎯 Fonctionnalités Implémentées

### ✅ 1. Meta Tags Complets
- Title unique et descriptif
- Meta description optimisée (150-160 caractères)
- Keywords pertinents
- Canonical URL absolue
- Robots meta (index/noindex, follow/nofollow)
- Author et copyright

### ✅ 2. Open Graph & Twitter Cards
- `og:title`, `og:description`, `og:image`
- `og:type`, `og:url`, `og:site_name`
- `og:locale`, `og:published_time`, `og:modified_time`
- `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`
- Images optimisées (1200x630px)

### ✅ 3. Structured Data (JSON-LD)
Schemas implémentés :
- **Organization** - Informations entreprise
- **Website** - Configuration site web
- **LocalBusiness** - Entreprise locale
- **Article** - Articles de blog
- **BreadcrumbList** - Fil d'Ariane
- **FAQPage** - Questions fréquentes
- **Product** - Produits (si applicable)

### ✅ 4. Sitemap XML Avancé
- Génération automatique
- Segmentation par priorité
- Fréquence de mise à jour dynamique
- Support pagination
- Exclusion pages privées
- Sitemaps multiples (pages, blog, etc.)

### ✅ 5. Robots.txt Optimisé
- Policies par user-agent (Googlebot, Bingbot, etc.)
- Crawl delay configuré
- Disallow des pages privées
- Allow des ressources publiques
- Lien vers sitemap

### ✅ 6. Middleware SEO
- Redirections 301 automatiques
- Suppression des trailing slashes
- Headers X-Robots-Tag pour pages noindex
- Headers de sécurité (CSP, X-Frame-Options, etc.)
- Gestion hreflang

### ✅ 7. Core Web Vitals
- Optimisation next/font avec preload
- Preconnect DNS pour ressources externes
- Images optimisées avec next/image
- Code splitting automatique
- Static Site Generation (SSG)

### ✅ 8. Mobile & PWA
- Viewport responsive
- Theme color adaptatif (light/dark)
- Mobile web app capable
- Apple mobile web app status bar

### ✅ 9. Analytics & Tracking
- Google Tag Manager (GTM)
- Microsoft Clarity
- Google Analytics 4 (via GTM)
- Events tracking configurés

---

## 🔧 Utilisation du Système SEO

### Configuration Initiale

1. **Modifier `/app/seo/seoConfig.ts`** avec vos informations :

```typescript
export const SITE_CONFIG = {
  name: "Votre Entreprise",
  title: "Titre Principal",
  description: "Description de votre site",
  url: "https://votre-domaine.fr",
  phone: "01 23 45 67 89",
  email: "contact@votre-domaine.fr",
  // ... autres configurations
};
```

2. **Mettre à jour `/next-sitemap.config.js`** :

```javascript
siteUrl: "https://votre-domaine.fr",
```

3. **Configurer les IDs tracking** dans `/app/layout.tsx` :

```javascript
// Google Tag Manager
'GTM-XXXXXXX'

// Microsoft Clarity
'XXXXXXXXXX'
```

---

## 📝 Créer une Nouvelle Page avec SEO

### Méthode Simple (Pages Standards)

```typescript
import { Metadata } from "next";
import {
  generateSEOMetadata,
  mergeSEO,
  SITE_CONFIG,
} from "@/app/seo/seoConfig";

export async function generateMetadata(): Promise<Metadata> {
  return generateSEOMetadata(
    mergeSEO({
      title: "Mon Titre de Page",
      description: "Ma description optimisée pour le SEO",
      keywords: ["mot-clé", "seo", "next.js"],
      canonical: `${SITE_CONFIG.url}/ma-page`,
    })
  );
}

export default function MaPage() {
  return (
    <main>
      <h1>Mon Titre de Page</h1>
      {/* Contenu de la page */}
    </main>
  );
}
```

### Méthode Avancée (Avec JSON-LD)

```typescript
import {
  generateSEOMetadata,
  generateBreadcrumbSchema,
  generateArticleSchema,
  generateStructuredDataScript,
  SITE_CONFIG,
} from "@/app/seo/seoConfig";

const pageData = {
  title: "Mon Article de Blog",
  description: "Description de l'article",
  canonical: `${SITE_CONFIG.url}/blog/mon-article`,
  ogType: "article" as const,
  publishedTime: "2025-01-15T10:00:00.000Z",
  author: "Auteur",
  breadcrumbs: [
    { name: "Accueil", url: SITE_CONFIG.url },
    { name: "Blog", url: `${SITE_CONFIG.url}/blog` },
    { name: "Article", url: `${SITE_CONFIG.url}/blog/mon-article` },
  ],
};

export async function generateMetadata(): Promise<Metadata> {
  return generateSEOMetadata(pageData);
}

export default function BlogPost() {
  const breadcrumbSchema = generateBreadcrumbSchema(pageData.breadcrumbs);

  const articleSchema = generateArticleSchema({
    title: pageData.title,
    description: pageData.description,
    url: pageData.canonical,
    image: `${SITE_CONFIG.url}/blog-image.jpg`,
    publishedTime: pageData.publishedTime,
    author: pageData.author,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={generateStructuredDataScript([
          breadcrumbSchema,
          articleSchema,
        ])}
      />

      <article>
        {/* Contenu de l'article */}
      </article>
    </>
  );
}
```

---

## 🔍 Fonctions SEO Disponibles

### Génération de Métadonnées

#### `generateSEOMetadata(data: SEOPageData): Metadata`
Génère tous les meta tags pour une page.

```typescript
const metadata = generateSEOMetadata({
  title: "Mon Titre",
  description: "Ma description",
  keywords: ["mot1", "mot2"],
  canonical: "https://site.fr/page",
  noindex: false, // Optionnel
  nofollow: false, // Optionnel
  ogImage: "https://site.fr/image.jpg", // Optionnel
  ogType: "article", // Optionnel: "website" | "article"
});
```

### Schemas JSON-LD

#### `generateOrganizationSchema()`
Crée le schema Organization pour votre entreprise.

#### `generateWebSiteSchema()`
Crée le schema Website avec search action.

#### `generateArticleSchema(data)`
Pour les articles de blog.

```typescript
const schema = generateArticleSchema({
  title: "Titre Article",
  description: "Description",
  url: "https://site.fr/article",
  image: "https://site.fr/image.jpg",
  publishedTime: "2025-01-15T10:00:00Z",
  author: "Auteur",
  category: "Catégorie", // Optionnel
  tags: ["tag1", "tag2"], // Optionnel
});
```

#### `generateBreadcrumbSchema(breadcrumbs)`
Pour le fil d'Ariane.

```typescript
const schema = generateBreadcrumbSchema([
  { name: "Accueil", url: "https://site.fr" },
  { name: "Blog", url: "https://site.fr/blog" },
  { name: "Article", url: "https://site.fr/blog/article" },
]);
```

#### `generateLocalBusinessSchema(data)`
Pour les pages locales.

```typescript
const schema = generateLocalBusinessSchema({
  name: "Mon Entreprise",
  description: "Description",
  city: "Paris",
  latitude: 48.8566,
  longitude: 2.3522,
});
```

#### `generateFAQSchema(faqs)`
Pour les pages FAQ.

```typescript
const schema = generateFAQSchema([
  {
    question: "Question 1 ?",
    answer: "Réponse 1",
  },
  {
    question: "Question 2 ?",
    answer: "Réponse 2",
  },
]);
```

### Utilitaires

#### `generateCanonicalUrl(path: string): string`
Génère une URL canonique complète.

#### `getDefaultSEO(): SEOPageData`
Retourne les données SEO par défaut du site.

#### `mergeSEO(custom: Partial<SEOPageData>): SEOPageData`
Fusionne des données custom avec les valeurs par défaut.

#### `generateStructuredDataScript(data)`
Génère le script JSON-LD à injecter.

```typescript
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={generateStructuredDataScript(schemas)}
/>
```

---

## 🛠️ Configuration du Middleware

Le middleware gère automatiquement :
- ✅ Redirections 301 des anciennes URLs
- ✅ Suppression des trailing slashes
- ✅ Headers X-Robots-Tag pour pages noindex
- ✅ Headers de sécurité

### Ajouter une redirection 301

Modifier `/middleware.ts` :

```typescript
const permanentRedirects: Record<string, string> = {
  "/ancienne-url": "/nouvelle-url",
  "/old-page": "/new-page",
};
```

### Ajouter une page noindex

```typescript
const noindexPaths = [
  "/admin",
  "/private-page",
];
```

---

## 📊 Vérification SEO

### Outils de Test Recommandés

1. **Google Rich Results Test**
   - https://search.google.com/test/rich-results
   - Validation structured data

2. **Schema.org Validator**
   - https://validator.schema.org/
   - Validation JSON-LD

3. **PageSpeed Insights**
   - https://pagespeed.web.dev/
   - Core Web Vitals

4. **Google Search Console**
   - https://search.google.com/search-console
   - Suivi indexation et erreurs

5. **Screaming Frog SEO Spider**
   - Audit complet du site
   - Vérification liens, meta, etc.

### Checklist Avant Production

- [ ] Tous les meta tags sont présents
- [ ] Canonical URLs absolues
- [ ] Images Open Graph 1200x630px
- [ ] JSON-LD valides (Schema.org)
- [ ] Sitemap.xml accessible
- [ ] Robots.txt configuré
- [ ] Redirections 301 fonctionnelles
- [ ] Core Web Vitals optimisés
- [ ] Test mobile-friendly
- [ ] Analytics configurés

---

## 🚀 Génération du Sitemap

Après chaque build, générer le sitemap :

```bash
npm run build
npx next-sitemap
```

Le sitemap sera disponible à :
- `https://votre-site.fr/sitemap.xml`
- `https://votre-site.fr/robots.txt`

---

## 💡 Bonnes Pratiques SEO

### Titles
- **Longueur** : 50-60 caractères
- **Format** : `Titre Principal | Nom du Site`
- **Unique** pour chaque page

### Descriptions
- **Longueur** : 150-160 caractères
- **Incitation** à l'action
- **Mots-clés** principaux au début

### URLs
- **Propres** et **lisibles**
- **Sans trailing slash** (géré automatiquement)
- **Hiérarchie** logique

### Images
- **Alt text** descriptif
- **Dimensions** optimisées
- **Format** WebP recommandé
- **Lazy loading** activé

### Contenu
- **H1 unique** par page
- **Hiérarchie** Hn logique (H1 > H2 > H3)
- **Liens internes** pertinents
- **Contenu** de qualité (>300 mots)

---

## 🔒 Sécurité SEO

Headers de sécurité appliqués automatiquement :
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`
- `Referrer-Policy: strict-origin-when-cross-origin`

---

## 📈 Monitoring & Analytics

### Google Tag Manager
Configuré dans `/app/layout.tsx`.
Permet de gérer tous les tags sans modifier le code.

### Microsoft Clarity
Session recordings et heatmaps.

### Google Analytics 4
Tracking via GTM ou directement.

---

## 🆘 Support & Ressources

### Documentation Officielle
- [Next.js Metadata](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
- [next-sitemap](https://github.com/iamvishnusankar/next-sitemap)
- [Schema.org](https://schema.org/)

### Problèmes Courants

**Q : Le sitemap ne se génère pas**
R : Exécutez `npx next-sitemap` après `npm run build`

**Q : Les meta tags n'apparaissent pas**
R : Vérifiez que `generateMetadata` est bien exporté

**Q : Erreur TypeScript sur metadata**
R : Assurez-vous que tous les types sont corrects (`ogType: "article" as const`)

---

## 🎉 Conclusion

Ce système SEO est **production-ready** et inclut toutes les optimisations modernes pour un référencement optimal.

Pour toute question, consultez la page `/seo-example` qui montre tous les exemples d'utilisation.

**Bon référencement ! 🚀**
