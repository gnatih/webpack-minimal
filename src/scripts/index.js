import Vue from 'vue'
import router from './plugins/router'
import vuetify from './plugins/vuetify'
import App from './components/App.vue'

import './scss/main.scss'

new Vue({
  router,
  vuetify,
  components: { App },
  el: '#app',
  template: '<App/>'
})
