<template>
  <div class="all tab_position">
    <span>
      <router-link to="/">首页</router-link>
      &nbsp;&nbsp;|&nbsp;
      <router-link to="/error">闪购</router-link>
      &nbsp;&nbsp;|&nbsp;
      <router-link to="/error">生鲜</router-link>
      &nbsp;&nbsp;|&nbsp;
      <router-link to="/error">团购</router-link>
      &nbsp;&nbsp;|&nbsp;
      <router-link to="/error">全球购</router-link>
    </span>
  </div>
</template>

<script>
export default {
  name: 'Tab'
}
</script>

<style scoped>
a{
  color: #555;
  text-decoration: none;
}
a:hover{
  color: red;
}
.tab_position{
  position: relative;
  left: 100px;
}
</style>
