<template>
  <div>
    <TabBar></TabBar>
    <br>
    <SearchBox></SearchBox>
    <br>
    <shopping></shopping>
    <hr color="red">
    <BottomBar></BottomBar>
  </div>
</template>

<script>
import TabBar from '../TabBar'
import SearchBox from '../SearchBox'
import BottomBar from '../BottomBar'
import Shopping from './Shopping'
export default {
  name: 'Shpping_main',
  components: {
    TabBar,
    SearchBox,
    BottomBar,
    Shopping
  }
}
</script>

<style scoped>

</style>
