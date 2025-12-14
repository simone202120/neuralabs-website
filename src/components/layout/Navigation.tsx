'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { ThemeToggle } from './ThemeToggle'
import { MobileMenu } from './MobileMenu'
import { NavbarLink } from './NavbarLink'
import { useCursorState } from '@/hooks/useCursorState'

// Navigation links configuration
const navLinks = [
  { href: '/servizi', label: 'Servizi' },
  { href: '/progetti', label: 'Progetti' },
  { href: '/blog', label: 'Blog' },
  { href: '/chi-siamo', label: 'Chi Siamo' },
]

export function Navigation() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = React.useState(false)
  const { setCursorType } = useCursorState()

  React.useEffect(() => {
    let rafId: number | null = null
    let lastScrollY = 0

    const handleScroll = () => {
      if (rafId === null) {
        rafId = requestAnimationFrame(() => {
          const scrollY = window.scrollY
          const shouldBeScrolled = scrollY > 10

          // Update only if state changed
          if ((lastScrollY <= 10 && scrollY > 10) || (lastScrollY > 10 && scrollY <= 10)) {
            setIsScrolled(shouldBeScrolled)
          }
          lastScrollY = scrollY
          rafId = null
        })
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafId !== null) cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'border-b border-border/40 bg-background/80 backdrop-blur-lg'
          : 'bg-transparent'
      }`}
    >
      <Container>
        <div className="flex h-16 items-center">
          <Link 
            href="/" 
            className="mr-6 flex items-center space-x-2"
            onMouseEnter={() => setCursorType('hover')}
            onMouseLeave={() => setCursorType('default')}
          >
            <span className="font-bold inline-block">🧠 NeuraLabs</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-1 text-sm font-medium">
            {navLinks.map((link) => (
              <NavbarLink 
                key={link.href}
                href={link.href}
                label={link.label}
                isActive={pathname === link.href}
                setCursorType={setCursorType}
              />
            ))}
          </nav>

          <div className="flex flex-1 items-center justify-end space-x-4">
            <ThemeToggle />
            <Button asChild className="hidden md:flex">
              <Link href="/contatti">Contattaci</Link>
            </Button>
            <MobileMenu navLinks={navLinks} />
          </div>
        </div>
      </Container>
    </header>
  )
}
