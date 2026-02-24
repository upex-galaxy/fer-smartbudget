# As a user, I want to save budget versions so that I can compare changes and keep traceability

**Jira Key:** SMAR-16
**Epic:** SMAR-7 (MVP - Budget Structuring and Editing)
**Priority:** High
**Story Points:** see Jira description
**Status:** To Do

---

## Context

Versioning is needed to preserve change history and justify price adjustments.

## User Story

**As a** user
**I want to** save budget versions

**So that** I can compare changes and keep traceability

## Scope

### In Scope

- Save snapshot with version label.
- Increment version number.
- Keep linkage to previous versions.

### Out of Scope

- Visual diff UI between versions.
- Branch/merge collaboration.

## Acceptance Criteria (Gherkin)

### Scenario 1: New version saved

- Given I have a budget draft with current edits
- When I save a version with a valid label
- Then a new version snapshot is created
- And version number increases sequentially

### Scenario 2: Missing label rejected

- Given I attempt to save a version
- When version label is empty
- Then the system rejects the request
- And I see validation feedback

### Scenario 3: Ownership enforced

- Given a budget not owned by me
- When I attempt to save a version
- Then access is denied
- And no snapshot is created

## Story Points

3

## Business Rules

- version_label is required.
- Version numbers are sequential per budget.
- Snapshots are immutable once created.

## Workflow

- User submits save-version action.
- API validates label and ownership.
- API persists snapshot and returns new version metadata.
