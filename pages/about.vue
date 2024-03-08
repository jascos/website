<script lang="js" setup>
  import { ref, onMounted } from 'vue';

  onMounted(() => {
      let syncedMenu = document.getElementById('1hsj-2')
      console.log("IM about", syncedMenu)
      if (syncedMenu) {
        syncedMenu.remove()
      }
      let menu = document.getElementsByClassName('imp-wrapper-match2')[0]
      if (menu) {
        menu.remove()
      }
  })
</script>

<template>
  <main>
    <section class="mt-10">
      <h1 class="max-w-2xl text-center mx-auto mb-4 text-5xl font-extrabold tracking-tight leading-none md:text-6xl xl:text-7xl">{{ $t("about_title") }}</h1>
      <p class="p-5 text-jusityf mx-auto max-w-2xl mb-6 lg:mb-8 md:text-xl lg:text-1xl">{{ $t("about") }}</p>
      <h1 class="max-w-2xl mx-auto text-center mb-4 text-5xl font-extrabold tracking-tight leading-none md:text-6xl xl:text-7xl">{{ $t("story_title") }}</h1>
      <p class="p-5 text-justify mx-auto max-w-2xl mb-6 lg:mb-8 md:text-xl lg:text-1xl">{{ $t("chef_about") }}</p>
      <!-- <h3 class="max-w-2xl mb-4 text-1xl font-extrabold tracking-tight leading-none md:text-2xl xl:text-3xl">{{ $t("about") }}</h3> -->
    </section>
  </main>
</template>

<style scoped></style>
