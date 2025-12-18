/**
 * TEMPORARILY DISABLED FOR DEPLOYMENT
 * Supabase client creation functions.
 * See INTEGRATION.md for instructions on how to enable this.
 */

// import { createBrowserClient } from '@supabase/ssr';
// import { createServerClient } from '@supabase/ssr';

// Temporary stub functions to prevent build errors
export const createSupabaseBrowserClient = () => {
  throw new Error('Supabase is not configured. Please set up environment variables.');
};

export const createSupabaseServerClient = (cookies: any) => {
  throw new Error('Supabase is not configured. Please set up environment variables.');
};

/* ORIGINAL CODE - TO BE RESTORED AFTER INTEGRATION
import { createBrowserClient } from '@supabase/ssr';
import { createServerClient } from '@supabase/ssr';

export const createSupabaseBrowserClient = () =>
  createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

export const createSupabaseServerClient = (cookies: any) =>
  createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { cookies }
  );
*/
