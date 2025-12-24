'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { ArrowRight, Ruler, MousePointer2, Layers } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export function BlueprintCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: "-20% 0px", once: true })

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden bg-slate-50 dark:bg-[#0B1120]">
      
      {/* 1. Blueprint Grid Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]"
           style={{
             backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
             backgroundSize: '40px 40px'
           }}
      />
      {/* Secondary finer grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] dark:opacity-[0.03]"
           style={{
             backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
             backgroundSize: '10px 10px'
           }}
      />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Text & Action */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="flex items-center gap-3 text-primary font-mono text-xs tracking-widest uppercase">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span>Project Status: Ready to Build</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 dark:text-white leading-[1.1]">
              Dall'idea alla <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
                Struttura Solida.
              </span>
            </h2>

            <p className="text-lg text-slate-600 dark:text-gray-400 leading-relaxed max-w-xl border-l-2 border-slate-200 dark:border-white/10 pl-6">
              Non lasciamo nulla al caso. Ingegnerizziamo ogni aspetto del tuo prodotto digitale per garantire scalabilità, sicurezza e performance misurabili.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild size="lg" className="h-14 px-8 rounded-none border-l-4 border-primary/50 text-base font-bold tracking-wide shadow-xl">
                <Link href="/contatti">
                  AVVIA PROGETTO <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              
              <div className="flex items-center gap-4 px-6 py-2 border border-dashed border-slate-300 dark:border-white/20 bg-white/50 dark:bg-white/5 backdrop-blur-sm">
                 <div className="text-xs font-mono text-slate-500 dark:text-gray-400">
                    <div className="font-bold text-slate-900 dark:text-white">EST. TIMELINE</div>
                    <div>4-8 WEEKS</div>
                 </div>
                 <div className="w-px h-8 bg-slate-300 dark:bg-white/20" />
                 <div className="text-xs font-mono text-slate-500 dark:text-gray-400">
                    <div className="font-bold text-slate-900 dark:text-white">AVAILABILITY</div>
                    <div className="text-green-600 dark:text-green-400">OPEN SLOTS</div>
                 </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Technical Drawing Animation */}
          <div className="relative aspect-square md:aspect-[4/3] lg:aspect-square flex items-center justify-center">
            
            {/* Drawing Container */}
            <div className="relative w-full max-w-md">
                
                {/* Measurement Lines (Decor) */}
                <div className="absolute -left-8 top-0 bottom-0 w-px bg-slate-300 dark:bg-white/20 flex flex-col justify-between py-4">
                    <span className="w-2 h-px bg-slate-400" />
                    <span className="w-2 h-px bg-slate-400" />
                    <span className="absolute left-2 top-1/2 -rotate-90 origin-left text-[10px] font-mono text-slate-400 whitespace-nowrap">AXIS Y - SCALE 1:1</span>
                </div>
                <div className="absolute -bottom-8 left-0 right-0 h-px bg-slate-300 dark:bg-white/20 flex justify-between px-4">
                    <span className="h-2 w-px bg-slate-400" />
                    <span className="h-2 w-px bg-slate-400" />
                    <span className="absolute top-2 left-1/2 -translate-x-1/2 text-[10px] font-mono text-slate-400 whitespace-nowrap">AXIS X - WIDTH 100%</span>
                </div>

                {/* Animated Isometric Cube (SVG) */}
                <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-2xl">
                    {/* Define Gradient */}
                    <defs>
                        <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
                            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                        </linearGradient>
                    </defs>

                    {/* Base Shape Fill (Fades in) */}
                    <motion.path
                        d="M100 180 L20 140 L20 60 L100 20 L180 60 L180 140 Z"
                        fill="url(#blueGradient)"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 1, delay: 0.5 }}
                    />

                    {/* Outer Outline (Draws) */}
                    <motion.path
                        d="M100 180 L20 140 L20 60 L100 20 L180 60 L180 140 Z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-slate-900 dark:text-white"
                        initial={{ pathLength: 0 }}
                        animate={isInView ? { pathLength: 1 } : {}}
                        transition={{ duration: 2, ease: "easeInOut" }}
                    />

                    {/* Inner Cube Lines (Draws) */}
                    <motion.path
                        d="M100 180 L100 100 M20 60 L100 100 M180 60 L100 100"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-slate-900 dark:text-white"
                        initial={{ pathLength: 0 }}
                        animate={isInView ? { pathLength: 1 } : {}}
                        transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
                    />

                    {/* Floating Elements (Layer Effect) */}
                    <motion.rect
                        x="85" y="0" width="30" height="30" rx="4"
                        fill="none"
                        stroke="#f97316" /* Primary Color (Orange) */
                        strokeWidth="2"
                        initial={{ y: 40, opacity: 0 }}
                        animate={isInView ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: 1, delay: 1.5, type: "spring" }}
                    />
                    
                    {/* Connection Dots */}
                    <motion.circle cx="100" cy="20" r="3" className="fill-primary" initial={{ scale: 0 }} animate={isInView ? { scale: 1 } : {}} transition={{ delay: 2 }} />
                    <motion.circle cx="20" cy="60" r="3" className="fill-slate-400" initial={{ scale: 0 }} animate={isInView ? { scale: 1 } : {}} transition={{ delay: 2.1 }} />
                    <motion.circle cx="180" cy="60" r="3" className="fill-slate-400" initial={{ scale: 0 }} animate={isInView ? { scale: 1 } : {}} transition={{ delay: 2.2 }} />
                </svg>

                {/* Floating Label */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 2.5 }}
                    className="absolute -top-4 -right-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 px-3 py-1 shadow-lg"
                >
                    <div className="flex items-center gap-2">
                        <Layers className="w-3 h-3 text-primary" />
                        <span className="text-[10px] font-bold text-slate-900 dark:text-white">ARCH. V1.0</span>
                    </div>
                </motion.div>

            </div>
          </div>

        </div>
      </Container>
    </section>
  )
}
