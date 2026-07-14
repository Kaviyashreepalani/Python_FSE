import { useNavigate, useParams } from "react-router-dom";

import { useDispatch } from "react-redux";

import { enroll } from "../redux/enrollmentSlice";

import courses from "../data/courses";

function CourseDetailPage() {

    const { courseId } = useParams();

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const course = courses.find(

        c => c.id === Number(courseId)

    );

    if (!course) {

        return <h2>Course Not Found</h2>;

    }

    function handleEnroll() {

        dispatch(

            enroll(course)

        );

        navigate("/profile");

    }

    return (

        <div className="detail-page">

            <h1>{course.name}</h1>

            <hr />

            <br />

            <p>

                <strong>Course Code :</strong>

                {course.code}

            </p>

            <p>

                <strong>Credits :</strong>

                {course.credits}

            </p>

            <p>

                <strong>Grade :</strong>

                {course.grade}

            </p>

            <br />

            <p>

                {course.description}

            </p>

            <br />

            <button

                className="hero-btn"

                onClick={handleEnroll}

            >

                Enroll Course

            </button>

        </div>

    );

}

export default CourseDetailPage;