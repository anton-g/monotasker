<template lang="pug">
  .short-list-item(:class="{ 'is-selected': focus }")
    .level
      .level-left
        .level-item.content
          | {{ this.item.text }}
      .level-right
        .level-item
          a.move-button(@click="moveItem")
            span.icon
              i.fa.fa-long-arrow-down
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
    },
    moveItem () {
      this.$emit('move')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./src/assets/scss/colors.scss";

.short-list-item {
  padding: 0.5rem;
  
  .content {
    font-size: 1.7rem;
  }
  
  .move-button {
    color: rgba($black, 0.3);

    &:hover {
      color: rgba($black, 0.5);
    }
  }

  &.is-selected {
    background-color: $primary;
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
