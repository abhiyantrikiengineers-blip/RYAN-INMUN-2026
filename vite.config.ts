import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: 8080,
  },
  plugins: [
    // TanStack Start (SSR + file-based routing)
    tanstackStart(),
    // React plugin
    viteReact(),
    // Tailwind CSS v4
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
