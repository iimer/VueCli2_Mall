<template>
  <div class="all">
    <el-row>
      <el-col :span="24" class="content_title">
        选择支付方式
      </el-col>
    </el-row>
    <div style="padding:5px 20px 0;">
      <el-radio v-model="PayWay" label="1" border>{{PayWays[0]}}</el-radio>
      <el-radio v-model="PayWay" label="2" border>{{PayWays[1]}}</el-radio>
      <el-radio v-model="PayWay" label="3" border>{{PayWays[2]}}</el-radio>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PayWay',
  data () {
    return {
      PayWays: ['银联', '微信', '支付宝'],
      PayWay: '银联'
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
