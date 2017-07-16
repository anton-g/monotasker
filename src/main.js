import Vue from 'vue'
import App from './App'

import 'font-awesome/scss/font-awesome.scss'
require('@/assets/scss/mt-bulma.scss')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
