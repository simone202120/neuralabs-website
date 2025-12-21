import { Plus_Jakarta_Sans, Outfit, JetBrains_Mono } from 'next/font/google'
import type { Metadata } from 'next'
import './globals.css'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { ClientProviders } from '@/components/providers/ClientProviders'

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
  title: {
    default: 'NeuraLabs',
    template: '%s | NeuraLabs',
  },
  description: 'Il laboratorio dove nascono le idee intelligenti. Sviluppo web, AI Agents, sistemi RAG e automazioni.',
  openGraph: {
    title: 'NeuraLabs',
    description: 'Il laboratorio dove nascono le idee intelligenti.',
    url: 'https://www.neuralabs.it', // Replace with actual domain
    siteName: 'NeuraLabs',
    images: [
      {
        url: 'https://www.neuralabs.it/og/og-default.png', // Replace with actual domain
        width: 1200,
        height: 630,
      },
    ],
    locale: 'it_IT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NeuraLabs',
    description: 'Il laboratorio dove nascono le idee intelligenti.',
    images: ['https://www.neuralabs.it/og/og-default.png'], // Replace with actual domain
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
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" suppressHydrationWarning>
      <body
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
    </html>
  )
}
