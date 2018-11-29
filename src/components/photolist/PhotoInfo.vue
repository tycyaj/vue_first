<template>
  <div class="PhotoInfo">
    <h3>{{ PhotoInfoData[id].title }}</h3>
    <p class="subtitle">
      <span>发表时间：{{ PhotoInfoData[id].add_time | dateFormat }}</span>
      <span>点击：{{ PhotoInfoData[id].click}} 次</span>
    </p>
    <hr>
    <!-- 缩略图区域 -->
    <vue-preview :slides="slide1[id-1]" @close="handleClose"></vue-preview>

    <!-- 图片内容 -->
    <div class="content" v-html="PhotoInfoData[id].content"></div>
    <!-- 放置现成的评论字组件 -->
    <cmt-box :id="id-1"></cmt-box>
  </div>
</template>
<script>
import comment from "../subcomponents/comment.vue";
export default {
  data() {
    return {
      // 获取把路由中获取的id
      id: this.$route.params.id,
      slide1: [
        [
          {
            src: "http://p3.so.qhimgs1.com/bdr/_240_/t01897e38796594c8b3.jpg",
            msrc: "http://p3.so.qhimgs1.com/bdr/_240_/t01897e38796594c8b3.jpg",
            alt: "picture1",
            title: "Image Caption 1",
            w: 600,
            h: 400
          },
          {
            src: "http://p2.so.qhmsg.com/bdr/_240_/t01db2be5c3044f53f7.jpg",
            msrc: "http://p2.so.qhmsg.com/bdr/_240_/t01db2be5c3044f53f7.jpg",
            alt: "picture2",
            title: "Image Caption 2",
            w: 600,
            h: 400
          },
          {
            src: "http://p1.so.qhimgs1.com/bdr/_240_/t01a3e26ffbe2aa2f9d.jpg",
            msrc: "http://p1.so.qhimgs1.com/bdr/_240_/t01a3e26ffbe2aa2f9d.jpg",
            alt: "picture1",
            title: "Image Caption 1",
            w: 600,
            h: 400
          },
          {
            src: "http://p0.so.qhimgs1.com/bdr/_240_/t01d8d6f58bd10f4fd4.jpg",
            msrc: "http://p0.so.qhimgs1.com/bdr/_240_/t01d8d6f58bd10f4fd4.jpg",
            alt: "picture2",
            title: "Image Caption 2",
            w: 600,
            h: 400
          }
        ],
        [
          {
            src:
              "https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg",
            msrc:
              "https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg",
            alt: "picture1",
            title: "Image Caption 1",
            w: 600,
            h: 400
          },
          {
            src:
              "https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg",
            msrc:
              "https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg",
            alt: "picture2",
            title: "Image Caption 2",
            w: 1200,
            h: 900
          }
        ],
        [
          {
            src: "http://p1.so.qhimgs1.com/bdr/_240_/t01a3e26ffbe2aa2f9d.jpg",
            msrc: "http://p1.so.qhimgs1.com/bdr/_240_/t01a3e26ffbe2aa2f9d.jpg",
            alt: "picture1",
            title: "Image Caption 1",
            w: 600,
            h: 400
          },
          {
            src: "http://p0.so.qhimgs1.com/bdr/_240_/t01d8d6f58bd10f4fd4.jpg",
            msrc: "http://p0.so.qhimgs1.com/bdr/_240_/t01d8d6f58bd10f4fd4.jpg",
            alt: "picture2",
            title: "Image Caption 2",
            w: 600,
            h: 400
          }
        ],
        [
          {
            src: "http://p1.so.qhimgs1.com/bdr/_240_/t01a3e26ffbe2aa2f9d.jpg",
            msrc: "http://p1.so.qhimgs1.com/bdr/_240_/t01a3e26ffbe2aa2f9d.jpg",
            alt: "picture1",
            title: "Image Caption 1",
            w: 600,
            h: 400
          },
          {
            src: "http://p0.so.qhimgs1.com/bdr/_240_/t01d8d6f58bd10f4fd4.jpg",
            msrc: "http://p0.so.qhimgs1.com/bdr/_240_/t01d8d6f58bd10f4fd4.jpg",
            alt: "picture2",
            title: "Image Caption 2",
            w: 600,
            h: 400
          }
        ],
        [
          {
            src: "http://p1.so.qhimgs1.com/bdr/_240_/t01a3e26ffbe2aa2f9d.jpg",
            msrc: "http://p1.so.qhimgs1.com/bdr/_240_/t01a3e26ffbe2aa2f9d.jpg",
            alt: "picture1",
            title: "Image Caption 1",
            w: 600,
            h: 400
          },
          {
            src: "http://p0.so.qhimgs1.com/bdr/_240_/t01d8d6f58bd10f4fd4.jpg",
            msrc: "http://p0.so.qhimgs1.com/bdr/_240_/t01d8d6f58bd10f4fd4.jpg",
            alt: "picture2",
            title: "Image Caption 2",
            w: 600,
            h: 400
          }
        ],
        [
          {
            src: "http://p1.so.qhimgs1.com/bdr/_240_/t01a3e26ffbe2aa2f9d.jpg",
            msrc: "http://p1.so.qhimgs1.com/bdr/_240_/t01a3e26ffbe2aa2f9d.jpg",
            alt: "picture1",
            title: "Image Caption 1",
            w: 600,
            h: 400
          },
          {
            src: "http://p0.so.qhimgs1.com/bdr/_240_/t01d8d6f58bd10f4fd4.jpg",
            msrc: "http://p0.so.qhimgs1.com/bdr/_240_/t01d8d6f58bd10f4fd4.jpg",
            alt: "picture2",
            title: "Image Caption 2",
            w: 600,
            h: 400
          }
        ],
        [
          {
            src: "http://p1.so.qhimgs1.com/bdr/_240_/t01a3e26ffbe2aa2f9d.jpg",
            msrc: "http://p1.so.qhimgs1.com/bdr/_240_/t01a3e26ffbe2aa2f9d.jpg",
            alt: "picture1",
            title: "Image Caption 1",
            w: 600,
            h: 400
          },
          {
            src: "http://p0.so.qhimgs1.com/bdr/_240_/t01d8d6f58bd10f4fd4.jpg",
            msrc: "http://p0.so.qhimgs1.com/bdr/_240_/t01d8d6f58bd10f4fd4.jpg",
            alt: "picture2",
            title: "Image Caption 2",
            w: 600,
            h: 400
          }
        ],
        [
          {
            src: "http://p1.so.qhimgs1.com/bdr/_240_/t01a3e26ffbe2aa2f9d.jpg",
            msrc: "http://p1.so.qhimgs1.com/bdr/_240_/t01a3e26ffbe2aa2f9d.jpg",
            alt: "picture1",
            title: "Image Caption 1",
            w: 600,
            h: 400
          },
          {
            src: "http://p0.so.qhimgs1.com/bdr/_240_/t01d8d6f58bd10f4fd4.jpg",
            msrc: "http://p0.so.qhimgs1.com/bdr/_240_/t01d8d6f58bd10f4fd4.jpg",
            alt: "picture2",
            title: "Image Caption 2",
            w: 600,
            h: 400
          }
        ],
        [
          {
            src: "http://p0.so.qhimgs1.com/bdr/_240_/t01d8d6f58bd10f4fd4.jpg",
            msrc: "http://p0.so.qhimgs1.com/bdr/_240_/t01d8d6f58bd10f4fd4.jpg",
            alt: "picture2",
            title: "Image Caption 2",
            w: 600,
            h: 400
          }
        ],
        [
          {
            src: "http://p0.so.qhimgs1.com/bdr/_240_/t01d8d6f58bd10f4fd4.jpg",
            msrc: "http://p0.so.qhimgs1.com/bdr/_240_/t01d8d6f58bd10f4fd4.jpg",
            alt: "picture2",
            title: "Image Caption 2",
            w: 600,
            h: 400
          }
        ]
      ],
      PhotoInfoData: [
        {
          id: 1,
          title: "清新有活力的公寓设计 用色彩焕然一新",
          click: 3,
          add_time: Date.now(),
          content:
            "英语世界最具权威的牛津词典上周刚刚宣布了它选出的2018年度词汇——有毒（Toxic）"
        },
        {
          id: 2,
          title: "清新有活力的公寓设计 用色彩焕然一新",
          click: 3,
          add_time: Date.now(),
          content:
            "英语世界最具权威的牛津词典上周刚刚宣布了它选出的2018年度词汇——有毒（Toxic）"
        },
        {
          id: 3,
          title: "清新有活力的公寓设计 用色彩焕然一新",
          click: 3,
          add_time: Date.now(),
          content:
            "英语世界最具权威的牛津词典上周刚刚宣布了它选出的2018年度词汇——有毒（Toxic）"
        },
        {
          id: 4,
          title: "清新有活力的公寓设计 用色彩焕然一新",
          click: 3,
          add_time: Date.now(),
          content:
            "英语世界最具权威的牛津词典上周刚刚宣布了它选出的2018年度词汇——有毒（Toxic）"
        },
        {
          id: 5,
          title: "清新有活力的公寓设计 用色彩焕然一新",
          click: 3,
          add_time: Date.now(),
          content:
            "英语世界最具权威的牛津词典上周刚刚宣布了它选出的2018年度词汇——有毒（Toxic）"
        },
        {
          id: 6,
          title: "清新有活力的公寓设计 用色彩焕然一新",
          click: 3,
          add_time: Date.now(),
          content:
            "英语世界最具权威的牛津词典上周刚刚宣布了它选出的2018年度词汇——有毒（Toxic）"
        },
        {
          id: 7,
          title: "清新有活力的公寓设计 用色彩焕然一新",
          click: 3,
          add_time: Date.now(),
          content:
            "英语世界最具权威的牛津词典上周刚刚宣布了它选出的2018年度词汇——有毒（Toxic）"
        },
        {
          id: 8,
          title: "清新有活力的公寓设计 用色彩焕然一新",
          click: 3,
          add_time: Date.now(),
          content:
            "英语世界最具权威的牛津词典上周刚刚宣布了它选出的2018年度词汇——有毒（Toxic）"
        },
        {
          id: 9,
          title: "清新有活力的公寓设计 用色彩焕然一新",
          click: 3,
          add_time: Date.now(),
          content:
            "英语世界最具权威的牛津词典上周刚刚宣布了它选出的2018年度词汇——有毒（Toxic）"
        },
        {
          id: 10,
          title: "清新有活力的公寓设计 用色彩焕然一新",
          click: 3,
          add_time: Date.now(),
          content:
            "英语世界最具权威的牛津词典上周刚刚宣布了它选出的2018年度词汇——有毒（Toxic）"
        },
        {
          id: 11,
          title: "清新有活力的公寓设计 用色彩焕然一新",
          click: 3,
          add_time: Date.now(),
          content:
            "英语世界最具权威的牛津词典上周刚刚宣布了它选出的2018年度词汇——有毒（Toxic）"
        },
        {
          id: 12,
          title: "清新有活力的公寓设计 用色彩焕然一新",
          click: 3,
          add_time: Date.now(),
          content:
            "英语世界最具权威的牛津词典上周刚刚宣布了它选出的2018年度词汇——有毒（Toxic）"
        },
        {
          id: 13,
          title: "清新有活力的公寓设计 用色彩焕然一新",
          click: 3,
          add_time: Date.now(),
          content:
            "英语世界最具权威的牛津词典上周刚刚宣布了它选出的2018年度词汇——有毒（Toxic）"
        },
        {
          id: 14,
          title: "清新有活力的公寓设计 用色彩焕然一新",
          click: 3,
          add_time: Date.now(),
          content:
            "英语世界最具权威的牛津词典上周刚刚宣布了它选出的2018年度词汇——有毒（Toxic）"
        },
        {
          id: 15,
          title: "清新有活力的公寓设计 用色彩焕然一新",
          click: 3,
          add_time: Date.now(),
          content:
            "英语世界最具权威的牛津词典上周刚刚宣布了它选出的2018年度词汇——有毒（Toxic）"
        },
        {
          id: 16,
          title: "清新有活力的公寓设计 用色彩焕然一新",
          click: 3,
          add_time: Date.now(),
          content:
            "英语世界最具权威的牛津词典上周刚刚宣布了它选出的2018年度词汇——有毒（Toxic）"
        },
        {
          id: 17,
          title: "清新有活力的公寓设计 用色彩焕然一新",
          click: 3,
          add_time: Date.now(),
          content:
            "英语世界最具权威的牛津词典上周刚刚宣布了它选出的2018年度词汇——有毒（Toxic）"
        },
        {
          id: 18,
          title: "清新有活力的公寓设计 用色彩焕然一新",
          click: 3,
          add_time: Date.now(),
          content:
            "英语世界最具权威的牛津词典上周刚刚宣布了它选出的2018年度词汇——有毒（Toxic）"
        },
        {
          id: 19,
          title: "清新有活力的公寓设计 用色彩焕然一新",
          click: 3,
          add_time: Date.now(),
          content:
            "英语世界最具权威的牛津词典上周刚刚宣布了它选出的2018年度词汇——有毒（Toxic）"
        },
        {
          id: 20,
          title: "清新有活力的公寓设计 用色彩焕然一新",
          click: 3,
          add_time: Date.now(),
          content:
            "英语世界最具权威的牛津词典上周刚刚宣布了它选出的2018年度词汇——有毒（Toxic）"
        },
        {
          id: 21,
          title: "清新有活力的公寓设计 用色彩焕然一新",
          click: 3,
          add_time: Date.now(),
          content:
            "英语世界最具权威的牛津词典上周刚刚宣布了它选出的2018年度词汇——有毒（Toxic）"
        },
        {
          id: 22,
          title: "清新有活力的公寓设计 用色彩焕然一新",
          click: 3,
          add_time: Date.now(),
          content:
            "英语世界最具权威的牛津词典上周刚刚宣布了它选出的2018年度词汇——有毒（Toxic）"
        },
        {
          id: 23,
          title: "清新有活力的公寓设计 用色彩焕然一新",
          click: 3,
          add_time: Date.now(),
          content:
            "英语世界最具权威的牛津词典上周刚刚宣布了它选出的2018年度词汇——有毒（Toxic）"
        },
        {
          id: 24,
          title: "清新有活力的公寓设计 用色彩焕然一新",
          click: 3,
          add_time: Date.now(),
          content:
            "英语世界最具权威的牛津词典上周刚刚宣布了它选出的2018年度词汇——有毒（Toxic）"
        },
        {
          id: 25,
          title: "清新有活力的公寓设计 用色彩焕然一新",
          click: 3,
          add_time: Date.now(),
          content:
            "英语世界最具权威的牛津词典上周刚刚宣布了它选出的2018年度词汇——有毒（Toxic）"
        },
        {
          id: 26,
          title: "清新有活力的公寓设计 用色彩焕然一新",
          click: 3,
          add_time: Date.now(),
          content:
            "英语世界最具权威的牛津词典上周刚刚宣布了它选出的2018年度词汇——有毒（Toxic）"
        },
        {
          id: 27,
          title: "清新有活力的公寓设计 用色彩焕然一新",
          click: 3,
          add_time: Date.now(),
          content:
            "英语世界最具权威的牛津词典上周刚刚宣布了它选出的2018年度词汇——有毒（Toxic）"
        },
        {
          id: 28,
          title: "清新有活力的公寓设计 用色彩焕然一新",
          click: 3,
          add_time: Date.now(),
          content:
            "英语世界最具权威的牛津词典上周刚刚宣布了它选出的2018年度词汇——有毒（Toxic）"
        },
        {
          id: 29,
          title: "清新有活力的公寓设计 用色彩焕然一新",
          click: 3,
          add_time: Date.now(),
          content:
            "英语世界最具权威的牛津词典上周刚刚宣布了它选出的2018年度词汇——有毒（Toxic）"
        },
        {
          id: 30,
          title: "清新有活力的公寓设计 用色彩焕然一新",
          click: 3,
          add_time: Date.now(),
          content:
            "英语世界最具权威的牛津词典上周刚刚宣布了它选出的2018年度词汇——有毒（Toxic）"
        }
      ]
    };
  },
  created() {},
  methods: {
    handleClose() {
      // console.log("close event");
    }
  },

  components: {
    "cmt-box": comment
  }
};
</script>



<style lang="scss" scoped>
.PhotoInfo {
  padding: 0 10px;
  h3 {
    font-size: 15px;
    text-align: center;
    padding: 12px 0;
    color: #26a2ff;
  }
  .subtitle {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
  }
  .content {
    font-size: 13px;
    line-height: 22px;
  }
}
</style>
