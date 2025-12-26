'use client'

import { useState, useEffect } from 'react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { FadeIn } from '@/components/animations'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Lightbulb, FileText, Code, CheckCircle, Rocket, Activity, Terminal, CheckCircle2, Loader2 } from 'lucide-react'

const pipelineStages = [
  {
    id: 'kickoff',
    name: 'Project Kickoff',
    icon: Lightbulb,
    description: 'Allineamento iniziale completo',
    logs: [
      'Avvio progetto trasparente...',
      '✓ Vision document condiviso',
      '✓ Wireframes approvati dal cliente',
      '✓ Technical requirements documentati',
      '✓ Definition of Done stabilita',
      '✓ Communication channels configurati',
      '✓ Repository inizializzato con README',
      '✓ First meeting notes: PUBLISHED'
    ],
    duration: 2500,
    color: 'from-cyan-500 to-blue-500',
    bgColor: 'bg-cyan-500/10 dark:bg-cyan-500/5',
    textColor: 'text-cyan-600 dark:text-cyan-400',
    borderColor: 'border-cyan-500/30',
    logColor: 'text-cyan-400'
  },
  {
    id: 'design',
    name: 'Design Review',
    icon: FileText,
    description: 'Progettazione collaborativa',
    logs: [
      'Design phase con feedback loop...',
      '✓ System design document pubblicato',
      '✓ Database ER diagram condiviso',
      '✓ API specification (OpenAPI) generata',
      '✓ Security considerations documented',
      '✓ Peer review ricevute: 3/3 positive',
      '✓ Architecture Decision Records: 5 ADR creati'
    ],
    duration: 2800,
    color: 'from-violet-500 to-purple-500',
    bgColor: 'bg-violet-500/10 dark:bg-violet-500/5',
    textColor: 'text-violet-600 dark:text-violet-400',
    borderColor: 'border-violet-500/30',
    logColor: 'text-violet-400'
  },
  {
    id: 'build',
    name: 'Collaborative Build',
    icon: Code,
    description: 'Sviluppo con code review',
    logs: [
      'Feature development in progress...',
      '$ git checkout -b feat/payment-integration',
      '✓ Progress updates: commit ogni 2h',
      '✓ WIP commits con commenti dettagliati',
      '$ git push origin feat/payment-integration',
      '✓ Pull Request aperta: #127',
      '✓ Code review richiesta',
      '✓ Feedback applicati (3 rounds)',
      '✓ PR approved by 2 reviewers',
      '✓ Merged to main'
    ],
    duration: 3200,
    color: 'from-amber-500 to-orange-500',
    bgColor: 'bg-amber-500/10 dark:bg-amber-500/5',
    textColor: 'text-amber-600 dark:text-amber-400',
    borderColor: 'border-amber-500/30',
    logColor: 'text-amber-400'
  },
  {
    id: 'testing',
    name: 'Transparent Testing',
    icon: CheckCircle,
    description: 'Test visibili e tracciabili',
    logs: [
      'Running test suite con reporting...',
      '✓ Test coverage report: 94.2% (published)',
      '✓ Test results dashboard: ACCESSIBLE',
      '✓ Performance metrics logged',
      '✓ Lighthouse score: 95/100 (documented)',
      '✓ Security scan report: SHARED',
      '✓ Bug tracker: 0 critical, 2 minor (tracked)',
      '✓ QA sign-off documented'
    ],
    duration: 3000,
    color: 'from-emerald-500 to-green-500',
    bgColor: 'bg-emerald-500/10 dark:bg-emerald-500/5',
    textColor: 'text-emerald-600 dark:text-emerald-400',
    borderColor: 'border-emerald-500/30',
    logColor: 'text-emerald-400'
  },
  {
    id: 'delivery',
    name: 'Documented Deploy',
    icon: Rocket,
    description: 'Rilascio con changelog completo',
    logs: [
      'Preparing transparent deployment...',
      '✓ Changelog generato automaticamente',
      '✓ Release notes pubblicate',
      '✓ Deployment logs: REAL-TIME VISIBLE',
      '🚀 Deploying v1.8.0 to production...',
      '✓ Status page aggiornata',
      '✓ Client notificato via email',
      '✓ Monitoring dashboard condivisa',
      '✓ Post-mortem meeting schedulato',
      '✓ Deployed: https://app.example.com'
    ],
    duration: 2500,
    color: 'from-primary to-orange-400',
    bgColor: 'bg-primary/10 dark:bg-primary/5',
    textColor: 'text-primary dark:text-primary',
    borderColor: 'border-primary/30',
    logColor: 'text-orange-400'
  }
]

