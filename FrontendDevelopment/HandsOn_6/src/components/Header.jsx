import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

function Header() {

    const enrolledCourses = useSelector(

        state => state.enrollment.enrolledCourses

    );

    return (

        <header className="header">

            <div className="logo">

                🎓 Student Portal

            </div>

            <nav className="nav">

                <Link to="/">Home</Link>

                <Link to="/courses">Courses</Link>

                <Link to="/profile">Profile</Link>

            </nav>

            <div className="badge">

                Enrolled : {enrolledCourses.length}

            </div>

        </header>

    );

}

export default Header;