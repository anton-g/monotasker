<template lang="pug">
  .foot.has-text-centered
    .columns
      .column.is-half.is-offset-one-quarter
        h1.title.is-3
          span.icon
            i.fa.fa-long-arrow-right
          | monotasker
          span.icon
            i.fa.fa-long-arrow-right
        p
          | Made with 
          span.icon
            i.fa.fa-heart
          |  by 
          a anton-g
      .column
        .menu
          a(@click="showHelp")
            span.icon.is-medium
              i.fa.fa-info
          a(@click="showShortcuts")
            span.icon.is-medium
              i.fa.fa-keyboard-o
</template>

<script>
export default {
  name: 'footer',
  methods: {
    showShortcuts () {
      this.$store.dispatch('showShortcuts')
    },
    showInfo () {
      this.$store.dispatch('showHelp')
    }
  }
}
</script>

<style lang="scss" scoped>
.foot {
  padding: 1rem;

  h1 {
    margin-bottom: 0.3rem;
  }

  .menu {
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;

    a {
      padding: 0.3rem;
      color: black;
    }
  }
}
</style>
