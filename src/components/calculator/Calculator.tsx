'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CalculatorStep } from './CalculatorStep'
import { Button } from '@/components/ui/Button'

const steps = [
  {
    title: 'Tipo di progetto',
    options: ['Sito Web', 'WebApp', 'AI Agent', 'Sistema RAG', 'Automazione', 'Altro'],
    key: 'projectType',
  },
  {
    title: 'Complessità del progetto',
    options: ['Semplice', 'Media', 'Complessa'],
    key: 'complexity',
  },
  {
    title: 'Funzionalità aggiuntive',
    options: ['Autenticazione', 'Dashboard', 'Integrazione AI', 'Database Complesso'],
    key: 'features',
    isMulti: true,
  },
  {
    title: 'Tempistiche',
    options: ['Urgente', 'Standard', 'Flessibile'],
    key: 'timeline',
  },
]

interface CalculationResults {
  priceMin: number;
  priceMax: number;
  hoursMin: number;
  hoursMax: number;
}

export function Calculator() {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({})
  const [results, setResults] = useState<CalculationResults | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleNext = (data: any) => {
    setFormData((prev) => ({ ...prev, ...data }))
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      handleSubmit()
    }
  }

  const handleSubmit = async () => {
    setIsLoading(true)
    const response = await fetch('/api/calculate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
    const data = await response.json()
    setResults(data)
    setIsLoading(false)
  }

  if (results) {
    return (
      <div className="text-center">
        <h3 className="text-2xl font-bold">Stima del tuo progetto:</h3>
        <p className="text-4xl font-bold text-primary mt-4">
          €{results.priceMin} - €{results.priceMax}
        </p>
        <p className="text-text-secondary mt-2">
          (Stima ore: {results.hoursMin} - {results.hoursMax})
        </p>
        <Button onClick={() => { setResults(null); setCurrentStep(0); setFormData({}); }} className="mt-8">
          Calcola un altro preventivo
        </Button>
      </div>
    )
  }

  return (
    <div className="relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ x: '100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: '-100%', opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <CalculatorStep
            step={steps[currentStep]}
            onNext={handleNext}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
