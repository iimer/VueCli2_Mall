<template>
  <div class="all">
    <slot></slot>
    <div class="search_div">
      <input type="text" placeholder="搜索" style="border: none" v-model="searchData"/>
      <el-button class="search_button" type="primary" @click="search">搜索</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchBox',
  data () {
    return {
      searchData: ''
    }
  },
  methods: {
    search () {
      this.$router.push({path: '/search', query: {searchData: this.searchData}})
      if (this.$route.path === '/search') {
        this.$router.go(0)
      }
    }
  }
}
</script>

<style scoped>
.search_div{
  position: relative;
  left: 20%;
  width: 500px;
  height: 35px;
  border: 3px solid red;
}
.search_button{
  background-color: red;
  width: 100px;
  /*padding-right: 0;*/
  position: absolute;
  right: -3px;
  top: -0.5px;
  height: 36px;
  color: aliceblue;
  cursor:pointer;
  border: none;
}
input{
  width: 500px;
  height: 25px;
  outline: none;
}
.all{
  width: 53%;
}
</style>
