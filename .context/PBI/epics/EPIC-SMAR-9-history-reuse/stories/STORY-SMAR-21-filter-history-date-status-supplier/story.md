# As a user, I want to filter history by date, status, or supplier so that I can find relevant budgets

**Jira Key:** SMAR-21
**Epic:** SMAR-9 (MVP - History and Reuse)
**Priority:** Medium
**Story Points:** see Jira description
**Status:** To Do

---

## Context

Filtering is required to quickly locate relevant records in growing history.

## User Story

**As a** user
**I want to** filter history by date, status, or supplier

**So that** I can find relevant budgets

## Scope

### In Scope

- Date range filter.
- Status filter.
- Supplier text filter.
- Combined filter support.

### Out of Scope

- Full-text search across all fields.
- Saved custom filter presets.

## Acceptance Criteria (Gherkin)

### Scenario 1: Combined filters return expected set

- Given I have budget history records
- When I apply date, status, and supplier filters
- Then the system returns only matching results

### Scenario 2: Invalid date range rejected

- Given I set date_from greater than date_to
- When I apply filters
- Then the system rejects the request
- And I see validation feedback

### Scenario 3: Filter ownership safety

- Given records from other users exist
- When I apply filters
- Then results remain limited to my own budgets

## Story Points

3

## Business Rules

- date_from must be <= date_to.
- status must be allowed enum.
- Filters are combinable and owner-scoped.

## Workflow

- User sets filters.
- API validates query params.
- API returns filtered paginated list.
