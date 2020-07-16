<!--
 * @author: lencx
 * @create_at: Jul 12, 2020
-->

<template>
  <MusicGrid />
</template>

<script>
import { reactive } from 'vue'
import { MusicTest } from '/@utils/music'
import MusicGrid from './views/MusicGrid.vue'

// TODO: test tonejs
MusicTest()

export default {
  name: 'App',
  components: {
    MusicGrid,
  },
}
</script>

<style lang="scss">

</style>
