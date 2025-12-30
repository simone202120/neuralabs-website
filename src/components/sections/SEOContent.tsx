'use client'

import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { FadeIn } from '@/components/animations'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export function SEOContent() {
  return (
    <Section className="relative py-12 md:py-16 overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-surface/30 to-transparent" />

      <Container className="relative z-10">
        <FadeIn>
          <div className="max-w-4xl mx-auto">
            {/* Main Content Block */}
            <div className="space-y-6 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-text-primary leading-tight">
                Sviluppo Web Moderno e Intelligenza Artificiale per Aziende Italiane
              </h2>

              <div className="space-y-4 text-base md:text-lg text-text-secondary leading-relaxed">
                <p>
                  <strong className="text-text-primary">SigmaLabs</strong> è un laboratorio di sviluppo software
                  specializzato in <strong className="text-text-primary">sviluppo web moderno</strong> con{' '}
                  <strong className="text-text-primary">Next.js</strong>, <strong className="text-text-primary">React</strong> e{' '}
                  <strong className="text-text-primary">TypeScript</strong>. Realizziamo web application scalabili,
                  siti aziendali performanti e piattaforme digitali su misura per startup e imprese italiane che vogliono crescere online.
                </p>

                <p>
                  Integriamo <strong className="text-text-primary">intelligenza artificiale</strong> nei tuoi processi
                  con <strong className="text-text-primary">AI agents personalizzati</strong>, <strong className="text-text-primary">sistemi RAG</strong> per
                  l'analisi documentale e <strong className="text-text-primary">automazioni intelligenti</strong> basate
                  su LangChain e OpenAI. I nostri chatbot AI rispondono H24 utilizzando i tuoi dati aziendali,
                  mentre le automazioni con n8n eliminano task ripetitivi e riducono costi operativi.
                </p>

                <p>
                  Ogni progetto segue un <strong className="text-text-primary">approccio ingegneristico rigoroso</strong>:
                  architettura software modulare, code review sistematiche, testing automatizzato con Jest e Playwright,
                  e deployment su infrastrutture cloud moderne come Vercel e AWS. Utilizziamo tecnologie
                  enterprise-grade: <strong className="text-text-primary">Supabase</strong> per backend scalabili,
                  PostgreSQL per database relazionali affidabili, Docker per containerizzazione e CI/CD
                  per rilasci continui senza downtime.
                </p>

                <p>
                  Dal concept alla produzione, supportiamo startup nella creazione di <strong className="text-text-primary">MVP validati</strong> in
                  settimane (non mesi), e aziende consolidate nell'evoluzione digitale con software custom che
                  si integra perfettamente nei workflow esistenti. Non vendiamo complessità: consegniamo
                  strumenti che funzionano, documentazione completa e codice manutenibile che il tuo team può
                  comprendere e far crescere nel tempo.
                </p>
              </div>

              {/* CTA Inline */}
              <div className="pt-4">
                <Link
                  href="/servizi"
                  className={cn(
                    'inline-flex items-center gap-2 text-primary hover:text-primary/80',
                    'font-medium transition-colors group'
                  )}
                >
                  Scopri i nostri servizi
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </Section>
  )
}
