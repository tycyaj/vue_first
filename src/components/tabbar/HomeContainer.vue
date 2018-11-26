<template>
    <div>
        <mt-swipe :auto="4000">
           <!-- v-for="item in lunBoList" :key="item.id" -->
           <mt-swipe-item v-for="item in lunBoList" :key="item.id">
             <img :src="item.imgUrl" alt="">
           </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
  data() {
    return {
      // urlLunboImg :[],
      lunBoList: [
        { status:0, id: 0, imgUrl: require("../../lib/images/ban03.png") },
        { status:0, id: 1, imgUrl: require("../../lib/images/ban02.jpg") },
        { status:0, id: 2, imgUrl: require("../../lib/images/ban01.jpg") },
        { status:0, id: 3, imgUrl: require("../../lib/images/ban04.png") }
      ]
    };
  },
  created(){
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
.mint-swipe {
  height: 165px;

  // .mint-swipe-item {
  //   &:nth-child(1) {
  //     background-color: red;
  //   }
  //   &:nth-child(2) {
  //     background-color: blue;
  //   }
  //   &:nth-child(3) {
  //     background-color: yellow;
  //   }
  // }
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
