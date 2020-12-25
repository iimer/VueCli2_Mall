<template>
  <div>
    <TabBar></TabBar>
    <br>
    <SearchBox></SearchBox>
    <br>
    <Login></Login>
    <hr color="red">
    <BottomBar></BottomBar>
  </div>
</template>

<script>
import TabBar from '../TabBar'
import SearchBox from '../SearchBox'
import BottomBar from '../BottomBar'
import Login from './Login'
export default {
  name: 'Login_main',
  components: {
    TabBar,
    SearchBox,
    BottomBar,
    Login
  }
}
</script>

<style scoped>

</style>
