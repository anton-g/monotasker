import Vue from 'vue'
import App from './App'
import store from './store'
import EventBus from './utils/EventBus'

import 'font-awesome/scss/font-awesome.scss'
require('@/assets/scss/mt-bulma.scss')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App },
  mounted () {
    window.addEventListener('keyup', (e) => {
      if (event.keyCode === 27) {
        EventBus.$emit('onEsc')
      }
    })
  }
})
