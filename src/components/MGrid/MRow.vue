<!--
 * @author: lencx
 * @create_at: Jul 12, 2020
-->

<template>
  <span class="m-row-play" :class="{play: state.isPlay}" @click="playRowSynth">▶️</span>
  <MCell
    v-for="(status, idx) in state.cells"
    :index="idx"
    :status="status"
    :line="index"
    @sendValue="getValue"
  />
</template>

<script>
import { reactive } from 'vue'
import { sumToBinary, sumArray, setHash } from '/@utils/tools'
import { noteDown } from '/@utils/music'
import MCell from './MCell.vue'

export default {
  name: 'MRow',
  props: {
    index: Number,
    sum: String,
  },
  components: {
    MCell,
  },
  setup(props) {
    const initSum = +props.sum

    const state = reactive({
      cells: sumToBinary(initSum),
      isPlay: initSum ? true : false,
    })

    const methods = {
      getValue(data) {
        state.cells[data[1]] = data[0]
        // console.log('row => ', state.cells)
        const sum = state.cells.map((i, idx) => i ? Math.pow(2, idx) : 0)
        // console.log('sum => ', sumArray(sum))
        const calcSum = sumArray(sum)
        state.isPlay = calcSum ? true : false
        if (data[0]) noteDown(data[1])
        setHash('setSum', calcSum, data[2])
      },
      playRowSynth() {
        noteDown(state.cells)
      }
    }

    return {
      state,
      ...methods,
    }
  }
}
</script>

<style lang="scss">
.m-row-play {
  display: inline-block;
  width: 24px;
  height: 24px;
  vertical-align: top;
  opacity: 0.2;
  &.play {
    opacity: 1;
  }
}
</style>