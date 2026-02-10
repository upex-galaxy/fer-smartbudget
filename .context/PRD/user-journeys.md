# BajaNumeros! - User Journeys (MVP)

## Journey 1: Registro y primer presupuesto (Happy Path)

- **Persona:** Ramon Quiroga (Contratista de obra)
- **Scenario:** Ramon recibe un audio de WhatsApp con acuerdos de materiales y necesita enviar presupuesto el mismo dia.

### Steps

**Step 1**

- **User Action:** Se registra con email/password y confirma cuenta.
- **System Response:** Crea usuario, inicia sesion y muestra onboarding breve.
- **Pain Point:** Si la confirmacion tarda o no llega, puede abandonar.

**Step 2**

- **User Action:** Configura preferencias (Excel como formato, email como canal principal).
- **System Response:** Guarda preferencias en perfil y deja atajos para nuevo presupuesto.
- **Pain Point:** Demasiadas opciones en onboarding aumentan friccion.

**Step 3**

- **User Action:** Sube audio exportado de WhatsApp.
- **System Response:** Crea job de procesamiento y muestra estado "procesando".
- **Pain Point:** Si no hay feedback de progreso, percibe que fallo.

**Step 4**

- **User Action:** Abre el borrador generado y revisa items extraidos.
- **System Response:** Presenta lineas con descripcion, cantidad, precio, moneda y proveedor.
- **Pain Point:** Campos ambiguos requieren edicion manual.

**Step 5**

- **User Action:** Corrige dos lineas, guarda version y exporta a Excel.
- **System Response:** Genera archivo, registra evento en historial y permite descarga/envio.
- **Pain Point:** Si export falla sin explicacion, pierde confianza.

- **Expected Outcome:** Ramon obtiene presupuesto editable en menos de 20 minutos y lo envia a cliente.

### Alternative Paths / Edge Cases

- Que pasa si el audio tiene mala calidad?
  - El sistema marca "baja confianza", sugiere revisar campos criticos y permite reintento.
- Que pasa si supera limite del plan?
  - Se bloquea nuevo procesamiento, muestra consumo y CTA para upgrade.

---

## Journey 2: Error de extraccion y correccion asistida (Edge Case 1)

- **Persona:** Lucia Benitez (Arquitecta independiente)
- **Scenario:** Lucia carga audio con varios proveedores y detecta moneda mal inferida en parte del presupuesto.

### Steps

**Step 1**

- **User Action:** Sube audio de WhatsApp con multiples acuerdos.
- **System Response:** Procesa y genera borrador con advertencias de baja confianza en 3 campos.
- **Pain Point:** Sin indicadores de confianza, no sabria donde revisar primero.

**Step 2**

- **User Action:** Filtra por campos con warning y corrige moneda y cantidad.
- **System Response:** Recalcula subtotales y total general en tiempo real.
- **Pain Point:** Si no recalcula de inmediato, no confia en el total.

**Step 3**

- **User Action:** Guarda version "v2 corregida".
- **System Response:** Mantiene version anterior para comparacion y auditoria.
- **Pain Point:** Sin versionado, no puede justificar cambios al cliente.

**Step 4**

- **User Action:** Exporta a Google Sheets para coedicion interna.
- **System Response:** Crea documento y guarda link en historial.
- **Pain Point:** Si no tiene permisos de plan, requiere mensaje claro y opcion de upgrade.

- **Expected Outcome:** Lucia corrige errores rapidamente sin reconstruir presupuesto desde cero.

### Alternative Paths / Edge Cases

- Que pasa si falla integracion con Google Sheets?
  - El sistema ofrece fallback inmediato a Excel y deja evento de error trazable.
- Que pasa si edita campos invalidos (cantidad negativa)?
  - Validacion bloquea guardado y muestra mensaje accionable por campo.

---

## Journey 3: Reuso de historial y control de consumo (Edge Case 2)

- **Persona:** Diego Ferreyra (Maestro mayor de obra)
- **Scenario:** Diego necesita rehacer un presupuesto similar al de la semana pasada y esta cerca del limite mensual.

### Steps

**Step 1**

- **User Action:** Entra a historial y filtra por proveedor + fecha.
- **System Response:** Lista presupuestos relevantes con estado, fecha y links.
- **Pain Point:** Si filtros son lentos, pierde tiempo en obra.

**Step 2**

- **User Action:** Duplica un presupuesto anterior para reutilizar estructura.
- **System Response:** Crea nuevo borrador con referencia al original.
- **Pain Point:** Sin trazabilidad, puede confundir original vs copia.

**Step 3**

- **User Action:** Sube nuevo audio para actualizar precios.
- **System Response:** Informa que queda 1 procesamiento disponible en plan actual.
- **Pain Point:** Si el consumo no es visible, siente que hay costos sorpresa.

**Step 4**

- **User Action:** Agota cupo y vuelve a intentar otra carga.
- **System Response:** Bloquea procesamiento adicional y ofrece upgrade contextual.
- **Pain Point:** Si bloqueo no explica causa, percibe falla tecnica en vez de limite.

- **Expected Outcome:** Diego reutiliza trabajo previo, evita retrabajo y comprende claramente su estado de plan.

### Alternative Paths / Edge Cases

- Que pasa si intenta acceder a presupuesto de otro usuario?
  - RLS + autorizacion retornan 404/403 sin fuga de datos.
- Que pasa si el job queda en timeout?
  - Estado pasa a "error recuperable" y habilita retry con mensaje claro.
