export const BASE_HOURS = {
  'Sito Web': 40,
  WebApp: 80,
  'AI Agent': 100,
  'Sistema RAG': 80,
  Automazione: 30,
  Altro: 60,
}

export const COMPLEXITY_MULTIPLIER = {
  Semplice: 1,
  Media: 1.5,
  Complessa: 2.5,
}

export const FEATURE_HOURS = {
  Autenticazione: 20,
  Dashboard: 40,
  'Integrazione AI': 30,
  'Database Complesso': 25,
}

export const TIMELINE_MODIFIER = {
  Urgente: 1.3,
  Standard: 1,
  Flessibile: 0.9,
}

export const HOURLY_RATE = 60 // €/ora

export function calculateEstimate(formData: any) {
  let hours = BASE_HOURS[formData.projectType as keyof typeof BASE_HOURS] || 0
  hours *= COMPLEXITY_MULTIPLIER[formData.complexity as keyof typeof COMPLEXITY_MULTIPLIER] || 1

  if (formData.features) {
    formData.features.forEach((feature: string) => {
      hours += FEATURE_HOURS[feature as keyof typeof FEATURE_HOURS] || 0
    })
  }

  const timelineModifier = TIMELINE_MODIFIER[formData.timeline as keyof typeof TIMELINE_MODIFIER] || 1
  
  const hoursMin = Math.round(hours * 0.8 * timelineModifier)
  const hoursMax = Math.round(hours * 1.2 * timelineModifier)

  const priceMin = hoursMin * HOURLY_RATE
  const priceMax = hoursMax * HOURLY_RATE

  return { hoursMin, hoursMax, priceMin, priceMax }
}
