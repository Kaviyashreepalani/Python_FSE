<template>

<header>

<div class="logo">

🎓 Student Portal

</div>

<nav>

<RouterLink to="/">Home</RouterLink>

<RouterLink to="/courses">Courses</RouterLink>

<RouterLink to="/profile">Profile</RouterLink>

<span class="badge">

Enrolled : {{ store.enrolledCourses.length }}

</span>

</nav>

</header>

</template>

<script setup>

import { useEnrollmentStore } from '../stores/enrollment'

const store=useEnrollmentStore()

</script>

<style scoped>

header{

display:flex;

justify-content:space-between;

align-items:center;

padding:20px 40px;

background:#5d4037;

}

.logo{

font-size:34px;

font-weight:bold;

color:white;

}

nav{

display:flex;

gap:25px;

align-items:center;

}

a{

text-decoration:none;

color:white;

font-weight:bold;

}

a:hover{

color:#ffcc80;

}

.badge{

background:white;

color:#5d4037;

padding:8px 15px;

border-radius:20px;

font-weight:bold;

}

</style>