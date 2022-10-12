<script setup lang="ts">
  import { computed, watch } from 'vue'; 
  import { useStore } from 'vuex';
  import services from '../services';

  const store = useStore();

  const props = defineProps({
      noTitle: {
        type: Boolean,
        default: false,
      }
  });

  const selectedLanguage = computed(() =>  store.getters['User/selectedLanguage']);
  watch(selectedLanguage, async (newVal) => {
    if (!newVal) await store.dispatch('User/ActionSetLocation');
  }, { immediate:true });

  const languages = computed(() => store.getters['User/languages']);    
  const changeLocale = async (locale:any) => {
    await store.dispatch('User/ActionSetLanguage', locale);
    await services.preferences(undefined, locale.language)
  }

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
            v-if="selectedLanguage"
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


