'use client'

import { useEffect, useRef, useState } from 'react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { FadeIn } from '@/components/animations'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { Code, Database, Cpu, Shield, Zap, TestTube, ArrowRight } from 'lucide-react'

const techNodes = [
  { id: 'nextjs', label: 'Next.js', icon: Code, x: 30, y: 20, color: 'text-slate-800 dark:text-slate-200' },
  { id: 'ai', label: 'AI Integration', icon: Cpu, x: 70, y: 15, color: 'text-violet-600 dark:text-violet-400' },
  { id: 'testing', label: 'Testing', icon: TestTube, x: 20, y: 60, color: 'text-emerald-600 dark:text-emerald-400' },
  { id: 'deploy', label: 'CI/CD', icon: Zap, x: 80, y: 70, color: 'text-amber-600 dark:text-amber-400' },
  { id: 'database', label: 'Supabase', icon: Database, x: 55, y: 75, color: 'text-cyan-600 dark:text-cyan-400' },
  { id: 'security', label: 'Security', icon: Shield, x: 45, y: 35, color: 'text-primary' }
]

const connections = [
  { from: 'nextjs', to: 'security' },
  { from: 'ai', to: 'security' },
  { from: 'security', to: 'database' },
  { from: 'testing', to: 'deploy' },
  { from: 'database', to: 'deploy' },
  { from: 'nextjs', to: 'testing' },
  { from: 'ai', to: 'database' }
]

function NetworkGraph() {
  const svgRef = useRef<SVGSVGElement>(null)
  const [hoveredNode, setHoveredNode] = useState<string | null>(null)
  const [dimensions, setDimensions] = useState({ width: 600, height: 400 })

  useEffect(() => {
    const updateDimensions = () => {
      if (svgRef.current) {
        const container = svgRef.current.parentElement
        if (container) {
          setDimensions({
            width: container.clientWidth,
            height: Math.min(400, container.clientWidth * 0.6)
          })
        }
      }
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  const getNodePosition = (node: typeof techNodes[0]) => ({
    x: (node.x / 100) * dimensions.width,
    y: (node.y / 100) * dimensions.height
  })

  return (
    <div className="relative w-full h-[300px] md:h-[400px] rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 overflow-hidden">
      {/* Center Project Node */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <motion.div
          animate={{
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="relative"
        >
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-primary to-orange-400 flex items-center justify-center shadow-2xl">
            <div className="text-center">
              <div className="text-xl md:text-2xl font-bold text-white mb-1">IL TUO</div>
              <div className="text-xs md:text-sm text-white/90 font-medium">PROGETTO</div>
            </div>
          </div>

          {/* Pulse rings */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-primary"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 0, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut"
            }}
          />
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-orange-400"
            animate={{
              scale: [1, 1.8, 1],
              opacity: [0.3, 0, 0.3]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
              delay: 0.5
            }}
          />
        </motion.div>
      </div>

      {/* SVG for connections and nodes */}
      <svg
        ref={svgRef}
        className="absolute inset-0 w-full h-full"
        style={{ width: dimensions.width, height: dimensions.height }}
      >
        {/* Draw connections */}
        <g>
          {connections.map((conn, index) => {
            const fromNode = techNodes.find(n => n.id === conn.from)
            const toNode = techNodes.find(n => n.id === conn.to)
            if (!fromNode || !toNode) return null

            const from = getNodePosition(fromNode)
            const to = getNodePosition(toNode)
            const centerX = dimensions.width / 2
            const centerY = dimensions.height / 2

            const isHighlighted = hoveredNode === conn.from || hoveredNode === conn.to

            return (
              <g key={`${conn.from}-${conn.to}`}>
                {/* Line from node to center */}
                <motion.line
                  x1={from.x}
                  y1={from.y}
                  x2={centerX}
                  y2={centerY}
                  stroke="url(#gradient1)"
                  strokeWidth={isHighlighted ? 2 : 1}
                  opacity={isHighlighted ? 0.6 : 0.2}
                  className="transition-all duration-300"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                />

                {/* Animated particle along line */}
                {isHighlighted && (
                  <motion.circle
                    r="3"
                    fill="currentColor"
                    className="text-primary"
                    initial={{
                      cx: from.x,
                      cy: from.y
                    }}
                    animate={{
                      cx: [from.x, centerX, from.x],
                      cy: [from.y, centerY, from.y]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                )}
              </g>
            )
          })}
        </g>

        {/* Gradients */}
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(249, 115, 22)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="rgb(251, 146, 60)" stopOpacity="0.1" />
          </linearGradient>
        </defs>
      </svg>

      {/* Tech Nodes */}
      {techNodes.map((node, index) => {
        const pos = getNodePosition(node)
        const Icon = node.icon

        return (
          <motion.div
            key={node.id}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
            style={{
              position: 'absolute',
              left: `${pos.x}px`,
              top: `${pos.y}px`,
              transform: 'translate(-50%, -50%)'
            }}
            className="z-10"
            onMouseEnter={() => setHoveredNode(node.id)}
            onMouseLeave={() => setHoveredNode(null)}
          >
            <div
              className={cn(
                "group cursor-pointer transition-all duration-300",
                hoveredNode === node.id && "scale-110"
              )}
            >
              <div className={cn(
                "w-12 h-12 md:w-16 md:h-16 rounded-xl flex items-center justify-center shadow-lg border-2 transition-all duration-300",
                "bg-white dark:bg-slate-800",
                hoveredNode === node.id
                  ? "border-primary shadow-primary/30 shadow-2xl"
                  : "border-slate-200 dark:border-slate-700"
              )}>
                <Icon className={cn("w-6 h-6 md:w-8 md:h-8", node.color)} />
              </div>

              {/* Label */}
              <div className={cn(
                "absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs md:text-sm font-medium px-2 py-1 rounded-lg transition-all duration-300",
                "bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg",
                hoveredNode === node.id ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1 pointer-events-none"
              )}>
                {node.label}
              </div>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}

export function NetworkGraphCTA() {
  return (
    <Section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-transparent dark:from-slate-900/50 dark:to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-violet-500/5 rounded-full blur-[120px] translate-y-1/3 translate-x-1/3 pointer-events-none" />

      <Container className="relative z-10">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-slate-900 dark:text-white">
                Entra nella Rete
              </h2>
              <p className="text-lg md:text-xl text-slate-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
                Ogni progetto connette tecnologie, competenze e persone. Il tuo progetto al centro, circondato dalle migliori tecnologie e best practices.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <NetworkGraph />
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="mt-16 text-center">
              <p className="text-slate-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                Ogni nodo rappresenta una tecnologia o competenza che integriamo nei progetti.
                Hover sui nodi per vedere le connessioni attive.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" className="rounded-full px-8 shadow-lg shadow-primary/20">
                  <Link href="/contatti">
                    Connettiti con Noi
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild variant="secondary" size="lg" className="rounded-full px-8">
                  <Link href="/servizi">
                    Esplora le Tecnologie
                  </Link>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </Section>
  )
}
