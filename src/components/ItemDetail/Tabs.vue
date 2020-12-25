<template>
  <div class="all">
    <el-tabs type="border-card" >
        <el-tab-pane>
          <span slot="label">商品介绍</span>
          <Introduction :name="this.name"></Introduction>
        </el-tab-pane>
        <el-tab-pane label="售后保障">
          <AfterSale></AfterSale>
        </el-tab-pane>
        <el-tab-pane label="商品评价(1000+)">
          <assess></assess>
        </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Introduction from './Introduction'
import AfterSale from './AfterSale'
import assess from './assess'
export default {
  props: ['name'],
  name: 'Tabs',
  components: {
    Introduction,
    AfterSale,
    assess
  }
}
</script>
<style scoped>
</style>
