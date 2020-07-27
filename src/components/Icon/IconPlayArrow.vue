<!--
 * @author: lencx
 * @create_at: Jul 27, 2020
-->

<template>
  <svg xmlns="http://www.w3.org/2000/svg" :height="height" viewBox="0 0 24 24" :width="width">
    <path :fill="fill" d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z"/>
  </svg>
</template>

<script>
export default {
  name: 'IconPlayArrow',
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
