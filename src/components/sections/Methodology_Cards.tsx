'use client'

import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'

const steps = [
  {
    num: "01",
    title: "Dialogo",
    subtitle: "Understanding Needs",
    desc: "Ci sediamo con te. Capiamo l'obiettivo business, non solo le feature. Definiamo la strategia migliore."
  },
  {
    num: "02",
    title: "Prototipo",
    subtitle: "Rapid Development",
    desc: "Usiamo l'Agile. Creiamo una demo funzionante in tempi record usando tech stack moderni. Vedi subito il risultato."
  },
  {
    num: "03",
    title: "Iterazione",
    subtitle: "Feedback Loop",
    desc: "Analizziamo la demo insieme. Modifichiamo, rifiniamo e miglioriamo. Il prodotto cresce con le tue esigenze."
  }
]

export function Methodology_Cards() {
  return (
    <Section className="py-24 bg-background">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
           <div>
              <h2 className="text-5xl md:text-7xl font-display font-bold leading-tight">
                Il Nostro<br />Approccio
              </h2>
           </div>
           <p className="max-w-md text-xl text-text-secondary pb-2">
             Semplice, diretto, efficace. Trasformiamo la complessità in passi concreti.
           </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="group relative h-full min-h-[400px] flex flex-col justify-between p-8 md:p-10 rounded-[2rem] bg-surface hover:bg-surface-light border border-transparent hover:border-border transition-all duration-500"
            >
              <div>
                <span className="block text-6xl md:text-8xl font-display font-bold text-surface-light group-hover:text-border transition-colors duration-500 mb-8">
                  {step.num}
                </span>
                <h3 className="text-3xl font-bold mb-2">{step.title}</h3>
                <span className="text-sm font-mono text-primary tracking-widest uppercase mb-6 block">
                  {step.subtitle}
                </span>
                <p className="text-lg text-text-secondary leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Decorative Arrow */}
              <div className="mt-8 flex justify-end">
                <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-300">
                   <ArrowRight className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
