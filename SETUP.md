# Frontend Setup (Fase 3.3)

## Requisitos

- Bun instalado (`bun --version`)
- Variables en `.env` para Supabase:
  - `NEXT_PUBLIC_SUPABASE_URL` o `SUPABASE_URL`
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
  - `SUPABASE_SERVICE_ROLE_KEY`

## Instalacion

```bash
bun install
```

## Comandos utiles

```bash
# Desarrollo
bun run dev

# Type check
bun run typecheck

# Build de validacion
bun run build
```

## Rutas demo

- Publicas:
  - `/`
  - `/login`
  - `/signup`
- Protegidas por middleware:
  - `/dashboard`
  - `/history`
  - `/budgets`
  - `/subscription`
  - `/settings`

## Nota operativa

Si cambias `.env`, reinicia `bun run dev` para que Next.js recargue variables de entorno.
