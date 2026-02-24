# As a user, I want to see chronological budget history so that I can recover past work quickly

**Jira Key:** SMAR-20
**Epic:** SMAR-9 (MVP - History and Reuse)
**Priority:** Medium
**Story Points:** see Jira description
**Status:** To Do

---

## Context

Users need fast retrieval of previous budgets for operational continuity.

## User Story

**As a** user
**I want to** see chronological budget history

**So that** I can recover past work quickly

## Scope

### In Scope

- Paginated budget history list.
- Sort by creation date descending.
- Show core metadata (status, totals, date).

### Out of Scope

- Cross-user/global histories.
- Advanced timeline analytics.

## Acceptance Criteria (Gherkin)

### Scenario 1: Chronological history list

- Given I have multiple budgets
- When I open history
- Then I see budgets sorted by newest first
- And pagination metadata is returned

### Scenario 2: Empty history state

- Given I have no budgets yet
- When I open history
- Then I see a clear empty state
- And no errors are shown

### Scenario 3: Ownership isolation

- Given budgets belong to different users
- When I open my history
- Then I only see my own budgets

## Story Points

3

## Business Rules

- History endpoint is owner-scoped.
- Pagination bounds must be validated.

## Workflow

- User opens history page.
- API applies owner filter + sorting.
- API returns paginated results.
