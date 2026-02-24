# MVP - User Authentication and Account Onboarding

**Jira Key:** SMAR-1
**Status:** TO DO
**Priority:** HIGH
**Phase:** Foundation

---

## Epic Description

Implement the MVP foundation for user identity and account setup so independent workers can access BajaNumeros securely and configure initial preferences before generating budgets.

This epic covers sign-up/sign-in/sign-out flows and first-time settings that reduce friction in subsequent budget creation sessions.

## Business Value

- Enables secure per-user ownership required by RLS and protected modules.
- Reduces onboarding friction by persisting default output and delivery preferences.
- Establishes the baseline needed for all downstream MVP features.

---

## User Stories

1. **SMAR-3** - As an independent worker, I want to sign up with email/password so that I can access the platform.
2. **SMAR-4** - As a registered user, I want secure login/logout so that only I can access my budgets.
3. **SMAR-2** - As an authenticated user, I want to view and update my settings preferences so that I can reduce repetitive steps in each new budget.

---

## Scope

### In Scope

- Registration with email/password.
- Secure login/logout session flow.
- Initial preferences persistence in `user_profiles`.

### Out of Scope

- SSO providers (Google, Microsoft, Apple).
- Organization/team account management.

---

## Epic Acceptance Criteria

1. Users can create accounts and authenticate with secure sessions.
2. Protected routes deny unauthenticated access.
3. Users can persist and retrieve preferences for output/delivery/currency.

---

## Related Functional Requirements

- FR-001, FR-002, FR-003

See: `.context/SRS/functional-specs.md`

---

## Dependencies

- Supabase Auth and SSR middleware are available.
- `user_profiles` table with owner policies is active.

---

## Risks

- Misconfigured auth redirects can increase onboarding drop-off.
- Preference validation may differ by plan constraints.

---

## Related Documentation

- **PRD:** `.context/PRD/mvp-scope.md`
- **SRS:** `.context/SRS/functional-specs.md`
- **Architecture:** `.context/SRS/architecture-specs.md`
