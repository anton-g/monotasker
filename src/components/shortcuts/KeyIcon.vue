<template lang="pug">
  .key(:class="{ 'special': special }")
    span.is-unselectable
      | {{ content }}
</template>

<script>
export default {
  name: 'keyicon',
  props: [
    'special',
    'content'
  ]
}
</script>

<style lang="scss" scoped>
.key {
	width:35px;
	height: 37px;
	padding: 1px;
	margin: 10px;

  > span {
    display: block;
    width: 35px;
    height: 35px;
    border: 1px solid #a9a9a9;
    border-radius: 2px 2px 2px 2px;
    font-size: 12px;
    box-sizing: border-box;
    text-align: center;
    padding-top: 9px;
    color: #7c7c7c;
    box-shadow: 0px 3px 0px -2px rgba(255,255,255,1), 0px 2px 0px 0px rgba(169,169,169,1);
  }

  &.special {
    > span {
      padding-top: 15px;
      font-size: 11px;
    }
  }
}
</style>
