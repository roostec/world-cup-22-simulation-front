import { createApp } from 'vue'

// Quasar
import { Quasar } from 'quasar'
// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'
// Import Quasar css
import 'quasar/src/css/index.sass'
import quasarUserOptions from "./quasar-user-options";

import App from './App.vue'

// Routes
import router from './router';
// State
import store from './store';

// GlobalMixin
// import globalMixin from "./mixins/globalMixin";



createApp(App)
  .use(Quasar, quasarUserOptions)
  .use(router)
  .use(store)
  // .use(globalMixin)
  .mount('#app')
