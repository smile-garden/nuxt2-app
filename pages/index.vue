<template>
  <div class="container">
    <div>
      <h1 class="title">Welcome to the Vant + Nuxt.js template</h1>
      <div class="subtitle">welcome welcome</div>
      <div v-for="item in fetchList" :key="item.id" class="item">
        <van-image :src="item.imageUrl" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'IndexPage',
  data() {
    return {
      title: 'Home page',
      active: 0,
      fetchList: [],
    };
  },

  async fetch() {
    const res = await axios.get(
      'http://testapi.xuexiluxian.cn/api/slider/getSliders',
    );
    this.fetchList = res.data.data.list;
  },

  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'This is page for home',
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'one,two,three',
        },
      ],
    };
  },
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  display: block;
  font-weight: 300;

  /* px-to-viewport-ignore-next */
  font-size: 32px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 24px; /* px-to-viewport-ignore */
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
</style>
