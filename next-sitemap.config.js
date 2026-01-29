/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://www.dclik-serrure.com/",
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  sitemapSize: 5000,
  changefreq: "daily",
  priority: 0.7,
  exclude: [
    "/serrurier-boulogne-billancourt",
    "/serrurier-neuilly",
    "/serrurier-vincennes",
    "/serrurier-saint-denis",
    "/serrurier-montreuil",
    "/serrurier-clichy",
    "/serrurier-valenton",
    "/serrurier-bonneuil-sur-marne",
    "/serrurier-limeil-brevannes",
    "/serrurier-brunoy",
    "/serrurier-montgeron",
    "/serrurier-vigneux-sur-seine",
    "/serrurier-villeneuve-saint-georges",
    "/serrurier-boissy-saint-leger",
    "/serrurier-choisy-le-roi",
    "/serrurier-draveil",
    "/serrurier-thiais",
    "/serrurier-charenton-le-pont",
    "/api/*",
    "/admin/*",
    "/404",
    "/500",
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/serrurier-boulogne-billancourt",
          "/serrurier-neuilly",
          "/serrurier-vincennes",
          "/serrurier-saint-denis",
          "/serrurier-montreuil",
          "/serrurier-clichy",
          "/api/*",
          "/admin/*",
        ],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: [
          "/serrurier-boulogne-billancourt",
          "/serrurier-neuilly",
          "/serrurier-vincennes",
          "/serrurier-saint-denis",
          "/serrurier-montreuil",
          "/serrurier-clichy",
          "/api/*",
          "/admin/*",
        ],
        crawlDelay: 0,
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/api/*", "/admin/*"],
        crawlDelay: 1,
      },
    ],
    additionalSitemaps: [
      "https://www.dclik-serrure.com/sitemap-pages.xml",
      "https://www.dclik-serrure.com/sitemap-blog.xml",
    ],
  },
  transform: async (config, path) => {
    let priority = config.priority;
    let changefreq = config.changefreq;

    if (path === "/") {
      priority = 1.0;
      changefreq = "daily";
    } else if (path.startsWith("/services")) {
      priority = 0.9;
      changefreq = "weekly";
    } else if (path.startsWith("/blog")) {
      priority = 0.8;
      changefreq = "weekly";
    } else if (path.startsWith("/about") || path.startsWith("/contact")) {
      priority = 0.6;
      changefreq = "monthly";
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
  additionalPaths: async (config) => {
    const result = [];

    result.push({
      loc: "/",
      changefreq: "daily",
      priority: 1.0,
      lastmod: new Date().toISOString(),
    });

    const pages = [
      "/services",
      "/about",
      "/contact",
      "/devis",
      "/urgence",
      "/tarifs",
      "/gallery",
      "/blog",
      "/test-securite",
      "/serrurier-creteil-et-alentours",
    ];

    pages.forEach((page) => {
      result.push({
        loc: page,
        changefreq: "weekly",
        priority: 0.8,
        lastmod: new Date().toISOString(),
      });
    });

    return result;
  },
};
