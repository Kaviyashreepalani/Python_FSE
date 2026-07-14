<template>
  <Header />
  <RouterView />
</template>

<script setup>
import Header from './components/Header.vue'
</script>

<style>
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

body{
  font-family:Arial,Helvetica,sans-serif;
  background:#f5f5f5;
}
</style>