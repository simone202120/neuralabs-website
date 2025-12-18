/**
 * TEMPORARILY DISABLED FOR DEPLOYMENT
 * This API route requires Supabase and Resend integration.
 * See INTEGRATION.md for instructions on how to enable this.
 */

import { NextRequest, NextResponse } from 'next/server'
// import { Resend } from 'resend'
// import { createSupabaseServerClient } from '@/lib/supabase'
// import { cookies } from 'next/headers'

// let resend: Resend | null = null;
// if (process.env.RESEND_API_KEY) {
//   resend = new Resend(process.env.RESEND_API_KEY);
// }

export async function POST(req: NextRequest) {
  // Temporary response while services are not integrated
  return NextResponse.json(
    {
      error: 'Contact form is temporarily disabled. Services integration pending.',
      status: 'not_implemented'
    },
    { status: 501 }
  )

  /* ORIGINAL CODE - TO BE RESTORED AFTER INTEGRATION
  const supabase = createSupabaseServerClient(cookies())
  const { name, email, message, ...rest } = await req.json()

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  try {
    // Save to Supabase
    const { data: contactData, error: supabaseError } = await supabase
      .from('contacts')
      .insert([{ name, email, message, ...rest }])
      .select()

    if (supabaseError) {
      console.error('Supabase error:', supabaseError)
      throw new Error('Could not save contact to database.')
    }

    // Send email notifications if resend is configured
    if (resend) {
      await resend.emails.send({
        from: 'NeuraLabs <noreply@yourdomain.com>', // Replace with your domain
        to: process.env.ADMIN_EMAIL || '',
        subject: 'Nuovo messaggio dal form di contatto',
        html: `<p>Hai ricevuto un nuovo messaggio da <strong>${name}</strong> (${email}):</p><p>${message}</p>`,
      })

      await resend.emails.send({
        from: 'NeuraLabs <noreply@yourdomain.com>', // Replace with your domain
        to: email,
        subject: 'Grazie per averci contattato!',
        html: `<p>Ciao ${name},</p><p>Abbiamo ricevuto il tuo messaggio e ti risponderemo al più presto.</p><p>Team NeuraLabs</p>`,
      })
    } else {
      console.warn('RESEND_API_KEY is not set. Skipping email notifications.')
    }

    return NextResponse.json({ success: true, id: contactData?.[0]?.id }, { status: 200 })
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
  */
}