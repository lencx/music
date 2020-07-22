<!--
 * @author: lencx
 * @create_at: Jul 22, 2020
-->

<template>
  <div class="m-controls">
    <span @click="play" title="play">▶️</span>
    <span @click="pause" title="pause">⏸️</span>
    <span @click="reset" title="reset">🔄</span>
  </div>
</template>

<script>
export default {
  name: 'MControls',
  props: {
    reset: Function,
    play: Function,
    pause: Function,
  },
}
</script>