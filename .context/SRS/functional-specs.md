# BajaNumeros! - Functional Specifications (MVP)

## Scope and Traceability Rule

- Fuente de verdad de User Stories: `.context/PRD/mvp-scope.md`.
- Mapeo aplicado: **1 User Story = 1 Functional Requirement**.
- Numeracion secuencial: FR-001 a FR-018.

---

## EPIC-BAJANUMEROS-01 - User Authentication and Account Onboarding

### FR-001: El sistema debe permitir registro de usuarios con email y password

- **Relacionado a:** EPIC-BAJANUMEROS-01, US 1.1
- **Input:**
  - email (string, formato email, max 254)
  - password (string, min 8, max 72)
- **Processing:**
  - Validar formato y fortaleza basica
  - Verificar no duplicidad de email
  - Crear usuario en Supabase Auth
  - Crear perfil inicial en tabla de perfiles
- **Output:**
  - Success: user_id, email, created_at
  - Error: code, message, field_errors opcional
- **Validations:**
  - Email unico
  - Password >= 8 caracteres
  - Entrada no vacia y sin espacios extremos

### FR-002: El sistema debe permitir inicio/cierre de sesion seguro

- **Relacionado a:** EPIC-BAJANUMEROS-01, US 1.2
- **Input:**
  - email (string)
  - password (string)
- **Processing:**
  - Autenticar credenciales contra Supabase Auth
  - Emitir sesion (access token + refresh token)
  - Invalidar sesion al cerrar
- **Output:**
  - Success login: user, session tokens
  - Success logout: confirmation
  - Error: unauthorized
- **Validations:**
  - Credenciales correctas
  - Cuenta activa/no bloqueada

### FR-003: El sistema debe permitir guardar preferencias iniciales de uso

- **Relacionado a:** EPIC-BAJANUMEROS-01, US 1.3
- **Input:**
  - default_output_format (enum: excel, sheets)
  - default_delivery_channel (enum: email, share_link)
  - preferred_currency (enum: ARS, USD)
- **Processing:**
  - Validar opciones segun plan
  - Persistir preferencias por usuario
- **Output:**
  - Success: profile_preferences updated_at
  - Error: validation_error / forbidden
- **Validations:**
  - Formato sheets solo para plan Pro+
  - Valores dentro de enums permitidos

---

## EPIC-BAJANUMEROS-02 - WhatsApp Audio Intake and Processing

### FR-004: El sistema debe permitir subir audios exportados de WhatsApp

- **Relacionado a:** EPIC-BAJANUMEROS-02, US 2.1
- **Input:**
  - audio_file (binary)
  - source_type (enum: whatsapp_audio)
  - optional metadata (conversation_ref, notes)
- **Processing:**
  - Validar tamano y formato de archivo
  - Crear audio_job con estado queued
  - Encolar pipeline transcripcion + extraccion
- **Output:**
  - Success: job_id, status=queued
  - Error: unsupported_format / payload_too_large / plan_limit_reached
- **Validations:**
  - Formatos permitidos: .ogg, .opus, .mp3, .m4a, .wav
  - Tamano maximo por archivo: 25 MB
  - Consumo mensual dentro del limite del plan

### FR-005: El sistema debe exponer estado de procesamiento por audio job

- **Relacionado a:** EPIC-BAJANUMEROS-02, US 2.2
- **Input:**
  - job_id (uuid)
- **Processing:**
  - Consultar job y progreso
  - Adjuntar resultado parcial/final cuando exista
- **Output:**
  - Success: status (queued|processing|ready|error), progress_pct, budget_id opcional
  - Error: not_found / forbidden
- **Validations:**
  - job_id valido
  - Job pertenece al usuario autenticado

### FR-006: El sistema debe permitir reintentar jobs fallidos recuperables

- **Relacionado a:** EPIC-BAJANUMEROS-02, US 2.3
- **Input:**
  - job_id (uuid)
  - retry_reason opcional
