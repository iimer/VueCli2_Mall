<template>
  <div>
    <div  v-show="this.$route.params.title==='休闲鞋'
    || this.$route.params.title==='羽绒服'
    || this.$route.params.title==='运动裤'">
      <TabBar></TabBar>
      <br>
      <SearchBox></SearchBox>
      <br>
      <Tab></Tab>
      <hr color="red"/>
      <ItemList :title="this.$route.params.title"></ItemList>
      <hr color="red"/>
      <BottomBar></BottomBar>
    </div>
    <div v-show="!(this.$route.params.title==='休闲鞋'
    || this.$route.params.title==='羽绒服'
    || this.$route.params.title==='运动裤')">
      <Error></Error>
    </div>
  </div>
</template>

<script>
import TabBar from '../TabBar'
import SearchBox from '../SearchBox'
import Tab from '../Tab'
import ItemList from './ItemList'
import BottomBar from '../BottomBar'
import Error from '../ErrorPage/Error_main'
export default {
  name: 'ItemListPage_main',
  components: {
    TabBar,
    SearchBox,
    Tab,
    ItemList,
    BottomBar,
    Error
  }
}
</script>

<style scoped>

</style>
