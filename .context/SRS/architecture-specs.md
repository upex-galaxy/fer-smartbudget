# BajaNumeros! - Architecture Specifications (MVP)

## 1) System Architecture (C4 Level 1-2, Mermaid)

### C4 Level 1 - System Context

```mermaid
flowchart LR
  user["User\n(Independent Worker)"]
  app["BajaNumeros Platform\n(Next.js + Supabase)"]
  wa["WhatsApp\n(Audio source)"]
  gs["Google Sheets API"]
  mail["Email Provider"]

  user -->|uploads exported audio| app
  wa -. external source .-> user
  app -->|exports/sync| gs
  app -->|delivery emails| mail
  app -->|shares links/files| user
```

### C4 Level 2 - Container View

```mermaid
flowchart TB
  subgraph Client
    web["Web Client\n(Next.js App Router UI)"]
  end

  subgraph Platform["BajaNumeros Platform"]
    api["API Layer\n(Next.js Route Handlers)"]
    worker["Processing Worker\n(Audio -> Transcript -> Structured Budget)"]
    auth["Auth Service\n(Supabase Auth)"]
    db["PostgreSQL\n(Supabase)"]
    store["Object Storage\n(Supabase Storage)"]
  end

  subgraph External
    stt["STT Provider"]
    llm["LLM Provider"]
    sheets["Google Sheets API"]
    email["Email Provider"]
    billing["Billing Platform\n(Hosted Checkout + Payment Links)"]
  end

  web -->|HTTPS JSON| api
  api --> auth
  api --> db
  api --> store
  api --> billing
  api --> email
  api --> sheets
  api -->|enqueue job| worker
  worker --> store
  worker --> stt
  worker --> llm
  worker --> db
```

---

## 2) Database Design (ERD, Mermaid)

> Importante: este ERD representa el **modelo conceptual del MVP**. El schema fisico final y sus columnas exactas se validaran con Supabase MCP en tiempo real durante implementacion; no se define SQL estatico aqui.

```mermaid
erDiagram
  USERS ||--|| USER_PROFILES : has
  USERS ||--o{ AUDIO_JOBS : creates
  USERS ||--o{ BUDGETS : owns
  USERS ||--o{ SUBSCRIPTIONS : has
  USERS ||--o{ USAGE_COUNTERS : tracks
  USERS ||--o{ BILLING_INVOICES : receives

  AUDIO_JOBS ||--o| BUDGETS : generates
  BUDGETS ||--|{ BUDGET_ITEMS : contains
  BUDGETS ||--o{ BUDGET_VERSIONS : snapshots
  BUDGETS ||--o{ EXPORTS : produces
  BUDGETS ||--o{ DELIVERIES : delivers

  USERS {
    uuid id
    string email
    timestamptz created_at
    timestamptz updated_at
  }

  USER_PROFILES {
    uuid user_id
    string full_name
    string default_output_format
    string default_delivery_channel
    string preferred_currency
    timestamptz updated_at
  }

  SUBSCRIPTIONS {
    uuid id
    uuid user_id
    string plan_name
    string status
    int monthly_quota
    timestamptz renewal_date
    timestamptz updated_at
  }

  USAGE_COUNTERS {
    uuid id
    uuid user_id
    date period_start
    date period_end
    int processed_count
    timestamptz updated_at
  }

  AUDIO_JOBS {
    uuid id
    uuid user_id
    string source_type
    string status
    int retry_count
    float progress_pct
    string error_code
    timestamptz created_at
    timestamptz updated_at
  }

  BUDGETS {
    uuid id
    uuid user_id
    uuid audio_job_id
    string title
    string status
    decimal subtotal
    decimal total
    string currency
    timestamptz created_at
    timestamptz updated_at
  }

  BUDGET_ITEMS {
    uuid id
    uuid budget_id
    string description
    decimal quantity
    decimal unit_price
    decimal line_total
    string supplier_name
    float confidence_score
    timestamptz updated_at
  }

  BUDGET_VERSIONS {
    uuid id
    uuid budget_id
    int version_number
    string version_label
    json snapshot_payload
    timestamptz created_at
  }

  EXPORTS {
    uuid id
    uuid budget_id
    string format
    string status
    string file_url
    timestamptz created_at
  }

  DELIVERIES {
    uuid id
    uuid budget_id
    string channel
    string status
    string target
    timestamptz created_at
  }

  BILLING_INVOICES {
    uuid id
    uuid user_id
    string provider_invoice_id
    decimal amount
    string currency
    string status
    string receipt_url
    timestamptz issued_at
  }
```

---

## 3) Tech Stack Justification

- **Frontend/Full-stack framework: Next.js 15 (App Router)**
  - ✅ Server Components and Route Handlers improve performance and simplify architecture.
  - ✅ Single codebase for UI + API speeds MVP delivery.
  - ✅ Good fit for Vercel deployment pipeline.
  - ❌ Trade-off: App Router patterns require team discipline and conventions.

- **Backend Data/Auth: Supabase (PostgreSQL + Auth + Storage)**
  - ✅ Managed Postgres with RLS supports multi-tenant security quickly.
  - ✅ Built-in Auth and Storage reduce integration overhead.
  - ✅ Strong developer velocity for MVP iterations.
  - ❌ Trade-off: deeper lock-in to Supabase service model and quotas.

