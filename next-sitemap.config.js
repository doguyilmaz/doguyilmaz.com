/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://doguyilmaz.com',
  generateRobotsTxt: true, // (optional)
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/api/og/*',
      },
    ],
  },
  // ...other options
};
