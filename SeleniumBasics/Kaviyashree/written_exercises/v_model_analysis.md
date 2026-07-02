# Hands-On 2: SDLC vs TDLC — V-Model & Agile QA Integration

## Task 1: V-Model Mapping

### 9. V-Model Diagram

```text
Development Phase                    Testing Phase

Requirements ---------------------> Acceptance Testing

System Design --------------------> System Testing

Architecture Design -------------> Integration Testing

Module Design -------------------> Unit Testing

               Coding
```

---

### 10. SDLC ↔ TDLC Mapping and Test Artifacts

| SDLC Phase | TDLC Phase | Test Artifact Produced |
|------------|-------------|------------------------|
| Requirements | Acceptance Testing | Acceptance Test Plan |
| System Design | System Testing | System Test Cases |
| Architecture Design | Integration Testing | Integration Test Plan |
| Module Design | Unit Testing | Unit Test Cases |
| Coding | Execution of Tests | Source Code and Test Execution Reports |

---

### 11. Entry and Exit Criteria

#### Unit Testing

**Entry Criteria:**
- Module design completed
- Source code developed
- Unit test cases prepared

**Exit Criteria:**
- All unit tests executed
- No critical defects remain
- Code coverage targets achieved

---

#### Integration Testing

**Entry Criteria:**
- Unit testing completed successfully
- Integrated modules available
- Integration test cases prepared

**Exit Criteria:**
- All integration test cases executed
- No major defects remain
- Interfaces work correctly

---

#### System Testing

**Entry Criteria:**
- Complete system is integrated
- System test plan approved
- Test environment is ready

**Exit Criteria:**
- All system test cases passed
- No open critical or high-priority defects
- Functional requirements are satisfied

---

#### Acceptance Testing

**Entry Criteria:**
- System testing completed
- UAT environment available
- Acceptance criteria approved

**Exit Criteria:**
- Users approve the application
- Business requirements are met
- Product is ready for release

---

### 12. Early QA Engagement Points

#### Requirements Phase
QA should participate in requirement reviews to identify ambiguities, missing requirements, and ensure requirements are testable.

#### Design Phase
QA should review system and architecture designs to prepare test strategies and identify potential risks before development begins.

---

## Task 2: Agile QA and Shift-Left Testing

### 13. Problems with Waterfall Testing

#### Problem 1: Late Defect Detection
Bugs are discovered only after development is completed, increasing fixing costs.

#### Problem 2: Requirement Misunderstandings
If requirements are misunderstood, the issue may only be found during testing, causing delays.

#### Problem 3: Limited User Feedback
Users cannot provide feedback until the end of development, leading to possible dissatisfaction.

---

### 14. QA Role in Agile Ceremonies

| Agile Ceremony | QA Responsibilities |
|----------------|--------------------|
| Sprint Planning | Define acceptance criteria and estimate testing effort |
| Daily Standup | Report testing progress and discuss blockers |
| Sprint Review | Validate completed features and demonstrate test results |
| Retrospective | Suggest improvements to testing processes and team collaboration |

---

### 15. Shift-Left Testing Practices

#### a) Reviewing Requirements for Testability
QA reviews requirements early to ensure they are clear, complete, and testable before development starts.

---

#### b) Writing Test Cases Before Code (TDD/BDD)
Test cases and acceptance criteria are written before implementation to guide development and reduce defects.

---

#### c) Static Code Analysis
Tools such as SonarQube or Pylint are used to detect code issues and maintain quality before execution.

---

#### d) API Contract Testing Before Integration
API request and response formats are validated early to ensure smooth integration between services.

---

### 16. Acceptance Criteria (Given-When-Then)

#### Scenario 1: Successful Course Creation

```gherkin
Given the college admin is logged into the system
When the admin enters valid course details
And clicks the Create Course button
Then the course should be created successfully
And a success message should be displayed
```

---

#### Scenario 2: Duplicate Course Code

```gherkin
Given a course with code "CS101" already exists
When the admin tries to create another course with code "CS101"
Then the system should display a duplicate course code error
And the course should not be created
```

---

#### Scenario 3: Missing Required Fields

```gherkin
Given the admin is on the Create Course page
When the admin submits the form without entering mandatory fields
Then validation messages should be displayed
And the course should not be created
```