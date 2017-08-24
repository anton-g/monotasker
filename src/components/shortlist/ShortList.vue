<template lang="pug">
  .section.short-list
    h1.title.has-text-centered Short List
    .field.has-addons
      .control.is-expanded
        input.input.is-medium(
          @keyup.enter="addItem",
          @keyup.delete.prevent="deleteSelectedItem",
          @keydown.down.prevent="moveDown",
          @keydown.up.prevent="moveUp",
          @keydown.right.prevent="moveSelectedItem",
          @blur="resetFocus",
          @input="resetFocus",
          :focus="focusedIndex === -1",
          v-model="input",
          placeholder="What's most importand right now?")
      .control
        a.button.is-medium Add
    .items(@mouseleave="resetFocus()")
      short-list-item(
        v-for="(item, index) in shortList",
        :item="item",
        :focus="focusedIndex === index"
        @delete="deleteItem(item)",
        @move="moveItem(item)",
        @mouseenter.native="setFocus(item)")
</template>

<script>
import ShortListItem from '@/components/shortlist/ShortListItem'

export default {
  name: 'shortlist',
  components: {
    ShortListItem
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
.short-list {
  .field {
    margin-bottom: 0;
  }
}
</style>
