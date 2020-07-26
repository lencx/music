<!--
 * @author: lencx
 * @create_at: Jul 12, 2020
-->

<template>
  <div v-for="(sum, index) in rows">
    <MRow
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
// import { playMusic } from '/@utils/music'
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