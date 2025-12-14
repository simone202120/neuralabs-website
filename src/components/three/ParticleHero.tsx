'use client'

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { ParticleBrain } from './ParticleBrain'

export function ParticleHero() {
  return (
    <div className="absolute inset-0 z-0">
      <Suspense fallback={null}>
        <Canvas camera={{ position: [0, 0, 1] }}>
          <ParticleBrain />
        </Canvas>
      </Suspense>
    </div>
  )
}