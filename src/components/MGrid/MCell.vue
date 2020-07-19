<!--
 * @author: lencx
 * @create_at: Jul 12, 2020
-->

<template>
  <div class="m-cell" :class="{active: state.isActive}" @click="handleTap" />
</template>

<script>
import { reactive, computed } from 'vue'

export default {
  name: 'MCell',
  props: {
    index: Number,
    line: Number,
    status: Boolean,
  },
  setup(props, { emit }) {
    const state = reactive({
      isActive: props.status,
      value: computed(() => Math.pow(2, props.index)),
    })

    const methods = {
      handleTap() {
        state.isActive = !state.isActive
        emit('sendValue', [state.isActive, props.index, props.line])
        // console.log(props.line)
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
