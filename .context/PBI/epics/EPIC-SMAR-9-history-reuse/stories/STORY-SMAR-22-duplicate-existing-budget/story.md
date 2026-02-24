# As a user, I want to duplicate an existing budget so that I can reuse a base and save time

**Jira Key:** SMAR-22
**Epic:** SMAR-9 (MVP - History and Reuse)
**Priority:** Medium
**Story Points:** see Jira description
**Status:** To Do

---

## Context

Duplication speeds up repeated jobs with similar budget structure.

## User Story

**As a** user
**I want to** duplicate an existing budget

**So that** I can reuse a base and save time

## Scope

### In Scope

- Duplicate budget header and line items.
- Create new draft linked to source budget.
- Optional new title support.

### Out of Scope

- Template marketplace.
- Cross-user duplication.

## Acceptance Criteria (Gherkin)

### Scenario 1: Budget duplicated successfully

- Given I own an existing budget
- When I request duplication
- Then the system creates a new draft budget
- And links it to the source reference

### Scenario 2: Source budget not found

- Given source budget does not exist or is inaccessible
- When I request duplication
- Then the system returns not found/forbidden response

### Scenario 3: Ownership enforcement

- Given a budget not owned by me
- When I attempt duplication
- Then duplication is denied
- And no new draft is created

## Story Points

3

## Business Rules

- Source budget must belong to requester.
- New budget starts in draft state.

## Workflow

- User triggers duplicate action.
- API validates source budget and ownership.
- API clones data and returns new budget ID.
