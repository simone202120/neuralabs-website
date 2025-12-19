import { NextRequest, NextResponse } from 'next/server'

/**
 * Contact Form API Route
 * Currently disabled - will be enabled after Supabase and Resend integration
 */
export async function POST(req: NextRequest) {
  try {
    const formData = await req.json()
    
    // Log to console (temporary - will be saved to DB later)
    console.log('Contact form submission:', {
      name: formData.name,
      email: formData.email,
      timestamp: new Date().toISOString()
    })
    
    return NextResponse.json({
      success: true,
      message: 'Message received. Database integration pending.',
      warning: 'Your message was logged but not saved to database yet.'
    })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to process contact form' },
      { status: 500 }
    )
  }
}
