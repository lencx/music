<!--
 * @author: lencx
 * @create_at: Jul 13, 2020
-->

<template>
  row: <input type="number" :value="state.rows" @keyup.enter.native="setRows" />
  <MGrid :rows="state.rows" />
</template>

<script>
import { reactive } from 'vue'
import MGrid from '/@comps/MGrid/MGrid.vue'

export default {
  name: 'MusicGrid',
  components: {
    MGrid,
  },
  setup(props) {
    const state = reactive({
      rows: 8,
    })

    const methods = {
      setRows(e) {
        state.rows = +e.target.value
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

</style>
