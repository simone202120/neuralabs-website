'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { methodologyData } from '@/data/methodology-content'
import { Terminal, Database, Layout, Rocket, CheckCircle2, ChevronRight, Cpu, Zap, Activity } from 'lucide-react'

// --- VISUAL COMPONENTS FOR DEEP DIVE ---

function DetailedHudCard({ step }: { step: typeof methodologyData[0] }) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-surface/50 backdrop-blur-md border border-border/50 p-6 md:p-8 shadow-xl group hover:border-primary/20 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
      {/* Top Gradient Line */}
      <div className={cn("absolute top-0 left-0 w-full h-1 bg-gradient-to-r", step.color)} />
      
      {/* Tech Header */}
      <div className="flex justify-between items-center mb-6 opacity-60 border-b border-border/50 pb-4 font-mono text-xs tracking-wider">
        <span className="uppercase flex items-center gap-2">
            <Activity className="w-3 h-3" />
            SYS.MODULE.{step.id.split('-')[0]}
        </span>
        <div className="flex gap-1.5">
           <span className="text-primary animate-pulse">●</span> ONLINE
        </div>
      </div>

      {/* Main Description */}
      <div className="mb-8">
        <h4 className="text-lg font-bold mb-3 flex items-center gap-2 text-foreground">
            {step.tagline}
        </h4>
        <p className="text-text-secondary leading-relaxed text-sm md:text-base">
            {step.fullDescription}
        </p>
      </div>

      {/* Grid: Features & Deliverables */}
      <div className="grid grid-cols-1 gap-8 md:gap-4 mb-8">
         {/* Key Activities */}
         <div className="space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-widest text-text-muted mb-2 flex items-center gap-2">
                <Terminal className="w-3 h-3" /> Activities
            </h5>
            <ul className="space-y-2">
                {step.features.map((feature: any, i: number) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-text-secondary group/item">
                        <CheckCircle2 className={cn("w-4 h-4 mt-0.5 shrink-0 transition-colors", step.iconColor)} />
                        <span className="group-hover/item:text-foreground transition-colors">{feature.title}</span>
                    </li>
                ))}
            </ul>
         </div>
      </div>

      {/* Footer: Stack & Outputs */}
      <div className="pt-6 border-t border-border/50 grid grid-cols-1 md:grid-cols-2 gap-6">
         
         {/* Tech Stack */}
         <div>
            <h5 className="text-[10px] font-bold uppercase tracking-widest text-text-muted mb-3 flex items-center gap-2">
                <Cpu className="w-3 h-3" /> Stack
            </h5>
            <div className="flex flex-wrap gap-1.5">
                {step.techStack.map((tech: string) => (
                    <span key={tech} className="px-2 py-1 rounded bg-background border border-border text-[10px] font-mono text-text-secondary">
                        {tech}
                    </span>
                ))}
            </div>
         </div>

         {/* Deliverables */}
         <div>
             <h5 className="text-[10px] font-bold uppercase tracking-widest text-text-muted mb-3 flex items-center gap-2">
                <Zap className="w-3 h-3" /> Outputs
            </h5>
             <div className="flex flex-col gap-1">
                {step.deliverables.map((item: string) => (
                    <div key={item} className="flex items-center gap-1.5 text-[11px] text-text-secondary font-mono">
                        <ChevronRight className="w-3 h-3 opacity-50" />
                        {item}
                    </div>
                ))}
            </div>
         </div>
      </div>

      {/* Background Tech Pattern */}
      <div className="absolute -bottom-12 -right-12 w-32 h-32 opacity-[0.03] rotate-12 pointer-events-none">
          <step.icon className="w-full h-full" />
      </div>
    </div>
  )
}

