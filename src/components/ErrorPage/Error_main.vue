<template>
<div>
  <TabBar></TabBar>
  <SearchBox></SearchBox>
  <Tab></Tab>
  <hr color="red">
  <Error></Error>
  <hr color="red">
  <BottomBar></BottomBar>
</div>
</template>

<script>
import BottomBar from '../BottomBar'
import SearchBox from '../SearchBox'
import Tab from '../Tab'
import TabBar from '../TabBar'
import Error from './Error'
export default {
  name: 'Error_main',
  components: {
    BottomBar,
    SearchBox,
    Tab,
    TabBar,
    Error
  }
}
</script>

<style scoped>

</style>
