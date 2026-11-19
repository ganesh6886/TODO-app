import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Change this to "/YOUR_REPOSITORY_NAME/" before deploying to GitHub Pages.
  base: "/todo-app/"
});
