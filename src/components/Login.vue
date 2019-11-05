<template>
  <div class="login-div">
    <div class="conent-div">
      <div class="username-div">
        <input type="text" placeholder="用户名" v-model="username" />
      </div>
      <div class="password-div">
        <input type="password" placeholder="密码" v-model="password" />
      </div>
      <div class="btn-div" @click="loginFn()">
        <button>登录</button>
      </div>
    </div>
    <div >
        <!-- <alert v-model="show" title="安全提醒" @on-hide="onHide">{{alerTtext}}</alert> -->
      </div>
  </div>
</template>

<script>
// import { Loading, Alert } from "vux";
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  components:{
    // Alert,
  },
  methods: {
    loginFn() {
        this.$router.replace("/homepage");
    }
  }
};
</script>
<style scoped>
.login-div {
  width: 100%;
  height: 100%;
  background: url("../assets/image/login/bg.png") no-repeat;
  background-size: 100% 100%;
  padding-top: 0.01rem;
}
.conent-div {
  width: 40%;
  margin: 0 auto;
  margin-top: 9rem;
}
.username-div {
  width: 100%;
  height: 1.2rem;
}

.password-div {
  width: 100%;
  height: 1.2rem;
}
input {
  width: 90%;
  height: 1.2rem;
  line-height: 1.2rem;
  padding-left: 0.5rem;
  outline: none;
  border: none;
  background: none;
}
.username-div input {
  background: url("../assets/image/login/yellow.png") no-repeat;
  background-size: 100% 100%;
  color: #f7e79a;
}
.password-div input {
  background: url("../assets/image/login/blue.png") no-repeat;
  background-size: 100% 100%;
  color: #01c5ff;
}
.btn-div {
  margin-left: 15%;
  width: 60%;
  height: 0.6rem;
}
.btn-div button {
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  background: url("../assets/image/login/login.png") no-repeat;
  background-size: 100% 100%;
  border: none;
  color: #00ccff;
  outline: none;
  font-weight: 600;
}
</style>
