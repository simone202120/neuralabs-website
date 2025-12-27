'use client'

import { motion, MotionValue, useTransform } from 'framer-motion'

interface PipelineAnimationProps {
  progress: MotionValue<number>
}

export function PipelineAnimation({ progress }: PipelineAnimationProps) {
  // Animation signals
  const flowOpacity = useTransform(progress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const node1Pulse = useTransform(progress, [0.2, 0.4], [1, 1.5]) // Scale pulse
  const node2Pulse = useTransform(progress, [0.5, 0.7], [1, 1.5])
  const node3Pulse = useTransform(progress, [0.8, 1], [1, 1.5])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 dark:opacity-30">
      <motion.svg viewBox="0 0 400 300" className="w-full h-full">
        <defs>
          <filter id="pipelineGlow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          
          <linearGradient id="pipeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
             <stop offset="0%" stopColor="currentColor" stopOpacity="0.1" />
             <stop offset="50%" stopColor="currentColor" stopOpacity="0.5" />
             <stop offset="100%" stopColor="currentColor" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* Main Pipeline Path (S-Curve) */}
        <path
          d="M -20 150 C 100 150, 100 50, 200 50 C 300 50, 300 250, 420 250"
          className="fill-none stroke-current stroke-opacity-20"
          strokeWidth="4"
        />
        
        {/* Secondary decorative paths */}
        <path
          d="M -20 160 C 100 160, 100 60, 200 60 C 300 60, 300 260, 420 260"
          className="fill-none stroke-current stroke-opacity-5"
          strokeWidth="1"
          strokeDasharray="4 4"
        />

        {/* Processing Nodes along the path */}
        {/* Node 1 */}
        <motion.circle
          cx="90" cy="120" r="6" // Approx position on curve
          className="fill-current"
          style={{ scale: node1Pulse, opacity: 0.8 }}
        />
        <circle cx="90" cy="120" r="12" className="fill-none stroke-current stroke-opacity-30" strokeWidth="1" />

        {/* Node 2 (Center High) */}
        <motion.circle
          cx="200" cy="50" r="8"
          className="fill-current"
          style={{ scale: node2Pulse, opacity: 0.8 }}
        />
        <circle cx="200" cy="50" r="16" className="fill-none stroke-current stroke-opacity-30" strokeWidth="1" />
        
        {/* Node 3 (Low) */}
        <motion.circle
          cx="310" cy="180" r="6" // Approx position
          className="fill-current"
          style={{ scale: node3Pulse, opacity: 0.8 }}
        />
        <circle cx="310" cy="180" r="12" className="fill-none stroke-current stroke-opacity-30" strokeWidth="1" />


        {/* Data Packet Flowing */}
        {/* We use a path animation for the packet */}
        <motion.circle
           r="5"
           className="fill-current"
           filter="url(#pipelineGlow)"
           style={{ opacity: flowOpacity }}
        >
           <animateMotion 
              dur="2s" 
              repeatCount="indefinite"
              path="M -20 150 C 100 150, 100 50, 200 50 C 300 50, 300 250, 420 250"
              keyPoints="0;1"
              keyTimes="0;1"
              calcMode="linear"
           />
        </motion.circle>
        
        {/* Trailing particles */}
        {[0.05, 0.1].map((delay, i) => (
            <motion.circle
               key={i}
               r={3 - i}
               className="fill-current opacity-50"
            >
               <animateMotion 
                  dur="2s" 
                  begin={`${delay}s`}
                  repeatCount="indefinite"
                  path="M -20 150 C 100 150, 100 50, 200 50 C 300 50, 300 250, 420 250"
                  calcMode="linear"
               />
            </motion.circle>
        ))}

      </motion.svg>
    </div>
  )
}
