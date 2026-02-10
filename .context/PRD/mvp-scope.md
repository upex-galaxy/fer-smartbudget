# BajaNumeros! - MVP Scope

## 1) In Scope (Must Have)

### EPIC-BAJANUMEROS-01

- **Epic Title:** User Authentication and Account Onboarding
- **User Stories:**
  - **US 1.1:** Como trabajador independiente, quiero registrarme con email y password, para crear mi cuenta y usar la plataforma.
  - **US 1.2:** Como usuario registrado, quiero iniciar y cerrar sesion de forma segura, para acceder solo a mis presupuestos.
  - **US 1.3:** Como usuario, quiero configurar preferencias iniciales (formato de salida y canal de entrega), para reducir pasos en cada nuevo presupuesto.

### EPIC-BAJANUMEROS-02

- **Epic Title:** WhatsApp Audio Intake and Processing
- **User Stories:**
  - **US 2.1:** Como usuario, quiero subir audios exportados de WhatsApp, para convertir conversaciones en presupuestos.
  - **US 2.2:** Como usuario, quiero ver el estado de procesamiento del audio (pendiente, procesando, listo, error), para saber cuando actuar.
  - **US 2.3:** Como usuario, quiero reintentar procesamiento cuando falle, para no perder el trabajo por errores temporales.

### EPIC-BAJANUMEROS-03

- **Epic Title:** Budget Structuring and Editing
- **User Stories:**
  - **US 3.1:** Como usuario, quiero revisar items extraidos (descripcion, cantidad, precio, moneda, proveedor), para validar exactitud.
  - **US 3.2:** Como usuario, quiero editar manualmente campos extraidos, para corregir errores antes de enviar.
  - **US 3.3:** Como usuario, quiero guardar versiones del presupuesto, para comparar cambios y mantener trazabilidad.

### EPIC-BAJANUMEROS-04

- **Epic Title:** Export and Delivery
- **User Stories:**
  - **US 4.1:** Como usuario, quiero exportar un presupuesto a Excel, para editar o compartir en un formato estandar.
  - **US 4.2:** Como usuario Plan Pro o superior, quiero exportar a Google Sheets, para colaborar en tiempo real.
  - **US 4.3:** Como usuario, quiero enviar el presupuesto por email o link compartible, para acelerar aprobaciones.

### EPIC-BAJANUMEROS-05

- **Epic Title:** History and Reuse
- **User Stories:**
  - **US 5.1:** Como usuario, quiero ver historial cronologico de presupuestos, para recuperar trabajos pasados rapido.
  - **US 5.2:** Como usuario, quiero filtrar historial por fecha, estado o proveedor, para encontrar presupuestos relevantes.
  - **US 5.3:** Como usuario, quiero duplicar un presupuesto previo, para reutilizar base y ahorrar tiempo.

### EPIC-BAJANUMEROS-06

- **Epic Title:** Subscription and Usage Transparency
- **User Stories:**
  - **US 6.1:** Como usuario, quiero ver mi plan activo y consumo del mes, para controlar limites sin sorpresas.
  - **US 6.2:** Como usuario, quiero cambiar de plan y elegir mi metodo de pago disponible, para pagar mi suscripcion con un checkout link flexible.
  - **US 6.3:** Como usuario, quiero ver historial de facturacion y comprobantes, para tener claridad administrativa.

## 2) Out of Scope (Nice to Have, v2+)

- Ingestion directa de llamadas telefonicas tradicionales.
- Integracion nativa con WhatsApp Business API para captura automatica.
- OCR de presupuestos/imaganes y parsing multimodal.
- Flujos multiusuario avanzados (roles por empresa, aprobaciones en cadena).
- Marketplace de templates por oficio.
- Integraciones contables (AFIP/ERP) y conciliacion automatica.
- Notificaciones inteligentes por WhatsApp bot bidireccional.
- Analitica avanzada de rentabilidad por cliente/proveedor.

## 3) Success Criteria (MVP)

### Criterios de aceptacion del MVP completo

- El usuario puede completar flujo end-to-end: registro -> carga audio WhatsApp -> revision/edicion -> exportacion -> historial.
- Todos los modulos core de Web App funcionan: configuracion, historial, suscripcion/consumo.
- El sistema respeta limites de plan y muestra consumo en tiempo casi real.
- Exportaciones Excel funcionan para 100% de presupuestos listos y Sheets para planes elegibles.
- El flujo de suscripcion permite generar checkout links y completar pago con metodo elegido por el usuario.
- El plan Free queda habilitado automaticamente en onboarding y permite upgrade sin friccion a planes pagos.

### Metricas minimas a alcanzar

- Tiempo mediano audio->presupuesto editable <= 20 minutos.
- > = 35% de nuevos usuarios generan su primer presupuesto dentro de 48 horas.
- > = 4 presupuestos por usuario activo por mes.
- > = 12% de usuarios activados en Free hacen upgrade a plan pago en 30 dias.
- Error operativo de extraccion editable (campos criticamente mal extraidos) < 15% por presupuesto.

### Condiciones para lanzamiento

- Seguridad base implementada (auth, autorizacion por usuario, validaciones de input, rate limiting inicial).
- Observabilidad minima activa (logs de API, trazabilidad de jobs, alertas de fallos criticos).
- Politica clara de manejo de errores y retries para procesamiento de audios.
- Documentacion PRD + SRS completa y consistente para fase de infraestructura.

## Scope Decision Record

- **Decision:** MVP incluye solo audios de WhatsApp como fuente de ingreso.
- **Rationale:** reduce complejidad tecnica inicial, acelera time-to-market y valida dolor central con menor costo.
