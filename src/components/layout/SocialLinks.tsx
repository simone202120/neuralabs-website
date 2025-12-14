'use client'

import { Github, Linkedin, Twitter } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useCursorState } from '@/hooks/useCursorState'

interface SocialLinksProps extends React.HTMLAttributes<HTMLDivElement> {}

const socialLinks = [
  { href: '#', icon: Linkedin, label: 'LinkedIn' },
  { href: '#', icon: Twitter, label: 'Twitter' },
  { href: '#', icon: Github, label: 'GitHub' },
]

export function SocialLinks({ className, ...props }: SocialLinksProps) {
  const { setCursorType } = useCursorState()

  return (
    <div className={cn('flex space-x-4', className)} {...props}>
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-text-secondary hover:text-primary transition-colors"
          onMouseEnter={() => setCursorType('hover')}
          onMouseLeave={() => setCursorType('default')}
        >
          <link.icon className="h-5 w-5" />
          <span className="sr-only">{link.label}</span>
        </a>
      ))}
    </div>
  )
}
