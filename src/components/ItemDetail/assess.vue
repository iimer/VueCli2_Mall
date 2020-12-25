<template>
  <div>
    <div class="after_title" >
      商品评价
    </div>
    <el-row class="assess_body" v-for="(item,index) in value1" :key="item">
      <el-col :span="1">
          <img src="https://misc.360buyimg.com/user/myjd-2015/css/i/peisong.jpg" alt="">
      </el-col>
      <el-col :span="3">
        <span>{{names[index]}}</span>
      </el-col>
      <el-col :span="20">
        <i class="el-icon-star-on" style="color: red"></i>
        <i class="el-icon-star-on" style="color: red"></i>
        <i class="el-icon-star-on" style="color: red"></i>
        <i class="el-icon-star-on" style="color: red"></i>
        <i class="el-icon-star-on" style="color: red"></i>
        <br>
        <span class="assess_text1">
          {{item}}
        </span>
        <br>
        <br>
        <span class="assess_text2">
          灰色(加绒)41           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          2020-12-12 19:12
        </span>
        <hr color="#999" size="1px">
        <br>
        <span class="assess_text3">
          专卖店 回复：
          <br>
          <br>
          感谢您一如既往的信任，您的信任是小店前进的动力，小店会不断的完善，为你们提高好的商品，更好的服务。专卖店
        </span>
        <br>
        <br>
        <span class="assess_text1">2020.12.12</span>
        <p><br></p>
      </el-col>
      <hr color="#999" size="2px">
    </el-row>

  </div>
</template>

<script>
export default {
  name: 'assess',
  data () {
    return {
      names: ['h***8', 'o***1', 'p***9', 'l***1', 'm***2', 'q***1', 'k***5', 'h***3', 'l***9'],
      value1: ['鞋子很百搭，穿着很舒服，款式非常好看，做工精细，鞋底很软，走路不累。',
        '鞋子很舒适，颜值高，透气性不错，鞋底柔软舒适，尺码标准，穿着合脚。',
        '鞋子到了，物流很快，鞋子样式很喜欢，很时尚，尺码标准，穿着舒服。',
        '很不错的鞋子，没有色差，尺码合适，做工精良，款式新颖，是我想要的。',
        '鞋子刚收到就迫不及待试了一下，穿着非常舒服，保暖效果好，材质柔软，款式新颖。',
        '鞋子性价比高，穿着很合脚，保暖效果好，给自己买的准备推荐给同事们都来买，价格很实惠。',
        '鞋子款式时尚大气，特别百搭，穿起来舒服，大小合适不磨脚。',
        '实物看起来就值几十块钱，不咋样，不介意大家购买',
        '鞋子柔软舒适，穿着也舒服，搭配裤子也容易穿着帅气十足。！']
    }
  },
  methods: {

  }
}
</script>

<style scoped>
.assess_text1{
  font: 12px/150% tahoma,arial,Microsoft YaHei,Hiragino Sans GB,"\u5b8b\u4f53",sans-serif;
  -webkit-font-smoothing: antialiased;
  font-size: 14px;
  padding: 10px 0;
  line-height: 180%;
  color: #999;
}
.assess_text2{
  font-size: 12px;
  color: #999;
}
.assess_text3{
  color: #ff561c;
}
.after_title{
  background-color: #f7f7f7;
  padding: 10px;
  color: #666;
  font: 700 14px "microsoft yahei";
}
img{
  border-radius: 50%;
  overflow: hidden;
  width: 30px;
  height: 30px;
}
.assess_body{
  padding: 20px;
}
</style>
