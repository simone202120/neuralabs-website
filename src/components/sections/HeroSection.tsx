'use client'

import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { FadeIn } from '@/components/animations'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const ParticleHero = dynamic(
  () => import('@/components/three/ParticleHero').then((mod) => mod.ParticleHero),
  { ssr: false, loading: () => null }
)

const words = ["an Intelligence Engine", "an Autonomous System", "a Digital Leader"]

function Typewriter({ text, speed = 50, delay = 1000 }: { text: string, speed?: number, delay?: number }) {
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
      <span className="animate-pulse ml-1 inline-block w-3 h-12 bg-primary align-middle" />
    </span>
  )
}

export function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0)

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

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold tracking-tight leading-tight min-h-[160px] sm:min-h-[220px] md:min-h-[300px]">
            <FadeIn delay={0.4}>
              <span className="block text-text-primary">Transform your</span>
              <span className="block text-text-primary mb-2">business into</span>
            </FadeIn>
            <span className="block text-primary font-mono mt-2 md:mt-4">
              <Typewriter text={words[wordIndex]} key={wordIndex} />
            </span>
          </h1>

          <FadeIn delay={0.6} className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-5">
            <Button asChild size="lg" className="text-lg px-8 h-12 md:h-14 rounded-full">
              <Link href="/progetti">Start Evolution</Link>
            </Button>
            <Button asChild variant="ghost" size="lg" className="text-lg px-8 h-12 md:h-14 rounded-full border border-white/10 hover:bg-white/5">
              <Link href="/contatti">Chat with AI →</Link>
            </Button>
          </FadeIn>
        </div>
      </Container>
    </section>
  )
}