<template>
  <q-layout view="lHh Lpr lFf">
    <q-header
      bordered
      :class="{
        'bg-primary': $q.dark.isActive,
        'bg-white text-black': !$q.dark.isActive,
      }"
    >
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
        />
        <q-toolbar-title>Bolao Qatar World Cup '22</q-toolbar-title>
        <q-btn icon="person" flat round>
          <q-menu>
            <q-list style="min-width: 100px">
              {{t('WELCOME')}}

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
                    <q-item-section>
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

              <q-btn color="primary" icon="check" :label="`${theme} Theme`" @click="toggle" />

              <q-item clickable v-close-popup to="signin">
                <q-item-section side>
                  <q-icon name="mdi-exit-to-app" color="negative"/>
                </q-item-section>
                <q-item-section>Logout</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered class="bg-grey-2">
      <q-list>
        <q-item-label header>Menu</q-item-label>

        <!-- <q-item clickable tag="a" target="_blank" href="https://quasar.dev"> -->
          <router-link to="SignIn" append>
            <q-item clickable tag="a" target="_blank" href="https://quasar.dev">
              <q-item-section avatar>
                <q-icon name="school" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Home</q-item-label>                
                <q-item-label caption>Dashboard</q-item-label>
              </q-item-section>
            </q-item>
          </router-link>

          <router-link to="SignIn" append>
            <q-item clickable tag="a" target="_blank" href="https://quasar.dev">
              <q-item-section avatar>
                <q-icon name="code" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Classificacao</q-item-label>                
                <q-item-label caption>-</q-item-label>
              </q-item-section>
            </q-item>
          </router-link>

          <router-link to="SignIn" append>
            <q-item clickable tag="a" target="_blank" href="https://quasar.dev">
              <q-item-section avatar>
                <q-icon name="chat" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Palpites</q-item-label>                
                <q-item-label caption>-</q-item-label>
              </q-item-section>
            </q-item>
          </router-link>

          <router-link to="SignIn" append>
            <q-item clickable tag="a" target="_blank" href="https://quasar.dev">
              <q-item-section avatar>
                <q-icon name="forum" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Classificacao</q-item-label>                
                <q-item-label caption>-</q-item-label>
              </q-item-section>
            </q-item>
          </router-link>

          <router-link to="SignIn" append>
            <q-item clickable tag="a" target="_blank" href="https://quasar.dev">
              <q-item-section avatar>
                <q-icon name="forum" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Convidar Amigos</q-item-label>                
                <q-item-label caption>-</q-item-label>
              </q-item-section>
            </q-item>
          </router-link>

          <router-link to="SignIn" append>
            <q-item clickable tag="a" target="_blank" href="https://quasar.dev">
              <q-item-section avatar>
                <q-icon name="forum" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Moderacao</q-item-label>                
                <q-item-label caption>-</q-item-label>
              </q-item-section>
            </q-item>
          </router-link>

          <router-link to="SignIn" append>
            <q-item clickable tag="a" target="_blank" href="https://quasar.dev">
              <q-item-section avatar>
                <q-icon name="rss_feed" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Editar</q-item-label>                
                <q-item-label caption>-</q-item-label>
              </q-item-section>
            </q-item>
          </router-link> 

      </q-list>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
  import { ref } from 'vue';  
  import { useQuasar } from 'quasar';
  import { useI18n } from "vue-i18n";
  import i18n from "../plugins/i18n"; 

  const theme = ref('Light');
  const selectedLanguage = ref('');
  const leftDrawerOpen = ref(false);
  const languages = ref([
    { label: 'English', language: 'en', flag: 'united-states' },
    { label: 'Español', language: 'es', flag: 'spain' },
    { label: 'Portugues', language: 'pt', flag: 'portugal' }
  ]);

  const { t } = useI18n({
    inheritLocale: true,
    useScope: 'local'
  })

  const changeLocale = (locale:any) => {
    console.log("🚀 ~ file: MainLayout.vue ~ line 134 ~ changeLocale ~ locale", locale)
    i18n.global.locale.value = locale.language;
  }

  const toggle = () => {
    $q.dark.toggle();
    $q.dark.isActive ? theme.value = 'Dark' : theme.value = 'Light';
    console.log($q.dark.isActive);
  }

  const $q = useQuasar()
  // get status
  console.log($q.dark.isActive) // true, false
  // get configured status
  console.log($q.dark.mode) // "auto", true, false


</script>

