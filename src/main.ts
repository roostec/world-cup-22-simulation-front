import { createApp } from 'vue'

// Quasar
import { Quasar } from 'quasar'
// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'
// Import Quasar css
import 'quasar/src/css/index.sass'
import quasarOptions from "./quasar-options";

import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import i18n from "./plugins/i18n";
// import api from "./plugins/axios";

createApp(App)
  .use(Quasar, quasarOptions)
  .use(i18n)
  .use(router)
  .use(store)
  // .use(api)
  .mount('#app')
