'use client'

import { motion, MotionValue, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'

interface GearsAnimationProps {
  progress: MotionValue<number>
}

export function GearsAnimation({ progress }: GearsAnimationProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const gearsOpacity = useTransform(progress, [0, 0.3], [0, 1])
  const rotation1 = useTransform(progress, [0.3, 1], [0, 360])
  const rotation2 = useTransform(progress, [0.3, 1], [0, -360])
  const connectionOpacity = useTransform(progress, [0.5, 0.7], [0, 1])
  const dataFlowOpacity = useTransform(progress, [0.7, 1], [0, 1])

  // Generate gear teeth path
  const generateGearPath = (cx: number, cy: number, teeth: number, innerRadius: number, outerRadius: number) => {
    const points: string[] = []
    const angleStep = (Math.PI * 2) / teeth

    for (let i = 0; i < teeth; i++) {
      const angle = i * angleStep
      const nextAngle = angle + angleStep / 2

      // Outer tooth
      const x1 = cx + Math.cos(angle) * outerRadius
      const y1 = cy + Math.sin(angle) * outerRadius
      points.push(`${i === 0 ? 'M' : 'L'} ${x1} ${y1}`)

      // Tooth tip
      const x2 = cx + Math.cos(nextAngle - angleStep / 6) * outerRadius
      const y2 = cy + Math.sin(nextAngle - angleStep / 6) * outerRadius
      points.push(`L ${x2} ${y2}`)

      // Back to inner
      const x3 = cx + Math.cos(nextAngle) * innerRadius
      const y3 = cy + Math.sin(nextAngle) * innerRadius
      points.push(`L ${x3} ${y3}`)
    }

    points.push('Z')
    return points.join(' ')
  }

  if (!mounted) return null

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 dark:opacity-30">
      <motion.svg viewBox="0 0 400 300" className="w-full h-full">
        <defs>
          {/* Filter for gear glow */}
          <filter id="gearGlow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Gradient for data flow */}
          <linearGradient id="dataFlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" className="stop-yellow-500" stopOpacity="0" />
            <stop offset="50%" className="stop-yellow-500" stopOpacity="0.8" />
            <stop offset="100%" className="stop-yellow-500" stopOpacity="0" />
          </linearGradient>
        </defs>

        <motion.g style={{ opacity: gearsOpacity }}>
          {/* Large Gear 1 (Left) */}
          <motion.g
            style={{
              rotate: rotation1,
              originX: '140px',
              originY: '150px',
            }}
          >
            {/* Gear body */}
            <path
              d={generateGearPath(140, 150, 12, 35, 50)}
              className="fill-yellow-500/20 dark:fill-yellow-400/20 stroke-yellow-500 dark:stroke-yellow-400"
              strokeWidth="2"
              filter="url(#gearGlow)"
            />

            {/* Center hole */}
            <circle
              cx="140"
              cy="150"
              r="20"
              className="fill-background stroke-yellow-500 dark:stroke-yellow-400"
              strokeWidth="2"
            />

            {/* Center spokes */}
            {[0, 60, 120, 180, 240, 300].map((angle, i) => {
              const rad = (angle * Math.PI) / 180
              const x = 140 + Math.cos(rad) * 15
              const y = 150 + Math.sin(rad) * 15
              return (
                <line
                  key={i}
                  x1="140"
                  y1="150"
                  x2={x}
                  y2={y}
                  className="stroke-yellow-500 dark:stroke-yellow-400"
                  strokeWidth="2"
                />
              )
            })}
          </motion.g>

          {/* Medium Gear 2 (Top Right) */}
          <motion.g
            style={{
              rotate: rotation2,
              originX: '250px',
              originY: '110px',
            }}
          >
            <path
              d={generateGearPath(250, 110, 10, 28, 40)}
              className="fill-yellow-500/20 dark:fill-yellow-400/20 stroke-yellow-500 dark:stroke-yellow-400"
              strokeWidth="2"
              filter="url(#gearGlow)"
            />
            <circle
              cx="250"
              cy="110"
              r="15"
              className="fill-background stroke-yellow-500 dark:stroke-yellow-400"
              strokeWidth="2"
            />
          </motion.g>

          {/* Medium Gear 3 (Bottom Right) */}
          <motion.g
            style={{
              rotate: rotation1,
              originX: '260px',
              originY: '190px',
            }}
          >
            <path
              d={generateGearPath(260, 190, 10, 28, 40)}
              className="fill-yellow-500/20 dark:fill-yellow-400/20 stroke-yellow-500 dark:stroke-yellow-400"
              strokeWidth="2"
              filter="url(#gearGlow)"
            />
            <circle
              cx="260"
              cy="190"
              r="15"
              className="fill-background stroke-yellow-500 dark:stroke-yellow-400"
              strokeWidth="2"
            />
          </motion.g>

          {/* Small Gear 4 (Far Right) */}
          <motion.g
            style={{
              rotate: rotation2,
              originX: '330px',
              originY: '150px',
            }}
          >
            <path
              d={generateGearPath(330, 150, 8, 20, 30)}
              className="fill-yellow-500/20 dark:fill-yellow-400/20 stroke-yellow-500 dark:stroke-yellow-400"
              strokeWidth="2"
              filter="url(#gearGlow)"
            />
            <circle
              cx="330"
              cy="150"
              r="12"
              className="fill-background stroke-yellow-500 dark:stroke-yellow-400"
              strokeWidth="2"
            />
          </motion.g>
        </motion.g>

        {/* Connection Lines */}
        <motion.g style={{ opacity: connectionOpacity }}>
          {[
            { x1: 190, y1: 150, x2: 220, y2: 120 },
            { x1: 190, y1: 150, x2: 220, y2: 180 },
            { x1: 290, y1: 110, x2: 305, y2: 140 },
            { x1: 300, y1: 190, x2: 310, y2: 165 },
          ].map((line, i) => (
            <motion.line
              key={i}
              {...line}
              className="stroke-yellow-500/50 dark:stroke-yellow-400/50"
              strokeWidth="2"
              strokeDasharray="4 4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            />
          ))}
        </motion.g>

        {/* Data Flow Particles */}
        <motion.g style={{ opacity: dataFlowOpacity }}>
          {[0, 1, 2].map((i) => (
            <motion.circle
              key={i}
              cx="0"
              cy="0"
              r="3"
              className="fill-yellow-500 dark:fill-yellow-400"
              filter="url(#gearGlow)"
              animate={{
                cx: [140, 250, 260, 330],
                cy: [150, 110, 190, 150],
              }}
              transition={{
                duration: 4,
                delay: i * 0.8,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          ))}
        </motion.g>

        {/* Efficiency Indicator */}
        <motion.g style={{ opacity: dataFlowOpacity }}>
          <motion.text
            x="200"
            y="260"
            className="fill-yellow-500 dark:fill-yellow-400 text-xs font-mono"
            textAnchor="middle"
          >
            <tspan>
              <motion.tspan
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ⚡
              </motion.tspan>{' '}
              AUTOMATED
            </tspan>
          </motion.text>
        </motion.g>
      </motion.svg>
    </div>
  )
}
