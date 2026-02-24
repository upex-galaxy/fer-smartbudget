# As a user, I want to export a budget to Excel so that I can share and edit it in a standard format

**Jira Key:** SMAR-17
**Epic:** SMAR-8 (MVP - Export and Delivery)
**Priority:** High
**Story Points:** see Jira description
**Status:** To Do

---

## Context

Excel export is the baseline output available for MVP users.

## User Story

**As a** user
**I want to** export a budget to Excel

**So that** I can share and edit it in a standard format

## Scope

### In Scope

- Generate XLSX file from exportable budget.
- Return secure file URL and metadata.
- Record export event in history.

### Out of Scope

- Custom template designer.
- Batch export of multiple budgets.

## Acceptance Criteria (Gherkin)

### Scenario 1: Export succeeds for eligible budget

- Given I have an exportable budget
- When I request Excel export
- Then the system generates an XLSX file
- And I receive a downloadable file URL

### Scenario 2: Invalid budget state rejected

- Given a budget in non-exportable state
- When I request Excel export
- Then the system rejects the request
- And I see a clear validation reason

### Scenario 3: Ownership enforcement

- Given a budget not owned by me
- When I request export
- Then access is denied
- And no artifact is generated for me

## Story Points

3

## Business Rules

- Only exportable budgets can be exported.
- Export is owner-only.
- Generated URLs must expire.

## Workflow

- User clicks export Excel.
- API validates budget and ownership.
- Export artifact is generated and stored.
- Metadata is returned and recorded.
