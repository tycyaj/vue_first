<template>
  <div class="cmt-container">
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="请输入你要BB的内容(最多120字)" maxlength="120"></textarea>

    <mt-button type="primary" size="large">发表凭论</mt-button>
    <div class="cmt-list" v-for="(item, index) in message[id]" :key="index">
      <div class="cmt-item">
        <div
          class="cmt-title"
        >第{{index+1}}楼&nbsp;&nbsp;&nbsp;用户:{{item.user_name}}&nbsp;&nbsp;发表时间: {{item.add_time | dateFormat}}</div>
        <div class="cmt-body">{{item.content}}</div>
      </div>
    </div>
    <mt-button type="danger" size="large" plain @click="addmsg(id)">加载更多</mt-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: [
        [
          {
            user_name: "1匿名用户",
            add_time: "2018-01-19T20:09:30.000Z",
            content: "我来评论一下22"
          },
          {
            user_name: "2匿名用户",
            add_time: "2018-12-19T20:09:30.000Z",
            content: "我来评论一00下"
          },
          {
            user_name: "3匿名用户",
            add_time: "2018-11-19T20:09:30.000Z",
            content: "我来评论一22下"
          }
        ],
        [
          {
            user_name: "5匿名用户",
            add_time: "2018-10-19T20:09:30.000Z",
            content: "-----我来5评论一下"
          },
          {
            user_name: "6匿名用户",
            add_time: "2018-09-19T20:09:30.000Z",
            content: "-----我来2评论一下"
          }
        ],
        [
          {
            user_name: "8匿名用户",
            add_time: "2018-07-19T20:09:30.000Z",
            content: "我来评论6一下--------"
          }
        ],
        [
          {
            user_name: "11匿名用户",
            add_time: "2018-07-19T20:09:30.000Z",
            content: "我来评论6一下--------"
          },
          {
            user_name: "12匿名用户",
            add_time: "2018-06-19T20:09:30.000Z",
            content: "我来评论8一下--------"
          }
        ],
        [
          {
            user_name: "14匿名用户",
            add_time: "2018-07-19T20:09:30.000Z",
            content: "我来评论6一下--------"
          },
          {
            user_name: "15匿名用户",
            add_time: "2018-06-19T20:09:30.000Z",
            content: "我来评论8一下--------"
          }
        ],
        [
          {
            user_name: "16匿名用户",
            add_time: "2018-07-19T20:09:30.000Z",
            content: "我来评论6一下--------"
          },
          {
            user_name: "17匿名用户",
            add_time: "2018-06-19T20:09:30.000Z",
            content: "我来评论8一下--------"
          }
        ],
        [
          {
            user_name: "19匿名用户",
            add_time: "2018-07-19T20:09:30.000Z",
            content: "我来评论6一下--------"
          }
        ],
        [
          {
            user_name: "22匿名用户",
            add_time: "2018-07-19T20:09:30.000Z",
            content: "我来评论6一下--------"
          }
        ],
        [
          {
            user_name: "19匿名用户",
            add_time: "2018-07-19T20:09:30.000Z",
            content: "我来评论6一下--------"
          }
        ],
        [
          {
            user_name: "19匿名用户",
            add_time: "2018-07-19T20:09:30.000Z",
            content: "我来评论6一下--------"
          }
        ],
        [
          {
            user_name: "19匿名用户",
            add_time: "2018-07-19T20:09:30.000Z",
            content: "我来评论6一下--------"
          }
        ]
      ]
    };
  },
  props: ["id"],
  methods: {
    addmsg(id) {
      this.message[id] = this.message[id].concat(this.message[id]);
      console.log(this.message[id]);  //没有数据呀 !!
    }
  }
};
</script>

<style lang="scss" scoped>
.cmt-container {
  h3 {
    font-size: 18px;
  }
  textarea {
    font-size: 14px;
    height: 85px;
    margin-bottom: 0;
  }
  .cmt-list {
    margin: 5px 0;
    .cmt-item {
      font-size: 13px;
      .cmt-title {
        text-indent: 0.5em;
        line-height: 30px;
        background: #ccc;
      }
      .cmt-body {
        padding: 5px 0;
        text-indent: 1.5em;
      }
    }
  }
}
</style>
