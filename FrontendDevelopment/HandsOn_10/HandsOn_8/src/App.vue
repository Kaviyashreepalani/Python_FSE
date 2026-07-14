<template>

<div class="app">

    <Header />

    <main>

        <RouterView />

    </main>

</div>

</template>

<script setup>

import Header from './components/Header.vue'

</script>

<style>

*{

margin:0;

padding:0;

box-sizing:border-box;

font-family:'Poppins',sans-serif;

}

body{

background:#F6F1EC;

}

main{

padding:40px;

}

</style>