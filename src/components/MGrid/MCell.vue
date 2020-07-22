<!--
 * @author: lencx
 * @create_at: Jul 12, 2020
-->

<template>
  <div class="m-cell" :class="{active: isActive}" @click="handleTap" />
</template>

<script>
import { ref, watch } from 'vue'

export default {
  name: 'MCell',
  props: {
    index: Number,
    line: Number,
    status: Boolean,
  },
  setup(props, { emit }) {
    const isActive = ref(props.status)

    const handleTap = () => {
      isActive.value = !isActive.value
      emit('sendValue', [isActive.value, props.index, props.line])
    }

    return { isActive, handleTap }
  }
}
</script>

<style lang="scss">
.m-cell {
  display: inline-block;
  margin: 2px;
  width: 24px;
  height: 24px;
  background: #000;
  border-radius: 5px;
  // box-shadow: 0 0 1px 1px #678;
  transition: all 0.3s ease;
  user-select: none;
  font-size: 10px;
  line-height: 24px;
  color: green;
  &.active {
    background: #fff;
  }
}
</style>
