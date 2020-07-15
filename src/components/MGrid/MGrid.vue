<!--
 * @author: lencx
 * @create_at: Jul 12, 2020
-->

<template>
  <div v-for="(sum, index) in rows">
    <MRow :index="index" :sum="sum" />
  </div>
</template>

<script>
import MRow from './MRow.vue'

export default {
  name: 'MGrid',
  props: {
    rows: Array
  },
  components: {
    MRow,
  },
}
</script>