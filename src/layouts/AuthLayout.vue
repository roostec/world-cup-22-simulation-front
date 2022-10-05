<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <router-view />

      <div class="absolute top-4 right-4 glass">
        <LanguageSelect no-title/>
      </div>

      <video
        class="video-cup"
        src="src/assets/video/copa.mp4"
        muted
        loop
        autoplay
      />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
  import LanguageSelect from "../components/LanguageSelect.vue";
</script>

<style>
.video-cup {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  opacity: 0.8;
}
</style>
