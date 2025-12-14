'use client'

import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { FadeIn, StaggerContainer } from '@/components/animations'

const approachSteps = [
  {
    number: '01',
    title: 'Ascolto & Discovery',
    description: 'Comprendiamo a fondo le tue esigenze e i tuoi obiettivi di business.',
  },
  {
    number: '02',
    title: 'Design & Prototipo',
    description: 'Creiamo soluzioni innovative con UI/UX intuitive e prototipi interattivi.',
  },
  {
    number: '03',
    title: 'Build & Deploy',
    description: 'Sviluppiamo con tecnologie all\'avanguardia e deployiamo in modo efficiente.',
  },
]

export function Approach() {
  return (
    <Section className="bg-surface">
      <Container>
        <FadeIn>
          <h2 className="text-3xl font-bold text-center">Il Nostro Approccio</h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-4" />
          <p className="mt-8 text-lg text-text-secondary max-w-3xl mx-auto text-center italic">
            `Non siamo la solita agenzia. L&apos;AI è il nostro partner creativo, non solo il nostro prodotto.`
          </p>
        </FadeIn>
        <StaggerContainer
          className="grid md:grid-cols-3 gap-8 mt-16 relative"
          staggerDelay={0.3}
        >
          {/* Linea con pallini, visibile solo su desktop e tablet */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2 z-0" />

          {approachSteps.map((step, index) => (
            <FadeIn key={index} delay={index * 0.2} className="relative z-10">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg border-2 border-primary-light shadow-lg">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mt-6">{step.title}</h3>
                <p className="mt-2 text-text-secondary">{step.description}</p>
              </div>
            </FadeIn>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  )
}
