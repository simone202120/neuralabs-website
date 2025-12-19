import { NextRequest, NextResponse } from 'next/server'

/**
 * Calculator API Route
 * Currently disabled - will be enabled after Supabase integration
 */
export async function POST(req: NextRequest) {
  try {
    const formData = await req.json()
    
    // Basic calculation without database storage
    const { projectType, complexity, features = [], timeline } = formData
    
    // Simple calculation logic
    const baseHours: Record<string, number> = {
      'Sito Web': 40,
      'WebApp': 80,
      'AI Agent': 100,
      'Sistema RAG': 80,
      'Automazione': 30,
      'Altro': 60
    }
    
    const complexityMultiplier: Record<string, number> = {
      'Semplice': 1,
      'Media': 1.5,
      'Complessa': 2.5
    }
    
    let hours = (baseHours[projectType] || 60) * (complexityMultiplier[complexity] || 1)
    hours += features.length * 15
    
    const hoursMin = Math.round(hours * 0.8)
    const hoursMax = Math.round(hours * 1.2)
    const priceMin = hoursMin * 60
    const priceMax = hoursMax * 60
    
    return NextResponse.json({
      hoursMin,
      hoursMax,
      priceMin,
      priceMax,
      warning: 'Estimate calculated but not saved. Database integration pending.'
    })
  } catch (error) {
    console.error('Calculate error:', error)
    return NextResponse.json(
      { error: 'Failed to calculate estimate' },
      { status: 500 }
    )
  }
}
