<script setup lang="ts">
  import { computed } from 'vue';
  import { useStore } from 'vuex';
  import { useQuasar } from 'quasar'

  const store = useStore();
  const users = computed(() => store.getters['User/users']);

  const $q = useQuasar()

  const toggle = () => {
    $q.dark.toggle()
    console.log($q.dark.isActive)
  }

</script>

<template>
  <q-page class="flex flex-center">
    <button @click="toggle">
      dark mode
    </button>
    <h1 class="text-3xl font-bold underline px-8">
      Hello world!
    </h1>
    <ul>
      <li 
        v-for="user in users"
        :key="user"    
      >
        {{user}}
      </li>
  </ul>

  </q-page>
</template>

