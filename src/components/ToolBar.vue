<script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import { useQuasar } from 'quasar';
  import LanguageSelect from './LanguageSelect.vue';

  const $q = useQuasar();

  const theme = ref('Light');  
  // Checking if the user has the preference of color scheme (dark or light) in the system 
  onMounted(() => {
    const preferDarkinSystem = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (preferDarkinSystem) {
      $q.dark.set(true);
      theme.value = 'Light';
    } else {
      $q.dark.set(false)
      theme.value = 'Dark';
    }
  });

  const toggle = () => {
    $q.dark.toggle();
    $q.dark.isActive ? theme.value = 'Light' : theme.value = 'Dark';
  }

</script>

<template>
  <q-btn icon="person" :color="$q.dark.isActive ? 'light' : 'primary'" flat round>
    <q-menu>
      <q-list style="min-width: 100px">
        Nome do Usuario

        <LanguageSelect/>

        <q-item clickable v-close-popup  @click="toggle">
          <q-item-section side>
            <q-icon 
              :name="theme === 'Dark' ? 'nights_stay' : 'wb_sunny'"
              :color="$q.dark.isActive ? 'light' : 'primary'"              
            />
          </q-item-section>
          <q-item-section>{{theme}} Mode</q-item-section>
        </q-item>        

        <q-item clickable v-close-popup to="signin">
          <q-item-section side>
            <q-icon name="mdi-exit-to-app" color="negative" />
          </q-item-section>
          <q-item-section>Logout</q-item-section>
        </q-item>
      </q-list>
    </q-menu>
  </q-btn>
</template>

<style lang="sass"></style>
