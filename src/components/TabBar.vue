<template>
  <div class="tab_bar_bg">
    <div class="all">
      <div style="text-align: left;float: left">
        <router-link to="/login" v-show="!isOn">&nbsp;&nbsp;你好,请登录&nbsp;&nbsp;</router-link>
        <span v-show="isOn" style="color: #F56C6C">&nbsp;&nbsp;你好,{{name}}&nbsp;&nbsp;</span>
        <router-link to="/register" v-show="!isOn" style="color: red">免费注册</router-link>
        <a src="#" v-show="isOn" style="color: red;cursor: pointer" @click="down">退出登录</a>
      </div>
      <div style="text-align: right;">
        <router-link to="/home" style="color: red">商城首页</router-link>
        <router-link to="/error">个人中心&nbsp;&nbsp;</router-link>
        <router-link to="/shop">购物车&nbsp;&nbsp;</router-link>
        <router-link to="/error">收藏夹</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabBar',
  data () {
    return {
      isOn: false,
      name: null
    }
  },
  mounted () {
    this.name = sessionStorage.getItem('username')
    if (sessionStorage.getItem('username') != null) {
      this.isOn = true
    }
  },
  methods: {
    down () {
      sessionStorage.removeItem('username')
      this.isOn = false
    }
  }
}
</script>

<style scoped>
a{
  color: #999;
  text-decoration: none;
}
a:hover{
  color: red;
}
.tab_bar_bg{
  width: 100%;
  background-color: rgb(211, 211, 211);
}
</style>
