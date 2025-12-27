'use client'

import { motion, MotionValue, useTransform } from 'framer-motion'

interface RocketAnimationProps {
  progress: MotionValue<number>
}

export function RocketAnimation({ progress }: RocketAnimationProps) {
  // Animation states based on progress
  const rocketY = useTransform(progress, [0, 1], [20, -40]) // Moves up
  const flameScale = useTransform(progress, [0, 0.5, 1], [0.8, 1.3, 0.9]) // Pulses
  const starY = useTransform(progress, [0, 1], [0, 150]) // Background moves down
  const starOpacity = useTransform(progress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 dark:opacity-30">
      <motion.svg viewBox="0 0 400 300" className="w-full h-full">
        <defs>
          <filter id="rocketGlow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Speed Lines / Stars Background */}
        <motion.g style={{ y: starY, opacity: starOpacity }}>
            {[50, 120, 200, 280, 350].map((x, i) => (
               <rect 
                key={i} 
                x={x} 
                y={i % 2 === 0 ? 0 : 50} 
                width="2" 
                height={20 + Math.random() * 30} 
                className="fill-current fill-opacity-20" 
                rx="1" 
              />
            ))}
             {[80, 150, 240, 300, 320].map((x, i) => (
               <rect 
                key={`b-${i}`} 
                x={x} 
                y={i % 2 === 0 ? 150 : 200} 
                width="2" 
                height={15 + Math.random() * 20} 
                className="fill-current fill-opacity-10" 
                rx="1" 
              />
            ))}
        </motion.g>

        {/* Rocket Group - Centered at X=200, Y=150 approx */}
        <motion.g 
          style={{ y: rocketY }} 
          className="drop-shadow-2xl"
        >
           <g transform="translate(200, 150)">
              
              {/* Flame */}
              <motion.path
                d="M0 50 Q -10 80 0 110 Q 10 80 0 50"
                className="fill-current fill-opacity-40"
                style={{ scale: flameScale, originY: "50px" }}
                filter="url(#rocketGlow)"
              />
              
              {/* Inner Flame Core */}
              <motion.path
                d="M0 50 Q -5 70 0 90 Q 5 70 0 50"
                className="fill-current fill-opacity-80"
                style={{ scale: flameScale, originY: "50px" }}
              />

              {/* Left Fin */}
              <path 
                d="M-20 30 L -30 60 L -10 50 Z" 
                className="fill-current fill-opacity-60 stroke-current" 
                strokeWidth="2" 
                strokeLinejoin="round"
              />

              {/* Right Fin */}
              <path 
                d="M20 30 L 30 60 L 10 50 Z" 
                className="fill-current fill-opacity-60 stroke-current" 
                strokeWidth="2" 
                strokeLinejoin="round"
              />

              {/* Main Body */}
              <path
                d="M0 -50 Q 25 0 20 50 L -20 50 Q -25 0 0 -50 Z"
                className="fill-none stroke-current"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              
              {/* Cockpit Window */}
              <circle 
                cx="0" 
                cy="-10" 
                r="12" 
                className="fill-current fill-opacity-10 stroke-current" 
                strokeWidth="2" 
              />
              
              {/* Window Reflection */}
              <path
                 d="M -5 -15 Q 0 -20 5 -15"
                 className="fill-none stroke-current stroke-opacity-50"
                 strokeWidth="1"
              />
           </g>
        </motion.g>
      </motion.svg>
    </div>
  )
}
