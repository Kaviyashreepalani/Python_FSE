import { useNavigate } from "react-router-dom";

function HomePage() {

    const navigate = useNavigate();

    return (

        <section className="hero">

            <h1>Welcome to Student Portal</h1>

            <p>

                Learn. Practice. Grow.

                <br />

                Manage your courses and track your learning journey from one place.

            </p>

            <button

                className="hero-btn"

                onClick={() => navigate("/courses")}

            >

                Explore Courses

            </button>

        </section>

    );

}

export default HomePage;