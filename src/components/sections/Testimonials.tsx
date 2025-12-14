'use client'

import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { FadeIn } from '@/components/animations'
import { Card, CardContent } from '@/components/ui/Card'
import Image from 'next/image'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import useEmblaCarousel from 'embla-carousel-react'
import * as React from 'react'
import { memo } from 'react'
import { cn } from '@/lib/utils'

const testimonials = [
  {
    quote:
      'NeuraLabs ha trasformato la nostra idea in realtà in tempi record. Professionali e all\'avanguardia.',
    authorName: 'Mario Rossi',
    authorRole: 'CEO',
    company: 'TechStartup',
    image: '/images/avatar-placeholder.svg', // Placeholder
  },
  {
    quote:
      'Professionali, veloci e sempre disponibili. Lavorare con NeuraLabs è un piacere.',
    authorName: 'Laura Bianchi',
    authorRole: 'Founder',
    company: 'StartupX',
    image: '/images/avatar-placeholder.svg', // Placeholder
  },
  {
    quote:
      'Finalmente qualcuno che capisce l\'AI e sa come applicarla al business. Altamente raccomandato.',
    authorName: 'Marco Verdi',
    authorRole: 'CTO',
    company: 'DataCorp',
    image: '/images/avatar-placeholder.svg', // Placeholder
  },
]

const clientLogos = [
  '/images/logo-placeholder.svg',
  '/images/logo-placeholder.svg',
  '/images/logo-placeholder.svg',
  '/images/logo-placeholder.svg',
  '/images/logo-placeholder.svg',
]

// Memoized testimonial card to avoid re-renders
const TestimonialCard = memo(({ testimonial }: { testimonial: typeof testimonials[0] }) => (
  <div className="flex-none pl-4 w-full md:w-1/2 lg:w-1/3">
    <Card className="h-full flex flex-col justify-between p-6">
      <CardContent className="p-0">
        <p className="italic text-lg text-text-secondary">
          {testimonial.quote}
        </p>
      </CardContent>
      <div className="mt-6 flex items-center">
        <Image
          src={testimonial.image}
          alt={testimonial.authorName}
          width={48}
          height={48}
          sizes="48px"
          className="rounded-full object-cover mr-4"
        />
        <div>
          <p className="font-semibold text-text-primary">
            {testimonial.authorName}
          </p>
          <p className="text-sm text-text-muted">
            {testimonial.authorRole}, {testimonial.company}
          </p>
        </div>
      </div>
    </Card>
  </div>
))
TestimonialCard.displayName = 'TestimonialCard'

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  const scrollPrev = React.useCallback(() => {
    emblaApi?.scrollPrev()
  }, [emblaApi])

  const scrollNext = React.useCallback(() => {
    emblaApi?.scrollNext()
  }, [emblaApi])

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  React.useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
      emblaApi.off('reInit', onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <Section>
      <Container>
        <FadeIn>
          <h2 className="text-3xl font-bold text-center">Dicono di Noi</h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-4" />
        </FadeIn>

        <div className="relative mt-12">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} />
              ))}
            </div>
          </div>

          <button
            className="absolute top-1/2 -translate-y-1/2 left-0 -ml-8 z-10 p-2 rounded-full bg-surface-light text-text-primary hover:text-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={scrollPrev}
            disabled={!emblaApi || !emblaApi.canScrollPrev()}
            aria-label="Previous testimonial"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button
            className="absolute top-1/2 -translate-y-1/2 right-0 -mr-8 z-10 p-2 rounded-full bg-surface-light text-text-primary hover:text-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={scrollNext}
            disabled={!emblaApi || !emblaApi.canScrollNext()}
            aria-label="Next testimonial"
          >
            <ArrowRight className="h-5 w-5" />
          </button>

          <div className="flex justify-center mt-8 space-x-2">
            {emblaApi &&
              emblaApi.scrollSnapList().map((_, index) => (
                <button
                  key={index}
                  className={cn(
                    'w-3 h-3 rounded-full bg-border transition-colors',
                    index === selectedIndex ? 'bg-primary' : ''
                  )}
                  onClick={() => emblaApi.scrollTo(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
          </div>
        </div>

        <FadeIn className="mt-20">
          <h3 className="text-xl font-semibold text-center">I nostri clienti</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mt-8 items-center justify-center">
            {clientLogos.map((logo, index) => (
              <Image
                key={index}
                src={logo}
                alt={`Client Logo ${index + 1}`}
                width={120}
                height={60}
                sizes="(max-width: 768px) 50vw, 20vw"
                loading="lazy"
                quality={90}
                className="opacity-60 hover:opacity-100 transition-all duration-300 mx-auto"
              />
            ))}
          </div>
        </FadeIn>
      </Container>
    </Section>
  )
}
