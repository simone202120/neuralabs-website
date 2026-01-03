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

const words = ["Applicazioni Web.", "Automazioni AI.", "Tue Soluzioni."]

function Typewriter({ words, startDelay = 2500 }: { words: string[], startDelay?: number }) {
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasStarted(true)
    }, startDelay)
    return () => clearTimeout(timer)
  }, [startDelay])

  useEffect(() => {
    if (!hasStarted) return

    const handleTyping = () => {
      const i = loopNum % words.length
      const fullText = words[i]

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      )

      // Typing Speed Logic
      let speed = 80 // Base typing speed

      if (isDeleting) {
        speed = 40 // Deleting speed (faster)
      }

      // Logic for switching states
      if (!isDeleting && text === fullText) {
        // Finished typing word
        speed = 1200 // Pause before deleting (reduced from ~4s/2s)
        setIsDeleting(true)
      } else if (isDeleting && text === '') {
        // Finished deleting
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
        speed = 200 // Pause before starting next word (very short for fluidity)
      }

      setTypingSpeed(speed)
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [text, isDeleting, loopNum, typingSpeed, words, hasStarted])

  return (
    <span>
      {text}
      <span className="animate-pulse ml-1 inline-block w-3 h-8 md:h-12 bg-black dark:bg-white align-middle" />
    </span>
  )
}

export function HeroSection() {
  
  // Calculate the longest word to reserve space
  const longestWord = useMemo(() => {
    return words.reduce((a, b) => a.length > b.length ? a : b, "")
  }, [])

  return (
    <section className="relative min-h-[90dvh] md:min-h-screen flex flex-col justify-center pt-24 md:pt-32 pb-12 md:pb-12 overflow-hidden">
      <ParticleHero />

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-background/80 via-background/40 to-transparent" />

      <Container className="z-10 relative">
        <div className="max-w-5xl">
          <FadeIn delay={0.2}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface/50 backdrop-blur-md border border-white/10 text-sm font-medium text-primary mb-6 md:mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              SigmaLabs Intelligence v1.0
            </div>
          </FadeIn>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight leading-[1.1] min-h-[140px] sm:min-h-[160px] md:min-h-[220px]">
            <FadeIn delay={0.4}>
              <span className="block text-text-primary mb-2 md:mb-4">Il Laboratorio delle</span>
            </FadeIn>
            <span className="block font-mono mt-2 md:mt-4 relative">
              {/* Invisible placeholder to reserve space and prevent layout shift */}
              <span className="invisible" aria-hidden="true">
                {longestWord}
                <span className="inline-block w-3 h-8 md:h-12 align-middle ml-1" />
              </span>

              {/* Actual Typewriter positioned absolutely over the placeholder */}
              <span className="absolute top-0 left-0 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-primary">
                <Typewriter words={words} startDelay={2500} />
              </span>
            </span>
          </h1>

          <FadeIn delay={0.5}>
            <p className="text-lg sm:text-xl md:text-2xl text-text-secondary/90 mt-8 md:mt-10 max-w-3xl leading-relaxed">
              Non solo codice, ma crescita. Progettiamo piattaforme digitali e sistemi intelligenti costruiti su misura per far scalare il tuo business.
            </p>
          </FadeIn>

          <FadeIn delay={0.6} className="mt-10 md:mt-12 flex flex-col sm:flex-row gap-5">
            <Button asChild size="lg" className="text-lg px-8 h-12 md:h-14 rounded-full">
              <Link href="/servizi">Esplora le Soluzioni</Link>
            </Button>
            <Button asChild variant="ghost" size="lg" className="text-lg px-8 h-12 md:h-14 rounded-full border border-white/10 hover:bg-white/5">
              <Link href="/chi-siamo">Il Laboratorio →</Link>
            </Button>
          </FadeIn>
        </div>
      </Container>
    </section>
  )
}
