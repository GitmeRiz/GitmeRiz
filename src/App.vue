<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Footer from './components/Footer.vue';
</script>

<template>
  <div id="app" class="flex flex-col min-h-screen">
    <div class="flex-grow">
      <RouterView />
    </div>
    <Footer />
  </div>
</template>

<style scoped></style>
