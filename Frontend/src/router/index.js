import { createRouter, createWebHistory } from "vue-router";
import home from "../components/newUserComponents/home.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: home,
  },
  {
    path: "/login",
    name: "login",
    component: () => import('../components/newUserComponents/login.vue') //LAZY-LOADING
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
