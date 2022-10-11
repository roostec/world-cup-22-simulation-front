<script setup lang="ts">
  import { ref, computed, onMounted } from 'vue';
  import { useStore } from 'vuex';
  import services from '../services';

  // State
  const store = useStore();
  const users = computed(() => store.getters['User/users']);

  const getStatsQuery = (): any => {
    return {
      sport: 'Futebol',
      storyId: 123,
    };
  };

  const sports = computed((): any => {
    return store.getters[`User/getStories`];
  });

  const getSports = () => {
    store.dispatch('User/ActionSetSports', getStatsQuery());
  };

  onMounted(async () => {
    await getSports();
    // await services.getAll();
  }); 

  // Methods
  const catImage = ref('');  


</script>


<template>
  <q-page class="flex flex-center">
    <br/>
    <div class="col-md-12 text-center">
      <img :src="catImage" class="img-fluid" height="500" width="450">
    </div>
    <h1 class="text-3xl font-bold px-8">
      Hello world! - {{$t('SEARCH_ALL')}}
    </h1>
    <ul>
      <li 
        v-for="user in users"
        :key="user"    
      >
        {{user}} **
      </li>
    </ul>
    <br/>
    <ul>
      <li 
        v-for="sport in sports"
        :key="sport"    
      >
        {{sport}} --
      </li>
    </ul>

  </q-page>
</template>