function PipelineStage({
  stage,
  isActive,
  isCompleted,
  layout = 'col'
}: {
  stage: typeof pipelineStages[0]
  isActive: boolean
  isCompleted: boolean
  layout?: 'col' | 'row'
}) {
  const Icon = stage.icon

  return (
    <div className={cn(
      "relative flex items-center z-10",
      layout === 'col' ? "flex-col text-center" : "flex-row text-left gap-4"
    )}>
      {/* Stage Node */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{
          scale: isActive ? 1.1 : 1,
          opacity: 1
        }}
        className={cn(
          "relative z-10 rounded-2xl flex items-center justify-center border-2 transition-all duration-500 shadow-lg shrink-0",
          layout === 'col' ? "w-16 h-16 md:w-20 md:h-20" : "w-14 h-14",
          isCompleted ? `bg-gradient-to-br ${stage.color} border-transparent text-white` :
          isActive ? `${stage.bgColor} ${stage.borderColor} ${stage.textColor}` :
          "bg-slate-100 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 text-slate-400 dark:text-slate-600"
        )}
      >
        {isCompleted ? (
          <CheckCircle2 className={layout === 'col' ? "w-8 h-8 md:w-10 md:h-10" : "w-6 h-6"} />
        ) : isActive ? (
          <Loader2 className={cn("animate-spin", layout === 'col' ? "w-8 h-8 md:w-10 md:h-10" : "w-6 h-6")} />
        ) : (
          <Icon className={layout === 'col' ? "w-8 h-8 md:w-10 md:h-10" : "w-6 h-6"} />
        )}

        {/* Pulse effect when active */}
        {isActive && (
          <motion.div
            className={cn("absolute inset-0 rounded-2xl bg-gradient-to-br", stage.color)}
            animate={{
              opacity: [0.3, 0.1, 0.3],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        )}
      </motion.div>

      {/* Text Content */}
      <div className={cn(
        layout === 'col' ? "mt-3" : ""
      )}>
        <div className={cn(
          "font-bold transition-colors",
          layout === 'col' ? "text-sm md:text-base" : "text-base",
          isActive || isCompleted ? stage.textColor : "text-slate-500 dark:text-slate-600"
        )}>
          {stage.name}
        </div>
        <div className={cn(
          "text-xs transition-opacity",
          layout === 'col' ? "mt-1 px-2 hidden md:block" : "block mt-0.5",
          isActive || isCompleted ? "text-slate-600 dark:text-slate-400 opacity-100" : "text-slate-400 dark:text-slate-600 opacity-50"
        )}>
          {stage.description}
        </div>
      </div>
    </div>
  )
}

function LogPanel({ currentStage }: { currentStage: typeof pipelineStages[0] | null }) {
  const [visibleLogs, setVisibleLogs] = useState<string[]>([])

  useEffect(() => {
    if (!currentStage) {
      setVisibleLogs([])
      return
    }

    setVisibleLogs([])
    currentStage.logs.forEach((log, index) => {
      setTimeout(() => {
        setVisibleLogs(prev => [...prev, log])
      }, index * 400)
    })
  }, [currentStage])

  if (!currentStage) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-12 bg-slate-50 dark:bg-black/90 rounded-2xl p-4 md:p-6 border border-slate-200 dark:border-slate-800 font-mono text-xs md:text-sm overflow-hidden shadow-sm dark:shadow-none"
    >
      {/* Terminal Header */}
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-200 dark:border-slate-800">
        <Terminal className="w-4 h-4 text-slate-400 dark:text-slate-500" />
        <span className="text-slate-500 dark:text-slate-600">pipeline.log</span>
        <div className="ml-auto flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-red-500/50" />
          <div className="w-2 h-2 rounded-full bg-amber-500/50" />
          <div className="w-2 h-2 rounded-full bg-emerald-500/50" />
        </div>
      </div>

      {/* Logs */}
      <div className="space-y-2 min-h-[120px] md:min-h-[150px]">
        <AnimatePresence mode="popLayout">
          {visibleLogs.map((log, index) => (
            <motion.div
              key={`${currentStage.id}-${index}`}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.3 }}
              className={cn(
                "flex items-start gap-2",
                log.includes('✓') || log.includes('🚀') || log.includes('📊')
                  ? currentStage.textColor
                  : "text-slate-600 dark:text-slate-400"
              )}
            >
              <span className="opacity-30 dark:opacity-50 select-none">&gt;</span>
              <span>{log}</span>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Blinking cursor */}
        <div className="flex items-center gap-2 text-slate-600 dark:text-slate-700">
          <span className="opacity-30 dark:opacity-50">&gt;</span>
          <span className="animate-pulse">▊</span>
        </div>
      </div>
    </motion.div>
  )
}

export function BuildPipeline() {
  const [currentStageIndex, setCurrentStageIndex] = useState(0)
  const [completedStages, setCompletedStages] = useState<Set<number>>(new Set())

  useEffect(() => {
    const currentStage = pipelineStages[currentStageIndex]

    const timer = setTimeout(() => {
      setCompletedStages(prev => new Set([...prev, currentStageIndex]))

      if (currentStageIndex < pipelineStages.length - 1) {
        setCurrentStageIndex(currentStageIndex + 1)
      } else {
        // Reset cycle
        setTimeout(() => {
          setCompletedStages(new Set())
          setCurrentStageIndex(0)
        }, 2000)
      }
    }, currentStage.duration)

    return () => clearTimeout(timer)
  }, [currentStageIndex])

  return (
    <Section className="py-24 bg-slate-50 dark:bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]"
           style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)', backgroundSize: '40px 40px' }}
      />

      <Container>
        <div className="mb-16 md:mb-20 max-w-3xl">
          <FadeIn>
            <div className="flex items-center gap-2 mb-4 text-primary font-mono text-xs tracking-widest uppercase">
              <Activity className="w-4 h-4" />
              <span>IL PROCESSO</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-slate-900 dark:text-white">
              Processo Trasparente: <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
                Ogni Fase, Ogni Decisione Visibile
              </span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-gray-300 leading-relaxed">
              Dal primo wireframe all&apos;ultimo deployment, tracciamo e documentiamo ogni scelta tecnica. Collaborazione continua con revisioni sistematiche per garantire allineamento e qualità condivisa.
            </p>
          </FadeIn>
        </div>

        {/* Pipeline Visualization */}
        <FadeIn delay={0.2}>
          <div className="relative">
            {/* Horizontal Pipeline (Desktop) */}
            <div className="hidden md:flex items-start justify-between gap-4 mb-8 px-8">
              {pipelineStages.map((stage, index) => (
                <div key={stage.id} className="flex items-center flex-1">
                  <PipelineStage
                    stage={stage}
                    isActive={currentStageIndex === index}
                    isCompleted={completedStages.has(index)}
                    layout="col"
                  />

                  {/* Connector Line */}
                  {index < pipelineStages.length - 1 && (
                    <div className="flex-1 mx-4 mt-8">
                      <div className="relative h-1 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                        <motion.div
                          className={cn("absolute inset-y-0 left-0 bg-gradient-to-r", stage.color)}
                          initial={{ width: "0%" }}
                          animate={{
                            width: completedStages.has(index) ? "100%" : "0%"
                          }}
                          transition={{ duration: 0.5, ease: "easeInOut" }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Vertical Timeline (Mobile) */}
            <div className="md:hidden mb-12 relative">
               {/* Vertical Connecting Line Background */}
               <div className="absolute left-7 top-8 bottom-8 w-0.5 -translate-x-1/2 bg-slate-200 dark:bg-slate-800" />
               
              <div className="space-y-8">
                {pipelineStages.map((stage, index) => (
                  <div key={stage.id} className="relative">
                     {/* Connector segment for this stage */}
                     {index < pipelineStages.length - 1 && (
                        <div className="absolute left-7 top-14 bottom-[-32px] w-0.5 -translate-x-1/2 z-0 overflow-hidden">
                           <motion.div 
                              className={cn(
                                "w-full h-full origin-top", 
                                completedStages.has(index) ? cn("bg-gradient-to-b", stage.color) : "bg-transparent"
                              )}
                              initial={{ scaleY: 0 }}
                              animate={{ scaleY: completedStages.has(index) ? 1 : 0 }}
                              transition={{ duration: 0.5 }}
                           />
                        </div>
                     )}

                    <PipelineStage
                      stage={stage}
                      isActive={currentStageIndex === index}
                      isCompleted={completedStages.has(index)}
                      layout="row"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Log Panel */}
            <LogPanel currentStage={pipelineStages[currentStageIndex]} />
          </div>
        </FadeIn>
      </Container>
    </Section>
  )
}
