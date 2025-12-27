'use client'

import { motion, MotionValue, useTransform } from 'framer-motion'

interface SwarmAnimationProps {
  progress: MotionValue<number>
}

export function SwarmAnimation({ progress }: SwarmAnimationProps) {
  // Rotations for different orbits
  const rotate1 = useTransform(progress, [0, 1], [0, 360])
  const rotate2 = useTransform(progress, [0, 1], [120, 480])
  const rotate3 = useTransform(progress, [0, 1], [240, 600])
  
  // Pulse for communication lines
  const commsOpacity = useTransform(progress, [0, 0.5, 1], [0.2, 0.8, 0.2])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 dark:opacity-30">
      <motion.svg viewBox="0 0 400 300" className="w-full h-full">
        <defs>
          <filter id="swarmGlow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Central Hub / Core AI */}
        <g transform="translate(200, 150)">
           {/* Core Rings */}
           <circle cx="0" cy="0" r="20" className="fill-current fill-opacity-10 stroke-current" strokeWidth="1" />
           <motion.circle 
              cx="0" cy="0" r="12" 
              className="fill-current" 
              animate={{ opacity: [0.5, 1, 0.5], scale: [0.9, 1.1, 0.9] }}
              transition={{ duration: 3, repeat: Infinity }}
              filter="url(#swarmGlow)"
           />
           {/* Scanning Radar Effect */}
           <motion.circle 
              cx="0" cy="0" r="30" 
              className="fill-none stroke-current stroke-opacity-20"
              strokeWidth="1"
              strokeDasharray="4 4"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
           />
        </g>

        {/* Orbiting Agents Group */}
        <g transform="translate(200, 150)">
           
           {/* Agent 1 */}
           <motion.g style={{ rotate: rotate1 }}>
              <g transform="translate(0, -60)">
                 <circle r="6" className="fill-current stroke-current" strokeWidth="2" filter="url(#swarmGlow)" />
                 <circle r="10" className="fill-none stroke-current stroke-opacity-30" strokeWidth="1" />
                 {/* Connection to core */}
                 <motion.line 
                    x1="0" y1="0" x2="0" y2="60" 
                    className="stroke-current" 
                    strokeWidth="1" 
                    style={{ opacity: commsOpacity }}
                    strokeDasharray="2 2"
                 />
              </g>
           </motion.g>

           {/* Agent 2 */}
           <motion.g style={{ rotate: rotate2 }}>
              <g transform="translate(0, -80)">
                 <rect x="-5" y="-5" width="10" height="10" rx="2" className="fill-current stroke-current" strokeWidth="2" filter="url(#swarmGlow)" />
                 {/* Connection to core */}
                 <motion.line 
                    x1="0" y1="0" x2="0" y2="80" 
                    className="stroke-current" 
                    strokeWidth="1" 
                    style={{ opacity: commsOpacity }}
                    strokeDasharray="2 2" 
                 />
              </g>
           </motion.g>

           {/* Agent 3 */}
           <motion.g style={{ rotate: rotate3 }}>
              <g transform="translate(0, -50)">
                 <path d="M0 -6 L 5 4 L -5 4 Z" className="fill-current stroke-current" strokeWidth="2" filter="url(#swarmGlow)" />
                 {/* Connection to core */}
                 <motion.line 
                    x1="0" y1="0" x2="0" y2="50" 
                    className="stroke-current" 
                    strokeWidth="1" 
                    style={{ opacity: commsOpacity }}
                    strokeDasharray="2 2"
                 />
              </g>
           </motion.g>

           {/* Inter-Agent Connections (Dynamic) */}
           {/* This simulates a web forming between agents as they rotate */}
           <motion.path
              d="M 0 -60 L 69.2 -40 L -34.6 -20 Z" // Approximate coordinates based on rotation would be complex in SVG without JS calculation, 
              // so we use a rotating group or just visual trickery. 
              // Simpler: Just Orbit rings.
              className="fill-none stroke-current stroke-opacity-10"
              strokeWidth="1"
           />
        </g>
        
        {/* Orbital Paths */}
        <circle cx="200" cy="150" r="60" className="fill-none stroke-current stroke-opacity-10" strokeWidth="1" />
        <circle cx="200" cy="150" r="80" className="fill-none stroke-current stroke-opacity-10" strokeWidth="1" />
        <circle cx="200" cy="150" r="50" className="fill-none stroke-current stroke-opacity-10" strokeWidth="1" />

      </motion.svg>
    </div>
  )
}
