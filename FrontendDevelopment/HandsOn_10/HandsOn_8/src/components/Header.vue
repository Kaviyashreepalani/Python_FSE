<template>

<header class="header">

<div class="logo">

🎓 Student Portal

</div>

<nav>

<RouterLink to="/">Dashboard</RouterLink>

<RouterLink to="/courses">Courses</RouterLink>

<RouterLink to="/profile">Profile</RouterLink>

</nav>

<div class="profile">

👩‍🎓 Student

<span>{{ store.enrolledCourses.length }}</span>

</div>

</header>

</template>

<script setup>

import { useEnrollmentStore } from '../stores/enrollment'

const store=useEnrollmentStore()

</script>

<style scoped>

.header{

display:flex;

justify-content:space-between;

align-items:center;

padding:18px 40px;

background:rgba(255,255,255,.75);

backdrop-filter:blur(12px);

border-radius:18px;

box-shadow:0 8px 20px rgba(0,0,0,.08);

margin-bottom:35px;

}

.logo{

font-size:30px;

font-weight:700;

color:#5D4037;

}

nav{

display:flex;

gap:25px;

}

nav a{

text-decoration:none;

color:#444;

font-weight:600;

transition:.3s;

}

nav a:hover{

color:#795548;

}

.router-link-active{

color:#5D4037;

border-bottom:3px solid #5D4037;

padding-bottom:4px;

}

.profile{

display:flex;

gap:10px;

align-items:center;

font-weight:600;

}

.profile span{

background:#5D4037;

color:white;

padding:5px 12px;

border-radius:20px;

}

</style>