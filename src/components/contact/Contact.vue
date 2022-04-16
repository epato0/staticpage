<template>
  <div class="contact">
    <div class="top">
      <HightLight
        bg-text="Contact Us"
        :is-bg="true"
        text="联系我们"
        class="title"
      ></HightLight>
      <div class="left">
        <div>
          <img src="~@/assets/code.jpg" alt="" />
        </div>
        <div class="mes">
          <div>
            <p><i class="el-icon-house"></i>湖北富瑞尔科技有限公司</p>
          </div>
          <div>
            <p><i class="el-icon-mobile"></i>18672329706（李经理）</p>
          </div>
          <div>
            <p><i class="el-icon-message"></i>239474691@qq.com</p>
          </div>
          <div>
            <p>
              <i class="el-icon-location-information"></i
              >武汉市洪山区融创智谷A11-301
            </p>
          </div>
        </div>
      </div>
      <div id="map" style="width: 1200px; height: 389px"></div>
      <!-- <div class="tag">
        <span>本公司已入驻中国政府采购网<i class="el-icon-s-flag"></i></span>
      </div> -->
    </div>
  </div>
</template>

<script>
import HightLight from "@/components/common/hightLight/HightLight";
export default {
  name: "Contact",
  components: {
    HightLight,
  },
  mounted() {
    let map = new BMap.Map("map");
    let point = new BMap.Point(114.325755, 30.460946);
    map.centerAndZoom(point, 15);
    map.addControl(new BMap.NavigationControl()); //添加控件
    map.addControl(new BMap.ScaleControl());
    map.addControl(new BMap.OverviewMapControl());
    map.addControl(new BMap.MapTypeControl());
    map.enableScrollWheelZoom(true); //开启滚动
    var marker = new BMap.Marker(point); // 创建标注
    map.addOverlay(marker);
  },
};
</script>
<style scoped>
.left {
  display: flex;
  height: 250px;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #cccccc;
  padding-left: 65px;
  margin-bottom: 50px;
}
.left img {
  height: 200px;
  width: 200px;
  border-right: 1px solid #cccccc;
}
.contact {
  display: flex;
  justify-content: center;
}
.top {
  justify-content: center;
  width: 1200px;
}
.mes {
  margin-left: 10px;
  font-size: 18px;
  color: #666666;
}
#map {
  margin-bottom: 25px;
}
.title {
  margin-right: 13px;
}
.tag {
  text-align: center;
  margin-bottom: 25px;
  font-size: 28px;
  font-weight: bolder;
  color: red;
}
</style>
