// 菜单树
const menu = [
  {
    id: 100,
    name: "主页",
    icon: "el-icon-s-home",
    route: "/frp"
  },
  {
    id: 300,
    name: "客流分析",
    icon: "el-icon-s-data",
    route: "/frp/customer",
    permissionCode: 200000
    // children: [
    //   {
    //     id: 302,
    //     name: "客流轨迹",
    //     route: "/frp/trajectory",
    //     icon: "el-icon-location-information",
    //     permissionCode: 201010
    //   },
    //   {
    //     id: 303,
    //     name: "热力图",
    //     route: "/frp/heat",
    //     icon: "el-icon-location-information",
    //     permissionCode: 201030
    //   },
    //   {
    //     id: 304,
    //     name: "客流统计",
    //     route: "/frp/statistics",
    //     icon: "el-icon-location-information",
    //     permissionCode: 201040
    //   }
    // ]
  },
  {
    id: 400,
    name: "安防布控",
    icon: "el-icon-video-camera",
    permissionCode: 300000,
    route: "/frp/security"
    // children: [
    //   {
    //     id: 401,
    //     name: "视频回放",
    //     route: "/frp/comparison",
    //     icon: "el-icon-position",
    //     permissionCode: 301000
    //   },
    //   {
    //     id: 402,
    //     name: "人脸比对",
    //     route: "/frp/playback",
    //     icon: "el-icon-position",
    //     permissionCode: 303000
    //   }
    // ]
  }
];

export default menu;
