<!--
 * @author: lencx
 * @create_at: Jul 12, 2020
-->

<template>
  <div
    class="m-cell"
    :class="{active: status}"
    @click="handleTap"
  />
</template>

<script>
export default {
  name: 'MCell',
  props: {
    index: Number,
    line: Number,
    status: Boolean,
  },
  setup(props, { emit }) {
    const handleTap = () => {
      emit('sendValue', [!props.status, props.index, props.line])
    }

    return { handleTap }
  }
}
</script>

<style lang="scss">
.m-cell {
  display: inline-block;
  margin: 2px;
  width: 24px;
  height: 24px;
  background: var(--m-cell-bg);
  border-radius: 5px;
  // box-shadow: 0 0 1px 1px #678;
  transition: all 0.3s ease;
  user-select: none;
  font-size: 10px;
  line-height: 24px;
  color: green;
  &.active {
    // background: #fff;
    background: var(--m-cell-active);
  }
}
</style>
