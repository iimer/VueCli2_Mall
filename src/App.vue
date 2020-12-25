<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import './assets/css/override-element-ui.css'
export default {
  name: 'App'
}
</script>

<style>
.el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active{
  color: white;
  background-color: #F56C6C;
}
.mouse-cover-canvas{
  position: relative;
  width: 350px;
  height: 400px;
  left: 1% !important;
  top: 16% !important;
  border: 1px solid rgb(238, 238, 238);
  z-index: 99999;
  display: none;
}
</style>
