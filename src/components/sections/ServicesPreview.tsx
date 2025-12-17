'use client'

import { useRef, useMemo, useCallback } from 'react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { FadeIn } from '@/components/animations'
import { Globe, Bot, BrainCircuit, Zap, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useCursorState } from '@/hooks/useCursorState'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'
import { ScrollProgressIndicator } from '@/components/ui/ScrollProgressIndicator'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'
import { StaggerText } from '@/components/animations/StaggerText'
import { BrowserMockupAnimation } from '@/components/animations/BrowserMockupAnimation'
import { NeuralNetworkAnimation } from '@/components/animations/NeuralNetworkAnimation'
import { DocumentsAnimation } from '@/components/animations/DocumentsAnimation'
import { GearsAnimation } from '@/components/animations/GearsAnimation'

const services = [
  {
    icon: Globe,
    title: 'Siti Web & WebApp',
    tagline: 'La tua presenza digitale',
    description:
      "Creiamo esperienze web che raccontano la tua storia. Ogni progetto è pensato per riflettere l'identità del tuo brand e guidare i visitatori verso ciò che conta davvero.",
    features: [
      'Design su misura e responsive',
      'Performance e velocità ottimizzate',
      'SEO e accessibilità integrate',
      'CMS intuitivo per gestire i contenuti',
      'Hosting e manutenzione continua',
    ],
    price: 2500,
    animationType: 'browser' as const,
    gradient: 'from-blue-500/10 via-blue-500/5 to-transparent',
    schema: {
      '@type': 'Service',
      name: 'Sviluppo Siti Web e WebApp',
      description:
        'Creazione di siti web moderni, performanti e ottimizzati per i motori di ricerca',
      provider: {
        '@type': 'Organization',
        name: 'NeuraLabs',
      },
      offers: {
        '@type': 'Offer',
        price: '2500',
        priceCurrency: 'EUR',
      },
    },
  },
  {
    icon: Bot,
    title: 'AI Agents',
    tagline: 'Intelligenza che lavora per te',
    description:
      'Immagina di avere un assistente sempre disponibile, che comprende le esigenze dei tuoi clienti e risponde con precisione. I nostri AI agents trasformano l\'interazione in valore.',
    features: [
      'Customer support intelligente 24/7',
      'Comprensione del linguaggio naturale',
      'Integrazione con i tuoi sistemi esistenti',
      'Apprendimento continuo e personalizzazione',
      'Analytics e insights sui comportamenti',
    ],
    price: 5000,
    animationType: 'neural' as const,
    gradient: 'from-primary/10 via-primary/5 to-transparent',
    schema: {
      '@type': 'Service',
      name: 'Sviluppo AI Agents',
      description:
        "Agenti di intelligenza artificiale personalizzati per automatizzare processi e migliorare l'efficienza aziendale",
      provider: {
        '@type': 'Organization',
        name: 'NeuraLabs',
      },
      offers: {
        '@type': 'Offer',
        price: '5000',
        priceCurrency: 'EUR',
      },
    },
  },
  {
    icon: BrainCircuit,
    title: 'Sistemi RAG',
    tagline: 'La conoscenza a portata di domanda',
    description:
      'La tua documentazione, manuali e dati aziendali diventano una knowledge base intelligente. Risposte precise in linguaggio naturale, quando servono, senza sforzo.',
    features: [
      'Indicizzazione automatica dei documenti',
      'Ricerca semantica avanzata',
      'Risposte contestualizzate e accurate',
      'Integrazione multi-sorgente',
      'Aggiornamenti in tempo reale',
    ],
    price: 4000,
    animationType: 'documents' as const,
    gradient: 'from-green-500/10 via-green-500/5 to-transparent',
    schema: {
      '@type': 'Service',
      name: 'Sistemi RAG (Retrieval-Augmented Generation)',
      description:
        'Sistemi di knowledge base intelligenti che utilizzano AI per fornire risposte precise da documenti aziendali',
      provider: {
        '@type': 'Organization',
        name: 'NeuraLabs',
      },
      offers: {
        '@type': 'Offer',
        price: '4000',
        priceCurrency: 'EUR',
      },
    },
  },
  {
    icon: Zap,
    title: 'Automazioni',
    tagline: 'Il tempo è dalla tua parte',
    description:
      'Libera il tuo team dalle attività ripetitive. Creiamo workflow che collegano le tue applicazioni e fanno accadere le cose automaticamente, così puoi concentrarti su ciò che conta.',
    features: [
      'Analisi dei processi e ottimizzazione',
      'Integrazione tra app e servizi',
      'Sincronizzazione dati in tempo reale',
      'Notifiche e alert intelligenti',
      'Dashboard di monitoraggio',
    ],
    price: 1000,
    animationType: 'gears' as const,
    gradient: 'from-yellow-500/10 via-yellow-500/5 to-transparent',
    schema: {
      '@type': 'Service',
      name: 'Automazioni e Workflow',
      description:
        "Automatizzazione di processi aziendali e creazione di workflow intelligenti per migliorare l'efficienza",
      provider: {
        '@type': 'Organization',
        name: 'NeuraLabs',
      },
      offers: {
        '@type': 'Offer',
        price: '1000',
        priceCurrency: 'EUR',
      },
    },
  },
]

