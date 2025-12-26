'use client'

import { useRef } from 'react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Terminal, ArrowRight } from 'lucide-react'
import { methodologyData } from '@/data/methodology-content'

// --- COMPONENTI VISUALI HUD ---

function HudCard({ step, index }: { step: typeof methodologyData[0], index: number }) {
  // Construct a tech string from the deliverables for the preview
  const techDetail = step.deliverables.slice(0, 3).join(' • ')

  return (
    <div className="relative overflow-hidden rounded-xl bg-surface/30 backdrop-blur-sm border border-border/50 p-4 font-mono text-xs shadow-lg group-hover:border-primary/20 transition-colors">
      <div className={cn("absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r", step.color)} />
      
      {/* Header HUD */}
      <div className="flex justify-between items-center mb-3 opacity-50 border-b border-border/50 pb-2">
        <span className="uppercase">SYS.MONITOR.0{index + 1}</span>
        <div className="flex gap-1">
          <div className="w-2 h-2 rounded-full bg-current animate-pulse" />
        </div>
      </div>

      {/* Content */}
      <div className="space-y-2">
        {techDetail.split('•').map((detail, i) => (
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
          viewport={{ once: true }}
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

  const clipPath = useTransform(scaleY, [0, 1], ["inset(0 0 100% 0)", "inset(0 0 0% 0)"])

  return (
    <Section id="process" className="py-24 relative overflow-hidden bg-background">
      {/* Sfondo tecnico sottile */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)', backgroundSize: '40px 40px' }} 
      />

      <Container ref={containerRef} className="relative">
        
        {/* Header */}
        <div className="mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4 text-primary font-mono text-xs tracking-widest uppercase">
              <Terminal className="w-4 h-4" />
              <span>SIGMA_FRAMEWORK</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-slate-900 dark:text-white">
              Come Trasformiamo Idee <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
                in Sistemi Funzionanti
              </span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-gray-300 leading-relaxed max-w-3xl">
              Il nostro metodo agile in 4 fasi porta progetti da concept a produzione
              in tempi certi. Sprint settimanali, review continue e deployment automatizzati:
              zero sorprese, solo milestone raggiunti e software che funziona dal day one.
            </p>
          </motion.div>
        </div>

        {/* Pipeline Container */}
        <div className="relative max-w-5xl mx-auto mb-20">
          
          {/* Central Line (Desktop) */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-0.5 bg-border/50 -translate-x-1/2 md:translate-x-0">
             <motion.div 
               style={{ clipPath }}
               className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-cyan-500 via-purple-500 via-orange-500 to-emerald-500"
             />
          </div>

          <div className="space-y-24 md:space-y-32">
            {methodologyData.map((step, index) => (
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

                {/* Text Content */}
                <div className="flex-1 w-full md:text-right md:pr-8 group">
                   {index % 2 !== 0 && <div className="hidden md:block text-right" />}
                   
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
                        <p className="text-text-secondary leading-relaxed">{step.shortDescription}</p>
                      </div>
                   </div>
                </div>

                {/* HUD Detail */}
                <div className="flex-1 w-full md:pl-8 hidden md:block">
                  <div className={cn(
                     "w-full max-w-xs",
                     index % 2 === 0 ? "ml-0" : "ml-auto"
                  )}>
                    <HudCard step={step} index={index} />
                  </div>
                </div>

                {/* Mobile HUD */}
                <div className="w-full md:hidden mt-4">
                  <HudCard step={step} index={index} />
                </div>

              </motion.div>
            ))}
          </div>

          {/* End Node */}
          <div className="absolute left-[20px] md:left-1/2 bottom-0 transform -translate-x-1/2 translate-y-full pt-8 flex flex-col items-center">
             <div className="w-3 h-3 rounded-full bg-primary shadow-[0_0_20px_rgba(249,115,22,0.5)]" />
          </div>

        </div>

        {/* Action Button */}
        <div className="flex justify-center mt-20">
          <Button asChild size="lg" className="rounded-full px-8 h-12 text-base">
            <Link href="/metodo">
              Esplora il Processo Completo <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>

      </Container>
    </Section>
  )
}
