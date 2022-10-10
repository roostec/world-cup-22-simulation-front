<template>
  <q-page class="flex flex-center w-full p-5">
    <!-- <div class="title text-left">
      <h1>Palpites</h1>
      <span>Suas apostas estão aqui</span>
    </div> -->
    
      <q-card bordered class="my-card bg-slate-200 w-full max-w-[1100px] flex flex-col flex-center items-stretch">
        <Match/>
        <q-separator inset />
        <Match/>
        <q-separator inset />
        <Match/>
        <q-separator inset />
        <Match/>
        <q-separator inset />      
      </q-card>

      <q-btn color="positive" label="Salvar"/>

  </q-page>
</template>

<script setup lang="ts">
import Match from '../components/Match.vue'


</script>
