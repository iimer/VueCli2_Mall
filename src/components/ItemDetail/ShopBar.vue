<template>
  <div>
    <router-link :to="{path: '/shop'}">
      <div class="shop_bar">
        <div class="el-icon-shopping-cart-2 shop_icon"></div>
        <div class="shop_line">|</div>
        <div class="shop_num">购物车</div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'ShopBar'
}
</script>

<style scoped>
.shop_line{
  position: relative;
  top: 25%;
  right: 2%;
  font-size: 20px;
  font-weight: lighter;
}
.shop_num{
  font-size: 18px;
  color: red;
  position: relative;
  left: 5%;
  bottom: 25%;
}
.shop_bar{
  position: absolute;
  border-radius: 20%;
  width: 120px;
  height: 50px;
  border: 1px solid #f56C6C;
  left: 85%;
  top: 7%;
}
.shop_icon{
  font-size: 35px;
  color: red;
  padding: 10px;
  float: left;
}
</style>
