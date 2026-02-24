# As a user, I want to upload WhatsApp exported audios so that I can convert conversations into budgets

**Jira Key:** SMAR-11
**Epic:** SMAR-6 (MVP - WhatsApp Audio Intake and Processing)
**Priority:** High
**Story Points:** see Jira description
**Status:** To Do

---

## Context

MVP intake starts with WhatsApp exported audio files and creates asynchronous processing jobs.

## User Story

**As a** user
**I want to** upload WhatsApp exported audios

**So that** I can convert conversations into budgets

## Scope

### In Scope

- Upload supported audio formats.
- Validate file size and type.
- Create queued audio job with metadata.

### Out of Scope

- Direct WhatsApp API integration.
- Non-audio multimodal uploads.

## Acceptance Criteria (Gherkin)

### Scenario 1: Valid upload accepted

- Given I am authenticated
- When I upload a valid WhatsApp audio within size limits
- Then the system creates an audio job in queued state
- And I receive job reference info

### Scenario 2: Invalid format rejected

- Given I am authenticated
- When I upload a non-supported file format
- Then the system rejects the upload
- And I see an actionable validation error

### Scenario 3: Limit exceeded blocked

- Given I am authenticated
- When I exceed file size or plan quota limits
- Then the upload request is blocked
- And I see the corresponding reason

## Story Points

5

## Business Rules

- Allowed formats: ogg, opus, mp3, m4a, wav.
- File max size: 25 MB.
- Quota validation runs before enqueuing.

## Workflow

- User selects audio file.
- API validates payload and plan limits.
- Storage metadata is persisted.
- Audio job is enqueued as queued.
