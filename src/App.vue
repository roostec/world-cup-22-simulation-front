<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
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


