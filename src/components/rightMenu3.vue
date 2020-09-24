#安防
<template>
  <div class="container">
    <el-menu
      :default-active="activeindex"
      background-color="#DDE8F2"
      text-color="#070D2D"
      active-text-color="#4C68EF"
      mode="horizontal"
      :router="true"
    >
      <template v-for="item in menuData">
        <el-menu-item :key="item.id" :index="item.route">
          <!-- else -->
          {{ item.name }}
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>
<script>
import MenuData from "../config/menu3";
import _ from "lodash";
export default {
  data() {
    return {
      menuData: [],
      activeindex: "/frp/security/playback"
    };
  },
  components: {},
  methods: {
    init() {
      let self = this;
      this.$router.push("/frp/security/playback");
      self.filterPermission();
    },
    // 过滤权限
    filterPermission() {
      let self = this;
      let menuData = [];
      function loopTree(treeArr, treeParent) {
        console.log(treeArr);
        console.log(treeParent);
        if (!treeArr || treeArr.length === 0) return;
        _.forEach(treeArr, item => {
          let menu = {
            id: item.id,
            name: item.name
          };
          // 是否有图标
          if (item.icon) {
            menu.icon = item.icon;
          }
          // 是否有路由
          if (item.route) {
            menu.route = item.route;
          }
          // 是否有权限值
          if (item.permissionCode) {
            menu.permissionCode = item.permissionCode;
          }
          // let isPermission = checkPermission(menu.permissionCode);
          // 是否有权限
          // if (isPermission) {
          treeParent.push(menu);
          if (item.children && item.children.length > 0) {
            menu.children = [];
            loopTree(item.children, menu.children);
          }
          // }
        });
      }
      loopTree(MenuData, menuData);
      self.menuData = menuData;
    }
  },
  mounted() {
    this.init();
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
}
.el-menu-item.is-active {
  background-color: #ffffff !important;
  border-bottom: none;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}
.el-menu-item {
  height: 90%;
  padding-top: 0px;
  padding-right: 80px;
  padding-bottom: 0px;
  padding-left: 80px;
  border-bottom: none;
  font-size: 14px;
  // border-radius: 20px;
}
//鼠标移动样式
.el-menu-item:hover {
  background-color: #dde8f2 !important;
}
.el-menu-item.is-active:hover {
  background-color: rgb(255, 255, 255) !important;
}
</style>
