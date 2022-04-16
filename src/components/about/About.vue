<template>
  <div>
    <hight-light :is-bg="true" text="关于我们" bg-text="About Us" />
    <DetailS
      v-for="item in introduces"
      :key="item.title"
      :is-left="item.isLeft"
      :text1="item.text1"
      :text2="item.text2"
      :title="item.title"
      :img="item.img"
      :is-white="item.isWhite"
    ></DetailS>
  </div>
</template>

<script>
import HightLight from "@/components/common/hightLight/HightLight";
import DetailS from "@/views/product/details";
import { introduces } from "@/assets/about";

export default {
  name: "About",
  components: {
    HightLight,
    DetailS,
  },
  data() {
    return {
      introduces,
    };
  },
};
</script>

<style scoped>
</style>
