/**
 * TEMPORARILY DISABLED FOR DEPLOYMENT
 * This API route requires Supabase and Resend integration.
 * See INTEGRATION.md for complete code to restore.
 */

import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  // Temporary response while services are not integrated
  return NextResponse.json(
    {
      error: 'Contact form is temporarily disabled. Services integration pending.',
      status: 'not_implemented'
    },
    { status: 501 }
  )
}
