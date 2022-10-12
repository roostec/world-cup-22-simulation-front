<script setup lang="ts">
  import { ref, onMounted, computed } from 'vue';
  import { useQuasar } from 'quasar';
  import LanguageSelect from './LanguageSelect.vue';
  import { useStore } from 'vuex';
  import services from '../services';
  // import i18n from "../plugins/i18n"; 

  const store = useStore();
  const $q = useQuasar();

  const theme = ref('Light'); 
  const user:any = computed(() => store.getters['User/user']);

  onMounted(() => {
    getThemeInMe();
  });
  
  const getThemeInMe = () => {
    const {preference} = user.value;
    if (preference[0].dark_mode != null) {
      if (preference[0].dark_mode) {
        $q.dark.set(true);
        theme.value = 'Light';
      } else {
        $q.dark.set(false);
        theme.value = 'Dark';
      }
    } else {
      checkThemeinSystem();
    } 
  }

  // Checking if the user has the preference of color scheme (dark or light) in the system 
  const checkThemeinSystem = () => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      $q.dark.set(true);
      theme.value = 'Light';
    } else {
      $q.dark.set(false)
      theme.value = 'Dark';
    }     
  };

  const toggle = async () => {
    $q.dark.toggle();

    if ($q.dark.isActive) {
      console.log("🚀 ~ file: ToolBar.vue ~ line 49 ~ toggle ~ $q.dark.isActive", $q.dark.isActive)
      theme.value = 'Light';
      await services.preferences(true, undefined)
    } else { 
      console.log("🚀 ~ file: ToolBar.vue ~ line 49 ~ toggle ~ $q.dark.isActive", $q.dark.isActive)
      theme.value = 'Dark';
      await services.preferences(false, undefined)
    }
  }

</script>

<template>
  <q-btn icon="person" :color="$q.dark.isActive ? 'light' : 'primary'" flat round>
    <q-menu>
      <q-list style="min-width: 100px">
        {{user.name}}

        <LanguageSelect />

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
