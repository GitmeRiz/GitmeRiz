<template>
  <div>
    <Navbar />
  </div>
  <div class="min-h-screen flex flex-col items-center justify-center bg-teal-500 relative overflow-hidden">

    <!-- Background Circle -->
    <div
      class="absolute w-3/4 h-3/4 bg-teal-400 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulseSlow">
    </div>

    <!-- Animated Text -->
    <h1 class="text-6xl font-bold text-white mb-6 z-10 tracking-wide animate-zoom-in">Welcome Home!</h1>

    <!-- Animated Description -->
    <p class="text-xl text-white mb-10 z-10 animate-fade-slide-up animate-delay-1s">
      Dive into endless opportunities.
    </p>

    <!-- Animated Button -->
    <router-link to="/explore">
      <button
        class="px-8 py-3 bg-orange-500 text-white rounded-full shadow-xl transform hover:scale-110 transition-transform z-10 animate-push-up animate-delay-2s">
        Start Now
      </button>
    </router-link>

  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'HomeView',

  components: {
    Navbar,
  }
}
</script>

<style scoped>
@keyframes fadeInSlideUp {
  from {
    opacity: 0;
    transform: translateY(1rem);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes zoomIn {
  from {
    opacity: 0;
    transform: scale(0.7);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes pushUp {
  from {
    transform: translateY(2rem);
  }

  to {
    transform: translateY(0);
  }
}

@keyframes pulseSlow {
  0% {
    opacity: 1;
    transform: scale(1);
  }

  50% {
    opacity: 0.7;
    transform: scale(1.05);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-fade-slide-up {
  animation: fadeInSlideUp 1.5s ease-out forwards;
}

.animate-zoom-in {
  animation: zoomIn 1.5s ease-out forwards;
}

.animate-push-up {
  animation: pushUp 1.5s ease-out forwards;
}

.animate-pulseSlow {
  animation: pulseSlow 10s infinite;
}

.animate-delay-1s {
  animation-delay: 1s;
}

.animate-delay-2s {
  animation-delay: 2s;
}</style>
