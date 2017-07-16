<template lang="pug">
  .foot.has-text-centered
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
</template>

<script>
export default {
  name: 'footer'
}
</script>

<style lang="scss" scoped>
.foot {
  padding: 1rem;

  h1 {
    margin-bottom: 0.3rem;
  }
}
</style>
