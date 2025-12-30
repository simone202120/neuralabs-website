'use client'

import { useState, useEffect } from 'react'
import { Container } from '@/components/ui/Container'
import { Logo } from '@/components/ui/Logo'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { ArrowRight, Github, Linkedin, Twitter, Clock, Circle } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

function StatusModule() {
  const [time, setTime] = useState<string>('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit', second: '2-digit' }))
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center gap-4 text-xs font-mono text-text-muted">
      <div className="flex items-center gap-2 px-2 py-1 rounded bg-surface border border-border">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
        </span>
        <span>SYSTEM ONLINE</span>
      </div>
      <div className="flex items-center gap-2 px-2 py-1 rounded bg-surface border border-border">
        <Clock className="w-3 h-3" />
        <span>{time || '--:--:--'} UTC+1</span>
      </div>
    </div>
  )
}

function SocialLink({ href, icon: Icon, label }: { href: string; icon: any; label: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="group flex items-center justify-center w-10 h-10 rounded-lg border border-border bg-surface hover:bg-surface-light hover:border-primary/50 hover:text-primary transition-all duration-300"
      aria-label={label}
    >
      <Icon className="w-4 h-4" />
    </a>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link 
        href={href} 
        className="text-sm text-text-secondary hover:text-primary transition-colors duration-200 flex items-center gap-2 group"
      >
        <span className="w-1 h-1 rounded-full bg-border group-hover:bg-primary transition-colors" />
        {children}
      </Link>
    </li>
  )
}

export function Footer() {
  return (
    <footer className="bg-background border-t border-border mt-auto">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 border-x border-border divide-y lg:divide-y-0 lg:divide-x divide-border">
          
          {/* Colonna 1: Brand & Status (4 colonne) */}
          <div className="lg:col-span-4 p-8 flex flex-col justify-between gap-8">
            <div className="space-y-4">
              <Logo />
              <p className="text-sm text-text-secondary leading-relaxed max-w-sm">
                Costruiamo ecosistemi digitali intelligenti per business che vogliono evolvere. 
                Design, Codice e AI in un unico flusso.
              </p>
            </div>
            
            <div className="space-y-4">
              <StatusModule />
              <div className="text-xs text-text-muted">
                &copy; {new Date().getFullYear()} SigmaLabs. All systems operational.
              </div>
            </div>
          </div>

          {/* Colonna 2: Links Grid (4 colonne) */}
          <div className="lg:col-span-4 grid grid-cols-2 divide-x divide-border">
            <div className="p-8 space-y-6">
              <h4 className="text-xs font-mono font-bold text-text-primary uppercase tracking-widest">Esplora</h4>
              <ul className="space-y-3">
                <FooterLink href="/servizi">Servizi</FooterLink>
                <FooterLink href="/metodo">Il Metodo</FooterLink>
                <FooterLink href="/chi-siamo">Chi Siamo</FooterLink>
              </ul>
            </div>
            <div className="p-8 space-y-6">
              <h4 className="text-xs font-mono font-bold text-text-primary uppercase tracking-widest">Azienda</h4>
              <ul className="space-y-3">
                <FooterLink href="/chi-siamo">Chi Siamo</FooterLink>
                <FooterLink href="/privacy">Privacy</FooterLink>
                <FooterLink href="/cookie">Cookie</FooterLink>
              </ul>
            </div>
          </div>

          {/* Colonna 3: Newsletter & Social (4 colonne) */}
          <div className="lg:col-span-4 flex flex-col divide-y divide-border">
            {/* Newsletter Module */}
            <div className="p-8 space-y-4 flex-1">
              <h4 className="text-xs font-mono font-bold text-text-primary uppercase tracking-widest">
                Newsletter_
              </h4>
              <p className="text-xs text-text-secondary">
                Ricevi insight su AI e Tech. No spam, solo valore.
              </p>
              <form className="relative group">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-primary font-mono text-xs">{'>'}</span>
                <input 
                  type="email" 
                  placeholder="inserisci_email" 
                  className="w-full bg-surface border border-border rounded-lg py-3 pl-8 pr-12 text-sm font-mono focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-text-muted/50"
                />
                <button 
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-md hover:bg-primary/10 text-text-secondary hover:text-primary transition-colors"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>

            {/* Social Module */}
            <div className="p-8 flex items-center justify-between gap-4 bg-surface/30">
              <span className="text-xs font-mono text-text-muted hidden sm:block">CONNECT:</span>
              <div className="flex gap-2">
                <SocialLink href="https://github.com" icon={Github} label="GitHub" />
                <SocialLink href="https://linkedin.com" icon={Linkedin} label="LinkedIn" />
                <SocialLink href="https://twitter.com" icon={Twitter} label="Twitter" />
              </div>
            </div>
          </div>

        </div>
      </Container>
    </footer>
  )
}
