<template>

<div class="card">

<h2>{{name}}</h2>

<p>

<strong>Code :</strong>

{{code}}

</p>

<p>

<strong>Credits :</strong>

{{credits}}

</p>

<p>

<strong>Grade :</strong>

{{grade}}

</p>

<slot></slot>

</div>

</template>

<script setup>

defineProps({

name:String,

code:String,

credits:Number,

grade:String

})

</script>

<style scoped>

.card{

width:280px;

padding:20px;

background:white;

border-radius:15px;

box-shadow:0 0 10px lightgray;

}

</style>