<!--
 * @author: lencx
 * @create_at: Jul 13, 2020
-->

<template>
  <div class="m-options">
    row:
    <input
      type="number"
      :value="state.rows.length"
      @keyup.enter.native="setRows"
      @blur.native="setRows"
    />
  </div>
  <MControls
    :reset="resetGrid"
    :play="playGrid"
    :pause="pauseGrid"
  />
  <MGrid
    :rows="state.rows"
    :reset="state.reset"
    :current="state.current"
    @sendAudio="handleAudio"
  />
  <Footer />
</template>

<script>
import { reactive, watch } from 'vue'
import MGrid from '/@comps/MGrid/MGrid.vue'
import MControls from '/@comps/MGrid/MControls.vue'
import Footer from '/@/layouts/Footer.vue'
import { initGrid, playAudio } from '/@utils/music'
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
      reset: null,
      playRows: null,
      musicInterval: null,
      current: null,
      isPause: false,
    })

    let olen = state.rows.length
    // init play rows
    state.playRows = new Array(olen).fill(null)

    const methods = {
      setRows(e) {
        const val = +e.target.value
        olen = state.rows.length
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
        console.log('reset grid')
        const data = new Array(olen).fill('0')
        setHash('grid', data)
        clearInterval(state.musicInterval)
        state.reset = Date.now()
        state.playRows = new Array(olen).fill(null)
        state.current = null
      },
      playGrid() {
        console.log('play music')
        clearInterval(state.musicInterval)
        const rows = state.playRows
        state.current = state.current || 0
        state.isPause = false
        playAudio(rows[0])
        state.musicInterval = setInterval(() => {
          const playEnd = state.current > rows.length - 2
          if (!state.isPause) {
            state.current = !playEnd ? (state.current + 1) : 0
            console.log(state.current)
            playAudio(rows[state.current])
          }
        }, 60 * 1000 / 100)
      },
      pauseGrid() {
        // TODO:
        console.log('pause play')
        state.isPause = true
      },
      handleAudio(data) {
        state.playRows[data[1]] = data[0]
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
input {
  background: var(--input-bg);
  border: none;
  width: 60px;
  border-radius: 5px;
  height: 20px;
  line-height: 20px;
  color: #eee;
  outline: none;
}
</style>
