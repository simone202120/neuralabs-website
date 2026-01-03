import { Plus_Jakarta_Sans, Outfit, JetBrains_Mono } from 'next/font/google'
import type { Metadata } from 'next'
import { GoogleAnalytics } from '@next/third-parties/google'
import './globals.css'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { ClientProviders } from '@/components/providers/ClientProviders'
import { OrganizationSchema, LocalBusinessSchema, WebsiteSchema, FAQPageSchema } from '@/components/seo/StructuredData'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  preload: true,
  weight: ['400', '500', '600', '700'],
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  preload: true,
  weight: ['300', '400', '500', '600', '700', '800'],
})

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  preload: true,
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.sigmalabs.it'),

  title: {
    default: 'SigmaLabs - Sviluppo Web, AI Agents, Sistemi RAG e Automazioni | Italia',
    template: '%s | SigmaLabs - Sviluppo Web & AI',
  },

  description: 'SigmaLabs: agenzia italiana specializzata in sviluppo web moderno con Next.js, TypeScript, AI Agents, sistemi RAG, automazioni intelligenti e integrazione LLM. Trasformiamo idee in soluzioni digitali concrete.',

  keywords: [
    'sviluppo web Italia',
    'AI agents',
    'sistemi RAG',
    'automazioni aziendali',
    'Next.js developer',
    'TypeScript',
    'LangChain',
    'integrazione AI',
    'sviluppo software custom',
    'web agency Italia',
    'intelligenza artificiale',
    'chatbot AI',
    'automazione processi',
  ],

  authors: [{ name: 'SigmaLabs Team' }],
  creator: 'SigmaLabs',
  publisher: 'SigmaLabs',

  alternates: {
    canonical: 'https://www.sigmalabs.it',
  },

  openGraph: {
    title: 'SigmaLabs - Sviluppo Web, AI Agents e Automazioni',
    description: 'Agenzia italiana specializzata in sviluppo web moderno e soluzioni AI. Next.js, sistemi RAG, automazioni intelligenti.',
    url: 'https://www.sigmalabs.it',
    siteName: 'SigmaLabs',
    locale: 'it_IT',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'SigmaLabs - Sviluppo Web & AI Agents',
    description: 'Sviluppo web moderno, AI Agents, sistemi RAG e automazioni per aziende italiane',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" suppressHydrationWarning>
      <head>
        <OrganizationSchema />
        <LocalBusinessSchema />
        <WebsiteSchema />
        <FAQPageSchema />
      </head>
      <body
        suppressHydrationWarning
        className={`${plusJakartaSans.variable} ${outfit.variable} ${jetBrainsMono.variable} md:cursor-none`}
      >
          <ClientProviders>
            <div className="flex flex-col min-h-screen">
              <Navigation />
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
          </ClientProviders>
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || ''} />
    </html>
  )
}
