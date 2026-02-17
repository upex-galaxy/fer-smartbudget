# Design System - BajaNumeros!

Generado en Fase 3.3 (Frontend Setup)

## Direccion visual

- Paleta: Azul Profesional
- Estilo: Startup/Playful
- Layout: Sidebar Collapsible + Top Navbar

## Tokens de color (HSL)

- `--primary`: accion principal (botones CTA, foco, highlights)
- `--secondary`: superficies suaves y estados secundarios
- `--accent`: detalles energeticos
- `--background`, `--foreground`, `--card`, `--muted`, `--border`

Implementacion:

- `src/app/globals.css`
- `tailwind.config.ts`

## Tipografia

- Titulos: Sora (`--font-heading`)
- Texto base: Nunito (`--font-body`)

## Componentes UI

- `src/components/ui/button.tsx`
  - Variantes: `default`, `secondary`, `outline`, `ghost`, `danger`
  - Tamaños: `sm`, `md`, `lg`, `icon`
- `src/components/ui/card.tsx`
  - `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`
- `src/components/ui/input.tsx`
- `src/components/ui/label.tsx`
- `src/components/ui/textarea.tsx`
- `src/components/ui/badge.tsx`

## Layout components

- `src/components/layout/sidebar.tsx`
- `src/components/layout/navbar.tsx`
- `src/components/layout/main-layout.tsx`

## Integracion backend-frontend (type-safe)

- Fuente de verdad de tipos: `src/types/supabase.ts`
- Helpers de consumo: `src/lib/types.ts`

Patron recomendado:

```ts
import type { BudgetRow } from '@/lib/types';

const rows: Pick<BudgetRow, 'id' | 'title' | 'total'>[] = [];
```

Esto evita desalineaciones entre schema y frontend.

## Convenciones de uso

- Usar clases semanticas del theme (`bg-primary`, `text-muted-foreground`, etc.)
- Evitar colores hardcodeados fuera de tokens
- Reusar componentes de `src/components/ui/` antes de crear nuevos
- Mantener `data-testid` estaticos en listas (`budgetCard`, `historyJobCard`), no dinamicos
