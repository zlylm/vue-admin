<template>
    <div class="side-bar" :class="{'side-bar-mini':collapseVal}">
        <el-menu 
            class="el-menu-vertical" 
            mode="vertical"
            background-color="#304156"
            text-color="#BFCBD9"
            :collapse="collapseVal"
        >
            <el-menu-item index="1">
                <i class="el-icon-star-off icon"></i>
                <span>首页</span>
            </el-menu-item>
            <el-menu-item index="2">
                <i class="el-icon-user icon"></i>
                <span>用户管理</span>
            </el-menu-item>
            <el-menu-item index="2">
                <i class="el-icon-user icon"></i>
                <span>用户管理</span>
            </el-menu-item>
            <el-menu-item index="2">
                <i class="el-icon-user icon"></i>
                <span>用户管理</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
export default {
    props:{
        collapseVal:{
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
        }
    }
}
</script>

<style lang="scss" scoped>
.side-bar-mini{
    width: auto!important;
    height: 100%;
}
.side-bar{
    width: 210px;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    .el-menu-vertical{
        height: 100%;
        .icon{
            color: #BFCBD9;
        }
    }
}
</style>