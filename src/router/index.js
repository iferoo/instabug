import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login";
import NotFound from "../views/NotFound";
import Welcome from "../views/Welcome";

const routes = [
  {
    path: "/login",
    name: "LoginPage",
    component: Login,
    redirect: localStorage.getItem("email") && "/welcome",
  },
  {
    path: "/welcome",
    name: "WelcomePage",
    component: Welcome,
    redirect: !localStorage.getItem("email") && "/login",
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: NotFound,
  },
  {
    path: "/",
    redirect: "/login",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
