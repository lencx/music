<!--
 * @author: lencx
 * @create_at: Jul 12, 2020
-->

<template>
  <div class="m-grid">
    <MRow
      v-for="(sum, index) in rows"
      :index="index"
      :sum="sum"
      :reset="reset"
      :current="current"
      @sendAudio="handleAudio"
    />
  </div>
</template>

<script>
import { reactive } from 'vue'
import MRow from './MRow.vue'

export default {
  name: 'MGrid',
  props: {
    rows: Array,
    reset: Number,
    current: Number,
  },
  components: {
    MRow,
  },
  emits: ['sendAudio'],
  setup(props, { emit }) {
    const state = reactive({
      playRows: props.rows,
    })

    const methods = {
      handleAudio(data) {
        emit('sendAudio', data)
      }
    }

    return { ...methods }
  }
}
</script>

<style lang="scss">
.m-grid {
  user-select: none;
}
</style>