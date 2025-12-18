'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Container } from '@/components/ui/Container'
import { FadeIn, StaggerContainer } from '@/components/animations'
import { servicesData, ServiceData } from '@/data/services-content'
import { ChevronDown, ExternalLink, Cpu, Clock, Coins, CheckCircle2 } from 'lucide-react'

export function ServicesBlueprint() {
  return (
    <section className="py-24 min-h-screen relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none bg-[url('/grid-pattern.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Header Section */}
          <FadeIn>
            <div className="text-center space-y-4 mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-mono text-slate-500 dark:text-gray-400 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                SYSTEM STATUS: OPERATIONAL
              </div>
              <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
                Protocolli Operativi
              </h1>
              <p className="text-slate-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
                Esplora le nostre capabilities tecniche. Clicca su ogni modulo per accedere alle specifiche dettagliate.
              </p>
            </div>
          </FadeIn>

          {/* Services Stack */}
          <StaggerContainer className="space-y-6" staggerDelay={0.1}>
            {servicesData.map((service, index) => (
              <FadeIn key={service.id}>
                <ServiceBlueprintCard service={service} index={index} />
              </FadeIn>
            ))}
          </StaggerContainer>
        </div>
      </Container>
    </section>
  )
}

// --- Single Blueprint Card Component ---
const ServiceBlueprintCard = ({ service, index }: { service: ServiceData; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      layout
      className={cn(
        "group relative overflow-hidden rounded-lg border transition-all duration-500",
        // Light Mode: Technical Paper Style with subtle gradient
        "bg-gradient-to-br from-white to-slate-50 border-slate-200 text-slate-800 shadow-sm hover:shadow-md",
        // Dark Mode: Cyberpunk/HUD Style with stronger contrast
        "dark:from-surface dark:to-surface-light/50 dark:border-white/5 dark:text-gray-300",
        // Expanded State: Glowing Border & subtle color wash
        isExpanded 
          ? "ring-1 ring-primary dark:ring-primary shadow-[0_0_30px_-10px_rgba(255,107,53,0.15)] dark:shadow-[0_0_30px_-10px_rgba(255,107,53,0.3)] bg-primary/[0.02] dark:bg-primary/[0.05]" 
          : "hover:border-primary/50 dark:hover:border-primary/50"
      )}
    >
      {/* Active Scanline Effect (Dark Mode only, subtle) */}
      <div className={cn(
        "absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent pointer-events-none transition-transform duration-1000 ease-in-out",
        isExpanded ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      )} />

      {/* HUD Corner Accents (Decorative) */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-primary opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:w-4 group-hover:h-4" />
      <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:w-4 group-hover:h-4" />
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-primary opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:w-4 group-hover:h-4" />
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:w-4 group-hover:h-4" />

      {/* --- HEADER --- */}
      <div 
        onClick={() => setIsExpanded(!isExpanded)}
        className="cursor-pointer p-6 flex flex-col md:flex-row gap-6 md:items-start relative z-10"
      >
        {/* Icon & ID */}
        <div className="flex-shrink-0 flex items-start justify-between md:flex-col md:gap-4 w-full md:w-auto">
          <div className={cn(
            "p-3 rounded-xl transition-all duration-300 group-hover:scale-110 shadow-lg",
            isExpanded ? "bg-primary text-white shadow-primary/30" : "bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-gray-400 group-hover:text-primary group-hover:bg-primary/10"
          )}>
            <service.icon className="w-8 h-8" strokeWidth={1.5} />
          </div>
          <span className={cn(
            "font-mono text-xs tracking-widest uppercase transition-colors",
            isExpanded ? "text-primary font-bold" : "text-slate-400 dark:text-white/20"
          )}>
            {service.id}
          </span>
          {/* Mobile Expand Chevron */}
          <ChevronDown className={cn("md:hidden w-5 h-5 text-slate-400 transition-transform duration-300", isExpanded && "rotate-180 text-primary")} />
        </div>

        {/* Title & Short Desc */}
        <div className="flex-grow space-y-2">
          <div className="flex items-center justify-between">
            <h3 className={cn(
              "text-2xl font-bold font-display uppercase tracking-wide transition-colors duration-300",
              isExpanded ? "text-primary" : "text-slate-900 dark:text-white"
            )}>
              {service.title}
            </h3>
            {/* Desktop Expand Chevron */}
            <ChevronDown className={cn("hidden md:block w-5 h-5 text-slate-400 transition-transform duration-300", isExpanded && "rotate-180 text-primary")} />
          </div>
          
          <p className="text-primary font-mono text-sm tracking-wider uppercase opacity-80">
            {service.tagline}
          </p>
          
          <p className="text-slate-600 dark:text-gray-400 leading-relaxed max-w-3xl">
            {service.shortDescription}
          </p>
        </div>
      </div>

      {/* --- EXPANDABLE CONTENT (Accordion) --- */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="relative z-10"
          >
            <div className="px-6 pb-8 pt-2 border-t border-dashed border-slate-200 dark:border-white/10 mx-6 mt-2">
              <div className="grid lg:grid-cols-3 gap-8 mt-6">
                
                {/* Column 1: Deep Dive */}
                <div className="lg:col-span-2 space-y-8">
                  <div>
                    <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
                      <Cpu className="w-4 h-4 text-primary" />
                      Specifiche Operative
                    </h4>
                    <p className="text-slate-600 dark:text-gray-400 leading-relaxed text-sm md:text-base">
                      {service.fullDescription}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    {service.features.map((feature, i) => (
                      <div 
                        key={i} 
                        className="p-4 rounded-lg border border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-white/[0.02] hover:bg-slate-50 dark:hover:bg-white/[0.05] transition-colors"
                      >
                        <h5 className="font-bold text-slate-800 dark:text-gray-200 text-sm mb-1.5 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/70" />
                          {feature.title}
                        </h5>
                        <p className="text-xs text-slate-500 dark:text-gray-500 leading-relaxed">{feature.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Column 2: Tech & Specs (Sidebar) */}
                <div className="space-y-8 lg:border-l border-dashed border-slate-200 dark:border-white/10 lg:pl-8">
                  
                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-xs font-bold uppercase text-slate-400 dark:text-white/30 mb-3">
                      Technology Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.techStack.map((tech) => (
                        <span 
                          key={tech} 
                          className="px-2.5 py-1 text-xs font-mono font-medium rounded bg-white dark:bg-white/5 text-slate-600 dark:text-gray-300 border border-slate-200 dark:border-white/10 shadow-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Use Cases */}
                  <div>
                    <h4 className="text-xs font-bold uppercase text-slate-400 dark:text-white/30 mb-3">
                      Applicazioni
                    </h4>
                    <ul className="space-y-2">
                      {service.useCases.map((useCase) => (
                        <li key={useCase} className="flex items-start gap-2 text-sm text-slate-600 dark:text-gray-400 group/item">
                          <CheckCircle2 className="w-4 h-4 text-primary/70 group-hover/item:text-primary mt-0.5 flex-shrink-0 transition-colors" />
                          <span className="group-hover/item:text-slate-900 dark:group-hover/item:text-gray-200 transition-colors">{useCase}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pricing/Timeline Hint */}
                  {service.details && (
                    <div className="p-5 rounded-xl bg-gradient-to-br from-primary/[0.08] to-primary/[0.02] border border-primary/10 space-y-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="flex items-center gap-2 text-slate-600 dark:text-gray-400 font-medium">
                          <Clock className="w-4 h-4 text-primary" /> Timeline
                        </span>
                        <span className="font-mono text-slate-900 dark:text-white font-bold">{service.details.timeline}</span>
                      </div>
                      <div className="w-full h-px bg-primary/10" />
                      <div className="flex items-center justify-between text-sm">
                        <span className="flex items-center gap-2 text-slate-600 dark:text-gray-400 font-medium">
                          <Coins className="w-4 h-4 text-primary" /> Start
                        </span>
                        <span className="font-mono text-primary font-bold text-lg">{service.details.startingFrom}</span>
                      </div>
                    </div>
                  )}

                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
