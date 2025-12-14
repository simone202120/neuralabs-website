'use client'

import * as React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface NavbarLinkProps {
  href: string
  label: string
  isActive: boolean
  setCursorType: (type: string) => void
}

export function NavbarLink({ href, label, isActive, setCursorType }: NavbarLinkProps) {
  return (
    <Link
      href={href}
      className={`relative px-3 py-2 transition-colors hover:text-primary ${isActive ? 'text-primary' : 'text-text-secondary'}`}
      onMouseEnter={() => setCursorType('hover')}
      onMouseLeave={() => setCursorType('default')}
    >
      {isActive && (
        <motion.span
          layoutId="navbar-active"
          className="absolute inset-0 bg-primary/10 rounded-full -z-10"
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
      {label}
    </Link>
  )
}
