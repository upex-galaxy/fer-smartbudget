# As a user, I want to review extracted items so that I can validate budget accuracy before sending

**Jira Key:** SMAR-14
**Epic:** SMAR-7 (MVP - Budget Structuring and Editing)
**Priority:** High
**Story Points:** see Jira description
**Status:** To Do

---

## Context

Users must review extracted fields before edits/exports to avoid pricing mistakes.

## User Story

**As a** user
**I want to** review extracted items

**So that** I can validate budget accuracy before sending

## Scope

### In Scope

- Display extracted line items with description, quantity, unit price, currency, supplier.
- Display total/subtotal and confidence indicators.
- Open draft by budget ID.

### Out of Scope

- Automatic correction recommendations.
- Approval workflow with external reviewers.

## Acceptance Criteria (Gherkin)

### Scenario 1: Draft detail displayed

- Given a completed processing job with budget draft
- When I open budget detail
- Then I see extracted items and required fields
- And I see computed subtotal/total

### Scenario 2: Confidence flags visible

- Given extracted fields include low-confidence values
- When I view draft detail
- Then low-confidence indicators are shown for affected fields

### Scenario 3: Unauthorized access blocked

- Given a budget not owned by me
- When I try to access it
- Then access is denied
- And no foreign data is exposed

## Story Points

5

## Business Rules

- Budget detail retrieval is owner-only.
- Budget item schema must include required core fields.

## Workflow

- User opens draft detail.
- API validates ownership.
- API returns structured items and confidence data.
