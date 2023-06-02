import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    // proxy:{
    //   // https://wisecloud-sg.wiseasy.com/
    // }

    proxy: {
      "/proxy": {
        target: "https://wisecloud-sg.wiseasy.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/proxy/, ""),
      },
    },
  },
});
