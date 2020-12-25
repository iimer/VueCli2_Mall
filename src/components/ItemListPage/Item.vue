<template>
  <div>
      <router-link :to="{path:'/item_detail',query:{name:name}}">
        <el-col :span="6" style="padding: 7px">
          <el-card :body-style="{ padding: '5px' }">
            <img :src="url">
            <div style="padding-top: 14px;padding-left: 0px">
              <span class="content">{{name}}</span>
              <span style="color: red">{{price}}</span>
            </div>
          </el-card>
        </el-col>
      </router-link>
  </div>
</template>

<script>
export default {
  name: 'item',
  props: ['url', 'name', 'price']
}
</script>

<style scoped>
img{
  width: 100%;
  height: 250px;
}
.content{
  white-space:nowrap;
  overflow: hidden;
  text-overflow:ellipsis;
}
.el-col:hover{
  border: red;
}
</style>
