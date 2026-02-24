# MVP - History and Reuse

**Jira Key:** SMAR-9
**Status:** TO DO
**Priority:** MEDIUM
**Phase:** Retention and Revenue

---

## Epic Description

Implement searchable budget history and duplication workflows to speed up recurring work.

## Business Value

- Reduces time to create similar budgets.
- Preserves operational memory and traceability.
- Improves user retention via practical reuse.

---

## User Stories

1. **SMAR-20** - As a user, I want to see chronological budget history so that I can recover past work quickly.
2. **SMAR-21** - As a user, I want to filter history by date, status, or supplier so that I can find relevant budgets.
3. **SMAR-22** - As a user, I want to duplicate an existing budget so that I can reuse a base and save time.

---

## Epic Acceptance Criteria

1. User can view paginated chronological budget history.
2. User can apply combined filters and get expected results.
3. User can duplicate a budget and continue editing new draft.

---

## Related Functional Requirements

- FR-013, FR-014, FR-015

See: `.context/SRS/functional-specs.md`

---

## Related Documentation

- **PRD:** `.context/PRD/mvp-scope.md` (US 5.1-5.3)
- **SRS:** `.context/SRS/functional-specs.md`

---

## Dependencies

- Budget persistence and ownership policies.
