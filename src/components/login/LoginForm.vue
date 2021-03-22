<template>
  <div class="login-from">
    <!-- 登录表单头部 -->
    <header class="login-title">
      <h2>登录</h2>
    </header>
    <!-- 登录表单内容 -->
    <article>
      <el-form
        :model="LoginFormData"
        :rules="rules"
        class="login-form-body"
        ref="LoginFormData"
        label-width="100px"
      >
        <el-form-item
          v-for="item in LoginForm"
          :key="item.title"
          :label="item.title"
          :prop="item.name"
          :class="item.name"
        >
          <el-input
            v-model="LoginFormData[item.name]"
            :maxlength="item.meta.max"
            :type="item.meta.type ? item.meta.type : ''"
          ></el-input>
        </el-form-item>
      </el-form>
      <div class="login-button">
        <!-- <el-button round type="warning">找回</el-button> -->
        <el-button round type="primary" @click='login'>登录</el-button>
      </div>
    </article>
    <!-- 登录表单底部
    <footer>
      <h3>其他社交方式登录</h3>
      <div class="login-other">
        <img class="login-icon" v-for="img in login_icons" :key="img" :src="img" />
      </div>
    </footer> -->
  </div>
</template>

<script>
import { _login } from "/src/api/user/index";
import weixin from "../../assets/images/login/weixin.png";
import qq from "../../assets/images/login/qq.png";
import weibo from "../../assets/images/login/weibo.png";

export default {
  name: "LoginForm",
  data() {
    return {
      LoginFormData: {
        username: "",
        password: "",
      },
      LoginForm: [
        {
          title: "手机号",
          name: "username",
          value: "",
          meta: {
            max: 11,
          },
        },
        {
          title: "登录密码",
          name: "password",
          value: "",
          meta: {
            max: 30,
            type: "password",
          },
        },
      ],
      rules: {
        username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
      ready: false,
      login_icons: [weixin, qq, weibo],
    };
  },

  methods: {
    login() {
      _login(this.LoginFormData)
        .then(res => {
          if (0 !== res.data.code) {
            alert(res.data.message);  //登录失败
          } else {
            alert(res.data.data.access_token);  //登录成功, alert Token
          }
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
};
</script>

<style lang="scss" scoped>
.login-form {
  .login-title {
    h2 {
      font-size: 34px;
    }
    h4 {
      font-size: 14px;
      color: rgba($color: gray, $alpha: 0.7);
      letter-spacing: 1px;
      padding: 8px 0;
      .login-regist {
        color: #426ab3;
      }
      .login-regist:hover {
        color: #6a6da9;
        cursor: pointer;
      }
    }
  }
  article {
    .login-form-body {
      .username,
      .password {
        width: 80%;
        padding: 15px;
      }
      .password {
        padding-top: 5px;
      }
    }
    .login-ready {
      span {
        color: #426ab3;
      }
      span:hover {
        color: #6a6da9;
        cursor: pointer;
      }
    }
    .login-button {
      text-align: right;
      padding: 20px 15% 0 0;
      button {
        width: 90%;
      }
    }
  }
  footer {
    position: absolute;
    bottom: 10%;
    width: 60%;
    h3 {
      color: rgba($color: gray, $alpha: 0.8);
      font-size: 14px;
      letter-spacing: 1px;
    }
    .login-other {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 80%;
      .login-icon {
        max-width: 3rem;
        padding: 0 1rem;
      }
    }
  }
}
</style>
