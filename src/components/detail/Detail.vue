<template>
  <div>
    <div class="detail">
      <div class="list">
        <HightLight :text="name" :bg-text="name" :is-bg="true" />

        <!-- <p class="text">{{ text }}</p>
      <img :src="image" alt="" /> -->
        <div class="content">
          <Introduce
            v-for="item in list"
            :key="item.id"
            :is-left="item.isLeft"
            :text1="item.text1"
            :text2="item.text2"
            :img="item.image"
            :is-white="item.isWhite"
          ></Introduce>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { prodDetails } from "@/assets/products";
import { projects } from "@/assets/project.js";
import HightLight from "@/components/common/hightLight/HightLight";
import Introduce from "../../views/about/Introduce.vue";
export default {
  name: "Detail",
  components: { HightLight, Introduce },
  data() {
    return {
      id: 0,
      name: "",
      prodDetails,
      projects,
      image: "",
      text: "",
      pname: "",
      list: [],
    };
  },
  created() {
    this.id = this.$route.query.id;
    this.name = this.$route.query.name;
    if (this.id < 100) {
      //  判断是产品还是案例
      for (let i of prodDetails) {
        if (i.pname === this.name) {
          // this.image = i.image;
          // this.text = i.text;
          this.list.push(i);
        }
      }
    } else {
      for (let i of projects) {
        if (i.id === this.id) {
          this.image = i.image;
          this.text = i.text;
        }
      }
    }
  },
};
</script>

<style scoped>
.detail {
  /* border: 10px solid #040404; */
  display: flex;
  justify-content: center;
}
.list {
  width: 1100px;
  text-align: center;
}
.list img {
  margin-top: 30px;
  padding: 30px;
  border: 10px solid #040404;
  width: 75%;
}
.content {
  border: 20px solid #d6e1f7;
  margin: 20px;
}
.text {
  margin-right: 50px;
  text-align: justify;
}
</style>
