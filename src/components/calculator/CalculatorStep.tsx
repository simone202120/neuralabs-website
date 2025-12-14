'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { cn } from '@/lib/utils'

interface CalculatorStepProps {
  step: {
    title: string
    options: string[]
    key: string
    isMulti?: boolean
  }
  onNext: (data: any) => void
}

export function CalculatorStep({ step, onNext }: CalculatorStepProps) {
  const [selectedValue, setSelectedValue] = useState<string | string[]> (
    step.isMulti ? [] : ''
  )

  const handleSelect = (option: string) => {
    if (step.isMulti) {
      const current = selectedValue as string[]
      if (current.includes(option)) {
        setSelectedValue(current.filter((item) => item !== option))
      } else {
        setSelectedValue([...current, option])
      }
    } else {
      setSelectedValue(option)
    }
  }

  const handleNextClick = () => {
    onNext({ [step.key]: selectedValue })
  }

  const isSelectionValid = () => {
    if (step.isMulti) return true
    return (selectedValue as string).length > 0
  }

  return (
    <div>
      <h3 className="text-2xl font-bold text-center">{step.title}</h3>
      <div className="grid grid-cols-2 gap-4 mt-8">
        {step.options.map((option) => (
          <Card
            key={option}
            onClick={() => handleSelect(option)}
            className={cn(
              'p-6 text-center cursor-pointer transition-all',
              (selectedValue as string[]).includes(option) || selectedValue === option
                ? 'bg-primary text-white border-primary'
                : 'hover:border-primary'
            )}
          >
            {option}
          </Card>
        ))}
      </div>
      <div className="text-center mt-8">
        <Button onClick={handleNextClick} disabled={!isSelectionValid()}>
          Avanti
        </Button>
      </div>
    </div>
  )
}
