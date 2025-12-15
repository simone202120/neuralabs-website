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
  isScrolled: boolean // Add new prop
}

export function NavbarLink({ href, label, isActive, setCursorType, isScrolled }: NavbarLinkProps) {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <Link
      href={href}
      className={cn(
        "relative px-3 py-2 transition-all duration-300 ease-out",
        "hover:text-primary",
        isActive ? 'text-primary' : 'text-text-secondary',
        !isScrolled && "text-lg font-bold", // Larger and bold when not scrolled
      )}
      onMouseEnter={() => setCursorType('hover')}
      onMouseLeave={() => setCursorType('default')}
    >
      {mounted && isActive && (
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
