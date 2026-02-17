# Frontend Architecture - BajaNumeros!

## Stack

- Next.js 15 (App Router)
- React 19
- Tailwind CSS v3.4
- Supabase SSR (`@supabase/ssr`)
- TypeScript strict

## Estructura principal

- `src/app/` rutas App Router
- `src/components/ui/` design system base
- `src/components/layout/` navbar, sidebar y shell autenticado
- `src/lib/supabase/` clientes browser/server/admin
- `src/lib/types.ts` helpers tipados desde `src/types/supabase.ts`

## Autenticacion y proteccion de rutas

- `middleware.ts` usa `createServerClient` de Supabase SSR
- Rutas protegidas: `/dashboard`, `/history`, `/budgets`, `/subscription`, `/settings`
- Flujo:
  - no autenticado en ruta protegida -> redirect `/login`
  - autenticado en `/login` o `/signup` -> redirect `/dashboard`

## Design system

- Tokens HSL definidos en `src/app/globals.css`
- Theme extendido en `tailwind.config.ts`
- Componentes base:
  - `Button` (default, secondary, outline, ghost, danger)
  - `Card` + subcomponentes
  - `Input`, `Label`, `Textarea`, `Badge`
- Utilidad `cn()` en `src/lib/utils.ts`

## Layout

- Estrategia elegida: Sidebar Collapsible + Top Navbar
- Persistencia de colapso en `localStorage`
- Menu mobile tipo drawer
- Componente shell reutilizable: `src/components/layout/main-layout.tsx`

## Integracion de tipos backend

- Tipos fuente: `src/types/supabase.ts`
- Helper types: `src/lib/types.ts`
- Páginas demo usan tipos compartidos para mock data (`BudgetRow`, `AudioJobRow`)

## Páginas demo de Fase 3.3

- `/` landing orientada a propuesta de valor del PRD
- `/login` autenticacion real con Supabase
- `/dashboard` workspace visual con métricas y presupuestos demo
