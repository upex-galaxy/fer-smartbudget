# BajaNumeros! - Growth Mini Spec (MVP)

## Purpose

Definir un marco ligero de crecimiento para el modelo freemium del MVP, sin alterar el alcance funcional principal de Fase 2. Este spec cubre limites de Free, triggers de upgrade y eventos de analitica para medir conversion.

## Scope

- In scope: reglas de plan Free, puntos de conversion in-app, instrumentacion de eventos.
- Out of scope: cambios de arquitectura mayor, nuevos modulos de producto, experimentacion multivariante avanzada.

---

## 1) Freemium Guardrails (anti-abuso)

### Plan Free (MVP)

- Cuota: hasta 2 conversaciones procesadas por mes.
- Input soportado: audio de WhatsApp.
- Output: Excel descargable.
- Restricciones: sin Google Sheets, prioridad de procesamiento estandar, marca de agua en export.

### Reglas operativas

- Limite de tamano por archivo: 25 MB.
- Limite de reintentos por job: 3.
- Soft throttle para Free en picos de carga (cola de prioridad menor a planes pagos).
- Validacion de cuota antes de encolar procesamiento.

### Politicas anti-abuso

- Bloqueo temporal por patron anomalo de uploads (burst por IP/user).
- Rechazo de formatos no permitidos y archivos corruptos.
- Registro de eventos de seguridad para intentos reiterados fallidos.

---

## 2) Upgrade Triggers (in-app)

### Trigger T1: Quota Reached

- Condicion: usuario Free intenta procesar el 3er audio del ciclo.
- UX: modal con estado de consumo + CTA directo a checkout link.
- Mensaje clave: "Ya usaste 2/2. Subi a Basico para seguir sin cortar flujo."

### Trigger T2: Feature Gate (Sheets)

- Condicion: usuario Free/Basico intenta exportar a Google Sheets.
- UX: paywall contextual con comparativa corta de planes.
- Mensaje clave: "Google Sheets esta disponible en Pro y Profesional."

### Trigger T3: Time-to-Value Reinforcement

- Condicion: usuario completa primer presupuesto en Free.
- UX: banner de logro + recomendacion de upgrade por continuidad.
- Mensaje clave: "Listo en minutos. Escala tu ritmo con mas capacidad mensual."

### Trigger T4: End-of-Cycle Reminder

- Condicion: faltan 3 dias para renovacion y uso >= 80% de cuota.
- UX: notificacion en dashboard + email transaccional opcional.
- Mensaje clave: "Estas cerca del limite. Evita fricciones eligiendo tu plan ahora."

---

## 3) Analytics Spec (eventos minimos)

## Event Naming Convention

- Formato: `domain.action.result`
- Ejemplos: `subscription.checkout_link.created`, `audio_job.create.blocked`.

## Core Events

- `auth.signup.completed`
  - Props: `user_id`, `plan=free`, `source`, `timestamp`
- `audio_job.create.accepted`
  - Props: `user_id`, `plan`, `file_type`, `file_size_mb`, `job_id`
- `audio_job.create.blocked`
  - Props: `user_id`, `plan`, `reason` (`quota_reached`, `invalid_file`, `rate_limited`)
- `budget.export.completed`
  - Props: `user_id`, `plan`, `format`, `budget_id`
- `paywall.viewed`
  - Props: `user_id`, `plan`, `trigger` (`quota`, `feature_gate`, `reminder`)
- `subscription.checkout_link.created`
  - Props: `user_id`, `current_plan`, `target_plan`, `payment_method`, `checkout_id`
- `subscription.payment.succeeded`
  - Props: `user_id`, `previous_plan`, `new_plan`, `provider_event_id`
- `subscription.payment.failed`
  - Props: `user_id`, `target_plan`, `failure_reason`, `provider_event_id`

## Derived Metrics

- Activation rate (48h): `% signup -> first budget generated`.
- Free-to-paid conversion (30d): `% activated free -> first successful paid subscription`.
- Paywall CTR: `% paywall viewed -> checkout link created`.
- Checkout completion: `% checkout link created -> payment succeeded`.
- Quota friction rate: `% audio_job.create.blocked(reason=quota_reached)` sobre activos Free.

---

## 4) MVP Experiments (lean)

- **EXP-01 (Quota Modal Copy):** comparar copy orientado a continuidad vs ahorro de tiempo.
- **EXP-02 (Plan Card Order):** mostrar Pro primero vs Basico primero para medir mix de upgrade.
- **EXP-03 (Reminder Timing):** 3 dias vs 1 dia antes del fin de ciclo.

Regla de corte inicial:

- mantener experimento minimo 2 semanas o 300 usuarios expuestos (lo que ocurra ultimo).

---

## 5) Success Criteria (growth)

- Free activation >= 40% (signup -> primer presupuesto en 48h).
- Free-to-paid conversion >= 12% a 30 dias en cohortes activadas.
- Checkout completion >= 55% (link creado -> pago exitoso).
- Quota friction rate <= 25% de activos Free (controlando frustracion sin eliminar tension de upgrade).

## 6) Traceability Notes

- Este documento complementa, y no reemplaza, los entregables base de Fase 2.
- Se alinea con:
  - `.context/PRD/mvp-scope.md`
  - `.context/PRD/executive-summary.md`
  - `.context/SRS/functional-specs.md`
  - `.context/SRS/api-contracts.yaml`
