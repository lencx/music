<template>
  <MCell
    v-for="(_, index) in row"
    :value="index"
    @sendValue="getValue"
  />
</template>

<script>
import MCell from './MCell.vue';

export default {
  name: 'MRow',
  components: {
    MCell,
  },
  setup() {
    const getValue = val => {
      console.log(val)
    }
    return {
      row: new Array(12).fill(0),
      getValue,
    }
  }
}
</script>