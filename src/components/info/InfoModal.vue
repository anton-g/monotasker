<template lang="pug">
  .shortcuts
    .modal(:class="{ 'is-active': show }")
      .modal-background(@click="hideModal")
      .modal-content.box.has-text-left
        h1.title.has-text-centered Info
        p Monotasking makes it so much easier to focus on your most important tasks. Do you want to prioritize better? Do you want to complete more? Do you want to reduce stress? Based on research, the Monotasking method puts you back in charge of your day.
        p This tool is based on the monotasking method by Staffan Nöteberg. Below is a short summary of how you use this tool.
        h2.title Short list
        p The short list is currently most important tasks and at most five.
        h2.title Grass catcher list
        p The grass catcher list is a 'catch all' list with all the stuff that doesn't fit on the short list right now.
        h2.title Panorama view
        p The panorama view is when you look at all your tasks and prioritize which is most impoortant right now.
        h2.title Weeding
        p Weeding is the process of once a week going through all your tasks and removing all but five.
</template>

<script>
export default {
  name: 'infomodal',
  methods: {
    hideModal () {
      this.$store.dispatch('hideInfo')
    }
  },
  computed: {
    show () {
      return this.$store.state.showInfo
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
