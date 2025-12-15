'use client'

import { ThemeProvider } from '@/components/providers/ThemeProvider'
import { CustomCursor } from '@/components/ui/CustomCursor'
import { EasterEgg } from '@/components/ui/EasterEgg'
import { Suspense } from 'react'

export function ClientProviders({
  children,
}: {
  children: React.ReactNode
}) {
  return (
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
      {children}
    </ThemeProvider>
  )
}
