// 这是入口文件   

//  导入 vue 框架文件
import Vue from "vue";

//导入 app 根组件
import App from "./App.vue"
//导入 mint-UI 中的组件   按需导入  
import { Header } from "mint-ui";
//手动注册按需导入的组件
Vue.component(Header.name, Header);
// 导入 底部菜单栏所需要的 mui文件
import "./lib/mui/css/mui.css";



var login = {
    template: "<h1>测试一下下 {{ this.msg }}</h1>"
}
var vm = new Vue({
    el: "#app",
    render: c => c(App)

})