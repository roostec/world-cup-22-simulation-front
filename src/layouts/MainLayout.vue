<template>
  <q-layout view="lHh Lpr lFf">
    <q-header
      bordered
      :class="{
        'bg-primary': $q.dark.isActive,
        'bg-white text-black': !$q.dark.isActive,
      }"
    >
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
        />
        <q-toolbar-title>Bolao Qatar World Cup '22</q-toolbar-title>
        <tool-bar/>
        
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered class="bg-grey-2">
      <main-menu/>      
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
  import { ref } from 'vue';  
  import { useQuasar } from 'quasar';
  import { useI18n } from "vue-i18n";
  import i18n from "../plugins/i18n"; 
  import MainMenu from '../components/MainMenu.vue';
  import ToolBar from '../components/ToolBar.vue';

  const leftDrawerOpen = ref(false);

  const $q = useQuasar()
  // get status
  console.log($q.dark.isActive) // true, false
  // get configured status
  console.log($q.dark.mode) // "auto", true, false


</script>

