<template lang="pug">
  .shortcuts
    .modal(:class="{ 'is-active': show }")
      .modal-background(@click="hideModal")
      .modal-content.box
        h1.title.has-text-centered Shortcuts
        h2.title.is-4 Global
        .level
          .level-left
            .level-item
              key-icon(content="s")
            .level-item
              | Show shortcuts
        .level
          .level-left
            .level-item
              key-icon(content="h")
            .level-item
              | Show help
        .level
          .level-left
            .level-item
              key-icon(content="esc", :special="true")
            .level-item
              | Show grass catcher list
        h2.title.is-4 Lists
        .level
          .level-left
            .level-item
              key-icon(content="enter", :special="true")
            .level-item
              | Add item
        .level
          .level-left
            .level-item
              key-icon(content="down", :special="true")
            .level-item
              | Move selection down
        .level
          .level-left
            .level-item
              key-icon(content="up", :special="true")
            .level-item
              | Move selection up
        .level
          .level-left
            .level-item
              key-icon(content="del", :special="true")
            .level-item
              | Delete selected item
</template>

<script>
import KeyIcon from '@/components/shortcuts/KeyIcon'

export default {
  name: 'shortcutsmodal',
  components: {
    KeyIcon
  },
  methods: {
    hideModal () {
      this.$store.dispatch('hideShortcuts')
    }
  },
  computed: {
    show () {
      return this.$store.state.showShortcuts
    }
  }
}
</script>

<style lang="scss" scoped>
.level {
  margin: 0;
}

.title.is-4 {
  margin-bottom: 0;
  margin-top: 1rem;
}
</style>
