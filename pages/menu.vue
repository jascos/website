<script lang="js" setup>
    import { ref, onMounted, onUnmounted } from 'vue'

    
    onMounted(() => {
      let syncedMenu = document.createElement('script')
      syncedMenu.setAttribute('src', 'https://imenupro.com/!1hsj-2')
      syncedMenu.setAttribute('id', '1hsj-2')
      document.head.appendChild(syncedMenu)

    })
    onUnmounted(() => {
      console.log("UNMOOUNTING")
      let syncedMenu = document.getElementById('1hsj-2')
      console.log("IM the menu", syncedMenu)
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
    <div>

    </div>
</template>

<style scoped>
</style>