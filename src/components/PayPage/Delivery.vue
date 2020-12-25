<template>
  <div class="all">
    <el-row>
      <el-col :span="24" class="content_title">
        选择物流方式
      </el-col>
    </el-row>
    <div style="padding:5px 20px 0;">
      <el-radio v-model="delivery" label="1" border>{{deliverys[0]}}</el-radio>
      <el-radio v-model="delivery" label="2" border>{{deliverys[1]}}</el-radio>
      <el-radio v-model="delivery" label="3" border>{{deliverys[2]}}</el-radio>
      <el-radio v-model="delivery" label="4" border>{{deliverys[3]}}</el-radio>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Delivery',
  data () {
    return {
      deliverys: ['圆通', '申通', '韵达', '中通'],
      delivery: '圆通'
    }
  }
}
</script>

<style scoped>
.content_title{
  padding: 20px;
  color: #666;
  font: 700 14px "microsoft yahei";
}
</style>
