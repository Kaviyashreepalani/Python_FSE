<template>

<div class="profile-page">

    <!-- Student Profile Card -->

    <div class="profile-card">

        <div class="avatar">

            👩‍🎓

        </div>

        <div>

            <h1>Kaviya Shree</h1>

            <p>B.E. Electronics & Communication Engineering</p>

            <p>Student ID : ST2026001</p>

        </div>

    </div>

    <!-- Dashboard Cards -->

    <div class="summary">

        <div class="summary-card">

            <h2>📚</h2>

            <h3>{{ enrolledCourses.length }}</h3>

            <p>Enrolled Courses</p>

        </div>

        <div class="summary-card">

            <h2>⭐</h2>

            <h3>{{ totalCredits }}</h3>

            <p>Total Credits</p>

        </div>

        <div class="summary-card">

            <h2>🏆</h2>

            <h3>8.9</h3>

            <p>Current GPA</p>

        </div>

        <div class="summary-card">

            <h2>🎯</h2>

            <h3>85%</h3>

            <p>Overall Progress</p>

        </div>

    </div>

    <!-- Progress -->

    <div class="progress-box">

        <h2>Academic Progress</h2>

        <div class="progress-bar">

            <div class="progress-fill">

                85%

            </div>

        </div>

    </div>

    <!-- Enrolled Courses -->

    <h2 class="title">

        My Courses

    </h2>

    <div
        class="course-grid"
        v-if="enrolledCourses.length"
    >

        <div
            class="course-card"
            v-for="course in enrolledCourses"
            :key="course.id"
        >

            <div class="top">

                <h2>{{ course.name }}</h2>

                <span>{{ course.grade }}</span>

            </div>

            <p>

                Course Code

                <strong>{{ course.code }}</strong>

            </p>

            <p>

                Credits

                <strong>{{ course.credits }}</strong>

            </p>

            <button
                @click="store.unenroll(course.id)"
            >

                Remove Course

            </button>

        </div>

    </div>

    <div
        v-else
        class="empty"
    >

        📚 No Courses Enrolled Yet

    </div>

    <button
        class="reset"
        @click="store.$reset()"
    >

        Reset Enrollment

    </button>

</div>

</template>

<script setup>

import { useEnrollmentStore } from '../stores/enrollment'

import { storeToRefs } from 'pinia'

const store = useEnrollmentStore()

const {

enrolledCourses,

totalCredits

} = storeToRefs(store)

</script>

<style scoped>

.profile-page{

display:flex;

flex-direction:column;

gap:35px;

}

.profile-card{

display:flex;

align-items:center;

gap:30px;

padding:35px;

background:linear-gradient(135deg,#5D4037,#8D6E63);

border-radius:25px;

color:white;

box-shadow:0 15px 30px rgba(0,0,0,.15);

}

.avatar{

font-size:90px;

}

.summary{

display:grid;

grid-template-columns:repeat(auto-fit,minmax(220px,1fr));

gap:25px;

}

.summary-card{

background:white;

padding:30px;

border-radius:20px;

text-align:center;

box-shadow:0 8px 18px rgba(0,0,0,.08);

transition:.3s;

}

.summary-card:hover{

transform:translateY(-8px);

}

.summary-card h2{

font-size:42px;

}

.summary-card h3{

margin:10px 0;

color:#5D4037;

font-size:30px;

}

.progress-box{

background:white;

padding:30px;

border-radius:20px;

box-shadow:0 8px 18px rgba(0,0,0,.08);

}

.progress-box h2{

margin-bottom:20px;

color:#5D4037;

}

.progress-bar{

width:100%;

height:28px;

background:#ddd;

border-radius:40px;

overflow:hidden;

}

.progress-fill{

width:85%;

height:100%;

background:linear-gradient(90deg,#43A047,#66BB6A);

display:flex;

align-items:center;

justify-content:center;

color:white;

font-weight:bold;

}

.title{

color:#5D4037;

}

.course-grid{

display:grid;

grid-template-columns:repeat(auto-fit,minmax(320px,1fr));

gap:25px;

}

.course-card{

background:white;

padding:25px;

border-radius:20px;

box-shadow:0 10px 20px rgba(0,0,0,.08);

transition:.3s;

}

.course-card:hover{

transform:translateY(-8px);

}

.top{

display:flex;

justify-content:space-between;

margin-bottom:20px;

}

.top span{

background:#43A047;

color:white;

padding:5px 12px;

border-radius:20px;

font-weight:bold;

}

button{

margin-top:20px;

width:100%;

padding:12px;

border:none;

border-radius:30px;

background:linear-gradient(135deg,#5D4037,#8D6E63);

color:white;

font-weight:bold;

cursor:pointer;

}

button:hover{

transform:scale(1.03);

}

.reset{

background:#C62828;

}

.empty{

padding:50px;

text-align:center;

font-size:24px;

background:white;

border-radius:20px;

}

@media(max-width:768px){

.profile-card{

flex-direction:column;

text-align:center;

}

}

</style>