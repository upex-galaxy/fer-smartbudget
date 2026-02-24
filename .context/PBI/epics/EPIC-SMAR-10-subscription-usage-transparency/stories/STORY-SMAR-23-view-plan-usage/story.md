# As a user, I want to view my active plan and monthly usage so that I can control limits without surprises

**Jira Key:** SMAR-23
**Epic:** SMAR-10 (MVP - Subscription and Usage Transparency)
**Priority:** High
**Story Points:** see Jira description
**Status:** To Do

---

## Context

Users need transparent visibility of plan consumption to avoid unexpected blocks and costs.

## User Story

**As a** user
**I want to** view my active plan and monthly usage

**So that** I can control limits without surprises

## Scope

### In Scope

- Show plan name, quota limit, used, remaining, renewal date.
- Show preferred/default payment method when available.

### Out of Scope

- Predictive usage analytics.
- Team-level aggregated usage.

## Acceptance Criteria (Gherkin)

### Scenario 1: Usage summary visible

- Given I am authenticated
- When I open subscription/usage screen
- Then I see active plan, quota used, quota remaining, and renewal date

### Scenario 2: No data gracefully handled

- Given billing sync is temporarily unavailable
- When I open usage screen
- Then I see fallback/error state without app crash

### Scenario 3: Ownership isolation

- Given multiple users exist
- When I open usage screen
- Then I only see my own subscription data

## Story Points

3

## Business Rules

- Usage data must match billing/subscription source of truth.
- Access is owner-only.

## Workflow

- User opens subscription page.
- API fetches plan + usage counters.
- UI renders normalized summary.
