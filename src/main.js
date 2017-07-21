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
      if (e.which === 27) {
        e.preventDefault()
        EventBus.$emit('onEsc')
      } else if (e.which === 83 && (navigator.platform.match('Mac') ? e.metaKey : e.ctrlKey)) {
        e.preventDefault()
        EventBus.$emit('onCtrlS')
      } else if (e.which === 73 && (navigator.platform.match('Mac') ? e.metaKey : e.ctrlKey)) {
        e.preventDefault()
        EventBus.$emit('onCtrlI')
      }
    }, false)
  }
})
