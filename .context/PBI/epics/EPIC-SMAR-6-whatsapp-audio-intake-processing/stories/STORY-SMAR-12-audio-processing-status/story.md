# As a user, I want to see audio processing status so that I know when to act

**Jira Key:** SMAR-12
**Epic:** SMAR-6 (MVP - WhatsApp Audio Intake and Processing)
**Priority:** High
**Story Points:** see Jira description
**Status:** To Do

---

## Context

After upload, users need clear visibility of job progress and final state to continue workflow.

## User Story

**As a** user
**I want to** see audio processing status

**So that** I know when to act

## Scope

### In Scope

- Query status by job ID.
- Return status and progress percentage.
- Return linked budget when ready.

### Out of Scope

- Push notifications.
- Cross-user job monitoring.

## Acceptance Criteria (Gherkin)

### Scenario 1: Status progression visible

- Given I have an existing audio job
- When I check job status
- Then I can see queued/processing/ready/error state
- And progress information if available

### Scenario 2: Ready state exposes budget reference

- Given my job completed successfully
- When I fetch status
- Then I receive ready status
- And a budget reference to open draft

### Scenario 3: Unauthorized access denied

- Given a job that is not mine
- When I request its status
- Then the system denies access
- And no foreign job data is leaked

## Story Points

3

## Business Rules

- Job status retrieval is owner-only.
- Status enum is constrained to queued, processing, ready, error.

## Workflow

- Client polls status endpoint.
- API validates ownership.
- API returns current status payload.
