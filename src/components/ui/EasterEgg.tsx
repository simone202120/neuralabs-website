'use client'

import * as React from 'react'
import confetti from 'canvas-confetti'
import { useKonamiCode } from '@/hooks/useKonamiCode'

export function EasterEgg() {
  const [isActivated, setIsActivated] = React.useState(false)

  const triggerConfetti = React.useCallback(() => {
    if (!isActivated) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      })
      setIsActivated(true)
    }
  }, [isActivated])

  useKonamiCode(triggerConfetti)

  return null
}
