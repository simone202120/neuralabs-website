import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { FadeIn } from '@/components/animations'
import { CompanyValues } from '@/components/sections/CompanyValues'
import { BuildPipeline } from '@/components/sections/BuildPipeline'
import { Button } from '@/components/ui/Button'
import { Users, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Chi Siamo | SigmaLabs',
  description: 'Il team dietro SigmaLabs. Sviluppatori, designer e pionieri dell\'AI uniti per costruire il futuro del web.',
}

export default function ChiSiamoPage() {
  return (
    <>
      {/* HERO SECTION */}
      <Section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
          <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[128px] opacity-40 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[128px] opacity-40 pointer-events-none" />
        </div>

        <Container>
          <div className="max-w-5xl">
            <FadeIn>
              <div className="flex items-center gap-2 mb-6 text-primary font-mono text-xs tracking-widest uppercase">
                <Users className="w-4 h-4" />
                <span>WHO WE ARE</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-8 text-slate-900 dark:text-white leading-tight">
                Gli Architetti <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
                  del Futuro
                </span>
              </h1>

              <div className="space-y-6 text-xl md:text-2xl text-slate-600 dark:text-gray-300 leading-relaxed">
                <p>
                  Un architetto affronta problemi complessi con progetti semplici ed eleganti. SigmaLabs applica questo principio al software: scomporre complessità in componenti modulari, testabili, comprensibili. TypeScript elimina categorie intere di bug strutturali. Next.js gestisce rendering, routing e ottimizzazioni come sistemi integrati. Supabase fornisce autenticazione, database e API real-time come servizi infrastrutturali. Tecnologie moderne che semplificano l&apos;architettura, non la mascherano.
                </p>

                <p>
                  Il vero costo del software non è costruirlo, ma mantenerlo negli anni. Come edifici che richiedono manutenzione, il codice deve essere ispezionabile e riparabile. Per questo ogni progetto segue standard architetturali rigorosi: separation of concerns come divisione in ambienti funzionali, dependency injection come modularità strutturale, error handling sistematico come protezione sismica. Code review che valutano non solo se regge, ma se è comprensibile ed estendibile.
                </p>

                <p>
                  Le integrazioni AI richiedono architettura particolarmente solida. LangChain orchestra LLM, ma senza gestione corretta di prompt, context window e fallback diventa fragile. SigmaLabs implementa ogni funzionalità AI con error handling robusto, logging dettagliato, monitoring continuo e documentazione che spiega ogni scelta progettuale. Il risultato? Sistemi AI che funzionano in produzione reale, non solo in demo. Architetture del futuro costruite con ingegneria del presente.
                </p>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* VALUES SECTION (Bento Grid) */}
      <CompanyValues />

      {/* BUILD PIPELINE SECTION */}
      <BuildPipeline />

      {/* CTA SIMPLE */}
      <Section className="py-24">
        <Container>
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-slate-900 dark:text-white">
                Iniziamo a Costruire Insieme
              </h2>
              <p className="text-lg text-slate-600 dark:text-gray-300 mb-8">
                Hai un progetto in mente? Parliamone. Ti aiuteremo a trasformarlo in realtà con tecnologie moderne e un approccio ingegneristico solido.
              </p>
              <Button asChild size="lg" className="rounded-full px-8">
                <Link href="/contatti">
                  Contattaci
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </FadeIn>
        </Container>
      </Section>
    </>
  )
}
