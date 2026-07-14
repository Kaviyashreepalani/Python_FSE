const courses = [
  {
    id: 1,
    name: "Angular",
    code: "CS301",
    credits: 4,
    instructor: "John Smith"
  },
  {
    id: 2,
    name: "React",
    code: "CS302",
    credits: 3,
    instructor: "David Miller"
  },
  {
    id: 3,
    name: "Vue JS",
    code: "CS303",
    credits: 4,
    instructor: "Emma Watson"
  },
  {
    id: 4,
    name: "Python",
    code: "CS304",
    credits: 3,
    instructor: "James Wilson"
  },
  {
    id: 5,
    name: "Java",
    code: "CS305",
    credits: 4,
    instructor: "Sophia Brown"
  }
];

const grid = document.querySelector(".course-grid");
const searchInput = document.getElementById("search-courses");
const resultStatus = document.getElementById("results-status");
const totalCredits = document.getElementById("total-credits");
const selectedCourse = document.getElementById("selected-course");

function showCourse(course) {

    selectedCourse.innerHTML = `

        <h4 class="transcript__title">${course.name}</h4>

        <dl>

            <dt>Course code</dt>
            <dd>${course.code}</dd>

            <dt>Credits</dt>
            <dd>${course.credits}</dd>

            <dt>Instructor</dt>
            <dd>${course.instructor}</dd>

        </dl>

    `;

}

function renderCourses(courseList) {

    grid.innerHTML = "";

    let credits = 0;

    if (courseList.length === 0) {

        const empty = document.createElement("li");

        empty.className = "empty-state";

        empty.innerHTML = `
            <strong>No courses found</strong>
            Try a different course name or course code.
        `;

        grid.appendChild(empty);

    } else {

        courseList.forEach(course => {

            credits += course.credits;

            const card = document.createElement("li");

            card.className = "course-card";

            card.innerHTML = `

                <span class="course-card__stamp" aria-hidden="true">

                    <strong>${course.credits}</strong>
                    <small>cr</small>

                </span>

                <p class="course-card__code">${course.code}</p>

                <h3 class="course-card__title">${course.name}</h3>

                <p class="course-card__meta">
                    <strong>${course.credits} credits</strong> &middot; ${course.instructor}
                </p>

                <button type="button" class="course-card__action">
                    View details
                    <span aria-hidden="true">&rarr;</span>
                </button>

            `;

            const button = card.querySelector(".course-card__action");

            button.addEventListener("click", function () {

                showCourse(course);

            });

            grid.appendChild(card);

        });

    }

    totalCredits.textContent = credits;

    resultStatus.textContent = courseList.length + " Courses Found";

}

renderCourses(courses);

searchInput.addEventListener("input", function () {

    const value = this.value.toLowerCase();

    const filtered = courses.filter(course =>

        course.name.toLowerCase().includes(value) ||

        course.code.toLowerCase().includes(value)

    );

    renderCourses(filtered);

});