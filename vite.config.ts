import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [react()],
    server: {
      allowedHosts: [process.env.VITE_ALLOWED_HOST || "localhost"],
      host: true,
      port: 4200,
      strictPort: true,
      watch: {
        usePolling: true,
        interval: 100,
      },
      hmr: {
        host: env.VITE_HOST,
        protocol: "ws",
        port: 4200,
      },
    },
  };
});