<template>
  <div class="home" v-viewLoading="show">
    Hello World
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      show: false
    }
  },
  mounted() {
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
