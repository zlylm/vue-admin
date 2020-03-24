<template>
  <div class="home" v-viewLoading="show">
    <Sidebar :collapseVal="collapseVal"/>
    <div class="right">
      <div class="navbar">
        <i class="el-icon-s-unfold icon" v-if="collapseVal" @click="collapseClick(false)"></i>
        <i class="el-icon-s-fold icon" v-else @click="collapseClick(true)"></i>
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            <div class="head-img">
              <img src="../../public/head.jpeg" alt="头像"/>
            </div>
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-plus">首页</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-plus">个人中心</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-check" divided>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="main">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/common/Sidebar.vue'
export default {
  name: 'Home',
  components: {
    Sidebar
  },
  data () {
    return {
      show: false,
      collapseVal: ''
    }
  },
  created() {
    this.collapseVal = this.$store.state.collapseVal == 'true' ? true : false
  },
  mounted() {
   
  },
  methods: {
    collapseClick(val){
      this.collapseVal = val
      sessionStorage.setItem('collapseVal',val)
      this.$store.commit('setCollapseVal',val)
    }
  }
}
</script>
<style lang="scss" scoped>
.home{
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #eff1f4;
  display: flex;
  .right{
    flex: 1;
    .navbar{
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: #fff;
      height: 56px;
      line-height: 56px;
      padding: 0 10px;
      box-shadow: 0 1px 4px rgba(0,21,41,.08);
      .icon{
        font-size: 21px;
        cursor: pointer;
      }
      .el-dropdown-link{
        display: flex;
        align-items: center;
        cursor: pointer;
      }
      .head-img{
        width: 40px;
        height: 40px;
        border:solid 1px #eee;
        border-radius: 8px;
        overflow: hidden;
        &>img{
          max-width: 100%;
          max-height: 100%;
        }
      }
    }
    .main{
      padding: 10px;
    }
  }
}
</style>
