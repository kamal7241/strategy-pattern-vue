import { createRouter, createWebHistory } from "vue-router";
import BasicDemo from "../views/BasicDemo.vue";
import NormalDemo from "../views/NormalDemo.vue";
import StrategyDemo from "../views/StrategyDemo.vue";

const routes = [
  {
    path: "/",
    name: "BasicDemo",
    component: BasicDemo,
  },
  {
    path: "/strategy",
    name: "strategyDemo",
    component: StrategyDemo,
  },
  {
    path: "/normal",
    name: "normalDemo",
    component: NormalDemo,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
