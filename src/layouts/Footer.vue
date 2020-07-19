<template>
  <div class="footer">
    <a href="https://github.com/vuejs/vue-next">vue</a>
    {{` | `}}
    <a class="github" href="https://www.github.com/lencx/music">
      <img src="/github.png" />
    </a>
    {{` | `}}
    <a href="https://www.nofwl.com">
      lencx
    </a>
  </div>
</template>


<style lang="scss">
.footer {
  padding: 10px;
  a {
    display: inline-block;
    height: 24px;
    line-height: 24px;
    color: #d2d2d2;
    padding: 0 4px;
    &.github {
      width: 20px;
      vertical-align: bottom;
      img {
        width: 100%;
      }
    }
  }
}
</style>