import courses from "../data/courses";
import CourseCard from "../components/CourseCard";

function CoursesPage() {

    return (

        <>

            <h1 className="page-title">

                Available Courses

            </h1>

            <div className="course-grid">

                {

                    courses.map((course) => (

                        <CourseCard

                            key={course.id}

                            course={course}

                        />

                    ))

                }

            </div>

        </>

    );

}

export default CoursesPage;