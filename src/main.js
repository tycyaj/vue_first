// 这是入口文件   

//  导入 vue 框架文件
import Vue from "vue";
//1.1 配置路由  导入路由包
import VueRouter from "vue-router"
//1.2 安装路由
Vue.use(VueRouter);

//2.1  导入 vue-resource  
import VueResource from "vue-resource";
Vue.use(VueResource);

// 安装图片预览插件
import VuePreview from 'vue-preview';
Vue.use(VuePreview);

// cnpm i vuex - S  安装后导入vuex包 并注册 
import Vuex from "vuex";
Vue.use(Vuex);

// new 实例 得到一个数据仓储对象
// 在一开始执行main.js时 先从本地存储中 把购物车的数据读出来
var car = JSON.parse(localStorage.getItem('car') || '[]');

var store = new Vuex.Store({
    state: { //  获取state中的数据方法: this.$store.state.方法名
        // 数据存放的地方
        // 购物车商品的数据  存储一些商品的对象 
        // 例如:{id:商品的id,count:要购买的数量,price:商品的单价,selected:false}       
        car: car
    },
    mutations: { //  this.$store.commit('方法的名称'，按需传递的唯一参数)
        // 处理数据的地方
        addToCar(state, addcardata) {
            //  定义一个标识符  
            var flag = false;
            // 循环当前购物车 car 判断是否已经有了该商品
            state.car.some(item => {
                if (item.id == addcardata.id) {
                    //说明购物车中已经有这个商品了  只需要更新数量
                    item.count += parseInt(addcardata.count)
                    // 退出后续循环
                    flag = true;
                    return true 
                }
            })
            // 循环完毕还是没找到就直接把 addcardata 对象push进 car 数组中
            if (!flag){
                state.car.push(addcardata)
            }
            //当更新Car之后  把car数组  存储到本地 localStorage
            localStorage.setItem("car",JSON.stringify(state.car))

        }
    },
    getters: { // this.$store.getters.***
        getAllCount(state){
            var c = 0;
            state.car.forEach(item =>{
                c+=item.count
            })
            return c
        }
    }
})


//定义全局过滤器    /使用 nodeJs 中的 moment  安装 npm i moment -s  
// 导入格式化时间插件
import moment from "moment";
Vue.filter("dateFormat", function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
    return moment(dataStr).format(pattern)
})

//导入 app 根组件 
import App from "./App.vue"
//导入 mint-UI 中的组件   按需导入 并且手动注册按需导入的组件
// import {
//     Header,
//     Swipe,
//     SwipeItem,
//     Button,
//     Lazyload
// } from "mint-ui";
// Vue.component(Header.name, Header);
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);
// Vue.use(Lazyload);
import MintUi from "mint-ui";
Vue.use(MintUi);
import "mint-ui/lib/style.css";



// 导入 底部菜单栏所需要的 mui文件
import "./lib/mui/css/mui.css";
// 导入 底部图标所有到的css
import "./lib/mui/css/icons-extra.css"


// 1.3 导入自身定义的路由文件  router.js 模块
import router from "./router.js"

// var login = {
//     template: "<h1>测试一下下 {{ this.msg }}</h1>"
// }
var vm = new Vue({
    el: "#app",
    render: c => c(App),
    router, //1.4挂载路由对象到 vm 实例
    store // 挂在 store 状态管理对象
})