import { createRouter, createWebHistory } from "vue-router";
import {
  Home,
  Media,
  Posts,
  Profile,
  Settings,
  Login,
  Register,
} from "@/pages";
import {
  redirectUnLogged,
  redirectLogged,
  redirectLoggedOut,
} from "@/router/utils";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        title: "Home Page - Example App",
      },
      beforeEnter: redirectUnLogged,
    },
    {
      path: "/media",
      name: "media",
      component: Media,
      meta: {
        title: "Media - Example App",
      },
      beforeEnter: redirectUnLogged,
    },
    {
      path: "/posts",
      name: "posts",
      component: Posts,
      meta: {
        title: "Posts - Example App",
      },
      beforeEnter: redirectUnLogged,
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile,
      meta: {
        title: "Profile - Example App",
      },
      beforeEnter: redirectUnLogged,
    },
    {
      path: "/settings",
      name: "settings",
      component: Settings,
      meta: {
        title: "Settings - Example App",
      },
      beforeEnter: redirectUnLogged,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      beforeEnter: redirectLogged,
    },
    {
      path: "/logout",
      name: "logout",
      component: Login,
      beforeEnter: redirectLoggedOut,
    },
    {
      path: "/register",
      name: "register",
      component: Register,
      beforeEnter: redirectLogged,
    },
  ],
});

export default router;
