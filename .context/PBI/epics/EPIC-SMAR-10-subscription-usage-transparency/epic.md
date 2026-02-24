# MVP - Subscription and Usage Transparency

**Jira Key:** SMAR-10
**Status:** TO DO
**Priority:** HIGH
**Phase:** Retention and Revenue

---

## Epic Description

Implement plan visibility, plan change, and billing history to provide clear usage and payment transparency.

## Business Value

- Reduces confusion about limits and renewals.
- Enables self-serve upgrades with checkout links.
- Improves trust with visible invoice history.

---

## User Stories

1. **SMAR-23** - As a user, I want to view my active plan and monthly usage so that I can control limits without surprises.
2. **SMAR-24** - As a user, I want to change plan and select payment method so that I can subscribe with a flexible checkout link.
3. **SMAR-25** - As a user, I want to see billing history and receipts so that I have administrative clarity.

---

## Epic Acceptance Criteria

1. User can view current plan, usage, and remaining quota.
2. User can initiate plan change and obtain checkout link for paid plans.
3. User can view billing records and receipts.

---

## Related Functional Requirements

- FR-016, FR-017, FR-018

See: `.context/SRS/functional-specs.md`

---

## Related Documentation

- **PRD:** `.context/PRD/mvp-scope.md` (US 6.1-6.3)
- **SRS:** `.context/SRS/functional-specs.md`

---

## Dependencies

- Billing provider adapter and webhook sync.
