import { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { FadeIn } from '@/components/animations/FadeIn'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'I Nostri Progetti | Portfolio & Case Study',
  description: 'Esplora i progetti sviluppati da SigmaLabs: web app moderne con Next.js, AI agents, sistemi RAG e automazioni per aziende italiane.',
  alternates: {
    canonical: 'https://www.sigmalabs.it/progetti',
  },
  openGraph: {
    title: 'Portfolio SigmaLabs | Progetti Web & AI',
    description: 'Case study e progetti realizzati: web app, AI agents, automazioni intelligenti.',
    url: 'https://www.sigmalabs.it/progetti',
  },
}

export default function ProjectsPage() {
  return (
    <Section className="min-h-[80vh] flex items-center justify-center">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              I Nostri <span className="text-primary">Progetti</span>
            </h1>
            <p className="text-lg text-text-secondary mb-8">
              Stiamo lavorando duramente per raccogliere e presentare i nostri migliori casi studio.
              Tornate a trovarci presto per vedere come trasformiamo le idee in realtà digitale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="secondary">
                <Link href="/">Torna alla Home</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </Container>
    </Section>
  )
}
