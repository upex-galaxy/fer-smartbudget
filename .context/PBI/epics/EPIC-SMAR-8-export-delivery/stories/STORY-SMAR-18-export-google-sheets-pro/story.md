# As a Pro+ user, I want to export budgets to Google Sheets so that I can collaborate in real time

**Jira Key:** SMAR-18
**Epic:** SMAR-8 (MVP - Export and Delivery)
**Priority:** High
**Story Points:** see Jira description
**Status:** To Do

---

## Context

Google Sheets export is a gated premium capability tied to plan eligibility.

## User Story

**As a** Pro+ user
**I want to** export budgets to Google Sheets

**So that** I can collaborate in real time

## Scope

### In Scope

- Validate plan eligibility for Sheets export.
- Create/update Google Sheets document.
- Return sheet URL and store external reference.

### Out of Scope

- Fine-grained Sheets permission management.
- Offline synchronization.

## Acceptance Criteria (Gherkin)

### Scenario 1: Eligible plan export succeeds

- Given I have a Pro+ plan and an exportable budget
- When I request Google Sheets export
- Then the system creates/updates a sheet
- And I receive a valid sheet URL

### Scenario 2: Ineligible plan blocked

- Given I do not have a Pro+ plan
- When I request Google Sheets export
- Then the system rejects the request
- And I see a clear plan-upgrade message

### Scenario 3: Integration failure fallback

- Given Sheets integration fails transiently
- When I request export
- Then the system returns integration error state
- And I can still use Excel export path

## Story Points

5

## Business Rules

- Sheets export is limited to plan Pro/Profesional.
- Export action is owner-only.

## Workflow

- User requests Sheets export.
- API validates plan and ownership.
- API executes Sheets integration.
- URL/external ID are stored and returned.
