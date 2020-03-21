<template>
  <div class="home" v-viewLoading="show">
    <Sidebar :collapseVal="collapseVal"/>
    <div class="right">
      <div class="navbar">
        <i class="el-icon-s-unfold icon" v-if="collapseVal" @click="collapseVal=false"></i>
        <i class="el-icon-s-fold icon" v-else @click="collapseVal=true"></i>
      </div>
      <div class="main">

      </div>
    </div>
  </div>
</template>

<script>
import {Test} from '@/api/test.js'
import Sidebar from '@/common/Sidebar.vue'
export default {
  name: 'Home',
  components: {
    Sidebar
  },
  data () {
    return {
      show: false,
      collapseVal: false
    }
  },
  mounted() {
    let data = {
      username: 'cehnlin',
      password: 111
    }
    Test(data).then(res=>{
      console.log(res)
    })
    this.show = true
    setTimeout(()=>{
      this.show = false
    },1000)
  }
}
</script>
<style lang="scss">
.home{
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #eff1f4;
  display: flex;
  .right{
    flex: 1;
    .navbar{
      background-color: #fff;
      height: 56px;
      line-height: 56px;
      padding: 0 10px;
      box-shadow: 0 1px 4px rgba(0,21,41,.08);
      .icon{
        font-size: 21px;
        cursor: pointer;
      }
    }
  }
}
</style>
