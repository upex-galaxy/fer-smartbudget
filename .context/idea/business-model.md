# BajaNumeros! - Business Model Canvas (MVP)

## Industria / Vertical

**Productividad y automatizacion para trabajadores independientes fuera de oficina**
Sub-verticales: construccion, obras, servicios profesionales informales, economia de oficios.
Modelo: **B2C Pro / Prosumer SaaS**.

---

## Problem Statement

Los trabajadores independientes que operan fuera de la oficina (arquitectos, maestros mayores de obra, contratistas, personal de obras) gestionan presupuestos, precios y acuerdos principalmente mediante **audios y llamadas de WhatsApp o telefono**. Esta modalidad informal genera un "telefono descompuesto": la informacion se pierde, se interpreta mal o queda enterrada en conversaciones imposibles de revisar.

El mayor problema aparece cuando esos precios y acuerdos **deben transformarse en algo reutilizable**: presupuestos editables, comparables, reenviables o acumulables. Hoy, ese paso se hace a mano, copiando audios, reescribiendo numeros y cometiendo errores.

No existe una solucion simple que transforme automaticamente esas conversaciones habladas en **presupuestos estructurados, editables y listos para trabajar**, sin obligar al usuario a cambiar su forma natural de comunicarse.

---

## Customer Segments

**Segmento principal (early adopters):**

- Trabajadores independientes fuera de oficina
- Arquitectos, maestros mayores de obra, contratistas, capataces
- Edad: 30-60 anos
- Uso intensivo de WhatsApp y llamadas
- Necesidad de presupuestos claros pero poco tiempo administrativo

**Tipo de cliente:**

- **B2C Pro / Prosumer**
- Pago individual por herramienta de trabajo

---

## Value Propositions

- Convierte audios y llamadas en **presupuestos estructurados**
- Genera **Excel o Google Sheets listos para editar**
- Reduce errores, confusion y discusiones por precios
- Ahorra tiempo: presupuesto listo en menos de 20 minutos
- Permite comparar, corregir y reutilizar presupuestos
- Centraliza acuerdos, precios y proveedores en un solo lugar
- Mantiene un historial accesible de presupuestos generados
- Brinda transparencia total sobre el uso y la suscripcion
- No cambia habitos: el usuario sigue usando WhatsApp y llamadas

---

## Channels

- Web App (configuracion, historial y billing)
- WhatsApp (entrega de links o archivos)
- Email (entrega de Excel / Google Sheets)
- Referidos boca a boca

---

## Customer Relationships

- Self-service
- Onboarding simple, una sola vez
- Modelo "set & forget"
- Historial visible de presupuestos generados
- Acceso permanente a archivos descargables
- Transparencia clara del consumo de la suscripcion
- Soporte minimo por WhatsApp / email

---

## Revenue Streams

**Modelo principal: Suscripcion mensual (precio fijo, IA incluida)**

### Plan Free - USD 0 / mes

- Hasta **2 conversaciones procesadas / mes**
- Audios de WhatsApp
- Output: **Excel descargable**
- Marca de agua en export y prioridad estandar de procesamiento

**Objetivo:** adquisicion viral y validacion rapida del valor.

---

### Plan Basico - USD 9 / mes

- Hasta **15 conversaciones procesadas / mes**
- Audios de WhatsApp
- Output: **Excel descargable**
- Entrega por WhatsApp o Email

**Objetivo:** primer upgrade desde Free para uso recurrente ligero.

---

### Plan Pro - USD 19 / mes (plan principal)

- Hasta **40 conversaciones procesadas / mes**
- Audios y llamadas de WhatsApp
- Output: **Excel + Google Sheets**
- Presupuesto estructurado (items, precios, moneda, proveedor)

**Objetivo:** herramienta de trabajo recurrente.

---

### Plan Profesional - USD 29 / mes

- Hasta **80 conversaciones procesadas / mes**
- Incluye llamadas telefonicas tradicionales
- Sheets avanzados (notas, observaciones, versiones)
- Prioridad en procesamiento

**Objetivo:** usuarios intensivos.

---

**Notas de pricing:**

- IA incluida, sin costos ocultos
- No se expone ChatGPT ni consumo tecnico
- Limite por cantidad de presupuestos generados
- Freemium controlado para acelerar referidos sin comprometer unit economics

---

## Key Resources

- Motor de transcripcion de audio
- Motor de extraccion y estructuracion de datos (LLM)
- Motor de generacion de archivos Excel / Sheets
- Infraestructura de procesamiento de audio
- Web App de configuracion
- Sistema de historial y tracking
- Sistema de billing transparente
- Templates de presupuestos reutilizables

---

## Key Activities

- Procesar audios y llamadas
- Transcribir conversaciones
- Extraer precios, items y condiciones
- Normalizar moneda, fechas y proveedores
- Generar Excel / Google Sheets estructurados
- Registrar cada presupuesto en el historial del usuario
- Mostrar consumo de la suscripcion en tiempo real
- Optimizar costos por procesamiento

---

## Key Partners

- Proveedores de transcripcion de audio
- Proveedores de modelos de lenguaje (LLM)
- Infraestructura cloud
- APIs de Google Sheets
- Validadores de formatos (arquitectos, contratistas reales)

---

## Cost Structure

**Costos variables principales:**

- Transcripcion de audio
- Procesamiento con LLM
- Generacion de archivos (Excel / Sheets)

**Costo promedio por presupuesto:**
~ **USD 0.50**

---

**Costos fijos:**

- Infraestructura (hosting, storage, base de datos)
- Desarrollo y mantenimiento
- Soporte minimo
- Sistema de billing

**Objetivo financiero MVP:**

- Costo variable < **USD 2-4 por usuario activo / mes**
- Margen positivo en Plan Pro

---

## Web App Scope (MVP)

La Web App cumple tres funciones claras:

1. **Configuracion**
   - Fuentes de informacion (audios, llamadas)
   - Formato de salida (Excel / Google Sheets)
   - Canal de entrega

2. **Historial**
   - Lista cronologica de presupuestos generados
   - Fecha, origen y estado
   - Acceso a descargas o links

3. **Suscripcion y Billing**
   - Plan activo
   - Presupuestos usados vs limite
   - Historial de consumos
   - Transparencia total para el usuario

---

## MVP Hypotheses

1. **Dolor real:**
   Mas del 60% de los trabajadores independientes pierde tiempo o dinero por no tener presupuestos editables generados desde audios.

2. **Valor diferencial:**
   La entrega del presupuesto en **Excel / Google Sheets** aumenta significativamente la percepcion de valor frente a un simple resumen en texto.

3. **Uso recurrente:**
   Un usuario activo generara al menos **4 presupuestos por mes**, validando recurrencia y retencion.

---

## Pricing Principles (MVP)

- Precio fijo, sin sorpresas
- Entrada freemium con limites claros
- IA incluida como commodity
- El valor esta en el archivo editable
- Menos opciones = menos friccion

---

**Nombre del producto:** BajaNumeros!
**Promesa central:** _"Del audio al Excel, sin perder un numero."_
