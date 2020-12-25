<template>
  <div>
    <TabBar></TabBar>
    <br>
    <SearchBox></SearchBox>
    <PayDetail></PayDetail>
    <hr color="red">
    <BottomBar></BottomBar>
  </div>
</template>

<script>
import TabBar from '../TabBar'
import SearchBox from '../SearchBox'
import BottomBar from '../BottomBar'
import PayDetail from './PayDetail'
export default {
  name: 'Pay_main',
  components: {
    TabBar,
    SearchBox,
    BottomBar,
    PayDetail
  }
}
</script>

<style scoped>

</style>
