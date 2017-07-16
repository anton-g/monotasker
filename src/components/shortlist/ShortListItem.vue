<template lang="pug">
  .short-list-item(:class="{ 'is-selected': focus }")
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
  name: 'shortlistitem',
  props: [
    'item',
    'focus'
  ],
  methods: {
    deleteItem () {
      this.$emit('delete')
    }
  }
}
</script>

<style lang="scss" scoped>
.short-list-item {
  padding: 0.5rem;

  &.is-selected {
    background-color: red
  }

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
