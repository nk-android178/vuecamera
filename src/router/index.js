import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    // name: "Home",
    // component: Home
    redirect: "/frp"
  },
  {
    path: "/frp",
    component: Home,
    children: [
      {
        path: "",
        name: "faceIndex",
        component: () => import("../views/main/mainindex.vue")
      },
      {
        path: "comparison",
        name: "faceComparison",
        component: () => import("../views/security/comparison.vue")
      },
      {
        path: "playback",
        name: "facePlayback",
        component: () => import("../views/security/playback.vue")
      },
      {
        path: "customer",
        name: "faceCustomer",
        component: () => import("../views/main/customer.vue"),
        children: [
          {
            path: "trajectory",
            name: "faceTrajectory",
            component: () => import("../views/customer/trajectory.vue")
          },
          {
            path: "statistics",
            name: "faceStatistics",
            component: () => import("../views/customer/statistics.vue")
          },
          {
            path: "heat",
            name: "faceHeat",
            component: () => import("../views/customer/heat.vue")
          }
        ]
      },
      {
        path: "security",
        name: "facesecurity",
        component: () => import("../views/main/security.vue"),
        children: [
          {
            path: "playback",
            name: "facePlayback",
            component: () => import("../views/security/playback.vue")
          },
          {
            path: "comparison",
            name: "faceComparison",
            component: () => import("../views/security/comparison.vue")
          }
        ]
      }
    ]
  }
];

const router = new VueRouter({
  routes
});
const routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error);
};
export default router;
