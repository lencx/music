<!--
 * @author: lencx
 * @create_at: Jul 12, 2020
-->

<template>
  <div class="m-row" :class="{'curr-play': current === index}">
    <span class="row-btn" :class="{'row-play': state.isPlay}" @click="playRowSynth">▶️</span>
    <MCell
      v-for="(status, idx) in state.cells"
      :index="idx"
      :status="status"
      :line="index"
      :reset="reset"
      @sendValue="getValue"
    />
  </div>
</template>

<script>
import { reactive, watchEffect } from 'vue'
import { sumToBinary, sumArray, setHash } from '/@utils/tools'
import { playAudio } from '/@utils/music'
import MCell from './MCell.vue'

export default {
  name: 'MRow',
  props: {
    index: Number,
    sum: String,
    reset: Number,
    current: Number,
  },
  components: {
    MCell,
  },
  emits: ['sendAudio'],
  setup(props, { emit }) {
    const initSum = +props.sum

    const state = reactive({
      cells: sumToBinary(initSum),
      isPlay: initSum ? true : false,
    })

    emit('sendAudio', [state.cells, props.index])

    watchEffect(() => {
      if (props.reset) {
        state.cells = sumToBinary(0)
        state.isPlay = false
      }
    }, [props.reset])

    const methods = {
      getValue(data) {
        state.cells[data[1]] = data[0]
        // console.log('row => ', state.cells)
        const sum = state.cells.map((i, idx) => i ? Math.pow(2, idx) : 0)
        // console.log('sum => ', sumArray(sum))
        const calcSum = sumArray(sum)
        state.isPlay = calcSum ? true : false
        if (data[0]) playAudio(data[1])
        setHash('setSum', calcSum, data[2])
        emit('sendAudio', [state.cells, props.index])
      },
      playRowSynth() {
        playAudio(state.cells)
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
.m-row {
  transform: scale(1);
  transition: all 0.3s linear;
  opacity: 1;
  &.curr-play {
    opacity: 0.5;
    transform: scale(0.95);
  }
  .row-btn {
    display: inline-block;
    width: 24px;
    height: 24px;
    vertical-align: top;
    opacity: 0.2;
    &.row-play {
      opacity: 1;
    }
  }
}
</style>