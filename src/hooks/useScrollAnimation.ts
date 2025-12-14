'use client'

import { useInView, UseInViewOptions } from 'framer-motion'
import { useRef } from 'react'

export function useScrollAnimation(options: UseInViewOptions = { once: true, margin: '-100px 0px' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, options)

  return { ref, isInView }
}
