# Backend Setup - BajaNumeros

## Estado actual

- Se preparo la base de Next.js 15 + Supabase SSR en este repositorio.
- Se agrego configuracion centralizada de entorno en `src/lib/config.ts`.
- Se crearon clientes Supabase browser/server/admin en `src/lib/supabase/`.
- Se creo middleware de proteccion de rutas en `middleware.ts`.
- Se creo `AuthProvider` real con Supabase Auth en `src/contexts/auth-context.tsx`.
- Se conectaron paginas base a tablas reales:
  - `src/app/dashboard/page.tsx` -> `budgets`
  - `src/app/history/page.tsx` -> `audio_jobs`

## Archivos clave

- `src/lib/config.ts`
- `src/lib/supabase/client.ts`
- `src/lib/supabase/server.ts`
- `src/lib/supabase/admin.ts`
- `src/types/supabase.ts`
- `src/contexts/auth-context.tsx`
- `middleware.ts`

## Variables de entorno

Definir en `.env`:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `NEXT_PUBLIC_APP_URL`

Referencia: `.env.example`.

## Estado Fase 3

- MCP Supabase validado y operativo sobre el proyecto `eihzqsnabqvztzayhbxu`.
- Schema fundacional alineado al modelo canonico SRS/app:
  - `audio_jobs` (renombrada desde `audio_messages`)
  - `budgets` (con `title`, `audio_job_id`, `subtotal`, `updated_at`)
  - `user_profiles` (con preferencias default)
- RLS aplicado en tablas fundacionales con politicas por ownership (`auth.uid()`).
- Hardening aplicado en fundacionales:
  - constraints canonicos (`audio_jobs_pkey`, `audio_jobs_user_id_fkey`)
  - triggers `updated_at` en `audio_jobs`, `budgets`, `user_profiles`
  - politicas RLS recreadas con rol explicito `authenticated`
  - limpieza de indice redundante en `user_profiles.user_id`
- Seed idempotente ejecutado para perfiles, audio jobs y budgets iniciales.
- Tipos regenerados en `src/types/supabase.ts`.
- ERD MVP completado (11 entidades conceptuales) con estas adiciones/alineaciones:
  - Nuevas tablas: `usage_counters`, `budget_versions`, `exports`, `billing_invoices`
  - Alineacion de `subscriptions` a: `plan_name`, `monthly_quota`, `renewal_date`, `updated_at`
  - Alineacion de `deliveries` a: `target` (se removio `destination`)
  - Alineacion de `budget_items` a: `description`, `line_total`, `supplier_name`, `confidence_score`, `updated_at` (se removio `name`)

## Migraciones aplicadas

- `20260210040824 phase3_canonical_alignment_v2`
- `20260210040853 phase3_cleanup_duplicate_constraints`
- `20260210041817 phase3_foundational_hardening`
- `20260210043730 phase3_erd_completion_additive`
- `20260210043745 phase3_erd_completion_cleanup`

Regenerar tipos cuando cambie el schema:

```bash
export PROJECT_REF=eihzqsnabqvztzayhbxu
bun run db:types
```

## Comandos utiles

```bash
bun run dev
bun run typecheck
bun run build
```
