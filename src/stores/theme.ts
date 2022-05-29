import { defineStore } from "pinia";

enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

const getDOMTheme = () => {
  return localStorage.getItem("arco-theme") ? Theme.DARK : Theme.LIGHT;
};

export const useThemeStore = defineStore({
  id: "theme",
  state: () => ({
    theme: getDOMTheme(),
  }),
  getters: {
    isDarkTheme: () => (getDOMTheme() === Theme.DARK ? true : false),
  },
  actions: {
    setDOMLightTheme() {
      document.body.removeAttribute("arco-theme");
      localStorage.removeItem("arco-theme");
    },
    setDOMDarkTheme() {
      document.body.setAttribute("arco-theme", "dark");
      localStorage.setItem("arco-theme", "dark");
    },
    setThemeLight() {
      this.theme = Theme.LIGHT;
      this.setDOMLightTheme();
    },
    setThemeDark() {
      this.theme = Theme.DARK;
      this.setDOMDarkTheme();
    },
  },
});
