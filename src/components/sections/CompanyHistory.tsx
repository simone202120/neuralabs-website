'use client'

import { useRef } from 'react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { FadeIn } from '@/components/animations'
import { motion, useScroll } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Rocket, Code2, Cpu, History } from 'lucide-react'

const milestones = [
  {
    year: '2023',
    title: 'La Genesi',
    subtitle: 'Hello World',
    description: "Tutto è iniziato con una domanda: 'Perché lo sviluppo web è ancora così lento quando l'AI corre così veloce?'. SigmaLabs nasce come esperimento per fondere creatività umana e potenza computazionale.",
    icon: Code2,
    color: 'cyan'
  },
  {
    year: '2024',
    title: 'La Fondazione',
    subtitle: 'Building the Core',
    description: "Un anno di ricerca e sviluppo. Abbiamo costruito i nostri framework interni, testato decine di LLM e affinato il nostro stack tecnologico. Il team nucleo si è formato.",
    icon: Cpu,
    color: 'violet'
  },
  {
    year: '2025',
    title: 'Il Lancio',
    subtitle: 'Go Live',
    description: "SigmaLabs apre le porte. Non siamo più solo un laboratorio, ma un partner per aziende visionarie. I primi progetti 'AI-First' vedono la luce.",
    icon: Rocket,
    color: 'orange'
  }
]

function MilestoneCard({ milestone, index }: { milestone: (typeof milestones)[0]; index: number }) {
  const isEven = index % 2 === 0
  
  const theme = {
    cyan: { text: 'text-cyan-400', bg: 'bg-cyan-500', border: 'border-cyan-500/20' },
    violet: { text: 'text-violet-400', bg: 'bg-violet-500', border: 'border-violet-500/20' },
    orange: { text: 'text-primary', bg: 'bg-primary', border: 'border-primary/20' }
  }[milestone.color] || { text: 'text-white', bg: 'bg-white', border: 'border-white' }

  return (
    <div className="relative pl-8 md:pl-0">
      {/* Center Marker (Desktop) */}
      <div className={cn(
        "hidden md:block absolute left-1/2 top-0 w-4 h-4 rounded-full border-2 border-background z-10 -translate-x-1/2 mt-6 shadow-[0_0_10px_rgba(0,0,0,0.5)] transition-colors duration-500",
        theme.bg
      )} />
      
      {/* Left Marker (Mobile) */}
      <div className={cn(
        "md:hidden absolute left-0 top-0 w-3 h-3 rounded-full border-2 border-background z-10 mt-2",
        theme.bg
      )} />

      <div className={cn(
        "grid md:grid-cols-2 gap-8 md:gap-24",
        !isEven && "md:flex-row-reverse"
      )}>
        {/* Content Side */}
        <div className={cn(
          "relative pb-16 md:pb-0",
          isEven ? "md:text-right md:pr-12" : "md:col-start-2 md:pl-12 md:text-left"
        )}>
          <FadeIn>
            <div className={cn(
              "text-6xl font-display font-bold opacity-10 absolute -top-10 select-none",
              isEven ? "right-0" : "left-0"
            )}>
              {milestone.year}
            </div>
            
            <div className="relative">
              <span className={cn("font-mono text-sm tracking-widest uppercase font-bold mb-2 block", theme.text)}>
                {milestone.subtitle}
              </span>
              <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">
                {milestone.title}
              </h3>
              <p className="text-text-secondary text-lg leading-relaxed">
                {milestone.description}
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Empty side for layout balance */}
        <div className="hidden md:block" />
      </div>
    </div>
  )
}

export function CompanyHistory() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })

  return (
    <Section ref={containerRef} className="py-24 relative overflow-hidden">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-32">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border text-xs font-mono text-text-muted mb-6">
              <History className="w-3 h-3" />
              <span>TIMELINE</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold">
              La Nostra Storia
            </h2>
          </FadeIn>
        </div>

        <div className="relative">
          {/* Central Line (Desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2">
             <motion.div 
               className="absolute top-0 left-0 right-0 w-full origin-top bg-gradient-to-b from-cyan-500 via-violet-500 to-primary"
               style={{ scaleY: scrollYProgress, height: '100%' }}
             />
          </div>
          
          {/* Side Line (Mobile) */}
          <div className="md:hidden absolute left-[5px] top-0 bottom-0 w-px bg-border">
             <motion.div 
               className="absolute top-0 left-0 right-0 w-full origin-top bg-gradient-to-b from-cyan-500 via-violet-500 to-primary"
               style={{ scaleY: scrollYProgress, height: '100%' }}
             />
          </div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <MilestoneCard key={milestone.year} milestone={milestone} index={index} />
            ))}
          </div>
        </div>
        
        {/* Future Node */}
        <FadeIn className="mt-20 text-center relative z-10">
          <div className="inline-block p-6 rounded-2xl border border-dashed border-border bg-surface/30 backdrop-blur-sm">
             <p className="text-lg font-mono text-text-secondary">
               2026 & Beyond... <span className="animate-pulse">_</span>
             </p>
          </div>
        </FadeIn>

      </Container>
    </Section>
  )
}
