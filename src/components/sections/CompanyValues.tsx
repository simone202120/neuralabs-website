'use client'

import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { FadeIn } from '@/components/animations'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Target, Terminal, CheckCircle, Code } from 'lucide-react'
import { useCursorState } from '@/hooks/useCursorState'

const values = [
  {
    id: 'analisi',
    title: 'Analisi Prima del Codice',
    description: 'Comprendere il problema tecnico in profondità prima di scrivere una riga. Architettura dati, flussi utente, edge cases. Poi si implementa, non prima.',
    icon: Target,
    colSpan: 'md:col-span-2',
    colors: {
      primary: 'text-cyan-600 dark:text-cyan-400',
      border: 'border-cyan-500/30',
      bg: 'bg-cyan-50 dark:bg-cyan-950/10',
      marker: 'bg-cyan-500',
    }
  },
  {
    id: 'stack',
    title: 'Stack Decisionale',
    description: 'Ogni tecnologia scelta ha una giustificazione tecnica documentata. Non mode, ma trade-off analizzati: performance, manutenibilità, ecosistema.',
    icon: Terminal,
    colSpan: 'md:col-span-1',
    colors: {
      primary: 'text-violet-600 dark:text-violet-400',
      border: 'border-violet-500/30',
      bg: 'bg-violet-50 dark:bg-violet-950/10',
      marker: 'bg-violet-500',
    }
  },
  {
    id: 'testing',
    title: 'Testing Sistematico',
    description: 'Unit test per la logica, integration test per i flussi critici, E2E per l\'esperienza utente. Il testing non è un extra, è parte della soluzione.',
    icon: CheckCircle,
    colSpan: 'md:col-span-1',
    colors: {
      primary: 'text-amber-600 dark:text-amber-400',
      border: 'border-amber-500/30',
      bg: 'bg-amber-50 dark:bg-amber-950/10',
      marker: 'bg-amber-500',
    }
  },
  {
    id: 'ownership',
    title: 'Ownership Completa',
    description: 'Ti consegno repository, CI/CD configurata, documentazione tecnica, accessi infrastruttura. Il progetto è completamente sotto il tuo controllo, senza dipendenze nascoste.',
    icon: Code,
    colSpan: 'md:col-span-2',
    colors: {
      primary: 'text-emerald-600 dark:text-emerald-400',
      border: 'border-emerald-500/30',
      bg: 'bg-emerald-50 dark:bg-emerald-950/10',
      marker: 'bg-emerald-500',
    }
  },
]

function ValueCard({ value }: { value: (typeof values)[0] }) {
  const { setCursorType } = useCursorState()
  const Icon = value.icon

  // Map complete hover classes for each value ID
  const hoverStyles = {
    analisi: {
      bg: 'group-hover:bg-cyan-50 dark:group-hover:bg-cyan-950/10',
      border: 'group-hover:border-cyan-500/30',
      iconBg: 'group-hover:bg-cyan-100 dark:group-hover:bg-cyan-950/30',
      icon: 'group-hover:text-cyan-600 dark:group-hover:text-cyan-400',
    },
    stack: {
      bg: 'group-hover:bg-violet-50 dark:group-hover:bg-violet-950/10',
      border: 'group-hover:border-violet-500/30',
      iconBg: 'group-hover:bg-violet-100 dark:group-hover:bg-violet-950/30',
      icon: 'group-hover:text-violet-600 dark:group-hover:text-violet-400',
    },
    testing: {
      bg: 'group-hover:bg-amber-50 dark:group-hover:bg-amber-950/10',
      border: 'group-hover:border-amber-500/30',
      iconBg: 'group-hover:bg-amber-100 dark:group-hover:bg-amber-950/30',
      icon: 'group-hover:text-amber-600 dark:group-hover:text-amber-400',
    },
    ownership: {
      bg: 'group-hover:bg-emerald-50 dark:group-hover:bg-emerald-950/10',
      border: 'group-hover:border-emerald-500/30',
      iconBg: 'group-hover:bg-emerald-100 dark:group-hover:bg-emerald-950/30',
      icon: 'group-hover:text-emerald-600 dark:group-hover:text-emerald-400',
    },
  }

  const currentHoverStyle = hoverStyles[value.id as keyof typeof hoverStyles]

  return (
    <motion.div
      className={cn(
        'group relative h-full min-h-[250px] overflow-hidden transition-all duration-500 rounded-2xl border border-slate-200 dark:border-white/5 bg-white dark:bg-surface/5',
        value.colSpan
      )}
      onMouseEnter={() => setCursorType('hover')}
      onMouseLeave={() => setCursorType('default')}
    >
      {/* Invisible Container Base - Hover Effect */}
      <div className={cn(
        "absolute inset-0 transition-colors duration-500",
        currentHoverStyle.bg
      )} />

      {/* Tech HUD Corners */}
      <>
        <div className={cn("absolute top-0 left-0 w-6 h-6 border-t border-l transition-colors duration-300 border-slate-200 dark:border-border/20", currentHoverStyle.border)} />
        <div className={cn("absolute top-0 right-0 w-6 h-6 border-t border-r transition-colors duration-300 border-slate-200 dark:border-border/20", currentHoverStyle.border)} />
        <div className={cn("absolute bottom-0 left-0 w-6 h-6 border-b border-l transition-colors duration-300 border-slate-200 dark:border-border/20", currentHoverStyle.border)} />
        <div className={cn("absolute bottom-0 right-0 w-6 h-6 border-b border-r transition-colors duration-300 border-slate-200 dark:border-border/20", currentHoverStyle.border)} />
      </>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between p-8">
        <div className="flex items-start justify-between">
          <div className={cn(
            "p-3 rounded-xl bg-slate-50 dark:bg-surface/50 border border-slate-200 dark:border-white/5 transition-colors duration-300",
            currentHoverStyle.iconBg,
            currentHoverStyle.icon
          )}>
            <Icon className={cn("w-6 h-6 transition-colors", value.colors.primary)} />
          </div>

          <div className="flex gap-1.5">
             <div className={cn("w-1.5 h-1.5 rounded-full", value.colors.marker)} />
             <div className={cn("w-1.5 h-1.5 rounded-full opacity-30", value.colors.marker)} />
          </div>
        </div>

        <div className="space-y-3 mt-8">
          <h3 className={cn(
            "text-2xl font-display font-bold transition-colors",
            "text-slate-900 dark:text-white"
          )}>
            {value.title}
          </h3>
          <p className="text-slate-600 dark:text-gray-400 leading-relaxed group-hover:text-slate-700 dark:group-hover:text-gray-300 transition-colors">
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
        <div className="mb-16 md:mb-24 max-w-3xl">
          <FadeIn>
            <div className="flex items-center gap-2 mb-4 text-primary font-mono text-xs tracking-widest uppercase">
              <Terminal className="w-4 h-4" />
              <span>CORE PRINCIPLES</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-slate-900 dark:text-white">
              Metodologia Prima <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
                delle Tecnologie
              </span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-gray-300 leading-relaxed">
              Non esistono template magici. Ogni progetto è un problema unico che richiede analisi tecnica, decisioni ponderate e implementazione rigorosa.
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
