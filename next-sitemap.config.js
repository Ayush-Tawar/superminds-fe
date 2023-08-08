/* eslint-disable no-undef */
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://superminds.dev/",
  changefreq: "daily",
  priority: 0.7,
  sitemapSize: 5000,
  generateRobotsTxt: true,
  // exclude: ["/protected-page", "/awesome/secret-page"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "*",
        disallow: [
          "/_next",
          "/manager",
          "/api-docs",
          "/cdn-cgi",
          "/login",
          "/auth",
          "/auth/signin",
          "/assets",
        ],
      },
      // {
      //   userAgent: "*",
      //   allow: ["/path", "/path-2"],
      // },
      // {
      //   userAgent: "black-listed-bot",
      //   disallow: ["/sub-path-1", "/path-2"],
      // },
    ],
  },
};
