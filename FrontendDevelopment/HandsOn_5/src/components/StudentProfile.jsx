import { useState } from "react";

function StudentProfile() {

  const [profile, setProfile] = useState({

    name: "",

    email: "",

    semester: ""

  });

  function handleChange(event) {

    setProfile({

      ...profile,

      [event.target.name]: event.target.value

    });

  }

  return (

    <section className="profile">

      <h2>Student Profile</h2>

      <div className="profile-form">

        <input
          type="text"
          name="name"
          placeholder="Student Name"
          value={profile.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={profile.email}
          onChange={handleChange}
        />

        <input
          type="text"
          name="semester"
          placeholder="Semester"
          value={profile.semester}
          onChange={handleChange}
        />

      </div>

      <div className="profile-preview">

        <p><strong>Name:</strong> {profile.name}</p>

        <p><strong>Email:</strong> {profile.email}</p>

        <p><strong>Semester:</strong> {profile.semester}</p>

      </div>

    </section>

  );

}

export default StudentProfile;