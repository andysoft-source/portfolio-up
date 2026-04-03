import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

dotenv.config(); // Load .env variables

export default defineConfig({
  plugins: [react()],
  server: {
    // Listen on all interfaces so LAN devices can use http://<this-pc-ip>:5173
    host: true,
    port: 5173,
  },
});
