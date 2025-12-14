import { NextRequest, NextResponse } from 'next/server'
import { createSupabaseServerClient } from '@/lib/supabase'
import { cookies } from 'next/headers'
import { calculateEstimate } from '@/lib/calculator'

export async function POST(req: NextRequest) {
  const supabase = createSupabaseServerClient(cookies())
  const formData = await req.json()

  try {
    const { hoursMin, hoursMax, priceMin, priceMax } = calculateEstimate(formData)

    const { data: estimateData, error } = await supabase
      .from('estimates')
      .insert([
        {
          project_type: formData.projectType,
          complexity: formData.complexity,
          features: formData.features,
          timeline: formData.timeline,
          hours_estimate_min: hoursMin,
          hours_estimate_max: hoursMax,
          price_estimate_min: priceMin,
          price_estimate_max: priceMax,
        },
      ])
      .select()

    if (error) {
      throw error
    }

    return NextResponse.json({
      hoursMin,
      hoursMax,
      priceMin,
      priceMax,
      estimateId: estimateData?.[0]?.id,
    })
  } catch (error) {
    console.error('Error calculating estimate:', error)
    return NextResponse.json({ error: 'Failed to calculate estimate' }, { status: 500 })
  }
}
