'use client'

import { useEffect, useRef } from 'react'
import { useInView, useMotionValue, useSpring } from 'framer-motion'

interface AnimatedCounterProps {
  value: number
  duration?: number
  className?: string
  prefix?: string
  suffix?: string
  decimals?: number
}

export function AnimatedCounter({
  value,
  duration = 2,
  className = '',
  prefix = '€',
  suffix = '',
  decimals = 0,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [isInView, motionValue, value])

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      if (ref.current) {
        const formattedValue = Intl.NumberFormat('it-IT', {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        }).format(latest)

        ref.current.textContent = `${prefix}${formattedValue}${suffix}`
      }
    })

    return () => unsubscribe()
  }, [springValue, prefix, suffix, decimals])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {Intl.NumberFormat('it-IT', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      }).format(0)}
      {suffix}
    </span>
  )
}
