<script setup lang="ts">
  import { ref } from 'vue';
  import { useI18n } from "vue-i18n";
  import i18n from "../plugins/i18n"; 

  const props = defineProps({
      noTitle: {
        type: Boolean,
        default: false,
      },
  });

  const selectedLanguage = ref({ label: 'English', language: 'en', flag: 'united-states' });
  const languages = ref([
    { label: 'English', language: 'en', flag: 'united-states'},
    // { label: 'Español', language: 'es', flag: 'spain'},
    { label: 'Portugues', language: 'pt', flag: 'portugal'}
  ]);

  const { t } = useI18n({
    inheritLocale: true,
    useScope: 'local'
  })
  
  const changeLocale = (locale:any) => i18n.global.locale.value = locale.language;

</script>

<template>
  <q-select
    dense
    v-model="selectedLanguage"
    @update:model-value="changeLocale"
    :options="languages"
    filled
  >
    <template v-slot:selected>
      <q-item dense class="q-px-none">
        <q-item-section>
          <q-img
            img-class="rounded-borders"
            :src="`src/assets/flags/${selectedLanguage.flag}.png`"
            spinner-color="white"
            width="24px"
          />
        </q-item-section>
        <q-item-section v-if="!noTitle">
          <q-item-label>{{ selectedLanguage.label }}</q-item-label>
        </q-item-section>
      </q-item>
    </template>

    <template v-slot:before-options>
      <q-item>
        <q-item-section>
          <q-item-label>{{ $t("LANGUAGE") }}</q-item-label>
        </q-item-section>
      </q-item>
      <q-separator inset />
    </template>

    <template v-slot:option="scope">
      <q-item v-bind="scope.itemProps">
        <q-item-section side>
          <q-img
            img-class="rounded-borders"
            :src="`src/assets/flags/${scope.opt.flag}.png`"
            spinner-color="white"
            width="24px"
          />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ scope.opt.label }}</q-item-label>
        </q-item-section>
      </q-item>
    </template>
  </q-select>
</template>


