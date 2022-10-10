<script setup lang="ts">
import { ref } from "vue";

const homeTeamScore = ref(null);
const visitTeamScore = ref(null);

</script>

<template>
  <q-card-section class="flex justify-between">

    <div class="warnings">
      <q-badge color="primary" text-color="white" label="!" />
      Alterado
    </div>

    <div class="match">
      <div class="teams flex gap-3 items-center">
        <div class="team home-team flex gap-3">
          <div class="name text-right">
            <div class="team-initials">QAT</div>
            <div class="team-name">Qatar</div>
          </div>
          <div class="flag">
            <q-img
              src="https://app.maisbolao.com.br/arquivos/time/6aebfd23-090a-4925-8f57-2f8a596bcaf2.png"
              width="44px"
              spinner-color="primary"
              spinner-size="82px"
            />
          </div>
          <q-input
            filled
            v-model.number="homeTeamScore"
            type="number"
            class="w-[64px]"
            dense
            input-class="text-center"
          />
        </div>
        <div class="vs">
          <q-badge rounded color="primary" class="text-lg">
            <q-icon name="clear" color="white" />
          </q-badge>
        </div>
        <div class="team visiting-team flex gap-3">
          <q-input
            filled
            v-model.number="visitTeamScore"
            type="number"
            class="w-[64px]"
            dense
            input-class="text-center"
          />
          <div class="flag">
            <q-img
              src="https://app.maisbolao.com.br/arquivos/time/441ff244-6feb-47af-b50b-057f724efc2f.png"
              width="44px"
              spinner-color="primary"
              spinner-size="82px"
            />
          </div>
          <div class="name">
            <div class="team-initials">EQU</div>
            <div class="team-name">Equador</div>
          </div>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-12 data text-center">
          <q-chip
            square
            color="blue"
            text-color="white"
            icon="calendar_month"
            label="20/11/2022"
          />
          <q-chip
            square
            color="blue"
            text-color="white"
            icon="alarm"
            label="13:00"
          />
          <q-chip
            square
            color="blue"
            text-color="white"
            icon="place"
            label="Al Bayt"
          />
        </div>
      </div>
    </div>

    <div class="hunch-players text-xs">
      <div class="player flex items-center gap-2">
        <q-icon name="check" />
        Daniel K.
      </div>
      <div class="player flex items-center gap-2">
        <q-icon name="check" />
        Daniel K.
      </div>
      <div class="player flex items-center gap-2">
        <q-icon name="check" />
        Daniel K.
      </div>
      <div class="player flex items-center gap-2">
        <q-icon name="check" />
        Daniel K.
      </div>
    </div>
    
  </q-card-section>
</template>

<style lang='sass'>

</style>