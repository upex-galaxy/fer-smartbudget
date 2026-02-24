# MVP - Export and Delivery

**Jira Key:** SMAR-8
**Status:** TO DO
**Priority:** HIGH
**Phase:** Core Features

---

## Epic Description

Implement export outputs and delivery channels so users can share budgets quickly after validation.

## Business Value

- Turns edited budgets into reusable/shareable artifacts.
- Supports plan-based value differentiation (Excel vs Sheets).
- Accelerates approvals through direct delivery channels.

---

## User Stories

1. **SMAR-17** - As a user, I want to export a budget to Excel so that I can share and edit it in a standard format.
2. **SMAR-18** - As a Pro+ user, I want to export budgets to Google Sheets so that I can collaborate in real time.
3. **SMAR-19** - As a user, I want to deliver budgets by email or shareable link so that I can accelerate approvals.

---

## Epic Acceptance Criteria

1. User can export to Excel successfully.
2. Plan-eligible users can export to Google Sheets; ineligible users see clear gate.
3. User can deliver via email or share link with traceable result.

---

## Related Functional Requirements

- FR-010, FR-011, FR-012

See: `.context/SRS/functional-specs.md`

---

## Related Documentation

- **PRD:** `.context/PRD/mvp-scope.md` (US 4.1-4.3)
- **SRS:** `.context/SRS/functional-specs.md`

---

## Dependencies

- Budget draft/versions available.
- External providers for Sheets/email.