- **Processing:**
  - Verificar estado error recuperable
  - Registrar intento de retry
  - Reencolar pipeline
- **Output:**
  - Success: job_id, retry_count, status=queued
  - Error: retry_not_allowed / limit_reached
- **Validations:**
  - Maximo 3 retries por job
  - Solo owner puede reintentar

---

## EPIC-BAJANUMEROS-03 - Budget Structuring and Editing

### FR-007: El sistema debe mostrar borrador estructurado del presupuesto extraido

- **Relacionado a:** EPIC-BAJANUMEROS-03, US 3.1
- **Input:**
  - budget_id (uuid)
- **Processing:**
  - Recuperar cabecera, items y campos de confianza
  - Calcular subtotal y total
- **Output:**
  - Success: budget object + items[] + confidence_flags[]
  - Error: not_found / forbidden
- **Validations:**
  - budget_id valido
  - Usuario con acceso al recurso

### FR-008: El sistema debe permitir edicion manual de campos del presupuesto

- **Relacionado a:** EPIC-BAJANUMEROS-03, US 3.2
- **Input:**
  - budget_id (uuid)
  - patches (array): item_id, field, value
- **Processing:**
  - Validar reglas de negocio por campo
  - Aplicar cambios atomicos
  - Recalcular totales
- **Output:**
  - Success: updated_budget, recalculated_totals
  - Error: validation_error / conflict
- **Validations:**
  - cantidad > 0
  - precio_unitario >= 0
  - moneda en enum permitido

### FR-009: El sistema debe permitir guardar versiones del presupuesto

- **Relacionado a:** EPIC-BAJANUMEROS-03, US 3.3
- **Input:**
  - budget_id (uuid)
  - version_label (string, max 80)
  - optional notes (string, max 500)
- **Processing:**
  - Snapshot de cabecera + items
  - Incrementar version_number
  - Mantener referencia a version anterior
- **Output:**
  - Success: version_id, version_number
  - Error: not_found / validation_error
- **Validations:**
  - version_label requerido
  - budget debe existir y pertenecer al usuario

---

## EPIC-BAJANUMEROS-04 - Export and Delivery

### FR-010: El sistema debe exportar presupuesto a archivo Excel

- **Relacionado a:** EPIC-BAJANUMEROS-04, US 4.1
- **Input:**
  - budget_id (uuid)
- **Processing:**
  - Generar .xlsx con plantilla estandar
  - Guardar referencia de export en historial
- **Output:**
  - Success: file_url, file_name, expires_at
  - Error: generation_failed / not_found
- **Validations:**
  - Presupuesto en estado exportable

### FR-011: El sistema debe exportar presupuesto a Google Sheets para plan Pro+

- **Relacionado a:** EPIC-BAJANUMEROS-04, US 4.2
- **Input:**
  - budget_id (uuid)
  - destination options (sheet_title, folder_id opcional)
- **Processing:**
  - Verificar elegibilidad de plan
  - Crear/actualizar documento en Google Sheets
  - Guardar link en historial
- **Output:**
  - Success: sheet_url, external_id
  - Error: forbidden_plan / integration_error
- **Validations:**
  - Plan Pro o Profesional
  - budget_id valido

### FR-012: El sistema debe permitir entrega por email o link compartible

- **Relacionado a:** EPIC-BAJANUMEROS-04, US 4.3
- **Input:**
  - budget_id (uuid)
  - delivery_channel (enum: email, share_link)
  - email_to (array email, requerido para email)
- **Processing:**
  - Crear artefacto de entrega desde export vigente
  - Enviar email o generar link firmado
  - Registrar delivery event
- **Output:**
  - Success: delivery_id, channel, status
  - Error: validation_error / delivery_failed
- **Validations:**
  - email valido si canal email
  - link con expiracion configurable

---

## EPIC-BAJANUMEROS-05 - History and Reuse

