'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'

interface StaggerTextProps {
  items: string[]
  className?: string
  staggerDelay?: number
  showIcon?: boolean
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: {
    opacity: 0,
    x: -20,
    scale: 0.9,
  },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
}

export function StaggerText({
  items,
  className = '',
  staggerDelay = 0.1,
  showIcon = true,
}: StaggerTextProps) {
  const ref = useRef<HTMLUListElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  // Update container animation with custom delay
  const customContainer = {
    ...container,
    show: {
      ...container.show,
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  }

  return (
    <motion.ul
      ref={ref}
      variants={customContainer}
      initial="hidden"
      animate={isInView ? 'show' : 'hidden'}
      className={cn('space-y-3', className)}
    >
      {items.map((text, index) => (
        <motion.li
          key={index}
          variants={item}
          className="flex items-start gap-3 text-sm"
        >
          {showIcon && (
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
              transition={{
                type: 'spring',
                stiffness: 200,
                damping: 20,
                delay: index * staggerDelay + 0.2,
              }}
            >
              <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            </motion.div>
          )}
          <span className="text-text-secondary leading-relaxed">{text}</span>
        </motion.li>
      ))}
    </motion.ul>
  )
}
