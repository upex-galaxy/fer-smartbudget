# As a user, I want to see billing history and receipts so that I have administrative clarity

**Jira Key:** SMAR-25
**Epic:** SMAR-10 (MVP - Subscription and Usage Transparency)
**Priority:** High
**Story Points:** see Jira description
**Status:** To Do

---

## Context

Users need invoice traceability for accounting and payment verification.

## User Story

**As a** user
**I want to** see billing history and receipts

**So that** I have administrative clarity

## Scope

### In Scope

- Paginated invoice history list.
- Display amount, currency, status, issued date, receipt URL.
- Normalize provider statuses.

### Out of Scope

- Tax report generation.
- Full accounting integrations.

## Acceptance Criteria (Gherkin)

### Scenario 1: Invoice history visible

- Given I have billing records
- When I open billing history
- Then I see normalized invoice entries with receipt links when available

### Scenario 2: Empty billing history

- Given I have no invoices yet
- When I open billing history
- Then I see an empty state without errors

### Scenario 3: Access isolation

- Given other users have invoices
- When I open billing history
- Then I only see my own records

## Story Points

3

## Business Rules

- Invoice access is owner-only.
- Provider statuses must be normalized before display.

## Workflow

- User opens billing history.
- API fetches provider invoices.
- API normalizes records and returns paginated response.
