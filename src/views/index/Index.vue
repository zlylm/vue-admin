<template>
    <div class="index-page">
        <el-row :gutter="20">
            <el-col :sm="12" :md="6" v-for="(item,index) in blockData" :key="index">
                <Block :blockData="item"/>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :md="12" >
                <div class="chart-box">
                    <LineChart className="zhexian" :chartData="chartData"/>
                </div>
            </el-col>
            <el-col :md="12">
                <div class="chart-box">
                    <BarChart className="zhuzhuang" :chartData="barData"/>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import Block from './components/Block'
import LineChart from '@/common/LineChart'
import BarChart from '@/common/BarChart'
export default {
    components: {
        Block,
        LineChart,
        BarChart
    },
    data () {
        return {
            blockData:[
                {dec: '用户数量', val: 1220, icon: 'el-icon-user', iconColor:'#40c9c6'},
                {dec: '在线数量', val: 200, icon: 'el-icon-apple', iconColor:'#42b983'},
                {dec: '留言管理', val: 6020, icon: 'el-icon-chat-dot-round',iconColor:'#40c9c6'},
                {dec: '系统消息', val: 3, icon: 'el-icon-lollipop', iconColor:'#34bfa3'}
            ],
            chartData:{
                userCount:[2,4,10],
                ipCount:[10,25,30],
                xData: ['1月','2月','3月']
            },
            barData: {
                userCount:[2,4,10,8,9,3],
                xData: ['1月','2月','3月','4月','5月','6月']
            }
        }
    },
    mounted() {
        this.$notify.info({
            title: '消息提示',
            message: '嗨，欢迎您~'
        })
    }
}
</script>

<style lang="scss" scoped>
.index-page{
    .chart-box{
        padding: 10px;
        background-color: #fff;
        border-radius: 4px;
        margin-top: 10px;
    }
}
</style>