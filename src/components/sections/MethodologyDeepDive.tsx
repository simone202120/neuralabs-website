'use client'

import { useRef } from 'react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { FadeIn, StaggerContainer } from '@/components/animations'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { cn } from '@/lib/utils'
import { 
  AudioWaveform, 
  CircuitBoard, 
  Infinity as InfinityIcon, 
  FileText, 
  Code2, 
  Database, 
  Cpu, 
  Layers, 
  Rocket,
  CheckCircle2,
  ArrowDown
} from 'lucide-react'

// Dati dettagliati del metodo
const phases = [
  {
    id: '01',
    name: 'Sintonia',
    tagline: 'Discovery & Architecture',
    description: "Prima di scrivere una riga di codice, decodifichiamo il tuo bisogno. Trasformiamo idee astratte in specifiche tecniche inattaccabili.",
    icon: AudioWaveform,
    color: 'cyan',
    inputs: [
      "Visione del Founder",
      "Analisi Competitor",
      "Dati Storici (se presenti)",
      "Brand Guidelines"
    ],
    process: "Utilizziamo workshop interattivi e AI brainstorming per esplorare lo spazio delle soluzioni. Definiamo lo stack tecnologico ideale non per 'moda', ma per efficienza.",
    outputs: [
      "Architettura del Sistema",
      "Wireframe & UI Design",
      "Specifiche Tecniche (PRD)",
      "Roadmap di Sviluppo"
    ],
    tools: ["Figma", "Miro", "Notion", "Claude AI"]
  },
  {
    id: '02',
    name: 'Fusione',
    tagline: 'AI-Augmented Development',
    description: "Sviluppo ibrido. I nostri ingegneri senior guidano l'architettura, mentre agenti AI accelerano la scrittura del codice boilerplate.",
    icon: CircuitBoard,
    color: 'violet',
    inputs: [
      "Approvazione Design",
      "Asset Grafici",
      "Accesso API/Database",
      "Content Strategy"
    ],
    process: "Cicli di sviluppo rapidi (Sprint settimanali). Ogni componente viene testato atomicamente. L'AI ci permette di generare test unitari e documentazione in tempo reale.",
    outputs: [
      "Codice Sorgente Clean",
      "Ambiente di Staging",
      "Integrazione CI/CD",
      "Suite di Test Automatizzati"
    ],
    tools: ["VS Code", "GitHub Copilot", "Next.js", "Supabase", "Vercel"]
  },
  {
    id: '03',
    name: 'Evoluzione',
    tagline: 'Launch & Growth Loop',
    description: "Il deploy è solo l'inizio. Monitoriamo le performance reali e usiamo i dati per iterare e migliorare il prodotto.",
    icon: InfinityIcon,
    color: 'orange',
    inputs: [
      "User Feedback",
      "Analytics Data",
      "Performance Metrics",
      "Market Response"
    ],
    process: "Monitoraggio attivo 24/7. Analisi dei funnel di conversione. Aggiunta di nuove feature basate su dati reali, non su supposizioni.",
    outputs: [
      "Deploy in Produzione",
      "Dashboard Analytics",
      "Manuale Utente",
      "Piano di Manutenzione"
    ],
    tools: ["PostHog", "Sentry", "Google Analytics", "Resend"]
  }
]

