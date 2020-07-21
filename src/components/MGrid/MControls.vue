<!--
 * @author: lencx
 * @create_at: Jul 22, 2020
-->

<template>
  <div class="m-controls">
    <span @click="playGrid" title="play">▶️</span>
    <span @click="pauseGrid" title="pause">⏸️</span>
    <span @click="resetGrid" title="reset">🔄</span>
  </div>
</template>

<script>
export default {
  name: 'MControls',
  setup() {
    const methods = {
      playGrid() {},
      pauseGrid() {},
      resetGrid() {},
    }

    return {
      ...methods,
    }
  }
}
</script>