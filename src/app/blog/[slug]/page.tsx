import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { FadeIn } from '@/components/animations'
import { client, urlFor } from '@/lib/sanity'
import { BlogPost } from '@/types/sanity'
import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import { Badge } from '@/components/ui/Badge'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { ArrowLeft } from 'lucide-react'

async function getBlogPost(slug: string) {
  const query = `*[_type == "blogPost" && slug.current == $slug][0] {
    title,
    excerpt,
    content,
    coverImage,
    publishedAt,
    categories,
    "author": author->{name, "imageUrl": image.asset->url}
  }`
  const data = await client.fetch(query, { slug })
  return data
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post: BlogPost = await getBlogPost(params.slug)

  if (!post) {
    return (
      <Section>
        <Container className="text-center">
          <h1 className="text-4xl font-bold">Post non trovato</h1>
          <Button asChild className="mt-8">
            <Link href="/blog">Torna al Blog</Link>
          </Button>
        </Container>
      </Section>
    )
  }

  return (
    <Section>
      <Container className="max-w-3xl mx-auto">
        <FadeIn>
          <Link href="/blog" className="flex items-center text-primary hover:underline mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Torna al Blog
          </Link>

          <h1 className="text-4xl font-bold">{post.title}</h1>
          <p className="mt-4 text-lg text-text-secondary">{post.excerpt}</p>

          <div className="flex items-center mt-6 text-sm text-text-muted">
            {post.author && (
              <div className="flex items-center">
                <Image
                  src={urlFor(post.author.imageUrl).url()}
                  alt={post.author.name || 'Author Image'}
                  width={32}
                  height={32}
                  className="rounded-full object-cover mr-3"
                />
                <span>{post.author.name}</span>
                <span className="mx-2">·</span>
              </div>
            )}
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt || '').toLocaleDateString('it-IT', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            {post.categories?.map((category) => (
              <Badge key={category} variant="secondary">
                {category}
              </Badge>
            ))}
          </div>

          <div className="relative aspect-video rounded-2xl overflow-hidden mt-12">
            <Image
              src={urlFor(post.coverImage).url()}
              alt={post.title || 'Blog Post Image'}
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
          </div>
        </FadeIn>

        <FadeIn>
          <div className="prose prose-invert max-w-none mt-16">
            <PortableText value={post.content || []} />
          </div>
        </FadeIn>
      </Container>
    </Section>
  )
}