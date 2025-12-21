'use client'

import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { CheckCircle2, MessageSquare, ArrowUpRight, Terminal, CheckSquare } from 'lucide-react'

// --- MICRO-COMPONENTS PER I VISUAL ---

// 1. Visual: Code Editor (Tech)
function CodeVisual() {
  return (
    // Editor code stays dark even in light mode for realism, but with proper border/shadow
    <div className="w-full h-full bg-[#1E1E1E] p-4 font-mono text-xs text-gray-300 overflow-hidden select-none">
      <div className="flex gap-1.5 mb-3">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
      </div>
      <div className="space-y-1 opacity-90">
        <div className="flex flex-wrap">
          <span className="text-purple-400 mr-2">const</span>
          <span className="text-yellow-300">NeuraProject</span>
          <span className="text-white mx-2">=</span>
          <span className="text-blue-400">async</span>
          <span className="text-white">()</span>
          <span className="text-purple-400 mx-2">=&gt;</span>
          <span className="text-white">{`{`}</span>
        </div>
        <div className="pl-4">
          <span className="text-purple-400">await</span>
          <span className="text-blue-300 ml-2">analyzeNeeds</span>
          <span className="text-white">();</span>
        </div>
        <div className="pl-4">
          <span className="text-purple-400">const</span>
          <span className="text-gray-300 ml-2">mvp</span>
          <span className="text-white mx-2">=</span>
          <span className="text-green-400">"Ready in 2 weeks"</span>
          <span className="text-white">;</span>
        </div>
        <div className="pl-4">
          <span className="text-purple-400">return</span>
          <span className="text-blue-300 ml-2">launch</span>
          <span className="text-white">(mvp);</span>
        </div>
        <div className="text-white">{`}`}</div>
      </div>
    </div>
  )
}

// 2. Visual: Kanban Board (Agile)
function KanbanVisual() {
  return (
    <div className="w-full h-full bg-surface-light/50 p-3 flex gap-2 overflow-hidden">
      {[
        { title: 'To Do', items: 1, color: 'bg-gray-500/20' },
        { title: 'In Progress', items: 2, color: 'bg-blue-500/20' },
        { title: 'Done', items: 3, color: 'bg-emerald-500/20' }
      ].map((col, i) => (
        <div key={i} className={cn("flex-1 rounded-lg p-2 flex flex-col gap-2", col.color)}>
          <div className="text-[10px] font-bold uppercase tracking-wider opacity-50 mb-1 dark:text-white text-gray-700">{col.title}</div>
          {Array.from({ length: col.items }).map((_, j) => (
            <motion.div 
              key={j}
              initial={{ y: 0 }}
              animate={i === 1 && j === 0 ? { y: [0, -2, 0] } : {}}
              transition={{ repeat: Infinity, duration: 2, delay: j * 0.5 }}
              className="h-6 bg-surface rounded border border-border shadow-sm" 
            />
          ))}
        </div>
      ))}
    </div>
  )
}

// 3. Visual: Chat/Requirements (Discovery)
function ChatVisual() {
  return (
    <div className="w-full h-full bg-surface-light/30 p-4 flex flex-col gap-3 overflow-hidden">
      <div className="flex gap-2 items-end">
        <div className="w-6 h-6 rounded-full bg-primary/20 flex-shrink-0" />
        <div className="bg-surface rounded-2xl rounded-bl-none p-2 px-3 max-w-[80%] text-[10px] leading-relaxed text-text-secondary border border-border">
          Vorremmo un sistema che scali automaticamente...
        </div>
      </div>
      <div className="flex gap-2 items-end flex-row-reverse">
        <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex-shrink-0" />
        <div className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-2xl rounded-br-none p-2 px-3 max-w-[80%] text-[10px] leading-relaxed border border-emerald-500/20">
          Ricevuto. Useremo un'architettura serverless su Vercel.
        </div>
      </div>
      <div className="flex gap-2 items-center mt-1 ml-1 opacity-50">
        <div className="w-1 h-1 rounded-full bg-text-muted animate-bounce" />
        <div className="w-1 h-1 rounded-full bg-text-muted animate-bounce delay-75" />
        <div className="w-1 h-1 rounded-full bg-text-muted animate-bounce delay-150" />
      </div>
    </div>
  )
}

// 4. Visual: Stats/Growth (Result)
function StatsVisual() {
  return (
    <div className="w-full h-full bg-surface-light/30 p-4 flex flex-col justify-end overflow-hidden relative">
      <div className="absolute top-4 left-4 text-xs font-mono text-text-muted">PERFORMANCE</div>
      <div className="absolute top-8 left-4 text-xl font-bold text-emerald-600 dark:text-emerald-400">+127%</div>
      
      <div className="flex items-end gap-2 h-32 mt-4 px-2">
        {[30, 45, 35, 60, 55, 80, 75, 95].map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            whileInView={{ height: `${h}%` }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex-1 bg-emerald-500/20 rounded-t-sm hover:bg-emerald-500 transition-colors"
          />
        ))}
      </div>
    </div>
  )
}


