<template>
  <div @click="test">friend page</div>
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

<style lang="less" scoped></style>
