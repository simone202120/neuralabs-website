'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function Preloader() {
    const [isComplete, setIsComplete] = useState(false)

    useEffect(() => {
        document.body.style.overflow = 'hidden'
        
        // Snap transition at 2.2s
        const exitTimer = setTimeout(() => {
            setIsComplete(true)
        }, 2200)

        return () => {
            document.body.style.overflow = ''
            clearTimeout(exitTimer)
        }
    }, [])

    const hexPath = "M16 2 L27 8.5 L27 23.5 L16 30 L5 23.5 L5 8.5 Z"

    return (
        <AnimatePresence mode="wait">
            {!isComplete && (
                <motion.div
                    key="preloader-overlay"
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
                    exit={{ opacity: 0, transition: { duration: 0.5, delay: 0.4 } }}
                >
                    <div className="relative flex flex-col items-center justify-center w-full h-full">
                        
                        {/* 1. The Portal Container */}
                        <motion.div
                            className="relative flex items-center justify-center"
                            initial={{ scale: 1 }}
                            exit={{ 
                                scale: 60, 
                                opacity: [1, 1, 0],
                                transition: { 
                                    duration: 0.8, 
                                    ease: [0.76, 0, 0.24, 1] 
                                } 
                            }}
                        >
                            <svg
                                viewBox="0 0 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-32 h-32 md:w-48 md:h-48 overflow-visible"
                            >
                                <defs>
                                    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                                        <feGaussianBlur stdDeviation="1" result="coloredBlur" />
                                        <feMerge>
                                            <feMergeNode in="coloredBlur" />
                                            <feMergeNode in="SourceGraphic" />
                                        </feMerge>
                                    </filter>
                                    <linearGradient id="energyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#f97316" />
                                        <stop offset="100%" stopColor="#06b6d4" />
                                    </linearGradient>
                                </defs>

                                {/* Hexagon Frame */}
                                <motion.path
                                    d={hexPath}
                                    stroke="currentColor"
                                    strokeWidth="0.5"
                                    className="text-foreground"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    initial={{ pathLength: 0, opacity: 0, rotate: 180 }}
                                    animate={{ pathLength: 1, opacity: 1, rotate: 0 }}
                                    transition={{ duration: 1.2, ease: "easeInOut" }}
                                />

                                {/* Orbital Ring */}
                                <motion.circle
                                    cx="16"
                                    cy="16"
                                    r="9"
                                    stroke="currentColor"
                                    strokeWidth="0.25"
                                    className="text-muted-foreground/30"
                                    initial={{ scale: 0.5, opacity: 0, rotate: -180 }}
                                    animate={{ scale: 1, opacity: 1, rotate: 0 }}
                                    transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
                                />

                                {/* Energy Pulse Trailing on the Hexagon */}
                                <motion.path
                                    d={hexPath}
                                    stroke="url(#energyGradient)" 
                                    strokeWidth="1.2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    filter="url(#glow)"
                                    initial={{ pathLength: 0.2, pathOffset: 0, opacity: 0 }}
                                    animate={{ 
                                        pathOffset: [0, 1],
                                        opacity: [0, 1, 0.5, 1, 0]
                                    }}
                                    transition={{
                                        duration: 2,
                                        ease: "linear",
                                        repeat: Infinity,
                                    }}
                                />

                                {/* Central Core (Returned to r=2) */}
                                <motion.circle
                                    cx="16"
                                    cy="16"
                                    r="2"
                                    fill="currentColor"
                                    className="text-primary"
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
                                />
                            </svg>
                        </motion.div>

                        {/* Text: Caricamento laboratorio... (Accelerated dots) */}
                        <motion.div
                            className="absolute mt-44 md:mt-64 flex items-baseline gap-1"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0, transition: { duration: 0.2 } }}
                            transition={{ delay: 0.4 }}
                        >
                            <span className="text-xs md:text-sm font-medium uppercase tracking-[0.3em] text-foreground/70 font-display">
                                Caricamento laboratorio
                            </span>
                            <div className="flex w-6">
                                {[0, 1, 2].map((i) => (
                                    <motion.span
                                        key={i}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{
                                            delay: 0.6 + (i * 0.2), // Faster sequence
                                            duration: 0.2,
                                            repeat: 0
                                        }}
                                        className="text-primary font-bold"
                                    >
                                        .
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>

                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
