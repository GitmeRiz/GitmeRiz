<template>
    <footer class="bg-gray-800 text-white mt-auto">
        <div class="container mx-auto px-6 md:px-20 py-10">
            <div class="flex flex-wrap justify-between space-y-6 md:space-y-0">
                <!-- Logo or Branding -->
                <div class="w-full md:w-1/4 mb-6 md:mb-0">
                    <h1 class="text-2xl font-bold">YourBrand</h1>
                    <p class="mt-2">Description or slogan of your brand or company.</p>
                </div>

                <!-- Links or Navigation -->
                <div class="w-full md:w-1/4">
                    <h2 class="text-xl font-semibold mb-4">Links</h2>
                    <ul class="space-y-2">
                        <li><a href="#" class="hover:underline">Home</a></li>
                        <li><a href="#" class="hover:underline">About</a></li>
                        <li><a href="#" class="hover:underline">Services</a></li>
                        <li><a href="#" class="hover:underline">Contact</a></li>
                    </ul>
                </div>

                <!-- Social Media or Other Contacts -->
                <div class="w-full md:w-1/4">
                    <h2 class="text-xl font-semibold mb-4">Follow Us</h2>
                    <ul class="space-y-2">
                        <li><a href="#" class="hover:underline">Facebook</a></li>
                        <li><a href="#" class="hover:underline">Twitter</a></li>
                        <li><a href="#" class="hover:underline">Instagram</a></li>
                        <li><a href="#" class="hover:underline">LinkedIn</a></li>
                    </ul>
                </div>

                <!-- Newsletter or Contact Form -->
                <div class="w-full md:w-1/4">
                    <h2 class="text-xl font-semibold mb-4">Newsletter</h2>
                    <p>Stay updated with our latest news:</p>
                    <input type="email" placeholder="Your Email" class="mt-2 p-2 w-full bg-gray-700 rounded">
                    <button class="mt-2 p-2 w-full bg-blue-600 hover:bg-blue-700 rounded">Subscribe</button>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>
