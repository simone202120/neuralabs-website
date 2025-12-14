import { ThemeProvider } from '@/components/providers/ThemeProvider'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import { Suspense } from 'react'
import './globals.css'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { CustomCursor } from '@/components/ui/CustomCursor'
import { EasterEgg } from '@/components/ui/EasterEgg'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  preload: true,
  weight: ['400', '500', '600', '700'],
})

const jetBrainsMono = localFont({
  src: [
    {
      path: '../../public/fonts/fonts/variable/JetBrainsMono[wght].ttf',
      weight: '100 900',
      style: 'normal',
    },
  ],
  variable: '--font-mono',
  display: 'swap',
  preload: false,
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetBrainsMono.variable} cursor-none`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Suspense fallback={null}>
            <CustomCursor />
            <EasterEgg />
          </Suspense>
          <div className="flex flex-col min-h-screen">
            <Navigation />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}