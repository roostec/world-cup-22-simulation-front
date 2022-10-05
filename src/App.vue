<script setup lang="ts">
  import { onMounted } from 'vue'
  import { useQuasar } from 'quasar'

  const $q = useQuasar()
  onMounted(() => {
      console.log($q.version)
      console.log($q.platform)
      console.log($q.screen)
      console.log($q.lang)
      console.log($q.iconSet)
  })
</script>

<template>
  <router-view />
</template>

<style lang="scss">
  // @import "./style.scss";
</style>


