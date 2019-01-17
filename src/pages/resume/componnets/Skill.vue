<template>
  <div class="nomal" :class="isMobile && 'small'" id="skill"></div>
</template>

<script>
// 引入基本模板
let echarts = require("echarts/lib/echarts");

export default {
  name: "Skill",
  data() {
    return {
      curWidth: 0
    }
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
      let myChart = echarts.init(document.getElementById("skill"));

      myChart.setOption({
        // 标题
        title: {
          // 标题文本
          text: "技能分布图",
          // 标题样式
          textStyle: {
            color: "#fff"
          },
          // 标题位置
          x: "center"
        },
        // 移动显示
        tooltip: {
          trigger: "item",
          // 显示文字样式
          formatter: "{a} <br/>{b} : {d}%"
        },
        // 注记
        legend: {
          x: "center",
          y: "bottom",
          textStyle: {
            color: "#fff"
          },
          data: [ "HTML5", "CSS3", "JavaScript", "jQuery", "Vue", "Node", "微信小程序", "其他" ]
        },
        // 注记显示手柄
        calculable: true,
        // 图形系列
        series: [
          {
            name: "技能分布",
            type: "pie",
            radius: [30, 110],
            roseType: "area",
            data: [
              { value: 15, name: "HTML5" },
              { value: 15, name: "CSS3" },
              { value: 20, name: "JavaScript" },
              { value: 20, name: "jQuery" },
              { value: 20, name: "Vue" },
              { value: 15, name: "Node" },
              { value: 25, name: "微信小程序" },
              { value: 15, name: "其他" }
            ]
          }
        ],
        // 颜色调整
        color: ['#00bfff', '#00ffdd', '#207ffc', '#00aeff', "#00eeff", "#006eff", "#0099ff", "#0066ff"]
      });
    }
  }
};
</script>

<style scoped>
.nomal {
  width: 100%;
  height: 500px;
  border: 40px solid transparent;
  border-image: url("../image/border_image.png") 30 30 stretch;
  background: #18202d;
}
.small {
  border: 10px solid transparent;
  border-image: url("../image/border_image.png") 30 30 stretch;
}
</style>