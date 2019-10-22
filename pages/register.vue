<template>
  <div class="m-register">
    <div class="top">
      <div class="content">
        <div class="left">
          <span class="logo"></span>
        </div>
        <div class="right">
          <a href="/login">已有美团帐号？</a>
          <el-button type="primary" size="mini">登录</el-button>
        </div>
      </div>
    </div>
    <div class="center">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="register-form"
      >
        <div class="error-info">{{error}}</div>
        <el-form-item label="昵称" prop="name">
          <el-col :span="8">
            <el-input v-model="ruleForm.name"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="用户邮箱" prop="email">
          <el-col :span="8">
            <el-input v-model="ruleForm.email"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item>
          <el-col :span="5">
            <el-button type="primary" size="mini" round @click="sendMsg">免费获取动态码</el-button>
          </el-col>
          <el-col :span="6">
            <span class="code-msg">{{statusMsg}}</span>
          </el-col>
        </el-form-item>
        <el-form-item label="邮箱动态码" prop="code">
          <el-col :span="8">
            <el-input v-model="ruleForm.code"></el-input>
          </el-col>
        </el-form-item>

        <el-form-item label="创建密码" prop="pwd">
          <el-col :span="8">
            <el-input v-model="ruleForm.pwd" type="password"></el-input>
          </el-col>
        </el-form-item>

        <el-form-item label="创建密码" prop="cpwd">
          <el-col :span="8">
            <el-input v-model="ruleForm.cpwd" type="password"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">同意以下协议并注册</el-button>
        </el-form-item>
        <el-form-item>
          <a href="#">《美团网用户协议》</a>
        </el-form-item>
      </el-form>
    </div>
    <div class="footer">©meituan.com 京ICP证070791号 京公网安备11010502025545号</div>
  </div>
</template>

<script type="text/ecmascript-6">
import axios from "axios";
import cryptoJs from "crypto-js";
export default {
  layout: "blank",
  data() {
    return {
      statusMsg: "",
      error: "",
      ruleForm: {
        email: "",
        code: "",
        pwd: "",
        cpwd: "",
        name: ""
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
        name: [{ required: true, message: "请输入昵称", trigger: "blur" }],
        code: [{ required: true, message: "请输入验证码", trigger: "blur" }],
        pwd: [
          {
            required: true,
            validator: this.validatePass,
            message: "请输入有效的密码",
            trigger: "blur"
          }
        ],
        cpwd: [
          {
            required: true,
            validator: this.validatePass2,
            message: "请输入有效的密码",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    validatePass(rule, value, callback) {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.pwd !== "") {
          this.$refs.ruleForm.validateField("cpwd");
        }
        callback();
      }
    },
    validatePass2(rule, value, callback) {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pwd) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    },
    submitForm(formName) {
      let self = this;

      this.$refs[formName].validate(valid => {
        if (valid) {
          axios
            .post("/users/signup", {
              username: window.encodeURIComponent(self.ruleForm.name),
              password: cryptoJs.MD5(self.ruleForm.pwd).toString(),
              email: self.ruleForm.email,
              code: self.ruleForm.code
            })
            .then(({ status, data }) => {
              if (status === 200) {
                if (data && data.code === 0) {
                  location.href = "/login";
                } else {
                  self.error = data.msg;
                }
              } else {
                self.error = `服务器出错：错误码${status}`;
              }
              setTimeout(function() {
                self.error = "";
              }, 1500);
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    sendMsg() {
      const self = this;
      let namePass;
      let emailPass;

      if (self.timerid) {
        return false;
      }
      this.$refs["ruleForm"].validateField("name", valid => {
        namePass = valid;
      });
      self.statusMsg = "";

      if (namePass) {
        return false;
      }
      this.$refs["ruleForm"].validateField("email", valid => {
        emailPass = valid;
      });
      if (!namePass && !emailPass) {
        axios
          .post("/users/verify", {
            username: encodeURIComponent(self.ruleForm.name),
            email: self.ruleForm.email
          })
          .then(({ status, data }) => {
            console.log(status);
            console.log(data);
            if (status === 200 && data && data.code === 0) {
              let count = 60;
              self.statusMsg = `验证码已发送，剩余${count--}秒`;
              self.timerid = setInterval(function() {
                self.statusMsg = `验证码已发送，剩余${count--}秒`;
                if (count === 0) {
                  clearInterval(self.timerid);
                  self.timerid = false;
                  self.statusMsg = '';
                }
              }, 1000);
            } else {
              self.statusMsg = data.msg;
            }
          });
      }
    }
  },
  components: {}
};
</script>

<style scoped lang="stylus">
.m-register {
  .top {
    border-bottom: 2px solid #2bb8aa;

    .content {
      width: 1190px;
      margin: 0 auto;
      height: 60px;

      .left {
        float: left;
        height: 100%;
        box-sizing: border-box;
        padding: 12px 0;

        .logo {
          display: block;
          width: 54px;
          height: 36px;
          background-position: -669px -748px;
          background-image: url('https://s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/sp-normal.2ee5c09.png');
        }
      }

      .right {
        float: right;
        height: 100%;
        line-height: 60px;
        height: 60px;
      }
    }
  }

  .center {
    width: 1190px;
    margin: 0 auto;

    .register-form {
      margin: 40px;

      .code-msg {
        color: #999;
        font-size: 12px;
      }
    }
  }

  .footer {
    padding: 15px;
    border-top: 1px solid #eee;
    text-align: center;
    color: #999;
  }
}
</style>
