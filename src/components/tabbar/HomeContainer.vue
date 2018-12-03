<template>
  <div>
    
    <!-- 轮播区域 -->
    <swiper :lunBoList="lunBoList" :isFull="true"></swiper>

    <!-- 九宫格区域 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newslist">
          <img src="../../images/menu1.png">
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/photolist">
          <img src="../../images/menu2.png">
          <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/goodslist">
          <img src="../../images/menu3.png">
          <div class="mui-media-body">商品购买</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu4.png">
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu5.png">
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu6.png">
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    </ul>

  </div>
</template>

<script>
import swiper from "../subcomponents/swiper.vue"

import { Toast } from "mint-ui";
export default {
  data() {
    return {
      // urlLunboImg :[],
      lunBoList: [
        { status: 0, id: 0, imgUrl: require("../../images/ban03.png") },
        { status: 0, id: 1, imgUrl: require("../../images/ban02.jpg") },
        { status: 0, id: 2, imgUrl: require("../../images/ban01.jpg") },
        { status: 0, id: 3, imgUrl: require("../../images/ban04.png") }
      ]
    };
  },
  components:{
    swiper   
    // 导入轮播组件
  },
  created() {
    // this.indexLunbo();
  },
  methods: {
    //http 请求
    // indexLunbo(){
    //   // 这边没有url地址
    //     this.$http.get("url").then( result => {
    //         if(result.body.status === 0){
    //           // 获取表示成功
    //           this.urlLunboImg = result.body.imgUrl;
    //         }else{
    //           Toast("图片加载失败");
    //         }
    //     })
    // }
  }
};
</script>

<style lang="scss" scoped>
  .mui-grid-view.mui-grid-9 {
    background-color: #fff;
    border: none;
  }
  .mui-grid-view.mui-grid-9 .mui-table-view-cell {
    border: none;
  }
  .mui-grid-view.mui-grid-9 .mui-table-view-cell img {
    width: 60px;
  }
</style>