- **Hosting/CDN: Vercel**
  - ✅ Optimized for Next.js runtime and preview workflows.
  - ✅ Edge caching and global delivery for static assets.
  - ✅ Fast CI-to-production path with environment separation.
  - ❌ Trade-off: serverless runtime constraints for long-running tasks.

- **CI/CD: GitHub Actions**
  - ✅ Standardized quality gates (lint, test, type-check).
  - ✅ Native PR workflow integration and auditability.
  - ✅ Reusable workflows for multi-environment deploy controls.
  - ❌ Trade-off: pipeline complexity can grow without strict templates.

- **External Processing: STT + LLM providers**
  - ✅ Best-in-class specialized models for speech and structuring tasks.
  - ✅ Faster accuracy improvements than building in-house models.
  - ✅ Provider abstraction allows iterative quality/cost tuning.
  - ❌ Trade-off: variable costs and dependency on external SLAs.

- **Billing: Provider-agnostic adapter + hosted checkout links**
  - ✅ Lets each user choose available payment method at checkout.
  - ✅ Reduces dependency on local payment constraints per country.
  - ✅ Simplifies future provider swaps using a stable internal interface.
  - ❌ Trade-off: requires stricter abstraction design and webhook normalization.

---

## 4) Data Flow (request -> response)

### Flow A: Audio Upload to Editable Budget

1. User uploads WhatsApp-exported audio in web app.
2. Client validates file type/size and sends `POST /api/audio-jobs`.
3. API authenticates user, checks plan quota, stores file metadata, creates `audio_job`.
4. API enqueues processing task and returns `202 accepted` with `job_id`.
5. Worker retrieves file from storage and sends audio to STT provider.
6. Worker sends transcript to LLM extraction service to get structured items.
7. Worker persists draft budget + items and marks job as `ready`.
8. Client polls `GET /api/audio-jobs/{jobId}` until status is `ready`.
9. User opens budget draft, edits fields, saves version, and exports.

### Flow B: Export and Delivery

1. User requests export (`POST /api/budgets/{id}/export/excel` or `/google-sheets`).
2. API validates plan permission and budget state.
3. Export artifact is generated and recorded in `exports`.
4. User triggers delivery via email/share link (`POST /api/budgets/{id}/deliveries`).
5. Delivery outcome is stored and shown in history.
6. Billing status changes are synchronized asynchronously via webhook (`POST /api/billing/webhook`).

### Flow C: Subscription Payment with User-selected Method

1. User selects target plan and preferred payment method in subscription screen.
2. Client sends `POST /api/subscription/checkout-link`.
3. API validates plan transition and selected payment method.
4. Billing adapter creates hosted checkout/payment link and returns `checkout_url`.
5. User completes payment on provider-hosted page.
6. Provider sends webhook event to `POST /api/billing/webhook`.
7. API verifies signature, checks idempotency by `event_id`, and updates subscription/invoice status.
8. Client fetches updated state from `GET /api/subscription` and `GET /api/billing/invoices`.

---

## 5) Security Architecture

### 5.1 Auth Flow Diagram (login, registration, token refresh)

```mermaid
sequenceDiagram
  participant U as User
  participant FE as Next.js Frontend
  participant API as API Routes
  participant SA as Supabase Auth

  U->>FE: Register/Login request
  FE->>API: POST /api/auth/register or /api/auth/login
  API->>SA: Create/verify credentials
  SA-->>API: access_token + refresh_token
  API-->>FE: Auth success + session payload

  FE->>API: Authenticated API request (Bearer token)
  API->>SA: Validate token/session
  SA-->>API: Token valid
  API-->>FE: Protected resource response

  FE->>API: Refresh token request
  API->>SA: Rotate refresh token
  SA-->>API: New token pair
  API-->>FE: Updated session tokens
```

### 5.2 RBAC Implementation

- Roles in MVP:
  - `user`: default role, access only own data.
  - `admin_ops`: operational role for support-level investigation (restricted, audited).
- Enforcement layers:
  - API middleware checks authenticated context and role-based action permissions.
  - PostgreSQL RLS enforces row ownership (`user_id = auth.uid()`) on user-domain tables.
  - Admin paths isolated and logged with explicit reason codes.

### 5.3 Data Protection

- Encryption at rest via Supabase managed infrastructure.
- TLS for all external/internal transport.
- Input sanitization and schema validation on all mutable endpoints.
- Signed URLs with expiration for exported file access.
- Secrets managed via environment variables in Vercel/GitHub Actions; never exposed to client.
- Structured logs with masked sensitive fields and correlation IDs for audits.

---

## Architecture Decision Summary

- Prioritize rapid MVP validation with a single full-stack runtime and managed data/auth platform.
- Keep processing asynchronous to protect UX from long audio operations.
- Use clear tenant isolation (RLS) from day one to avoid future migration risk.
- Constrain MVP ingestion to WhatsApp audio only to minimize system complexity and launch risk.
- Use a provider-agnostic billing strategy with hosted checkout links and normalized webhook events.
