<template>
  <div class="m-life">
    <el-row :gutter="10" class="top">
      <el-col :span="14">
        <silder></silder>
      </el-col>
      <el-col :span="4" class="bottom">
        <nuxt-link class="m-link" to="/">
          <img src="http://p0.meituan.net/codeman/e473bb428f070321269b23370ff02ba956209.jpg" alt>
        </nuxt-link>
      </el-col>
      <el-col :span="6">
        <div class="user">
          <div class="avatar">
            <img
              src="//s0.meituan.net/bs/fe-web-meituan/2d05c2b/img/avatar.jpg"
              width="55"
              height="55"
            >
          </div>
          <div class="name">Hi，你好</div>
          <div class="login">
            <a href="/login">
            <el-button round>登录</el-button></a>
          </div>
          <div class="region"><a href="/register">
            <el-button round>注册</el-button></a>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="bottom">
      <el-col :span="7">
        <nuxt-link class="m-link" to="/">
          <img src="http://p1.meituan.net/codeman/8cce56c467a17e04f3094d1e455462a0132772.png" alt>
        </nuxt-link>
      </el-col>
      <el-col :span="7">
        <nuxt-link class="m-link" to="/">
          <img src="http://p1.meituan.net/codeman/16442c19da1f1c4544f794e29d99c92051716.jpg" alt>
        </nuxt-link>
      </el-col>
      <el-col :span="4">
        <nuxt-link class="m-link" to="/">
          <img src="http://p1.meituan.net/codeman/5b21cddb4bb1cbc3a9c3bce0f726c75940469.jpg">
        </nuxt-link>
      </el-col>
      <el-col :span="6">
        <div class="qr">
          <img
            src="//s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png"
            width="95"
            height="95"
          >
          <div class="app">美团APP手机端</div>
          <div class="tip">
            <span class="dot">1元起</span>吃喝玩乐
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script type="text/ecmascript-6">
import Silder from "~/components/index/slider.vue";
export default {
  data() {
    return {};
  },
  components: {
    Silder
  }
};
</script>

<style scoped lang="stylus">
.m-life {
  font-size: 0;

  .el-row {
    margin-top: 10px;

    .name {
      font-size: 16px;
    }

    &.top {
      height: 240px;
      text-align: center;

      .user {
        border: 1px solid #ccc;
        box-sizing: border-box;
        padding-top: 10px;
        height: 240px;

        .avatar, .name, .login, .region {
          margin-top: 10px;
        }

        .login, .region {
          button {
            width: 120px;
          }
        }
      }
    }

    &.bottom {
      height: 165px;

      .qr {
        text-align: center;
        border: 1px solid #ccc;
        box-sizing: border-box;
        padding-top: 10px;
        height: 165px;

        .app {
          font-size: 16px;
        }

        .tip {
          margin-top: 4px;
          font-size: 13px;

          .dot {
            color: rgb(240, 20, 20);
          }
        }
      }
    }

    .el-col {
      height: 100%;

      .m-slider {
        height: 100%;
      }
    }

    .m-link {
      display: block;
      width: 100%;
      height: 100%;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
