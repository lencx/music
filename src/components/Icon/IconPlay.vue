<!--
 * @author: lencx
 * @create_at: Jul 27, 2020
-->

<template>
  <svg xmlns="http://www.w3.org/2000/svg" :height="height" viewBox="0 0 24 24" :width="width">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path :fill="fill" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
  </svg>
</template>

<script>
export default {
  name: 'IconPlay',
  props: {
    fill: {
      type: String,
      default: '#666',
    },
    width: {
      type: [Number, String],
      default: 24,
    },
    height: {
      type: [Number, String],
      default: 24,
    },
  },
}
</script>
