<script lang="js" setup>
    import { PhoneIcon, ChevronDownIcon} from "@heroicons/vue/24/solid";
    import { ref, onMounted } from 'vue';

    const food = ref(null)
    const inView = ref(false)
    onMounted(() => {
        let syncedMenu = document.getElementById('1hsj-2')
        console.log("IM index", syncedMenu)
        if (syncedMenu) {
            syncedMenu.remove()
        }
        let menu = document.getElementsByClassName('imp-wrapper-match2')[0]
        if (menu) {
            menu.remove()
        }


        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              console.log('Element is in view');
              inView.value = true
            }
            else {
            console.log('Element is not in view')
            inView.value = false
        }
          });
        });
        observer.observe(document.getElementById("food"));
    })
</script>

<template>
    <main class="snap-y snap-mandatory">
        <section class="h-screen snap-always snap-center">
            <!-- logo and chevron full screen -->
            <div class="flex-column text-center items-center justify-center">
                <div class="md:block flex-1 mt-20">
                    <img class="p-10 xs:max-w-xs sm:max-w-md md:max-w-xl mx-auto" src="~/assets/img/logo-nobg.png" alt="mockup">
                </div>
                <p class="mt-10">Located at Plaza Riviera del Tola on the 2nd Floor</p> 
                <div class="mt-4 p-2 max-w-lg mx-auto flex flex-wrap space-x-2">
                    <a href="https://maps.app.goo.gl/dccQD2fBSFSivPiHA" class="flex-auto inline-flex mb-5 justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary hover:bg-primmary focus:ring-4 focus:ring-accent">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                            Visit Us!
                    </a>
                    <a href="tel:+50589941399" class="flex-auto inline-flex mb-5 justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary focus:ring-4 focus:ring-accent">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>
                        Call Us!
                    </a>
                </div>
                <div class="mt-6">
                    <a href="#food">
                        <ChevronDownIcon class="w-12 h-12 mx-auto transition-transform translate-y-2 shake"></ChevronDownIcon>
                    </a>
                    
                </div>
            </div>
        </section>
        <!-- might need width explicit -->
        <section ref="food" id="food" class="h-screen relative">
            <!-- food stuff full section-->
            <figure class="relative h-full w-full">
                <img class="object-cover h-full w-full transition-all" :class="{'blur-sm duration-1000 delay-1000': inView}" src="~/assets/img/foodcollagefade.png" alt="collag of sushi and other foods">
                <figcaption class="absolute text-center text-white  inset-0 flex flex-col items-center justify-center p-2 [text-shadow:1px_1px_4px_var(--tw-shadow-color)] shadow-accent">
                    <h1 class="max-w-2xl mb-4 text-5xl font-extrabold tracking-tight leading-none md:text-6xl xl:text-7xl">{{ $t("welcome") }}</h1>
                    <h3 class="max-w-2xl mb-4 text-1xl font-extrabold tracking-tight leading-none md:text-2xl xl:text-3xl">{{ $t("welcome_subtxt") }}</h3>
                    <p class="max-w-2xl mb-6 text-lg lg:mb-8 md:text-xl lg:text-1xl">{{ $t("landingblurb") }}</p>
                    <NuxtLink to="/menu" class="wiggle flex flex-col items-center justify-center">
                        <p>Check out our Menu!</p>
                        <svg version="1.1" class="h-20 w-20 fill-white"
                            id="svg4619" inkscape:version="0.91 r13725" sodipodi:docname="sushi-15.svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:svg="http://www.w3.org/2000/svg"
                            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="15px" height="15px"
                            viewBox="0 0 15 15" style="enable-background:new 0 0 15 15;" xml:space="preserve">
                        <path id="path4999" d="M5.5,3C5.2239,3,5,3.2239,5,3.5H2.75C1.2265,3.5,0,4.7265,0,6.25c0,0.8274,0.3687,1.5592,0.9434,2.0625
                            C0.3803,8.6675,0,9.2893,0,10c0,1.0994,0.9006,2,2,2h3.5h2H10c1.0994,0,2-0.9006,2-2c0-0.4883-0.1863-0.9294-0.4805-1.2773
                            l2.1777,0.9629c0.3716,0.1831,0.8213,0.0303,1.0044-0.3413c0.1831-0.3716,0.0303-0.8213-0.3413-1.0044
                            c-0.0188-0.0093-0.038-0.0178-0.0576-0.0254l-1.8105-0.8027l1.6309-0.2715c0.4099-0.0599,0.6936-0.4408,0.6337-0.8507
                            c-0.0544-0.3724-0.3765-0.6469-0.7528-0.6415c-0.0426,0.0003-0.085,0.0042-0.127,0.0117l-2.1309,0.3555
                            C11.2595,4.9521,10.0387,3.7837,8,3.5488V3.5C8,3.2239,7.7761,3,7.5,3H5.5z M6,4h1v5v2H6V9V4z M9.5,8
                            c0.259,0,0.4638,0.1974,0.4902,0.4492l0.0762-0.1328c0.1385-0.2399,0.4437-0.3201,0.6836-0.1816s0.3201,0.4418,0.1816,0.6816
                            l-0.2578,0.4473C10.8727,9.445,11,9.7021,11,10c0,0.5626-0.4374,1-1,1H8V9h1V8.5C9,8.223,9.223,8,9.5,8z M2.4395,8.0703
                            c0.1934-0.0242,0.3903,0.0662,0.4941,0.2461l0.2012,0.3477C3.226,8.5647,3.3538,8.5,3.5,8.5C3.777,8.5,4,8.723,4,9h1v2H2
                            c-0.5626,0-1-0.4374-1-1s0.4374-1,1-1h0.1738L2.0684,8.8164C1.9299,8.5765,2.0101,8.2733,2.25,8.1348
                            C2.31,8.1001,2.375,8.0784,2.4395,8.0703z"/>
                        </svg>
                    </NuxtLink>
                </figcaption>
            </figure>
        </section>
        <section id="info" class="h-screen mt-40">
            <div class="max-w-screen-xl px-4 py-8 mx-auto md:flex md:flex-row md:flex-wrap md:space-x-10 lg:py-16">
                <div class="md:flex-auto lg:mt-0">
                    <iframe alt="restaurant location on map" class="w-full aspect-auto rounded-md shadow-lg shadow-accent" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15642.819012080568!2d-86.0154825!3d11.4289625!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f74319fb3a25b07%3A0x1ac78b1a43b80796!2sJasco%E2%80%99s%20Sushi%20Bar%20%26%20Grill!5e0!3m2!1sen!2sus!4v1704606606435!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div> 
                <div class="block mt-5 p-6 text-center bg-white border border-gray-200 rounded-lg shadow-lg shadow-accent md:flex-1 md:mt-0">
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

<style scoped>
    .shake {
    animation: floating 3s ease-in-out infinite;
    transform: translate3d(0, 0, 0);
    }

    @keyframes floating {
        0% { transform: translate(0,  0px); }
        50%  { transform: translate(0, 15px); }
        100%   { transform: translate(0, -0px); }
    }

    .wiggle {
    animation: wiggle 2s linear infinite;
    }

    @keyframes blur {

        0% { -webkit-filter: blur(0px);}
        50% { -webkit-filter: blur(5px);}
        100% { -webkit-filter: blur(0px);}
        
    }

    /* Keyframes */
    @keyframes wiggle {
    0%, 7% {
        transform: rotateZ(0);
    }
    15% {
        transform: rotateZ(-15deg);
    }
    20% {
        transform: rotateZ(10deg);
    }
    25% {
        transform: rotateZ(-10deg);
    }
    30% {
        transform: rotateZ(6deg);
    }
    35% {
        transform: rotateZ(-4deg);
    }
    40%, 100% {
        transform: rotateZ(0);
    }
    }
</style>
