<template>

<div class="container">

<h1>{{ course.name }}</h1>

<p><strong>Code:</strong> {{ course.code }}</p>

<p><strong>Credits:</strong> {{ course.credits }}</p>

<p><strong>Grade:</strong> {{ course.grade }}</p>

<button @click="enrollNow">

Enroll

</button>

</div>

</template>

<script setup>

import { useRoute,useRouter } from 'vue-router'

import { useEnrollmentStore } from '../stores/enrollment'

const route=useRoute()

const router=useRouter()

const store=useEnrollmentStore()

const courseList=[

{id:1,name:'Angular',code:'CS301',credits:4,grade:'A'},

{id:2,name:'Vue JS',code:'CS302',credits:3,grade:'A+'},

{id:3,name:'React',code:'CS303',credits:4,grade:'B+'},

{id:4,name:'Python',code:'CS304',credits:3,grade:'A'},

{id:5,name:'Java',code:'CS305',credits:4,grade:'O'}

]

const course=courseList.find(

c=>c.id==route.params.id

)

function enrollNow(){

store.enroll(course)

router.push('/profile')

}

</script>

<style scoped>

.container{

padding:50px;

text-align:center;

}

button{

margin-top:30px;

padding:12px 25px;

background:#5d4037;

color:white;

border:none;

border-radius:8px;

cursor:pointer;

}

</style>