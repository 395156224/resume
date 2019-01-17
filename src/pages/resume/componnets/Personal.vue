<template>
  <div class="personal">
    <img class="personal-image" :src="headImage" alt="头像">
    <p>姓&emsp;&emsp;名：梁峻荣</p>
    <p>学&emsp;&emsp;历：本科</p>
    <p>工作年限：1 年</p>
    <p>年&emsp;&emsp;龄：23</p>
    <p>联系电话：18818881888</p>
    <p>电子邮箱：1741020489@qq.com</p>
    <p>博&emsp;&emsp;客：<a href="http://jsliang.top" target="_blank">jsliang.top</a></p>
    <p>掘&emsp;&emsp;金：<a href="https://juejin.im/user/584613ba128fe10058b3cf68" target="_blank">jsliang</a></p>
    <p>GitHub：<a href="https://github.com/LiangJunrong" target="_blank">LiangJunrong</a></p>
  </div>
</template>

<script>
export default {
  name: "Personal",
  data() {
    return {
      headImage: require('../image/head_image.png')
    }
  }
};
</script>

<style scoped>
a {
  color: deepskyblue;
}
a:hover {
  color: rgb(118, 190, 248);
}
p {
  line-height: 30px;
}
.personal {
  width: 100%;
  height: 500px;
  border: 40px solid transparent;
  border-image: url("../image/border_image.png") 30 30 stretch;
  background: #18202d;
  padding-left: 10px;
}
.personal-image {
  width: 150px;
  height: 150px;
}
</style>