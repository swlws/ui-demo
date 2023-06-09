import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: () => import("@/pages/home/index.vue"),
    },
    {
      path: "/request",
      component: () => import("@/pages/request/index.vue"),
    },
    {
      path: "/timeline",
      component: () => import("@/pages/timeline/index.vue"),
    },
    {
      path: "/slot",
      component: () => import("@/pages/slot/index.vue"),
    },
  ],
});

export default router;
