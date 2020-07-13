<!--
 * @author: lencx
 * @create_at: Jul 12, 2020
-->

<template>
  <MCell
    v-for="(_, index) in state.cells"
    :index="index"
    @sendValue="getValue"
  />
</template>

<script>
import { reactive } from 'vue'
import MCell from './MCell.vue'
import { setHash, parseHashGrid } from '/@utils/tools'

// console.log(parseHashGrid());

export default {
  name: 'MRow',
  props: {
    index: Number,
  },
  components: {
    MCell,
  },
  setup(props) {
    const state = reactive({
      cells: new Array(12).fill(0),
    })

    const methods = {
      getValue(data) {
        state.cells[data[1]] = data[0]
        // setHash('grid', state.cells)
      }
    }

    return {
      state,
      ...methods,
    }
  }
}
</script>