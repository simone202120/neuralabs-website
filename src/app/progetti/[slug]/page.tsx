import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { FadeIn } from '@/components/animations'
import { client, urlFor } from '@/lib/sanity'
import { Project } from '@/types/sanity'
import Image from 'next/image'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'
import { PortableText } from '@portabletext/react'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import { Clock, Tag, ExternalLink } from 'lucide-react'

async function getProject(slug: string) {
  const query = `*[_type == "project" && slug.current == $slug][0] {
    title,
    description,
    content,
    coverImage,
    "imageUrl": coverImage.asset->url,
    gallery,
    "category": category,
    technologies,
    "hours": hoursSpent,
    clientName,
    liveUrl,
  }`
  const data = await client.fetch(query, { slug })
  return data
}

export default async function ProgettoDetailPage({ params }: { params: { slug: string } }) {
  const project: Project = await getProject(params.slug)

  if (!project) {
    return (
      <Section>
        <Container className="text-center">
          <h1 className="text-4xl font-bold">Progetto non trovato</h1>
          <Button asChild className="mt-8">
            <Link href="/progetti">Torna ai Progetti</Link>
          </Button>
        </Container>
      </Section>
    )
  }

  return (
    <Section>
      <Container>
        <FadeIn>
          <div className="relative aspect-video rounded-2xl overflow-hidden">
            <Image
              src={project.imageUrl || '/images/placeholder.svg'}
              alt={project.title || 'Project Cover Image'}
              fill
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover"
            />
          </div>

          <h1 className="text-4xl font-bold mt-12">{project.title}</h1>
          <p className="mt-4 text-lg text-text-secondary">{project.description}</p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="md:col-span-2">
            <FadeIn>
              <div className="prose prose-invert max-w-none">
                <PortableText value={project.content || []} />
              </div>
            </FadeIn>
          </div>
          <div>
            <FadeIn>
              <Card className="p-6">
                <h3 className="font-bold text-lg">Dettagli Progetto</h3>
                <ul className="mt-4 space-y-4 text-sm">
                  <li className="flex items-center">
                    <Tag className="h-4 w-4 mr-2 text-primary" />
                    <span>
                      <strong>Categoria:</strong>{' '}
                      <Badge variant={project.category}>{project.category?.replace('_', ' ')}</Badge>
                    </span>
                  </li>
                  <li className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-primary" />
                    <span>
                      <strong>Ore stimate:</strong> {project.hours}h
                    </span>
                  </li>
                  {project.liveUrl && (
                    <li className="flex items-center">
                      <ExternalLink className="h-4 w-4 mr-2 text-primary" />
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors"
                      >
                        Vedi il sito live
                      </a>
                    </li>
                  )}
                </ul>

                {project.technologies && (
                  <>
                    <h4 className="font-semibold mt-6">Tecnologie</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </>
                )}
              </Card>
            </FadeIn>
          </div>
        </div>

        {project.gallery && (
          <FadeIn className="mt-16">
            <h2 className="text-3xl font-bold text-center">Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              {project.gallery.map((image, index) => (
                <div key={index} className="relative aspect-video rounded-lg overflow-hidden">
                  <Image
                    src={urlFor(image).url()}
                    alt={`Gallery image ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </FadeIn>
        )}
      </Container>
    </Section>
  )
}