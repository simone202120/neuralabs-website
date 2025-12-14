import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import Link from 'next/link'

export default function NotFoundPage() {
  return (
    <Container className="flex flex-col items-center justify-center text-center py-24">
      <h1 className="text-4xl font-bold">404 - Pagina non trovata</h1>
      <p className="mt-4 text-lg text-text-secondary">
        La pagina che stai cercando non esiste.
      </p>
      <Button asChild className="mt-8">
        <Link href="/">Torna alla Home</Link>
      </Button>
    </Container>
  )
}
