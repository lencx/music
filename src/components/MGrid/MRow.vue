<!--
 * @author: lencx
 * @create_at: Jul 12, 2020
-->

<template>
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
import MCell from './MCell.vue'
import { sumToBinary } from '/@utils/tools'

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
    const state = reactive({
      cells: sumToBinary(+props.sum),
    })


    const methods = {
      getValue(data) {
        console.log(data)
        // console.log('row => ', props.index)
        state.cells[data[1]] = data[0]
      }
    }

    return {
      state,
      ...methods,
    }
  }
}
</script>