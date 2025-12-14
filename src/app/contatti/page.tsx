'use client'

import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { FadeIn } from '@/components/animations'
import { ContactForm } from '@/components/forms/ContactForm'
import { Calculator } from '@/components/calculator/Calculator'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

const tabs = [
  { name: 'Form', component: ContactForm },
  { name: 'Calculator', component: Calculator },
]

export default function ContattiPage() {
  const [activeTab, setActiveTab] = useState('Form')

  const ActiveComponent = tabs.find((tab) => tab.name === activeTab)?.component

  return (
    <Section>
      <Container>
        <FadeIn>
          <h1 className="text-4xl font-bold text-center">Contattaci</h1>
          <p className="mt-4 text-lg text-text-secondary text-center max-w-2xl mx-auto">
            Scegli il modo che preferisci per entrare in contatto con noi.
          </p>
        </FadeIn>

        <div className="mt-16">
          <div className="flex justify-center border-b border-border">
            {tabs.map((tab) => (
              <Button
                key={tab.name}
                variant="ghost"
                onClick={() => setActiveTab(tab.name)}
                className={cn(
                  'px-6 py-3 rounded-none',
                  activeTab === tab.name
                    ? 'border-b-2 border-primary text-primary'
                    : 'text-text-secondary'
                )}
              >
                {tab.name}
              </Button>
            ))}
          </div>

          <div className="mt-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {ActiveComponent && <ActiveComponent />}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </Section>
  )
}
