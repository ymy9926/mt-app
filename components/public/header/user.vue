<template>
  <div class="m-user">
    <template v-if="user">
      欢迎您，
      <span class="username">{{user}}</span>
      [<nuxt-link to="/exit">退出</nuxt-link>]
    </template>
    <template v-else>
      <nuxt-link class="login" to="login">立即登录</nuxt-link>
      <nuxt-link class="register" to="/register">注册</nuxt-link>
    </template>
  </div>
</template>

<script type="text/ecmascript-6">
import axios from "axios";

export default {
  data() {
    return {
      user: ""
    };
  },
  mounted() {
    let self = this;
    axios.get("/users/getUser").then(({ status, data }) => {
      if (status === 200) {
        self.user = data.user;
      }
    });
  },
  components: {}
};
</script>

<style scoped lang="stylus">
.m-user {
  .username {
    cursor: pointer;
    font-size: 12px;
    line-height: 40px;
    color: #999;
    margin: 0 5px;
  }

  .login, .register {
    font-size: 12px;
    line-height: 40px;
    color: #999;
    margin: 0 5px;

    &.login {
      color: #31BBAC;
      margin: 0 5px 0 20px;
    }

    &:hover {
      color: #31BBAC;
    }
  }
}
</style>
