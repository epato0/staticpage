<template>
  <div class="top">
    <div class="index">
      <!-- 左 -->
      <div class="lefttitle">
        <div class="logo">
          <img src="~@/assets/logo.png" alt="" />
        </div>
        <div class="title">
          <span class="text1">流行病学调查分析管理一体化平台</span>
          <span class="text2">
            Integrated Management Platform for Epidemiological Investigation and
            Analysis
          </span>
        </div>
      </div>
      <!-- 右 -->
      <div class="nav-box">
        <span
          v-for="item in nav"
          :key="item.name"
          :class="{ active: isChecked(item) }"
          @click="navClick(item.path)"
          >{{ item.name }}</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      nav: [
        {
          name: "首页",
          path: "/home",
        },
        {
          name: "关于我们",
          path: "/about",
        },
        {
          name: "平台介绍",
          path: "/product",
        },
        {
          name: "案例中心",
          path: "/project",
        },
        {
          name: "联系我们",
          path: "/contact",
        },
      ],
    };
  },
  methods: {
    isChecked(item) {
      return !item.path.indexOf(this.$route.path);
    },
    navClick(path) {
      this.$router.push(path);
    },
  },
};
</script>

<style scoped>
.lefttitle {
  display: flex;
  align-items: center;
  justify-content: initial;
}
.title {
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: flex-start;
}
.text1 {
  font-size: 35px;
  margin: 0;
}
.text2 {
  font-size: 1px;
  display: flex;
  /* align-items: flex-start; */
  font-family: Arial Black, Gadget, sans-serif;
}
.top {
  display: flex;
  justify-content: center;
  background-color: #fafafa;
  width: 100%;
}
.index {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 112px;
}
.logo {
  display: flex;
  align-items: center;
  width: 100px;
}
.logo img {
  height: 100px;
  width: 100px;
}
.nav-box {
  width: 500px;
  display: flex;
  font-size: 20px;
  justify-content: space-evenly;
}
.nav-box span {
  /*不同浏览器的渐变效果*/
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
}
.nav-box :hover {
  color: #3a8ee6;
  cursor: pointer;
}
.active {
  color: #3a8ee6;
}
</style>
