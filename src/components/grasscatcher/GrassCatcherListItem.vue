<template lang="pug">
  .grass-catcher-list-item
    .level
      .level-left
        .level-item
          | {{ this.item.text }}
      .level-right
        .level-item
          a.delete.is-medium(@click="deleteItem")

</template>

<script>
export default {
  name: 'grasscatcherlistitem',
  props: [
    'item'
  ],
  methods: {
    deleteItem () {
      this.$emit('delete')
    }
  }
}
</script>

<style lang="scss" scoped>
.grass-catcher-list-item {
  padding: 0.5rem;

  .level-right {
    visibility: hidden;
  }

  &:hover {
    .level-right {
      visibility: visible;
    }
  }
}
</style>
