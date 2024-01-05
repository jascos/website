<script lang="js" setup>
  import { Bars3Icon } from "@heroicons/vue/24/solid";
  import { ref, reactive } from 'vue'

  const menuToggle = ref(true);
  const activeRoute = useRoute();
  const menuItems = reactive({
    'Home': '/',
    'Menu': '/menu',
    'About': '/about',
  });
</script>

<template>
<nav class="bg-white shadow-md">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="https://jascossushi.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="~/assets/img/ph-logo.avif" class="h-12" alt="Jasco's Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap">Jasco's Sushi</span>
    </a>
    <button @click="menuToggle ^= true" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <Bars3Icon />
    </button>
    <div :class="{'hidden': menuToggle}" class="w-full md:block md:w-auto">
      <menu role="menu" class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-accent rounded-lg bg-white md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-blue">
        <!-- Turn this the menu into an object and vfor this ish so that you do not have to repeat the classes and dry it up -->
        <li v-for="(route, menuItem) in menuItems">
          <NuxtLink :to="route" :class="{'underline decoration-accent underline-offset-8':  activeRoute.path == route}" class="block py-2 px-3 rounded text-gray-900 transition ease-in duration-300 underline decoration-transparent underline-offset-8 hover:decoration-accent hover:text-primary md:hover:bg-transparent md:border-0 md:p-0" aria-current="page">{{ menuItem }}</NuxtLink>
        </li>
      </menu>
    </div>
  </div>
</nav>

</template>

<style scoped></style>
  