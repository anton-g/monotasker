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
    console.log('register keyevents')
    window.addEventListener('keydown', (e) => {
      e.preventDefault()
      if (e.which === 27) {
        EventBus.$emit('onEsc')
      } else if (e.which === 83 && (navigator.platform.match('Mac') ? e.metaKey : e.ctrlKey)) {
        EventBus.$emit('onCtrlS')
      }
    }, false)
  }
})
