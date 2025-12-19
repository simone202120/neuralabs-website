import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.neuralabs.it' // Replace with actual domain

  // Static pages
  const staticUrls = [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/servizi`, lastModified: new Date() },
    { url: `${baseUrl}/metodo`, lastModified: new Date() },
    { url: `${baseUrl}/chi-siamo`, lastModified: new Date() },
    { url: `${baseUrl}/contatti`, lastModified: new Date() },
  ]

  // TODO: Add dynamic pages when Sanity is integrated
  // const posts = await client.fetch(`*[_type == "blogPost"]{ ... }`)
  // const projects = await client.fetch(`*[_type == "project"]{ ... }`)

  return staticUrls
}
