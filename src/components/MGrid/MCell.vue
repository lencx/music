<template>
  <div class="m-cell" :class="{active: state.isActive}" @click="handleClick" />
  {{ state.isActive ? state.value : 0 }}
</template>

<script>
import { reactive, computed } from 'vue'

export default {
  name: 'MCell',
  props: {
    value: Number,
  },
  // Extraneous non-emits event listeners (sendValue) were passed to component
  // but could not be automatically inherited because component renders fragment or text root nodes.
  // If the listener is intended to be a component custom event listener only,
  // declare it using the "emits" option.
  emits: ['sendValue'],
  setup(props, { emit }) {
    const state = reactive({
      isActive: false,
      value: computed(() => Math.pow(2, props.value)),
    });
    const handleClick = () => {
      state.isActive = !state.isActive;
      emit('sendValue', state.isActive ? state.value : 0);
    };
    return { state, handleClick }
  }
}
</script>

<style lang="scss">
.m-cell {
  display: inline-block;
  margin: 5px;
  width: 24px;
  height: 24px;
  background: #000;
  border-radius: 5px;
  box-shadow: 0 0 1px 1px #678;
  transition: all 0.3s ease;
  user-select: none;
  &.active {
    background: #fff;
  }
}
</style>
