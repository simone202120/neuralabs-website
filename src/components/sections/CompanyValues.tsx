'use client'

import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { FadeIn } from '@/components/animations'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Lightbulb, Users, Zap, Search, Terminal } from 'lucide-react'
import { useCursorState } from '@/hooks/useCursorState'

const values = [
  {
    id: 'innovazione',
    title: 'Innovazione Pratica',
    description: 'Non usiamo l\'AI perché è di moda. La usiamo per risolvere problemi reali che il codice tradizionale non può affrontare.',
    icon: Lightbulb,
    colSpan: 'md:col-span-2',
    colors: {
      primary: 'text-cyan-400',
      border: 'border-cyan-500/30',
      bg: 'bg-cyan-950/10',
      marker: 'bg-cyan-500',
    }
  },
  {
    id: 'partnership',
    title: 'Partnership Radicale',
    description: 'Niente "noi" contro "voi". Lavoriamo nello stesso repository, con gli stessi obiettivi. Il tuo successo è il nostro commit.',
    icon: Users,
    colSpan: 'md:col-span-1',
    colors: {
      primary: 'text-violet-400',
      border: 'border-violet-500/30',
      bg: 'bg-violet-950/10',
      marker: 'bg-violet-500',
    }
  },
  {
    id: 'velocita',
    title: 'Velocità di Esecuzione',
    description: 'Il mercato non aspetta. Rilasciamo MVP in settimane, iteriamo in giorni. L\'imperfezione corretta velocemente batte la perfezione lenta.',
    icon: Zap,
    colSpan: 'md:col-span-1',
    colors: {
      primary: 'text-amber-400',
      border: 'border-amber-500/30',
      bg: 'bg-amber-950/10',
      marker: 'bg-amber-500',
    }
  },
  {
    id: 'trasparenza',
    title: 'Open Source Mindset',
    description: 'Codice chiaro, processi aperti, prezzi onesti. Niente lock-in, niente scatole nere. Ti diamo le chiavi di tutto.',
    icon: Search,
    colSpan: 'md:col-span-2',
    colors: {
      primary: 'text-emerald-400',
      border: 'border-emerald-500/30',
      bg: 'bg-emerald-950/10',
      marker: 'bg-emerald-500',
    }
  },
]

function ValueCard({ value }: { value: (typeof values)[0] }) {
  const { setCursorType } = useCursorState()
  const Icon = value.icon

  return (
    <motion.div
      className={cn(
        'group relative h-full min-h-[250px] overflow-hidden transition-all duration-500 rounded-2xl border border-white/5 bg-surface/5',
        value.colSpan
      )}
      onMouseEnter={() => setCursorType('hover')}
      onMouseLeave={() => setCursorType('default')}
    >
      {/* Invisible Container Base - Hover Effect */}
      <div className={cn(
        "absolute inset-0 bg-surface/5 backdrop-blur-[2px] transition-colors duration-500",
        `group-hover:${value.colors.bg}`
      )} />

      {/* Tech HUD Corners */}
      <>
        <div className={cn("absolute top-0 left-0 w-6 h-6 border-t border-l transition-colors duration-300 border-border/20", `group-hover:${value.colors.border}`)} />
        <div className={cn("absolute top-0 right-0 w-6 h-6 border-t border-r transition-colors duration-300 border-border/20", `group-hover:${value.colors.border}`)} />
        <div className={cn("absolute bottom-0 left-0 w-6 h-6 border-b border-l transition-colors duration-300 border-border/20", `group-hover:${value.colors.border}`)} />
        <div className={cn("absolute bottom-0 right-0 w-6 h-6 border-b border-r transition-colors duration-300 border-border/20", `group-hover:${value.colors.border}`)} />
      </>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between p-8">
        <div className="flex items-start justify-between">
          <div className={cn(
            "p-3 rounded-xl bg-surface/50 border border-white/5 transition-colors duration-300",
            `group-hover:${value.colors.primary} group-hover:bg-black/20`
          )}>
            <Icon className="w-6 h-6" />
          </div>
          
          <div className="flex gap-1.5">
             <div className={cn("w-1.5 h-1.5 rounded-full", value.colors.marker)} />
             <div className={cn("w-1.5 h-1.5 rounded-full opacity-30", value.colors.marker)} />
          </div>
        </div>

        <div className="space-y-3 mt-8">
          <h3 className={cn(
            "text-2xl font-display font-bold transition-colors",
            "text-text-primary group-hover:text-white"
          )}>
            {value.title}
          </h3>
          <p className="text-text-secondary leading-relaxed group-hover:text-text-primary/90 transition-colors">
            {value.description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export function CompanyValues() {
  return (
    <Section className="py-24 relative overflow-hidden">
      <Container>
        <div className="mb-16 md:mb-24 text-center max-w-3xl mx-auto">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border text-xs font-mono text-text-muted mb-6">
              <Terminal className="w-3 h-3" />
              <span>CORE PROTOCOLS</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Il Nostro Codice Etico
            </h2>
            <p className="text-xl text-text-secondary leading-relaxed">
              La tecnologia è potente, ma è la filosofia dietro a renderla utile. 
              Questi sono i valori hard-coded nel nostro DNA.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <FadeIn key={value.id} delay={index * 0.1} className={cn(value.colSpan)}>
              <ValueCard value={value} />
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  )
}
