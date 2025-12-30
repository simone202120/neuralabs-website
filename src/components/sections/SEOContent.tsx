import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'

export function SEOContent() {
  return (
    <Section className="py-20 bg-slate-50 dark:bg-slate-900">
      <Container>
        <div className="max-w-4xl mx-auto prose prose-slate dark:prose-invert">
          <h2 className="text-3xl font-display font-bold mb-6">
            Sviluppo Web Moderno e Soluzioni AI per Aziende Italiane
          </h2>

          <p className="text-lg text-slate-700 dark:text-gray-300 leading-relaxed mb-6">
            <strong>SigmaLabs</strong> è un'agenzia italiana specializzata in{' '}
            <strong>sviluppo web moderno</strong> e{' '}
            <strong>intelligenza artificiale applicata</strong>. Il nostro team
            di sviluppatori esperti realizza web application con{' '}
            <strong>Next.js</strong>, <strong>React</strong> e{' '}
            <strong>TypeScript</strong>, garantendo codice di qualità
            enterprise, scalabile e manutenibile nel tempo.
          </p>

          <h3 className="text-2xl font-display font-semibold mt-8 mb-4">
            AI Agents e Sistemi RAG per la Tua Azienda
          </h3>

          <p className="text-lg text-slate-700 dark:text-gray-300 leading-relaxed mb-6">
            Sviluppiamo <strong>AI agents personalizzati</strong> che
            automatizzano processi aziendali complessi. I nostri{' '}
            <strong>sistemi RAG (Retrieval Augmented Generation)</strong>{' '}
            permettono di interrogare documenti aziendali in linguaggio
            naturale, mentre le <strong>automazioni intelligenti</strong>{' '}
            integrate con LangChain e LLM ottimizzano workflow ripetitivi.
          </p>

          <h3 className="text-2xl font-display font-semibold mt-8 mb-4">
            Tecnologie All&apos;Avanguardia
          </h3>

          <ul className="list-disc list-inside space-y-3 text-slate-700 dark:text-gray-300 mb-6">
            <li>
              <strong>Next.js 14 con App Router</strong>: performance ottimali e
              SEO nativo
            </li>
            <li>
              <strong>TypeScript</strong>: code quality e riduzione bug del 40%
            </li>
            <li>
              <strong>Supabase</strong>: database PostgreSQL, autenticazione e
              real-time
            </li>
            <li>
              <strong>LangChain</strong>: orchestrazione LLM e AI chains
            </li>
            <li>
              <strong>Tailwind CSS</strong>: design system scalabile e
              responsive
            </li>
            <li>
              <strong>Testing automatizzato</strong>: Jest, React Testing
              Library, Playwright
            </li>
          </ul>

          <h3 className="text-2xl font-display font-semibold mt-8 mb-4">
            Perché Scegliere SigmaLabs?
          </h3>

          <p className="text-lg text-slate-700 dark:text-gray-300 leading-relaxed">
            Ogni progetto segue un{' '}
            <strong>metodo ingegneristico rigoroso</strong>: architettura
            modulare, code review sistematiche, documentazione completa e
            deployment su infrastrutture moderne (Vercel, AWS). Non realizziamo
            solo software che funziona oggi, ma sistemi che evolvono con il tuo
            business per anni.
          </p>
        </div>
      </Container>
    </Section>
  )
}
