<template>
  <div>
    <div class="after_title" >
      售后保障
    </div>
    <el-row class="after_body_title" style="padding-top: 40px">
      <el-col :span="24">卖家服务</el-col>
    </el-row>
    <el-row class="after_body_title">
      <el-col :span="24">承诺</el-col>
    </el-row>
    <el-row class="after_body_promise">
      <el-col :span="24">京东平台卖家销售并发货的商品，由平台卖家提供发票和相应的售后服务。请您放心购买！</el-col>
      <el-col :span="24">注：因厂家会在没有任何提前通知的情况下更改产品包装、产地或者一些附件，本司不能确保客户收到的货物与商城图片、产地、附件说明完全一致。只能确保为原厂正</el-col>
      <el-col :span="24">货！并且保证与当时市场上同样主流新品一致。若本商城没有及时更新，请大家谅解！</el-col>
    </el-row>
    <el-row class="after_body_title">
      <el-col :span="24">正品行货</el-col>
    </el-row>
    <el-row class="after_body_promise">
      <el-col :span="24">京东商城向您保证所售商品均为正品行货，京东自营商品开具机打发票或电子发票。</el-col>
    </el-row>
    <br>
    <br>
    <el-row class="after_body_clare">
      <el-col :span="24">权利声明：</el-col>
    </el-row>
    <el-row class="after_body_bottom_text">
      <el-col :span="24">京东上的所有商品信息、客户评价、商品咨询、网友讨论等内容，是京东重要的经营资源，未经许可，禁止非法转载使用。</el-col>
      <el-col :span="24">注：本站商品信息均来自于合作方，其真实性、准确性和合法性由信息拥有者（合作方）负责。本站不提供任何保证，并不承担任何法律责任。</el-col>
    </el-row>
    <br>
    <el-row class="after_body_clare">
      <el-col :span="24">价格说明：</el-col>
    </el-row>
    <el-row class="after_body_bottom_text">
      <el-col :span="24"><b>京东价：</b>京东价为商品的销售价，是您最终决定是否购买商品的依据。</el-col>
      <el-col :span="24"><b>划线价：</b>商品展示的划横线价格为参考价，并非原价，该价格可能是品牌专柜标价、商品吊牌价或由品牌供应商提供的正品零售价（如厂商指导价、建议零售价等）或该商品在京东平</el-col>
      <el-col :span="24">台上曾经展示过的销售价；由于地区、时间的差异性和市场行情波动，品牌专柜标价、商品吊牌价等可能会与您购物时展示的不一致，该价格仅供您参考。</el-col>
      <el-col :span="24"><b>折扣：</b>如无特殊说明，折扣指销售商在原价、或划线价（如品牌专柜标价、商品吊牌价、厂商指导价、厂商建议零售价）等某一价格基础上计算出的优惠比例或优惠金额；如有疑问，</el-col>
      <el-col :span="24">您可在购买前联系销售商进行咨询。</el-col>
      <el-col :span="24"><b>异常问题：</b>商品促销信息以商品详情页“促销”栏中的信息为准；商品的具体售价以订单结算页价格为准；如您发现活动商品售价或促销信息有异常，建议购买前先联系销售商咨询。</el-col>
    </el-row>
    <p></p>
    <assess></assess>
  </div>
</template>

<script>
import assess from './assess'
export default {
  components: {
    assess
  },
  name: 'AfterSale'
}
</script>

<style scoped>
.after_body_bottom_text{
  font: 12px/150% tahoma,arial,Microsoft YaHei,Hiragino Sans GB,"\u5b8b\u4f53",sans-serif;
  -webkit-font-smoothing: antialiased;
  color: #666;
}
.after_body_promise{
  display: block;
  padding:0 0 10px;
  line-height: 18px;
  font: 12px/150% tahoma,arial,Microsoft YaHei,Hiragino Sans GB,"\u5b8b\u4f53",sans-serif;
  color: #666;
  left: 1.8%;
}
.after_title{
  background-color: #f7f7f7;
  padding: 10px;
  color: #666;
  font: 700 14px "microsoft yahei";
}
.after_body_title{
  padding: 20px;
  color: #e4393c;
  font-size: 16px;
  font-weight: bold;
  font-family: "microsoft yahei";
}
.after_body_clare{
  font-weight: bold;
  line-height: 180%;
  color: #e4393c;
  padding: 8px 0 3px;
  font: 12px/150% tahoma,arial,Microsoft YaHei,Hiragino Sans GB,"\u5b8b\u4f53",sans-serif;
}
</style>
