'use client'

import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import {
  StaggerContainer,
  FadeIn,
} from '@/components/animations'
import { ProjectCard, ProjectCardProps } from '@/components/ui/ProjectCard'
import Link from 'next/link'

const featuredProjects: ProjectCardProps[] = [
  {
    slug: 'techflow-ai',
    title: 'TechFlow AI',
    category: 'ai_agent',
    hours: 120,
    imageUrl: '/images/placeholder.svg', // Placeholder
  },
  {
    slug: 'datamind-rag',
    title: 'DataMind RAG',
    category: 'rag',
    hours: 80,
    imageUrl: '/images/placeholder.svg', // Placeholder
  },
  {
    slug: 'startupx-mvp',
    title: 'StartupX MVP',
    category: 'webapp',
    hours: 200,
    imageUrl: '/images/placeholder.svg', // Placeholder
  },
  {
    slug: 'autoflow',
    title: 'AutoFlow',
    category: 'automation',
    hours: 60,
    imageUrl: '/images/placeholder.svg', // Placeholder
  },
]

export function ProjectsPreview() {
  return (
    <Section>
      <Container>
        <FadeIn>
          <h2 className="text-3xl font-bold text-center">Progetti in Evidenza</h2>
          <div className="w-full max-w-xs h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto mt-4" />
        </FadeIn>
        <StaggerContainer
          className="grid md:grid-cols-2 gap-8 mt-12"
          staggerDelay={0.2}
        >
          {featuredProjects.map((project) => (
            <FadeIn key={project.slug}>
              <ProjectCard {...project} />
            </FadeIn>
          ))}
        </StaggerContainer>
        <FadeIn className="text-center mt-12">
          <Link href="/progetti" className="text-primary hover:underline">
            Vedi tutti i progetti →
          </Link>
        </FadeIn>
      </Container>
    </Section>
  )
}
