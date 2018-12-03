<template>
  <div>
    <mt-swipe :auto="4000">
      <!-- v-for="item in lunBoList" :key="item.id" -->
      <mt-swipe-item v-for="item in lunBoList" :key="item.id">
        <img :src="item.imgUrl" :class="{'isFull' : isFull}">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  props: ["lunBoList", "isFull"]
};
</script>

<style lang="scss" scoped>
.mint-swipe {
  height: 165px;
  .mint-swipe-item {
    text-align: center;
  }
  img {
    height: 100%;
  }
}
.isFull {
  width: 100%;
}
</style>
