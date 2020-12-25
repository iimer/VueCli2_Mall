<template>
  <div>
    <div class="all">
      <el-row>
        <el-col :span="10">
          <div class="left" >
            <el-carousel :autoplay="false" indicator-position="outside" arrow="never" class="img_carousel" >
              <el-carousel-item v-for="item in urls" :key="item">
                  <pic-zoom :url="item" alt=""></pic-zoom>
              </el-carousel-item>
            </el-carousel>
          </div>
        </el-col>
        <el-col :span="14">
          <span>{{this.details.name}}</span>
          <p></p>
          <div class="right_price">
            <div class="dt">价 格</div>
            <div class="price">￥{{this.details.price}}</div>
            <br>
            <div class="sale">优 惠</div>
            <div class="sale_value" style="border: 1px solid red">{{this.details.sale}}</div>
          </div>
          <div class="dt" style="padding-top: 2%;  padding-left: 0.5%;">
            <div class="color_text">
              选择颜色
            </div>
            <div class="color_body">
              <el-radio-group v-model="color_radio" fill="#F56C6C">
                <el-radio-button :label="item" v-for="item in colors" :key="item"></el-radio-button>
              </el-radio-group>
            </div>
          </div>
          <br>
          <div class="dt2">
            <div class="size_text">
              选择尺码
            </div>
            <div class="size_body">
              <el-radio-group v-model="size_radio" fill="#F56C6C">
                <el-radio-button :label="item" v-for="item in sizes" :key="item"></el-radio-button>
              </el-radio-group>
            </div>
          </div>
          <div class="number_title">
            购买数量
          </div>
          <div class="number">
            <el-input-number size="small" v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
          </div>
          <div class="submit">
            <el-button type="danger" round @click="addShop">加入购物车</el-button>
            <transition @before-enter="beforeEnter"
            @enter="enter"
            @after-enter="afterEnter">
              <div class="ball" v-show="flag"></div>
            </transition>
          </div>
        </el-col>
      </el-row>
    </div>
    <div><ShopBar></ShopBar></div>
  </div>
</template>

<script>
import PicZoom from 'vue-piczoom'
import ShopBar from './ShopBar'
export default {
  components: {
    ShopBar,
    PicZoom
  },
  props: ['name'],
  name: 'ItemDetail',
  data () {
    return {
      flag: false,
      details: [],
      urls: [],
      colors: [],
      sizes: [],
      num: 1,
      color_radio: '',
      size_radio: '',
      isInsert: 0,
      color: ['#f3f3f3', '#f3f3f3', '#f3f3f3', '#f3f3f3', '#f3f3f3', '#f3f3f3', '#f3f3f3', '#f3f3f3']
    }
  },
  methods: {
    async addShop () {
      if (sessionStorage.getItem('username')) {
        this.flag = !this.flag
        await this.$http({
          method: 'post',
          url: '/add_shop',
          data: {
            name: this.details.name,
            price: this.details.price,
            username: sessionStorage.getItem('username'),
            number: this.num,
            isInsert: this.isInsert,
            url: this.urls[0]
          }
        })
          .then((res) => {
            this.isInsert = 1
            console.log(res.data)
          })
          .catch((error) => {
            console.log(error)
          })
      } else {
        this.$message({
          message: '请登录',
          type: 'info'
        })
        this.$router.push('/login')
      }
    },
    handleChange (value) {
      console.log(value)
    },
    beforeEnter (el) {
      el.style.transform = 'translate(0, 0)'
    },
    enter (el, done) {
      // eslint-disable-next-line no-unused-expressions
      el.offsetHeight
      el.style.transform = 'translate(592px,-420px)'
      el.style.transition = 'all 0.3s ease'
      done()
    },
    afterEnter (el) {
      this.flag = !this.flag
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
        this.colors = res.data.color.split(',')
        this.sizes = res.data.size.split(',')
        this.color_radio = this.colors[0]
        this.size_radio = this.sizes[0]
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>

<style scoped>
.ball{
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #f56C6C;
  position: absolute;
  left: 44%;
  bottom: 35%;
}
.color_text{
  position: absolute;
  top: 40%;
}
.dt2{
}
.number{
  position: absolute;
  top: 80%;
  left: 50%;
}
.color_body{
  position: absolute;
  left: 50%;
  top: 38%;
  /*border: 1px solid red;*/
}
.size_body{
  position: absolute;
  left: 50%;
  top: 60%;
}
.size_text{
  font-family: simsun;
  color: #999;
  position: absolute;
  top: 63%;
  left: 42%;
}
.number_title{
  font-family: simsun;
  color: #999;
  position: absolute;
  top: 82%;
  left: 42%;
}
.price{
  position: relative;
  bottom: 5%;
  left: 1%;
  color: red;
  font-size: 20px;
}
.submit{
  position:absolute;
  top: 100%;
  left: 41%;
}
.dt{
  float: left;
  padding-left: 0.8%;
  font-family: simsun;
  color: #999;
}
.sale{
  float: left;
  position: absolute;
  padding-left: 0.5%;
  top: 22%;
  font-family: simsun;
  color: #999;
}
.sale_value{
  color: red;
  font-size: 5px;
  position: absolute;
  top: 22%;
  left: 46.2%;
}
.left{
  padding-left: 20%;
  position: relative;
  left: 30px;
}
.img_carousel{
  width: 70%;
  height: 100%;
}
pic-zoom{
  width: 100%;
  height: 100%;
}
.right_price{
  margin-top: 10px;
  padding: 10px 0 0;
  background-color: #f3f3f3;
  height: 52px;
}
div{
  display: block;
}

</style>
