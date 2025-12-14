'use client'

import { Container } from '@/components/ui/Container'
import { SocialLinks } from './SocialLinks'
import { NewsletterForm } from './NewsletterForm'
import Link from 'next/link'
import { useCursorState } from '@/hooks/useCursorState'

const footerNav = [
  {
    title: 'Menu',
    links: [
      { href: '/', label: 'Home' },
      { href: '/servizi', label: 'Servizi' },
      { href: '/progetti', label: 'Progetti' },
      { href: '/blog', label: 'Blog' },
      { href: '/chi-siamo', label: 'Chi Siamo' },
      { href: '/contatti', label: 'Contatti' },
    ],
  },
  {
    title: 'Servizi',
    links: [
      { href: '/servizi#siti-web', label: 'Siti Web' },
      { href: '/servizi#ai-agents', label: 'AI Agents' },
      { href: '/servizi#sistemi-rag', label: 'Sistemi RAG' },
      { href: '/servizi#automazioni', label: 'Automazioni' },
    ],
  },
]

export function Footer() {
  const { setCursorType } = useCursorState()

  return (
    <footer className="relative bg-surface text-text-secondary border-t border-border overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      
      <Container className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8 py-16">
          <div className="lg:col-span-2">
            <Link 
              href="/" 
              className="inline-block"
              onMouseEnter={() => setCursorType('hover')}
              onMouseLeave={() => setCursorType('default')}
            >
              <span className="font-bold text-lg text-text-primary">🧠 NeuraLabs</span>
            </Link>
            <p className="mt-4 text-sm">
              Il laboratorio dove nascono le idee intelligenti.
            </p>
            <SocialLinks className="mt-6" />
          </div>

          {footerNav.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-text-primary">{section.title}</h3>
              <ul className="mt-4 space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-primary transition-colors"
                      onMouseEnter={() => setCursorType('hover')}
                      onMouseLeave={() => setCursorType('default')}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="font-semibold text-text-primary">Resta aggiornato</h3>
            <p className="mt-4 text-sm">
              Iscriviti alla nostra newsletter per ricevere news su AI e sviluppo web.
            </p>
            <NewsletterForm className="mt-4" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center py-6 border-t border-border/50 text-sm">
          <p>&copy; {new Date().getFullYear()} NeuraLabs. Tutti i diritti riservati.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link 
              href="/privacy-policy" 
              className="hover:text-primary"
              onMouseEnter={() => setCursorType('hover')}
              onMouseLeave={() => setCursorType('default')}
            >
              Privacy Policy
            </Link>
            <Link 
              href="/cookie-policy" 
              className="hover:text-primary"
              onMouseEnter={() => setCursorType('hover')}
              onMouseLeave={() => setCursorType('default')}
            >
              Cookie Policy
            </Link>
            <span 
              className="cursor-pointer" 
              title="Try the Konami Code..."
              onMouseEnter={() => setCursorType('hover')}
              onMouseLeave={() => setCursorType('default')}
            >
              🎮
            </span>
          </div>
        </div>
      </Container>
    </footer>
  )
}
