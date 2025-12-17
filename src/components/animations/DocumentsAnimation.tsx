'use client'

import { motion, MotionValue, useTransform } from 'framer-motion'

interface DocumentsAnimationProps {
  progress: MotionValue<number>
}

export function DocumentsAnimation({ progress }: DocumentsAnimationProps) {
  // Transform progress to different animation stages
  const documentsOpacity = useTransform(progress, [0, 0.2], [0, 1])
  const searchBeamOpacity = useTransform(progress, [0.4, 0.6], [0, 1])
  const searchBeamY = useTransform(progress, [0.4, 1], [100, 250])
  const highlightOpacity = useTransform(progress, [0.7, 0.9], [0, 1])

  // Lifting hooks out of JSX
  const searchIconY = useTransform(searchBeamY, (y) => y - 50)
  const knowledgeGraphOpacity = useTransform(progress, [0.8, 1], [0, 1])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 dark:opacity-30">
      <motion.svg viewBox="0 0 400 300" className="w-full h-full">
        <defs>
          {/* Gradient for search beam */}
          <linearGradient id="searchBeam" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" className="stop-green-500" stopOpacity="0" />
            <stop offset="50%" className="stop-green-500" stopOpacity="0.6" />
            <stop offset="100%" className="stop-green-500" stopOpacity="0" />
          </linearGradient>

          {/* Filter for glow effect */}
          <filter id="docGlow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Documents Stack */}
        <motion.g style={{ opacity: documentsOpacity }}>
          {/* Document 3 (back) */}
          <motion.g
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
          >
            <rect
              x="120"
              y="100"
              width="180"
              height="140"
              rx="4"
              className="fill-green-500/10 dark:fill-green-400/10 stroke-green-500 dark:stroke-green-400"
              strokeWidth="1.5"
            />
            {/* Document lines */}
            {[120, 135, 150].map((y, i) => (
              <rect
                key={i}
                x="135"
                y={y}
                width="150"
                height="4"
                rx="2"
                className="fill-green-500/20 dark:fill-green-400/20"
              />
            ))}
          </motion.g>

          {/* Document 2 (middle) */}
          <motion.g
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, type: 'spring' }}
          >
            <rect
              x="110"
              y="90"
              width="180"
              height="140"
              rx="4"
              className="fill-green-500/15 dark:fill-green-400/15 stroke-green-500 dark:stroke-green-400"
              strokeWidth="1.5"
            />
            {/* Document lines */}
            {[110, 125, 140, 155].map((y, i) => (
              <rect
                key={i}
                x="125"
                y={y}
                width="150"
                height="4"
                rx="2"
                className="fill-green-500/25 dark:fill-green-400/25"
              />
            ))}
          </motion.g>

          {/* Document 1 (front) */}
          <motion.g
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, type: 'spring' }}
          >
            <rect
              x="100"
              y="80"
              width="180"
              height="140"
              rx="4"
              className="fill-green-500/20 dark:fill-green-400/20 stroke-green-500 dark:stroke-green-400"
              strokeWidth="2"
            />
            {/* Document header */}
            <rect
              x="115"
              y="95"
              width="150"
              height="8"
              rx="2"
              className="fill-green-500/40 dark:fill-green-400/40"
            />
            {/* Document lines */}
            {[115, 130, 145, 160, 175, 190].map((y, i) => (
              <rect
                key={i}
                x="115"
                y={y}
                width={150 - i * 10}
                height="4"
                rx="2"
                className="fill-green-500/30 dark:fill-green-400/30"
              />
            ))}
          </motion.g>
        </motion.g>

        {/* Search Beam */}
        <motion.rect
          x="90"
          y={0}
          width="200"
          height="30"
          fill="url(#searchBeam)"
          style={{
            y: searchBeamY,
            opacity: searchBeamOpacity,
          }}
          filter="url(#docGlow)"
        />

        {/* Search Icon */}
        <motion.g
          style={{
            opacity: searchBeamOpacity,
            y: searchIconY,
          }}
        >
          <circle
            cx="200"
            cy="0"
            r="15"
            className="fill-none stroke-green-500 dark:stroke-green-400"
            strokeWidth="2"
          />
          <line
            x1="212"
            y1="12"
            x2="222"
            y2="22"
            className="stroke-green-500 dark:stroke-green-400"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </motion.g>

        {/* Highlight/Match indicators */}
        <motion.g style={{ opacity: highlightOpacity }}>
          {/* Highlight on first document */}
          <motion.rect
            x="115"
            y="145"
            width="80"
            height="4"
            rx="2"
            className="fill-green-500 dark:fill-green-400"
            filter="url(#docGlow)"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Match indicator particles */}
          {[0, 1, 2].map((i) => (
            <motion.circle
              key={i}
              cx="0"
              cy="0"
              r="2"
              className="fill-green-500 dark:fill-green-400"
              filter="url(#docGlow)"
              animate={{
                cx: [115 + i * 30, 115 + i * 30],
                cy: [145, 135],
                opacity: [1, 0],
              }}
              transition={{
                duration: 1.5,
                delay: i * 0.2,
                repeat: Infinity,
                ease: 'easeOut',
              }}
            />
          ))}
        </motion.g>

        {/* Knowledge graph connections */}
        <motion.g style={{ opacity: knowledgeGraphOpacity }}>
          {/* Connecting lines */}
          {[
            { x1: 190, y1: 150, x2: 320, y2: 120 },
            { x1: 190, y1: 170, x2: 320, y2: 160 },
            { x1: 190, y1: 190, x2: 320, y2: 200 },
          ].map((line, i) => (
            <g key={i}>
              <motion.line
                {...line}
                className="stroke-green-500/40 dark:stroke-green-400/40"
                strokeWidth="1"
                strokeDasharray="4 2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
              />
              <motion.circle
                cx={line.x2}
                cy={line.y2}
                r="4"
                className="fill-green-500 dark:fill-green-400"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8 + i * 0.1, type: 'spring' }}
              />
            </g>
          ))}
        </motion.g>
      </motion.svg>
    </div>
  )
}
