<template>
  <div>
    <TabBar></TabBar>
    <br>
    <SearchBox></SearchBox>
    <br>
    <Register></Register>
    <hr color="red">
    <BottomBar></BottomBar>
  </div>
</template>

<script>
import Register from './Register'
import TabBar from '../TabBar'
import SearchBox from '../SearchBox'
import BottomBar from '../BottomBar'
export default {
  name: 'Register_main',
  components: {
    Register,
    TabBar,
    SearchBox,
    BottomBar
  }
}
</script>

<style scoped>

</style>
