# As a user, I want to deliver budgets by email or shareable link so that I can accelerate approvals

**Jira Key:** SMAR-19
**Epic:** SMAR-8 (MVP - Export and Delivery)
**Priority:** High
**Story Points:** see Jira description
**Status:** To Do

---

## Context

After export, users need direct delivery channels to speed communication with clients and stakeholders.

## User Story

**As a** user
**I want to** deliver budgets by email or shareable link

**So that** I can accelerate approvals

## Scope

### In Scope

- Delivery channel selection (email, share_link).
- Email target validation.
- Share link generation with expiration.
- Delivery event persistence.

### Out of Scope

- WhatsApp native send integration.
- Delivery analytics dashboards.

## Acceptance Criteria (Gherkin)

### Scenario 1: Email delivery succeeds

- Given I have a valid exported artifact
- When I select email delivery with valid recipient list
- Then the system queues/sends delivery
- And I receive delivery status confirmation

### Scenario 2: Share link delivery succeeds

- Given I have a valid exported artifact
- When I select share link delivery
- Then the system generates signed link with expiration
- And I receive link details

### Scenario 3: Invalid recipients rejected

- Given I choose email delivery
- When recipient emails are invalid
- Then the system rejects the request
- And I see validation feedback

## Story Points

3

## Business Rules

- Email channel requires valid recipient list.
- Share links must be signed and expiring.
- Delivery is owner-only and auditable.

## Workflow

- User chooses delivery channel.
- API validates payload and export state.
- Delivery is executed and event recorded.
