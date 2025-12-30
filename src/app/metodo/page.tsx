import { Metadata } from 'next'
import { MethodologyDeepDive } from '@/components/sections/MethodologyDeepDive'

export const metadata: Metadata = {
  title: 'Il Nostro Metodo | Processo di Sviluppo Ingegneristico',
  description: 'Scopri il metodo SigmaLabs: architettura software modulare, TypeScript, Next.js, test rigorosi e code review. Un approccio ingegneristico al development moderno.',
  alternates: {
    canonical: 'https://www.sigmalabs.it/metodo',
  },
  openGraph: {
    title: 'Il Metodo SigmaLabs | Architettura Software Moderna',
    description: 'Processo di sviluppo ingegneristico con TypeScript, Next.js, testing e code review.',
    url: 'https://www.sigmalabs.it/metodo',
  },
}

export default function MetodoPage() {
  return (
    <main className="pt-20">
      <MethodologyDeepDive />
    </main>
  )
}
