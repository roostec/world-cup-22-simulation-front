<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
  match : {
    type: Object,
    required: true,
    default(rawProps:any) {
      return {
        home_team: null,
        home_initials: null,
        away_team: null,
        away_initials: null,
        home_score: null,
        away_score: null,
        date: null,
        time: null,
        location: null
      }
    }
  }
});

const homeTeamScore = ref(null);
const visitTeamScore = ref(null);

</script>

<template>
  <q-card-section class="flex justify-between">

    <div class="warnings">
      <div v-if="props.match.home_score != null">
        <q-badge color="success" text-color="white" label="v" />
        Salvo
      </div>
      <div v-else>
        <q-badge color="primary" text-color="white" label="!" />
        Alterado
      </div>
    </div>

    <div class="match">
      <div class="teams flex gap-3 items-center">
        <div class="team home-team flex gap-3">
          <div class="name text-right">
            <div class="team-initials">{{props.match.home_initials.toUpperCase()}}</div>
            <div class="team-name">{{props.match.home_team}}</div>
          </div>
          <div class="flag">
            <!-- src="https://app.maisbolao.com.br/arquivos/time/6aebfd23-090a-4925-8f57-2f8a596bcaf2.png" -->
            <q-img
              :src="`src/assets/img/flags/${props.match.home_initials}.png`"
              width="44px"
              spinner-color="primary"
              spinner-size="82px"
            />
          </div>
          <q-input
            filled
            v-model.number="props.match.home_score"
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
            v-model.number="props.match.away_score"
            type="number"
            class="w-[64px]"
            dense
            input-class="text-center"
          />
          <div class="flag">
            <!-- src="https://app.maisbolao.com.br/arquivos/time/441ff244-6feb-47af-b50b-057f724efc2f.png" -->
            <q-img
              :src="`src/assets/img/flags/${props.match.away_initials}.png`"
              width="44px"
              spinner-color="primary"
              spinner-size="82px"
            />
          </div>
          <div class="name">
            <div class="team-initials">{{props.match.away_initials.toUpperCase()}}</div>
            <div class="team-name">{{props.match.away_team}}</div>
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
            :label="props.match.date"
          />
          <q-chip
            square
            color="blue"
            text-color="white"
            icon="alarm"
            :label="props.match.time"
          />
          <q-chip
            square
            color="blue"
            text-color="white"
            icon="place"
            :label="props.match.location"
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