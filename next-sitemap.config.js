/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://votre-site-serrurier.fr",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: [
    "/serrurier-paris",
    "/serrurier-boulogne-billancourt",
    "/serrurier-neuilly",
    "/serrurier-vincennes",
    "/serrurier-saint-denis",
    "/serrurier-creteil",
    "/serrurier-montreuil",
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        disallow: [
          "/serrurier-paris",
          "/serrurier-boulogne-billancourt",
          "/serrurier-neuilly",
          "/serrurier-vincennes",
          "/serrurier-saint-denis",
          "/serrurier-creteil",
          "/serrurier-montreuil",
        ],
      },
    ],
  },
};
