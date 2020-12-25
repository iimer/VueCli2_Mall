<template>
  <div class="all">
    <el-row>
      <Item v-for="item in shoes_list"
            :url="item.imgUrl"
            :name="item.name"
            :price="item.price"
            :key="item.name"></Item>
    </el-row>
  </div>
</template>

<script>
import Item from './Item'
export default {
  props: ['title'],
  name: 'ItemList',
  components: {
    Item
  },
  data () {
    return {
      shoes_list: []
    }
  },
  created () {
    this.$http({
      method: 'post',
      url: '/item_list/' + this.title
    })
      .then((res) => {
        this.shoes_list = res.data
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>

<style scoped>

</style>
