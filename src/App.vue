<template>
  <div id="app">
    <!-- 标题 -->
    <index />
    <swiper />
    <keep-alive include="Home">
      <router-view />
    </keep-alive>
    <bottom />
  </div>
</template>

<script>
import index from "@/views/home/index";
import Swiper from "@/views/home/Swiper";
import Bottom from "@/components/common/bottom/Bottom";
export default {
  name: "App",
  components: {
    index,
    Swiper,
    Bottom,
  },
};
</script>

<style>
html,
body {
  position: relative;
  margin: 0px;
  padding: 0;
  width: 100%;
  min-width: 1200px;
}
</style>
