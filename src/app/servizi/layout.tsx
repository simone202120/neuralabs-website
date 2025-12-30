import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Servizi | Sviluppo Web, AI Agents, Sistemi RAG, Automazioni',
  description: 'Scopri i servizi SigmaLabs: sviluppo web app con Next.js e TypeScript, AI Agents custom, sistemi RAG per documenti aziendali, automazioni intelligenti e integrazione LLM.',
  keywords: [
    'sviluppo web app',
    'AI agents custom',
    'sistemi RAG',
    'automazioni aziendali',
    'integrazione ChatGPT',
    'LangChain development',
    'chatbot intelligenti',
    'Next.js development',
  ],
  alternates: {
    canonical: 'https://www.sigmalabs.it/servizi',
  },
  openGraph: {
    title: 'Servizi SigmaLabs | Web Development & AI Solutions',
    description: 'Web app moderne, AI Agents, sistemi RAG, automazioni. Soluzioni su misura per aziende.',
    url: 'https://www.sigmalabs.it/servizi',
  },
}

export default function ServiziLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
