<template>
  <div class="nomall" :class="isMobile && 'small'">
    <h3 class="text-center">编程技能</h3>
    <p class="font-small"><span class="font-bold">前端：</span>HTML/HTML5、CSS/CSS3、JS/ES6、jQuery、Vue、微信小程序……</p>
    <p class="font-small"><span class="font-bold">后端：</span>Node、PHP</p>
    <p class="font-small"><span class="font-bold">其他：</span>MySQL、Sqlserver</p>
  </div>
</template>

<script>
export default {
  name: "partSix",
  data() {
    return {
      curWidth: 0
    };
  },
  computed: {
    isMobile() {console.log(this.curWidth)
      return this.curWidth < 1600
    }
  },
  beforeMount() {
    this.curWidth = document.documentElement.clientWidth || document.body.clientWidth;
  }
};
</script>

<style scoped>
.nomall {
  width: 100%;
  height: 310px;
  border: 40px solid transparent;
  border-image: url("../image/border_image.png") 30 30 stretch !important;
  background: #18202d;
}
.small {
  border: 40px solid transparent;
}
.text-center {
  text-align: center;
}
.font-small {
  font-size: .9em;
}
.font-bold {
  font-weight: bold;
  color: deepskyblue;
}
</style>