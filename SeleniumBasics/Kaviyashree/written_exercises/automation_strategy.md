# Hands-On 3: Test Automation Process, Lifecycle & Framework Types

## Task 1: Automation Decision and Test Case Selection

### 17. Criteria for Deciding Whether to Automate a Test Case

#### 1. Repetitive Execution
Tests that are executed frequently should be automated.

**Application:**
The POST `/api/courses/` endpoint is tested after every code change, so it is a good candidate for automation.

---

#### 2. Stable Functionality
Features that do not change frequently are suitable for automation.

**Application:**
Course creation functionality is a core feature and remains stable over time.

---

#### 3. High Business Risk
Critical functionalities should be automated to reduce the risk of failures.

**Application:**
Creating courses is essential for the system, making automation important.

---

#### 4. Data-Driven Testing
Tests requiring multiple input combinations are suitable for automation.

**Application:**
The API can be tested with different course names, codes, and departments automatically.

---

#### 5. Time Savings
Automation should save time compared to manual execution.

**Application:**
Automated API tests run much faster than manually sending requests through Postman.

---

### 18. Automate or Manual Testing Decisions

| Test Case | Decision | Justification |
|-----------|------------|----------------|
| (a) Regression test for all CRUD endpoints after every code change | Automate | Frequently executed and repetitive |
| (b) Exploratory testing of a new search feature | Manual | Requires human creativity and observation |
| (c) Performance test with 100 concurrent users | Automate | Load testing tools can efficiently handle this |
| (d) UI test for the login form | Automate | Stable functionality executed repeatedly |
| (e) Verify Swagger documentation accuracy | Manual | Requires human validation of content |
| (f) Smoke test after deployment | Automate | Must run quickly after every deployment |

---

### 19. Test Automation ROI

**Definition:**

Test Automation ROI (Return on Investment) measures the benefits gained from automation compared to the time and cost invested in creating and maintaining automated tests.

---

**Given:**

- Automation development time = 4 hours
- Manual execution time = 30 minutes (0.5 hours)

Number of runs needed:

```text
4 ÷ 0.5 = 8 runs
```

Therefore, after **8 executions**, automation becomes beneficial.

---

**Maintenance Overhead:**

After the 10th run:

```text
20% of 0.5 hours = 0.1 hours
Effective saving per run = 0.5 - 0.1 = 0.4 hours
```

Automation still provides significant time savings despite maintenance costs.

---

### 20. Flaky Tests

**Definition:**

A flaky test is a test that sometimes passes and sometimes fails without any changes in the application code.

---

**Example:**

Using:

```python
time.sleep(3)
```

to wait for a button that loads at different speeds can make a Selenium test fail randomly.

---

**Strategies to Prevent Flaky Tests:**

1. Use Explicit Waits (`WebDriverWait`) instead of `time.sleep()`.

2. Use stable locators such as IDs rather than absolute XPaths.

3. Ensure test data and environments are consistent for every execution.

---

## Task 2: Compare Automation Framework Types

### 21. Framework Types

---

### Linear Framework

**Description:**

Tests are written sequentially from start to finish without reusable components.

**Advantage:**

Simple and easy to understand.

**Disadvantage:**

Difficult to maintain for large projects.

**Example:**

Testing a single Course Creation workflow.

---

### Modular Framework

**Description:**

The application is divided into modules, and reusable functions are created for each module.

**Advantage:**

High reusability and maintainability.

**Disadvantage:**

Requires initial planning and design.

**Example:**

Separate modules for Login, Course Management, and Student Management.

---

### Data-Driven Framework

**Description:**

Test data is stored externally in files such as CSV, Excel, or JSON.

**Advantage:**

One test script can execute multiple test scenarios.

**Disadvantage:**

Managing external data files can be complex.

**Example:**

Testing course creation using hundreds of different input combinations.

---

### Keyword-Driven Framework

**Description:**

Tests are executed using predefined keywords that represent actions.

**Advantage:**

Non-technical users can contribute to testing.

**Disadvantage:**

Framework setup is more complicated.

**Example:**

Keywords like LOGIN, CREATE_COURSE, and DELETE_COURSE.

---

### Hybrid Framework

**Description:**

Combines Modular, Data-Driven, and Keyword-Driven approaches.

**Advantage:**

Highly flexible, reusable, and scalable.

**Disadvantage:**

Initial development effort is high.

**Example:**

A complete Selenium automation suite for the Course Management system.

---

### 22. Recommended Framework

I would recommend a **Hybrid Framework** that combines:

- Modular Framework for reusable login functions
- Data-Driven Framework for 50 username-password combinations
- Keyword-Driven Framework to allow non-technical team members to create tests

**Justification:**

This approach provides reusability, scalability, data parameterization, and support for both technical and non-technical users.

---

### 23. Hybrid Framework Folder Structure

```text
course_management_automation/

├── config/
│   └── config.py
│
├── test_data/
│   ├── login_data.csv
│   └── course_data.csv
│
├── pages/
│   ├── login_page.py
│   ├── course_page.py
│   └── student_page.py
│
├── utilities/
│   ├── browser_utils.py
│   ├── wait_utils.py
│   └── logger.py
│
├── tests/
│   ├── test_login.py
│   ├── test_courses.py
│   └── test_students.py
│
└── requirements.txt
```

**Explanation:**

- `config/` contains application configurations.
- `test_data/` stores CSV or Excel files.
- `pages/` contains Page Object Model classes.
- `utilities/` contains helper functions.
- `tests/` contains automated test scripts.
- `requirements.txt` stores project dependencies.