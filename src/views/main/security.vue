#安防
<template>
  <el-card
    class="container"
    :body-style="{ padding: '0px', height: '100%', width: '100%' }"
  >
    <el-card class="top" :body-style="{ padding: '0px' }">
      <right-menu3></right-menu3>
    </el-card>
    <div class="bottom">
      <router-view></router-view>
    </div>
  </el-card>
</template>
<script>
import RightMenu3 from "../../components/rightMenu3";
export default {
  data() {
    return {
      menuData: []
    };
  },
  components: {
    RightMenu3
  },
  methods: {
    init() {}
  },
  mounted() {
    this.init();
  }
};
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  width: 100%;
  display: flex;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}
.top {
  height: 55px;
  width: 100%;
  background-color: #dde8f2;
}
.bottom {
  flex: 1;
  width: 100%;
}
.el-card__body {
  padding: 0px;
}
</style>
