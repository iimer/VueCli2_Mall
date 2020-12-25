<template>
  <div>
    <el-row style="padding: 10px">
      <el-col :span="8">
        <span>品牌:{{details.brandName}}</span>
      </el-col>
      <el-col :span="8">
        <span>适用人群:{{details.goodPerson}}</span>
      </el-col>
      <el-col :span="8">
        <span>款式:{{details.shoeType}}</span>
      </el-col>
    </el-row>
    <el-row style="padding: 10px">
      <el-col :span="8">
        <span>商品编号:{{details.itemNumber}}</span>
      </el-col>
      <el-col :span="8">
        <span>适用场景:{{details.goodPlace}}</span>
      </el-col>
      <el-col :span="8">
        <span>适用季节:{{details.goodSeason}}</span>
      </el-col>
    </el-row>
    <br>
    <hr color="#999999" size="1"/>
    <br>
    <img :src="item" alt="" v-for="item in urls" :key="'介绍'+item">
    <p></p>
    <AfterSale></AfterSale>
    <p></p>
    <assess></assess>
  </div>
</template>

<script>
import assess from './assess'
import AfterSale from './AfterSale'
export default {
  components: {
    assess,
    AfterSale
  },
  props: ['name'],
  name: 'Introduction',
  data () {
    return {
      details: [],
      urls: []
    }
  },
  created () {
    this.$http({
      method: 'post',
      url: '/item_detail/' + this.name
    })
      .then((res) => {
        this.details = res.data
        this.urls = res.data.urlImg.split(',')
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>

<style scoped>
img{
  width: 100%;
  height: 100%;
}
</style>