export function Methodology_Concrete() {
  return (
    <Section className="py-24">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-text-primary">
            Non solo parole.<br/>
            Un processo ingegnerizzato.
          </h2>
          <p className="text-lg text-text-secondary">
            Ogni fase del nostro metodo produce un output concreto. Niente fumo, solo arrosto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 auto-rows-auto md:auto-rows-[320px]">
          
          {/* Card 1: Discovery (Large Left) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="md:col-span-3 lg:col-span-7 rounded-3xl bg-surface border border-border p-6 md:p-8 flex flex-col md:block justify-between overflow-hidden relative group min-h-[300px]"
          >
            <div className="relative z-10 mb-8 md:mb-0">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg text-primary"><MessageSquare size={20} /></div>
                <h3 className="text-xl font-bold text-text-primary">1. Analisi & Requisiti</h3>
              </div>
              <p className="text-text-secondary text-base leading-relaxed max-w-sm">
                Traduciamo la tua visione in specifiche tecniche. Niente ambiguità: usiamo wireframe e user stories chiare.
              </p>
            </div>
            
            {/* Visual Container - Responsive positioning */}
            <div className="relative md:absolute md:right-0 md:top-8 md:bottom-8 w-full md:w-[45%] h-48 md:h-auto rounded-2xl md:rounded-l-2xl md:rounded-r-none border border-border md:border-r-0 overflow-hidden shadow-sm md:shadow-2xl md:translate-x-2 md:group-hover:translate-x-0 transition-transform duration-500">
               <ChatVisual />
            </div>
          </motion.div>

          {/* Card 2: Tech (Small Right) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="md:col-span-3 lg:col-span-5 rounded-3xl bg-zinc-950 border border-border p-0 overflow-hidden relative group flex flex-col min-h-[300px]"
          >
            {/* Visual Top */}
            <div className="h-[60%] w-full border-b border-white/10">
              <CodeVisual />
            </div>
            {/* Content Bottom */}
            <div className="p-6 bg-zinc-900 flex-1">
               <div className="flex items-center justify-between mb-2">
                 <h3 className="text-lg font-bold text-white">Next-Gen Tech</h3>
                 <Terminal size={16} className="text-zinc-500" />
               </div>
               <p className="text-sm text-zinc-400">
                 Architetture scalabili su Next.js e Supabase. Codice pulito, tipizzato e testato.
               </p>
            </div>
          </motion.div>

          {/* Card 3: Agile (Small Left) */}
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2 }}
             className="md:col-span-3 lg:col-span-5 rounded-3xl bg-surface border border-border p-0 overflow-hidden relative group flex flex-col min-h-[300px]"
          >
             {/* Content Top */}
             <div className="p-6 pb-4">
               <div className="flex items-center gap-3 mb-2">
                 <div className="p-1.5 bg-blue-500/10 rounded-md text-blue-500 md:hidden"><CheckSquare size={16} /></div>
                 <h3 className="text-lg font-bold text-text-primary">Sviluppo Agile</h3>
               </div>
               <p className="text-sm text-text-secondary">
                 Sprint di 2 settimane. Demo regolari. Vedi il progetto avanzare card dopo card.
               </p>
             </div>
             {/* Visual Bottom */}
             <div className="flex-1 w-full border-t border-border mt-2 bg-surface-light/30">
                <KanbanVisual />
             </div>
          </motion.div>

          {/* Card 4: Growth (Large Right) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="md:col-span-3 lg:col-span-7 rounded-3xl bg-surface border border-border p-6 md:p-8 flex flex-col-reverse md:block justify-between overflow-hidden relative group min-h-[300px]"
          >
             {/* Visual Container */}
             <div className="relative md:absolute md:left-0 md:bottom-0 md:top-12 w-full md:w-[45%] h-48 md:h-auto rounded-2xl md:rounded-tr-2xl md:rounded-tl-none md:rounded-bl-2xl border md:border-t md:border-r md:border-border border-border overflow-hidden shadow-sm md:shadow-2xl md:-translate-x-2 md:group-hover:translate-x-0 transition-transform duration-500 mt-6 md:mt-0">
               <StatsVisual />
            </div>

            <div className="relative z-10 md:ml-auto md:w-[50%] md:text-right">
              <div className="flex items-center md:justify-end gap-3 mb-4">
                <h3 className="text-xl font-bold text-text-primary">3. Lancio & Crescita</h3>
                <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-500"><ArrowUpRight size={20} /></div>
              </div>
              <p className="text-text-secondary text-base leading-relaxed">
                Il deploy è solo l'inizio. Monitoriamo le performance e iteriamo basandoci sui dati reali degli utenti.
              </p>
            </div>
          </motion.div>

        </div>
      </Container>
    </Section>
  )
}

