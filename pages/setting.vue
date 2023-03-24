<template>
  <div class="setting">
    <div v-for="item in list" :key="item.id" class="item">
      <van-image :src="item.imageUrl" />
    </div>
  </div>
</template>
<script>
export default {
  components: {},

  async asyncData({ $axios }) {
    const res = await $axios.$get(
      'http://testapi.xuexiluxian.cn/api/slider/getSliders',
    );
    return { list: res.data.list };
  },

  data() {
    return {};
  },

  computed: {},

  created() {},

  methods: {},
};
</script>
