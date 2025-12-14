'use client'

import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import {
  StaggerContainer,
  FadeIn,
  ScaleIn,
} from '@/components/animations'
import { Globe, Bot, BrainCircuit, Zap } from 'lucide-react'
import Link from 'next/link'
import { useCursorState } from '@/hooks/useCursorState'

const services = [
  {
    icon: Globe,
    title: 'Siti Web',
    description: 'Siti web moderni, veloci e responsive per la tua attività.',
  },
  {
    icon: Bot,
    title: 'AI Agents',
    description: 'Agenti intelligenti per automatizzare task e migliorare l\'efficienza.',
  },
  {
    icon: BrainCircuit,
    title: 'Sistemi RAG',
    description: 'Knowledge base aziendali accessibili tramite AI per risposte immediate.',
  },
  {
    icon: Zap,
    title: 'Automazioni',
    description: 'Workflow automatizzati per eliminare il lavoro ripetitivo.',
  },
]

export function ServicesPreview() {
  const { setCursorType } = useCursorState()

  return (
    <Section>
      <Container>
        <FadeIn>
          <h2 className="text-3xl font-bold text-center">Cosa Facciamo</h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-4" />
        </FadeIn>
        <StaggerContainer
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12"
          staggerDelay={0.2}
        >
          {services.map((service, index) => (
            <ScaleIn key={index}>
              <Card className="text-center h-full hover:border-primary transition-all duration-300">
                <CardHeader>
                  <service.icon className="h-12 w-12 text-primary mx-auto" />
                  <CardTitle className="mt-4">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-text-secondary">{service.description}</p>
                </CardContent>
              </Card>
            </ScaleIn>
          ))}
        </StaggerContainer>
        <FadeIn className="text-center mt-12">
          <Link 
            href="/servizi" 
            className="text-primary hover:underline"
            onMouseEnter={() => setCursorType('hover')}
            onMouseLeave={() => setCursorType('default')}
          >
            Tutti i servizi →
          </Link>
        </FadeIn>
      </Container>
    </Section>
  )
}
