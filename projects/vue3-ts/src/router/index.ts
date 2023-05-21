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
  ],
});

export default router;
