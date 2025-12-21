'use client'

import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { motion } from 'framer-motion'
import { Users, Code, Rocket, Repeat } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Methodology_Bento() {
  return (
    <Section className="py-24">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Il Metodo NeuraLabs
          </h2>
          <p className="text-xl text-text-secondary">
            Un approccio pragmatico per trasformare la tua visione in realtà digitale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">
          
          {/* Card 1: Large - Discovery */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="md:col-span-2 rounded-3xl p-8 md:p-12 bg-surface border border-border relative overflow-hidden group hover:border-primary/50 transition-colors"
          >
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center mb-6">
                <Users size={24} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">1. Dialogo & Strategia</h3>
              <p className="text-text-secondary text-lg leading-relaxed max-w-xl">
                Non partiamo mai dal codice. Partiamo da te. Analizziamo i tuoi obiettivi e definiamo insieme *cosa* creare. Capire il "perché" è fondamentale per scegliere le tecnologie giuste e non sprecare risorse.
              </p>
            </div>
            <div className="absolute right-0 bottom-0 w-64 h-64 bg-gradient-to-tl from-primary/10 to-transparent rounded-tl-full translate-x-12 translate-y-12" />
          </motion.div>

          {/* Card 2: Vertical - Innovative Tech */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="md:col-span-1 rounded-3xl p-8 bg-surface-dark border border-border relative overflow-hidden flex flex-col justify-between"
          >
             <div>
              <div className="w-12 h-12 rounded-full bg-cyan-500/20 text-cyan-500 flex items-center justify-center mb-6">
                <Code size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Tech Innovativa</h3>
              <p className="text-text-secondary text-sm">
                Sfruttiamo AI e stack moderni per ridurre i tempi di sviluppo senza sacrificare la qualità.
              </p>
             </div>
             <div className="mt-8 font-mono text-xs text-text-muted space-y-1">
               <div className="bg-background/50 p-2 rounded">Next.js 14</div>
               <div className="bg-background/50 p-2 rounded">AI Agents</div>
               <div className="bg-background/50 p-2 rounded">Supabase</div>
             </div>
          </motion.div>

          {/* Card 3: Vertical - Agile */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="md:col-span-1 rounded-3xl p-8 bg-surface border border-border relative overflow-hidden"
          >
            <div className="w-12 h-12 rounded-full bg-violet-500/20 text-violet-500 flex items-center justify-center mb-6">
              <Rocket size={24} />
            </div>
            <h3 className="text-xl font-bold mb-4">Sprint & Demo</h3>
            <p className="text-text-secondary">
              Lavoriamo a "Sprint". Ogni 2 settimane ti mostriamo qualcosa che funziona. Niente black box.
            </p>
          </motion.div>

          {/* Card 4: Wide - Feedback Loop */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 rounded-3xl p-8 md:p-12 bg-gradient-to-br from-surface to-surface-light border border-border relative overflow-hidden"
          >
             <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center">
                <div className="flex-1">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mb-6">
                    <Repeat size={24} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">3. Miglioriamo Insieme</h3>
                  <p className="text-text-secondary text-lg leading-relaxed">
                    Il tuo feedback è il nostro carburante. Guardiamo insieme il prototipo, capiamo cosa funziona e cosa no, e iteriamo velocemente verso la perfezione.
                  </p>
                </div>
                {/* Visual abstract representation of a cycle */}
                <div className="w-32 h-32 rounded-full border-4 border-dashed border-emerald-500/30 animate-[spin_10s_linear_infinite] flex items-center justify-center">
                   <div className="w-20 h-20 rounded-full bg-emerald-500/10" />
                </div>
             </div>
          </motion.div>

        </div>
      </Container>
    </Section>
  )
}
