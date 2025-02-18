import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": {} 
  },
  base: "/", 
  build: {
    outDir: "dist", 
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // `@` represents `src/`
    },
  },
});
