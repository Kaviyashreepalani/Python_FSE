# Hands-On 1: QA Concepts, Functional Testing & Defect Lifecycle

## Task 1: Map Testing Types to a Real System

### 1. Testing Levels for Course Management API

#### Unit Testing (Functional)
Test the `create_course()` function independently to verify that a new course is created correctly when valid input is provided.

**Expected Result:**
The function should return the correct course details.

---

#### Integration Testing (Functional)
Test the `POST /api/courses/` endpoint together with the database to ensure that course data is stored successfully.

**Expected Result:**
The API returns status code 201 and the course is saved in the database.

---

#### System Testing (Functional)
Create a course using the API and retrieve it using `GET /api/courses/` to verify the complete workflow.

**Expected Result:**
The created course appears in the course list with correct details.

---

#### User Acceptance Testing (Functional)
A college administrator creates a new course and verifies that students can view and enroll in it.

**Expected Result:**
The course is successfully created and available for enrollment.

---

### 2. Functional and Non-Functional Testing

| Testing Level | Classification |
|--------------|----------------|
| Unit Testing | Functional |
| Integration Testing | Functional |
| System Testing | Functional |
| User Acceptance Testing | Functional |

### Non-Functional Test Example

**Performance Testing:**

Verify that the Course Management API can handle 100 concurrent users and respond within 2 seconds.

---

### 3. Black-Box Testing vs White-Box Testing

| Black-Box Testing | White-Box Testing |
|------------------|------------------|
| Testing without knowledge of internal code. | Testing with knowledge of internal code and logic. |
| Focuses on inputs and outputs. | Focuses on code structure and execution paths. |
| Usually performed by QA testers. | Usually performed by developers. |

QA engineers typically perform **Black-Box Testing**, while developers perform **White-Box Testing**.

---

### 4. Formal Test Cases for POST /api/courses/

| Test Case ID | Description | Preconditions | Test Steps | Expected Result | Actual Result | Pass/Fail |
|-------------|-------------|---------------|-------------|----------------|--------------|-----------|
| TC_001 | Create course with valid data | API server is running | 1. Send a POST request with valid course details | Course is created successfully with status code 201 | | |
| TC_002 | Create course with missing course name | API server is running | 1. Send a POST request without the course name | Validation error with status code 400 | | |
| TC_003 | Create duplicate course | Course already exists in database | 1. Send a POST request with an existing course code | Error message indicating duplicate course | | |

---

## Task 2: Defect Lifecycle & Severity Classification

### 5. Defect Lifecycle

```text
New
 ↓
Assigned
 ↓
Open
 ↓
Fixed
 ↓
Retest
 ↓
Verified
 ↓
Closed
```

### Rejected Path
If the reported issue is not considered a valid defect, it is marked as **Rejected**.

### Deferred Path
If the defect is valid but scheduled for a future release, it is marked as **Deferred**.

---

### 6. Severity and Priority Classification

#### a) POST /api/courses/ returns 500 Internal Server Error for all requests

- Severity: Critical
- Priority: P1
- Justification: The main functionality is completely unavailable and must be fixed immediately.

---

#### b) Course names longer than 150 characters are silently truncated without an error

- Severity: Medium
- Priority: P3
- Justification: Data is affected, but the application continues to function.

---

#### c) The /docs Swagger page has a typo in the API description

- Severity: Low
- Priority: P4
- Justification: It is a cosmetic issue and does not affect system functionality.

---

#### d) Login with correct credentials occasionally returns 401 on the first attempt

- Severity: High
- Priority: P1
- Justification: Users cannot reliably access the system, and intermittent issues indicate possible instability.

---

### 7. Defect Report

**Defect ID:** BUG-001

**Title:** POST /api/courses/ returns 500 Internal Server Error

**Environment:** Windows 11, Python 3.12, FastAPI, MySQL

**Build Version:** v1.0.0

**Severity:** Critical

**Priority:** P1

**Steps to Reproduce:**
1. Start the API server.
2. Open Postman.
3. Send a POST request to `/api/courses/` with valid course data.
4. Observe the response.

**Expected Result:**
The course should be created successfully with status code 201.

**Actual Result:**
The API returns a 500 Internal Server Error.

**Attachments:**
Screenshot of 500 error.

---

### 8. Difference Between Severity and Priority

**Severity** refers to the impact of a defect on the system, whereas **Priority** refers to how quickly the defect should be fixed.

**Example:**

A spelling mistake on the CEO's dashboard has:

- Severity: Low (system functionality is not affected)
- Priority: High (it should be fixed immediately because important stakeholders see it)

This example shows that a defect can have **high priority but low severity**.