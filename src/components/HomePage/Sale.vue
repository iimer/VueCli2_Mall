<template>
  <div class="all">
    <span>今日活动</span>
    <hr color="red"/>
    <el-row>
        <el-col :span="6" v-for="item in sale" :key="item.url">
          <a href="" >
            <img :src="item.url" alt="">
          </a>
        </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Sale',
  data () {
    return {
      sale: []
    }
  },
  created () {
    this.$http({
      method: 'post',
      url: '/get_all_sale_img'
    })
      .then((res) => {
        this.sale = res.data
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>

<style scoped>
img{
  width: 95%;
  height: 95%;
}
</style>
