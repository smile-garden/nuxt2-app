<template>
  <div>
    先登录
    <button @click="login">登录</button>
  </div>
</template>

<script>
export default {
  layout: 'noNav',
  methods: {
    login() {
      this.$store.commit('setToken', '登录了');
      this.$router.replace('/');
    },
  },
};
</script>

<style lang="less" scoped></style>
