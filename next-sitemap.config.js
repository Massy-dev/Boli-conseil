/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://boli-conseil-kth3.vercel.app/",
  generateRobotsTxt: true,
  changefreq: "monthly",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ["/admin", "/dashboard"],
};
