<template>
  <div class="login">
    <!-- 背景图片 -->
    <div class="login-img">
      <img :src="login_background" />
      <div class="login-img-mask"></div>
    </div>
      <!-- 登录表 -->
    <div class="login-card">
      <div class="login-bg"></div>
      <login-form class="login-form"></login-form>
    </div>
  </div>
  <img :src="login_background" />
</template>

<script lang="ts">
import { _hello } from "../api/user/index";
import LoginForm from "../components/login/LoginForm.vue";
import login_background from "../assets/images/login/login_background.png";

export default {
  components: { LoginForm },
  setup() {},
  data() {
    return {
      login_background,
    };
  },
};
</script>

<style lang="scss">
.login {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-img {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    img {
      width: 100%;
      height: 100%;
    }
    .login-img-mask {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba($color: #000000, $alpha: 0.05);
    }
  }
  .login-card {
    width: 58%;
    height: 60%;
    position: absolute;
    border-radius: 10px;
    display: flex;
    .login-bg {
      width: 45%;
      height: 100%;
      background-color: rgba($color: #fff, $alpha: 0.4);
      border-radius: 10px 0px 0px 10px;
    }
    .login-form {
      width: 50%;
      min-width: 30rem;
      background-color: #fff;
      padding: 70px 10px 0 60px;
      border-radius: 0 10px 10px 0;
    }
  }
}
</style>
