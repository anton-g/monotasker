<template lang="pug">
  .short-list-item(:class="{ 'is-selected': focus }", @dblclick="enableEditing")
    .level
      .level-left
        .level-item.content
          span(:class="{ 'is-hidden': isEditing }") {{ this.item.text }}
          span(:class="{ 'is-hidden': !isEditing }")
            input.input(:value="this.item.text", @blur="editItem", @click.enter="")
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
    'focus',
    'isEditing'
  ],
  methods: {
    deleteItem () {
      this.$emit('delete')
    },
    moveItem () {
      this.$emit('move')
    },
    enableEditing () {
      this.isEditing = true
    },
    editItem () {
      this.$emit('edit')
    }
  },
  computed: {
    editText () {
      return this.item.text
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
