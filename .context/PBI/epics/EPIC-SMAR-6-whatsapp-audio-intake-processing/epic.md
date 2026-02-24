# MVP - WhatsApp Audio Intake and Processing

**Jira Key:** SMAR-6
**Status:** TO DO
**Priority:** HIGH
**Phase:** Foundation

---

## Epic Description

Implement the MVP pipeline to accept WhatsApp exported audio files, process them asynchronously, and expose processing status with retry controls.

## Business Value

- Converts unstructured voice agreements into processable inputs.
- Reduces uncertainty with clear job states.
- Prevents work loss through controlled retry flow.

---

## User Stories

1. **SMAR-11** - As a user, I want to upload WhatsApp exported audios so that I can convert conversations into budgets.
2. **SMAR-12** - As a user, I want to see audio processing status so that I know when to act.
3. **SMAR-13** - As a user, I want to retry failed processing jobs so that temporary errors do not block my work.

---

## Scope

### In Scope

- Audio upload validation and job creation.
- Job status tracking.
- Recoverable retry flow.

### Out of Scope

- WhatsApp API direct ingestion.
- Phone-call ingestion.

---

## Epic Acceptance Criteria

1. User can upload valid WhatsApp audio and receive a job ID.
2. User can track job status until completion or error.
3. User can retry recoverable failed jobs within retry policy.

---

## Related Functional Requirements

- FR-004, FR-005, FR-006

See: `.context/SRS/functional-specs.md`

---

## Related Documentation

- **PRD:** `.context/PRD/mvp-scope.md` (US 2.1-2.3)
- **SRS:** `.context/SRS/functional-specs.md`
- **Architecture:** `.context/SRS/architecture-specs.md`

---

## Dependencies

- Authenticated user context and quota checks.
- Storage + async worker pipeline.
