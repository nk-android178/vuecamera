<template>
  <div class="container">
    <el-header class="headers">
      <h1 style="font-weight:600; font-size:25px">SKYWORTH 新零售</h1>
    </el-header>
    <el-container>
      <el-aside class="left">
        <left-menu></left-menu>
      </el-aside>
      <el-main class="main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import LeftMenu from "../components/LeftMenu";
// import MainIndex from "../views/main/mainindex";
export default {
  components: {
    LeftMenu
    // MainIndex
  }
};
</script>

<style lang="scss" scoped>
.el-header {
  height: 60px;
  line-height: 60px;
  background-color: #285679;
  h1 {
    color: #fff;
    font-size: 22px;
  }
}
.el-container {
  display: flex;
  height: calc(100vh - 60px);
}
.container {
  width: 100%;
  height: 100%;
  background-color: #e8f2fc;
}
.left {
  flex: 1.5;
  overflow: hidden;
  background-color: #ffffff;
}
.main {
  flex: 8.5;
}
.el-main {
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
  padding-bottom: 0px;
}
.headers {
  background-color: #4c68ef;
}
</style>
