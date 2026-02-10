# BajaNumeros! - Executive Summary (MVP)

## 1) Problem Statement

Independent workers who operate outside an office (architects, contractors, foremen, master builders) manage price agreements through WhatsApp voice notes and calls. This keeps critical numbers in unstructured conversations, where details are easily lost, misunderstood, or hard to retrieve later.

The operational break happens when those agreements must become reusable budgets. Today that conversion is manual: replay audio, retype figures, rebuild line items, and correct errors. This creates delays, rework, and trust issues with clients and suppliers.

For this segment, the main pain is not communication itself, but the lack of a fast way to convert spoken agreements into editable, shareable, and auditable budget files.

## 2) Solution Overview (MVP)

BajaNumeros! delivers a WhatsApp-audio-first workflow that turns voice notes into structured budgets ready to edit and send.

- Audio intake from WhatsApp exports/uploads with processing status tracking.
- Automatic extraction of items, quantities, prices, currency, and suppliers.
- Editable budget workspace with versioning and correction before delivery.
- Export to Excel (all plans) and Google Sheets (Pro+ plans).
- Web app modules for configuration, history, and subscription/usage transparency.

How this solves the problem:

- Removes manual recapture from audio to spreadsheet.
- Reduces pricing mistakes and ambiguity through structured line items.
- Preserves a reusable budget history with searchable records.
- Keeps the user in their current behavior (WhatsApp audio) while improving output quality.

## 3) Success Metrics (MVP)

### Adoption KPIs

- Activation rate >= 35%: new signups that generate first budget within 48 hours.
- Onboarding completion >= 70%: users who finish setup (output + delivery preferences).

### Engagement KPIs

- Monthly active budget creators >= 45% of activated users (free + paid).
- Budget generation frequency >= 4 budgets per active user per month.
- Median time from audio upload to first editable budget <= 20 minutes.

### Business KPIs

- Free-to-paid conversion >= 12% by day 30 from activated free cohort.
- Plan Pro mix >= 45% of paying base by month 3.
- Variable processing cost <= USD 4 per active user per month.
- Gross margin positive on Plan Pro cohort by month 3.

## 4) Target Users (brief)

- **Ramon, Contratista de obra**
  - Runs multiple small jobs in parallel and coordinates mostly through WhatsApp audio.
  - **Main pain:** loses numbers and spends nights reconstructing budgets manually.

- **Lucia, Arquitecta independiente**
  - Sends professional proposals to clients and needs clean, editable budget documents.
  - **Main pain:** audio agreements are hard to convert into presentable files quickly.

- **Diego, Maestro mayor de obra**
  - Works with suppliers and subcontractors and needs version control of changing prices.
  - **Main pain:** no simple history to compare revisions and avoid disputes.

## Scope Assumption Confirmed

- MVP technical scope includes **WhatsApp audio only** for intake.
- Traditional phone call ingestion is intentionally deferred to v2+.
