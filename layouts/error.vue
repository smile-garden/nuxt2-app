<template>
  <div class="error-wrap">
    <van-icon class="error-icon" name="warning-o" />
    <div class="error-msg">{{ error.message }}</div>
    <nuxt-link class="error-back" to="/">Back to the home page</nuxt-link>
  </div>
</template>
<script>
export default {
  layout: 'noNav',
  props: {
    error: {
      type: Object,
      default: () => null,
    },
  },
};
</script>

<style lang="less" scoped>
.error {
  &-wrap {
    margin-top: 200px;
    padding: 0 30px;
    text-align: center;
  }

  &-icon {
    font-size: 64px;
    color: #ccc;
  }

  &-msg {
    margin: 30px 0 20px;
    font-weight: 300;
    font-size: 32px;
    color: #999;
  }

  &-back {
    font-size: 20px;
    color: #aaa;
  }
}
</style>
