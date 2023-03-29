<template>
  <van-form class="login" @submit="login">
    <van-field
      v-model="username"
      name="用户名"
      label="用户名"
      placeholder="用户名"
      :rules="[{ required: true, message: '请填写用户名' }]"
    />
    <van-field
      v-model="password"
      type="password"
      name="密码"
      label="密码"
      placeholder="密码"
      :rules="[{ required: true, message: '请填写密码' }]"
    />
    <div style="margin: 16px">
      <van-button round block type="info" native-type="submit">提交</van-button>
    </div>
  </van-form>
</template>

<script>
// import qs from 'qs';
import { Toast } from 'vant';
import { mapMutations } from 'vuex';

export default {
  layout: 'noNav',
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    ...mapMutations(['setToken']),
    login() {
      const { username, password } = this;
      if (!username || !password) {
        Toast('请输入用户名或密码');
        return;
      }

      if (username !== 'admin' && password !== '123456') {
        Toast('用户名或密码有误');
        return;
      }

      // this.$store.commit('setToken', 'login token');
      this.setToken('new login token');
      const { redirect } = this.$route.query;
      this.$router.replace(redirect || '/');

      /* const data = qs.stringify({
        username: 'test',
        password: '123456',
      }); */

      /* this.$axios({
        url: '/api/u/loginByJson',
        method: 'post',
        data,
      }) */
    },
  },
};
</script>

<style lang="less" scoped>
.login {
  margin: 200px 16px 0;
}
</style>
