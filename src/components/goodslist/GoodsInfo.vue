<template>
  <div class="goodsinfo_contaniner">
    <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
      <div class="ball" v-show="ballFlag" ref="ball"></div>
    </transition>

    <!-- 这是商品轮播图去区域 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <swiper :lunBoList="lunBotu" :isFull="false"></swiper>
        </div>
      </div>
    </div>

    <!-- 这是商品购买区域 -->
    <div class="mui-card">
      <div class="mui-card-header">{{ goodsInfoData[id].title }}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            市场价：
            <del>￥{{ goodsInfoData[id].market_price }}</del>&nbsp;&nbsp;
            销售价：
            <span class="now_price">￥{{ goodsInfoData[id].sell_price }}</span>
          </p>
          <p>购买数量：
            <!-- 子组件向父组件传值   @getcount="getSelectedCount"
            父组件中:
                1.  父组件自定义方法名  @getcount   方法为：getSelectedCount
                2.  方法 getSelectedCount 定义形参 count 以便接受子组件传来的值 并保存在 data 中
            子组件中:
                3.  在子组件中需要传值的地方 定义方法 @click 或者 @change 方法  方法名为 countChanged
                4.  通过 ref 属性 获取当前需要传递的值    ref="numbox"
                5.  在方法中使用 this.$emit('getcount',parseInt(this.$refs.numbox.value)) 向父组件传递
                    其中 getcound 为父组件中的方法名   this.$refs.numbox.value 为向父组件传递的值
                    
                    父组件方法中的参数 count 就是子组件传递过来的值
            -->
            <numbox @getcount="getSelectedCount" :max="goodsInfoData[id].stock_quantity"></numbox>

            <!-- 父组件向子组件传值  :max="goodsInfoData[id].stock_quantity"

                  1.父组件自定义绑定属性 :max  值为需要传递的值  "goodsInfoData[id].stock_quantity"
                  2.子组件中使用 props 选项接收  props:["max"]
                  3.子组件接收后使用  :data-numbox-max="max" 绑定值
 
            -->
          </p>
          <p>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>
          </p>
        </div>
      </div>
      <div class="mui-card-footer">页脚</div>
    </div>

    <!-- 商品参数区域 -->
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号：{{ goodsInfoData[id].goos_no }}</p>
          <p>库存情况：{{ goodsInfoData[id].stock_quantity }}件</p>
          <p>上架时间：{{ goodsInfoData[id].add_time | dateFormat }}</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button>
        <mt-button type="danger" size="large" plain @click="goComment(id)">商品评论</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
// 导入轮播组件
import swiper from "../subcomponents/swiper.vue";
// 导入数字选择框组件
import numbox from "../subcomponents/goodsinfo_number.vue";

export default {
  data() {
    return {
      id: this.$route.params.id - 1, //获取上页传入路由中的ID
      goodsInfoData: [
        {
          id: 1,
          title: "HUAWEI P20 Pro 6GB+128GB",
          add_time: "2018-04-19T19:34:55.000Z",
          goos_no: "SD3973042344",
          stock_quantity: 20,
          market_price: 269,
          sell_price: 199
        },
        {
          id: 2,
          title: "HUAWEI Nova 6GB+128GB",
          add_time: "2018-04-19T19:34:55.000Z",
          goos_no: "SD3973042344",
          stock_quantity: 20,
          market_price: 269,
          sell_price: 199
        },
        {
          id: 3,
          title: "HUAWEI Mate Pro 6GB+128GB",
          add_time: "2018-04-19T19:34:55.000Z",
          goos_no: "SD3973042344",
          stock_quantity: 20,
          market_price: 269,
          sell_price: 199
        },
        {
          id: 4,
          title: "HUAWEI Nova3 Pro 6GB+128GB",
          add_time: "2018-04-19T19:34:55.000Z",
          goos_no: "SD3973042344",
          stock_quantity: 20,
          market_price: 269,
          sell_price: 199
        },
        {
          id: 5,
          title: "HUAWEI Nova3i Pro 6GB+128GB",
          add_time: "2018-04-19T19:34:55.000Z",
          goos_no: "SD3973042344",
          stock_quantity: 20,
          market_price: 269,
          sell_price: 199
        }
      ],
      lunBotu: [
        { id: 1, src: require("../../images/gs4.png") },
        { id: 2, src: require("../../images/gs2.png") },
        { id: 3, src: require("../../images/gs3.png") },
        { id: 4, src: require("../../images/gs5.png") }
      ],
      ballFlag: false, //控制小球显示隐藏的标识符
      selectCount: 1
    };
  },
  components: {
    swiper,
    numbox
  },
  created() {
    this.newLunbolist();
  },
  methods: {
    //   轮播图片渲染
    newLunbolist() {
      this.lunBotu.forEach(item => {
        item.imgUrl = item.src;
      });
      this.lunBotu = this.lunBotu;
    },
    // 图文介绍路由
    goDesc(id) {
      this.$router.push({ name: "goodsdesc", params: { id } });
    },
    // 商品评论路由
    goComment(id) {
      this.$router.push({ name: "goodscomment", params: { id } });
    },
    // 小球  添加购物车
    addToShopCar() {
      this.ballFlag = !this.ballFlag;
      // {id:商品的id,count:要购买的数量,price:商品的单价,selected:false}
      // 拼接出一个对象 保存在 store 中的car数组中
      var addcardata = {
        id: this.id,
        count: this.selectCount,
        price: this.goodsInfoData[this.id].sell_price,
        selected: false
      };
      // 通过 store.commit 方法 将商品加入购物车
      this.$store.commit('addToCar',addcardata)
      console.log(addcardata);
    },
    // 小球动画
    beforeEnter(el) {
      el.style.transform = "translate(0,0)";
    },
    enter(el, done) {
      el.offsetWidth;
      //小球移动的距离不能写固定值 ， 屏幕分辨率不同
      // 如何获取小球在不同分辨率下的位置
      // 使用方法domObject.getBoundingClientRect()；

      // 获取小球在页面中的位置
      const ballPosition = this.$refs.ball.getBoundingClientRect();
      // 获取 购物车 页面中的位置
      const badgePosition = document
        .getElementById("badge")
        .getBoundingClientRect();

      const xDist = badgePosition.left - ballPosition.left;
      const yDist = badgePosition.top - ballPosition.top;

      el.style.transform = `translate( ${xDist}px , ${yDist}px )`;
      el.style.transition = "all 0.8s cubic-bezier(.2,-0.3,0.5,.4)";
      done();
    },
    afterEnter(el) {
      this.ballFlag = !this.ballFlag;
    },
    getSelectedCount(count) {
      this.selectCount = count;
      console.log(this.selectCount);
    }
  }
};
</script>



<style lang="scss" scoped>
.goodsinfo_contaniner {
  background-color: #eee;
  overflow: hidden;
  .now_price {
    color: red;
    font-size: 16px;
    font-weight: bold;
  }
  .mui-card-footer {
    display: block;
    button {
      margin: 10px 0;
    }
  }
}

.ball {
  background-color: red;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  position: absolute;
  z-index: 99;
  top: 356px;
  left: 150px;
  // transform:translate(86px,460px)
}
</style>
