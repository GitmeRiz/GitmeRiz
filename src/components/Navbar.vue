<template>
    <div class="bg-white text-gray-800 py-4 px-4 sm:px-6 lg:px-24 xl:px-60 shadow-lg flex justify-between items-center">
        <div class="flex items-center cursor-pointer px-4">
            <span class="text-xl tablet:text-2xl">
                <RouterLink to="/">
                    <h1>
                        Riz
                    </h1>
                </RouterLink>
            </span>
        </div>

        <!-- Hamburger Icon -->
        <div @click="MenuOpen()" class="md:hidden cursor-pointer z-10">
            <div :class="[open ? 'hidden' : 'block']" class="w-6 h-0.5 bg-white mb-1.5"></div>
            <div :class="[open ? 'hidden' : 'block']" class="w-6 h-0.5 bg-white mb-1.5"></div>
            <div :class="[open ? 'hidden' : 'block']" class="w-6 h-0.5 bg-white"></div>

            <!-- 'X' icon when menu is open -->
            <span :class="[open ? 'block' : 'hidden']" class="text-4xl text-white">
                &times;
            </span>
        </div>

        <ul class="fixed md:static bg-gray-900 md:bg-transparent w-full md:w-auto h-screen md:h-auto top-0 left-0 flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 tablet:space-x-4 md:space-x-6 py-6 md:py-0 transition-transform duration-300 ease-in"
            :class="[open ? 'translate-y-0' : '-translate-y-full md:translate-y-0']">
            <li v-for="link in Links">
                <router-link :to="link.link" class="text-xl tablet:text-lg hover:text-gray-400 px-2 py-1 block">
                    {{ link.name }}
                </router-link>
            </li>
            <li>
                <RouterLink to="/login">
                    <button class="bg-green-400 hover:bg-gray-400 duration-300 font-sm text-white rounded py-2 px-4">
                        Login
                    </button>
                </RouterLink>
            </li>
        </ul>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    name: 'Navbar',
    setup() {
        let Links = [
            { name: 'Home', link: '/' },
            { name: 'About', link: '/about' },
            { name: 'Cloud', link: '/cloud' },
        ];
        let open = ref(false) // set default to false, so menu is hidden initially
        function MenuOpen() {
            open.value = !open.value
        }
        return { Links, open, MenuOpen }
    }
}
</script>
