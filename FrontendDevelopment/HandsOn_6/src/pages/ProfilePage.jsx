import { useSelector, useDispatch } from "react-redux";

import { unenroll } from "../redux/enrollmentSlice";

function ProfilePage() {

    const dispatch = useDispatch();

    const enrolledCourses = useSelector(

        state => state.enrollment.enrolledCourses

    );

    return (

        <div className="profile-page">

            <div className="profile-card">

                <h2>

                    My Enrolled Courses

                </h2>

                <br />

                {

                    enrolledCourses.length === 0 ?

                    <p>

                        No Courses Enrolled

                    </p>

                    :

                    enrolledCourses.map(course => (

                        <div

                            className="enrolled"

                            key={course.id}

                        >

                            <div>

                                <strong>

                                    {course.name}

                                </strong>

                                <br />

                                {course.code}

                            </div>

                            <button

                                className="remove-btn"

                                onClick={() =>

                                    dispatch(

                                        unenroll(course.id)

                                    )

                                }

                            >

                                Remove

                            </button>

                        </div>

                    ))

                }

            </div>

        </div>

    );

}

export default ProfilePage;