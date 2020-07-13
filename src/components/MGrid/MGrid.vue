<!--
 * @author: lencx
 * @create_at: Jul 12, 2020
-->

<template>
  <div v-for="(_, index) in state.rows">
    <MRow :index="index" />
  </div>
</template>

<script>
import { reactive, watchEffect } from 'vue'
import MRow from './MRow.vue'
import { setHash, parseHashGrid } from '/@utils/tools'

export default {
  name: 'MGrid',
  props: {
    rows: Number
  },
  components: {
    MRow,
  },
  setup(props) {
    const state = reactive({
      rows: new Array(props.rows).fill(0),
    })

    watchEffect(() => {
      // console.log(props.rows, state.rows.length)
      if (state.rows.length > props.rows) {
        // remove row
        state.rows = state.rows.slice(0, props.rows)
      }
      if (state.rows.length < props.rows) {
        // add row
        state.rows = [...state.rows, ...new Array(props.rows - state.rows.length).fill(0)]
      }
    })

    return {
      state,
    }
  }
}
</script>