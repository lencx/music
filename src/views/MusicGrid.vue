<!--
 * @author: lencx
 * @create_at: Jul 13, 2020
-->

<template>
  row: <input type="number" :value="state.rows.length" @keyup.enter.native="setRows" />
  <MGrid :rows="state.rows" />
</template>

<script>
import { reactive } from 'vue'
import MGrid from '/@comps/MGrid/MGrid.vue'
import { parseHash, setHash } from '/@utils/tools'

export default {
  name: 'MusicGrid',
  components: {
    MGrid,
  },
  setup(props) {
    // init hash
    const data = parseHash()
    if (!data && !data.grid) {
      setHash('grid', new Array(8).fill('0'))
    }

    const state = reactive({
      rows: data.grid,
      // TODO: music option
      options: data.options,
    })

    const methods = {
      setRows(e) {
        const val = +e.target.value
        const olen = state.rows.length

        if (olen > val) {
          // remove row
          state.rows = state.rows.slice(0, val)
        }
        if (olen < val) {
          // add row
          state.rows = [...state.rows, ...(new Array(val - olen).fill('0'))]
        }

        setHash('grid', state.rows)
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
