<template>
  <div class="product">
    <div class="nav">
      <navbar :current-type="currentType" @itemClick="itemClick" />
    </div>
    <div class="list">
      <hight-light
        text="平台介绍"
        bg-text="Platform Introduction"
        :is-bg="true"
        id="title"
      />
      <div class="productList">
        <ProductList :projects="currentList" img-height="260px"></ProductList>
      </div>
    </div>
  </div>
</template>

<script>
import HightLight from "@/components/common/hightLight/HightLight";
import Navbar from "@/views/product/navbar/Navbar";
import ProductList from "@/components/common/productList/ProductList";
import { eduProducts, lanProducts, indProducts } from "@/assets/products";

export default {
  name: "Product",
  components: { HightLight, Navbar, ProductList },
  data() {
    return {
      eduProducts,
      lanProducts,
      indProducts,
      currentType: "",
      currentList: null,
    };
  },
  mounted() {
    this.currentType = "平台概述";
    this.currentList = eduProducts;
  },
  methods: {
    itemClick(item) {
      switch (item) {
        case "平台概述":
          this.currentList = eduProducts;
          this.currentType = "平台概述";

          break;
        case "体系架构":
          this.currentList = lanProducts;
          this.currentType = "体系架构";
          break;
        case "系统组成":
          this.currentList = indProducts;
          this.currentType = "系统组成";
      }
    },
  },
};
</script>

<style scoped>
.product {
  display: flex;
  justify-content: center;
}

.list {
  width: 1200px;
  text-align: center;
}

.list p {
  font-size: 30px;
}

.nav {
  margin-top: 135px;
}
.productList {
  padding-left: 30px;
}
#title {
  padding-right: 210px;
}
</style>
