<template>
    <footer class="bg-white text-gray-800 py-8">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center">
          
          <!-- Logo -->
          <div>
            <img src="@/assets/GitmeRizBlack.png" alt="Logo" class="h-10 w-auto"/>
          </div>
          
          <!-- Social Icons -->
          <div class="flex space-x-6">
            <a href="https://facebook.com/gitmeriz" target="_blank" rel="noopener noreferrer">
              <img src="@/assets/FacebookIcon.svg" alt="Facebook" class="h-6 w-auto hover:opacity-75"/>
            </a>
            <a href="https://instagram.com/gitmeriz" target="_blank" rel="noopener noreferrer">
              <img src="@/assets/InstagramIcon.svg" alt="Instagram" class="h-6 w-auto hover:opacity-75"/>
            </a>
            <a href="https://discord.gg/xx2ZSzsh" target="_blank" rel="noopener noreferrer">
              <img src="@/assets/DiscordIcon.svg" alt="Discord" class="h-6 w-auto hover:opacity-75"/>
            </a>
            <a href="https://github.com/gitmeriz" target="_blank" rel="noopener noreferrer">
              <img src="@/assets/GithubIcon.svg" alt="Github" class="h-6 w-auto hover:opacity-75"/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'Footer'
  };
  </script>
  
  <style scoped>
  /* Additional styling if required */
  </style>
  