const technologies = [
  'Next.js',
  'React',
  'TypeScript',
  'Python',
  'OpenAI',
  'Anthropic',
  'Supabase',
  'Sanity',
  'Vercel',
  'AWS',
  'Node.js',
  '.NET',
]

// Animation component selector
function ServiceAnimation({
  type,
  progress,
}: {
  type: 'browser' | 'neural' | 'documents' | 'gears'
  progress: MotionValue<number>
}) {
  switch (type) {
    case 'browser':
      return <BrowserMockupAnimation progress={progress} />
    case 'neural':
      return <NeuralNetworkAnimation progress={progress} />
    case 'documents':
      return <DocumentsAnimation progress={progress} />
    case 'gears':
      return <GearsAnimation progress={progress} />
  }
}

export function ServicesPreview() {
  const { setCursorType } = useCursorState()
  const sectionRef = useRef<HTMLDivElement>(null)

  // Scroll progress tracking
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  // Individual service progress values (Hooks at top level)
  const serviceProgress1 = useTransform(scrollYProgress, [0, 0.25], [0, 1])
  const serviceProgress2 = useTransform(scrollYProgress, [0.25, 0.5], [0, 1])
  const serviceProgress3 = useTransform(scrollYProgress, [0.5, 0.75], [0, 1])
  const serviceProgress4 = useTransform(scrollYProgress, [0.75, 1], [0, 1])

  const serviceProgresses = useMemo(
    () => [serviceProgress1, serviceProgress2, serviceProgress3, serviceProgress4],
    [serviceProgress1, serviceProgress2, serviceProgress3, serviceProgress4]
  )

  // Scroll to service handler
  const scrollToService = useCallback((index: number) => {
    if (!sectionRef.current) return

    const serviceCards = Array.from(sectionRef.current.querySelectorAll('[data-service-card]'))
    const card = serviceCards[index]

    if (card) {
      card.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }, [])

  return (
    <>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            itemListElement: services.map((service, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              item: service.schema,
            })),
          }),
        }}
      />

      {/* Scroll Progress Indicator */}
      <ScrollProgressIndicator
        scrollProgress={scrollYProgress}
        services={services}
        onDotClick={scrollToService}
      />

      <Section ref={sectionRef} id="servizi" aria-labelledby="services-heading" className="py-32">
        <Container>
          {/* Header */}
          <FadeIn className="text-center max-w-3xl mx-auto mb-32">
            <h2
              id="services-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6"
            >
              Cosa Facciamo
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8" />
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
              Trasformiamo le tue idee in soluzioni digitali concrete. Dal web all&apos;intelligenza
              artificiale, creiamo strumenti che fanno la differenza nel tuo business, con un
              approccio umano e tecnologia all&apos;avanguardia.
            </p>
          </FadeIn>

          {/* Services Timeline */}
          <div className="space-y-32" role="list">
            {services.map((service, index) => {
              const Icon = service.icon
              const progress = serviceProgresses[index]

              return (
                <ServiceCard
                  key={index}
                  service={service}
                  progress={progress}
                  Icon={Icon}
                />
              )
            })}
          </div>

          {/* Technologies Section */}
          <FadeIn className="mt-32 mb-32">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
                Tecnologie che Utilizziamo
              </h3>
              <p className="text-text-secondary max-w-2xl mx-auto">
                Selezioniamo gli strumenti migliori per ogni progetto, combinando tecnologie
                consolidate con le innovazioni più recenti.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {technologies.map((tech, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="px-4 py-2 text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors duration-300 cursor-default"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </FadeIn>

          {/* CTA Section */}
          <FadeIn>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-12 md:p-16 text-center border border-primary/20">
              {/* Decorative blur circles */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />

              <h3 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Pronto a Dare Vita alle Tue Idee?
              </h3>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-8">
                Raccontaci il tuo progetto e scopriamo insieme come portarlo al livello successivo.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  asChild
                  size="lg"
                  className="text-base px-8 h-12 rounded-full"
                  onMouseEnter={() => setCursorType('hover')}
                  onMouseLeave={() => setCursorType('default')}
                >
                  <Link href="/contatti">
                    Inizia il Tuo Progetto
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="ghost"
                  size="lg"
                  className="text-base px-8 h-12 rounded-full border border-primary/20 hover:bg-primary/5"
                  onMouseEnter={() => setCursorType('hover')}
                  onMouseLeave={() => setCursorType('default')}
                >
                  <Link href="/servizi">Esplora Tutti i Servizi</Link>
                </Button>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>
    </>
  )
}

// Service Card Component (extracted for better performance)
function ServiceCard({
  service,
  progress,
  Icon,
}: {
  service: (typeof services)[0]
  progress: MotionValue<number>
  Icon: React.ElementType
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  
  // Transform values for scroll animations
  const opacity = useTransform(progress, [0, 0.3, 0.8, 1], [0, 1, 1, 0.3])
  const scale = useTransform(progress, [0, 0.3, 0.8, 1], [0.9, 1, 1, 0.95])
  const y = useTransform(progress, [0, 0.3], [50, 0])

  return (
    <motion.article
      ref={cardRef}
      data-service-card
      role="listitem"
      aria-label={service.title}
      style={{
        opacity,
        scale,
        y,
      }}
      className="relative"
    >
      <Card className="relative overflow-hidden border-border hover:border-primary/50 transition-all duration-500 max-w-4xl mx-auto">
        {/* Background Animation */}
        <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient}`} />
        <ServiceAnimation type={service.animationType} progress={progress} />

        <CardHeader className="space-y-6 relative z-10">
          {/* Icon and Badge */}
          <div className="flex items-start justify-between">
            <motion.div
              className="p-4 rounded-2xl bg-primary/10 hover:bg-primary/20 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon className="h-10 w-10 text-primary" />
            </motion.div>
            <Badge variant="secondary" className="text-xs font-mono">
              {service.tagline}
            </Badge>
          </div>

          {/* Title and Description */}
          <div>
            <CardTitle className="text-3xl md:text-4xl mb-4">{service.title}</CardTitle>
            <p className="text-text-secondary leading-relaxed text-lg">{service.description}</p>
          </div>
        </CardHeader>

        <CardContent className="space-y-8 relative z-10">
          {/* Features List with Stagger Animation */}
          <StaggerText items={service.features} staggerDelay={0.08} />

          {/* Price and CTA */}
          <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-xs text-text-muted uppercase tracking-wider mb-2">A partire da</p>
              <AnimatedCounter value={service.price} className="text-3xl font-bold text-text-primary" />
            </div>

            <Button
              asChild
              variant="default"
              size="lg"
              className="group/btn gap-2"
            >
              <Link href="/servizi">
                Scopri di più
                <ArrowRight className="h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.article>
  )
}
