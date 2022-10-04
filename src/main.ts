import { createApp } from 'vue'

import { Quasar } from 'quasar'
// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'

import './style.css'
import App from './App.vue'

// Routes
import router from './router';

// GlobalMixin
// import globalMixin from "./mixins/globalMixin";



const myApp = createApp(App)

myApp
  .use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
})
  .use(router)
  // .use(globalMixin)

// Assumes you have a <div id="app"></div> in your index.html
myApp.mount('#app')
