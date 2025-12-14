'use client'

import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { FadeIn, StaggerContainer } from '@/components/animations'
import { ProjectCard, ProjectCardProps } from '@/components/ui/ProjectCard'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/Button'
import { client } from '@/lib/sanity'

// This would typically come from Sanity
const categories = ['All', 'website', 'webapp', 'ai_agent', 'rag', 'automation']

async function getProjects() {
  const query = `*[_type == "project"] | order(publishedAt desc) {
    title,
    "slug": slug.current,
    "category": category,
    "hours": hoursSpent,
    "imageUrl": coverImage.asset->url
  }`
  const data = await client.fetch(query)
  return data
}

export default function ProgettiPage() {
  const [projects, setProjects] = useState<ProjectCardProps[]>([])
  const [filteredProjects, setFilteredProjects] = useState<ProjectCardProps[]>([])
  const [activeFilter, setActiveFilter] = useState('All')

  useEffect(() => {
    async function fetchData() {
      const data = await getProjects()
      setProjects(data)
      setFilteredProjects(data)
    }
    fetchData()
  }, [])

  const handleFilter = (category: string) => {
    setActiveFilter(category)
    if (category === 'All') {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(projects.filter((p) => p.category === category))
    }
  }

  return (
    <Section>
      <Container>
        <FadeIn>
          <h1 className="text-4xl font-bold text-center">I Nostri Progetti</h1>
          <p className="mt-4 text-lg text-text-secondary text-center max-w-2xl mx-auto">
            Esplora una selezione dei nostri lavori più recenti.
          </p>
        </FadeIn>

        <div className="flex justify-center flex-wrap gap-2 mt-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeFilter === category ? 'primary' : 'secondary'}
              onClick={() => handleFilter(category)}
            >
              {category.replace('_', ' ')}
            </Button>
          ))}
        </div>

        <StaggerContainer
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
          staggerDelay={0.2}
        >
          {filteredProjects.map((project) => (
            <FadeIn key={project.slug}>
              <ProjectCard {...project} />
            </FadeIn>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  )
}