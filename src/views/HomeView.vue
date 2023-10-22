<template>
  <div class="min-h-screen flex justify-center items-center bg-gray-900">
    <Countdown />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Countdown from '../components/Countdown.vue';

export default {
  name: 'HomeView',

  components: {
    Navbar,
    Countdown,
  }
}
</script>

<style scoped></style>
