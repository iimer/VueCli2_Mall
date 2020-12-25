<template>
  <div>
    <TabBar></TabBar>
    <br>
    <SearchBox></SearchBox>
    <br>
    <Tab></Tab>
    <hr color="red"/>
<!--    <h2>{{this.$route.query.name}}</h2>-->
    <ItemDetail :name="this.$route.query.name"></ItemDetail>
    <br>
    <br>
    <br>
    <br>
    <Tabs :name="this.$route.query.name"></Tabs>
    <hr color="red"/>
    <BottomBar></BottomBar>
  </div>
</template>

<script>
import TabBar from '../TabBar'
import SearchBox from '../SearchBox'
import Tab from '../Tab'
import BottomBar from '../BottomBar'
import ItemDetail from './ItemDetail'
import Tabs from './Tabs'
export default {
  name: 'ItemDetail_main',
  components: {
    TabBar,
    SearchBox,
    BottomBar,
    ItemDetail,
    Tab,
    Tabs
  }
}
</script>

<style scoped>

</style>
