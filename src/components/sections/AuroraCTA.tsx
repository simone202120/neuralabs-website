'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export function AuroraCTA() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-background">
      
      {/* 1. Aurora Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top Center Glow (Primary) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/20 dark:bg-primary/10 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-screen opacity-50 animate-pulse-slow" />
        
        {/* Bottom Right Glow (Blue) */}
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-400/20 dark:bg-blue-500/10 blur-[100px] rounded-full mix-blend-multiply dark:mix-blend-screen opacity-50" />
        
        {/* Bottom Left Glow (Purple) */}
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-400/20 dark:bg-purple-500/10 blur-[100px] rounded-full mix-blend-multiply dark:mix-blend-screen opacity-30" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-xs font-medium text-slate-600 dark:text-gray-300 uppercase tracking-wider">Start your Journey</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 dark:text-white tracking-tight leading-[1.1]"
          >
            Ready to transform <br className="hidden md:block" />
            your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">digital future?</span>
          </motion.h2>

          {/* Subtext */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-slate-600 dark:text-gray-400 leading-relaxed max-w-xl mx-auto"
          >
            Che tu abbia una startup o un'azienda consolidata, abbiamo gli strumenti e l'esperienza per scalare il tuo business.
          </motion.p>

          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Button asChild size="lg" className="h-14 px-8 rounded-full text-base font-medium shadow-lg hover:shadow-primary/25 transition-all hover:scale-105">
              <Link href="/contatti">
                Parliamo del progetto <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            
            <Button asChild variant="ghost" size="lg" className="h-14 px-8 rounded-full text-base text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5">
               <Link href="/progetti">
                  Vedi i nostri lavori
               </Link>
            </Button>
          </motion.div>

        </div>
      </Container>
    </section>
  )
}
