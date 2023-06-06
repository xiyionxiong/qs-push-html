import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig, splitVendorChunkPlugin } from "vite";
import viteCompression from "vite-plugin-compression";
function _resolve(dir: string) {
  return path.resolve(__dirname, dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    splitVendorChunkPlugin(),
    viteCompression({
      algorithm: "gzip", // 压缩格式：gzip、brotliCompress,
      deleteOriginFile: false,
      threshold: 1024 * 10,
    }),
  ],
  build: {
    minify: "terser",
    target: "ES2020",
    terserOptions: {
      compress: {
        //生产环境时移除console
        drop_console: true,
        drop_debugger: true,
      },
    },
    //   关闭文件计算
    reportCompressedSize: false,
    //   关闭生成map文件 可以达到缩小打包体积
    sourcemap: false, // 这个生产环境一定要关闭，不然打包的产物会很大
    rollupOptions: {
      output: {
        chunkFileNames: "[name]-[hash].js", // 引入文件名的名称
        entryFileNames: "[name]-[hash].js", // 包的入口文件名称
        assetFileNames: "[name]-[hash].[ext]", // 资源文件像 字体，图片等
        manualChunks: {
          "@styled-components": ["styled-components"],
          "@react-dom": ["react-dom"],
          "@zustand": ["zustand"],
          "@react": ["react"],
          "@axios": ["axios"],
          "@crypto-js": ["crypto-js"],
          "@nprogress": ["nprogress"],
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": _resolve("src"),
    },
  },
  server: {
    host: "0.0.0.0",

    proxy: {
      "/proxy": {
        target: "https://wisecloud-sg.wiseasy.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/proxy/, ""),
      },
    },
  },
});
