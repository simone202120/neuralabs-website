'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

interface GlitchTextProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  variant?: 'subtle' | 'medium' | 'intense'
  trigger?: 'hover' | 'auto' | 'none'
}

export function GlitchText({
  children,
  className,
  variant = 'medium',
  trigger = 'auto',
  ...props
}: GlitchTextProps) {
  const [isGlitching, setIsGlitching] = React.useState(trigger === 'auto')

  const handleMouseEnter = () => {
    if (trigger === 'hover') {
      setIsGlitching(true)
    }
  }

  const handleMouseLeave = () => {
    if (trigger === 'hover') {
      setIsGlitching(false)
    }
  }

  return (
    <span
      className={cn('relative inline-block', className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <span
        className={cn(
          'glitch',
          isGlitching && `glitch--${variant}`,
          'relative block'
        )}
        data-text={children}
      >
        {children}
      </span>
    </span>
  )
}
