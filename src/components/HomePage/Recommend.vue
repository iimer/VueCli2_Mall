<template>
  <div class="all">
    <span>今日推荐</span>
    <hr color="red"/>
    <el-row>
      <a href="" v-for="item in recommends" :key="item.url">
        <el-col :span="8">
          <span class="value_content">
            <p>{{item.name}}</p>
            <p style="color: #999999">{{item.value}}</p>
          </span>
          <span class="img_content">
            <img :src="item.url" alt="">
          </span>
        </el-col>
      </a>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Recommend',
  data () {
    return {
      recommends: []
    }
  },
  created () {
    this.$http({
      method: 'post',
      url: '/get_all_recommend'
    })
      .then((res) => {
        this.recommends = res.data
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>

<style scoped>
img{
  width: 120px;
  height: 120px;
}
.value_content{
  position: absolute;
  top: 0px;
  text-align: left;
}
.img_content{
  position: relative;
  left: 50%;
}
p{
  font-size: 10px;
}
a:hover{
  color: red;
}
</style>
