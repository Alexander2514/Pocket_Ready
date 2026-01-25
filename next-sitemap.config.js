/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://pocket-ready.com',
  generateRobotsTxt: true, 
  exclude: ['/server-sitemap.xml'], 
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://pocket-ready.com/server-sitemap.xml', 
    ],
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: 'Googlebot', allow: '/' },
    ],
  },
}