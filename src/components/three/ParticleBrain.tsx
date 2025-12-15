'use client'

import * as THREE from 'three'
import { useFrame, useThree } from '@react-three/fiber'
import { useRef, useMemo, useEffect } from 'react'

const vertexShader = `
  uniform float uTime;
  uniform vec3 uMouse;
  uniform float uBaseOpacity;
  attribute vec3 initialPosition;
  attribute float randomSize;
  attribute float randomPhase;
  
  varying float vAlpha;
  varying float vDistance;

  void main() {
    vec3 pos = initialPosition;
    
    // Neural "Breathing" Motion
    float t = uTime * 0.2;
    pos.x += sin(t + pos.y * 0.5) * 0.1;
    pos.y += cos(t * 0.8 + pos.x * 0.5) * 0.1;
    pos.z += sin(t * 0.5 + pos.z * 0.5) * 0.1;
    
    // Interaction: Magnetic Attraction & Excitation
    float d = distance(pos, uMouse);
    float radius = 2.5;
    float influence = smoothstep(radius, 0.0, d);
    
    if (d < radius) {
      vec3 dir = normalize(uMouse - pos);
      float pullStrength = pow(influence, 2.0) * 0.5; 
      pos += dir * pullStrength;
    }

    float pulse = sin(uTime * 2.0 + randomPhase * 6.28);
    float activity = smoothstep(0.8, 1.0, pulse); 
    float totalActivity = max(activity, influence);

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    
    // Smaller base size, with dynamic growth when active
    float size = (2.0 * randomSize + 1.0); // Reduced base size
    size *= (1.0 + totalActivity * 1.5); // Grow up to 2.5x when active
    
    gl_PointSize = size * (10.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
    
    vAlpha = uBaseOpacity + totalActivity * 0.7;
    vDistance = influence;
  }
`

const fragmentShader = `
  uniform vec3 uColor;
  uniform vec3 uColorHot;
  
  varying float vAlpha;
  varying float vDistance;
  
  void main() {
    float r = distance(gl_PointCoord, vec2(0.5));
    if (r > 0.5) discard;
    
    float glow = 1.0 - smoothstep(0.0, 0.5, r);
    glow = pow(glow, 2.0);
    
    // Mix base white with a slightly yellowish-white when active
    vec3 finalColor = mix(uColor, uColorHot, vDistance * 0.8);
    
    gl_FragColor = vec4(finalColor, vAlpha * glow);
  }
`

export function ParticleBrain({ isDark = true }: { isDark?: boolean }) {
  const pointsRef = useRef<THREE.Points>(null!)
  const { viewport } = useThree()
  
  const count = 4000
  
  const [positions, initialPositions, randomSizes, randomPhases] = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const initialPositions = new Float32Array(count * 3)
    const randomSizes = new Float32Array(count)
    const randomPhases = new Float32Array(count)
    
    for (let i = 0; i < count; i++) {
      const r = 4 * Math.cbrt(Math.random())
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      
      let x = r * Math.sin(phi) * Math.cos(theta)
      let y = r * Math.sin(phi) * Math.sin(theta)
      let z = r * Math.cos(phi)
      
      x += (Math.random() - 0.5) * 2.0
      y += (Math.random() - 0.5) * 2.0
      z += (Math.random() - 0.5) * 2.0

      x *= 1.8 
      y *= 1.2
      
      positions.set([x, y, z], i * 3)
      initialPositions.set([x, y, z], i * 3)
      randomSizes[i] = Math.random()
      randomPhases[i] = Math.random()
    }
    
    return [positions, initialPositions, randomSizes, randomPhases]
  }, [])

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uMouse: { value: new THREE.Vector3(9999, 9999, 9999) },
    uColor: { value: new THREE.Color('#FFFDF9') }, // Base Warm White
    uColorHot: { value: new THREE.Color('#FFFFE0') }, // Light Yellow for hot spots
    uBaseOpacity: { value: 0.3 }
  }), [])

  useEffect(() => {
    if (isDark) {
      uniforms.uColor.value.set('#FFFDF9')
      uniforms.uColorHot.value.set('#FFFFE0')
      uniforms.uBaseOpacity.value = 0.3
    } else {
      // Light Mode: Dark Grey base -> Coral Hot
      uniforms.uColor.value.set('#A0A0A0') 
      uniforms.uColorHot.value.set('#FF6B35')
      uniforms.uBaseOpacity.value = 0.8 // Higher opacity for light mode
    }
  }, [isDark, uniforms])

  useFrame((state) => {
    const { clock, pointer } = state
    
    uniforms.uTime.value = clock.getElapsedTime()
    
    const x = (pointer.x * viewport.width) / 2
    const y = (pointer.y * viewport.height) / 2
    
    if (pointsRef.current) {
      pointsRef.current.rotation.y = clock.getElapsedTime() * 0.03
      
      const vector = new THREE.Vector3(x, y, 0)
      vector.applyMatrix4(pointsRef.current.matrixWorld.clone().invert())
      
      const currentMouse = uniforms.uMouse.value
      currentMouse.lerp(vector, 0.1)
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-initialPosition"
          count={initialPositions.length / 3}
          array={initialPositions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-randomSize"
          count={randomSizes.length}
          array={randomSizes}
          itemSize={1}
        />
        <bufferAttribute
          attach="attributes-randomPhase"
          count={randomPhases.length}
          array={randomPhases}
          itemSize={1}
        />
      </bufferGeometry>
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={isDark ? THREE.AdditiveBlending : THREE.NormalBlending}
      />
    </points>
  )
}