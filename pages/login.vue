<template>
  <div class="m-login">
    <div class="header">
      <div class="logo-warpper">
        <a href="/">
          <span class="logo"></span>
        </a>
      </div>
    </div>
    <div class="body">
      <el-col :span="13">
        <img
          src="//s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg"
          width="100%"
          alt
        >
      </el-col>
      <el-col :span="9">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0" class="login-form">
          <div class="top">
            <div class="title">账号登录</div>
            <div class="phone">手机动态码登录</div>
          </div>
          <el-form-item>
            <el-input placeholder="用户名" v-model="ruleForm.user"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input placeholder="请输入密码" type="password" v-model="ruleForm.pwd"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script type="text/ecmascript-6">
import axios from "axios";
import cryptoJs from "crypto-js";
export default {
  layout: "blank",
  data() {
    return {
      ruleForm: {
        username: "",
        pwd: ""
      },
      rules: {
        email: [
          {
            required: true,
            type: "email",
            message: "请输入有效的邮箱地址",
            trigger: "blur"
          }
        ],

        pwd: [
          {
            required: true,
            message: "请输入有效的密码",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      let slef = this;
      this.$refs[formName].validate(valid => {
        if (valid) {
          //alert("submit!");
          axios
            .post("/users/signin", {
              username: window.encodeURIComponent(slef.ruleForm.user),
              password: cryptoJs.MD5(slef.ruleForm.pwd).toString()
            })
            .then(({ status, data }) => {
              if (status === 200 && data.code === 0) {
                location.href = "/";
              } else {
                alert(data.msg);
              }
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style scoped lang="stylus">
.m-login {
  box-sizing: border-box;

  .header {
    box-sizing: border-box;
    width: 980px;
    margin: 0 auto;
    padding: 40px 0 30px 0;

    .logo {
      margin: 0;
      width: 82px;
      height: 54px;
      background-position: -188px -808px;
      background-image: url('//s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/sp-normal.2ee5c09.png');
      background-size: initial;
      display: block;
    }
  }

  .body {
    box-sizing: border-box;
    width: 980px;
    margin: 0 auto;
    overflow: hidden;

    .login-form {
      padding-top: 40px;
      padding-left: 100px;

      .top {
        overflow: hidden;
        margin-bottom: 15px;

        .title, .phone {
          font-size: 12px;
          line-height: 12px;
          height: 12px;
          color: #999;
        }

        .title {
          float: left;
          font-size: 13px;
          line-height: 13px;
        }

        .phone {
          float: right;
        }
      }

      button {
        width: 100%;
      }
    }
  }
}
</style>
