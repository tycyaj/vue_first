<template>

  <div class="content">
    <h1>{{ goodsDescData[id].title }}</h1>
    <hr>
    <div class="p" v-html="goodsDescData[id].content"></div>
    <img :src="goodsDescData[id].imgsO">
    <img :src="goodsDescData[id].imgsT">

  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      goodsDescData: [
        {
          id: 1,
          title: "HUAWEI P20 Pro 6GB+128GB",
          content:
            "<p style='text-indent:2em'>双卡双待单通，主副卡不区分卡槽，支持Nano SIM卡。注1：双卡4G网络使用，需要根据运营商网络和相关业务部署情况确定是否支持。当前网络仅中国移动支持VOLTE业务。</p><p style='text-indent:2em'>后续手机软件功能可能跟随网络匹配升级，请以手机实际版本支持功能为准。注2：两张电信卡不能同时使用。</p><p style='text-indent:2em'>手机软件功能可能跟随网络匹配升级，请以手机实际版本支持功能为准。注2：两张电信卡不能同时使用。</p> ",
          imgsO: require("../../images/gs6.png"),
          imgsT: require("../../images/gs7.jpg")
        },
        {
          id: 2,
          title: "HUAWEI Nova 6GB+128GB",
          content:
            "<p style='text-indent:2em'>双卡双待单通，主副卡不区分卡槽，支持Nano SIM卡。注1：双卡4G网络使用，需要根据运营商网络和相关业务部署情况确定是否支持。当前网络仅中国移动支持VOLTE业务。</p><p style='text-indent:2em'>后续手机软件功能可能跟随网络匹配升级，请以手机实际版本支持功能为准。注2：两张电信卡不能同时使用。</p><p style='text-indent:2em'>手机软件功能可能跟随网络匹配升级，请以手机实际版本支持功能为准。注2：两张电信卡不能同时使用。</p>",
          imgsO: require("../../images/gs6.png"),
          imgsT: require("../../images/gs7.jpg")
        },
        {
          id: 3,
          title: "HUAWEI Mate Pro 6GB+128GB",
          content:
            "<p style='text-indent:2em'>双卡双待单通，主副卡不区分卡槽，支持Nano SIM卡。注1：双卡4G网络使用，需要根据运营商网络和相关业务部署情况确定是否支持。当前网络仅中国移动支持VOLTE业务。</p><p style='text-indent:2em'>后续手机软件功能可能跟随网络匹配升级，请以手机实际版本支持功能为准。注2：两张电信卡不能同时使用。</p><p style='text-indent:2em'>手机软件功能可能跟随网络匹配升级，请以手机实际版本支持功能为准。注2：两张电信卡不能同时使用。</p>",
          imgsO: require("../../images/gs6.png"),
          imgsT: require("../../images/gs7.jpg")
        },
        {
          id: 4,
          title: "HUAWEI Nova3 Pro 6GB+128GB",
          content:
            "<p style='text-indent:2em'>双卡双待单通，主副卡不区分卡槽，支持Nano SIM卡。注1：双卡4G网络使用，需要根据运营商网络和相关业务部署情况确定是否支持。当前网络仅中国移动支持VOLTE业务。</p><p style='text-indent:2em'>后续手机软件功能可能跟随网络匹配升级，请以手机实际版本支持功能为准。注2：两张电信卡不能同时使用。</p><p style='text-indent:2em'>手机软件功能可能跟随网络匹配升级，请以手机实际版本支持功能为准。注2：两张电信卡不能同时使用。</p>",
          imgsO: require("../../images/gs6.png"),
          imgsT: require("../../images/gs7.jpg")
        },
        {
          id: 5,
          title: "HUAWEI Nova3i Pro 6GB+128GB",
          content:
            "<p style='text-indent:2em'>双卡双待单通，主副卡不区分卡槽，支持Nano SIM卡。注1：双卡4G网络使用，需要根据运营商网络和相关业务部署情况确定是否支持。当前网络仅中国移动支持VOLTE业务。</p><p style='text-indent:2em'>后续手机软件功能可能跟随网络匹配升级，请以手机实际版本支持功能为准。注2：两张电信卡不能同时使用。</p><p style='text-indent:2em'>手机软件功能可能跟随网络匹配升级，请以手机实际版本支持功能为准。注2：两张电信卡不能同时使用。</p>",
          imgsT: require("../../images/gs7.jpg"),
          imgsO: require("../../images/gs6.png")
        }
      ]
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.content {
  padding: 0 10px;
  h1 {
    text-align: center;
    font-size: 16px;
    color: #226aff;
    margin: 15px 0;
  }

  img {
    width: 100%;
  }
}
</style>
