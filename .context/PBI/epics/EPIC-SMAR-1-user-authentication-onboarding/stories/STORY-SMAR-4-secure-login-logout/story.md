# As a registered user, I want secure login and logout so that only I can access my budgets

**Jira Key:** SMAR-4
**Epic:** SMAR-1 (MVP - User Authentication and Account Onboarding)
**Priority:** High
**Story Points:** see Jira description
**Status:** To Do

---

## Context

Secure session entry/exit is required to protect budget data and private modules, aligned with FR-002 and middleware-protected routes.

## User Story

**As a** registered user
**I want to** log in and log out securely
**So that** only I can access my budgets

## Scope

### In Scope

- Login with valid email/password.
- Logout that invalidates session.
- Redirect behavior for protected/private routes.

### Out of Scope

- MFA.
- Remember-device advanced flows.

## Acceptance Criteria (Gherkin)

### Scenario 1: Successful login to protected area

- Given I have a registered account
- When I submit valid credentials in login
- Then the system authenticates me
- And I can access protected routes

### Scenario 2: Invalid credentials rejected

- Given I am on the login page
- When I submit invalid credentials
- Then the system rejects authentication
- And I see an unauthorized message

### Scenario 3: Logout ends session

- Given I am authenticated
- When I click logout
- Then my session is invalidated
- And I am redirected to `/login`
- And protected routes are no longer accessible

## Story Points

3

## Business Rules

- Authenticated routes require valid active session.
- Logout must invalidate session and tokens.

## Workflow

- User submits login form.
- Backend authenticates and issues session.
- User navigates protected pages.
- User logs out.
- Session is revoked and access is blocked.

## Technical Notes

### Frontend

- Login/logout UI with error handling and redirect support.

### Backend

- Session issue and revocation aligned with FR-002.

### Security

- Enforce route protection via SSR middleware and auth validation.
