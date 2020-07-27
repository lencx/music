<!--
 * @author: lencx
 * @create_at: Jul 20, 2020
-->

<template>
  <div class="footer">
    <a class="icon" href="https://www.nofwl.com">
      <img src="/lencx.png" />
    </a>
    {{` `}}
    <a class="icon github" href="https://www.github.com/lencx/music">
      <img src="/github.png" />
    </a>
  </div>
</template>

<style lang="scss">
.footer {
  padding: 10px;
  a {
    display: inline-block;
    color: #d2d2d2;
    margin: 0 5px;
    &.icon {
      width: 20px;
      height: 20px;
      vertical-align: bottom;
      box-shadow: 0 0 5px #999;
      border-radius: 50%;
      font-size: 0;
      img {
        width: 100%;
      }
    }
  }
}
</style>