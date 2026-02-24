# As a user, I want to edit extracted budget fields so that I can correct errors before export

**Jira Key:** SMAR-15
**Epic:** SMAR-7 (MVP - Budget Structuring and Editing)
**Priority:** High
**Story Points:** see Jira description
**Status:** To Do

---

## Context

Manual correction is required when extraction is ambiguous or partially incorrect.

## User Story

**As a** user
**I want to** edit extracted budget fields

**So that** I can correct errors before export

## Scope

### In Scope

- Patch editable item fields.
- Recalculate totals after edits.
- Return validation messages for invalid updates.

### Out of Scope

- Bulk import from external sheets.
- Advanced formulas or custom calculation engines.

## Acceptance Criteria (Gherkin)

### Scenario 1: Valid edit recalculates totals

- Given I have an editable budget draft
- When I update quantity or unit price with valid values
- Then the system saves changes
- And totals are recalculated

### Scenario 2: Invalid values rejected

- Given I am editing budget items
- When I submit invalid values (for example, quantity is less than or equal to zero)
- Then the system rejects the update
- And I see field-level validation errors

### Scenario 3: Concurrent and ownership safety

- Given an invalid ownership context
- When I submit patch updates
- Then the system denies the operation
- And budget data remains unchanged

## Story Points

5

## Business Rules

- Quantity must be greater than zero.
- Unit price must be zero or more.
- Currency must be in the allowed enum.

## Workflow

- User edits one or more fields.
- API validates patch payload.
- API applies updates atomically.
- Totals are recalculated and returned.

## Related Traceability

PRD: US 3.2 SRS: FR-008
