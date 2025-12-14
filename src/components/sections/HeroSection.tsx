'use client'

import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { GlitchText } from '@/components/ui/GlitchText'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { FadeIn } from '@/components/animations'

const ParticleHero = dynamic(
  () => import('@/components/three/ParticleHero').then((mod) => mod.ParticleHero),
  { ssr: false, loading: () => null }
)

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
      <ParticleHero />
      {/* Atmosphere Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-radial-gradient from-transparent via-background/20 to-background/80" />
      
      <Container className="z-10 relative">
        <FadeIn delay={0.2}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
            <GlitchText trigger="hover" className="inline-block">We build</GlitchText>
            <span className="block text-primary text-glow mt-2">intelligent</span>
            <span className="block mt-2">digital experiences</span>
          </h1>
        </FadeIn>
        <FadeIn delay={0.4}>
          <p className="mt-8 text-xl md:text-2xl text-text-primary/90 max-w-3xl mx-auto font-medium leading-relaxed drop-shadow-md">
            Siti web · AI Agents · Sistemi RAG · App · Automazioni
          </p>
        </FadeIn>
        <FadeIn delay={0.6} className="mt-12 flex flex-col sm:flex-row justify-center gap-6">
          <Button asChild size="lg" className="text-lg px-8 py-6">
            <Link href="/progetti">Scopri cosa possiamo creare</Link>
          </Button>
          <Button asChild variant="secondary" size="lg" className="text-lg px-8 py-6">
            <Link href="/contatti">Configura Progetto →</Link>
          </Button>
        </FadeIn>
      </Container>
      
      {/* Scroll Indicator */}
      <FadeIn delay={1} className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-4 text-text-secondary/80">
          <span className="text-sm uppercase tracking-widest font-medium">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-primary/80 to-transparent" />
        </div>
      </FadeIn>
    </section>
  )
}