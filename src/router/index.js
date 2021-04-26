import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import News from "../views/News.vue";
import Charge from "../views/Charge.vue";
import Reserve from "../views/Reserve.vue";
import Login from "../views/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { title: "首頁" },
  },
  {
    path: "/about",
    name: "About",
    component: About,
    meta: { title: "關於我們" },
  },
  {
    path: "/news",
    name: "News",
    component: News,
    meta: { title: "最新消息" },
  },
  {
    path: "/charge",
    name: "Charge",
    component: Charge,
    meta: { title: "消費方式" },
  },
  {
    path: "/reserve",
    name: "Reserve",
    component: Reserve,
    meta: { title: "場地預約" },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { title: "登入" },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
