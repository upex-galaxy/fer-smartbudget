import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

import { getSupabaseAnonKey, getSupabaseUrl } from '@/lib/config';
import type { Database } from '@/types/supabase';

export async function createServer() {
  const cookieStore = await cookies();

  return createServerClient<Database>(getSupabaseUrl(), getSupabaseAnonKey(), {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) => {
            cookieStore.set(name, value, options);
          });
        } catch {
          // no-op in contexts where cookies are read-only
        }
      },
    },
  });
}
