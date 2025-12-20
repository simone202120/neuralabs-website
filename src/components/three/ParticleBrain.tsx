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
    
    // Neural "Breathing" Motion - Slowed down for elegance
    float t = uTime * 0.1; // Reduced speed
    pos.x += sin(t + pos.y * 0.5) * 0.05;
    pos.y += cos(t * 0.8 + pos.x * 0.5) * 0.05;
    pos.z += sin(t * 0.5 + pos.z * 0.5) * 0.05;
    
    // Interaction: Magnetic Attraction & Excitation
    float d = distance(pos, uMouse);
    float radius = 2.0; // Reduced radius
    float influence = smoothstep(radius, 0.0, d);
    
    if (d < radius) {
      vec3 dir = normalize(uMouse - pos);
      float pullStrength = pow(influence, 2.0) * 0.3; // Gentle pull
      pos += dir * pullStrength;
    }

    float pulse = sin(uTime * 1.5 + randomPhase * 6.28);
    float activity = smoothstep(0.8, 1.0, pulse); 
    float totalActivity = max(activity, influence);

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    
    // Finer particles for "Ethereal" look
    float size = (1.5 * randomSize + 0.5); 
    size *= (1.0 + totalActivity * 1.2); 
    
    // Much smaller perspective multiplier (was 10.0)
    gl_PointSize = size * (3.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
    
    vAlpha = uBaseOpacity + totalActivity * 0.5;
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
    
    // Soft glow edge
    float glow = 1.0 - smoothstep(0.0, 0.5, r);
    glow = pow(glow, 1.5);
    
    vec3 finalColor = mix(uColor, uColorHot, vDistance * 0.6);
    
    gl_FragColor = vec4(finalColor, vAlpha * glow);
  }
`

export function ParticleBrain({ isDark = true }: { isDark?: boolean }) {
  const pointsRef = useRef<THREE.Points>(null!)
  const { viewport } = useThree()
  
  const count = 2000 // Optimized count for better performance
  
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

      x *= 2.0 // Spread out slightly more
      y *= 1.4
      
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
    uColor: { value: new THREE.Color('#FFFDF9') }, 
    uColorHot: { value: new THREE.Color('#FFFFE0') }, 
    uBaseOpacity: { value: 0.3 }
  }), [])

  useEffect(() => {
    if (isDark) {
      uniforms.uColor.value.set('#FFFDF9')
      uniforms.uColorHot.value.set('#FFFFE0')
      uniforms.uBaseOpacity.value = 0.3
    } else {
      // Light Mode: Softer Grey, much lower opacity
      uniforms.uColor.value.set('#1A1A1A') 
      uniforms.uColorHot.value.set('#FF6B35')
      uniforms.uBaseOpacity.value = 1.0 // Maximum opacity
    }
  }, [isDark, uniforms])

  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Riusa oggetti invece di allocarne di nuovi ogni frame
  const tempVector = useMemo(() => new THREE.Vector3(), [])
  const tempMatrix = useMemo(() => new THREE.Matrix4(), [])

  useFrame((state) => {
    const { clock } = state

    uniforms.uTime.value = clock.getElapsedTime()

    const x = (mouseRef.current.x * viewport.width) / 2
    const y = (mouseRef.current.y * viewport.height) / 2

    if (pointsRef.current) {
      pointsRef.current.rotation.y = clock.getElapsedTime() * 0.02 // Slower rotation

      // Riusa tempVector e tempMatrix invece di crearne di nuovi
      tempVector.set(x, y, 0)
      tempMatrix.copy(pointsRef.current.matrixWorld).invert()
      tempVector.applyMatrix4(tempMatrix)

      const currentMouse = uniforms.uMouse.value
      currentMouse.lerp(tempVector, 0.05) // Smoother mouse follow
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
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}