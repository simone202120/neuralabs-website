/**
 * TEMPORARILY DISABLED FOR DEPLOYMENT
 * This API route requires Supabase integration.
 * See INTEGRATION.md for instructions on how to enable this.
 */

import { NextRequest, NextResponse } from 'next/server'
// import { createSupabaseServerClient } from '@/lib/supabase'
// import { cookies } from 'next/headers'
import { calculateEstimate } from '@/lib/calculator'

export async function POST(req: NextRequest) {
  const formData = await req.json()

  try {
    // Calculate estimate without saving to database (temporary solution)
    const { hoursMin, hoursMax, priceMin, priceMax } = calculateEstimate(formData)

    return NextResponse.json({
      hoursMin,
      hoursMax,
      priceMin,
      priceMax,
      warning: 'Estimate not saved to database. Supabase integration pending.',
    })

    /* ORIGINAL CODE - TO BE RESTORED AFTER INTEGRATION
    const supabase = createSupabaseServerClient(cookies())

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
    */
  } catch (error) {
    console.error('Error calculating estimate:', error)
    return NextResponse.json({ error: 'Failed to calculate estimate' }, { status: 500 })
  }
}
