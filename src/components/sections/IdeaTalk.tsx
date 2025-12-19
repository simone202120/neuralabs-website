'use client'

import { useRef, useState, useEffect } from 'react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Send, Sparkles, MessageSquare } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const conversation = [
  {
    role: 'user',
    text: "Ho un'idea un po' strana...",
    delay: 0
  },
  {
    role: 'ai',
    text: "Adoriamo le idee strane. Raccontaci.",
    delay: 1500
  },
  {
    role: 'user',
    text: "Vorrei un sistema che...",
    typing: true,
    delay: 3000
  }
]

export function IdeaTalk() {
  const [messages, setMessages] = useState<typeof conversation>([])
  const containerRef = useRef<HTMLDivElement>(null)

  // Simulation loop for the chat
  useEffect(() => {
    let timeouts: NodeJS.Timeout[] = []
    
    const startSimulation = () => {
      setMessages([])
      
      conversation.forEach((msg, index) => {
        const timeout = setTimeout(() => {
          setMessages(prev => {
            // Remove previous typing indicator if exists
            const filtered = prev.filter(m => !m.typing)
            return [...filtered, msg]
          })
        }, msg.delay)
        timeouts.push(timeout)
      })

      // Restart loop
      const resetTimeout = setTimeout(() => {
        startSimulation()
      }, 7000)
      timeouts.push(resetTimeout)
    }

    startSimulation()

    return () => timeouts.forEach(clearTimeout)
  }, [])

  return (
    <Section id="parliamone" className="py-24 md:py-32 relative overflow-hidden bg-background">
      {/* Background ambient glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Column: Copy */}
          <div className="lg:w-1/2 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-light border border-border/50 text-xs font-mono text-primary mb-6">
                <Sparkles className="w-3 h-3" />
                <span>Nessun limite alla creatività</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-8 leading-tight">
                Hai un&apos;idea? <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-violet-500">
                  Parliamone.
                </span>
              </h2>
              
              <div className="space-y-6 text-lg text-text-secondary leading-relaxed max-w-xl">
                <p>
                  Hai presente quella cosa che vorresti automatizzare ma non sai se si può fare? 
                  O quel servizio che vorresti creare ma ti sembra fantascienza?
                </p>
                <p>
                  Non servono capitolati tecnici o slide deck perfetti. Serve solo la tua visione.
                  Noi mettiamo la tecnologia per realizzarla.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <Button asChild size="lg" className="group h-14 px-8 text-base">
                  <Link href="/contatti">
                    Inizia la Conversazione
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                
               <Button asChild variant="secondary" size="lg" className="h-14 px-8 text-base">
                  <Link href="/chat">
                    <MessageSquare className="mr-2 w-5 h-5" />
                    Chatta con Neura
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Holographic Chat */}
          <div className="lg:w-1/2 w-full perspective-1000">
            <motion.div
              initial={{ opacity: 0, rotateX: 10, rotateY: -10, scale: 0.9 }}
              whileInView={{ opacity: 1, rotateX: 0, rotateY: -5, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative mx-auto max-w-md"
            >
              {/* Holographic Container */}
              <div className="relative rounded-3xl border border-white/10 bg-surface/10 backdrop-blur-xl p-6 shadow-2xl shadow-primary/5 overflow-hidden">
                {/* Glossy reflection */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent pointer-events-none" />
                
                {/* Header */}
                <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>
                  <div className="text-xs font-mono text-text-muted">neura_secure_channel</div>
                </div>

                {/* Messages Area */}
                <div className="space-y-4 min-h-[300px]">
                  <AnimatePresence mode="popLayout">
                    {messages.map((msg, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className={cn(
                          "flex w-full",
                          msg.role === 'user' ? "justify-end" : "justify-start"
                        )}
                      >
                        <div className={cn(
                          "max-w-[80%] rounded-2xl px-5 py-3 text-sm md:text-base backdrop-blur-md shadow-lg border",
                          msg.role === 'user' 
                            ? "bg-primary/20 border-primary/20 text-text-primary rounded-tr-sm" 
                            : "bg-surface-light/40 border-white/10 text-text-secondary rounded-tl-sm"
                        )}>
                          {msg.typing ? (
                            <div className="flex gap-1 h-6 items-center px-1">
                              <span className="w-1.5 h-1.5 bg-current rounded-full animate-bounce [animation-delay:-0.3s]" />
                              <span className="w-1.5 h-1.5 bg-current rounded-full animate-bounce [animation-delay:-0.15s]" />
                              <span className="w-1.5 h-1.5 bg-current rounded-full animate-bounce" />
                            </div>
                          ) : (
                            msg.text
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                {/* Input Area Simulation */}
                <div className="mt-6 pt-4 border-t border-white/5 flex gap-3 opacity-50">
                  <div className="flex-1 h-10 rounded-xl bg-surface-light/20" />
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Send className="w-4 h-4 text-primary" />
                  </div>
                </div>
              </div>

              {/* Decorative elements behind */}
              <div className="absolute -z-10 -top-10 -right-10 w-40 h-40 bg-violet-500/20 rounded-full blur-[50px]" />
              <div className="absolute -z-10 -bottom-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-[50px]" />
            </motion.div>
          </div>

        </div>
      </Container>
    </Section>
  )
}
