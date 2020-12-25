<template>
  <div class="all">
    <ShoppingError v-show="tableData.length === 0"></ShoppingError>
    <el-table
      v-show="tableData.length>0"
      ref="multipleSelection"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        label="商品信息"
        width="300px"
        :show-overflow-tooltip="true">
        <template slot-scope="scope">
          <img style="vertical-align:middle" :src="scope.row.url" alt="">
          <span class="introduction">{{scope.row.name}}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="单价"
        width="180">
        <template slot-scope="scope">
          <span>￥{{scope.row.price}}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="数量"
        show-overflow-tooltip>
        <template slot-scope="scope">
          <el-input-number size="small" v-model="tableData[scope.$index].number" @change="change(scope.$index)" :min="1" :max="10" label="描述文字"></el-input-number>
        </template>
      </el-table-column>
      <el-table-column
        label="金额"
        show-overflow-tooltip>
        <template slot-scope="scope">
          <span>￥{{tableData[scope.$index].number * tableData[scope.$index].price}}</span>
        </template>
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="120">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="deleteRow(scope.$index, tableData)"
            type="text"
            size="small">
            移除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <br>
    <el-row v-show="tableData.length>0" class="content">
      <el-col :span="14">
        <el-button type="text" style="color: red" @click="deleteAll">清空购物车</el-button>
      </el-col>
      <el-col :span="6">
        <span class="content_right">
            <span>
              <font color="#777">已选商品</font>&nbsp;&nbsp;<font color="#ffd700" size="5px">{{length}}</font>&nbsp;
              <font color="#777">件</font>
              <font color="#777">合计：</font>
              <font color="#ffd700" size="5px">{{allPrice}}</font>
            </span>
          </span>
      </el-col>
      <el-col :span="4">
        <el-button type="danger" round @click="submitPay">提交订单</el-button>
      </el-col>
    </el-row>
    <br>
  </div>
</template>

<script>
import ShoppingError from '../ErrorPage/ShoppingError'
export default {
  name: 'Shopping',
  data () {
    return {
      multipleSelection: [],
      length: 0,
      tableData: [],
      isSelect: 1,
      index: 1,
      username: '',
      names: [],
      deleteNames: [],
      isSelects: []
    }
  },
  components: {
    ShoppingError
  },
  computed: {
    allPrice () {
      let allPrice = 0.00
      if (this.multipleSelection !== undefined) {
        for (const index in this.multipleSelection) {
          allPrice += this.multipleSelection[index].price * this.multipleSelection[index].number
        }
      }
      return allPrice
    }
  },
  mounted () {
    this.$http({
      method: 'post',
      url: '/get_all_shop/' + sessionStorage.getItem('username')
    })
      .then((res) => {
        const table = JSON.parse(sessionStorage.getItem('tableData'))
        console.log(table)
        console.log(sessionStorage.getItem('tableData'))
        if (sessionStorage.getItem('tableData')) {
          if (table.length > 0) {
            this.tableData = table
          }
        } else {
          this.tableData = res.data
        }
        for (const index in this.tableData) {
          if (this.tableData[index].isSelect === 1) {
            this.$nextTick(() => {
              this.$refs.multipleSelection.toggleRowSelection(this.tableData[index])
            })
          }
        }
      })
      .catch((error) => {
        console.log(error)
      })
  },
  created () {
    window.addEventListener('beforeunload', this.setItem)
  },
  methods: {
    setItem () {
      sessionStorage.setItem('tableData', JSON.stringify(this.tableData))
      sessionStorage.setItem('deleteNames', JSON.stringify(this.deleteNames))
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
      this.length = val.length
      for (const index in this.tableData) {
        let flag = 0
        for (const index2 in this.multipleSelection) {
          if (this.multipleSelection[index2].name === this.tableData[index].name) {
            flag = 1
          }
        }
        if (flag === 1) {
          this.tableData[index].isSelect = 1
        } else {
          this.tableData[index].isSelect = 0
        }
      }
    },
    deleteRow (index, rows) {
      this.deleteNames.push(rows[index].name)
      rows.splice(index, 1)
    },
    change (index) {
      this.$http({
        method: 'post',
        url: '/update_number',
        data: {
          value: this.tableData[index].number,
          username: sessionStorage.getItem('username'),
          name: this.tableData[index].name
        }
      })
        .then((res) => {
          console.log(res.data)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    deleteAll () {
      this.$http({
        method: 'post',
        url: '/delete_all',
        data: {
          username: sessionStorage.getItem('username')
        }
      })
        .then((res) => {
          console.log(res.data)
        })
        .catch((error) => {
          console.log(error)
        })
      this.tableData = []
    },
    submitPay () {
      this.$router.push('/pay')
    }
  },
  beforeDestroy () {
    sessionStorage.removeItem('tableData')
    const delete2 = JSON.parse(sessionStorage.getItem('deleteNames'))
    if (delete2.length > 0) {
      for (const index in delete2) {
        this.deleteNames.push(delete2[index])
      }
    }
    for (const index in this.tableData) {
      let flag = 0
      for (const index2 in this.multipleSelection) {
        if (this.multipleSelection[index2].name === this.tableData[index].name) {
          flag = 1
        }
      }
      if (flag === 1) {
        this.tableData[index].isSelect = 1
      } else {
        this.tableData[index].isSelect = 0
      }
    }
    for (const index in this.tableData) {
      this.names.push(this.tableData[index].name)
      this.isSelects.push(this.tableData[index].isSelect)
    }
  },
  destroyed () {
    this.$http({
      method: 'post',
      url: '/update_is_select',
      data: {
        username: sessionStorage.getItem('username'),
        names: this.names,
        isSelects: this.isSelects
      }
    })
      .then((res) => {
      })
      .catch((error) => {
        console.log(error)
      })
    this.$http({
      method: 'post',
      url: '/delete_shop',
      data: {
        username: sessionStorage.getItem('username'),
        names: this.deleteNames
      }
    })
      .then((res) => {
        console.log(res.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>

<style scoped>
.content_right{

}
.content{
  width: 100%;
  padding: 10px;
  background-color: #f3f3f3;
}
img{
  width: 60px;
  height: 60px;
}
.introduction{
  vertical-align:middle;
}
a{
  color: #999;
  text-decoration: none;
}
a:hover{
  color: red;
}
</style>
