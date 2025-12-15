'use client'

import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { ParticleBrain } from './ParticleBrain'
import { useTheme } from 'next-themes'

export function ParticleHero() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isDark = resolvedTheme === 'dark'

  return (
    <div className="absolute inset-0 z-0">
      <Suspense fallback={null}>
        <Canvas camera={{ position: [0, 0, 1] }}>
          <ParticleBrain isDark={isDark} />
        </Canvas>
      </Suspense>
    </div>
  )
}