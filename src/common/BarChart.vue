<template>
    <div :class="className" :style="{width: width,height: height}"></div>
</template>

<script>
// 引入 ECharts 主模块
var echarts = require('echarts/lib/echarts')
require('echarts/lib/chart/bar')
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
require('echarts/theme/macarons') // echarts theme
export default {
    props: {
        className: {
            type: String,
            default: 'bar-chart'
        },
        width: {
            type: String,
            default: '100%'
        },
        height: {
            type: String,
            default: '350px'
        },
        chartData: {
            type: Object
        },
        resize: {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
            chart: null,
            defaultOption: {
                color:['#67C23A'],
                grid: {
                    left: 10,
                    right: 10,
                    bottom: 20,
                    top: 30,
                    containLabel: true
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross'
                    },
                    padding: [5, 10]
                },
                yAxis: {
                    axisTick: {
                        show: false
                    }
                },
                legend: {
                    data: ['用户量']
                },
            }
        }
    },
    mounted() {
        this.$nextTick(()=>{
            this.initChart()
        })
    },
    watch: {
        chartData: {
            deep: true,
            hanlder(val){
                this.setOptions(val)
            }
        },
        'resize':function(val){
            this.chart.resize()
        }
    },
    beforeDestroy() { // 销毁
        if (!this.chart) {
            return
        }
        this.chart.dispose()
        this.chart = null
    },
    methods: {
        initChart () {
            this.chart = echarts.init(this.$el, 'macarons')
            this.setOptions(this.chartData)
        },
        setOptions ({userCount,xData} = {}) {
            this.chart.setOption(
                Object.assign({
                    xAxis: {
                        data: xData
                    },
                    series: [{
                        name: '用户量',
                        itemStyle: {
                            // normal: {
                            //     color: '#FF005A',
                            //     lineStyle: {
                            //         color: '#FF005A',
                            //         width: 2
                            //     }
                            // }
                        },
                        smooth: true,
                        type: 'bar',
                        barMaxWidth: 30,
                        barMinWidth: 5,
                        data: userCount,
                        animationDuration: 2800,
                        animationEasing: 'cubicInOut'
                    }]
                },this.defaultOption)
            )
        }
    }
}
</script>

<style>

</style>