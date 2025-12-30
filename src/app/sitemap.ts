import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.sigmalabs.it'

  // Data fissa per lastModified (aggiorna solo quando cambi contenuti)
  const lastModified = new Date('2025-12-30')

  const routes = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/servizi`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/metodo`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/chi-siamo`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/progetti`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ]

  // TODO: Quando integri Sanity CMS, aggiungi pagine dinamiche
  // const projects = await client.fetch(`*[_type == "project"]{ slug, _updatedAt }`)
  // const dynamicRoutes = projects.map(project => ({
  //   url: `${baseUrl}/progetti/${project.slug.current}`,
  //   lastModified: new Date(project._updatedAt),
  //   changeFrequency: 'monthly' as const,
  //   priority: 0.7,
  // }))

  return routes
}
