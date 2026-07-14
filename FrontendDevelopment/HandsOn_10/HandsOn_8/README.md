# Hands-On 10
## API Integration & Advanced State Management

### Framework Used
Vue.js 3 with Pinia

---

# Task 138
Created a centralized API layer using Axios.

Files:
- src/api/apiClient.js
- src/api/courseApi.js

Features:
- Base URL
- Timeout
- Default headers

---

# Task 139

Created reusable API functions:

- getAllCourses()
- getCourseById()
- enrollStudent()

---

# Task 140

Response Interceptor

- Returns response.data directly.
- Standardized error object.

---

# Task 141

Request Interceptor

Authorization header added using mock bearer token.

---

# Task 142

All components now use the centralized API layer.

No direct Axios calls inside components.

---

# Task 149

Advanced Pinia Features

- Async action (fetchAndEnroll)
- storeToRefs()
- $reset()

---

# Task 150

Global Error Handler implemented using

app.config.errorHandler()

---

# Task 151

## State Management Comparison

### React + Redux Toolkit

- Uses Store
- Reducers
- Actions
- Async Thunks

Advantages

- Excellent for very large applications.

Disadvantages

- More boilerplate.

---

### Angular + NgRx

Uses

- Actions
- Reducers
- Effects
- Selectors

Advantages

- Very scalable.

Disadvantages

- Highest learning curve.

---

### Vue + Pinia

Uses

- Stores
- Actions
- Computed Properties

Advantages

- Very little boilerplate.
- Official Vue state management library.
- Easy to learn.

Disadvantages

- Smaller ecosystem than Redux.

---

## Conclusion

Pinia provides the simplest state management solution with minimal boilerplate, while Redux Toolkit and NgRx are more suitable for large enterprise applications requiring stricter architectural patterns.