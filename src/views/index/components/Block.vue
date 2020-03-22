<template>
  <div class="block" @mouseover="activeShow=true" @mouseout="activeShow=false">
      <div class="left" :class="{'left-active':activeShow}">
          <i :class="[blockData.icon]" :style="{color:blockData.iconColor}"></i>
      </div>
      <div class="right">
          <p class="dec">{{blockData.dec}}</p>
          <p class="val">{{blockData.val}}</p>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        blockData:{
            type: Object,
            default: function() {
                return {
                    dec: '暂无数据',
                    val: 0,
                    icon: 'el-icon-apple',
                    iconColor: ''
                }
            }
        }
    },
    data () {
        return {
            activeShow: false
        }
    }
}
</script>

<style lang="scss" scoped>
.block{
    width: 100%;
    height: 108px;
    background-color: #fff;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    box-sizing: border-box;
    cursor: pointer;
    margin-bottom: 10px;
    .left{
        width: 80px;
        height: 80px;
        box-sizing: border-box;
        border-radius: 4px;
        font-size: 48px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all .5s;
    }
    .left-active{
        background-color: yellowgreen;
        &>i{
            color: #fff!important;
        }
    }
    .right{
        .dec{
            color: rgba(0,0,0,.45);
            margin-bottom: 20px;
        }
        .val{
            color: #666;
            font-size: 20px;
        }
    }
}
</style>