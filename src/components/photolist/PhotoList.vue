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
            @click="getPhotoImg(item.id)"
          >{{item.title}}</a>
        </div>
      </div>
    </div>
    <!-- img内容 -->
    <ul class="photolist">
      <router-link tag="li" v-for="item in newList" :key="item.id" :to="'/home/photoinfo' + item.id">
        <img v-lazy="item.imgUrl">
        <div class="photoinfo">
          <h1>{{ item.title }}</h1>
          <p>{{ item.content }}</p>
        </div>
      </router-link>
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
        { title: "户型装饰", id: 5 }
      ],
      list: [
        [
          {
            id: 1,
            imgUrl:
              "http://p0.so.qhimgs1.com/bdr/_240_/t012467df27cac43ab4.jpg",
            title: "年度词汇有点“毒”",
            content:
              "英语世界最具权威的牛津词典上周刚刚宣布了它选出的2018年度词汇——有毒（Toxic）"
          },
          {
            id: 2,
            imgUrl: "http://p3.so.qhmsg.com/bdr/_240_/t0154cb8df98e53ec38.jpg",
            title: "年度词汇有点“毒”",
            content:
              "英语世界最具权威的牛津词典上周刚刚宣布了它选出的2018年度词汇——有毒（Toxic）"
          },
          {
            id: 3,
            imgUrl:
              "http://p0.so.qhimgs1.com/bdr/_240_/t01abd10f079c61df00.jpg",
            title: "年度词汇有点“毒”",
            content:
              "英语世界最具权威的牛津词典上周刚刚宣布了它选出的2018年度词汇——有毒（Toxic）"
          },
          {
            id: 4,
            imgUrl:
              "http://p2.so.qhimgs1.com/bdr/_240_/t0161e91f91b013a162.jpg",
            title: "年度词汇有点“毒”",
            content:
              "英语世界最具权威的牛津词典上周刚刚宣布了它选出的2018年度词汇——有毒（Toxic）"
          },
          {
            id: 5,
            imgUrl: "http://p1.so.qhmsg.com/bdr/_240_/t012cc9868f6fe72af6.jpg",
            title: "年度词汇有点“毒”",
            content:
              "英语世界最具权威的牛津词典上周刚刚宣布了它选出的2018年度词汇——有毒（Toxic）"
          },
          {
            id: 6,
            imgUrl:
              "http://p2.so.qhimgs1.com/bdr/_240_/t01f217022880070ede.jpg",
            title: "年度词汇有点“毒”",
            content:
              "英语世界最具权威的牛津词典上周刚刚宣布了它选出的2018年度词汇——有毒（Toxic）"
          },
          {
            id: 7,
            imgUrl:
              "http://p2.so.qhimgs1.com/bdr/_240_/t01cede1f42214362de.jpg",
            title: "年度词汇有点“毒”",
            content:
              "英语世界最具权威的牛津词典上周刚刚宣布了它选出的2018年度词汇——有毒（Toxic）"
          },
          {
            id: 8,
            imgUrl:
              "http://p0.so.qhimgs1.com/bdr/_240_/t01d8d6f58bd10f4fd4.jpg",
            title: "年度词汇有点“毒”",
            content:
              "英语世界最具权威的牛津词典上周刚刚宣布了它选出的2018年度词汇——有毒（Toxic）"
          }
        ],
        [
          {
            id: 9,
            imgUrl:
              "http://p1.so.qhimgs1.com/bdr/_240_/t01a3e26ffbe2aa2f9d.jpg",
            title: "这是家具生活中的图片",
            content:
              "英语世界最具权威的牛津词典上周刚刚宣布了它选出的2018年度词汇——有毒（Toxic）"
          },
          {
            id: 10,
            imgUrl:
              "http://p0.so.qhimgs1.com/bdr/_240_/t0160df90cf775cd68c.jpg",
            title: "这是家具生活中的图片",
            content:
              "英语世界最具权威的牛津词典上周刚刚宣布了它选出的2018年度词汇——有毒（Toxic）"
          },
          {
            id: 11,
            imgUrl: "http://p3.so.qhmsg.com/bdr/_240_/t01f3650399c0a1a358.jpg",
            title: "这是家具生活中的图片",
            content:
              "英语世界最具权威的牛津词典上周刚刚宣布了它选出的2018年度词汇——有毒（Toxic）"
          },
          {
            id: 12,
            imgUrl:
              "http://p1.so.qhimgs1.com/bdr/_240_/t0181515bc5cf8f1501.jpg",
            title: "这是家具生活中的图片",
            content:
              "英语世界最具权威的牛津词典上周刚刚宣布了它选出的2018年度词汇——有毒（Toxic）"
          },
          {
            id: 13,
            imgUrl: "http://p3.so.qhmsg.com/bdr/_240_/t0110c99175494337f8.jpg",
            title: "这是家具生活中的图片",
            content:
              "英语世界最具权威的牛津词典上周刚刚宣布了它选出的2018年度词汇——有毒（Toxic）"
          },
          {
            id: 14,
            imgUrl:
              "http://p5.so.qhimgs1.com/bdr/_240_/t0105263e35ae08cc1b.jpg",
            title: "这是家具生活中的图片",
            content:
              "英语世界最具权威的牛津词典上周刚刚宣布了它选出的2018年度词汇——有毒（Toxic）"
          }
        ],
        [
          {
            id: 15,
            imgUrl: "http://p1.so.qhmsg.com/bdr/_240_/t01c14217611528f206.jpg",
            title: "这是摄影设计中的图片",
            content:
              "英语世界最具权威的牛津词典上周刚刚宣布了它选出的2018年度词汇——有毒（Toxic）"
          },
          {
            id: 16,
            imgUrl:
              "http://p3.so.qhimgs1.com/bdr/_240_/t01897e38796594c8b3.jpg",
            title: "这是摄影设计中的图片",
            content:
              "英语世界最具权威的牛津词典上周刚刚宣布了它选出的2018年度词汇——有毒（Toxic）"
          },
          {
            id: 17,
            imgUrl:
              "http://p0.so.qhimgs1.com/bdr/_240_/t0199669e50928244a0.jpg",
            title: "这是摄影设计中的图片",
            content:
              "英语世界最具权威的牛津词典上周刚刚宣布了它选出的2018年度词汇——有毒（Toxic）"
          },
          {
            id: 18,
            imgUrl: "http://p2.so.qhmsg.com/bdr/_240_/t01db2be5c3044f53f7.jpg",
            title: "这是家具生活中的图片",
            content:
              "英语世界最具权威的牛津词典上周刚刚宣布了它选出的2018年度词汇——有毒（Toxic）"
          },
          {
            id: 19,
            imgUrl:
              "http://p1.so.qhimgs1.com/bdr/_240_/t0116228e1bd75d8a21.jpg",
            title: "这是家具生活中的图片",
            content:
              "英语世界最具权威的牛津词典上周刚刚宣布了它选出的2018年度词汇——有毒（Toxic）"
          },
          {
            id: 20,
            imgUrl:
              "http://p5.so.qhimgs1.com/bdr/_240_/t014f5369131760215b.jpg",
            title: "这是家具生活中的图片",
            content:
              "英语世界最具权威的牛津词典上周刚刚宣布了它选出的2018年度词汇——有毒（Toxic）"
          }
        ],
        [
          {
            id: 21,
            imgUrl:
              "http://p0.so.qhimgs1.com/bdr/_240_/t01f156b5deb9a74bea.jpg",
            title: "这是明星美女中的图片",
            content:
              "英语世界最具权威的牛津词典上周刚刚宣布了它选出的2018年度词汇——有毒（Toxic）"
          },
          {
            id: 22,
            imgUrl:
              "http://p0.so.qhimgs1.com/bdr/_240_/t01699dfb2d6ba9c804.jpg",
            title: "这是明星美女中的图片",
            content:
              "英语世界最具权威的牛津词典上周刚刚宣布了它选出的2018年度词汇——有毒（Toxic）"
          },
          {
            id: 23,
            imgUrl:
              "http://p2.so.qhimgs1.com/bdr/_240_/t017c59d7e8bd2f2e02.jpg",
            title: "这是明星美女中的图片",
            content:
              "英语世界最具权威的牛津词典上周刚刚宣布了它选出的2018年度词汇——有毒（Toxic）"
          }
        ],
        [
          {
            id: 24,
            imgUrl:
              "http://p0.so.qhimgs1.com/bdr/_240_/t0149fb21182fb484da.jpg",
            title: "这是空间设计中的图片",
            content:
              "英语世界最具权威的牛津词典上周刚刚宣布了它选出的2018年度词汇——有毒（Toxic）"
          },
          {
            id: 25,
            imgUrl: "http://p0.so.qhmsg.com/bdr/_240_/t01c067aa32cbb3a135.jpg",
            title: "这是空间设计中的图片",
            content:
              "英语世界最具权威的牛津词典上周刚刚宣布了它选出的2018年度词汇——有毒（Toxic）"
          },
          {
            id: 26,
            imgUrl:
              "http://p1.so.qhimgs1.com/bdr/_240_/t01fa43ff0e02e7ec7d.jpg",
            title: "这是空间设计中的图片",
            content:
              "英语世界最具权威的牛津词典上周刚刚宣布了它选出的2018年度词汇——有毒（Toxic）"
          }
        ],
        [
          {
            id: 27,
            imgUrl: "http://p0.so.qhmsg.com/bdr/_240_/t01538ea4a80c7adb25.jpg",
            title: "这是户型装饰中的图片",
            content:
              "英语世界最具权威的牛津词典上周刚刚宣布了它选出的2018年度词汇——有毒（Toxic）"
          },
          {
            id: 28,
            imgUrl:
              "http://p3.so.qhimgs1.com/bdr/_240_/t0131a461a7c838f843.jpg",
            title: "这是户型装饰中的图片",
            content:
              "英语世界最具权威的牛津词典上周刚刚宣布了它选出的2018年度词汇——有毒（Toxic）"
          },
          {
            id: 29,
            imgUrl:
              "http://p0.so.qhimgs1.com/bdr/_240_/t010fbeb03be7b3fada.jpg",
            title: "这是户型装饰中的图片",
            content:
              "英语世界最具权威的牛津词典上周刚刚宣布了它选出的2018年度词汇——有毒（Toxic）"
          }
        ]
      ],
      newList: []
    };
  },
  created() {
    this.getAllcategory();
    this.getPhotoImg(0);
  },
  methods: {
    getAllcategory() {
      this.navData.unshift({ title: "全部", id: 0 });
    },
    getPhotoImg(itemId) {
      this.newList = this.list[itemId];
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
.photolist {
  list-style: none;
  padding: 0 5px;
  margin: 0;
  li {
    background-color: #ccc;
    list-style: none;
    margin-bottom: 10px;
    text-align: center;
    box-shadow: 0 0 10px #999;
    position: relative;
    img {
      width: 100%;
      border-radius: 5px;
      vertical-align: middle;
    }
    .photoinfo {
      width: 100%;
      max-height: 86px;
      position: absolute;
      bottom: 0;
      background: rgba(0, 0, 0, 0.6);
      padding: 5px;
      h1 {
        text-align: left;
        font-size: 13px;
        color: #fff;
        margin: 3px 0 5px 0;
      }
      p {
        font-size: 12px;
        text-align: left;
        color: #fff;
        margin: 0;
      }
    }
    img[lazy="loading"] {
      width: 40px;
      height: 300px;
      margin: auto;
    }
  }
}
</style>
