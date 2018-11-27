<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newListData" :key="item.id">
        <router-link :to="'/home/newsinfo/'+ item.id">
          <img class="mui-media-object mui-pull-left" :src="item.imgUrl">
          <div class="mui-media-body">
            <h1>{{ item.title }}</h1>
            <p class="mui-ellipsis">
              <!-- dateFormat("YYYY-MM-DD HH:MM:SS") -->
              发表时间: {{ item.add_time | dateFormat }}
              <span>点击:{{ item.click }}次</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 渲染新闻页面使用的假数据
      newListData: [
        {
          id: 0,
          title: "1季度多家房企利润超50% 去库存促销战打响",
          add_time: "2018-04-16T03:50:28.0000Z",
          zhaiyao: "房企一季度销售业绩已经陆续公布",
          click: 8,
          imgUrl: require("../../images/new01.jpg")
        },
        {
          id: 1,
          title: "2季度多家房企利润超50% 去库存促销战打响",
          add_time: "2018-04-16T03:50:28.0000Z",
          zhaiyao: "房企一季度销售业绩已经陆续公布",
          click: 20,
          imgUrl: require("../../images/new02.jpg")
        },
        {
          id: 2,
          title: "3季度多家房企利润超50% 去库存促销战打响",
          add_time: "2018-04-16T03:50:28.0000Z",
          zhaiyao: "房企一季度销售业绩已经陆续公布",
          click: 10,
          imgUrl: require("../../images/new03.jpg")
        },
        {
          id: 3,
          title: "3季度多家房企利润超50% 去库存促销战打响",
          add_time: "2018-04-16T03:50:28.0000Z",
          zhaiyao: "房企一季度销售业绩已经陆续公布",
          click: 10,
          imgUrl: require("../../images/new01.jpg")
        },
        {
          id: 4,
          title: "3季度多家房企利润超50% 去库存促销战打响",
          add_time: "2018-04-16T03:50:28.0000Z",
          zhaiyao: "房企一季度销售业绩已经陆续公布",
          click: 10,
          imgUrl: require("../../images/new03.jpg")
        },
        {
          id: 5,
          title: "3季度多家房企利润超50% 去库存促销战打响",
          add_time: "2018-04-16T03:50:28.0000Z",
          zhaiyao: "房企一季度销售业绩已经陆续公布",
          click: 10,
          imgUrl: require("../../images/new02.jpg")
        },
        {
          id: 6,
          title: "3季度多家房企利润超50% 去库存促销战打响",
          add_time: "2018-04-16T03:50:28.0000Z",
          zhaiyao: "房企一季度销售业绩已经陆续公布",
          click: 10,
          imgUrl: require("../../images/new01.jpg")
        },
        {
          id: 7,
          title: "3季度多家房企利润超50% 去库存促销战打响",
          add_time: "2018-04-16T03:50:28.0000Z",
          zhaiyao: "房企一季度销售业绩已经陆续公布",
          click: 10,
          imgUrl: require("../../images/new03.jpg")
        },
        {
          id: 8,
          title: "3季度多家房企利润超50% 去库存促销战打响",
          add_time: "2018-04-16T03:50:28.0000Z",
          zhaiyao: "房企一季度销售业绩已经陆续公布",
          click: 10,
          imgUrl: require("../../images/new01.jpg")
        },
        {
          id: 9,
          title: "3季度多家房企利润超50% 去库存促销战打响",
          add_time: "2018-04-16T03:50:28.0000Z",
          zhaiyao: "房企一季度销售业绩已经陆续公布",
          click: 10,
          imgUrl: require("../../images/new02.jpg")
        },
        {
          id: 10,
          title: "3季度多家房企利润超50% 去库存促销战打响",
          add_time: "2018-04-16T03:50:28.0000Z",
          zhaiyao: "房企一季度销售业绩已经陆续公布",
          click: 20,
          imgUrl: require("../../images/new01.jpg")
        }
      ]
    };
  },
  methods: {}
};
</script>


<style lang="scss" scoped>
.mui-table-view {
  li {
    h1 {
      font-size: 14px;
    }
    p.mui-ellipsis {
      font-size: 12px;
      color: #226aff;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
