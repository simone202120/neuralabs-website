'use client'

import { useRef } from 'react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { FadeIn } from '@/components/animations'
import Link from 'next/link'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { cn } from '@/lib/utils'
import { AudioWaveform, CircuitBoard, Infinity as InfinityIcon } from 'lucide-react'

// Definizione degli step con palette colori specifica per ognuno
const steps = [
  {
    id: '01',
    title: 'Sintonia',
    subtitle: 'Discovery & Vision',
    description:
      "Non iniziamo con i requisiti, ma con la frequenza. Ascoltiamo e analizziamo i tuoi obiettivi per allinearci perfettamente alla tua visione.",
    icon: AudioWaveform,
    alignment: 'left',
    // Cyan/Teal Palette - Chiarezza e Dati
    colors: {
      text: 'text-cyan-400',
      bg: 'bg-cyan-500/10',
      border: 'border-cyan-500/20',
      glow: 'shadow-cyan-500/20',
      gradient: 'from-cyan-500/20',
      iconBg: 'bg-cyan-500',
    }
  },
  {
    id: '02',
    title: 'Fusione',
    subtitle: 'AI-Augmented Build',
    description:
      "Il punto d'incontro tra codice e AI. Creiamo architetture ibride dove la logica umana è potenziata dalla velocità dell'intelligenza artificiale.",
    icon: CircuitBoard,
    alignment: 'right',
    // Violet/Purple Palette - AI e Profondità
    colors: {
      text: 'text-violet-400',
      bg: 'bg-violet-500/10',
      border: 'border-violet-500/20',
      glow: 'shadow-violet-500/20',
      gradient: 'from-violet-500/20',
      iconBg: 'bg-violet-500',
    }
  },
  {
    id: '03',
    title: 'Evoluzione',
    subtitle: 'Growth & Scale',
    description:
      "Un ciclo continuo. Implementiamo sistemi che apprendono dai dati e crescono organicamente insieme al tuo business.",
    icon: InfinityIcon,
    alignment: 'left',
    // Coral/Orange Palette (Brand) - Energia e Crescita
    colors: {
      text: 'text-primary',
      bg: 'bg-primary/10',
      border: 'border-primary/20',
      glow: 'shadow-primary/20',
      gradient: 'from-primary/20',
      iconBg: 'bg-primary',
    }
  },
]

function StepCard({ step, index }: { step: (typeof steps)[0]; index: number }) {
  const isRight = step.alignment === 'right'

  return (
    <div
      className={cn(
        'relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center',
        isRight ? 'md:text-right' : 'md:text-left'
      )}
    >
      {/* Spacer for layout alignment on desktop */}
      <div className={cn('hidden md:block', isRight ? 'order-1' : 'order-2')} />

      {/* Content Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={cn(
          'relative z-10 group',
          isRight ? 'order-2 md:order-2' : 'order-2 md:order-1'
        )}
      >
        <div 
          className={cn(
            "relative overflow-hidden rounded-3xl border p-8 transition-all duration-500 backdrop-blur-sm",
            "bg-surface/40 hover:bg-surface/60", // Base neutral
            step.colors.border,
            "hover:shadow-[0_0_30px_-5px_rgba(0,0,0,0.3)]",
            // Dynamic hover glow based on step color
            `hover:${step.colors.glow}`
          )}
        >
          {/* Ambient Glow Gradient inside card */}
          <div className={cn(
            "absolute -top-20 -right-20 w-64 h-64 rounded-full blur-[80px] opacity-20 transition-opacity duration-500 group-hover:opacity-40 bg-gradient-to-br to-transparent pointer-events-none",
            step.colors.gradient
          )} />

          {/* Header Section */}
          <div className={cn(
            "flex items-center gap-5 mb-6 relative z-10",
            isRight ? "md:flex-row-reverse" : "flex-row"
          )}>
            {/* Icon Container */}
            <div className={cn(
              "relative flex items-center justify-center w-14 h-14 rounded-2xl transition-all duration-500 shadow-lg",
              step.colors.iconBg,
              "text-white"
            )}>
              <step.icon className="w-7 h-7" />
              {/* Inner highlight */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-black/20 to-white/20 pointer-events-none" />
            </div>

            <div className="flex flex-col">
              <span className={cn(
                "text-xs font-mono tracking-widest uppercase mb-1 font-bold",
                step.colors.text
              )}>
                Step {step.id}
              </span>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-text-primary">
                {step.title}
              </h3>
            </div>
          </div>

          {/* Description */}
          <p className="text-text-secondary leading-relaxed relative z-10 text-base md:text-lg">
            {step.description}
          </p>
          
          {/* Bottom highlight line */}
          <div className={cn(
            "absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-700 ease-out opacity-50",
            step.colors.iconBg
          )} />
        </div>
      </motion.div>

      {/* Mobile Timeline Node (hidden on desktop) */}
      <div className={cn(
        "absolute left-0 top-1/2 -translate-x-[calc(50%+1px)] -translate-y-1/2 md:hidden flex items-center justify-center w-4 h-4 rounded-full z-20 shadow-[0_0_10px_rgba(0,0,0,0.5)]",
        step.colors.iconBg
      )} />
    </div>
  )
}

export function Methodology() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <Section ref={containerRef} id="approccio" className="py-24 md:py-32 relative overflow-hidden">
      <Container>
        {/* Header */}
        <FadeIn className="text-center max-w-3xl mx-auto mb-20 md:mb-32">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Il Nostro Metodo
          </h2>
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
            Ogni progetto è un viaggio. Uniamo analisi, creatività e tecnologia in un flusso continuo.
          </p>
        </FadeIn>

        {/* The Synaptic Pathway */}
        <div className="relative">
          {/* Central Line with Multi-color Gradient */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-surface-light md:-translate-x-1/2 overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 right-0 w-full origin-top bg-gradient-to-b from-cyan-500 via-violet-500 to-primary"
              style={{ scaleY, height: '100%' }}
            />
          </div>

          {/* Steps */}
          <div className="space-y-16 md:space-y-32 pl-10 md:pl-0">
            {steps.map((step, index) => (
               <StepCard key={step.id} step={step} index={index} />
            ))}
          </div>

          {/* Start/End Nodes */}
          <div className="absolute left-0 md:left-1/2 top-0 -translate-x-[calc(50%+0.5px)] -translate-y-full pb-4">
             <div className="w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
          </div>
          <div className="absolute left-0 md:left-1/2 bottom-0 -translate-x-[calc(50%+0.5px)] translate-y-full pt-4">
             <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(255,107,53,0.5)]" />
          </div>
        </div>

        {/* CTA to deep dive page */}
        <FadeIn className="mt-20 md:mt-32 text-center">
          <Button asChild size="lg" variant="secondary" className="rounded-full group">
            <Link href="/metodo">
              Scopri il Metodo Completo 
              <motion.span 
                className="inline-block ml-2"
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                →
              </motion.span>
            </Link>
          </Button>
        </FadeIn>
      </Container>
    </Section>
  )
}
