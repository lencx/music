<!--
 * @author: lencx
 * @create_at: Jul 13, 2020
-->

<template>
  <div class="m-options">
    row: <input type="number" :value="state.rows.length" @keyup.enter.native="setRows" @blur.native="setRows" />
  </div>
  <MControls
    :reset="resetGrid"
    :play="playGrid"
    :pause="pauseGrid"
  />
  <MGrid :rows="state.rows" />
  <Footer />
</template>

<script>
import { reactive } from 'vue'
import MGrid from '/@comps/MGrid/MGrid.vue'
import MControls from '/@comps/MGrid/MControls.vue'
import Footer from '/@/layouts/Footer.vue'
import { initGrid } from '/@utils/music'
import { parseHash, setHash } from '/@utils/tools'

export default {
  name: 'MusicGrid',
  components: {
    MGrid,
    MControls,
    Footer,
  },
  setup() {
    const initData = initGrid()
    const state = reactive({
      rows: initData.grid,
      // TODO: music option
      options: initData.options,
    })

    const methods = {
      setRows(e) {
        const val = +e.target.value
        const olen = state.rows.length
        const newHash = (parseHash() || {}).grid || []

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
      },
      resetGrid() {
        // TODO:
        console.log('reset')
        // const data = new Array(state.rows.length).fill('0')
        // state.rows = data;
        // setHash('grid', data)
      },
      playGrid() {
        // TODO:
        console.log('play')
      },
      pauseGrid() {
        // TODO:
        console.log('pause')
      },
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
