'use client'

import { useState, useRef, useEffect } from 'react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { FadeIn } from '@/components/animations'
import { Globe, Bot, Rocket, Cpu, ArrowRight, ArrowUpRight, Sparkles, CheckCircle2, Terminal, Layers, Code2, Zap, Activity, ShieldCheck } from 'lucide-react'
import Link from 'next/link'
import { useCursorState } from '@/hooks/useCursorState'
import { motion, AnimatePresence, useMotionValue, animate } from 'framer-motion'
import { BrowserMockupAnimation } from '@/components/animations/BrowserMockupAnimation'
import { NeuralNetworkAnimation } from '@/components/animations/NeuralNetworkAnimation'
import { DocumentsAnimation } from '@/components/animations/DocumentsAnimation'
import { GearsAnimation } from '@/components/animations/GearsAnimation'
import { cn } from '@/lib/utils'

// --- Data Configuration ---
const services = [
  {
    id: 'web-experience',
    number: '01',
    title: 'Siti Web e Web App',
    tagline: 'Digital Presence.',
    description: "Creiamo esperienze web che catturano l'attenzione e guidano alla conversione con performance estreme.",
    icon: Globe,
    technologies: ['Next.js', 'React', 'Three.js', 'SEO'],
    capabilities: [
      { title: "Siti Web", desc: "Design responsivo e velocità istantanea." },
      { title: "Web App", desc: "Applicazioni complesse accessibili da browser." },
      { title: "E-Commerce", desc: "Esperienze d'acquisto fluide e sicure." },
      { title: "CMS Headless", desc: "Gestione contenuti flessibile." }
    ],
    animationType: 'browser' as const,
    href: '/servizi#web',
    color: 'from-emerald-500 to-teal-500',
    iconColor: 'text-emerald-500'
  },
  {
    id: 'custom-software',
    number: '02',
    title: 'Custom Software e AI Software',
    tagline: 'Enterprise Solutions.',
    description: "Sviluppiamo il cuore tecnologico del tuo business con architetture moderne e intelligenza artificiale integrata.",
    icon: Terminal,
    technologies: ['Python', 'Node.js', 'Supabase', 'Docker'],
    capabilities: [
      { title: "Dashboard AI", desc: "Visualizzazione dati con insight predittivi." },
      { title: "API Development", desc: "Back-end robusti e documentati." },
      { title: "Integrazioni LLM", desc: "Potenziamento software con GPT/Claude." },
      { title: "Cloud", desc: "Infrastrutture scalabili e sicure." }
    ],
    animationType: 'gears' as const,
    href: '/servizi#software',
    color: 'from-blue-500 to-cyan-500',
    iconColor: 'text-blue-500'
  },
  {
    id: 'ai-automation',
    number: '03',
    title: 'Automazioni, Agenti AI, Sistemi RAG',
    tagline: 'Autonomous Systems.',
    description: "Trasformiamo i processi manuali in flussi di lavoro intelligenti che scalano senza errori.",
    icon: Bot,
    technologies: ['n8n', 'LangChain', 'OpenAI', 'Pinecone'],
    capabilities: [
      { title: "Sistemi RAG", desc: "Chatbot su documenti aziendali." },
      { title: "Automazioni Processi", desc: "Workflow senza data-entry manuale." },
      { title: "Custom Workflow", desc: "Pipeline su misura per il tuo team." },
      { title: "ChatBot Vocali", desc: "Assistenti che parlano e ascoltano." }
    ],
    animationType: 'neural' as const,
    href: '/servizi#ai',
    color: 'from-violet-500 to-fuchsia-500',
    iconColor: 'text-violet-500'
  },
  {
    id: 'mvp-dev',
    number: '04',
    title: 'Sviluppo MVP',
    tagline: 'Rapid Validation.',
    description: "Riduciamo il time-to-market portando la tua idea in produzione in tempi record per validarla.",
    icon: Rocket,
    technologies: ['Next.js', 'Vercel', 'Rapid Proto', 'Analytics'],
    capabilities: [
      { title: "Prototipazione", desc: "Da idea a codice in settimane." },
      { title: "Core Features", desc: "Focus sul valore essenziale." },
      { title: "Scalable V1", desc: "Basi solide per crescere." },
      { title: "Launch Support", desc: "Assistenza tecnica al lancio." }
    ],
    animationType: 'documents' as const,
    href: '/servizi#mvp',
    color: 'from-amber-500 to-orange-500',
    iconColor: 'text-amber-500'
  },
]

