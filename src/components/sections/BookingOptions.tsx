'use client'

import { useRef } from 'react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Coffee, Rocket, CheckCircle2, Clock, Zap } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const features = {
  discovery: [
    "Prima analisi fattibilità tecnica",
    "Discussione requisiti essenziali",
    "Stima macro tempi e budget",
    "Nessun impegno o costo"
  ],
  strategy: [
    "Esci con roadmap chiara",
    "Sai esattamente cosa costruirai",
    "Hai budget e tempi certi",
    "Pronto per prendere decisioni"
  ]
}

export function BookingOptions() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])

  return (
    <Section id="booking" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-background pointer-events-none -z-20" />
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2 pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-violet-500/5 rounded-full blur-[120px] translate-y-1/3 translate-x-1/3 pointer-events-none -z-10" />

      <Container ref={containerRef}>
        <div className="mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4 text-primary font-mono text-xs tracking-widest uppercase">
              <Rocket className="w-4 h-4" />
              <span>START HERE</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-slate-900 dark:text-white">
              In 15 Minuti Capisci <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
                Se Siamo il Partner Giusto
              </span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-gray-300 leading-relaxed max-w-3xl">
              Due modi per iniziare: una call informale gratuita per esplorare l'idea,
              oppure un kickoff strategico per partire subito con roadmap e stime concrete.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 max-w-5xl mx-auto relative z-10">
          
          {/* Card 1: Discovery */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl" />
            <div className="relative h-full flex flex-col p-8 md:p-10 rounded-3xl border border-border/50 bg-surface/50 backdrop-blur-md hover:border-cyan-500/30 transition-colors duration-300">
              
              {/* Header */}
              <div className="flex items-start justify-between mb-8">
                <div className="p-4 rounded-2xl bg-cyan-500/10 text-cyan-500 group-hover:scale-110 transition-transform duration-300">
                  <Coffee className="w-8 h-8" />
                </div>
                <div className="px-3 py-1 rounded-full border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-mono font-medium uppercase tracking-wider bg-cyan-500/5">
                  Intro Gratuita
                </div>
              </div>

              <h3 className="text-3xl font-display font-bold mb-2">Coffee & Vision</h3>
              <p className="text-text-secondary mb-8 leading-relaxed">
                Hai un'idea ma non sai da dove partire? Parliamone senza impegno:
                valutiamo insieme fattibilità, tempistiche e primo step concreto da fare.
              </p>

              {/* List */}
              <ul className="space-y-4 mb-10 flex-grow">
                {features.discovery.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-text-primary/80">
                    <CheckCircle2 className="w-5 h-5 text-cyan-500/70 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Time & Action */}
              <div className="mt-auto space-y-6">
                <div className="flex items-center gap-2 text-sm text-text-muted font-mono">
                  <Clock className="w-4 h-4" />
                  <span>15 - 20 min</span>
                </div>
                <Button 
                  asChild 
                  variant="secondary" 
                  className="w-full h-14 text-base border-cyan-500/30 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-500/10 group-hover:border-cyan-500/50"
                >
                  <Link href="/contatti?type=discovery">
                    Prenota Chiamata
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Strategy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl" />
            <div className="relative h-full flex flex-col p-8 md:p-10 rounded-3xl border border-primary/20 bg-surface/80 backdrop-blur-md hover:border-primary/40 transition-colors duration-300 shadow-lg shadow-primary/5">
              
              {/* Header */}
              <div className="flex items-start justify-between mb-8">
                <div className="p-4 rounded-2xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                  <Rocket className="w-8 h-8" />
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/30 text-primary text-xs font-mono font-medium uppercase tracking-wider bg-primary/10">
                  <Zap className="w-3 h-3 fill-current" />
                  Fast Track
                </div>
              </div>

              <h3 className="text-3xl font-display font-bold mb-2">Project Kickoff</h3>
              <p className="text-text-secondary mb-8 leading-relaxed">
                Requisiti chiari e voglia di partire subito? In 45 minuti mappiamo obiettivi,
                definiamo roadmap tecnica e ti consegniamo stima precisa con tempi e costi reali.
              </p>

              {/* List */}
              <ul className="space-y-4 mb-10 flex-grow">
                {features.strategy.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-text-primary">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Time & Action */}
              <div className="mt-auto space-y-6">
                <div className="flex items-center gap-2 text-sm text-text-muted font-mono">
                  <Clock className="w-4 h-4" />
                  <span>45 min + Analisi</span>
                </div>
                <Button 
                  asChild 
                  className="w-full h-14 text-base shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-all"
                >
                  <Link href="/contatti?type=kickoff">
                    Avvia Progetto
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>

        </div>
      </Container>
    </Section>
  )
}
