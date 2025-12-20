'use client'

import { useRef } from 'react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
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

// Data normalized for a scalable grid with Light/Dark mode support
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
    href: '/servizi#websites',
    colors: {
      primary: 'text-cyan-600 dark:text-cyan-400',
      border: 'border-cyan-200 dark:border-cyan-500/30',
      bg: 'group-hover:bg-cyan-50/80 dark:group-hover:bg-cyan-950/30',
      marker: 'bg-cyan-600 dark:bg-cyan-500',
      iconBg: 'bg-cyan-50 dark:bg-cyan-950/20',
    }
  },
  {
    id: 'ai',
    code: 'SYS.AI_CORE',
    icon: Bot,
    title: 'AI Agents',
    description: 'Assistenti intelligenti 24/7 che comprendono e agiscono autonomamente.',
    price: '5k',
    technologies: ['OpenAI', 'Anthropic', 'LangChain', 'Python'],
    animationType: 'neural' as const,
    href: '/servizi#ai-agents',
    colors: {
      primary: 'text-violet-600 dark:text-violet-400',
      border: 'border-violet-200 dark:border-violet-500/30',
      bg: 'group-hover:bg-violet-50/80 dark:group-hover:bg-violet-950/30',
      marker: 'bg-violet-600 dark:bg-violet-500',
      iconBg: 'bg-violet-50 dark:bg-violet-950/20',
    }
  },
  {
    id: 'rag',
    code: 'SYS.DATA_RAG',
    icon: BrainCircuit,
    title: 'Sistemi RAG',
    description: 'La tua documentazione aziendale diventa una knowledge base interattiva.',
    price: '4k',
    technologies: ['Pinecone', 'LlamaIndex', 'Supabase'],
    animationType: 'documents' as const,
    href: '/servizi#rag',
    colors: {
      primary: 'text-emerald-600 dark:text-emerald-400',
      border: 'border-emerald-200 dark:border-emerald-500/30',
      bg: 'group-hover:bg-emerald-50/80 dark:group-hover:bg-emerald-950/30',
      marker: 'bg-emerald-600 dark:bg-emerald-500',
      iconBg: 'bg-emerald-50 dark:bg-emerald-950/20',
    }
  },
  {
    id: 'auto',
    code: 'SYS.AUTO_BOT',
    icon: Zap,
    title: 'Automazioni',
    description: 'Workflow intelligenti che eliminano il lavoro ripetitivo e manuale.',
    price: '1k',
    technologies: ['n8n', 'Zapier', 'Node.js'],
    animationType: 'gears' as const,
    href: '/servizi#automations',
    colors: {
      primary: 'text-amber-600 dark:text-amber-400',
      border: 'border-amber-200 dark:border-amber-500/30',
      bg: 'group-hover:bg-amber-50/80 dark:group-hover:bg-amber-950/30',
      marker: 'bg-amber-600 dark:bg-amber-500',
      iconBg: 'bg-amber-50 dark:bg-amber-950/20',
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

// Cleaner Service Card Component
function ServiceCard({ service }: { service: (typeof services)[0] }) {
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
        'group relative flex flex-col h-full min-h-[320px] rounded-2xl overflow-hidden',
        'bg-white dark:bg-surface/50 backdrop-blur-sm',
        'border border-slate-200 dark:border-white/10',
        'shadow-sm dark:shadow-none',
        'hover:shadow-md dark:hover:shadow-none',
        'hover:border-slate-300 dark:hover:border-white/20',
        'transition-all duration-300 hover:-translate-y-1'
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background Hover Effect */}
      <div className={cn(
        "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
        service.colors.bg
      )} />

      {/* Top Bar: Code & Status */}
      <div className="relative z-10 flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-white/5">
        <span className={cn("text-[10px] font-mono tracking-widest opacity-80", service.colors.primary)}>
          {service.code}
        </span>
        <div className="flex gap-1.5">
          <div className={cn("w-1.5 h-1.5 rounded-full", service.colors.marker)} />
        </div>
      </div>
      
      {/* Animation Area */}
      <div className="relative h-32 w-full overflow-hidden border-b border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-black/20">
        <div className="absolute inset-0 opacity-50 group-hover:opacity-100 transition-opacity duration-500">
           <ServiceAnimation type={service.animationType} progress={progress} />
        </div>
      </div>

      {/* Content Area */}
      <div className="relative z-10 flex-1 flex flex-col p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className={cn(
            "p-2 rounded-lg border transition-colors",
            "bg-white dark:bg-surface border-slate-200 dark:border-white/5",
            "group-hover:border-slate-300 dark:group-hover:border-white/20",
            service.colors.primary
          )}>
            <Icon className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-display font-bold text-slate-900 dark:text-text-primary group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
            {service.title}
          </h3>
        </div>
        
        <p className="text-slate-600 dark:text-text-secondary text-sm leading-relaxed mb-6 group-hover:text-slate-700 dark:group-hover:text-text-primary/80 transition-colors">
          {service.description}
        </p>

        {/* Tech Stack Footer */}
        <div className="mt-auto pt-4 border-t border-slate-100 dark:border-white/5 flex flex-wrap gap-2">
           {service.technologies.slice(0, 3).map((tech) => (
             <span
               key={tech}
               className="text-[10px] font-mono px-2 py-1 rounded bg-slate-100 dark:bg-surface/50 text-slate-500 dark:text-text-muted border border-slate-200 dark:border-white/5 group-hover:bg-white dark:group-hover:bg-surface/80 transition-colors"
             >
               {tech}
             </span>
           ))}
        </div>
      </div>

      {/* Full Card Link */}
      <Link 
        href={service.href} 
        className="absolute inset-0 z-20 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-2xl"
        aria-label={`Scopri di più su ${service.title}`}
      >
        <span className="sr-only">Vedi dettagli</span>
      </Link>
      
      {/* Corner Icon on Hover */}
      <div className={cn(
        "absolute bottom-4 right-4 pointer-events-none opacity-0 transform translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300",
        service.colors.primary
      )}>
        <ArrowUpRight className="w-5 h-5" />
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
        <FadeIn className="mb-16 md:mb-20 flex flex-col md:flex-row items-end justify-between gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4 text-primary font-mono text-xs tracking-widest uppercase">
              <Terminal className="w-4 h-4" />
              <span>System Modules</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Cosa Facciamo
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed max-w-xl">
              Uniamo il design &apos;Warm Tech&apos; con la potenza dell&apos;AI per costruire ecosistemi digitali che evolvono insieme al tuo business.
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

        {/* Scalable Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <FadeIn key={service.id} delay={index * 0.1}>
              <ServiceCard service={service} />
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

