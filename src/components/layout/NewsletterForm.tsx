'use client'

import * as React from 'react'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

interface NewsletterFormProps extends React.HTMLAttributes<HTMLFormElement> {}

export function NewsletterForm({ className, ...props }: NewsletterFormProps) {
  const [email, setEmail] = React.useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // TODO: Handle newsletter subscription
    console.log('Newsletter subscription for:', email)
    setEmail('')
  }

  return (
    <form
      className={cn('flex space-x-2', className)}
      onSubmit={handleSubmit}
      {...props}
    >
      <Input
        type="email"
        placeholder="La tua email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Button type="submit">Iscriviti</Button>
    </form>
  )
}
