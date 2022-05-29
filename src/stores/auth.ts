import { defineStore } from "pinia";

const getDOMAuthToken = () => {
  return localStorage.getItem("user-token") ?? false;
};

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    token: getDOMAuthToken(),
  }),
  getters: {
    isLoggedIn(): boolean {
      return !!this.token;
    },
  },
  actions: {
    removeDOMAuthToken() {
      localStorage.removeItem("user-token");
    },
    setDOMAuthToken(token: string) {
      localStorage.setItem("user-token", token);
    },
    setToken(token: string) {
      this.token = token;
      this.setDOMAuthToken(token);
    },
    removeAuthToken() {
      this.token = false;
      this.removeAuthToken();
    },
  },
});
