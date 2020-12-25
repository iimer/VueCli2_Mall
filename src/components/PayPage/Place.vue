<template>
  <div class="all">
    <br>
    <el-row>
      <el-col :span="24">
        <span class="content_title">确认收货地址</span>
      </el-col>
    </el-row>
    <el-row style="padding: 10px">
      <el-radio-group v-model="radio">
      <el-col :span="6" style="padding: 10px">
        <el-tag style="color: gold" type="info" size="medium">李丹 1586699****</el-tag>
          <el-card class="box-card">
            <div class="text item" style="font-size: 12px">
              收货地址：吉林省 长春市 南关区区卫星广场财富领域5A16室
            </div>
            <br>
            <div class="text item" style="text-align: left">
              <el-button size="small" type="text">编辑&nbsp;&nbsp;</el-button>
              <el-button size="small" type="text">&nbsp;&nbsp;删除</el-button>
            </div>
            <div class="text item">
              <el-radio :label="3" style="padding-left: 60%">&nbsp;&nbsp;&nbsp;&nbsp;请选择</el-radio>
            </div>
          </el-card>
      </el-col>
      <el-col :span="6" style="padding: 10px">
        <el-tag style="color: gold" type="info" size="medium">李丹 1306699****</el-tag>
        <el-card class="box-card">
          <div class="text item" style="font-size: 12px">
            收货地址：吉林省 平安市 南关区区平安市广场平安市领域6666室
          </div>
          <br>
          <div class="text item" style="text-align: left">
            <el-button size="small" type="text">编辑&nbsp;&nbsp;</el-button>|
            <el-button size="small" type="text">&nbsp;&nbsp;删除</el-button>
          </div>
          <el-radio :label="6" style="padding-left: 60%">&nbsp;&nbsp;&nbsp;&nbsp;请选择</el-radio>
        </el-card>
      </el-col>
      <el-col :span="6" style="padding: 10px">
        <el-tag style="color: gold" type="info" size="medium">李丹 1826699****</el-tag>
        <el-card class="box-card">
          <div class="text item" style="font-size: 12px">
            收货地址：吉林省 富贵市 富贵区区富贵广场财富领域8888室
          </div>
          <br>
          <div class="text item" style="text-align: left">
            <el-button size="small" type="text">编辑&nbsp;&nbsp;</el-button>|
            <el-button size="small" type="text">&nbsp;&nbsp;删除</el-button>
          </div>
          <el-radio :label="9" style="padding-left: 60%">&nbsp;&nbsp;&nbsp;&nbsp;请选择</el-radio>
        </el-card>
      </el-col>
      </el-radio-group>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Pay',
  data () {
    return {
      radio: 3
    }
  },
  methods: {
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
