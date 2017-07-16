<template lang="pug">
  #app
    main
      .container
        .section
          short-list
          grass-catcher-list(v-show="grassCatcherVisibility")
    mt-footer
</template>

<script>
import EventBus from '@/utils/EventBus'

import MtFooter from '@/components/Footer'
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
  },
  computed: {
    grassCatcherVisibility () {
      return this.$store.state.grassCatcherVisibility
    }
  }
}
</script>

<style>
#app {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

main {
  flex: 1;  
}
</style>
