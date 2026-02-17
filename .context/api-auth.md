# API Authentication - BajaNumeros

## Metodo de autenticacion

- Supabase Auth con sesiones via cookies.
- Middleware renueva sesion y protege rutas privadas.

## Flujo base

1. Usuario se registra/inicia sesion desde `src/app/signup/page.tsx` o `src/app/login/page.tsx`.
2. `AuthProvider` ejecuta `signUp` / `signInWithPassword`.
3. Supabase emite sesion y cookies.
4. `middleware.ts` valida usuario en cada request protegida.

## Proteger rutas

- Definidas en `PROTECTED_ROUTES` dentro de `middleware.ts`:
  - `/dashboard`
  - `/history`
  - `/subscription`
  - `/settings`

Si no hay sesion valida, redirige a `/login?redirect=<path>`.

## Uso en Server Components

```ts
import { createServer } from '@/lib/supabase/server';

const supabase = await createServer();
const { data, error } = await supabase.from('budgets').select('*');
```

## Seguridad

- Nunca exponer `SUPABASE_SERVICE_ROLE_KEY` en cliente.
- Cliente admin solo en servidor (`src/lib/supabase/admin.ts`).
- RLS obligatorio en tablas de datos de usuario.
- En tablas fundacionales (`audio_jobs`, `budgets`, `user_profiles`) las policies se limitan al rol `authenticated` con ownership por `auth.uid()`.
- En tablas ERD agregadas (`usage_counters`, `billing_invoices`) se aplica ownership directo por `user_id = auth.uid()`.
- En tablas hijas de presupuesto (`budget_versions`, `exports`) se aplica ownership por relacion (`EXISTS` contra `budgets.user_id = auth.uid()`).

## QA quick checks

- Login y signup completan sin errores.
- Usuario anonimo no puede abrir `/dashboard` ni `/history`.
- Usuario autenticado es redirigido fuera de `/login` y `/signup`.
