<template>
  <div class="setting">
    <van-button round block type="primary" @click="handleLogout"
      >退出登录</van-button
    >
    <div v-for="item in list" :key="item.id" class="item">
      <van-image :src="item.imageUrl" />
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  components: {},
  // middleware: 'auth',
  middleware() {
    // console.log('middleware auth page')
  },
  async asyncData({ $axios }) {
    const res = await $axios.$get(
      'http://testapi.xuexiluxian.cn/api/slider/getSliders',
    );
    return { list: res.list };
  },

  data() {
    return {};
  },

  computed: {},

  created() {},

  methods: {
    ...mapActions(['logout']),
    handleLogout() {
      this.logout().then(() => {
        this.$router.push({ name: 'login' });
      });
    },
  },
};
</script>
