<!--
 * @author: lencx
 * @create_at: Jul 22, 2020
-->

<template>
  <div class="m-controls">
    <span @click="play" title="play">
      <icon-play fill="var(--green)" />
    </span>
    <span @click="pause" title="pause">
      <icon-pause fill="var(--blue)" />
    </span>
    <span @click="reset" title="reset">
      <icon-reset fill="var(--red)" />
    </span>
  </div>
</template>

<script>
import IconPlay from '/@comps/Icon/IconPlay.vue'
import IconPause from '/@comps/Icon/IconPause.vue'
import IconReset from '/@comps/Icon/IconReset.vue'

export default {
  name: 'MControls',
  components: {
    IconPlay,
    IconPause,
    IconReset,
  },
  props: {
    reset: Function,
    play: Function,
    pause: Function,
  },
}
</script>

<style lang="scss">
.m-controls {
  span {
    margin: 0 6px;
  }
}
</style>