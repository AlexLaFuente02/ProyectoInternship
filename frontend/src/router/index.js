import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomePage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/LoginPage.vue") //LAZY-LOADING
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;