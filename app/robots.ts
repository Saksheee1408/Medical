import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/_next/static/chunks/',
    },
    sitemap: 'https://joshimedical.com/sitemap.xml',
  };
}
