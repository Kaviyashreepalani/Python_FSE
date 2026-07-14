import { useNavigate } from "react-router-dom";

function CourseCard({ course }) {

  const navigate = useNavigate();

  return (

    <div className="course-card">

      <div className="course-top">

        <h2>{course.name}</h2>

        <span className="grade">

          {course.grade}

        </span>

      </div>

      <p>

        <strong>Course Code</strong>

      </p>

      <p>{course.code}</p>

      <br />

      <p>

        <strong>Credits</strong>

      </p>

      <p>{course.credits}</p>

      <button

        className="view-btn"

        onClick={() => navigate(`/courses/${course.id}`)}

      >

        View Details

      </button>

    </div>

  );

}

export default CourseCard;