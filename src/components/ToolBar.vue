<script setup lang="ts">
  import { ref } from 'vue';
  import { useQuasar } from 'quasar';
  import LanguageSelect from './LanguageSelect.vue';

  const $q = useQuasar();

  const theme = ref('Light');

  const toggle = () => {
    $q.dark.toggle();
    $q.dark.isActive ? theme.value = 'Dark' : theme.value = 'Light';
    console.log($q.dark.isActive);
  }


</script>

<template>
  <q-btn icon="person" flat round>
    <q-menu>
      <q-list style="min-width: 100px">
        {{ $t("WELCOME") }}

        <LanguageSelect/>

        <q-btn
          color="primary"
          icon="check"
          :label="`${theme} Theme`"
          @click="toggle"
        />

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
