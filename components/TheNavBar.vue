<script lang="js" setup>
  import { Bars3Icon } from "@heroicons/vue/24/solid";

  const menuToggle = ref(true);
  const activeRoute = useRoute();
  const menuItems = reactive({
    'Home': '/',
    'Menu': '/menu',
    'About': '/about',
  });
</script>

<template>
<nav class="">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-end mx-auto p-4">
    <button @click="menuToggle ^= true" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <Bars3Icon class="h-24 w-24" />
    </button>
    <div :class="{'hidden': menuToggle}" class="w-full md:block md:w-auto">
      <menu role="menu" class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-secondary rounded-lg bg-white md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-blue">
        <li v-for="(route, menuItem) in menuItems">
          <NuxtLink :to="route" :class="{'underline decoration-secondary underline-offset-8': (activeRoute.path === route),'transition ease-in duration-300 underline decoration-transparent underline-offset-8 hover:decoration-secondary' : (activeRoute.path != route)}" class="block py-2 px-3 rounded text-gray-900 text-primary md:hover:bg-transparent md:border-0 md:p-0" aria-current="page">{{ menuItem }}</NuxtLink>
        </li>
      </menu>
    </div>
  </div>
</nav>

</template>

<style scoped></style>
  