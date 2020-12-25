<template>
  <div>
    <div class="all" v-show="this.dataList.length !== 0">
      <el-row>
        <item v-for="item in dataList"
              :url="item.imgUrl"
              :name="item.name"
              :price="item.price"
              :key="item.name"></item>
      </el-row>
    </div>
    <div v-show="this.dataList.length === 0">
      <Error></Error>
    </div>
  </div>
</template>

<script>
import Error from '../ErrorPage/Error'
import Item from '../ItemListPage/Item'
export default {
  name: 'Search',
  props: ['searchData'],
  components: {
    Item,
    Error
  },
  data () {
    return {
      dataList: []
    }
  },
  mounted () {
    this.$http({
      method: 'post',
      url: '/item_list/search',
      data: {
        name: this.searchData
      }
    })
      .then((res) => {
        this.dataList = res.data
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>

<style scoped>

</style>
