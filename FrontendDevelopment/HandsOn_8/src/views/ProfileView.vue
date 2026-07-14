<template>

<div class="container">

<h1>Student Profile</h1>

<div v-if="store.enrolledCourses.length===0">

<h3>No Courses Enrolled</h3>

</div>

<div
v-for="course in store.enrolledCourses"
:key="course.id"
class="course"
>

<h2>{{ course.name }}</h2>

<p>Code : {{ course.code }}</p>

<p>Credits : {{ course.credits }}</p>

<p>Grade : {{ course.grade }}</p>

<button @click="store.unenroll(course.id)">

Remove

</button>

</div>

<h2 class="credits">

Total Credits : {{ store.totalCredits }}

</h2>

</div>

</template>

<script setup>

import { useEnrollmentStore } from '../stores/enrollment'

const store = useEnrollmentStore()

</script>

<style scoped>

.container{

padding:40px;

text-align:center;

}

.course{

background:white;

padding:20px;

margin:20px auto;

width:350px;

border-radius:10px;

box-shadow:0 0 10px lightgray;

}

button{

margin-top:15px;

padding:10px 20px;

background:#5d4037;

color:white;

border:none;

border-radius:6px;

cursor:pointer;

}

button:hover{

background:#7b5649;

}

.credits{

margin-top:40px;

color:#5d4037;

}

</style>