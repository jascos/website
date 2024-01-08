<script lang="ts" setup>
    import { PhoneIcon } from "@heroicons/vue/24/solid";
</script>

<template>
    <main>
        <!-- something like florida script for the titling would be cool -->
        <!-- use content and ii8n to make an easy to serve english and spanish verion fo the site -->
        <!-- A jumbo tron hero stating Welcome, we have xyz, learn more about us-->
        <!-- Mapbox with a quick link to where you can find us -->
        <!-- phone number dates and times for open and close -->
        <section class="h-2/3 bg-transparent ">
            <!-- <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div class="mr-auto text-center place-self-center lg:col-span-7">
                    <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">{{ $t("welcome") }}</h1>
                    <h3 class="max-w-2xl mb-4 text-xl font-extrabold tracking-tight leading-none md:text-1xl xl:text-3xl">{{ $t("welcome_subtxt") }}</h3>
                    <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">{{ $t("landingblurb") }}</p>
                </div>
                <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <img class="rounded-md shadow-lg" src="~/assets/img/ph-hero.jpg" alt="mockup">
                </div>                
            </div> -->
            <img src="~/assets/img/ph-logo.avif" class="mx-auto mb-10" alt="Jasco's Logo" />
            <div class="mx-auto max-w-lg text-center">
                <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">{{ $t("welcome") }}</h1>
                <h2 class="max-w-2xl mb-4 text-xl font-extrabold tracking-tight leading-none md:text-1xl xl:text-3xl">{{ $t("welcome_subtxt") }}</h2>
                <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">{{ $t("landingblurb") }}</p>
            </div>
            <div class="max-w-lg mx-auto flex flex-wrap space-x-2">
                <a href="tel:+50589941399" class="flex-auto inline-flex mb-5 justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary hover:bg-accent focus:ring-4 focus:ring-accent">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                        Call Us +50589941399
                </a>
                <a href="https://maps.app.goo.gl/dccQD2fBSFSivPiHA" class="flex-auto inline-flex mb-5 justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary hover:bg-primmary focus:ring-4 focus:ring-accent">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                        Visit Us!
                </a>
            </div>
        </section>

        <section id="info" class="h-1/3 bg-accent">
            <div class="max-w-screen-xl px-4 py-8 mx-auto md:flex md:flex-row md:flex-wrap md:space-x-10 lg:py-16">
                <div class="md:flex-auto lg:mt-0">
                    <iframe alt="restaurant location on map" class="w-full aspect-auto rounded-md shadow-lg " src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15642.819012080568!2d-86.0154825!3d11.4289625!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f74319fb3a25b07%3A0x1ac78b1a43b80796!2sJasco%E2%80%99s%20Sushi%20Bar%20%26%20Grill!5e0!3m2!1sen!2sus!4v1704606606435!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div> 
                <div class="block mt-5 p-6 text-center bg-white border border-gray-200 rounded-lg shadow md:flex-1 md:mt-0">
                    <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Hours & Info</h2>
                    <ul>
                        <li>Sunday: 12:00pm-9:00pm</li>
                        <li>Monday: Closed</li>
                        <li>Tuesday: Closed</li>
                        <li>Wednesday: 12:00pm-9:00pm</li>
                        <li>Thursday: 12:00pm-9:00pm</li>
                        <li>Friday: 12:00pm-9:00pm</li>
                        <li>Saturday: 12:00pm-9:00pm</li>
                    </ul>
                </div>
            </div>
        </section>
    </main>
</template>

<style scoped></style>
