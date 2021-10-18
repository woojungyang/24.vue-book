import Vue from "vue";
import VueRouter from "vue-router";
import List from "../views/List.vue";
import ListInfinite from "../views/ListInfinite.vue";
import View from "../views/View.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "List",
    component: List,
  },
  {
    path: "/infinite",
    name: "ListInfinite",
    component: ListInfinite,
  },
  {
    path: "/view/:idx",
    name: "View",
    component: View,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
