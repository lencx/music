<!--
 * @author: lencx
 * @create_at: Jul 27, 2020
-->

<template>
  <svg xmlns="http://www.w3.org/2000/svg" :height="height" viewBox="0 0 24 24" :width="width">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path :fill="fill" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
</svg>
</template>

<script>
export default {
  name: 'IconReset',
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