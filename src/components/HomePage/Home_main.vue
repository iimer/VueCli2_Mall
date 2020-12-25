<template>
  <div>
    <TabBar></TabBar>
    <br>
    <SearchBox></SearchBox>
    <br>
    <Tab></Tab>
    <hr color="red"/>
    <div class="table_bar">
        商品列表
    </div>
    <Menu  class="content"></Menu>
    <RotationChart></RotationChart>
    <Recommend></Recommend>
    <Sale></Sale>
    <hr color="red"/>
    <BottomBar></BottomBar>
  </div>
</template>

<script>
import TabBar from '../TabBar'
import SearchBox from '../SearchBox'
import Tab from '../Tab'
import RotationChart from './RotationChart'
import BottomBar from '../BottomBar'
import Recommend from './Recommend'
import Sale from './Sale'
import Menu from './Menu'
export default {
  name: 'Home',
  components: {
    TabBar,
    SearchBox,
    Tab,
    RotationChart,
    BottomBar,
    Recommend,
    Sale,
    Menu
  }
}
</script>

<style scoped>
.content{
  position: fixed;
  left: 6%;
  top: 19.5%;
  border: 3px solid #f56C6C;
}
.table_bar{
  position: fixed;
  left: 6%;
  top: 15%;
  font-size: 20px;
  padding:0 29px 0;
  color: #e1f3d8;
  background-color: #f56C6C;
  border: 3px solid #f56C6C;
}
</style>
