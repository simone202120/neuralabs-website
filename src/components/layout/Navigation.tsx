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

import { Logo } from '@/components/ui/Logo'



// Navigation links configuration - Updated
const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/servizi', label: 'Servizi' },
  { href: '/metodo', label: 'Il Metodo' },
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

    <header

      className={cn(

        "fixed z-50 transition-all duration-300 ease-spring",

        isScrolled 

          ? "top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-[800px] rounded-full border border-white/10 shadow-lg backdrop-blur-md bg-surface/70"

          : "top-0 left-0 right-0 w-full bg-transparent border-b border-transparent p-4 md:px-8"

      )}

    >

      <div className={cn(

        "flex items-center justify-between w-full relative",

        isScrolled ? "px-5 py-2" : "h-16"

      )}>

        {/* Logo */}

        <Link 

          href="/" 

          className="flex items-center space-x-2 shrink-0 mr-4"

          onMouseEnter={() => setCursorType('hover')}

          onMouseLeave={() => setCursorType('default')}

        >

          <motion.div animate={{ scale: isScrolled ? 0.9 : 1 }} className="origin-left">

            <Logo className={isScrolled ? 'compact' : ''} />

          </motion.div>

        </Link>

  

          {/* Desktop Nav - Centered */}

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

            <MobileMenu navLinks={navLinks} />

          </div>

        </div>

      </header>

    )

  }
