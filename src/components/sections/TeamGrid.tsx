'use client'

import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { FadeIn, StaggerContainer } from '@/components/animations'
import { TeamMember } from '@/types/sanity'
import { urlFor } from '@/lib/sanity'
import Image from 'next/image'
import { Github, Linkedin, Twitter, Users } from 'lucide-react'
import { motion } from 'framer-motion'

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <motion.div 
      className="group relative overflow-hidden rounded-2xl bg-surface/50 border border-white/5 transition-all duration-300 hover:border-primary/50 hover:bg-surface"
      whileHover={{ y: -5 }}
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-surface-light">
        {member.image ? (
          <Image
            src={urlFor(member.image).url()}
            alt={member.name || 'Team Member'}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full bg-surface-light">
             <Users className="w-12 h-12 text-text-muted opacity-20" />
          </div>
        )}
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-40" />

        {/* Social Links Overlay (Slide Up) */}
        <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0 bg-gradient-to-t from-background to-transparent z-10 flex gap-4 justify-center">
            {member.socialLinks?.linkedin && (
              <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-surface border border-white/10 text-white hover:bg-primary hover:border-primary transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            )}
            {member.socialLinks?.twitter && (
              <a href={member.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-surface border border-white/10 text-white hover:bg-primary hover:border-primary transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            )}
            {member.socialLinks?.github && (
              <a href={member.socialLinks.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-surface border border-white/10 text-white hover:bg-primary hover:border-primary transition-colors">
                <Github className="w-4 h-4" />
              </a>
            )}
        </div>
      </div>

      {/* Text Content */}
      <div className="p-6 relative z-20 bg-surface/50 backdrop-blur-sm -mt-12 mx-4 mb-4 rounded-xl border border-white/5 shadow-lg group-hover:border-primary/20 transition-colors">
        <h3 className="text-xl font-display font-bold text-text-primary mb-1">{member.name}</h3>
        <p className="text-sm font-mono text-primary mb-3 uppercase tracking-wider">{member.role}</p>
        <p className="text-sm text-text-secondary line-clamp-3 leading-relaxed">
          {member.bio}
        </p>
      </div>
    </motion.div>
  )
}

export function TeamGrid({ members }: { members: TeamMember[] }) {
  return (
    <Section className="py-24 relative">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border text-xs font-mono text-text-muted mb-6">
              <Users className="w-3 h-3" />
              <span>THE SQUAD</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              La Rete Neurale
            </h2>
            <p className="text-xl text-text-secondary leading-relaxed">
              Dietro ogni linea di codice c&apos;è una mente umana. 
              Siamo un mix di ingegneri, designer e strateghi uniti dalla stessa ossessione per la qualità.
            </p>
          </FadeIn>
        </div>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member) => (
             <FadeIn key={member.name}>
                <TeamCard member={member} />
             </FadeIn>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  )
}
