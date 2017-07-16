<template lang="pug">
  .grass-catcher-list
    h1.title.has-text-centered .grass catcher list
    input.input(@keyup.enter="addItem", v-model="input")
    grass-catcher-list-item(v-for="item in grassCatcherList", :item="item", @delete="deleteItem(item)")
</template>

<script>
import GrassCatcherListItem from '@/components/grasscatcher/GrassCatcherListItem'

export default {
  name: 'grasscatcherlist',
  components: {
    GrassCatcherListItem
  },
  data () {
    return {
      input: ''
    }
  },
  methods: {
    addItem () {
      if (this.input !== '') {
        this.$store.dispatch('addGrassCatcherListItem', {
          text: this.input.trim()
        })
        this.input = ''
      }
    },
    deleteItem (item) {
      this.$store.dispatch('deleteGrassCatcherListItem', item)
    }
  },
  computed: {
    grassCatcherList () {
      return this.$store.state.grassCatcherList
    }
  }
}
</script>

<style lang="scss">
  
</style>