export function MethodologyDeepDive() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  // Global background color transition
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [
      "rgba(6, 182, 212, 0.02)", // Start (Cyan tint)
      "rgba(139, 92, 246, 0.02)", // Middle (Purple tint)
      "rgba(249, 115, 22, 0.02)"  // End (Orange tint)
    ]
  )

  return (
    <motion.section 
        ref={containerRef}
        style={{ backgroundColor }}
        className="py-24 md:py-32 relative overflow-hidden bg-background transition-colors duration-1000"
    >
      {/* Technical Grid Background */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)', backgroundSize: '40px 40px' }} 
      />

      <Container className="relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-24 md:mb-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-light border border-border/50 text-xs font-mono text-text-muted mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span>FULL_PROCESS_DOCUMENTATION_V1.0</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 text-foreground tracking-tight">
              Ingegneria della <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-purple-500 to-orange-500">
                Trasformazione Digitale.
              </span>
            </h1>
            
            <p className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
              Esplora ogni singolo step del nostro protocollo. Dalla scoperta iniziale al deploy in produzione, nulla è lasciato al caso.
            </p>
          </motion.div>
        </div>

        {/* Pipeline Layout */}
        <div className="relative max-w-6xl mx-auto">
          
          {/* Central Line (Desktop) */}
          <div className="absolute left-[20px] lg:left-1/2 top-0 bottom-0 w-0.5 bg-border/30 -translate-x-1/2 lg:translate-x-0">
             <motion.div 
               style={{ scaleY, transformOrigin: "top" }}
               className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-cyan-500 via-violet-500 to-primary"
             />
          </div>

          <div className="space-y-32 lg:space-y-48 pb-32">
            {methodologyData.map((step, index) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className={cn(
                  "relative flex flex-col lg:flex-row gap-12 lg:gap-24 items-start pl-12 lg:pl-0",
                  // Alternating Layout
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                )}
              >
                
                {/* Central Node */}
                <div className="absolute left-0 lg:left-1/2 top-12 lg:top-12 -translate-x-1/2 w-10 h-10 rounded-full border-4 border-background bg-surface flex items-center justify-center z-10 shadow-2xl">
                   <div className={cn("w-3 h-3 rounded-full bg-gradient-to-r animate-pulse", step.color)} />
                </div>

                {/* Left Side: Title & Concept */}
                <div className="flex-1 w-full lg:text-right group pt-8 lg:pt-0">
                   <div className={cn(
                     "flex flex-col gap-6",
                     index % 2 === 0 ? "lg:items-end lg:text-right" : "lg:items-start lg:text-left"
                   )}>
                      {/* Icon Box */}
                      <div className={cn(
                        "w-16 h-16 rounded-2xl bg-surface-light flex items-center justify-center text-text-primary shadow-lg border border-border/50 group-hover:scale-110 transition-transform duration-500",
                        step.bgLightColor
                      )}>
                        <step.icon className={cn("w-8 h-8", step.iconColor)} />
                      </div>
                      
                      <div>
                        <div className={cn("text-xs font-mono font-bold uppercase tracking-widest mb-2 opacity-50", step.iconColor)}>
                            Step {step.id.split('-')[0]}
                        </div>
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-foreground">{step.title}</h2>
                        <h3 className="text-xl text-text-muted font-medium mb-4">{step.subtitle}</h3>
                        <p className="text-lg text-text-secondary leading-relaxed max-w-md">
                            {step.shortDescription}
                        </p>
                      </div>
                   </div>
                </div>

                {/* Right Side: Detailed Tech Panel (HUD) */}
                <div className="flex-1 w-full pt-4">
                  <DetailedHudCard step={step} />
                </div>

              </motion.div>
            ))}
          </div>

          {/* End Node */}
          <div className="absolute left-[20px] lg:left-1/2 bottom-0 transform -translate-x-1/2 translate-y-full pt-8 flex flex-col items-center">
             <div className="w-4 h-4 rounded-full bg-primary shadow-[0_0_30px_rgba(249,115,22,0.6)] animate-bounce" />
          </div>

        </div>

      </Container>
    </motion.section>
  )
}