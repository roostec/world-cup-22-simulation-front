<template>
  <q-page class="flex flex-center w-full p-5">
    <!-- <div class="title text-left">
      <h1>Palpites</h1>
      <span>Suas apostas estão aqui</span>
    </div> -->
    
      <q-card bordered flat class="my-card bg-slate-100 w-full max-w-[1100px] flex flex-col flex-center items-stretch">
        <div v-for="(match, index) in matches" :key="index">
          <Match :match="match"/>
          <q-separator inset v-if="index != matches.length - 1"/>
        </div>
 
      </q-card>

      <q-btn color="positive" label="Salvar"/>

  </q-page>
</template>

<script setup lang="ts">
import Match from '../components/Match.vue'

const matches = [
  { home_team: 'Qatar', home_initials: 'qat', away_team: 'Equador',  away_initials: 'equ', home_score: null, away_score: null, date: '20/11/2022', time: '13:01', location: 'Al Bayt' },
  { home_team: 'Brazil', home_initials: 'bra', away_team: 'Croacia',  away_initials: 'cro', home_score: 0, away_score: 2, date: '20/11/2022', time: '13:00', location: 'Al Bayt' },
  { home_team: 'Ira', home_initials: 'ira', away_team: 'Pais de Gales',  away_initials: 'gal', home_score: 1, away_score: 7, date: '20/11/2022', time: '13:00', location: 'Al Bayt' },
  { home_team: 'Portugal', home_initials: 'por', away_team: 'Suica',  away_initials: 'sui', home_score: null, away_score: null, date: '20/11/2022', time: '13:00', location: 'Al Bayt' },
]



</script>
