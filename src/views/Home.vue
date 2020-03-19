<template>
  <div class="home" v-viewLoading="show">
    Hello World
  </div>
</template>

<script>
import {Test} from '@/api/test.js'
export default {
  name: 'Home',
  data () {
    return {
      show: false
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
    },3000)
  }
}
</script>
<style>
.home{
  width: 500px;
  height: 400px;
  position: relative;
}
</style>
