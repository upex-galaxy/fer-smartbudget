# As an authenticated user, I want to view and update my settings preferences so that I can reduce repetitive steps in each new budget

**Jira Key:** SMAR-2
**Epic:** SMAR-1 (MVP - User Authentication and Account Onboarding)
**Priority:** High
**Story Points:** see Jira description
**Status:** To Do

---

## Context

The MVP requires a real `/settings` flow connected to `user_profiles` so users can persist default output format, delivery channel, and preferred currency.

## User Story

**As a** authenticated user
**I want to** view and update my settings preferences
**So that** I can reduce repetitive steps in each new budget

## Scope

### In Scope

- Read current preferences from `user_profiles`.
- Update allowed preference values with validation.
- Show success/error feedback in `/settings`.

### Out of Scope

- Plan upgrade UI.
- Multi-user or organization-wide settings.

## Acceptance Criteria (Gherkin)

### Scenario 1: Load existing preferences

- Given I am authenticated
- When I open `/settings`
- Then I see my current output format, delivery channel, and preferred currency

### Scenario 2: Save valid preferences

- Given I am on `/settings`
- When I submit valid preference values
- Then the system persists them in `user_profiles`
- And I see a success confirmation

### Scenario 3: Reject invalid options

- Given I am on `/settings`
- When I submit a value outside the allowed enums
- Then the system rejects the update
- And I see a clear validation message

## Story Points

3

## Business Rules

- Preferences are user-specific and must follow owner-only access.
- Allowed values must respect enum constraints and plan restrictions where applicable.

## Workflow

- GET current preferences.
- User edits values in settings form.
- PUT updates and show result state.

## Mockup / Design

Reuse existing app design system and current `/settings` UI shell.

## Dependencies

### Blocked By

- https://fermasci.atlassian.net/browse/SMAR-1#icft=SMAR-1

### Blocks

- Follow-up onboarding and export defaults stories.

## Technical Notes

### Frontend

- `/settings` form bound to current profile values.

### Backend

- Use existing profile preferences API contract from SRS.

### Database

- `user_profiles` read/update with RLS own-select/own-update.
