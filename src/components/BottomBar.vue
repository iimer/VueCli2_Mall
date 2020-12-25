<template>
  <div class="all">
    <div style="text-align: left;float: left">
      <router-link to="" >商城首页</router-link>
      &nbsp;<span style="color: #999999">|</span>&nbsp;
      <router-link to="/error">支付宝</router-link>
      &nbsp;<span style="color: #999999">|</span>&nbsp;
      <router-link to="/error">物流</router-link>
    </div>
    <br>
    <hr/>
    <p>合作伙伴 联系我们 网站地图 ©2020 cslg-web版权所有</p>
  </div>
</template>

<script>
export default {
  name: 'BottomBar'
}
</script>

<style scoped>
a{
  color: #777;
  text-decoration: none;
}
a:hover{
  color: red;
}
</style>
