'use client'

import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { FadeIn } from '@/components/animations'
import Link from 'next/link'

export function CTASection() {
  return (
    <Section className="bg-gradient-to-br from-surface to-charcoal border-t border-border">
      <Container className="text-center">
        <FadeIn>
          <h2 className="text-3xl font-bold">Hai un&apos;idea? Parliamone.</h2>
          <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
            Siamo qui per trasformare le tue visioni in realtà digitali intelligenti.
          </p>
        </FadeIn>
        <FadeIn delay={0.2} className="mt-10 flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/contatti">Calcola preventivo</Link>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <Link href="/contatti">Chatta con l&apos;AI</Link>
          </Button>
        </FadeIn>
      </Container>
    </Section>
  )
}
