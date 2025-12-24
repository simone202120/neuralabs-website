'use client'

import React, { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Container } from '@/components/ui/Container'
import { servicesData } from '@/data/services-content'
import { Button } from '@/components/ui/Button'
import { ArrowRight, CheckCircle2, Cpu, Terminal, Zap, ChevronRight, Hash } from 'lucide-react'
import Link from 'next/link'

export function ServicesDeepDive() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Track scroll progress for global background changes
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Smooth background color transitions based on scroll sections
  // 0-0.25 (Web/Green) -> 0.25-0.5 (Soft/Blue) -> 0.5-0.75 (AI/Purple) -> 0.75-1 (MVP/Orange)
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [
      "rgba(16, 185, 129, 0.02)", // Emerald tint
      "rgba(16, 185, 129, 0.05)", // Emerald
      "rgba(59, 130, 246, 0.05)", // Blue
      "rgba(139, 92, 246, 0.05)", // Violet
      "rgba(245, 158, 11, 0.05)", // Amber
      "rgba(245, 158, 11, 0.02)"  // Amber tint
    ]
  )

  return (
    <motion.section 
      ref={containerRef} 
      style={{ backgroundColor }}
      className="relative min-h-screen py-24 transition-colors duration-700"
    >
      {/* Global Background Grid - Fixed */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-[0.03] dark:opacity-[0.05]" />
      </div>

      <Container className="relative z-10">
        {/* Page Header */}
        <div className="mb-24 md:mb-32 max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-mono text-slate-500 dark:text-gray-400 mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            SYSTEM CAPABILITIES DATABASE
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold text-slate-900 dark:text-white tracking-tight mb-8"
          >
            Engineering <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-500 to-slate-900 dark:from-slate-400 dark:to-white">
              The Future.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-slate-600 dark:text-gray-400 leading-relaxed max-w-2xl"
          >
            Analizziamo le tue necessità e costruiamo infrastrutture digitali su misura. 
            Ogni linea di codice ha uno scopo: la crescita del tuo business.
          </motion.p>
        </div>

        {/* Services List */}
        <div className="space-y-32 md:space-y-48 pb-24">
          {servicesData.map((service, index) => (
            <ServiceBlock key={service.id} service={service} index={index} />
          ))}
        </div>

      </Container>
    </motion.section>
  )
}

function ServiceBlock({ service, index }: { service: any, index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: "-20% 0px -20% 0px", once: false })

  return (
    <div ref={ref} id={service.id.split('-')[0].toLowerCase()} className="grid lg:grid-cols-12 gap-12 items-start group">
      
      {/* Sticky Sidebar (Left) - 4 Cols */}
      <div className="lg:col-span-4 lg:sticky lg:top-32 self-start transition-all duration-500">
        <div className={cn(
          "transition-all duration-500",
          isInView ? "opacity-100 translate-x-0" : "opacity-30 -translate-x-4 grayscale"
        )}>
            {/* Number */}
            <span className={cn(
                "font-mono text-6xl md:text-8xl font-bold opacity-10 select-none absolute -top-12 -left-6 md:-left-12 z-0 transition-colors duration-500",
                isInView ? service.iconColor.replace('text-', 'text-') : "text-slate-200 dark:text-white/5"
            )}>
                0{index + 1}
            </span>

            <div className="relative z-10">
                <div className={cn(
                    "w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-xl border border-white/20 backdrop-blur-md transition-all duration-500",
                    isInView ? `bg-gradient-to-br ${service.color} text-white` : "bg-slate-100 dark:bg-white/5 text-slate-400"
                )}>
                    <service.icon className="w-8 h-8" />
                </div>
                
                <h2 className={cn(
                    "text-3xl md:text-4xl font-display font-bold mb-4 transition-colors duration-300",
                    isInView ? "text-slate-900 dark:text-white" : "text-slate-400 dark:text-white/30"
                )}>
                    {service.title}
                </h2>
                
                <div className={cn(
                    "h-1 w-24 rounded-full transition-all duration-700",
                    isInView ? `bg-gradient-to-r ${service.color}` : "bg-slate-200 dark:bg-white/10 w-12"
                )} />

                {/* Quick Stats / Metadata */}
                <div className="mt-8 space-y-4">
                    <div className="flex items-center gap-3 text-sm font-mono text-slate-500 dark:text-gray-500">
                         <div className="w-8 h-8 rounded bg-slate-100 dark:bg-white/5 flex items-center justify-center border border-slate-200 dark:border-white/10">
                            <span className="text-[10px]">EUR</span>
                         </div>
                         <span>{service.details.startingFrom}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm font-mono text-slate-500 dark:text-gray-500">
                         <div className="w-8 h-8 rounded bg-slate-100 dark:bg-white/5 flex items-center justify-center border border-slate-200 dark:border-white/10">
                            <span className="text-[10px]">DAY</span>
                         </div>
                         <span>{service.details.timeline}</span>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* Content Area (Right) - 8 Cols */}
      <div className="lg:col-span-8 space-y-12">
        
        {/* Main Description */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
            <h3 className={cn(
                "text-xl md:text-2xl font-mono uppercase tracking-widest font-bold mb-6",
                service.iconColor
            )}>
                {service.tagline}
            </h3>
            <p className="text-xl md:text-2xl text-slate-700 dark:text-gray-300 leading-relaxed font-light">
                {service.shortDescription}
            </p>
            <div className="h-px w-full bg-slate-200 dark:bg-white/10 my-8" />
            <p className="text-base md:text-lg text-slate-600 dark:text-gray-400 leading-relaxed">
                {service.fullDescription}
            </p>
        </div>

        {/* Features Grid */}
        <div>
            <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-gray-500 mb-6">
                <Terminal className="w-4 h-4" />
                Technical Specifications
            </h4>
            <div className="grid md:grid-cols-2 gap-6">
                {service.features.map((feature: any, i: number) => (
                    <div 
                        key={i}
                        className="group/card p-6 rounded-2xl bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 hover:border-primary/20 dark:hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                    >
                        <div className="flex items-start gap-4">
                            <div className={cn(
                                "w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors",
                                service.bgLightColor,
                                service.iconColor
                            )}>
                                <CheckCircle2 className="w-5 h-5" />
                            </div>
                            <div>
                                <h5 className="font-bold text-slate-900 dark:text-white mb-2 group-hover/card:text-primary transition-colors">
                                    {feature.title}
                                </h5>
                                <p className="text-sm text-slate-600 dark:text-gray-400 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Tech Stack & Use Cases */}
        <div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-slate-200 dark:border-white/10">
            
            {/* Stack */}
            <div>
                <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-gray-500 mb-4">
                    <Cpu className="w-4 h-4" />
                    Core Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                    {service.techStack.map((tech: string) => (
                        <span 
                            key={tech} 
                            className="px-3 py-1.5 text-xs font-mono font-medium rounded-lg bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-gray-300 border border-slate-200 dark:border-white/10"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            {/* Use Cases */}
            <div>
                <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-gray-500 mb-4">
                    <Zap className="w-4 h-4" />
                    Common Deployments
                </h4>
                <ul className="space-y-2">
                    {service.useCases.map((useCase: string) => (
                        <li key={useCase} className="flex items-center gap-2 text-sm text-slate-600 dark:text-gray-400">
                            <ChevronRight className={cn("w-3 h-3", service.iconColor)} />
                            {useCase}
                        </li>
                    ))}
                </ul>
            </div>
        </div>

      </div>
    </div>
  )
}
