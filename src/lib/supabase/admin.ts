import 'server-only';

import { createClient } from '@supabase/supabase-js';

import { getSupabaseServiceRoleKey, getSupabaseUrl } from '@/lib/config';
import type { Database } from '@/types/supabase';

export function createAdminClient() {
  const serviceRoleKey = getSupabaseServiceRoleKey();

  return createClient<Database>(getSupabaseUrl(), serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}
