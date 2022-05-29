import type { RouteLocationNormalized, NavigationGuardNext } from "vue-router";

export const redirectUnLogged = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  if (!localStorage.getItem("user-token")) {
    return next({ path: "/login" });
  }

  return next();
};

export const redirectLogged = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  if (localStorage.getItem("user-token")) {
    return next({ path: "/" });
  }

  return next();
};

export const redirectLoggedOut = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  localStorage.removeItem("user-token");
  return next({ path: "/login" });
};
