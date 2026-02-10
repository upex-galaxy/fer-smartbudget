# BajaNumeros! - Non-Functional Specifications (MVP)

## Stack Alignment

- Frontend/Backend: Next.js 15 (App Router + API Routes)
- Database/Auth/Storage: Supabase (PostgreSQL + Auth + Storage)
- Billing: Provider-agnostic payment platform with hosted checkout links
- Hosting/CDN: Vercel
- CI/CD: GitHub Actions

## 1) Performance

- **Page Load Time (LCP):** <= 2.2s on 4G mid-tier mobile for core screens.
- **Time to Interactive (TTI):** <= 3.0s for dashboard/history screens.
- **API Response Time:** p95 <= 500ms for CRUD APIs; p95 <= 800ms for filtered history queries.
- **Async Processing SLA (audio->draft):** p90 <= 20 min, p95 <= 30 min.
- **Database Query Time:** p95 <= 120ms for simple indexed reads; p95 <= 250ms for filtered lists.
- **Concurrent Users:** 300 concurrent authenticated users (MVP), 1,500 target for v2 scale-up.

## 2) Security

- **Authentication:** Supabase Auth with JWT access tokens and rotating refresh tokens.
- **Authorization:** RBAC baseline (`user`, `admin_ops`) + RLS per-user ownership in PostgreSQL.
- **Data Encryption (at rest):** Supabase managed encryption for DB and object storage.
- **Data Encryption (in transit):** HTTPS with TLS 1.2+ (prefer TLS 1.3 end-to-end).
- **Input Validation:** Client-side + server-side schema validation (Zod).
- **Session Management:** Access token TTL 60 min; refresh token rotation with revocation on logout.
- **Rate Limiting:** Per-IP and per-user limits on auth and upload endpoints.
- **Webhook Security:** Billing webhooks must validate provider signature, timestamp tolerance, and reject unsigned payloads.
- **Webhook Idempotency:** Replayed billing events must not duplicate side effects.
- **OWASP Top 10 Mitigations:**
  - Injection: parameterized queries + ORM/query builder safe patterns.
  - Broken access control: strict RLS policies + authorization middleware.
  - Cryptographic failures: no sensitive secrets in client; encrypted transport/storage.
  - Security misconfiguration: hardened headers, env segregation, least privilege.
  - Logging/monitoring failures: structured logs and alerting on auth/upload anomalies.

## 3) Scalability

- **Architecture:** Stateless API routes; background job execution for audio pipeline.
- **Database:** PostgreSQL with proper indexing on owner_id, created_at, status.
- **RLS:** Mandatory on user data tables to preserve tenant isolation.
- **CDN:** Vercel Edge Network for static assets and cached responses.
- **Caching Strategy:**
  - ISR/revalidation for low-volatility pages.
  - Short-lived API caching (`Cache-Control`) for read-heavy endpoints.
  - Object URL signing with expiry for exported files.
- **Connection Pooling:** Supabase pooling + bounded DB connections from server runtime.

## 4) Accessibility

- **WCAG Compliance:** Target WCAG 2.1 AA for all MVP user flows.
- **Keyboard Navigation:** 100% interactive controls reachable and operable by keyboard.
- **Screen Reader Support:** Semantic HTML + ARIA labels for form controls, status, and errors.
- **Color Contrast:** Minimum 4.5:1 for normal text, 3:1 for large text/UI components.
- **Focus Indicators:** Visible focus state on all actionable elements.

## 5) Browser and Device Support

- **Desktop:** Chrome, Firefox, Safari, Edge (latest 2 stable versions).
- **Mobile:** iOS Safari and Android Chrome (latest 2 major versions).
- **Viewport Support:** 360px width minimum for mobile layout without horizontal scroll.

## 6) Reliability and Resilience

- **Uptime Objective:** 99.9% monthly for core web app and APIs.
- **Error Rate:** < 1% 5xx responses (excluding third-party outages).
- **Job Failure Rate:** < 5% unrecoverable audio processing jobs.
- **Recovery Time Objective (RTO):** <= 30 minutes for critical incidents.
- **Recovery Point Objective (RPO):** <= 15 minutes for critical metadata.
- **Retry Strategy:** Exponential backoff for transient processing/integration failures.

## 7) Maintainability and Operability

- **Type Safety:** TypeScript strict mode enabled.
- **Code Quality:** ESLint + formatter enforced in CI.
- **Test Coverage:** >= 75% unit coverage on core domain services; critical API paths covered by integration tests.
- **API Documentation:** OpenAPI kept versioned with implementation.
- **Architecture Docs:** Mermaid diagrams maintained in `.context/SRS/architecture-specs.md`.
- **Observability:** Structured logs with correlation IDs (`request_id`, `job_id`, `user_id` masked).

## 8) Data and Privacy

- **Data Minimization:** Store only data required for budget generation and traceability.
- **Retention Policy:**
  - Raw uploaded audio: default retention 30 days (configurable by policy).
  - Structured budgets/history: retained while account is active.
- **PII Handling:** Mask sensitive fields in logs; never log tokens or passwords.
- **Data Deletion:** User-initiated deletion workflow with auditable soft-delete/hard-delete policy.

## 9) MVP Scope Constraint

- Ingestion source supported in MVP: **WhatsApp audio files only**.
- Traditional phone call ingestion is excluded and planned for v2+.
