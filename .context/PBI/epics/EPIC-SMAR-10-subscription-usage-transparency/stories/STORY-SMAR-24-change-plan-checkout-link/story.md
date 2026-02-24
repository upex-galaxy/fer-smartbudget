# As a user, I want to change plan and select payment method so that I can subscribe with a flexible checkout link

**Jira Key:** SMAR-24
**Epic:** SMAR-10 (MVP - Subscription and Usage Transparency)
**Priority:** High
**Story Points:** see Jira description
**Status:** To Do

---

## Context

Plan change must support user-selected payment method and checkout link generation for paid transitions.

## User Story

**As a** user
**I want to** change plan and select payment method
**So that** I can subscribe with a flexible checkout link

## Scope

### In Scope

- Validate plan transitions.
- Validate effective mode (immediate or next_cycle).
- Select payment method for paid plans.
- Create hosted checkout link and persist attempt status.

### Out of Scope

- Complex proration simulations.
- Enterprise contract billing.

## Acceptance Criteria (Gherkin)

### Scenario 1: Paid plan change returns checkout link

- Given I choose a valid paid target plan, effective mode, and payment method
- When I request plan change
- Then the system returns a checkout link with expiration
- And change state is tracked as pending payment

### Scenario 2: Invalid transition rejected

- Given my current plan and target plan are not a valid transition
- When I request plan change
- Then the request is rejected with clear reason

### Scenario 3: Free downgrade path without checkout

- Given I choose free plan as target
- When I request plan change
- Then the system applies free transition without payment checkout

## Story Points

5

## Business Rules

- Target plan must differ from current plan.
- Effective mode must be immediate or next_cycle.
- Payment method is required only for paid plans.
- Transition rules are centrally validated.

## Workflow

- User selects target plan, effective mode, and method.
- API validates transition, mode, and payment method.
- API creates checkout link if target plan is paid.
- API returns status and link metadata.

## Related Traceability

PRD: US 6.2 SRS: FR-017
