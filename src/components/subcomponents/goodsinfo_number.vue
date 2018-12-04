<template>
  <div class="mui-numbox" data-numbox-min="1" :data-numbox-max="max">
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input
      id="test"
      class="mui-input-numbox"
      type="number"
      value="1"
      @change="countChanged"
      ref="numbox"
    >
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
</template>
 
<script>
import mui from "../../lib/mui/js/mui.min.js";
export default {
  // 初始化数字选择框
  mounted() {
    mui(".mui-numbox").numbox();
    // console.log(this.max)
  },
  methods: {
    countChanged() {
      this.$emit("getcount", parseInt(this.$refs.numbox.value));
    }
  },
  props: ["max"], //接收父组件传来的值
  watch: {
    // 因为max 值是本地的数据  不是异步获取的所有不需要监听可直接得到 max 值
    // max: function(newVal, oldVal) {
    //   mui(".mui-numbox").numbox().setOption("max", newVal);
    // }
  }
};
</script>

<style lang="scss" scoped>
</style>
