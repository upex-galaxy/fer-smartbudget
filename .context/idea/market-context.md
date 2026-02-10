# BajaNúmeros! — Market Context (MVP)

## 1) Competitive Landscape (Top 3 competidores directos)

### 1. Joist (estimaciones + facturación para contratistas)

- **Fortalezas**
  - UX simple para presupuestos e invoices.
  - Fuerte enfoque en contratistas independientes.
  - Buen enfoque mobile-first.
- **Debilidades / gaps**
  - No es audio-first ni WhatsApp-first.
  - Requiere carga manual de items y precios.
  - Menor foco en extraccion automatica desde conversaciones.
- **Oportunidad para BajaNumeros!**
  - Automatizar el paso critico: del audio al presupuesto editable sin recaptura manual.

### 2. Houzz Pro (estimacion/takeoff para remodelacion)

- **Fortalezas**
  - Suite robusta para estimacion y gestion comercial.
  - Templates y workflows profesionales.
  - Marca reconocida en vertical hogar/remodelacion.
- **Debilidades / gaps**
  - Complejidad y pricing mas alto para prosumer en LATAM.
  - Menor adaptacion al flujo informal por WhatsApp/llamada.
  - Onboarding relativamente pesado para usuario de obra.
- **Oportunidad para BajaNumeros!**
  - Ofrecer una alternativa liviana, rapida y contextualizada para LATAM.

### 3. Procore Estimating (preconstruccion/estimacion)

- **Fortalezas**
  - Plataforma enterprise muy completa.
  - Integracion profunda con procesos de construccion.
  - Alto estandar en control financiero/proyectos.
- **Debilidades / gaps**
  - Sobre-dimensionado para independientes y equipos pequenos.
  - Curva de aprendizaje y costo total altos para buyer persona MVP.
  - No resuelve de forma nativa la captura desde audio informal.
- **Oportunidad para BajaNumeros!**
  - Posicionarse como herramienta tactica de entrada (low-friction) para autonomos.

### Diferenciacion clave de BajaNumeros!

- Audio/llamada -> presupuesto estructurado (core no cubierto por incumbentes).
- Excel + Google Sheets listos para editar (valor tangible inmediato).
- No cambia habitos: el usuario sigue usando WhatsApp y telefono.
- Pricing transparente para perfil prosumer (sin sorpresas de IA).

## 2) Market Opportunity

> Nota: cifras orientativas y parcialmente especulativas para fase MVP; requieren validacion con investigacion primaria por pais.

### TAM / SAM / SOM (Argentina, hipotesis inicial)

- **Base de calculo Argentina (ancla de mercado):**
  - Poblacion ocupada urbana de referencia: ~13.6M (EPH INDEC, 4T 2024).
  - Categoria independiente relevante (cuenta propia 23.7% + patrones 3.5%): ~3.7M.
  - Informalidad total: ~42.0% (consistente con alta friccion administrativa en el segmento).

- **TAM (Argentina):**
  - Definicion: independientes fuera de oficina con necesidad recurrente de presupuestar.
  - Supuesto aplicado sobre base independiente: 35%-45%.
  - Rango TAM estimado: **1.3M-1.7M** usuarios.
  - Potencial anual teorico a USD 19/mes: **USD 296M-388M**.

- **SAM (Argentina, servible en MVP):**
  - Definicion: TAM digitalmente activo en WhatsApp + dispuesto a usar app self-service.
  - Supuesto de conversion TAM->SAM: 25%-35%.
  - Rango SAM estimado: **330k-600k** usuarios.
  - Potencial anual teorico: **USD 75M-137M**.

- **SOM (Argentina, captura realista 24-36 meses):**
  - Supuesto de captura sobre SAM: 2%-4%.
  - Objetivo SOM: **7,000-18,000** suscriptores pagos.
  - ARR aproximado: **USD 1.6M-4.1M** (segun mix de planes).

### Tendencias de crecimiento

- Expansion de software de estimacion de construccion (CAGR alto de un digito / bajo doble digito segun reportes de mercado).
- Mayor adopcion de IA generativa y automatizacion en pymes/SMBs.
- WhatsApp consolidado como canal operativo/comercial en LATAM.

### Barreras de entrada

- Precision de transcripcion/extraccion en audios reales (ruido, acentos, jerga).
- Dependencia de costos variables (transcripcion + LLM).
- Confianza del usuario en la exactitud de numeros y condiciones.
- Integraciones/cambios de politicas en canales externos (WhatsApp, APIs).

## 3) Trends & Insights (relevantes para MVP)

### Tendencia tecnologica

- Speech-to-Text + LLM estructurador ya permite pasar de conversacion desordenada a datos tabulares accionables.
- Implicacion: ventaja para productos con foco en workflow completo y no solo transcripcion.

### Tendencia de mercado

- Digitalizacion operativa de microempresas y oficios: buscan herramientas simples, de retorno inmediato y bajo onboarding.
- Implicacion: una propuesta set & forget con resultado concreto (archivo editable) tiene alto potencial de adopcion.

### Tendencia de comportamiento

- Uso intensivo de mensajeria y audio para coordinar trabajo real en campo.
- Implicacion: el producto debe adaptarse al habito actual, no forzar un cambio de canal o proceso.

## Fuentes de referencia (indicativas)

- CEPAL / ILOSTAT: informalidad laboral en America Latina (base para dimensionamiento del segmento).
- INDEC (EPH 4T 2024): ocupacion, categoria ocupacional (cuenta propia/patron) e informalidad para Argentina.
- Statista y reportes de adopcion: penetracion/uso de WhatsApp en LATAM.
- DataReportal / We Are Social (Argentina 2024): intensidad de uso digital y social.
- Reportes de mercado (Grand View Research, Technavio, Mordor Intelligence): crecimiento de software de estimacion/construction tech.
- Sitios oficiales de producto: Joist, Houzz Pro, Procore (benchmark funcional y de posicionamiento).

> Donde no hay dato publico homogeneo por subsegmento, las cifras se consideran supuestos de trabajo para validar en discovery comercial.
