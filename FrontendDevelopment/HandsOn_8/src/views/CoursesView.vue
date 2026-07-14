<template>

<div class="container">

<h1>Available Courses</h1>

<input
type="text"
placeholder="Search Course..."
v-model="searchTerm"
class="search"
/>

<div class="course-grid">

<CourseCard

v-for="course in filteredCourses"

:key="course.id"

:name="course.name"

:code="course.code"

:credits="course.credits"

:grade="course.grade"

>

<button @click="store.enroll(course)">
Enroll
</button>

<RouterLink :to="'/courses/' + course.id">

<button>

View Details

</button>

</RouterLink>

</CourseCard>

</div>

<p
v-if="filteredCourses.length===0"
class="empty"
>

No Courses Found

</p>

</div>

</template>

<script setup>

import { ref,onMounted,computed } from 'vue'

import CourseCard from '../components/CourseCard.vue'

import { useEnrollmentStore } from '../stores/enrollment'

const store=useEnrollmentStore()

const searchTerm=ref('')

const courses=ref([])

onMounted(()=>{

courses.value=[

{

id:1,

name:'Angular',

code:'CS301',

credits:4,

grade:'A'

},

{

id:2,

name:'Vue JS',

code:'CS302',

credits:3,

grade:'A+'

},

{

id:3,

name:'React',

code:'CS303',

credits:4,

grade:'B+'

},

{

id:4,

name:'Python',

code:'CS304',

credits:3,

grade:'A'

},

{

id:5,

name:'Java',

code:'CS305',

credits:4,

grade:'O'

}

]

})

const filteredCourses=computed(()=>{

return courses.value.filter(course=>

course.name

.toLowerCase()

.includes(

searchTerm.value.toLowerCase()

)

)

})

</script>

<style scoped>

.container{

padding:40px;

}

h1{

text-align:center;

color:#5d4037;

margin-bottom:30px;

}

.search{

display:block;

margin:auto;

width:350px;

padding:12px;

border-radius:8px;

border:1px solid gray;

margin-bottom:40px;

}

.course-grid{

display:flex;

gap:25px;

flex-wrap:wrap;

justify-content:center;

}

button{

margin-top:15px;

margin-right:10px;

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

.empty{

text-align:center;

font-size:22px;

margin-top:40px;

color:red;

}

</style>