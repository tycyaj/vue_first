<template>
  <div class="app_container">
    <!-- 顶部 header 区域 -->
    <mt-header fixed title="我爱我家首页">
      <span slot="left" @click="goBack" v-show="flag">
        <mt-button icon="back">返回</mt-button>
      </span>
    </mt-header>

    <!-- 中间路由 区域 页面滑动动画 transition上加mode="out-in" 或者 v-leave-to 加 position: absolute;-->
    <transition>
      <router-view></router-view>
    </transition>

    <!-- 底部 tabbar 区域  -->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item-tyc" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>

      <router-link class="mui-tab-item-tyc" to="/member">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>

      <router-link class="mui-tab-item-tyc" to="/shopcar">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge" id="badge">{{ $store.getters.getAllCount }}</span>
        </span>
        
        <span class="mui-tab-label">购物车</span>
      </router-link>

      <router-link class="mui-tab-item-tyc" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: false
    };
  },
  methods: {   
    goBack() {
      // 点击后退
      this.$router.go(-1);
    }
  },
  watch: {
    "$route.path": function(newval) {
      if (newval === "/home") {
        this.flag = false;
      } else {
        this.flag = true;
      }
    }
  },
  created(){
    // 更进入页面判断返回按钮在home页面是隐藏 负责显示
    this.flag = this.$route.path === "/home" ? false : true;
  }
};
</script>


<style lang="scss" scoped>
.app_container {
  padding-top: 40px;
  padding-bottom: 50px;
  overflow-x: hidden;
}
.mint-header.is-fixed {
  z-index: 99;
}
.v-enter {
  opacity: 0;
  transform: translate(100%);
}
.v-leave-to {
  opacity: 0;
  transform: translate(-100%);
  position: absolute;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}

/* 这是为了解决  photolist中顶部滑动菜单样式和底部菜单栏的样式冲突问题 */
.mui-bar-tab {
  .mui-tab-item-tyc.mui-active {
    color: #007aff;
  }

  .mui-tab-item-tyc {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
  }
  .mui-tab-item-tyc .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
  }

  .mui-tab-item-tyc .mui-icon ~ .mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>