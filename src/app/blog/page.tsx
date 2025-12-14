

import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { FadeIn, StaggerContainer } from '@/components/animations'
import { Card } from '@/components/ui/Card'
import { client, urlFor } from '@/lib/sanity'
import { BlogPost } from '@/types/sanity'
import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '@/components/ui/Badge'

async function getBlogPosts() {
  const query = `*[_type == "blogPost"] | order(publishedAt desc) {
    title,
    "slug": slug.current,
    excerpt,
    "imageUrl": coverImage.asset->url,
    publishedAt,
    categories,
  }`
  const data = await client.fetch(query)
  return data
}

export default async function BlogPage() {
  const posts: BlogPost[] = await getBlogPosts()

  return (
    <Section>
      <Container>
        <FadeIn>
          <h1 className="text-4xl font-bold text-center">Il Nostro Blog</h1>
          <p className="mt-4 text-lg text-text-secondary text-center max-w-2xl mx-auto">
            Approfondimenti, guide e notizie dal mondo dello sviluppo web e dell&apos;intelligenza artificiale.
          </p>
        </FadeIn>

        <StaggerContainer
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
          staggerDelay={0.2}
        >
          {posts.map((post) => (
            <FadeIn key={post.slug?.current}>
              <Link href={`/blog/${post.slug?.current}`}>
                <Card className="group h-full overflow-hidden">
                  <div className="relative aspect-video">
                    <Image
                      src={urlFor(post.coverImage).url()}
                      alt={post.title || 'Blog Post Image'}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-text-muted">
                      {new Date(post.publishedAt || '').toLocaleDateString('it-IT', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                    <h3 className="mt-2 font-bold text-xl">{post.title}</h3>
                    <p className="mt-2 text-sm text-text-secondary">{post.excerpt}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {post.categories?.map((category) => (
                        <Badge key={category} variant="secondary">
                          {category}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </Link>
            </FadeIn>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  )
}