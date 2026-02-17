import { z } from 'zod';

const appUrlSchema = z.string().url();

const resolvedAppUrl = process.env.NEXT_PUBLIC_APP_URL;

export const appUrl = appUrlSchema.safeParse(resolvedAppUrl).success
  ? (resolvedAppUrl as string)
  : 'http://localhost:3000';

function readRequiredEnv(name: string, value: string | undefined) {
  if (!value || value.trim().length === 0) {
    throw new Error(`Missing required env var: ${name}`);
  }

  return value;
}

export function getSupabaseUrl() {
  const nextPublicSupabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseUrl = process.env.SUPABASE_URL;

  return readRequiredEnv(
    'NEXT_PUBLIC_SUPABASE_URL (or SUPABASE_URL)',
    nextPublicSupabaseUrl ?? supabaseUrl
  );
}

export function getSupabaseAnonKey() {
  return readRequiredEnv(
    'NEXT_PUBLIC_SUPABASE_ANON_KEY',
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );
}

export function getSupabaseServiceRoleKey() {
  return readRequiredEnv('SUPABASE_SERVICE_ROLE_KEY', process.env.SUPABASE_SERVICE_ROLE_KEY);
}
