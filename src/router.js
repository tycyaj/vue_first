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
    { path: "/home/photoinfo:id",component: PhotoInfo}
  ],
  linkActiveClass:"mui-active" //覆盖默认路由提供的叫做router-link-active
})

// 把路由对象暴露出去
export default router