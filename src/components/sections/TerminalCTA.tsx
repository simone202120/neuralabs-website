'use client'

import React, { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { ArrowRight, Terminal, Command, Hash, Cpu } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export function TerminalCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: "-20% 0px", once: true })
  
  // Typing effect state
  const [text, setText] = useState("")
  const fullText = "System ready. Initialize project protocol?"

  useEffect(() => {
    if (isInView) {
      let i = 0
      const timer = setInterval(() => {
        setText(fullText.slice(0, i + 1))
        i++
        if (i >= fullText.length) clearInterval(timer)
      }, 40)
      return () => clearInterval(timer)
    }
  }, [isInView])

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden bg-white dark:bg-black/20">
      <Container>
        <div className="relative max-w-4xl mx-auto">
            
            {/* Terminal Window */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className={cn(
                    "relative overflow-hidden rounded-2xl border backdrop-blur-sm shadow-2xl transition-colors duration-500",
                    // Light Mode
                    "bg-slate-50/80 border-slate-200 shadow-slate-200/50",
                    // Dark Mode
                    "dark:bg-slate-950/80 dark:border-white/10 dark:shadow-black/50"
                )}
            >
                {/* Header Bar */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-200 dark:border-white/10 bg-slate-100/50 dark:bg-white/5">
                    <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <div className="flex-1 text-center font-mono text-[10px] text-slate-400 dark:text-gray-500 tracking-widest uppercase">
                        neural_uplink_v2.sh
                    </div>
                </div>

                {/* Terminal Content */}
                <div className="p-6 md:p-12 font-mono">
                    
                    {/* Log Lines (Decorative) */}
                    <div className="space-y-1 mb-8 opacity-60 text-xs md:text-sm text-slate-500 dark:text-gray-500 select-none">
                        <div className="flex gap-2">
                            <span className="text-green-500">✓</span>
                            <span>Analysis complete...</span>
                        </div>
                        <div className="flex gap-2">
                            <span className="text-green-500">✓</span>
                            <span>Modules loaded: AI, Web, Systems...</span>
                        </div>
                        <div className="flex gap-2">
                            <span className="text-blue-500">ℹ</span>
                            <span>Waiting for user input...</span>
                        </div>
                    </div>

                    {/* Main Command Input */}
                    <div className="flex flex-col md:flex-row gap-2 md:gap-4 md:items-center mb-12">
                        <div className="flex items-center gap-3 text-lg md:text-2xl font-bold text-slate-800 dark:text-green-400">
                            <span className="text-slate-400 dark:text-green-400/50">$</span>
                            <span>{text}</span>
                            <span className="animate-pulse w-3 h-6 bg-slate-800 dark:bg-green-400 inline-block align-middle" />
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button asChild size="lg" className="h-14 px-8 text-base rounded-xl font-mono shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]">
                            <Link href="/contatti">
                                <Terminal className="w-4 h-4 mr-2" />
                                [ INITIATE_PROJECT ]
                            </Link>
                        </Button>
                        
                        <Button asChild variant="secondary" size="lg" className="h-14 px-8 text-base rounded-xl font-mono border-slate-300 dark:border-white/20 hover:bg-slate-100 dark:hover:bg-white/10">
                            <Link href="/contatti">
                                <Command className="w-4 h-4 mr-2" />
                                [ SCHEDULE_CALL ]
                            </Link>
                        </Button>
                    </div>

                </div>

                {/* Decorative Background Elements */}
                <div className="absolute top-0 right-0 p-12 pointer-events-none opacity-5 dark:opacity-10">
                    <Cpu className="w-32 h-32 text-slate-900 dark:text-white" />
                </div>
            </motion.div>

            {/* Background Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-purple-500/20 to-blue-500/20 blur-3xl opacity-30 -z-10 rounded-full" />
        </div>
      </Container>
    </section>
  )
}
