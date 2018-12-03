<template>
  <div class="goods-list">
  <!-- 这是使用 router-link 作为导航的方法 a 标签 -->
    <!-- <router-link :to="'/home/goodsinfo/'+ item.id" tag="div" class="goods-item" v-for="item in newList" :key="item.id">
      <img :src="item.img_Url">
      <h1>{{ item.title }}</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥{{ item.sell_price }}</span>
          <span class="old">￥{{ item.market_price }}</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩{{ item.market_price }}件</span>
        </p>
      </div>
    </router-link> -->

  <!-- 这是使用 this.$router 作为导航的方法 在methods中定义方法-->

    <div class="goods-item" v-for="item in newList" :key="item.id"  @click="goDetail(item.id)">
      <img :src="item.img_Url">
      <h1>{{ item.title }}</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥{{ item.sell_price }}</span>
          <span class="old">￥{{ item.market_price }}</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩{{ item.market_price }}件</span>
        </p>
      </div>
    </div>

    <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>

  </div>

</template>

<script>
import { Toast } from "mint-ui";
export default {
    data(){
         return {
            pageId : 0,
            newList:[],
            goodList : [
                [
                    {id:1,title:"HUAWEI P20 Pro 6GB+128GB 全网通版（极光闪蝶）" , img_Url:require("../../images/gs3.png"),sell_price:2199,market_price:2499,stock_quantity:15},
                    {id:2,title:"HUAWEI P20 Pro 6GB+128GB 全网通版（极光闪蝶）" , img_Url:require("../../images/gs4.png"),sell_price:1999,market_price:2299,stock_quantity:200},
                    {id:3,title:"HUAWEI P20 Pro 6GB+128GB 全网通版（极光闪蝶）" , img_Url:require("../../images/gs5.png"),sell_price:2599,market_price:2899,stock_quantity:60},
                    {id:4,title:"HUAWEI P20 Pro 6GB+128GB 全网通版（极光闪蝶）" , img_Url:require("../../images/gs1.png"),sell_price:1899,market_price:2199,stock_quantity:160},
                    {id:5,title:"HUAWEI P20 Pro 6GB+128GB 全网通版（极光闪蝶）" , img_Url:require("../../images/gs2.png"),sell_price:1899,market_price:2199,stock_quantity:120}
                ],
                [
                    {id:6,title:"HUAWEI P20 Pro 6GB+128GB 全网通版（极光闪蝶）" , img_Url:require("../../images/gs3.png"),sell_price:2599,market_price:2899,stock_quantity:60},
                    {id:7,title:"HUAWEI P20 Pro 6GB+128GB 全网通版（极光闪蝶）" , img_Url:require("../../images/gs4.png"),sell_price:1899,market_price:2199,stock_quantity:160},
                    {id:8,title:"HUAWEI P20 Pro 6GB+128GB 全网通版（极光闪蝶）" , img_Url:require("../../images/gs5.png"),sell_price:1899,market_price:2199,stock_quantity:120}
                ],
                 [
                    {id:9,title:"HUAWEI P20 Pro 6GB+128GB 全网通版（极光闪蝶）" , img_Url:require("../../images/gs3.png"),sell_price:2599,market_price:2899,stock_quantity:60},
                    {id:10,title:"HUAWEI P20 Pro 6GB+128GB 全网通版（极光闪蝶）" , img_Url:require("../../images/gs4.png"),sell_price:1899,market_price:2199,stock_quantity:160},
                    {id:11,title:"HUAWEI P20 Pro 6GB+128GB 全网通版（极光闪蝶）" , img_Url:require("../../images/gs5.png"),sell_price:1899,market_price:2199,stock_quantity:120}
                ]
            ],
           
        }
    },
    created(){
        this.init()
    },
    methods:{
        init(){
            this.newList = this.goodList[this.pageId];
        },
        getMore(){
            if(this.pageId < this.goodList.length-1){
                this.pageId++;
                this.newList = this.newList.concat(this.goodList[this.pageId]);
            }else{
                Toast("没有更多了...")
            }
        },
        goDetail(id){
            // 使用this.$router.push 定义路由地址    
            // this.$route 是路由的【参数对象】 所有路由中的参数 params 、 query 
            // this.$router 是路由中的【导航对象】 用它可以实现路由的前进、后退 、跳转到新的 URL地址
            this.$router.push("/home/goodsinfo/"+ id)
        }
    },
    
}

</script>

<style lang="scss" scoped>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  padding: 8px;
  justify-content: space-between;
  .goods-item {
    width: 49%;
    border: 1px solid #ccc;
    box-shadow: 0 0 8px #cccccc;
    margin-bottom: 8px;
    padding: 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 287px;
    img {
      width: 100%;
      padding: 5px 0 0;
    }
    h1 {
      font-size: 13px;
    }
    .info {
      background-color: #ddd;
      padding: 5px;
      p {
        margin-bottom: 0;
        font-size: 13x;
      }
      .price {
        margin-bottom: 3px;
        .now {
          color: red;
          font-size: 16px;
        }
        .old {
          font-size: 12px;
          text-decoration: line-through;
        }
      }
      .sell {
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
</style>
