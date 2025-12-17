'use client'

import { motion, MotionValue, useTransform } from 'framer-motion'

interface BrowserMockupAnimationProps {
  progress: MotionValue<number>
}

export function BrowserMockupAnimation({ progress }: BrowserMockupAnimationProps) {
  // Transform progress to different parts of the animation
  const browserOpacity = useTransform(progress, [0, 0.2], [0, 1])
  const urlProgress = useTransform(progress, [0.2, 0.5], [0, 1])
  const contentOpacity = useTransform(progress, [0.5, 0.8], [0, 1])
  const contentY = useTransform(progress, [0.5, 1], [20, 0])

  // Lifting transforms out of JSX
  const typingX2 = useTransform(urlProgress, [0, 1], [130, 280])
  const cursorX = useTransform(progress, [0.6, 1], [100, 200])
  const cursorY = useTransform(progress, [0.6, 1], [150, 220])
  const cursorOpacity = useTransform(progress, [0.6, 1], [0, 1])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 dark:opacity-30">
      <motion.svg
        viewBox="0 0 400 300"
        className="w-full h-full"
        style={{ opacity: browserOpacity }}
      >
        {/* Browser Window */}
        <motion.rect
          x="40"
          y="30"
          width="320"
          height="240"
          rx="8"
          className="fill-none stroke-blue-500 dark:stroke-blue-400"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          style={{
            pathLength: progress,
          }}
        />

        {/* Browser Header */}
        <motion.rect
          x="40"
          y="30"
          width="320"
          height="40"
          className="fill-blue-500/10 dark:fill-blue-400/10"
          style={{ opacity: browserOpacity }}
        />

        {/* Browser Dots */}
        {[60, 80, 100].map((cx, i) => (
          <motion.circle
            key={i}
            cx={cx}
            cy="50"
            r="4"
            className="fill-blue-500 dark:fill-blue-400"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: i * 0.1 + 0.2, type: 'spring' }}
            style={{ opacity: browserOpacity }}
          />
        ))}

        {/* URL Bar */}
        <motion.rect
          x="120"
          y="42"
          width="220"
          height="16"
          rx="8"
          className="fill-none stroke-blue-500/50 dark:stroke-blue-400/50"
          strokeWidth="1"
          style={{ opacity: browserOpacity }}
        />

        {/* Typing URL Effect */}
        <motion.line
          x1="130"
          y1="50"
          x2="130"
          y2="50"
          className="stroke-blue-500 dark:stroke-blue-400"
          strokeWidth="2"
          strokeLinecap="round"
          style={{
            x2: typingX2,
            opacity: urlProgress,
          }}
        />

        {/* Content Blocks */}
        <motion.g style={{ opacity: contentOpacity, y: contentY }}>
          {/* Header Block */}
          <rect
            x="60"
            y="90"
            width="280"
            height="20"
            rx="4"
            className="fill-blue-500/20 dark:fill-blue-400/20"
          />

          {/* Content Rows */}
          {[120, 150, 180].map((y, i) => (
            <g key={i}>
              <rect
                x="60"
                y={y}
                width="80"
                height="15"
                rx="2"
                className="fill-blue-500/15 dark:fill-blue-400/15"
              />
              <rect
                x="150"
                y={y}
                width="190"
                height="15"
                rx="2"
                className="fill-blue-500/10 dark:fill-blue-400/10"
              />
            </g>
          ))}

          {/* Image Placeholder */}
          <rect
            x="60"
            y="210"
            width="120"
            height="40"
            rx="4"
            className="fill-blue-500/15 dark:fill-blue-400/15"
          />
        </motion.g>

        {/* Cursor */}
        <motion.g
          style={{
            x: cursorX,
            y: cursorY,
            opacity: cursorOpacity,
          }}
        >
          <path
            d="M0,0 L0,16 L4,12 L7,18 L9,17 L6,11 L12,11 Z"
            className="fill-blue-500 dark:fill-blue-400"
          />
        </motion.g>
      </motion.svg>
    </div>
  )
}