### FR-013: El sistema debe listar historial cronologico de presupuestos

- **Relacionado a:** EPIC-BAJANUMEROS-05, US 5.1
- **Input:**
  - page (int)
  - page_size (int)
- **Processing:**
  - Consultar presupuestos del usuario ordenados por created_at desc
  - Incluir estado y ultimas exportaciones
- **Output:**
  - Success: items[], pagination
  - Error: validation_error
- **Validations:**
  - page >= 1
  - page_size entre 1 y 100

### FR-014: El sistema debe filtrar historial por fecha, estado y proveedor

- **Relacionado a:** EPIC-BAJANUMEROS-05, US 5.2
- **Input:**
  - date_from, date_to (date)
  - status (enum)
  - supplier_name (string)
- **Processing:**
  - Aplicar filtros combinables
  - Devolver resultados paginados
- **Output:**
  - Success: filtered_items[], pagination
  - Error: validation_error
- **Validations:**
  - date_from <= date_to
  - status dentro de enum permitido

### FR-015: El sistema debe permitir duplicar un presupuesto existente

- **Relacionado a:** EPIC-BAJANUMEROS-05, US 5.3
- **Input:**
  - source_budget_id (uuid)
  - new_title opcional
- **Processing:**
  - Clonar cabecera e items
  - Marcar referencia a origen
  - Crear nuevo presupuesto en estado draft
- **Output:**
  - Success: new_budget_id, source_budget_id
  - Error: not_found / forbidden
- **Validations:**
  - source_budget_id pertenece al usuario

---

## EPIC-BAJANUMEROS-06 - Subscription and Usage Transparency

### FR-016: El sistema debe mostrar plan activo y consumo mensual

- **Relacionado a:** EPIC-BAJANUMEROS-06, US 6.1
- **Input:**
  - authenticated user context
- **Processing:**
  - Obtener plan, limite mensual y uso acumulado
  - Obtener metodo de pago preferido (si existe)
  - Calcular remaining_quota
- **Output:**
  - Success: plan_name, quota_limit, quota_used, quota_remaining, renewal_date, preferred_payment_method opcional
  - Error: not_found
- **Validations:**
  - Datos de plan sincronizados con billing provider

### FR-017: El sistema debe permitir cambio de plan con metodo de pago seleccionado y checkout link

- **Relacionado a:** EPIC-BAJANUMEROS-06, US 6.2
- **Input:**
  - target_plan (enum: free, basico, pro, profesional)
  - effective_mode (enum: immediate, next_cycle)
  - payment_method (enum configurable por proveedor)
- **Processing:**
  - Validar transicion permitida
  - Validar metodo de pago habilitado para el usuario y entorno
  - Si target_plan es pago, crear checkout link con proveedor de billing (provider-agnostic adapter)
  - Si target_plan es free, aplicar cambio inmediato sin checkout
  - Persistir intento/cambio con estado pending_payment o active segun corresponda
- **Output:**
  - Success: previous_plan, target_plan, checkout_url, expires_at, status=pending_payment
  - Error: invalid_transition / billing_error
- **Validations:**
  - target_plan diferente al actual
  - Usuario titular de suscripcion
  - payment_method requerido solo para target_plan pago
  - payment_method permitido por configuracion vigente

### FR-018: El sistema debe mostrar historial de facturacion y comprobantes

- **Relacionado a:** EPIC-BAJANUMEROS-06, US 6.3
- **Input:**
  - page (int)
  - period opcional
- **Processing:**
  - Recuperar invoices del proveedor de billing
  - Normalizar estado y montos
  - Sincronizar estados de suscripcion/facturas por webhook con control de idempotencia
- **Output:**
  - Success: invoices[] (id, amount, currency, status, issued_at, receipt_url)
  - Error: provider_unavailable
- **Validations:**
  - Paginacion valida
  - Solo acceso al historial propio
  - Eventos webhook procesados una sola vez por event_id
