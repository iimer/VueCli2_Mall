<template>
  <div>
    <el-menu :collapse="true" router style="width: 100%">
      <el-submenu :index="'/item_list/'+ item0" v-for="(item0,index0) in firstTitle" :key="item0+'231232'">
        <template slot="title">
          {{item0}}
        </template>
        <el-submenu  :index="'/item_list/'+ item1" v-for="(item1,index1) in secondTitle[index0].data" :key="item1+'431'" >
          <span slot="title">{{item1}}</span>
          <el-menu-item  :index="'/item_list/'+ item2" v-for="item2 in thirdTitle[index0].data[index1].data" :key="item2+'2313'" >
            {{item2}}
          </el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data () {
    return {
      firstTitle: [],
      secondTitle: [
        {
          data: []
        }
      ],
      secondCurrent: [],
      thirdTitle: [
        {
          data: [
            {
              data: []
            }
          ]
        }
      ],
      thirdCurrent: []
    }
  },
  created () {
    this.getFirst()
    this.getSecond()
  },
  mounted () {
    console.log(this.firstTitle)
    console.log(this.secondTitle)
    console.log(this.thirdTitle)
  },
  methods: {
    getFirst () {
      this.$http({
        method: 'post',
        url: '/title/get_all_first_title'
      })
        .then((res) => {
          this.firstTitle = res.data
        })
        .catch((error) => {
          console.log(error)
        })
      this.$http({
        method: 'post',
        url: '/title/get_all_second_title'
      })
        .then((res) => {
          this.secondCurrent = res.data
        })
        .catch((error) => {
          console.log(error)
        })
      this.$http({
        method: 'post',
        url: '/title/get_all_third_title'
      })
        .then((res) => {
          this.thirdCurrent = res.data
          this.secondTitle = []
          this.thirdTitle = []
          for (let index in this.firstTitle) {
            let data = []
            for (let index2 in this.secondCurrent) {
              if (this.firstTitle[index] === this.secondCurrent[index2].up) {
                data.push(this.secondCurrent[index2].name)
              }
            }
            this.secondTitle.push({data: data})
          }
          for (let index in this.secondTitle) {
            let dataAll = []
            for (let index2 in this.secondTitle[index].data) {
              let data = []
              for (let index3 in this.thirdCurrent) {
                if (this.secondTitle[index].data[index2] === this.thirdCurrent[index3].up) {
                  data.push(this.thirdCurrent[index3].name)
                }
              }
              dataAll.push({data: data})
            }
            this.thirdTitle.push({data: dataAll})
          }
          console.log(this.firstTitle)
          console.log(this.secondTitle)
          console.log(this.thirdTitle)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    getSecond () {
    }
  },
  destroyed () {
    console.log(this.firstTitle)
    console.log(this.secondTitle)
    console.log(this.thirdTitle)
  }
}
</script>

<style scoped>

</style>
