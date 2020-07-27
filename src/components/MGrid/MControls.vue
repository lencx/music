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
    <span @click="share" title="share">
      <icon-share fill="var(--yellow)" />
    </span>
  </div>
</template>

<script>
import IconPlay from '/@comps/Icon/IconPlay.vue'
import IconPause from '/@comps/Icon/IconPause.vue'
import IconReset from '/@comps/Icon/IconReset.vue'
import IconShare from '/@comps/Icon/IconShare.vue'
import { copyToClipboard } from '/@utils/tools'

export default {
  name: 'MControls',
  components: {
    IconPlay,
    IconPause,
    IconReset,
    IconShare,
  },
  props: {
    reset: Function,
    play: Function,
    pause: Function,
  },
  setup(props) {
    const methods = {
      share() {
        copyToClipboard(window.location.href)
        // TODO: toast
        alert('Link copied to clipboard, paste it to share')
      }
    }

    return { ...methods }
  }
}
</script>

<style lang="scss">
.m-controls {
  span {
    margin: 0 6px;
  }
}
</style>