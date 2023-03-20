<template>
  <div class="friend" @click="test">
    <img class="friend-img" src="~/assets/flower.jpg" alt="flower" />
    <img class="friend-img" src="~/assets/flower.jpg" alt="flower" />
    <img class="friend-img" src="~/assets/flower.jpg" alt="flower" />
    <div class="friend-bg"></div>
  </div>
</template>
<script>
export default {
  components: {},

  data() {
    return {};
  },

  computed: {},

  created() {
    // console.log(this.$route.query, process)
    this.$store.commit('setToken', 'sdfasdfadsrer');
    this.$store.commit('setToken2', { a: '2333' });
  },

  methods: {
    test() {
      // console.log(this.$store.getters.getToken2, this.$store.state)
    },
  },
};
</script>

<style lang="less" scoped>
.friend {
  &-img {
    width: 100%;
    height: auto;
  }

  &-bg {
    width: 100%;
    height: 300px;
    background: url(~/assets/flower.jpg) center / cover no-repeat;
  }
}
</style>
