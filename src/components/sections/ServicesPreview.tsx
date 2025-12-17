'use client'

import { useRef } from 'react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { FadeIn } from '@/components/animations'
import { Globe, Bot, BrainCircuit, Zap, ArrowRight, ArrowUpRight, Terminal } from 'lucide-react'
import Link from 'next/link'
import { useCursorState } from '@/hooks/useCursorState'
import { motion, useMotionValue, animate, MotionValue } from 'framer-motion'
import { BrowserMockupAnimation } from '@/components/animations/BrowserMockupAnimation'
import { NeuralNetworkAnimation } from '@/components/animations/NeuralNetworkAnimation'
import { DocumentsAnimation } from '@/components/animations/DocumentsAnimation'
import { GearsAnimation } from '@/components/animations/GearsAnimation'
import { cn } from '@/lib/utils'

// Data with integrated technologies and new color palettes
const services = [
  {
    id: 'web',
    code: 'SYS.WEB_01',
    icon: Globe,
    title: 'Siti Web & WebApp',
    description: "Esperienze digitali su misura che raccontano la tua storia e convertono i visitatori.",
    price: '2.5k',
    technologies: ['Next.js', 'React', 'Tailwind', 'Sanity'],
    animationType: 'browser' as const,
    colSpan: 'md:col-span-2',
    rowSpan: 'md:row-span-1',
    href: '/servizi#websites',
    colors: {
      primary: 'text-cyan-400',
      border: 'border-cyan-500/30',
      glow: 'shadow-cyan-500/20',
      bg: 'bg-cyan-950/10',
      marker: 'bg-cyan-500',
    }
  },
  {
    id: 'ai',
    code: 'SYS.AI_CORE',
    icon: Bot,
    title: 'AI Agents',
    description: 'Assistenti intelligenti 24/7 che comprendono e agiscono.',
    price: '5k',
    technologies: ['OpenAI', 'Anthropic', 'LangChain', 'Python'],
    animationType: 'neural' as const,
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-2',
    href: '/servizi#ai-agents',
    colors: {
      primary: 'text-violet-400',
      border: 'border-violet-500/30',
      glow: 'shadow-violet-500/20',
      bg: 'bg-violet-950/10',
      marker: 'bg-violet-500',
    }
  },
  {
    id: 'rag',
    code: 'SYS.DATA_RAG',
    icon: BrainCircuit,
    title: 'Sistemi RAG',
    description: 'La tua documentazione diventa una knowledge base interattiva.',
    price: '4k',
    technologies: ['Pinecone', 'LlamaIndex', 'Supabase'],
    animationType: 'documents' as const,
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-1',
    href: '/servizi#rag',
    colors: {
      primary: 'text-emerald-400',
      border: 'border-emerald-500/30',
      glow: 'shadow-emerald-500/20',
      bg: 'bg-emerald-950/10',
      marker: 'bg-emerald-500',
    }
  },
  {
    id: 'auto',
    code: 'SYS.AUTO_BOT',
    icon: Zap,
    title: 'Automazioni',
    description: 'Workflow che eliminano il lavoro ripetitivo.',
    price: '1k',
    technologies: ['n8n', 'Zapier', 'Node.js'],
    animationType: 'gears' as const,
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-1',
    href: '/servizi#automations',
    colors: {
      primary: 'text-amber-400',
      border: 'border-amber-500/30',
      glow: 'shadow-amber-500/20',
      bg: 'bg-amber-950/10',
      marker: 'bg-amber-500',
    }
  },
]

// Animation Selector
function ServiceAnimation({
  type,
  progress,
}: {
  type: 'browser' | 'neural' | 'documents' | 'gears'
  progress: MotionValue<number>
}) {
  switch (type) {
    case 'browser':
      return <BrowserMockupAnimation progress={progress} />
    case 'neural':
      return <NeuralNetworkAnimation progress={progress} />
    case 'documents':
      return <DocumentsAnimation progress={progress} />
    case 'gears':
      return <GearsAnimation progress={progress} />
  }
}

