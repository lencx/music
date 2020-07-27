<!--
 * @author: lencx
 * @create_at: Jul 27, 2020
-->

<template>
  <svg enable-background="new 0 0 24 24" :height="height" viewBox="0 0 24 24" :width="width"
    xmlns="http://www.w3.org/2000/svg">
    <path d="m0 0h24v24h-24z" fill="none"/>
    <path :fill="fill" d="m8 16h8v-8h-8zm4-14c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10z" fill-rule="evenodd"/>
  </svg>
</template>

<script>
export default {
  name: 'IconPause',
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