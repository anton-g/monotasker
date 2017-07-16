<template lang="pug">
  .short-list
    h1.title.has-text-centered .short list
    input.input(
      @keyup.enter="addItem",
      @keyup.delete="deleteSelectedItem",
      @keydown.down="moveDown",
      @keydown.up="moveUp",
      @blur="resetFocus"
      v-model="input")
    short-list-item(
      v-for="(item, index) in shortList",
      :item="item",
      :focus="focusedIndex === index"
      @delete="deleteItem(item)",
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
    moveDown () {
      this.focusedIndex = Math.min(this.focusedIndex + 1, this.shortList.length - 1)
    },
    moveUp () {
      this.focusedIndex = Math.max(this.focusedIndex - 1, -1)
    },
    deleteSelectedItem () {
      if (this.focusedIndex !== -1) {
        this.deleteItem(this.shortList[this.focusedIndex])
      }
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
