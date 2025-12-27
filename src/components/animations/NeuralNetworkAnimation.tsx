'use client'

import { motion, MotionValue, useTransform } from 'framer-motion'
import { useMemo } from 'react'

interface NeuralNetworkAnimationProps {
  progress: MotionValue<number>
}

interface Node {
  id: number
  x: number
  y: number
  layer: number
}

export function NeuralNetworkAnimation({ progress }: NeuralNetworkAnimationProps) {
  // Generate neural network nodes
  const nodes = useMemo<Node[]>(() => {
    const result: Node[] = []
    const layers = [3, 5, 5, 3] // nodes per layer
    const spacing = 80
    const startX = 80

    layers.forEach((count, layerIndex) => {
      const layerY = 200
      const startY = layerY - ((count - 1) * spacing) / 2

      for (let i = 0; i < count; i++) {
        result.push({
          id: result.length,
          x: startX + layerIndex * 100,
          y: startY + i * spacing,
          layer: layerIndex,
        })
      }
    })

    return result
  }, [])

  // Generate connections between adjacent layers
  const connections = useMemo(() => {
    const result: Array<{ from: Node; to: Node }> = []

    nodes.forEach((node) => {
      if (node.layer < 3) {
        const nextLayerNodes = nodes.filter((n) => n.layer === node.layer + 1)
        nextLayerNodes.forEach((nextNode) => {
          result.push({ from: node, to: nextNode })
        })
      }
    })

    return result
  }, [nodes])

  const nodesOpacity = useTransform(progress, [0, 0.3], [0, 1])
  const connectionsOpacity = useTransform(progress, [0.3, 0.6], [0, 1])
  const pulseOpacity = useTransform(progress, [0.6, 1], [0, 1])
  const dataFlowOpacity = useTransform(progress, [0.7, 1], [0, 1])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 dark:opacity-30">
      <motion.svg viewBox="0 0 500 400" className="w-full h-full">
        <defs>
          {/* Gradient for connections */}
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.2" />
            <stop offset="50%" stopColor="currentColor" stopOpacity="0.6" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.2" />
          </linearGradient>

          {/* Glow filter */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Connections */}
        <motion.g style={{ opacity: connectionsOpacity }}>
          {connections.map(({ from, to }, index) => (
            <g key={index}>
              {/* Static connection line */}
              <motion.line
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                className="stroke-current"
                strokeWidth="1"
                strokeOpacity="0.3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.02,
                  ease: 'easeOut',
                }}
              />

              {/* Pulse traveling along connection */}
              <motion.line
                x1={from.x}
                y1={from.y}
                x2={from.x}
                y2={from.y}
                className="stroke-current"
                strokeWidth="2"
                strokeLinecap="round"
                filter="url(#glow)"
                style={{
                  opacity: pulseOpacity,
                }}
                initial={{
                  x2: from.x,
                  y2: from.y
                }}
                animate={{
                  x2: [from.x, to.x],
                  y2: [from.y, to.y],
                }}
                transition={{
                  duration: 2,
                  delay: index * 0.1,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
            </g>
          ))}
        </motion.g>

        {/* Nodes */}
        <motion.g style={{ opacity: nodesOpacity }}>
          {nodes.map((node, index) => (
            <g key={node.id}>
              {/* Node outer ring (glow) */}
              <motion.circle
                cx={node.x}
                cy={node.y}
                r="8"
                className="fill-current"
                opacity="0.2"
                filter="url(#glow)"
                initial={{ scale: 0 }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  duration: 2,
                  delay: index * 0.05,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              {/* Node core */}
              <motion.circle
                cx={node.x}
                cy={node.y}
                r="4"
                className="fill-current"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 200,
                  damping: 20,
                  delay: index * 0.05,
                }}
              />

              {/* Pulse effect */}
              <motion.circle
                cx={node.x}
                cy={node.y}
                r="4"
                className="fill-none stroke-current"
                strokeWidth="2"
                style={{ opacity: pulseOpacity }}
                initial={{ r: 4, opacity: 0.8 }}
                animate={{
                  r: [4, 12, 4],
                  opacity: [0.8, 0, 0.8],
                }}
                transition={{
                  duration: 2,
                  delay: index * 0.1 + 1,
                  repeat: Infinity,
                  ease: 'easeOut',
                }}
              />
            </g>
          ))}
        </motion.g>

        {/* Data flow indicators */}
        <motion.g style={{ opacity: dataFlowOpacity }}>
          {[0, 1, 2].map((i) => (
            <motion.circle
              key={i}
              cx="0"
              cy="0"
              r="3"
              className="fill-current"
              filter="url(#glow)"
              initial={{ cx: 80, cy: 150 + i * 50 }}
              animate={{
                cx: [80, 480],
                cy: [150 + i * 50, 150 + i * 50],
              }}
              transition={{
                duration: 3,
                delay: i * 0.3,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          ))}
        </motion.g>
      </motion.svg>
    </div>
  )
}
