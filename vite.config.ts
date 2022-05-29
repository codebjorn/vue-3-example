import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vitePluginForArco from "@arco-plugins/vite-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vitePluginForArco({
      style: true,
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
