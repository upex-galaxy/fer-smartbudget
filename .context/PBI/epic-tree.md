# Product Backlog - Epic Tree

## Overview

Total Epics: 6
Total User Stories: 18
Project Code: SMAR
Jira Project: SmartBudget (SMAR)

---

## Epic Hierarchy

### EPIC 1: User Authentication and Account Onboarding

**Jira Key:** SMAR-1
**Priority:** HIGH
**Description:** Access control, secure session handling, and onboarding preferences baseline.

**User Stories (3):**

1. SMAR-3 - As an independent worker, I want to sign up with email/password so that I can access the platform.
2. SMAR-4 - As a registered user, I want secure login/logout so that only I can access my budgets.
3. SMAR-2 - As an authenticated user, I want to view and update my settings preferences so that I can reduce repetitive steps in each new budget.

---

### EPIC 2: WhatsApp Audio Intake and Processing

**Jira Key:** SMAR-6
**Priority:** HIGH
**Description:** Upload audio jobs, status tracking, and retry support.

**User Stories (3):**

1. SMAR-11 - As a user, I want to upload WhatsApp exported audios so that I can convert conversations into budgets.
2. SMAR-12 - As a user, I want to see processing status so that I know when to act.
3. SMAR-13 - As a user, I want to retry failed processing jobs so that temporary errors do not block my work.

---

### EPIC 3: Budget Structuring and Editing

**Jira Key:** SMAR-7
**Priority:** HIGH
**Description:** Review, edit, and version extracted budget data.

**User Stories (3):**

1. SMAR-14 - As a user, I want to review extracted items so that I can validate accuracy.
2. SMAR-15 - As a user, I want to edit extracted fields so that I can correct errors.
3. SMAR-16 - As a user, I want to save budget versions so that I can preserve traceability.

---

### EPIC 4: Export and Delivery

**Jira Key:** SMAR-8
**Priority:** HIGH
**Description:** Export budgets and deliver them through channels.

**User Stories (3):**

1. SMAR-17 - As a user, I want to export to Excel so that I can share a standard file.
2. SMAR-18 - As a Pro+ user, I want to export to Google Sheets so that I can collaborate in real time.
3. SMAR-19 - As a user, I want to deliver by email or share link so that I can accelerate approvals.

---

### EPIC 5: History and Reuse

**Jira Key:** SMAR-9
**Priority:** MEDIUM
**Description:** History browsing, filtering, and duplication workflows.

**User Stories (3):**

1. SMAR-20 - As a user, I want chronological budget history so that I can recover past work quickly.
2. SMAR-21 - As a user, I want filters by date/status/supplier so that I can find relevant budgets.
3. SMAR-22 - As a user, I want to duplicate prior budgets so that I can save time.

---

### EPIC 6: Subscription and Usage Transparency

**Jira Key:** SMAR-10
**Priority:** HIGH
**Description:** Active plan visibility, plan change flow, and billing history.

**User Stories (3):**

1. SMAR-23 - As a user, I want to view active plan and usage so that I can avoid surprises.
2. SMAR-24 - As a user, I want to change plan and payment method so that I can subscribe with flexibility.
3. SMAR-25 - As a user, I want billing history and receipts so that I have administrative clarity.

---

## Epic Prioritization

### Sprint 1 - Foundation

1. Epic 1 - User Authentication and Account Onboarding
2. Epic 2 - WhatsApp Audio Intake and Processing (start)

### Sprint 2-3 - Core Features

1. Epic 3 - Budget Structuring and Editing
2. Epic 4 - Export and Delivery

### Sprint 4 - Retention and Revenue

1. Epic 5 - History and Reuse
2. Epic 6 - Subscription and Usage Transparency

---

## Notes

- Workspace `SMAR` uses fallback strategy in Jira `description` for custom fields not available in UPEX schema.
- Story to Epic linkage is implemented through `parent`.
