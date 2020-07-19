<!--
 * @author: lencx
 * @create_at: Jul 13, 2020
-->

<template>
  <div class="m-options">
    row: <input type="number" :value="state.rows.length" @keyup.enter.native="setRows" @blur.native="setRows" />
  </div>
  <MGrid :rows="state.rows" />
  <Footer />
</template>

<script>
import { reactive } from 'vue'
import MGrid from '/@comps/MGrid/MGrid.vue'
import Footer from '/@/layouts/Footer.vue'
import { parseHash, setHash } from '/@utils/tools'

export default {
  name: 'MusicGrid',
  components: {
    MGrid,
    Footer,
  },
  setup(props) {
    // init url
    let data = parseHash() || {}
    const defaultGrid = new Array(8).fill('0')
    if (!data.grid) {
      data.grid = defaultGrid;
      setHash('grid', defaultGrid);
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
        let newHash = (parseHash() || {}).grid || []

        if (olen === val) return;
        if (olen > val) {
          // remove row
          state.rows = newHash.slice(0, val)
        }
        if (olen < val) {
          // add row
          state.rows = [...newHash, ...(new Array(val - olen).fill('0'))]
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
.m-options {
  padding: 10px;
}
</style>
