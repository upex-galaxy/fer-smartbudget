# As an independent worker, I want to sign up with email and password so that I can create my account and start using the platform

**Jira Key:** SMAR-3
**Epic:** SMAR-1 (MVP - User Authentication and Account Onboarding)
**Priority:** High
**Story Points:** see Jira description
**Status:** To Do

---

## Context

User onboarding starts with account creation using email/password, aligned with FR-001 and MVP Epic 1.

## User Story

**As a** independent worker
**I want to** sign up with email and password
**So that** I can create my account and start using the platform

## Scope

### In Scope

- Registration form with email/password.
- Basic validations (email format, password length, non-empty values).
- Create account through auth provider and initialize user profile.

### Out of Scope

- Social login / SSO.
- Advanced password policy beyond MVP baseline.

## Acceptance Criteria (Gherkin)

### Scenario 1: Successful registration

- Given I am on the sign up page
- When I submit a valid email and password
- Then the system creates my account
- And I can proceed to authenticated app access

### Scenario 2: Duplicate email rejected

- Given an account already exists with my email
- When I submit the same email in sign up
- Then the system rejects the request
- And I see a clear message that the email is already in use

### Scenario 3: Invalid payload rejected

- Given I am on the sign up page
- When I submit invalid email format or password shorter than 8 chars
- Then the system rejects the request
- And I see field-level validation errors

## Story Points

3

## Business Rules

- Email must be unique.
- Password must be at least 8 characters.
- User profile initialization is required after account creation.

## Workflow

- User opens sign up.
- User submits credentials.
- Backend validates and creates auth user.
- Backend initializes user profile.
- UI confirms result.

## Technical Notes

### Frontend

- Sign up form with validation feedback and loading states.

### Backend

- Registration endpoint aligned with FR-001.

### Database

- Ensure profile row creation in `user_profiles` for new user.
