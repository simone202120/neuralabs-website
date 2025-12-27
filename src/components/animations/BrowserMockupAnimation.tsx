'use client'

import { motion, MotionValue, useTransform } from 'framer-motion'

interface BrowserMockupAnimationProps {
  progress: MotionValue<number>
}

export function BrowserMockupAnimation({ progress }: BrowserMockupAnimationProps) {
  const browserOpacity = useTransform(progress, [0, 0.2], [0, 1])
  const contentOpacity = useTransform(progress, [0.5, 0.8], [0, 1])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 dark:opacity-30">
      <motion.svg
        viewBox="0 0 400 300"
        className="w-full h-full"
        style={{ opacity: browserOpacity }}
      >
        {/* Browser Window */}
        <rect
          x="40"
          y="30"
          width="320"
          height="240"
          rx="8"
          className="fill-none stroke-current"
          strokeWidth="2"
        />

        {/* Browser Header */}
        <rect
          x="40"
          y="30"
          width="320"
          height="40"
          className="fill-current fill-opacity-10"
        />

        {/* Browser Dots */}
        {[60, 80, 100].map((cx, i) => (
          <motion.circle
            key={i}
            cx={cx}
            cy="50"
            r="4"
            className="fill-current"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: i * 0.1 + 0.2 }}
          />
        ))}

        {/* URL Bar */}
        <rect
          x="120"
          y="42"
          width="220"
          height="16"
          rx="8"
          className="fill-none stroke-current stroke-opacity-50"
          strokeWidth="1"
        />

        {/* Content Blocks */}
        <motion.g style={{ opacity: contentOpacity }}>
          <rect
            x="60"
            y="90"
            width="280"
            height="20"
            rx="4"
            className="fill-current fill-opacity-20"
          />

          {[120, 150, 180].map((y, i) => (
            <g key={i}>
              <rect
                x="60"
                y={y}
                width="80"
                height="15"
                rx="2"
                className="fill-current fill-opacity-15"
              />
              <rect
                x="150"
                y={y}
                width="190"
                height="15"
                rx="2"
                className="fill-current fill-opacity-10"
              />
            </g>
          ))}

          <rect
            x="60"
            y="210"
            width="120"
            height="40"
            rx="4"
            className="fill-current fill-opacity-15"
          />
        </motion.g>
      </motion.svg>
    </div>
  )
}