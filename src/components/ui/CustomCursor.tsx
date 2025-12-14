'use client'

import * as React from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useCursorState } from '@/hooks/useCursorState'
import { cn } from '@/lib/utils'

export function CustomCursor() {
  const { cursorType } = useCursorState()
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  // Spring config - smooth but responsive
  const springConfig = { damping: 25, stiffness: 300, mass: 0.2 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  // Track mouse movement
  React.useEffect(() => {
    let rafId: number | null = null

    const moveCursor = (e: MouseEvent) => {
      if (rafId === null) {
        rafId = requestAnimationFrame(() => {
          cursorX.set(e.clientX)
          cursorY.set(e.clientY)
          rafId = null
        })
      }
    }

    window.addEventListener('mousemove', moveCursor, { passive: true })
    return () => {
      window.removeEventListener('mousemove', moveCursor)
      if (rafId !== null) cancelAnimationFrame(rafId)
    }
  }, [cursorX, cursorY])

  // Variants for the Ring (Outer)
  const ringVariants = {
    default: {
      width: 32,
      height: 32,
      backgroundColor: 'rgba(255, 107, 53, 0)',
      borderColor: 'rgba(255, 107, 53, 0.4)',
      scale: 1,
    },
    hover: {
      width: 64,
      height: 64,
      backgroundColor: 'rgba(255, 107, 53, 0.05)',
      borderColor: 'rgba(255, 107, 53, 0.2)',
      scale: 1,
    },
    text: {
      width: 32,
      height: 32,
      backgroundColor: 'rgba(255, 107, 53, 0)',
      borderColor: 'rgba(255, 107, 53, 0.2)',
      scale: 0.8,
    }
  }

  // Variants for the Dot (Inner)
  const dotVariants = {
    default: {
      scale: 1,
      backgroundColor: 'hsl(16, 100%, 60%)',
    },
    hover: {
      scale: 1.5,
      backgroundColor: 'hsl(16, 100%, 60%)',
    },
    text: {
      scale: 0, // Hide dot on text
      backgroundColor: 'hsl(16, 100%, 60%)',
    }
  }

  // Text Selection Line (Special case)
  const textLineVariants = {
    default: { opacity: 0, height: 0 },
    hover: { opacity: 0, height: 0 },
    text: { 
      opacity: 1, 
      height: 24,
      width: 2,
      backgroundColor: 'hsl(16, 100%, 60%)' 
    }
  }

  return (
    <motion.div
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
      }}
      className="fixed top-0 left-0 z-[9999] pointer-events-none -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
    >
      {/* Outer Ring */}
      <motion.div
        variants={ringVariants}
        animate={cursorType}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="absolute rounded-full border border-primary/40 backdrop-blur-[1px]"
      />

      {/* Inner Dot */}
      <motion.div
        variants={dotVariants}
        animate={cursorType}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className="absolute w-2 h-2 rounded-full bg-primary"
      />

      {/* Text Cursor (I-Beam equivalent) */}
      <motion.div
        variants={textLineVariants}
        animate={cursorType}
        className="absolute bg-primary rounded-full"
      />
    </motion.div>
  )
}