<template>
  <div>
    <TabBar></TabBar>
    <br>
    <SearchBox></SearchBox>
    <br>
    <Tab></Tab>
    <hr color="red">
    <Search :searchData = "$route.query.searchData"></Search>
    <hr color="red">
    <BottomBar></BottomBar>
  </div>
</template>

<script>
import TabBar from '../TabBar'
import SearchBox from '../SearchBox'
import Tab from '../Tab'
import BottomBar from '../BottomBar'
import Search from './Search'
export default {
  name: 'Search_main',
  components: {
    TabBar,
    SearchBox,
    Tab,
    BottomBar,
    Search
  }
}
</script>

<style scoped>

</style>
