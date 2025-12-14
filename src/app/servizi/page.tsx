import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { FadeIn, StaggerContainer } from '@/components/animations'
import { Globe, Bot, BrainCircuit, Zap, Check } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: Globe,
    title: 'Siti Web & WebApp',
    shortDescription: 'Soluzioni web moderne, performanti e su misura per il tuo business.',
    fullDescription: 'Utilizziamo tecnologie all&apos;avanguardia come Next.js e .NET per garantire scalabilità e sicurezza.',
    features: ['Design UI/UX', 'Sviluppo frontend e backend', 'Ottimizzazione SEO', 'Integrazione CMS'],
    startingPrice: 2500,
  },
  {
    icon: Bot,
    title: 'AI Agents',
    shortDescription: 'Agenti intelligenti per automatizzare task e interagire con i tuoi clienti.',
    fullDescription: 'Sviluppiamo agenti AI customizzati per una vasta gamma di applicazioni, dal customer support all&apos;analisi dati. I nostri agenti possono integrarsi con i tuoi sistemi esistenti per migliorare l&apos;efficienza e offrire nuove funzionalità.',
    features: ['Customer support automation', 'Analisi dati intelligente', 'Integrazione API', 'NLP e NLU'],
    startingPrice: 5000,
  },
  {
    icon: BrainCircuit,
    title: 'Sistemi RAG',
    shortDescription: 'Trasforma la tua conoscenza aziendale in una risorsa interrogabile tramite AI.',
    fullDescription: 'Implementiamo sistemi RAG (Retrieval-Augmented Generation) che permettono di interrogare in linguaggio naturale documenti, manuali e database aziendali, fornendo risposte precise e contestualizzate.',
    features: ['Indicizzazione documenti', 'Vector database', 'Integrazione con LLM', 'API di interrogazione'],
    startingPrice: 4000,
  },
  {
    icon: Zap,
    title: 'Automazioni',
    shortDescription: 'Workflow automatizzati per eliminare le attività manuali e ripetitive.',
    fullDescription: 'Analizziamo i tuoi processi di business e creiamo workflow automatizzati per connettere app, sincronizzare dati ed eliminare il lavoro manuale. Utilizziamo piattaforme come n8n, Make, e Zapier, o creiamo script custom.',
    features: ['Integrazione di app', 'Sincronizzazione dati', 'Automazione di processi', 'Notifiche e alert'],
    startingPrice: 1000,
  },
]

export default function ServiziPage() {
  return (
    <>
      <Section>
        <Container>
          <FadeIn>
            <h1 className="text-4xl font-bold text-center">I Nostri Servizi</h1>
            <p className="mt-4 text-lg text-text-secondary text-center max-w-2xl mx-auto">
              Offriamo soluzioni all&apos;avanguardia per portare il tuo business al livello successivo.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 gap-8 mt-16" staggerDelay={0.2}>
            {services.map((service, index) => (
              <FadeIn key={index}>
                <Card className="h-full flex flex-col">
                  <CardHeader>
                    <div className="flex items-center">
                      <service.icon className="h-8 w-8 text-primary mr-4" />
                      <CardTitle>{service.title}</CardTitle>
                    </div>
                    <p className="mt-2 text-text-secondary">{service.shortDescription}</p>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col justify-between">
                    <div>
                      <p className="text-sm">{service.fullDescription}</p>
                      <ul className="mt-4 space-y-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center text-sm">
                            <Check className="h-4 w-4 text-primary mr-2" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-6 text-right">
                      <p className="text-sm text-text-muted">
                        A partire da{' '}
                        <span className="font-bold text-text-primary">
                          €{service.startingPrice.toLocaleString('it-IT')}
                        </span>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </StaggerContainer>
        </Container>
      </Section>

      <Section className="bg-surface">
        <Container className="text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold">Non sai da dove iniziare?</h2>
            <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
              Il nostro assistente AI può aiutarti a chiarire i tuoi dubbi e a trovare la soluzione giusta per te.
            </p>
            <Button asChild size="lg" className="mt-8">
              <Link href="/contatti#chat">Chatta con l&apos;AI →</Link>
            </Button>
          </FadeIn>
        </Container>
      </Section>
    </>
  )
}