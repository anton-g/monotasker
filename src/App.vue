<template lang="pug">
  #app
    main
      .container
        .columns
          .column.is-half.is-offset-one-quarter
            short-list
            transition(name="slideIn")
              grass-catcher-list(v-show="grassCatcherVisibility")
    mt-footer
</template>

<script>
import EventBus from '@/utils/EventBus'

import MtFooter from '@/components/layout/Footer'
import ShortList from '@/components/shortlist/ShortList'
import GrassCatcherList from '@/components/grasscatcher/GrassCatcherList'

export default {
  name: 'app',
  components: {
    MtFooter,
    ShortList,
    GrassCatcherList
  },
  mounted () {
    EventBus.$on('onEsc', () => {
      this.$store.dispatch('toggleGrassCatcher')
    })
    EventBus.$on('onCtrlS', () => {
      this.$store.dispatch('toggleShortcuts')
    })
  },
  computed: {
    grassCatcherVisibility () {
      return this.$store.state.grassCatcherVisibility
    }
  }
}
</script>

<style lang="scss">
#app {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

main {
  flex: 1;  
}

.slideIn-enter-active, .slideIn-leave-active {
  transition: all .2s;
}
.slideIn-enter, .slideIn-leave-to {
  opacity: 0;
  transform: translateY(120px);
}
</style>
