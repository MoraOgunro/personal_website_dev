import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePageView.vue";
import Portfolio from "../views/PortfolioView.vue";
import Dune from "/src/views/portfolio/DuneWebsiteView.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/portfolio",
    name: "portoflio",
    component: Portfolio,
  },
  {
    path: "/portfolio/dune",
    name: "dune",
    component: Dune,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
