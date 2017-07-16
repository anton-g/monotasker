<template lang="pug">
  .short-list
    h1.title.has-text-centered .short list
    input.input(
      @keyup.enter="addItem",
      @keyup.delete="deleteSelectedItem",
      @keydown.down="moveDown",
      @keydown.up="moveUp",
      @keydown.right="moveSelectedItem"
      @blur="resetFocus"
      v-model="input")
    .items(@mouseleave="resetFocus()")
      short-list-item(
        v-for="(item, index) in shortList",
        :item="item",
        :focus="focusedIndex === index"
        @delete="deleteItem(item)",
        @move="moveItem(item)",
        @mouseenter.native="setFocus(item)")
    shortcuts-modal
</template>

<script>
import ShortListItem from '@/components/shortlist/ShortListItem'
import ShortcutsModal from '@/components/shortcuts/ShortcutsModal'

export default {
  name: 'shortlist',
  components: {
    ShortListItem,
    ShortcutsModal
  },
  data () {
    return {
      input: '',
      focusedIndex: -1
    }
  },
  methods: {
    addItem () {
      if (this.input !== '') {
        this.$store.dispatch('addShortListItem', {
          text: this.input.trim()
        })
        this.input = ''
      }
    },
    deleteItem (item) {
      this.$store.dispatch('deleteShortListItem', item)
    },
    deleteSelectedItem () {
      if (this.focusedIndex !== -1) {
        this.deleteItem(this.shortList[this.focusedIndex])
        this.focusedIndex = Math.min(this.focusedIndex, this.shortList.length - 1)
      }
    },
    moveItem (item) {
      this.$store.dispatch('moveToGrassCatcher', item)
    },
    moveSelectedItem () {
      if (this.focusedIndex !== -1) {
        this.moveItem(this.shortList[this.focusedIndex])
        this.focusedIndex = Math.min(this.focusedIndex, this.shortList.length - 1)
      }
    },
    moveDown () {
      this.focusedIndex = Math.min(this.focusedIndex + 1, this.shortList.length - 1)
    },
    moveUp () {
      this.focusedIndex = Math.max(this.focusedIndex - 1, -1)
    },
    resetFocus () {
      this.focusedIndex = -1
    },
    setFocus (item) {
      this.focusedIndex = this.shortList.indexOf(item)
    }
  },
  computed: {
    shortList () {
      return this.$store.state.shortList
    }
  }
}
</script>

<style lang="scss">

</style>
