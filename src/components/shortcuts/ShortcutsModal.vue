<template lang="pug">
  .shortcuts
    .modal(:class="{ 'is-active': show }")
      .modal-background(@click="hideModal")
      .modal-content.box
        h1.title.has-text-centered Shortcuts
        .columns
          .column
            h2.title.is-4 Global
            .level
              .level-left
                .level-item
                  key-icon(content="ctrl", :special="true")
                  | +
                  key-icon(content="i")
                .level-item
                  | Show info
            .level
              .level-left
                .level-item
                  key-icon(content="ctrl", :special="true")
                  | +
                  key-icon(content="s")
                .level-item
                  | Show shortcuts
            .level
              .level-left
                .level-item
                  key-icon(content="esc", :special="true")
                .level-item
                  | Show grass catcher list
            h2.title.is-4 Short list
            .level
              .level-left
                .level-item
                  key-icon(content="left", :special="true")
                .level-item
                  | Mark item complete
          .column
            h2.title.is-4 Short List and Grass Catcher
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
                  key-icon(content="right", :special="true")
                .level-item
                  | Move item to other list
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
