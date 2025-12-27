'use client'

import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { FadeIn } from '@/components/animations'
import { useEffect, useState, useMemo } from 'react'

const ParticleHero = dynamic(
  () => import('@/components/three/ParticleHero').then((mod) => mod.ParticleHero),
  { ssr: false, loading: () => null }
)

const words = ["chi Innova.", "chi Cresce.", "chi Crea."]

function Typewriter({ text, speed = 50 }: { text: string, speed?: number }) {
  const [displayText, setDisplayText] = useState('')
  const [index, setIndex] = useState(0)

  useEffect(() => {
    setDisplayText('')
    setIndex(0)
  }, [text])

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text.charAt(index))
        setIndex(prev => prev + 1)
      }, speed)
      return () => clearTimeout(timeout)
    }
  }, [index, text, speed])

  return (
    <span>
      {displayText}
      <span className="animate-pulse ml-1 inline-block w-3 h-12 bg-black dark:bg-white align-middle" />
    </span>
  )
}

export function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0)

  // Calculate the longest word to reserve space and prevent layout shift
  const longestWord = useMemo(() => {
    return words.reduce((a, b) => a.length > b.length ? a : b, "")
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length)
    }, 4000) // Change word every 4 seconds
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-[80vh] md:min-h-screen flex flex-col justify-center pt-20 md:pt-32 pb-8 md:pb-12 overflow-hidden">
      <ParticleHero />
      
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-background/80 via-background/40 to-transparent" />
      
      <Container className="z-10 relative">
        <div className="max-w-4xl">
          <FadeIn delay={0.2}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface/50 backdrop-blur-md border border-white/10 text-sm font-medium text-primary mb-4 md:mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              SigmaLabs Intelligence v1.0
            </div>
          </FadeIn>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold tracking-tight leading-tight min-h-[120px] sm:min-h-[160px] md:min-h-[200px]">
            <FadeIn delay={0.4}>
              <span className="block text-text-primary mb-2">Tecnologia per</span>
            </FadeIn>
            <span className="block font-mono mt-2 md:mt-4 relative">
              {/* Invisible placeholder to reserve space and prevent layout shift */}
              <span className="invisible" aria-hidden="true">
                {longestWord}
                <span className="inline-block w-3 h-12 align-middle ml-1" />
              </span>
              
              {/* Actual Typewriter positioned absolutely over the placeholder */}
              <span className="absolute top-0 left-0 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-primary">
                <Typewriter text={words[wordIndex]} key={wordIndex} />
              </span>
            </span>
          </h1>

          <FadeIn delay={0.5}>
            <p className="text-lg sm:text-xl md:text-2xl text-text-secondary/90 mt-6 md:mt-8 max-w-3xl leading-relaxed">
              Sviluppiamo piattaforme web scalabili e sistemi AI che automatizzano processi, riducono costi e migliorano le performance.
            </p>
          </FadeIn>

          <FadeIn delay={0.6} className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-5">
            <Button asChild size="lg" className="text-lg px-8 h-12 md:h-14 rounded-full">
              <Link href="/progetti">Inizia Ora</Link>
            </Button>
            <Button asChild variant="ghost" size="lg" className="text-lg px-8 h-12 md:h-14 rounded-full border border-white/10 hover:bg-white/5">
              <Link href="/contatti">Contatta il Team →</Link>
            </Button>
          </FadeIn>
        </div>
      </Container>
    </section>
  )
}