<template>
  <div>
    <div class="all" v-show="tableData.length == 0">
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <div class="all error">
        <span>您还没有想要支付的订单哦！</span>
      </div>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
    </div>
    <div v-show="tableData.length !== 0">
      <Place></Place>
      <Delivery></Delivery>
      <PayWay></PayWay>
      <div class="all">
        <el-row>
          <el-col :span="24" class="content_title">
            确认订单信息
          </el-col>
        </el-row>
        <el-table
          :data="tableData"
          stripe
          style="width: 100%;text-align: center;padding: 10px">
          <el-table-column
            label="商品信息"
            width="300px"
            :show-overflow-tooltip="true"
            style="vertical-align:middle;">
            <template slot-scope="scope">
              <img style="vertical-align:middle" :src="scope.row.url" alt="">
              <span class="introduction">{{scope.row.name}}</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="name"
            label="单价"
            width="190px">
            <template slot-scope="scope">
              <span>￥{{scope.row.price}}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="数量"
            width="190px">
            <template slot-scope="scope">
              <span>{{tableData[scope.$index].number}}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="金额"
            show-overflow-tooltip
            width="190px">
            <template slot-scope="scope">
              <span>￥{{tableData[scope.$index].number * tableData[scope.$index].price}}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="配送方式"
            show-overflow-tooltip>
            <template slot-scope="scope">
              <span>快递配送</span>
            </template>
          </el-table-column>
        </el-table>
        <div class="allPrice">
          <b>合计(含运费) ￥ <font color="#F56C6C">{{allPrice}}</font></b>
        </div>
        <br>
        <div class="submit_content">
          <div style="border: 1px solid red">
            <div>实付款:<b>￥ <font color="#F56C6C">{{allPrice}}</font></b></div>
            <p></p>
            <div><b>寄送至:</b>吉林省 长春市 南关区 卫星广场财富领域5A16室</div>
            <p></p>
            <div><b>收货人：李丹</b> 1586699****</div>
          </div>
        </div>
        <div class="submit_button">
          <el-button type="danger" @click="postPay">提交订单</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Place from './Place'
import Delivery from './Delivery'
import PayWay from './PayWay'
export default {
  name: 'PayDetail',
  components: {
    Place,
    Delivery,
    PayWay
  },
  data () {
    return {
      tableData: []
    }
  },
  methods: {
    postPay () {
      this.$http({
        method: 'post',
        url: '/delete_all_is_select',
        data: {
          username: sessionStorage.getItem('username')
        }
      })
        .then((res) => {
          console.log(res.data)
          this.$router.push('/shop')
          this.$message({
            message: '购买成功！跳转购物车页面！',
            type: 'success'
          })
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  computed: {
    allPrice () {
      let allPrice = 0.00
      if (this.tableData !== undefined) {
        for (let index in this.tableData) {
          allPrice += this.tableData[index].price * this.tableData[index].number
        }
      }
      return allPrice
    }
  },
  mounted () {
    setTimeout(() => {
      this.$http({
        method: 'post',
        url: '/get_all_shop/' + sessionStorage.getItem('username')
      })
        .then((res) => {
          for (let index in res.data) {
            if (res.data[index].isSelect === 1) {
              this.tableData.push(res.data[index])
            }
          }
        })
        .catch((error) => {
          console.log(error)
        })
    }, 1000)
  }
}
</script>

<style scoped>
.content_title{
  padding: 20px;
  color: #666;
  font: 700 14px "microsoft yahei";
}
img{
  width: 60px;
  height: 60px;
}
.allPrice{
  text-align: right;
  width: 100%;
  font-size: 16px;
  font-family: simsun;
  padding: 0 0 10px;
}
.submit_content{
  position: relative;
  left: 55%;
  font-family: simsun;
  text-align: right;
  width: 45%;
  font-size: 16px;
  padding: 0 0 10px;
}
.submit_button{
  width: 100%;
  font-family: simsun;
  text-align: right;
  padding: 0 0 10px;
}
.error{
  text-align: center;
  font-size: 24px;
  color: #999;
}
</style>
