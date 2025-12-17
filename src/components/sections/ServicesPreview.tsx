'use client'

import { useRef } from 'react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { FadeIn } from '@/components/animations'
import { Globe, Bot, BrainCircuit, Zap, ArrowRight, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { useCursorState } from '@/hooks/useCursorState'
import { motion, useMotionValue, animate, MotionValue } from 'framer-motion'
import { BrowserMockupAnimation } from '@/components/animations/BrowserMockupAnimation'
import { NeuralNetworkAnimation } from '@/components/animations/NeuralNetworkAnimation'
import { DocumentsAnimation } from '@/components/animations/DocumentsAnimation'
import { GearsAnimation } from '@/components/animations/GearsAnimation'
import { cn } from '@/lib/utils'

// Data with integrated technologies
const services = [
  {
    id: 'web',
    icon: Globe,
    title: 'Siti Web & WebApp',
    description: "Esperienze digitali su misura che raccontano la tua storia e convertono i visitatori.",
    price: '2.5k',
    technologies: ['Next.js', 'React', 'Tailwind', 'Sanity'],
    animationType: 'browser' as const,
    gradient: 'from-blue-500/20 via-blue-500/5 to-transparent',
    colSpan: 'md:col-span-2',
    rowSpan: 'md:row-span-1',
    href: '/servizi#websites'
  },
  {
    id: 'ai',
    icon: Bot,
    title: 'AI Agents',
    description: 'Assistenti intelligenti 24/7 che comprendono e agiscono.',
    price: '5k',
    technologies: ['OpenAI', 'Anthropic', 'LangChain', 'Python'],
    animationType: 'neural' as const,
    gradient: 'from-primary/20 via-primary/5 to-transparent',
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-2',
    href: '/servizi#ai-agents'
  },
  {
    id: 'rag',
    icon: BrainCircuit,
    title: 'Sistemi RAG',
    description: 'La tua documentazione diventa una knowledge base interattiva.',
    price: '4k',
    technologies: ['Pinecone', 'LlamaIndex', 'Supabase'],
    animationType: 'documents' as const,
    gradient: 'from-green-500/20 via-green-500/5 to-transparent',
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-1',
    href: '/servizi#rag'
  },
  {
    id: 'auto',
    icon: Zap,
    title: 'Automazioni',
    description: 'Workflow che eliminano il lavoro ripetitivo.',
    price: '1k',
    technologies: ['n8n', 'Zapier', 'Node.js'],
    animationType: 'gears' as const,
    gradient: 'from-yellow-500/20 via-yellow-500/5 to-transparent',
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-1',
    href: '/servizi#automations'
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

// Bento Card Component
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
        'group relative overflow-hidden rounded-3xl border border-border bg-surface/50 p-6 md:p-8 hover:border-primary/50 transition-all duration-500',
        service.colSpan,
        service.rowSpan
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={{ y: -5 }}
    >
      {/* Background Gradient & Animation */}
      <div className={cn('absolute inset-0 bg-gradient-to-br opacity-50', service.gradient)} />
      
      {/* Animation Layer */}
      <div className="absolute inset-0 opacity-50 group-hover:opacity-100 transition-opacity duration-500">
        <ServiceAnimation type={service.animationType} progress={progress} />
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col justify-between pointer-events-none">
        {/* Header */}
        <div className="flex justify-between items-start">
          <div className="p-3 rounded-2xl bg-surface-light/80 backdrop-blur-sm border border-border/50 text-primary">
            <Icon className="w-8 h-8" />
          </div>
          
          <Badge variant="outline" className="bg-surface/50 backdrop-blur-sm border-primary/20 text-primary">
            Da €{service.price}
          </Badge>
        </div>

        {/* Text Content */}
        <div className="mt-8 space-y-4">
          <div>
            <h3 className="text-2xl font-display font-bold mb-2 group-hover:text-primary transition-colors">
              {service.title}
            </h3>
            <p className="text-text-secondary text-sm md:text-base leading-relaxed line-clamp-3">
              {service.description}
            </p>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
            {service.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs rounded-md bg-surface-light/50 text-text-muted font-mono border border-transparent group-hover:border-primary/10 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Hover Action */}
        <Link 
          href={service.href} 
          className="absolute inset-0 z-20 pointer-events-auto"
          aria-label={`Scopri di più su ${service.title}`}
        >
          <div className="absolute bottom-6 right-6 p-2 rounded-full bg-primary text-white opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg shadow-primary/30">
            <ArrowUpRight className="w-5 h-5" />
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
            className="hidden md:inline-flex group"
            onMouseEnter={() => setCursorType('hover')}
            onMouseLeave={() => setCursorType('default')}
          >
            <Link href="/servizi">
              Tutti i Servizi 
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </FadeIn>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[minmax(300px,auto)]">
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

