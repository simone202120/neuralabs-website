'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'

import { Button } from '@/components/ui/Button'
import { ThemeToggle } from './ThemeToggle'
import { MobileMenu } from './MobileMenu'
import { NavbarLink } from './NavbarLink'
import { useCursorState } from '@/hooks/useCursorState'
import { cn } from '@/lib/utils'

// Navigation links configuration
const navLinks = [
  { href: '/servizi', label: 'Servizi' },
  { href: '/progetti', label: 'Progetti' },
  { href: '/blog', label: 'Blog' },
  { href: '/chi-siamo', label: 'Chi Siamo' },
]

export function Navigation() {
  const pathname = usePathname()
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = React.useState(false)
  const { setCursorType } = useCursorState()

  useMotionValueEvent(scrollY, "change", (latest) => {
    const shouldBeScrolled = latest > 50
    if (isScrolled !== shouldBeScrolled) {
      setIsScrolled(shouldBeScrolled)
    }
  })

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 pointer-events-none">
      <motion.header
        layout
        initial={{ width: '100%', borderRadius: 0, y: 0, backgroundColor: 'rgba(0,0,0,0)' }}
        animate={{
          width: isScrolled ? 'min(90%, 800px)' : '100%', // More compact max-width
          borderRadius: isScrolled ? 50 : 0, // Fully rounded pill
          y: isScrolled ? 0 : -16,
          backgroundColor: isScrolled 
            ? 'var(--color-background-glass)' 
            : 'rgba(0,0,0,0)',
          borderColor: isScrolled ? 'var(--color-border-glass)' : 'transparent',
          borderWidth: isScrolled ? 1 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 120,
          damping: 20,
          mass: 0.8
        }}
        className={cn(
          "pointer-events-auto flex items-center justify-between transition-all duration-300",
          // Adjusted padding for different states manually in child elements or here if possible
          isScrolled ? "px-5 py-2.5" : "px-6 py-4 md:px-12"
        )}
        style={{
          ['--color-background-glass' as string]: 'var(--color-surface-glass)',
          ['--color-border-glass' as string]: 'rgba(255, 255, 255, 0.1)',
        }}
      >
        {/* Logo */}
        <Link 
          href="/" 
          className="flex items-center space-x-2 shrink-0 mr-4"
          onMouseEnter={() => setCursorType('hover')}
          onMouseLeave={() => setCursorType('default')}
        >
          <motion.span 
            animate={{ scale: isScrolled ? 0.9 : 1 }}
            className="font-display font-bold text-xl tracking-tight origin-left"
          >
            🧠 NeuraLabs
          </motion.span>
        </Link>

        {/* Desktop Nav - Centered in Pill */}
        <nav className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <NavbarLink 
              key={link.href}
              href={link.href}
              label={link.label}
              isActive={pathname === link.href}
              setCursorType={setCursorType}
              isScrolled={isScrolled}
            />
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2 shrink-0 ml-auto">
          <ThemeToggle />
          <motion.div animate={{ scale: isScrolled ? 0.9 : 1 }}>
            <Button asChild size={isScrolled ? "sm" : "default"} className="hidden md:flex rounded-full px-5 transition-all">
              <Link href="/contatti">Contattaci</Link>
            </Button>
          </motion.div>
          <MobileMenu navLinks={navLinks} />
        </div>
      </motion.header>
    </div>
  )
}
