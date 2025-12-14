import { MetadataRoute } from 'next'
import { client } from '@/lib/sanity'
import { BlogPost, Project } from '@/types/sanity'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.neuralabs.it' // Replace with actual domain

  const posts: BlogPost[] = await client.fetch(`*[_type == "blogPost"]{ "slug": slug.current, "_updatedAt": _updatedAt }`)
  const projects: Project[] = await client.fetch(`*[_type == "project"]{ "slug": slug.current, "_updatedAt": _updatedAt }`)

  const postUrls = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug?.current}`,
    lastModified: new Date(post._updatedAt || new Date()),
  }))

  const projectUrls = projects.map((project) => ({
    url: `${baseUrl}/progetti/${project.slug?.current}`,
    lastModified: new Date(project._updatedAt || new Date()),
  }))

  const staticUrls = [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/servizi`, lastModified: new Date() },
    { url: `${baseUrl}/progetti`, lastModified: new Date() },
    { url: `${baseUrl}/blog`, lastModified: new Date() },
    { url: `${baseUrl}/chi-siamo`, lastModified: new Date() },
    { url: `${baseUrl}/contatti`, lastModified: new Date() },
  ]

  return [...staticUrls, ...postUrls, ...projectUrls]
}
