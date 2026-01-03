'use client'

import { useState } from 'react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { FadeIn } from '@/components/animations'
import { ChevronDown, MessageCircleQuestion } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

const faqs = [
  {
    question: 'Quanto costa sviluppare un sito web con Next.js e TypeScript?',
    answer: 'Il costo dipende dalla complessità del progetto. Un sito web corporate parte da €5.000, una web app più complessa da €15.000, mentre un MVP può costare a partire da €3.000. I progetti includono sviluppo frontend con Next.js, TypeScript strict mode, design UI/UX, ottimizzazione SEO e deployment su Vercel o AWS.',
  },
  {
    question: 'Cosa sono gli AI Agents e come possono aiutare la mia azienda?',
    answer: 'Gli AI Agents sono sistemi intelligenti autonomi che eseguono task complessi utilizzando LLM come GPT-4 o Claude. Possono gestire customer support H24, qualificare lead automaticamente, processare documenti, e automatizzare workflow ripetitivi. Riducono i costi operativi fino al 70% e migliorano la customer experience con risposte immediate e accurate.',
  },
  {
    question: "Che differenza c'è tra un sistema RAG e un chatbot normale?",
    answer: 'Un sistema RAG (Retrieval-Augmented Generation) risponde basandosi esclusivamente sui tuoi documenti aziendali reali, mentre un chatbot normale usa solo la conoscenza generica del modello AI. Il RAG recupera informazioni precise dai tuoi dati (manuali, policy, knowledge base) e genera risposte accurate e verificabili, eliminando le allucinazioni tipiche dei LLM.',
  },
  {
    question: 'Quanto tempo serve per sviluppare una web application completa?',
    answer: 'I tempi variano in base alla complessità: un MVP richiede 2-4 settimane, un sito web corporate 4-8 settimane, un software custom 8-16 settimane, un sistema di automazioni AI 6-12 settimane. Utilizziamo metodologia agile con sprint settimanali, deployment continuo e review costanti per garantire tempi certi e zero sorprese.',
  },
  {
    question: 'Quali tecnologie utilizzate per lo sviluppo web?',
    answer: 'Stack moderno enterprise-grade: Next.js 14+ con App Router, React 18, TypeScript in strict mode, Tailwind CSS per lo styling, Framer Motion per animazioni, Supabase o PostgreSQL per database, Vercel per hosting e deployment, Docker per containerizzazione. Per AI: LangChain, OpenAI API, Pinecone, n8n per automazioni.',
  },
  {
    question: 'Come funziona il processo di sviluppo in SigmaLabs?',
    answer: 'Processo in 4 fasi: 1) Discovery - analisi esigenze e definizione requisiti; 2) Design - wireframe, mockup UI/UX e architettura sistema; 3) Development - sprint agili settimanali con review continue; 4) Deploy - lancio in produzione con monitoraggio e supporto. Tutto tracciato su GitHub, comunicazione trasparente, nessuna sorpresa.',
  },
  {
    question: 'Posso scalare il progetto dopo il lancio iniziale?',
    answer: "Assolutamente sì. Tutti i progetti sono sviluppati con architettura scalabile e modulare. Il codice è pulito, documentato e segue le best practices dell'industria. Puoi aggiungere funzionalità, integrare nuovi servizi o aumentare la capacità senza riscrivere da zero. Forniamo anche documentazione completa e formazione al team.",
  },
  {
    question: 'Offrite supporto e manutenzione dopo il lancio?',
    answer: 'Sì, offriamo pacchetti di manutenzione continuativa che includono: monitoring 24/7, aggiornamenti di sicurezza, fix di bug, ottimizzazioni performance, supporto tecnico prioritario e backup automatici. Puoi scegliere tra supporto base (incident-based) o supporto dedicato con SLA garantito e disponibilità estesa.',
  },
  {
    question: "Come posso integrare l'intelligenza artificiale nel mio software esistente?",
    answer: 'Integrazione AI modulare senza riscrivere tutto: 1) Analisi software esistente e identificazione use case AI; 2) Sviluppo API layer per comunicazione con LLM; 3) Implementazione features AI (chatbot, automazioni, analisi dati); 4) Testing e deployment graduale. Supportiamo OpenAI, Anthropic Claude, modelli open-source e soluzioni on-premise.',
  },
  {
    question: 'SigmaLabs lavora solo con startup o anche con aziende enterprise?',
    answer: 'Lavoriamo con entrambi. Per startup offriamo MVP rapidi e stack lean per validare product-market fit velocemente. Per aziende enterprise forniamo soluzioni custom scalabili, integrazioni complesse con sistemi legacy, compliance e security audit, architetture multi-tenant e supporto dedicato con SLA. Stesso livello di qualità, approccio diverso basato sulle esigenze.',
  },
]

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className={cn(
        'group rounded-2xl border transition-all duration-300',
        isOpen
          ? 'bg-white/80 dark:bg-slate-800/80 border-primary/30 shadow-lg shadow-primary/5'
          : 'bg-white/50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 hover:border-primary/20 hover:bg-white/70 dark:hover:bg-slate-800/70'
      )}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 md:px-8 md:py-6 flex items-start justify-between gap-4 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-base md:text-lg font-semibold text-slate-900 dark:text-white leading-relaxed pr-4">
          {faq.question}
        </span>
        <ChevronDown
          className={cn(
            'w-5 h-5 md:w-6 md:h-6 flex-shrink-0 text-primary transition-transform duration-300 mt-1',
            isOpen ? 'rotate-180' : 'rotate-0'
          )}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-700 to-transparent mb-5" />
              <p className="text-sm md:text-base text-slate-600 dark:text-gray-300 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export function FAQSection() {
  const [isSectionOpen, setIsSectionOpen] = useState(false)

  return (
    <Section className="relative py-12 md:py-16 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
      </div>

      <Container>
        {/* Collapsible Header/Button */}
        <FadeIn>
          <button
            onClick={() => setIsSectionOpen(!isSectionOpen)}
            className={cn(
              'w-full max-w-4xl mx-auto group rounded-2xl border transition-all duration-300',
              isSectionOpen
                ? 'bg-white/80 dark:bg-slate-800/80 border-primary/30 shadow-lg shadow-primary/5 mb-12 md:mb-16'
                : 'bg-white/50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 hover:border-primary/20 hover:bg-white/70 dark:hover:bg-slate-800/70'
            )}
          >
            <div className="px-6 py-6 md:px-8 md:py-8 flex items-center justify-between gap-6">
              <div className="flex-1 text-left">
                <div className="flex items-center gap-2 mb-3 text-primary font-mono text-xs tracking-widest uppercase">
                  <MessageCircleQuestion className="w-4 h-4" />
                  <span>FAQ</span>
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-slate-900 dark:text-white">
                  Domande{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
                    Frequenti
                  </span>
                </h2>
                <p className="text-sm md:text-base text-slate-600 dark:text-gray-400 mt-2">
                  {isSectionOpen
                    ? 'Tutto quello che devi sapere su sviluppo web, AI agents, sistemi RAG e automazioni'
                    : 'Clicca per vedere le domande più frequenti su sviluppo web e AI'}
                </p>
              </div>
              <ChevronDown
                className={cn(
                  'w-6 h-6 md:w-8 md:h-8 flex-shrink-0 text-primary transition-transform duration-300',
                  isSectionOpen ? 'rotate-180' : 'rotate-0'
                )}
              />
            </div>
          </button>
        </FadeIn>

        {/* FAQ Content */}
        <AnimatePresence initial={false}>
          {isSectionOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              {/* FAQ Grid */}
              <div className="max-w-4xl mx-auto space-y-4 md:space-y-5 mb-12 md:mb-16">
                {faqs.map((faq, index) => (
                  <FAQItem key={index} faq={faq} index={index} />
                ))}
              </div>

              {/* Bottom CTA */}
              <div className="text-center">
                <p className="text-sm md:text-base text-slate-600 dark:text-gray-400">
                  Hai altre domande?{' '}
                  <a
                    href="mailto:info@sigmalabs.it"
                    className="text-primary font-semibold hover:underline decoration-primary/30 hover:decoration-primary transition-all"
                  >
                    Scrivici via email
                  </a>
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </Section>
  )
}
