<template>
  <div class="normal" :class="isMobile && 'small'" id="achievement"></div>
</template>

<script>
// 引入基本模板
let echarts = require("echarts/lib/echarts");

export default {
  name: "Achievement",
  data() {
    return {
      curWidth: 0
    };
  },
  computed: {
    isMobile() {
      return this.curWidth < 1600
    }
  },
  beforeMount() {
    this.curWidth = document.documentElement.clientWidth || document.body.clientWidth;
  },
  mounted() {
    this.drawECharts();
  },
  methods: {
    drawECharts() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById("achievement"));

      myChart.setOption({
        // 标题
        title: {
          // 标题文本
          text: "文章成就统计",
          // 标题文本样式
          textStyle: {
            color: "#fff"
          },
          // 标题位置
          x: "center"
        },
        // 图形布局
        grid: {
          // 距离底部高度
          bottom: "20"
        },
        // 横轴
        xAxis: {
          show: false,
          type: "category",
          data: ["Github 提交：\n1141", "Github Star数：\n269", "掘金点赞量：\n1508", "掘金关注者：\n234"],
          axisLine: {
            lineStyle: {
              color: "#fff"
            }
          },
          axisLabel: {
            // 横轴信息全部显示
            interval: 0
          }
        },
        // 纵轴
        yAxis: {
          type: "value",
          axisLine: {
            lineStyle: {
              color: "#fff"
            }
          },
          axisLabel: {
            // 横轴信息全部显示
            interval: 0
          }
        },
        // 图形系列
        series: [
          {
            // 图类型
            type: "bar",
            // 数据
            data: [1141, 269, 1508, 234],
            // 文本
            label: {
              show: true,
              position: "top",
              color: "#fff",
              formatter: "{b}"
            },
            // 柱条样式
            itemStyle: {
              color: "deepskyblue"
            },
            zlevel: 1
          }
        ]
      });
    }
  }
};
</script>

<style scoped>
.normal {
  width: 100%;
  height: 310px;
  border: 40px solid transparent;
  border-image: url("../image/border_image.png") 30 30 stretch;
  background: #18202d;
}
.small {
  width: 100%;
  height: 310px;
  border: 5px solid transparent;
  border-image: url("../image/border_image.png") 30 30 stretch;
}
</style>