function PhaseCard({ phase, index }: { phase: (typeof phases)[0]; index: number }) {
  const isLast = index === phases.length - 1
  
  // Dynamic color classes based on phase color
  const colors = {
    cyan: {
      bg: 'bg-cyan-500/5',
      border: 'border-cyan-500/20',
      text: 'text-cyan-500',
      glow: 'shadow-cyan-500/10',
      gradient: 'from-cyan-500/20'
    },
    violet: {
      bg: 'bg-violet-500/5',
      border: 'border-violet-500/20',
      text: 'text-violet-500',
      glow: 'shadow-violet-500/10',
      gradient: 'from-violet-500/20'
    },
    orange: {
      bg: 'bg-orange-500/5',
      border: 'border-orange-500/20',
      text: 'text-orange-500',
      glow: 'shadow-orange-500/10',
      gradient: 'from-orange-500/20'
    }
  }[phase.color] || colors.cyan // Fallback logic is actually wrong in TS without type assertion but works in JS logic. Fixed below.
  
  // Safe accessor
  const theme = (phase.color === 'violet' ? {
      bg: 'bg-violet-500/5', border: 'border-violet-500/20', text: 'text-violet-400', glow: 'shadow-violet-500/10', marker: 'bg-violet-500'
    } : phase.color === 'orange' ? {
      bg: 'bg-primary/5', border: 'border-primary/20', text: 'text-primary', glow: 'shadow-primary/10', marker: 'bg-primary'
    } : {
      bg: 'bg-cyan-500/5', border: 'border-cyan-500/20', text: 'text-cyan-400', glow: 'shadow-cyan-500/10', marker: 'bg-cyan-500'
    })

  return (
    <div className="relative pl-8 md:pl-0">
      {/* Mobile Timeline Line */}
      <div className="md:hidden absolute left-3 top-0 bottom-0 w-px bg-border">
        {!isLast && <div className={cn("absolute top-0 bottom-0 w-full bg-gradient-to-b", theme.marker, "opacity-20")} />}
      </div>
      
      {/* Timeline Marker (Mobile & Desktop) */}
      <div className={cn(
        "absolute left-0 md:left-1/2 w-6 h-6 rounded-full border-4 border-background z-10",
        theme.marker,
        "md:-translate-x-1/2 mt-8 md:mt-0 shadow-lg"
      )} />

      <div className={cn(
        "grid md:grid-cols-2 gap-8 md:gap-24 pt-8 md:pt-0",
        index % 2 === 0 ? "" : "md:flex-row-reverse" // Alternating layout
      )}>
        
        {/* LEFT SIDE (or RIGHT based on index): The Core Content */}
        <div className={cn(
          "relative",
          index % 2 === 0 ? "md:text-right" : "md:col-start-2 md:text-left"
        )}>
          <FadeIn>
            <div className="sticky top-24">
              <span className={cn("font-mono text-sm tracking-widest uppercase font-bold", theme.text)}>
                Fase {phase.id}
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold mt-2 mb-4">
                {phase.name}
              </h2>
              <p className={cn("text-lg font-medium mb-6", theme.text)}>
                {phase.tagline}
              </p>
              <p className="text-text-secondary text-lg leading-relaxed mb-8">
                {phase.description}
              </p>

              {/* Tools Used */}
              <div className={cn(
                "flex flex-wrap gap-3",
                index % 2 === 0 ? "md:justify-end" : "md:justify-start"
              )}>
                {phase.tools.map((tool) => (
                  <span 
                    key={tool}
                    className="px-3 py-1 rounded-full text-xs font-mono border border-border bg-surface text-text-secondary"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

        {/* RIGHT SIDE (or LEFT based on index): The Details Card */}
        <div className={cn(
          "relative",
          index % 2 === 0 ? "md:col-start-2" : "md:row-start-1"
        )}>
          <FadeIn delay={0.2}>
            <div className={cn(
              "rounded-2xl border p-6 md:p-8 backdrop-blur-sm transition-all duration-500",
              theme.bg, theme.border, 
              `hover:${theme.glow} hover:shadow-xl`
            )}>
              {/* Input Section */}
              <div className="mb-8">
                <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider mb-4 text-text-primary">
                  <ArrowDown className="w-4 h-4 text-text-muted" /> Inputs
                </h4>
                <ul className="space-y-3">
                  {phase.inputs.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-text-secondary">
                      <div className={cn("w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 opacity-50", theme.marker)} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Process Highlight */}
              <div className="mb-8 p-4 rounded-lg bg-surface/50 border border-border">
                <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider mb-2 text-text-primary">
                  <Cpu className="w-4 h-4 text-text-muted" /> Processing
                </h4>
                <p className="text-sm text-text-secondary leading-relaxed italic">
                  &ldquo;{phase.process}&rdquo;
                </p>
              </div>

              {/* Output Section */}
              <div>
                <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider mb-4 text-text-primary">
                  <Rocket className="w-4 h-4 text-text-muted" /> Deliverables
                </h4>
                <div className="grid grid-cols-1 gap-2">
                  {phase.outputs.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-2 rounded hover:bg-surface transition-colors">
                      <CheckCircle2 className={cn("w-4 h-4", theme.text)} />
                      <span className="text-sm font-medium text-text-primary">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

      </div>
    </div>
  )
}

export function MethodologyDeepDive() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })

  return (
    <Section ref={containerRef} className="py-24 relative overflow-hidden">
      <Container>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border text-xs font-mono text-text-muted mb-6">
              <Layers className="w-3 h-3" />
              <span>THE NEURALABS FRAMEWORK</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-8">
              Dal Caos all&apos;Ordine
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed">
              Il nostro processo non è lineare, è evolutivo. 
              Ogni fase è progettata per ridurre il rischio e massimizzare il valore,
              usando l&apos;AI come acceleratore.
            </p>
          </FadeIn>
        </div>

        {/* Central Timeline Line (Desktop) */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2">
          <motion.div 
            className="absolute top-0 left-0 right-0 w-full origin-top bg-gradient-to-b from-cyan-500 via-violet-500 to-orange-500"
            style={{ scaleY: scrollYProgress, height: '100%' }}
          />
        </div>

        {/* Phases */}
        <div className="space-y-32">
          {phases.map((phase, index) => (
            <PhaseCard key={phase.id} phase={phase} index={index} />
          ))}
        </div>
        
        {/* Final Node */}
        <div className="hidden md:flex absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 items-center justify-center w-8 h-8 rounded-full border-4 border-background bg-text-primary z-10" />

      </Container>
    </Section>
  )
}
