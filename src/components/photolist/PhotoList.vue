<template>
  <div class="photolist">
    <!-- mui-fullscreen 全屏的 -->
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a
            :class="['mui-control-item',item.id == 0 ? 'mui-active' : '']"
            v-for="item in navData"
            :key="item.id"
          >{{item.title}}</a>
        </div>
      </div>
    </div>
    <!-- img内容 -->
    <ul>
      <!-- <li v-for="item in list">
        <img v-lazy="item">
      </li> -->
    </ul>
  </div>
</template>
<script>
// 导入 mui 的js文件
import mui from "../../lib/mui/js/mui.min.js";
export default {
  data() {
    return {
      navData: [
        { title: "家具生活", id: 1 },
        { title: "摄影设计", id: 2 },
        { title: "明星美女", id: 3 },
        { title: "空间设计", id: 4 },
        { title: "户型装饰", id: 5 },
        { title: "广告摄影", id: 6 },
        { title: "摄影学习", id: 7 },
        { title: "摄影器材", id: 8 },
        { title: "明星写真", id: 9 },
        { title: "青春甜美", id: 10 },
        { title: "古典美女", id: 11 }
      ]
    };
  },
  created() {
    this.getAllcategory();
  },
  methods: {
    getAllcategory() {
      this.navData.unshift({ title: "全部", id: 0 });
    }
  },
  mounted() {
    // 初始化滑动控件   最好在mounted生命周期函数中  这是的DOM元素已经加载完毕
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  }
};
</script>
<style lang="scss" scoped>
* {
  touch-action: pan-y;
}

img[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
</style>
