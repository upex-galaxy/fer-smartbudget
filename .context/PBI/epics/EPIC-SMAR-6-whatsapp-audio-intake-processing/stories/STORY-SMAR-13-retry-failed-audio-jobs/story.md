# As a user, I want to retry failed processing jobs so that temporary errors do not block my work

**Jira Key:** SMAR-13
**Epic:** SMAR-6 (MVP - WhatsApp Audio Intake and Processing)
**Priority:** High
**Story Points:** see Jira description
**Status:** To Do

---

## Context

Recoverable processing failures should not force users to restart from scratch.

## User Story

**As a** user
**I want to** retry failed processing jobs

**So that** temporary errors do not block my work

## Scope

### In Scope

- Retry action for recoverable failed jobs.
- Retry count tracking and max retry validation.
- Requeue job with updated state.

### Out of Scope

- Automatic infinite retries.
- Retry for non-recoverable policy violations.

## Acceptance Criteria (Gherkin)

### Scenario 1: Recoverable error can be retried

- Given my job is in recoverable error state
- When I trigger retry
- Then the system increments retry count
- And requeues the job

### Scenario 2: Retry limit enforced

- Given my job has reached max retries
- When I trigger retry again
- Then the system rejects retry
- And I see limit reached message

### Scenario 3: Non-owner retry denied

- Given a failed job not owned by me
- When I attempt retry
- Then the system denies the action
- And no state changes are applied

## Story Points

3

## Business Rules

- Max 3 retries per job.
- Only owner can retry.
- Retry allowed only for recoverable error states.

## Workflow

- User clicks retry on failed job.
- API validates ownership and retry eligibility.
- API updates retry count and queues job.
