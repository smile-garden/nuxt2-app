<template>
  <div class="help">
    <div v-if="$nuxt.isOffline">You are offline</div>
    <div v-else>Online</div>
    <button @click="refresh">Refresh</button>
  </div>
</template>
<script>
export default {
  layout: 'noNav',
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => {
        this.$nuxt.$loading.finish();
      }, 1000);
    });
  },
  methods: {
    refresh() {
      this.$nuxt.refresh();
    },
  },
};
</script>

<style lang="less" scoped>
.help {
  padding-top: 200px;
  text-align: center;
  font-size: 24px;
  color: #666;
}
</style>
