import { useState, useEffect } from "react";

import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import CourseCard from "./components/CourseCard";
import StudentProfile from "./components/StudentProfile";

function App() {

  const [courses, setCourses] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  // Runs once after component mounts
  useEffect(() => {
    async function fetchCourses() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );

        if (!response.ok) {
          throw new Error("Unable to fetch courses.");
        }

        const data = await response.json();

        const courseData = data.slice(0, 5).map((post, index) => ({
          id: post.id,
          name: post.title.substring(0, 20),
          code: `CS10${index + 1}`,
          credits: 3 + (index % 3),
          grade: ["A", "A+", "B+", "A", "A+"][index],
        }));

        setCourses(courseData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchCourses();
  }, []);

  // Runs whenever courses change
  useEffect(() => {
    console.log("Courses updated");
  }, [courses]);

  function handleEnroll(id) {
    if (!enrolledCourses.includes(id)) {
      setEnrolledCourses([...enrolledCourses, id]);
    } else {
      alert("Already enrolled.");
    }
  }

  const filteredCourses = courses.filter((course) =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header
        siteName="Student Portal"
        count={enrolledCourses.length}
      />

      <section className="hero">
        <h1>Welcome to Student Portal</h1>
        <p>React Fundamentals - Components, State & Hooks</p>
      </section>

      <StudentProfile />

      <section className="search-section">
        <input
          type="text"
          placeholder="Search Courses..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </section>

      <section className="course-section">

        <h2>Available Courses</h2>

        {loading && <h3>Loading Courses...</h3>}

        {error && <h3 className="error">{error}</h3>}

        <div className="course-grid">

          {!loading &&
            !error &&
            filteredCourses.map((course) => (
              <CourseCard
                key={course.id}
                {...course}
                onEnroll={handleEnroll}
              />
            ))}

        </div>

      </section>

      <Footer />
    </>
  );
}

export default App;