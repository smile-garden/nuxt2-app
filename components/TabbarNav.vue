<template>
  <van-tabbar route>
    <van-tabbar-item to="/" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item to="/search" icon="search">搜索</van-tabbar-item>
    <van-tabbar-item
      :to="{ path: '/friend', query: { id: 32 } }"
      icon="friends-o"
      >朋友</van-tabbar-item
    >
    <van-tabbar-item to="/setting" icon="setting-o">设置</van-tabbar-item>
  </van-tabbar>
</template>
