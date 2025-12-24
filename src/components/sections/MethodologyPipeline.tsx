'use client'

import { useRef } from 'react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Terminal, Database, Layout, Rocket, GitBranch, Shield, Cpu, Zap } from 'lucide-react'

// --- DATI DEL PROCESSO ---

const steps = [
  {
    id: '01',
    title: 'Analisi & Blueprint',
    description: "Traduciamo la tua visione in specifiche tecniche. Niente ambiguità: usiamo wireframe, diagrammi di flusso e user stories chiare.",
    icon: Database,
    techDetail: 'SRS Document • ER Diagram • Tech Stack Selection',
    color: 'from-blue-500 to-cyan-500',
    side: 'left'
  },
  {
    id: '02',
    title: 'UX/UI Engineering',
    description: "Non solo design, ma sistemi scalabili. Creiamo interfacce che uniscono estetica mozzafiato e usabilità rigorosa.",
    icon: Layout,
    techDetail: 'Figma Design System • Component Library • Accessibility AA',
    color: 'from-purple-500 to-pink-500',
    side: 'right'
  },
  {
    id: '03',
    title: 'Sviluppo Agile',
    description: "Sprint bisettimanali e codice pulito. Architetture scalabili su Next.js e Supabase, tipizzate e testate.",
    icon: Terminal,
    techDetail: 'CI/CD Pipeline • Jest Testing • Clean Architecture',
    color: 'from-amber-500 to-orange-500',
    side: 'left'
  },
  {
    id: '04',
    title: 'Deploy & Scale',
    description: "Il lancio è solo l'inizio. Monitoriamo le performance in tempo reale e iteriamo basandoci sui dati.",
    icon: Rocket,
    techDetail: 'Vercel Edge • Analytics • Error Tracking',
    color: 'from-emerald-500 to-green-500',
    side: 'right'
  }
]

// --- COMPONENTI VISUALI HUD ---

function HudCard({ step }: { step: typeof steps[0] }) {
  return (
    <div className="relative overflow-hidden rounded-xl bg-surface/30 backdrop-blur-sm border border-white/10 p-4 font-mono text-xs shadow-lg">
      <div className={cn("absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r", step.color)} />
      
      {/* Header HUD */}
      <div className="flex justify-between items-center mb-3 opacity-50 border-b border-white/5 pb-2">
        <span>SYS.MONITOR.{step.id}</span>
        <div className="flex gap-1">
          <div className="w-2 h-2 rounded-full bg-current animate-pulse" />
        </div>
      </div>

      {/* Content */}
      <div className="space-y-2">
        {step.techDetail.split('•').map((detail, i) => (
          <div key={i} className="flex items-center gap-2">
             <div className={cn("w-1 h-1 rounded-full bg-gradient-to-r", step.color)} />
             <span className="text-text-secondary">{detail.trim()}</span>
          </div>
        ))}
      </div>

      {/* Decorative tech graphic */}
      <div className="mt-4 h-1 w-full bg-surface-light/30 rounded-full overflow-hidden">
        <motion.div 
          className={cn("h-full bg-gradient-to-r", step.color)}
          initial={{ width: "0%" }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 1.5, ease: "circOut" }}
        />
      </div>
      <div className="flex justify-between mt-1 text-[9px] text-text-muted">
        <span>LOAD</span>
        <span>100%</span>
      </div>
    </div>
  )
}

export function MethodologyPipeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  })

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <Section id="process" className="py-24 relative overflow-hidden">
      {/* Sfondo tecnico sottile */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)', backgroundSize: '40px 40px' }} 
      />

      <Container ref={containerRef}>
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-light border border-border/50 text-xs font-mono text-text-muted mb-6">
              <Cpu className="w-3 h-3" />
              <span>NEURA_ENGINEERING_PROTOCOL</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Non solo parole.<br/>
              Un processo <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">ingegnerizzato.</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-xl mx-auto">
              Abbiamo trasformato la creatività in un workflow replicabile. 
              Ogni fase è un modulo testato che garantisce output prevedibili.
            </p>
          </motion.div>
        </div>

        {/* Pipeline Container */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Central Line (Desktop) */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-0.5 bg-border/50 -translate-x-1/2 md:translate-x-0">
             <motion.div 
               style={{ scaleY, transformOrigin: "top" }}
               className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary via-purple-500 to-emerald-500"
             />
          </div>

          <div className="space-y-24 md:space-y-32">
            {steps.map((step, index) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className={cn(
                  "relative flex flex-col md:flex-row gap-8 md:gap-16 items-start md:items-center pl-12 md:pl-0",
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                )}
              >
                
                {/* Central Node */}
                <div className="absolute left-0 md:left-1/2 top-0 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 w-10 h-10 rounded-full border-4 border-background bg-surface flex items-center justify-center z-10 shadow-xl">
                   <div className={cn("w-3 h-3 rounded-full bg-gradient-to-r animate-pulse", step.color)} />
                </div>

                {/* Text Content (Left or Right based on index) */}
                <div className="flex-1 w-full md:text-right md:pr-8 group">
                   {index % 2 !== 0 && <div className="hidden md:block text-right">
                      {/* Placeholder to keep alignment if needed, or render text here for right side on desktop */}
                   </div>}
                   
                   <div className={cn(
                     "flex flex-col gap-4",
                     index % 2 === 0 ? "md:items-end md:text-right" : "md:items-start md:text-left"
                   )}>
                      <div className={cn(
                        "w-12 h-12 rounded-2xl bg-surface-light flex items-center justify-center text-text-primary shadow-sm group-hover:scale-110 transition-transform duration-300",
                        "bg-gradient-to-br from-white/5 to-white/0 border border-white/10"
                      )}>
                        <step.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-display font-bold mb-2">{step.title}</h3>
                        <p className="text-text-secondary leading-relaxed">{step.description}</p>
                      </div>
                   </div>
                </div>

                {/* HUD Detail (Opposite Side) */}
                <div className="flex-1 w-full md:pl-8 hidden md:block">
                  <div className={cn(
                     "w-full max-w-xs",
                     index % 2 === 0 ? "ml-0" : "ml-auto"
                  )}>
                    <HudCard step={step} />
                  </div>
                </div>

                {/* Mobile HUD (Show below text on mobile) */}
                <div className="w-full md:hidden mt-4">
                  <HudCard step={step} />
                </div>

              </motion.div>
            ))}
          </div>

          {/* End Node */}
          <div className="absolute left-[20px] md:left-1/2 bottom-0 transform -translate-x-1/2 translate-y-full pt-8 flex flex-col items-center">
             <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.5)]" />
             <div className="h-12 w-[1px] bg-gradient-to-b from-emerald-500 to-transparent" />
          </div>

        </div>
      </Container>
    </Section>
  )
}
