<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md w-full max-w-[786px]">
      <q-table
        title="Treats"
        :rows="rows"
        :columns="columns"
        row-key="name"
        :pagination.sync="pagination"
        hide-bottom
        :filter="filter"
        :visible-columns="visibleColumns"
      >
      
        <template v-slot:header="props">
          <q-tr :props="props">
            <q-th auto-width />
            <q-th
              v-for="col in props.cols"
              :key="col.name"
              :props="props"
              class="text-italic text-primary"
            >
              {{ col.label }}
              <q-tooltip  class="bg-primary" anchor="top middle" self="center middle">
                {{col.name}}
              </q-tooltip>
            </q-th>
          </q-tr>
        </template>

        <template v-slot:body="props">
        <q-tr :props="props">

          <q-td auto-width>
            <div v-if="props.rowIndex < 3">
              <q-badge :color="props.rowIndex < 2 ? props.rowIndex === 0 ? 'green' : 'red' : 'bronze' ">
                # {{props.rowIndex + 1 > 10 ? props.rowIndex + 1 : '0' + (props.rowIndex + 1)}}
              </q-badge>
            </div>
            <div v-else>
              # {{props.rowIndex + 1 > 10 ? props.rowIndex + 1 : '0' + (props.rowIndex + 1)}}
            </div>
          </q-td>

          <q-td key="name" :props="props">
            <div class="flex items-center gap-2">
              <q-img
                src="https://app.maisbolao.com.br/assets/img/usuario.png"
                width="40px"
                spinner-color="primary"
                spinner-size="82px"
                class="rounded-full"
              />
              <p class="text-primary text-lg">{{ props.row.name }}</p>             
            </div>
          </q-td>
          <q-td key="TOTAL" :props="props">
            <!-- <q-badge color="green"> -->
            <p class="text-lg">{{ props.row.calories }}</p>             
            <!-- </q-badge> -->
          </q-td>
          <q-td
            v-for="col in props.cols.splice(2,props.cols.length)"
            :key="col.name"
            :props="props"
          >
            {{ col.value }}
          </q-td>
        </q-tr>
        <q-tr v-show="props.expand" :props="props">
          <q-td colspan="100%">
            <div class="text-left">This is expand slot for row above: {{ props.row.name }}.</div>
          </q-td>
        </q-tr>
      </template>

        <template v-slot:top>
          <q-img
            src="src/assets/ico/world-cup-trophy-real-icon.png"
            spinner-color="primary"
            spinner-size="82px"
            width="50px"
          />

          <q-space />

          <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>

          <!-- <q-select
            v-model="visibleColumns"
            multiple
            outlined
            dense
            options-dense
            :display-value="$q.lang.table.columns"
            emit-value
            map-options
            :options="columns"
            option-value="name"
            options-cover
            style="min-width: 150px"
          /> -->
        </template>

      </q-table>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const pagination = ref({
  rowsPerPage: 30 // current rows per page being displayed
})

const filter = ref('');

const visibleColumns = ref([
  'TOTAL', 
  'Acertou o placar', 
  'Gols do time vencedor',
  'Saldo de gols',
  'Gols do Time Perdedor',
  'Acertou vencedor'
])

const columns = [
  {
    name: 'name',
    required: true,
    label: 'Jogador',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
    // sortable: true
  },
  // { name: 'TOTAL', align: 'center', label: 'TOTAL', field: 'total', sortable: true },
  { name: 'TOTAL', align: 'center', label: 'TOTAL', field: 'total' },
  { name: 'Acertou o placar', label: 'AP', field: 'calories' },
  { name: 'Gols do time vencedor', points:1, label: 'GV', field: 'fat' },
  { name: 'Saldo de gols', points:1, label: 'SG', field: 'carbs' },
  { name: 'Gols do Time Perdedor', points:1, label: 'GP', field: 'protein' },
  { name: 'Acertou vencedor', points:1, label: 'AV', field: 'sodium' },
  // { name: 'iron', points:1, label: 'Iron (%)', field: 'iron', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }
]

const rows = [
  {
    name: 'Daniel Kogut',
    total: 159,
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
    sodium: 87,
    calcium: '14%',
    iron: '1%'
  },
  {
    name: 'Rafael Apeni',
    total: 237,
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
    sodium: 129,
    calcium: '8%',
    iron: '1%'
  },
  {
    name: 'Rafinha',
    total: 262,
    calories: 262,
    fat: 16.0,
    carbs: 23,
    protein: 6.0,
    sodium: 337,
    calcium: '6%',
    iron: '7%'
  },
  {
    name: 'Rubens',
    total: 305,
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4.3,
    sodium: 413,
    calcium: '3%',
    iron: '8%'
  },
  {
    name: 'Fernando',
    total: 305,
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4.3,
    sodium: 413,
    calcium: '3%',
    iron: '8%'
  },
  {
    name: 'Yvan',
    total: 305,
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4.3,
    sodium: 413,
    calcium: '3%',
    iron: '8%'
  },
]



</script>

<style lang="scss" scoped>
td:nth-child(3) {
    background-color: #c1f4cd !important
}

tr {
  height: 63px;
}

</style>
