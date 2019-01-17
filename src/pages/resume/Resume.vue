<template>
  <div class="resume" id="resume">
    <div class="banner">
      <img class="hidden-md-only hidden-lg-only hidden-xl-only" :src="bannerXSSM" alt="banner 图">
      <img class="hidden-xs-only hidden-sm-only hidden-lg-only hidden-xl-only" :src="bannerMD" alt="banner 图">
      <img class="hidden-xs-only hidden-sm-only hidden-md-only" :src="bannerLGXL" alt="banner 图">
    </div>
    <!-- 第一行 -->
    <el-row>
      <el-col :xs="24" :sm="24" :md="5" :lg="6" :xl="5" class="part">
        <personal></personal>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="8" class="part">
        <map-friend></map-friend>
      </el-col>
      <el-col :xs="24" :sm="24" :md="7" :lg="6" :xl="11" class="part">
        <skill></skill>
      </el-col>
    </el-row>
    <!-- 第二行 -->
    <el-row>
      <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8" class="part">
        <achievement></achievement>
      </el-col>
      <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8" class="part">
        <experience></experience>
      </el-col>
      <el-col :xs="24" :sm="24" :md="4" :lg="4" :xl="4" class="part">
        <part-six></part-six>
      </el-col>
      <el-col :xs="24" :sm="24" :md="4" :lg="4" :xl="4" class="part">
        <part-seven></part-seven>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Personal from './componnets/Personal'
import MapFriend from './componnets/MapFriend'
import Skill from './componnets/Skill'
import Achievement from './componnets/Achievement'
import Experience from './componnets/Experience'
import PartSix from './componnets/PartSix'
import PartSeven from './componnets/PartSeven'
export default {
  name: "Resume",
  data() {
    return {
      bannerXSSM: require("./image/banner_640.png"),
      bannerMD: require("./image/banner_1000.png"),
      bannerLGXL: require("./image/banner.png"),
    };
  },
  components: {
    [Personal.name]: Personal,
    [MapFriend.name]: MapFriend,
    [Skill.name]: Skill,
    [Achievement.name]: Achievement,
    [Experience.name]: Experience,
    [PartSix.name]: PartSix,
    [PartSeven.name]: PartSeven
  }
};
</script>

<style>
body {
  background: #011128;
  color: #fff;
}
.resume {
  width: 100%;
}
.part {
  padding: 20px;
}
.banner img {
  width: 100%;
  height: 80px;
}
.BMap_cpyCtrl, .BMap_noprint, .anchorBL {
  display: none !important;
}
</style>