// --- Animation Components ---
function AnimationWrapper({ type }: { type: 'browser' | 'neural' | 'documents' | 'gears' }) {
  const progress = useMotionValue(0)
  
  useEffect(() => {
    const controls = animate(progress, 1, { 
      duration: 2, 
      repeat: Infinity, 
      repeatType: "reverse",
      ease: "easeInOut"
    })
    return () => controls.stop()
  }, [progress])

  switch (type) {
    case 'browser': return <BrowserMockupAnimation progress={progress} />
    case 'neural': return <NeuralNetworkAnimation progress={progress} />
    case 'documents': return <DocumentsAnimation progress={progress} />
    case 'gears': return <GearsAnimation progress={progress} />
    default: return null
  }
}

// --- Main Component ---
export function ServicesPreview() {
  const [activeId, setActiveId] = useState<string>(services[0].id)
  const { setCursorType } = useCursorState()
  const sectionRef = useRef(null)

  // Find active service data
  const activeService = services.find(s => s.id === activeId) || services[0]

  return (
    <Section ref={sectionRef} id="servizi" className="pt-16 pb-24 md:pt-24 md:pb-32 bg-slate-50/50 dark:bg-background/50 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none opacity-50" />
      
      <Container>
        {/* Header */}
        <FadeIn className="mb-12 md:mb-20">
          <div className="flex items-center gap-2 mb-4 text-primary font-mono text-xs tracking-widest uppercase">
            <Activity className="w-4 h-4" />
            <span>Systems Architecture</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-slate-900 dark:text-white">
            Soluzioni che <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
              fanno la differenza.
            </span>
          </h2>
        </FadeIn>

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-start mb-16">
          
          {/* LEFT COLUMN: Navigation (Ultra Compact) - 3/12 columns */}
          <div className="lg:col-span-3 space-y-3">
            {services.map((service) => (
              <div 
                key={service.id}
                onMouseEnter={() => setActiveId(service.id)}
                className="relative"
              >
                <motion.div
                  layout
                  className={cn(
                    "group relative p-4 rounded-xl border transition-all duration-300 cursor-pointer overflow-hidden",
                    activeId === service.id 
                      ? "bg-white dark:bg-surface border-slate-200 dark:border-white/10 shadow-lg" 
                      : "bg-transparent border-transparent hover:bg-slate-100 dark:hover:bg-white/5 opacity-70 hover:opacity-100"
                  )}
                  onClick={() => setActiveId(service.id)}
                >
                  <div className="flex items-center gap-4">
                    <span className={cn(
                      "font-mono text-[10px] tracking-widest transition-colors",
                      activeId === service.id ? "text-primary" : "text-slate-400 dark:text-gray-500"
                    )}>
                      {service.number}
                    </span>
                    
                    <h3 className={cn(
                      "text-base md:text-lg font-display font-bold transition-colors flex-1",
                      activeId === service.id ? "text-slate-900 dark:text-white" : "text-slate-600 dark:text-gray-400"
                    )}>
                      {service.title}
                    </h3>
                  </div>

                  {/* Mobile Accordion Content */}
                  <div className="lg:hidden">
                    <AnimatePresence>
                      {activeId === service.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                           <div className="pt-6 mt-4 border-t border-slate-100 dark:border-white/5">
                              <p className="text-sm text-slate-600 dark:text-gray-400 mb-6">{service.description}</p>
                              
                              <div className="grid gap-4 mb-6">
                                {service.capabilities.map((cap, i) => (
                                  <div key={i} className="flex items-start gap-2">
                                    <CheckCircle2 className={cn("w-4 h-4 mt-0.5 flex-shrink-0", service.iconColor)} />
                                    <span className="text-sm font-bold text-slate-800 dark:text-white">{cap.title}</span>
                                  </div>
                                ))}
                              </div>
                              
                              <Link href={service.href} className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-1">
                                Scopri di più <ArrowUpRight className="w-3 h-3" />
                              </Link>
                           </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

          {/* RIGHT COLUMN: Rich Preview Card - 9/12 columns */}
          <div className="lg:col-span-9 hidden lg:block h-[580px] sticky top-32">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="h-full w-full rounded-3xl bg-white dark:bg-surface border border-slate-200 dark:border-white/10 shadow-2xl overflow-hidden flex flex-row relative"
              >
                {/* Content Area (Left 65%) */}
                <div className="w-[65%] p-10 flex flex-col relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className={cn("p-3 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-sm", activeService.iconColor)}>
                       <activeService.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className={cn("text-xs font-mono uppercase tracking-widest", activeService.iconColor)}>
                        {activeService.tagline}
                      </span>
                      <h3 className="text-3xl font-display font-bold text-slate-900 dark:text-white">
                        {activeService.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-lg text-slate-600 dark:text-gray-300 leading-relaxed mb-10 max-w-xl">
                    {activeService.description}
                  </p>

                  <div className="flex-1">
                     <h4 className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-400 dark:text-gray-500 mb-6">
                        <Terminal className="w-3 h-3" />
                        Specifiche Modulo:
                     </h4>
                     
                     {/* 2-Column Grid for Capabilities */}
                     <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                       {activeService.capabilities.map((cap, i) => (
                         <div key={i} className="group/item">
                           <div className="flex items-start gap-3">
                             <div className={cn("mt-1 w-5 h-5 rounded-full flex items-center justify-center bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 flex-shrink-0 group-hover/item:border-primary/30 transition-colors")}>
                                <CheckCircle2 className={cn("w-3 h-3", activeService.iconColor)} />
                             </div>
                             <div>
                               <strong className="block text-sm text-slate-900 dark:text-white mb-0.5 group-hover/item:text-primary transition-colors">{cap.title}</strong>
                               <span className="text-xs text-slate-500 dark:text-gray-400 leading-tight block">{cap.desc}</span>
                             </div>
                           </div>
                         </div>
                       ))}
                     </div>
                  </div>

                  <div className="mt-auto pt-8 flex items-center justify-between border-t border-slate-100 dark:border-white/5">
                     <div className="flex gap-3">
                        {activeService.technologies.map(tech => (
                          <span key={tech} className="px-2 py-1 bg-slate-50 dark:bg-white/5 text-slate-500 dark:text-gray-400 text-[10px] font-mono rounded border border-slate-200 dark:border-white/5 uppercase tracking-wider">
                            {tech}
                          </span>
                        ))}
                     </div>
                     <Button asChild size="sm" className="rounded-full px-6">
                        <Link href={activeService.href}>Scheda Tecnica</Link>
                     </Button>
                  </div>
                </div>

                {/* Visual Area (Right 35%) */}
                <div className="w-[35%] relative bg-slate-50/50 dark:bg-black/10 border-l border-slate-100 dark:border-white/5 flex items-center justify-center p-8">
                   {/* Background Glow */}
                   <div className={cn(
                     "absolute inset-0 opacity-10 blur-[60px] bg-gradient-to-br",
                     activeService.color
                   )} />
                   
                   {/* Floating Animation Window */}
                   <div className="w-full relative z-10">
                      <div className="relative aspect-square rounded-2xl bg-white/80 dark:bg-surface/80 backdrop-blur-xl border border-white dark:border-white/10 shadow-2xl p-6 overflow-hidden">
                        <div className="absolute top-0 left-0 right-0 h-6 border-b border-slate-100 dark:border-white/5 flex items-center px-3 gap-1">
                           <div className="w-1.5 h-1.5 rounded-full bg-slate-200 dark:bg-white/10" />
                           <div className="w-1.5 h-1.5 rounded-full bg-slate-200 dark:bg-white/10" />
                        </div>
                        <div className="w-full h-full flex items-center justify-center pt-4">
                           <div className="w-full h-full opacity-80 group-hover:opacity-100 transition-opacity">
                              <AnimationWrapper type={activeService.animationType} />
                           </div>
                        </div>
                      </div>
                      
                      {/* Secondary Decor Elements */}
                      <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-white dark:bg-surface border border-slate-100 dark:border-white/10 shadow-lg flex items-center justify-center text-primary">
                         <ShieldCheck className="w-6 h-6" />
                      </div>
                      <div className="absolute -bottom-4 -left-4 w-12 h-12 rounded-full bg-white dark:bg-surface border border-slate-100 dark:border-white/10 shadow-lg flex items-center justify-center text-primary">
                         <Zap className="w-6 h-6" />
                      </div>
                   </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Bottom CTA */}
        <div className="flex justify-center mt-12">
            <Button asChild size="lg" variant="secondary" className="rounded-full px-8">
                <Link href="/servizi" className="flex items-center gap-2">
                    Tutti i servizi <ArrowRight className="w-4 h-4" />
                </Link>
            </Button>
        </div>
      </Container>
    </Section>
  )
}