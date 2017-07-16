<template lang="pug">
  .short-list
    h1.title.has-text-centered .short list
    input.input(@keyup.enter="addItem", v-model="input")
    short-list-item(v-for="item in shortList", :item="item", @delete="deleteItem(item)")
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
      input: ''
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
