# MVP - Budget Structuring and Editing

**Jira Key:** SMAR-7
**Status:** TO DO
**Priority:** HIGH
**Phase:** Core Features

---

## Epic Description

Implement the core budget workspace where extracted line items are reviewed, corrected, and versioned before export.

## Business Value

- Improves trust in extracted numbers through editable review.
- Reduces rework by preserving versions and traceability.
- Enables professional output readiness.

---

## User Stories

1. **SMAR-14** - As a user, I want to review extracted items so that I can validate budget accuracy before sending.
2. **SMAR-15** - As a user, I want to edit extracted budget fields so that I can correct errors before export.
3. **SMAR-16** - As a user, I want to save budget versions so that I can compare changes and keep traceability.

---

## Epic Acceptance Criteria

1. User can view structured draft with required fields.
2. User can edit items and see recalculated totals.
3. User can save and identify multiple versions.

---

## Related Functional Requirements

- FR-007, FR-008, FR-009

See: `.context/SRS/functional-specs.md`

---

## Related Documentation

- **PRD:** `.context/PRD/mvp-scope.md` (US 3.1-3.3)
- **SRS:** `.context/SRS/functional-specs.md`
- **Architecture:** `.context/SRS/architecture-specs.md`

---

## Dependencies

- Completed audio jobs producing budget draft.
- Owner-only data access controls.
