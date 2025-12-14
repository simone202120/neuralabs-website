import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/studio/', // Assuming Sanity Studio is at /studio
    },
    sitemap: 'https://www.neuralabs.it/sitemap.xml', // Replace with actual domain
  }
}
