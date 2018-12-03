//1.1 配置路由  导入路由包
import VueRouter from 'vue-router';
 
//导入对应的路由组件
import HomeContainer from "./components/tabbar/HomeContainer.vue";
import MemberContainer from "./components/tabbar/MemberContainer.vue";
import ShopcarContainer from "./components/tabbar/ShopcarContainer.vue";
import SearchContainer from "./components/tabbar/SearchContainer.vue";
import NewList from "./components/newlist/NewList.vue";
import NewsInfo from "./components/newlist/NewsInfo.vue";
import PhotoList from "./components/photolist/PhotoList.vue";
import PhotoInfo from "./components/photolist/PhotoInfo.vue";
import GoodsList from "./components/goodslist/GoodsList.vue";
import GoodsInfo from "./components/goodslist/GoodsInfo.vue";
import GoodsDesc from "./components/goodslist/GoodsDesc.vue";
import GoodsComment from "./components/goodslist/GoodsComment.vue";
// 2. 创建路由对象
var router = new VueRouter({
  routes: [//配置路由规则 
    { path:"/",redirect: "/home"},
    { path: "/home", component: HomeContainer},
    { path: "/member", component: MemberContainer},
    { path: "/shopcar", component: ShopcarContainer},
    { path: "/search", component: SearchContainer },
    { path: "/home/newslist", component:NewList },
    { path: "/home/newsinfo/:id", component: NewsInfo},
    { path: "/home/photolist" , component:PhotoList},
    { path: "/home/photoinfo:id",component: PhotoInfo},
    { path: "/home/goodslist" , component:GoodsList},
    { path: "/home/goodsinfo/:id",component: GoodsInfo},
    { path: "/home/goodsdesc/:id",component: GoodsDesc, name: "goodsdesc"},
    { path: "/home/goodscomment/:id",component: GoodsComment, name: "goodscomment"},
  ],
  linkActiveClass:"mui-active" //覆盖默认路由提供的叫做router-link-active
})

// 把路由对象暴露出去
export default router