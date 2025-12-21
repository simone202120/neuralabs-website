'use client'

import { useRef, useState, useEffect } from 'react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { motion, useInView } from 'framer-motion'
import { MessageSquare, Zap, RefreshCw, Layers, Terminal, LineChart } from 'lucide-react'
import { cn } from '@/lib/utils'

const steps = [
  {
    id: 1,
    title: "Ascolto & Visione",
    description: "Tutto inizia con una conversazione reale. Non ci limitiamo a leggere un documento di requisiti. Ci sediamo con te per capire a fondo la tua idea, il tuo business e, soprattutto, il 'perché' dietro al progetto.",
    icon: MessageSquare,
    color: "bg-blue-500",
    visualIcon: Layers,
    visualTitle: "Discovery",
    visualDesc: "Mappatura dei requisiti e Wireframing"
  },
  {
    id: 2,
    title: "Sprint & Prototipi",
    description: "Dimentica i mesi di attesa. Adottiamo la metodologia Agile: cicli brevi di sviluppo che producono risultati tangibili. Usiamo tecnologie innovative per crearti rapidamente una demo funzionante.",
    icon: Zap,
    color: "bg-amber-500",
    visualIcon: Terminal,
    visualTitle: "Development",
    visualDesc: "Next.js + AI Components Generation"
  },
  {
    id: 3,
    title: "Co-Creazione Iterativa",
    description: "Il primo prototipo è l'inizio del dialogo. Testiamo insieme la demo, raccogliamo i tuoi feedback e miglioriamo il prodotto in tempo reale fino alla perfezione.",
    icon: RefreshCw,
    color: "bg-emerald-500",
    visualIcon: LineChart,
    visualTitle: "Optimization",
    visualDesc: "Analisi dati e Feedback loop"
  }
]

// Componente per tracciare la visibilità di ogni step
function StepContent({ step, onInView }: { step: typeof steps[0], onInView: (id: number) => void }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" })

  useEffect(() => {
    if (isInView) onInView(step.id)
  }, [isInView, step.id, onInView])

  return (
    <div ref={ref} className="relative group py-12">
      <div className={cn(
        "inline-flex items-center justify-center w-12 h-12 rounded-xl text-white mb-6 shadow-lg transition-transform duration-500 group-hover:scale-110",
        step.color
      )}>
        <step.icon size={24} />
      </div>
      <h3 className="text-3xl font-bold mb-4">{step.title}</h3>
      <p className="text-lg text-text-secondary leading-relaxed">
        {step.description}
      </p>
    </div>
  )
}

export function Methodology_Sticky() {
  const [activeStep, setActiveStep] = useState(1)
  
  return (
    <Section className="py-24 relative">
      <Container>
        <div className="mb-16 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Costruiamo insieme,<br />passo dopo passo.
          </h2>
          <p className="text-lg text-text-secondary">
            Il nostro metodo elimina le sorprese. Ti guidiamo dalla visione al lancio con trasparenza totale.
          </p>
        </div>

        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Left Column: Scrollable Content */}
          <div className="space-y-12 pb-24">
            {steps.map((step) => (
              <StepContent key={step.id} step={step} onInView={setActiveStep} />
            ))}
          </div>

          {/* Right Column: Sticky Visual */}
          <div className="hidden lg:block relative h-full">
            <div className="sticky top-1/4 h-[500px] w-full bg-surface-dark/50 backdrop-blur-md rounded-3xl border border-border overflow-hidden flex flex-col items-center justify-center p-8 transition-colors duration-500">
              
              {/* Background Glow based on active step color */}
              <div className={cn(
                "absolute inset-0 opacity-10 transition-colors duration-700",
                steps[activeStep - 1].color.replace('bg-', 'bg-') // Uses the same color class but applied to bg
              )} />
              
              {/* Animated Content */}
              <div className="relative z-10 text-center w-full max-w-xs">
                {steps.map((step) => (
                   step.id === activeStep && (
                     <motion.div
                        key={step.id}
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0 flex flex-col items-center justify-center"
                        style={{ position: 'relative' }} // Override absolute specifically for the flex container behavior
                     >
                        <div className={cn(
                          "w-32 h-32 rounded-3xl mb-8 flex items-center justify-center shadow-2xl",
                          "bg-surface border border-white/10"
                        )}>
                          <step.visualIcon className={cn("w-16 h-16", step.color.replace('bg-', 'text-'))} />
                        </div>
                        <h4 className="text-2xl font-bold mb-2">{step.visualTitle}</h4>
                        <p className="text-text-muted">{step.visualDesc}</p>
                     </motion.div>
                   )
                ))}
              </div>

              {/* Progress Indicators */}
              <div className="absolute bottom-8 flex gap-3">
                {steps.map((s) => (
                  <div 
                    key={s.id}
                    className={cn(
                      "w-2 h-2 rounded-full transition-all duration-300",
                      activeStep === s.id ? "w-8 bg-primary" : "bg-border"
                    )}
                  />
                ))}
              </div>

            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