// Tech HUD Card Component
function BentoCard({ service }: { service: (typeof services)[0] }) {
  const { setCursorType } = useCursorState()
  const progress = useMotionValue(0)
  const Icon = service.icon

  const handleMouseEnter = () => {
    setCursorType('hover')
    animate(progress, 1, { duration: 0.5 })
  }

  const handleMouseLeave = () => {
    setCursorType('default')
    animate(progress, 0, { duration: 0.5 })
  }

  return (
    <motion.div
      className={cn(
        'group relative h-full overflow-hidden transition-all duration-500',
        service.colSpan,
        service.rowSpan
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Invisible Container Base */}
      <div className={cn(
        "absolute inset-0 bg-surface/5 backdrop-blur-[2px] transition-colors duration-500",
        `group-hover:${service.colors.bg}`
      )} />

      {/* Tech HUD Corners (The "Brackets") */}
      <>
        {/* Top Left */}
        <div className={cn("absolute top-0 left-0 w-8 h-8 border-t border-l transition-colors duration-300 border-border/20", `group-hover:${service.colors.border}`)} />
        {/* Top Right */}
        <div className={cn("absolute top-0 right-0 w-8 h-8 border-t border-r transition-colors duration-300 border-border/20", `group-hover:${service.colors.border}`)} />
        {/* Bottom Left */}
        <div className={cn("absolute bottom-0 left-0 w-8 h-8 border-b border-l transition-colors duration-300 border-border/20", `group-hover:${service.colors.border}`)} />
        {/* Bottom Right */}
        <div className={cn("absolute bottom-0 right-0 w-8 h-8 border-b border-r transition-colors duration-300 border-border/20", `group-hover:${service.colors.border}`)} />
      </>

      {/* Tech Status Line (Top) */}
      <div className="absolute top-4 left-6 right-6 flex justify-between items-center opacity-40 group-hover:opacity-100 transition-opacity duration-500">
        <span className={cn("text-[10px] font-mono tracking-widest", service.colors.primary)}>
          {service.code}
        </span>
        <div className="flex gap-1">
          <div className={cn("w-1 h-1 rounded-full", service.colors.marker)} />
          <div className={cn("w-1 h-1 rounded-full opacity-30", service.colors.marker)} />
          <div className={cn("w-1 h-1 rounded-full opacity-30", service.colors.marker)} />
        </div>
      </div>
      
      {/* Animation Layer */}
      <div className="absolute inset-0 opacity-40 group-hover:opacity-80 transition-opacity duration-500">
        <ServiceAnimation type={service.animationType} progress={progress} />
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col justify-between p-6 md:p-8 pointer-events-none">
        {/* Empty top space for animation visibility */}
        <div className="h-12" />

        {/* Text Content */}
        <div className="space-y-6 mt-auto">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className={cn(
                "p-2 rounded-lg bg-surface/50 backdrop-blur-md border border-white/5",
                service.colors.primary
              )}>
                <Icon className="w-6 h-6" />
              </div>
              <h3 className={cn(
                "text-2xl font-display font-bold transition-colors",
                "text-text-primary group-hover:text-white"
              )}>
                {service.title}
              </h3>
            </div>
            
            <p className="text-text-secondary text-sm md:text-base leading-relaxed line-clamp-3 group-hover:text-text-primary/80 transition-colors">
              {service.description}
            </p>
          </div>

          {/* Footer: Tech & Price */}
          <div className="flex items-end justify-between pt-4 border-t border-white/5">
             <div className="flex flex-wrap gap-2">
                {service.technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-surface/30 text-text-muted border border-white/5"
                  >
                    {tech}
                  </span>
                ))}
             </div>
             
             <div className={cn(
               "text-sm font-mono font-bold opacity-60 group-hover:opacity-100 transition-opacity",
               service.colors.primary
             )}>
               {'>'} {service.price}
             </div>
          </div>
        </div>

        {/* Hover Action */}
        <Link 
          href={service.href} 
          className="absolute inset-0 z-20 pointer-events-auto"
          aria-label={`Scopri di più su ${service.title}`}
        >
          {/* Corner Action Button */}
          <div className={cn(
            "absolute bottom-0 right-0 p-3 bg-surface/80 backdrop-blur-sm border-t border-l border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300",
            `hover:${service.colors.primary}`
          )}>
            <ArrowUpRight className={cn("w-5 h-5", service.colors.primary)} />
          </div>
        </Link>
      </div>
    </motion.div>
  )
}

export function ServicesPreview() {
  const { setCursorType } = useCursorState()
  const ref = useRef(null)

  return (
    <Section ref={ref} id="servizi" className="py-24 md:py-32 relative">
      <Container>
        {/* Section Header */}
        <FadeIn className="mb-16 md:mb-24 flex flex-col md:flex-row items-end justify-between gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4 text-primary font-mono text-xs tracking-widest uppercase">
              <Terminal className="w-4 h-4" />
              <span>System Modules</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Cosa Facciamo
            </h2>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
              In un mondo digitale in continua accelerazione, non basta più esserci: bisogna evolvere.
              Uniamo il design &apos;Warm Tech&apos; con la potenza dell&apos;Intelligenza Artificiale per costruire ecosistemi digitali che non sono solo strumenti, ma veri partner per il tuo business.
              Dallo sviluppo web sartoriale agli agenti autonomi, trasformiamo la complessità tecnologica in un vantaggio competitivo semplice, intuitivo e umano.
            </p>
          </div>
          
          <Button 
            asChild 
            variant="ghost" 
            className="hidden md:inline-flex group border border-border/50 hover:bg-surface/50"
            onMouseEnter={() => setCursorType('hover')}
            onMouseLeave={() => setCursorType('default')}
          >
            <Link href="/servizi">
              Tutti i Servizi 
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </FadeIn>

        {/* Tech HUD Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[minmax(320px,auto)]">
          {services.map((service, index) => (
            <FadeIn key={service.id} delay={index * 0.1} className={cn(service.colSpan, service.rowSpan, "h-full")}>
              <BentoCard service={service} />
            </FadeIn>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-12 text-center md:hidden">
          <Button asChild>
            <Link href="/servizi">
              Esplora Tutti i Servizi
            </Link>
          </Button>
        </div>
      </Container>
    </Section>
  )
}

